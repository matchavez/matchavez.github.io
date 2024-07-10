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

`--8<--​ 'testsnip.md'`

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

```
markdown_extensions:
  - pymdownx.highlight:
      linenums: true
      linenums_style: pymdownx.inline
  - pymdownx.inlinehilite
  - pymdownx.superfences
  - pymdownx.keys
  - pymdownx.superfences
  - pymdownx.snippets
```


``` python linenums="1" hl_lines="2 3"
def bubble_sort(items):
    for i in range(len(items)):
        for j in range(len(items) - 1 - i):
            if items[j] > items[j + 1]:
                items[j], items[j + 1] = items[j + 1], items[j]
```

[python]

>  _Blockquote to fake this:_

>     python hl_lines="2 3"
>       def bubble_sort(items):
>        for i in range(len(items)):
>          for j in range(len(items) - 1 - i):
>            if items[j] > items[j + 1]:
>             items[j], items[j + 1] = items[j + 1], items[j]


## Content tabs

```
markdown_extensions:
  - pymdownx.tabbed
```

=== "Tab 1"
    Markdown **content**.

    Multiple paragraphs.

=== "Tab 2"
    More Markdown **content**.

    - list item a
    - list item b



```
=== "Tab 1"
    Markdown **content**.

    Multiple paragraphs.

=== "Tab 2"
    More Markdown **content**.

    - list item a
    - list item b
```


## Data tables

```
| Method      | Description                          | 
| :---------- | :----------------------------------- | 
| `GET`       | :material-check:     Fetch resource  | 
| `PUT`       | :material-check-all: Update resource | 
| `DELETE`    | :material-close:     Delete resource | 
```


| Method      | Description                          |
| :---------- | :----------------------------------- |
| `GET`       | :material-check:     Fetch resource  |
| `PUT`       | :material-check-all: Update resource |
| `DELETE`    | :material-close:     Delete resource |


## Footnotes

```
markdown_extensions:
  - footnotes
```

Lorem ipsum[^1] dolor sit amet, consectetur adipiscing elit.[^2]

[^2]:
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.


## Formatting

### Critic

To insert or remove text you can use {++insert me++} and {--remove me--} respectively. You can also denote a substitution with {~~substitute this~>with this~~}.

You can also highlight specific text with {==highlight me==}. Or even comment, which is generally done by highlighting text and following it with a comment: {==highlight me==}{>>Add a comment<<}.





## Icons + Emojis


## Images


## Lists


## MathJax


## Meta tags


## Variables



