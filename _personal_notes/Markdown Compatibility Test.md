# TYPOGRAPHY FUNCTIONALITY TEST

---

## Headings

Headings from h1 through h6 are constructed with a # for each level:

# h1 Heading

## h2 Heading

### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

_Unofficial_

## Tasks

 - [x] TaskDone
 - [ ] TaskNotDone

---

_Unofficial_
This
tests
single
line
break

---

## Horizontal Rules

`---  Three consecutive en-dashes`

---

# Body Copy

Bold
**rendered as bold text**

Italics
_rendered as italicised text_

Unofficial
Strikethrough
~~Strike through this text.~~

Blockquotes
>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. This is a blockquote.

---

## Lists

Unordered

A list of items in which the order of the items does not explicitly matter.

You may use any of the following symbols to denote bullets for each list item:

* valid bullet
- valid bullet
+ valid bullet
  - More

Nesting:

- Lorem ipsum dolor sit amet
- Consectetur adipiscing elit
  - Nulla volutpat aliquam velit
  - Phasellus iaculis neque
  - Purus sodales ultricies
+ Faucibus porta lacus fringilla vel
+ Aenean sit amet erat nunc


Ordered

A list of items in which the order of items does explicitly matter.

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit

TIP: If you just use 1. for each number, GitHub will automatically number each item. For example:

1. Lorem ipsum dolor sit amet
1. Consectetur adipiscing elit
1. Integer molestie lorem at massa

---

_Unofficial_
## Code

Single-line code:

`Use single apostrophes for one line.`

Use “code fences” \`\`\` to block in multiple lines of code.


```html
<h5 style="color:blue;">This is unrendered code in monospace and a selected language format...</h5>
```


```scala
 class Queue[T](
    private val leading: List[T],
    private val trailing: List[T]
  ) {
    private def mirror =
      if (leading.isEmpty)
        new Queue(trailing.reverse, Nil)
      else
        this

    def head = mirror.leading.head

    def tail = {
      val q = mirror
      new Queue(q.leading.tail, q.trailing)
    }

    def append(x: T) =
      new Queue(leading, x :: trailing)
  }
```

```text
ABCDEFGHIJKLM
NOPQRSTUVWXYZ
abcdefghijklm
nopqrstuvwxyz
1234567890
```
---

## Tables

Tables are created by adding pipes as dividers between each cell, and by adding a line of dashes (also separated by bars) beneath the header. Note that the pipes do not need to be vertically aligned.

| Option | Description                              |
| ------ | ---------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files.     |


Right aligned text

Adding a colon on the right side of the dashes below any heading will right align text for that column.

| Option |                              Description |
| -----: | ---------------------------------------: |
|   data | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
|    ext |     extension to be used for dest files. |

---

## Links

Basic link

[Assemble](http://assemble.io)

[Upstage](https://github.com/upstage/ “Visit Upstage!”)

_Unofficial_

Named anchors enable you to jump to the specified anchor point on the same page. For example, each of these chapters:

# Table of Contents
  * [Chapter 1](#chapter-1)
  * [Chapter 2](#chapter-2)
  * [Chapter 3](#chapter-3)
      will jump to these sections:

## Chapter 1 <a id=“chapter-1”></a>
Content for chapter one.

## Chapter 2 <a id=“chapter-2”></a>
Content for chapter one.

## Chapter 3 <a id=“chapter-3”></a>
Content for chapter one.
Specific placement of the anchor tag seems to be arbitrary. They are placed inline here since it seems to be unobtrusive, and it works.

---

Unofficial


## Images

Images have a similar syntax to links but include a preceding exclamation point.

![Minion](http://octodex.github.com/images/minion.png)