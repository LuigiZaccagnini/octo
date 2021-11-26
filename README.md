# Octo

A tool that allows you to generate static sites based off of text data and markdown.

## Install

### Package Install Mac, Linux & Windows

- Make sure you have [Node LTS](https://nodejs.org/en/download/) downloaded.
- Run `npm i octo-ssg -g` in terminal/powershell/cmd.
- Start using Octo!

## Features

### Input

The `-i or --input` flag means the input path. This will look for all texts files with the given path. You can give a .txt file as input or a directory. This is a required field for the program to work. Any files/directories with spaces should be entered with quotes `octo -i "Sherlock Holmes Selected Stories/test.txt"`.

#### Examples

##### File Input

This will take the content from the text file and output a HTML file.

`octo -i test.txt`

##### Directory Input

This will go though a directory named test and look for all nested .txt files.

`octo -i test`

### Output

The output allows the user to specify the path where the files/directories can be exported. This is not a required field and will default to './dist' if no option is given.

#### Examples

The `-o or --output` flag means the output path. This will create a folder called htmlFiles outside of the current directory.

`octo -i test.txt -o ../hmtlFiles`

### Markdown File Input

If a markdown file `.md` is input, the tool will convert all markdown features into appropriate HTML tags.

#### Example

##### Input

`octo -i markdown.md`

```
Hello This is Markdown file

How are you?

# This text is Markdown text

#This is not Markdown text since it has a whitespace before "This" and "#"

Another text.
# This is another Markdown Text

End of file has been reach.
```

##### Output

```
<meta charset="utf-8"> <title>Filename</title> <meta name="viewport" content="width=device-width, initial-scale=1">

# Hello This is Markdown file

How are you?

# This text is Markdown text

#This is not Markdown text since it has a whitespace between "This" and "#"

Another text.

# This is another Markdown Text

End of file has been reach.

```

### Recursive File Searching

If a input is a directory, Octo will recursively go through all the child directories and convert all the text and Markdown files into HTML.

## Contributing

If you want to contribute to the project, head over to [CONTRIBUTING.md](https://github.com/LuigiZaccagnini/octo/blob/main/CONTRIBUTING.md)
