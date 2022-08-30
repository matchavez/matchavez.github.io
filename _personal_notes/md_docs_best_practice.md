---
tags: [topic, here/is/a/nested/example]
---

# Code and Command Line Standard

##### An updated approach to documenting code within documents, as well as dealing with different command line situations and appropriate formatting.

The prior standard essentially stated the following, while being somewhat pedandtic:

- Code belongs in a code fence
- Command Line input should be in a fence, without a prompt
```- CL Output should be indicated through Blockquote

These concepts are reasonable, but after using this standard for a short time, it has proven somewhat impractical. Moving forward, the markdown standards will be:

- Code belongs in a language-marked code fence
- Command Line input and its related output should be bash-fenced together
- Spacing and prompts as detailed below
- Blockquote will be reserved for admonitions, and will no longer overload H3

---



## Code

All examples of “pure code” should be placed in a code fence:

​```scala
object HelloWorld {
    def main(args: Array[String]): Unit = {
        println(“Hello, world!”)
    }
}
```

Within a fence, the language is **required**, and no longer optional. Even if the language variable is set as a “non-language” such as “OUTPUT”, “plaintext”, or anything else, do not leave the fence variable blank. Also, be sure to **follow the standards with four-space indentation as per the coding guide**.

---

## Command Line input and output

The most significant change will be that related CL input and output should be fenced in the same fence block. This is a natural approach to associating command and response. It should be noted that while it will no longer be a “pure copy & paste” option for someone following directions, it it generally accepted that the risk is “blindly” copying will go away and that is more desirable than the benefit of just copy-paste. If the instructions are so easy that a simple copy-paste process seems best, consider providing a bash script.

#### Command Line input - Prompts

All commands to be entered at a prompt should be preceded by a prompt:

```sh
$ chmod +x hello_world.sh 
```
Output should follow commands:

```sh
$ ls -l

total 16
-rw-r--r--@ 1 matchavez  staff  2273 11 Jul 12:12 Code and Command Line Standard.md
-rw-r--r--@ 1 matchavez  staff   118 11 Jul 11:55 atom.md
```

Output that needs to be truncated should receive a “vertical elipsis”:

```sh
$ ls -l

total 24
drwx------@  3 matchavez  staff    96  1 Sep  2017 Applications
drwxr-xr-x   4 matchavez  staff   128 31 Oct  2017 Boostnote
drwx------+  6 matchavez  staff   192 11 Jul 12:13 Desktop
drwx------+ 35 matchavez  staff  1120 28 Jun 17:17 Documents
.
.
.
drwxr-xr-x  12 root       staff   384  7 Dec  2017 testsite
drwxr-xr-x  15 matchavez  staff   480 31 May 14:54 zettelkasten
```

Best practice is to place a line between the command and the response. This is not required, but will make reading easier, as well as better distinguishing commands and responses.

Also avoid acting as root where the prompt is a `#`. It is almost always preferrable to use `$ sudo` in place of a superuser.

---

## Spacing and Prompts

When using a prompt, follow with one space.

```sh
$ cd dir && touch this.md
```

Be aware that four spaces in front of markdown lines triggers “code”:

    This is four spaces in. There is no marking for language, so AVOID THIS EXEPTION.

When you are asking for a user to put something into a prompt / not a command, use a > within a code fence:

```sh
$ cd Documents
$ mkdir sph
$ cd sph
$ sphinx-quickstart

Welcome to the Sphinx quickstart utility.
Please enter values for the following settings (just press Enter to
accept a default value, if one is given in brackets).
Selected root path: .
You have two options for placing the build directory for Sphinx output.
Either, you use a directory “_build” within the root path, or you separate
“source” and “build” directories within the root path.
Separate source and build directories (y/n) [n]:

> y
```

This real example of a prompt will show limitations of markdown. In this standard, you will see that the four commands are valid, but the output that is related will be coloured with any other bash keywords. The Pygments python code behind colourising code does not have any way of distinguishing between keywords, so in the example, for, if, source, and build all get highlighted. That is the trade-off with not using separate fencing.

The prompt with the answer of y `> y` has an above line break; best practice for readability, but optional. The `> ` indicates that the user will be answering a prompt, but it is not a command. Be careful to not confuse usage of `$` and `>`.

Optionally, if the output is critical to split out for readability, use the “OUTPUT” marker on a split fence:

```sh
$ cd Documents
$ mkdir sph
$ cd sph
$ sphinx-quickstart
```
```OUTPUT
Welcome to the Sphinx quickstart utility.
Please enter values for the following settings (just press Enter to
accept a default value, if one is given in brackets).
Selected root path: .
You have two options for placing the build directory for Sphinx output.
Either, you use a directory “_build” within the root path, or you separate
“source” and “build” directories within the root path.
Separate source and build directories (y/n) [n]:
```
```sh
> y
```
This solves the concept of colourising output, but no longer tightly binds the commands, response, and prompt. Use this concept when it is more appropriate based on the content being created. This optional approach is not preferred, but may be a much better choice in some instances. Also, some editors have “linting” that does not “like” fences with a `$` and no output text following; specifically VisualStudio at the time of writing.

---

## Blockquote as Admonition

Instead of using H3, return to using Blockquote as a way to call attention:

> WARNING: This may self-destruct.

In using this as a callout, do so sparingly. Warn when a mistake may cause a large amount of damage.

**DO NOT** use admonitions as a substitute for poor phrasing:

> Note: You did that right if you see `return=0`

This example breaks many good practices:

First, if a “Note” admonition is used, it’s wrong. So is NOTE: or anything else that uses the word “note”. The document is a “note”, so don’t use it. It is trite, and its use obscures actual warnings. 

Second, the use of “Note” is often used in follow-up text where a specific condition can occur. If it’s a conditional outcome, use *italics* as a conditional indicator, not an admonition.

Finally, not everything is a note. If you are trying to convey caution, warning, information, or even danger, use those titles. Titles should be in ALL CAPS and never more than two words.

