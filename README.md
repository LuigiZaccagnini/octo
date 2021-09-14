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

<h3>Recursive File Searching</h3>
<p>If a input is a directory, Octo will recursively go through all the child directories and convert all 
    the text files into HTML.</p>
