---
share: "true"
path: /docs
title: index
---

![](images/IMG_9324.jpg)
Near Arthur's Pass, New Zealand

---

# Nau Mai Haere Mai
Welcome everyone to my personal reference area and so-called Digital Garden. This is first a place for me to refer back to in the areas that I'm most interested, but I hope it can be of use to anyone here as well.


## Content Management

I have a bit of a habit with websites. Instead of constantly posting boatloads of content, I tend to play around with the systems themselves. Prior to the page you're viewing, I was using a system called [Grav](getgrav.org). It worked fine, but in my search for better, I've found a new system.

Grav stands out for its approach to being text-centric. It's markdown with a system-side interface. You set it up on a typical web server, and you don't need anything else. No database needed. Not bad, but it's an extra layer of nonsense... lots of plug-ins, backups, and other things to be managed.

I've decided to move forward to [Material for MKDocs](https://squidfunk.github.io/mkdocs-material/). This project doesn't seem like a "content management system", but indeed it is. It just has to be set up properly. So instead of installing and FTPing files to a server, installing PHP and whatever else, there's a simpler way. GitHub+Material is that way.

I'll post more about this later, but for now, the system is accessible like code - just any VSCode or text editor of your choice will do. Put the files on GitHub within the .io repo, set an Action to publish on check-in, and point your domain to the .io site. Material as a "theme" (it's more than that) is kept up-to-date through GitHub. All you do is write Markdown, and this time, you can do it without having to log into your own server to change things. (Granted Grav could be sonfigured to pull and build on a timer...)

The benefit is a fast static site, hosted on GitHub, and a far better setup than any Jekyll nonsense. No yaml needed. And static without having to build locally and repub; the build is in the repo.

I have some test pages and details that are scattered around, but if you're able to check in a change on GitHub, you can have a site like this, for free. 

I hope you find something here that's helpful to you if you've popped in. Thanks! 

<!-- Default Statcounter code for GitHub
https://matchavez.com -->
<script type="text/javascript">
var sc_project=12907738; 
var sc_invisible=1; 
var sc_security="9ec2d84c"; 
</script>
<script type="text/javascript"
src="https://www.statcounter.com/counter/counter.js"
async></script>
<noscript><div class="statcounter"><a title="Web Analytics
Made Easy - Statcounter" href="https://statcounter.com/"
target="_blank"><img class="statcounter"
src="https://c.statcounter.com/12907738/0/9ec2d84c/1/"
alt="Web Analytics Made Easy - Statcounter"
referrerPolicy="no-referrer-when-downgrade"></a></div></noscript>
<!-- End of Statcounter Code -->