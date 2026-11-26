"""Build a small topographic map of Te Waipounamu (South Island) for the
home-page sign, from AWS Terrain Tiles (terrarium encoding, zoom 8).

Output: docs/images/sign-map-south-island.webp, plus pin positions
(percent of image width/height) printed for the CSS.

The repo is public. Pins name public places only (the photo spot and a
city centre). Never add a home address or any private location here.
"""
import glob
import math
import os
import sys

import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage
from skimage import measure

SRC = sys.argv[1]
OUT = sys.argv[2]
Z = 8
X0, X1, Y0, Y1 = 246, 252, 159, 166

# ---- mosaic -------------------------------------------------------------
W = (X1 - X0 + 1) * 256
H = (Y1 - Y0 + 1) * 256
elev = np.zeros((H, W), dtype=np.float32)
for x in range(X0, X1 + 1):
    for y in range(Y0, Y1 + 1):
        im = np.asarray(Image.open(os.path.join(SRC, f"t_{x}_{y}.png")).convert("RGB")).astype(np.float32)
        e = im[..., 0] * 256 + im[..., 1] + im[..., 2] / 256 - 32768
        elev[(y - Y0) * 256:(y - Y0 + 1) * 256, (x - X0) * 256:(x - X0 + 1) * 256] = e


def lonlat_to_px(lon, lat):
    n = 2 ** Z
    fx = (lon + 180) / 360 * n
    fy = (1 - math.asinh(math.tan(math.radians(lat))) / math.pi) / 2 * n
    return (fx - X0) * 256, (fy - Y0) * 256


# ---- crop to the South Island and Rakiura --------------------------------
lon_min, lon_max, lat_max, lat_min = 166.3, 174.6, -40.35, -47.35
ax, ay = lonlat_to_px(lon_min, lat_max)
bx, by = lonlat_to_px(lon_max, lat_min)
ax, ay, bx, by = int(ax), int(ay), int(bx), int(by)
elev = elev[ay:by, ax:bx]
h, w = elev.shape

# land mask, minus the North Island (east of the Cook Strait line)
land = elev > 0.5
yy, xx = np.mgrid[0:h, 0:w]
cut_x, cut_y = lonlat_to_px(174.45, -41.2)
cut_x -= ax
cut_y -= ay
land &= ~((xx > cut_x) & (yy < cut_y))           # NI south coast and Kapiti area
nx, ny = lonlat_to_px(173.9, -40.75)
land &= ~((xx > nx - ax) & (yy < ny - ay))
# keep only big land bodies (drop specks and the NI remnants)
lab, nlab = ndimage.label(land)
sizes = ndimage.sum(land, lab, range(1, nlab + 1))
keep = np.zeros(nlab + 1, bool)
for i, s in enumerate(sizes, 1):
    if s > 400:
        keep[i] = True
land = keep[lab]

# trim the empty sea margin
rows = np.where(land.any(1))[0]
cols = np.where(land.any(0))[0]
pad = 14
r0, r1 = max(rows[0] - pad, 0), min(rows[-1] + pad, h)
c0, c1 = max(cols[0] - pad, 0), min(cols[-1] + pad, w)
elev = elev[r0:r1, c0:c1]
land = land[r0:r1, c0:c1]
ax += c0
ay += r0
h, w = elev.shape

# ---- shading -------------------------------------------------------------
e = np.where(land, np.maximum(elev, 0), 0)
es = ndimage.gaussian_filter(e, 0.8)
gy, gx = np.gradient(es)
az, alt = math.radians(315), math.radians(45)
slope = np.pi / 2 - np.arctan(np.hypot(gx, gy) / 55.0)
aspect = np.arctan2(-gx, gy)
shade = np.sin(alt) * np.sin(slope) + np.cos(alt) * np.cos(slope) * np.cos(az - aspect)
shade = np.clip(shade, 0, 1)

# hypsometric tint, Topo50-like: pale green lowland, cream, tan, white peaks
stops = [(0, (214, 222, 190)), (300, (226, 224, 192)), (900, (220, 205, 165)),
         (1600, (200, 180, 145)), (2200, (236, 232, 224)), (3800, (255, 255, 255))]
tint = np.zeros((h, w, 3), np.float32)
for c in range(3):
    tint[..., c] = np.interp(e, [s[0] for s in stops], [s[1][c] for s in stops])
lit = tint * (0.62 + 0.48 * shade[..., None])
sea = np.array([176, 205, 222], np.float32)
img = np.where(land[..., None], lit, sea)
img = np.clip(img, 0, 255).astype(np.uint8)

SCALE = 2
base = Image.fromarray(img).resize((w * SCALE, h * SCALE), Image.LANCZOS)

# ---- contours (brown, every 400 m; index line every 1200 m) and coast ------
from PIL import ImageDraw
draw = ImageDraw.Draw(base, "RGBA")
for level in range(400, 3600, 400):
    for cs in measure.find_contours(np.where(land, ndimage.gaussian_filter(e, 1.2), 0), level):
        if len(cs) < 8:
            continue
        pts = [(p[1] * SCALE, p[0] * SCALE) for p in cs[::2]]
        idx = level % 1200 == 0
        draw.line(pts, fill=(140, 92, 48, 150 if idx else 95), width=2 if idx else 1)
for cs in measure.find_contours(ndimage.gaussian_filter(land.astype(float), 0.7), 0.5):
    if len(cs) < 10:
        continue
    pts = [(p[1] * SCALE, p[0] * SCALE) for p in cs]
    draw.line(pts, fill=(40, 90, 120, 220), width=2)

# ---- final size and save --------------------------------------------------
TARGET_W = 380
th = round(base.height * TARGET_W / base.width)
out = base.resize((TARGET_W, th), Image.LANCZOS).filter(ImageFilter.UnsharpMask(1, 40, 2))
out.save(OUT, "WEBP", quality=82, method=6)
print("saved", OUT, out.size, os.path.getsize(OUT) // 1024, "KB")


def pin(name, lon, lat):
    px, py = lonlat_to_px(lon, lat)
    px -= ax
    py -= ay
    print(f"{name}: left {px / w * 100:.1f}%  top {py / h * 100:.1f}%")


pin("Arthur's Pass", 171.562, -42.942)
pin("Christchurch", 172.636, -43.532)
