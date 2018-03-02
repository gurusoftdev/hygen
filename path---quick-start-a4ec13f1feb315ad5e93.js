webpackJsonp([0xe43a91ce442e],{272:function(e,n){e.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Express",doc:3,section:3,type:"doc"},fields:{slug:"/express"}}},{node:{frontmatter:{title:"Quick Start",doc:1,section:1,type:"doc"},fields:{slug:"/quick-start"}}},{node:{frontmatter:{title:"Packages",doc:1,section:2,type:"doc"},fields:{slug:"/packages"}}},{node:{frontmatter:{title:"Generators",doc:3,section:1,type:"doc"},fields:{slug:"/generators"}}},{node:{frontmatter:{title:"React Native",doc:2,section:3,type:"doc"},fields:{slug:"/react-native"}}},{node:{frontmatter:{title:"Redux",doc:1,section:3,type:"doc"},fields:{slug:"/redux"}}},{node:{frontmatter:{title:"Standalone",doc:2,section:2,type:"doc"},fields:{slug:"/standalone"}}},{node:{frontmatter:{title:"FAQ",doc:5,section:1,type:"doc"},fields:{slug:"/faq"}}},{node:{frontmatter:{title:"Templates",doc:2,section:1,type:"doc"},fields:{slug:"/templates"}}}]},postBySlug:{html:'<p>Install <code>hygen</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>$ npm i -g hygen</code></pre>\n      </div>\n<p>To use a generator, we supply a <code>GENERATOR ACTION</code> pair like so (here <code>mailer</code> and <code>new</code> are examples).</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>$ hygen mailer new\n         |      ^----- action\n         `------------ generator</code></pre>\n      </div>\n<p>Here\'s a quick run-down to get to your own generator:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>$ hygen init self\n$ hygen generator new --name awesome-generator\n$ hygen awesome-generator new --name hello\n</code></pre>\n      </div>\n<p>To see the <code>generator</code> help, you could always do:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>$ hygen generator <span class="token function">help</span>\n\nLoaded templates: _templates\nhelp:\nhygen generator new --name <span class="token punctuation">[</span>NAME<span class="token punctuation">]</span> --action <span class="token punctuation">[</span>ACTION<span class="token punctuation">]</span>\nhygen generator with-prompt --name <span class="token punctuation">[</span>NAME<span class="token punctuation">]</span> --action <span class="token punctuation">[</span>ACTION<span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<p>Congratz! you\'ve made a new generator called <code>awesome-generator</code>!</p>\n<p>Let\'s walk through what we just did.</p>\n<div class="custom-block-info"><p>You can also install <code>hygen</code> from Homebrew or download a standalone binary. For more, see <a href="/standalone">standalone</a>.</p></div>\n<h2 id="bootstrapping-your-project"><a href="#bootstrapping-your-project" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bootstrapping Your Project</h2>\n<p>Use <code>hygen init self</code> to start using it in your own project. <code>hygen</code> comes with two pre-built generators that helps you build your own - although it was built to ease the boilerplate fatigue for React, Redux, and Node.js it can be use for any technology really.</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code>$ cd your<span class="token punctuation">-</span>project\n<span class="gatsby-highlight-code-line">$ hygen init self\n</span>\nLoaded templates<span class="token punctuation">:</span> src/templates\n       <span class="token key atrule">added</span><span class="token punctuation">:</span> _templates/generator/with<span class="token punctuation">-</span>prompt/hello.ejs.t\n       <span class="token key atrule">added</span><span class="token punctuation">:</span> _templates/generator/with<span class="token punctuation">-</span>prompt/prompt.ejs.t\n       <span class="token key atrule">added</span><span class="token punctuation">:</span> _templates/generator/new/hello.ejs.t\n</code></pre>\n      </div>\n<p>This creates a project-local <code>_templates</code> folder for you at your source root with two helper generators that saves you time:</p>\n<ul>\n<li><code>hygen generator new --name generatorName</code> - builds a new generator for you</li>\n<li><code>hygen with-prompt new --name generatorName</code> - the same as before, only this one will be prompt driven.</li>\n</ul>\n<div class="custom-block-info"><h6 id="template-locality"><a href="#template-locality" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Template Locality</h6><p>On multi-team projects, each team can have their own templates right there in the shared repo.</p></div>\n<p>Still in your project root, let\'s create a new generator now:</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code>$ hygen generator new <span class="token punctuation">-</span><span class="token punctuation">-</span>name mygen\nLoaded templates<span class="token punctuation">:</span> _templates\n       <span class="token key atrule">added</span><span class="token punctuation">:</span> _templates/mygen/new/hello.ejs.t\n</code></pre>\n      </div>\n<p>And let\'s use it:</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code>$ hygen mygen new\n\nLoaded templates<span class="token punctuation">:</span> _templates\n<span class="gatsby-highlight-code-line">       <span class="token key atrule">added</span><span class="token punctuation">:</span> app/hello.js\n</span></code></pre>\n      </div>\n<div class="custom-block-info"><h6 id="did-you-notice"><a href="#did-you-notice" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Did You Notice?</h6><p>Instead of bundling the <code>hygen generator new</code> command in <code>hygen</code>, we chose to <em>copy</em> it to your local templates folder.</p><p>In this way you can even tweak the way <code>hygen</code> generates new generators. It scales to a set up with different teams, each with its own preference.</p></div>\n<p>That\'s it! we\'ve done a basic walkthrough of <code>hygen</code>. Next up is a detailed overview of <a href="/templates">templates</a> and <a href="/generators">generators</a>.</p>\n<h2 id="what-happens-if-i-dont-init"><a href="#what-happens-if-i-dont-init" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What Happens If I Don\'t Init?</h2>\n<p>After a fresh install, <code>hygen</code> will use the example generators it comes with, so that you can just try out the tool. This way you can build a sample generator and see how it works from the inside, or maybe copy its contents to have a better starting point.</p>\n<p>If you didn\'t <code>hygen init self</code> yet - let\'s try one:</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="gatsby-highlight-code-line">$ hygen example<span class="token punctuation">-</span>prompt new\n</span><span class="token punctuation">?</span> What\'s your message<span class="token punctuation">?</span> welcome\n\nLoaded templates<span class="token punctuation">:</span> src/templates\n       <span class="token key atrule">added</span><span class="token punctuation">:</span> hygen<span class="token punctuation">-</span>examples/mailers/unnamed.js\n       <span class="token key atrule">added</span><span class="token punctuation">:</span> hygen<span class="token punctuation">-</span>examples/mailers/hello/html.ejs\n       <span class="token key atrule">added</span><span class="token punctuation">:</span> hygen<span class="token punctuation">-</span>examples/mailers/hello/subject.ejs\n       <span class="token key atrule">added</span><span class="token punctuation">:</span> hygen<span class="token punctuation">-</span>examples/mailers/hello/text.ejs\n      <span class="token key atrule">inject</span><span class="token punctuation">:</span> hygen<span class="token punctuation">-</span>examples/mailers/hello/html.ejs\n</code></pre>\n      </div>\n<p>There are a few more ways to play with the examples:</p>\n<div class="gatsby-highlight">\n      <pre class="language-perl"><code><span class="token comment"># generate all files, with a name variable</span>\n$ hygen example<span class="token operator">-</span>prompt new <span class="token operator">--</span>name reporter\n\n\n<span class="token comment"># generate one specific file</span>\n$ hygen example<span class="token operator">-</span>prompt new<span class="token punctuation">:</span>mailer <span class="token operator">--</span>name reporter\n\n\n<span class="token comment"># generate all resources that correspond to a regular expression</span>\n$ hygen example<span class="token operator">-</span>prompt <span class="token string">\'new:.*html\'</span> <span class="token operator">--</span>name reporter\n</code></pre>\n      </div>\n<p>You made it to the end! nice! Now check out <a href="/templates">templates</a> and <a href="/generators">generators</a>.</p>',timeToRead:3,excerpt:"Install  hygen : To use a generator, we supply a  GENERATOR ACTION  pair like so (here  mailer  and  new  are examples). Here's a quick run…",frontmatter:{title:"Quick Start"},fields:{slug:"/quick-start"}}},pathContext:{slug:"/quick-start"}}}});
//# sourceMappingURL=path---quick-start-a4ec13f1feb315ad5e93.js.map