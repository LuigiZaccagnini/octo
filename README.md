<h1>Octo</h1>
<p>A tool that allows you to generate static sites based off of text data.</p>

<h2>Tool Setup</h2>
<h3>Global</h3>
<p>This builds Octo so you can access it anywhere on your computer using the <code>octo</code>
command. If you don't want to install Octo globally, you can follow the non-global setup.</p>
<ul>
    <li>Clone the repository</li>
    <li><code>cd</code> into the folder</li>
    <li>run <code>npm i</code> to install all dependencies</li>
    <li>run <code>npm install -g .</code></li>
</ul>

<h3>Non-Global</h3>
<ul>
    <li>Clone the repository</li>
    <li><code>cd</code> into the folder</li>
    <li>run <code>npm i</code> to install all dependencies</li>
    <li><code>cd</code> into the <code>bin</code></li>
    <li>run <code>node app</code></li>
</ul>

<h2>Features</h2>

<h3>Input</h3>
<p>The <code>-i or --input</code> flag means the input path. This will look for all texts files 
    with the given path. You can give a .txt file as input or a directory. 
    This is a required field for the program to work. Any files/directories with spaces should be 
    entered with quotes <code>octo -i "Sherlock Holmes Selected Stories/test.txt"</code>.
    <b>Only text files work with this program.</b></p>

<h4>Examples</h4>
<h5>File Input</h5>
<p>This will take the content from the text file and output a HTML file.</p>
<pre>
    octo -i test.txt
</pre>

<h5>Directory Input</h5>
<p>This will go though a directory named test and look for all nested .txt files.</p>
<pre>
    octo -i test
</pre>

<h3>Output</h3>
<p>
    The output allows the user to specify the path where the files/directories can be exported. 
    This is not a required field and will default to './dist' if no option is given.
</p>

<h4>Examples</h4>
<p>The <code>-o or --output</code> flag means the output path. This will create a folder called htmlFiles outside of 
    the current directory.</p>
<pre>
    octo -i test.txt -o ../hmtlFiles
</pre>

<h3>Markdown File Input</h3>
<p>If a markdown file <code>.md</code> is input, the tool will convert all markdown features into appropriate HTML tags.</p>
<h4>Example</h4>

<h5>Input</h5>
<pre>
    octo -i markdown.md
</pre>

<pre>
Hello This is Markdown file


How are you?

# This text is Markdown text

#This is not Markdown text since it has a whitespace before "This" and "#"

Another text.
# This is another Markdown Text

End of file has been reach.
</pre>

<h5>Output</h5>

```
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Filename</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <h1>Hello This is Markdown file</h1>
        <p>How are you?</p>
        <br />
        <h1>This text is Markdown text</h1>
        <br />
        <p>#This is not Markdown text since it has a whitespace between "This" and "#"</p>
        <br />
        <p>Another text.</p>
        <h1>This is another Markdown Text</h1>
        <br />
        <p>End of file has been reach.</p>
    </body>
</html>
```

<h3>Recursive File Searching</h3>
<p>If a input is a directory, Octo will recursively go through all the child directories and convert all 
    the text and Markdown files into HTML.</p>
