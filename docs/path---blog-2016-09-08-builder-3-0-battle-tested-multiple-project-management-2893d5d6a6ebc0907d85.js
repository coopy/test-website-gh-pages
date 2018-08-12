webpackJsonp([0xca5cb71ea23e],{725:function(n,s){n.exports={data:{markdownRemark:{html:'<p>Today we’re excited to announced the release of Builder 3.0, which contains improvements based on our experience using Builder in more than 100 projects over the past 10 months.</p>\n<p>Builder solves the problem of multiple projects needing the same dependencies, configuration, and npm tasks. For example, every time we create a new repository for a React component, we can use a Builder “archetype” that automatically provides our standard Babel, eslint, and webpack settings. We love using npm <code>scripts</code> for our tasks, so the archetype also provides a base set of tasks for things like building, testing, running a development server, etc.</p>\n<p>It does more than that, but you should check out <a href="https://formidable.com/open-source/builder/">the Builder homepage</a> to read more. Let’s talk about this release!</p>\n<h2>What’s New</h2>\n<p>The focus of version 3.0 was making Builder more production-ready. Here are a few changes we made along those lines.</p>\n<h3>spawn vs. exec</h3>\n<p>Node’s <code>child_process</code> module offers two ways to launch a child process: <code>spawn</code> and <code>exec</code>. <code>spawn</code> accepts an executable to run and an array of arguments to pass it, while <code>exec</code> takes a single command string, exactly as you’d type it on the command line.</p>\n<p>If you think about what tasks look like in an npm config, they&#8217;re all complete command strings:</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"babel --out-dir lib src"</span><span class="token punctuation">,</span>\n    <span class="token property">"clean"</span><span class="token operator">:</span> <span class="token string">"rimraf lib"</span><span class="token punctuation">,</span>\n    <span class="token property">"prepublish"</span><span class="token operator">:</span> <span class="token string">"npm run clean &amp;amp;&amp;amp; npm run build"</span><span class="token punctuation">,</span>\n    <span class="token property">"test"</span><span class="token operator">:</span> <span class="token string">"karma start"</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>At first glance, these strings can’t be passed as commands to <code>spawn</code> without parsing them, because <code>spawn</code> needs the arguments separated into an array. We didn’t want to get into the business of parsing shell commands, so we reached for <code>exec</code>.</p>\n<p>We got by with this initial choice for a while, but eventually noticed issues. <code>exec</code> buffers output, meaning it captures all of the command’s output into a string. This means you need to worry about buffer size and tell <code>exec</code> what you want the maximum to be. To make this capturing work, it also means that your commands are writing their output to a pipe rather than the true <code>stdout</code> and <code>stderr</code> file descriptors. This shouldn’t really make a difference, but as we’ll see later, it does.</p>\n<p>To get around the output buffering issue while still avoiding any command parsing, we copied the way npm (and <code>exec</code> itself) runs commands:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">child_process<span class="token punctuation">.</span><span class="token function">spawn</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"sh"</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">"-c"</span><span class="token punctuation">,</span> <span class="token string">"command string here"</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n\n<span class="token comment">// on Windows:</span>\nchild_process<span class="token punctuation">.</span><span class="token function">spawn</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"cmd"</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">"/d /s /c"</span><span class="token punctuation">,</span> <span class="token string">"command string here"</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>This is exactly what <code>exec</code> does: it just passes the full command string along to the shell. But by taking matters into our own hands and using <code>spawn</code>, we also get better control over output buffering. Specifically, we can use the <code>stdio: "inherit"</code> option to allow child processes to write directly to <code>stdout</code> and <code>stderr</code>, without us doing any buffering in between. Much cleaner!</p>\n<h3>Pipes and <code>process.exit</code></h3>\n<p>When we were still using <code>exec</code> to launch processes, we noticed that some tasks would consistently have their output cut off. (This especially stood out for certain programs that used ANSI formatting codes, where getting cut off meant that the formatting was never reset. The remaining output from completely unrelated tasks was getting colored and underlined!) Was it due to the aforementioned maximum buffer size? This particular command wasn’t writing anywhere near that limit, so something else must be going on…</p>\n<p>We found that some Node programs use the following pattern (simplified here):</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Lint error: missing semicolon"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token operator">...</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Lint failed!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nprocess<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>This looks fine, and will appear to work under most circumstances. But it turns out there’s a <a href="https://github.com/nodejs/node-v0.x-archive/issues/3737">known gotcha</a> here. If you log a bunch of data, then call <code>process.exit</code>, <em>and</em> your process is piping its output to a parent Node process instead of writing to the standard output stream, then the output will be cut off! Anything after the first 8192 bytes (in our testing) won’t make it to the parent’s end of the pipe in time.</p>\n<p>Many programs never consider how they were launched or where their output is actually going, so this bug is easy to miss when you’re writing a Node CLI program. If you’re writing such a script and use <code>process.exit</code>, you can fix this issue like so:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">safeExit</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  process<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"exit"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Lint failed!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">safeExit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>This pattern will let the event loop and Node process end naturally, giving it time to flush its output instead of terminating immediately. Then when it’s ready to exit, it will still use the exit code you provided. (This was an issue with some programs that Builder was running, but we also updated Builder itself to use this pattern, in case another process wants to spawn Builder.)</p>\n<p>Switching to <code>spawn</code> with <code>stdio: "inherit"</code> also fixed the programs we were running that had this issue, since they were no longer writing to a pipe.</p>\n<h3>Better Windows support</h3>\n<p>For 3.0, we added AppVeyor to our continuous integration (CI) setup so that our test suite runs on Windows. This was tricky; since Builder is a task runner, our tests need to set environment variables, launch real processes, and capture output – all things that can (and do) differ across different platforms.</p>\n<p>Running on Windows revealed a few bugs that were previously undiscovered. For example, Windows has case-insensitive environment variables. If you set the <code>PATH</code> environment variable in a Node process, it is internally transformed to set <code>Path</code> on Windows. Builder now accounts for this behavior.</p>\n<h3>Some small niceties</h3>\n<p>We’ve made the <code>help</code> and <code>version</code> commands nicer to use by changing their default log level to be less noisy. Now you’ll see only the usage info, task list, and version number by default – unadultered by the internal task administrivia that we used to show.</p>\n<h2>Try it out</h2>\n<p>Check out the latest version of Builder like so:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code class="language-sh">npm install builder</code></pre>\n      </div>\n<p>And follow along or contribute here: <a href="https://github.com/FormidableLabs/builder">github.com/FormidableLabs/builder</a></p>\n<p>Thanks for reading!</p>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 9.090909090909092%; position: relative; height: 0; overflow: hidden;"\n          >\n            <iframe src="https://ghbtns.com/github-btn.html?user=formidablelabs&amp;repo=builder&amp;type=star&amp;count=true&amp;size=large" frameborder="0" style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n          </div>\n          </div>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 9.090909090909092%; position: relative; height: 0; overflow: hidden;"\n          >\n            <iframe src="https://ghbtns.com/github-btn.html?user=exogen&amp;type=follow&amp;count=true&amp;size=large" frameborder="0" scrolling="0" style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n          </div>\n          </div>',fields:{slug:"/blog/2016/09/08/builder-3-0-battle-tested-multiple-project-management/"},frontmatter:{id:23,authorId:8,categoryIds:[5],date:"2016-09-08",pageDescription:"",pageKeywords:"",pageTitle:"",path:"/2016/09/08/builder-3-0-battle-tested-multiple-project-management/",title:"Builder 3.0: Battle Tested Multiple Project Management"}}},pathContext:{slug:"/blog/2016/09/08/builder-3-0-battle-tested-multiple-project-management/",prev:{fields:{slug:"/blog/2016/08/29/terminal-charts-with-victory-cli/"},frontmatter:{authorId:9,categoryIds:[5,6,8],date:"2016-08-29",id:22,title:"Terminal Charts with Victory CLI"}}}}}});