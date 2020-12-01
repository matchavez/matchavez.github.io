# Unit Testing

> This page specifically checks each plug-in or enhancement outside of the theming. Standard markdown is checked in typography.md.

---

## Abbreviations

```material
markdown_extensions:
  - abbr
```

```example
The HTML specification
is maintained by the W3C.

*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
```

The HTML specification
is maintained by the W3C.

*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium

## Snippets

These are includes:

```material
markdown_extensions:
  - pymdownx.snippets
```

`--8<--​"testsnip.md"`

--8<-- 'testsnip.md'

Relative to the SITE base path, not where the containing document is. So if your file is in docs, and your include is in docs, you _still_ have to put a `base_path: docs` or go relative from the origin.


## Admonitions

!!! note
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

```material
!!! note
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.
```

## Buttons

[Subscribe to our mailing list](#){: .md-button }

`[Subscribe to our mailing list](#){: .md-button }`


## Code blocks

``` python 
def bubble_sort(items):
    for i in range(len(items)):
        for j in range(len(items) - 1 - i):
            if items[j] > items[j + 1]:
                items[j], items[j + 1] = items[j + 1], items[j]
```
[python]

> Blockquote to fake this:
> ``` python linenums="1"
> def bubble_sort(items):
>   for i in range(len(items)):
>       for j in range(len(items) - 1 - i):
>           if items[j] > items[j + 1]:
>               items[j], items[j + 1] = items[j + 1], items[j]
>```

Not sure how to make the language visible...

## Content tabs


## Data tables


## Footnotes


## Formatting


## Icons + Emojis


## Images


## Lists


## MathJax


## Meta tags


## Variables



