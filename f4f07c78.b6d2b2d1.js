(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(1),r=n(9),o=(n(0),n(161)),l={title:"Generators",id:"generators"},i={id:"generators",isDocsHomePage:!1,title:"Generators",description:"With hygen, every time you spot a repetitive task, or a hidden structure in files you're editing, you'll quickly make a new generator.",source:"@site/docs/generators.md",permalink:"/docs/generators",editUrl:"https://github.com/jondot/hygen/edit/master/website/docs/generators.md",sidebar:"sidebar",previous:{title:"Templates",permalink:"/docs/templates"},next:{title:"Extensibility",permalink:"/docs/extensibility"}},p=[{value:"Structure",id:"structure",children:[]},{value:"CLI Arguments",id:"cli-arguments",children:[]},{value:"Interactive Prompt",id:"interactive-prompt",children:[]},{value:"Advanced Interactive Prompt",id:"advanced-interactive-prompt",children:[]},{value:"Documenting Your Generators",id:"documenting-your-generators",children:[]},{value:"Selecting Parts of a Generator",id:"selecting-parts-of-a-generator",children:[]}],c={rightToc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"With ",Object(o.b)("inlineCode",{parentName:"p"},"hygen"),", every time you spot a repetitive task, or a hidden structure in files you're editing, you'll quickly make a new generator."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua{1,5,15}"}),"$ hygen generator new --name mailer\n                              `-------- just a name you pick.\n\nLoaded templates: _templates\n       added: _templates/mailer/new/hello.ejs.t\n                                       `------ your template file.\n\n\n$ hygen\n\nError: please specify a generator.\n\nAvailable actions:\ngenerator: new, with-prompt\nmailer: new\n    \\\n     `----------- your new generator is already here!\n")),Object(o.b)("p",null,"The moment we add a generator under ",Object(o.b)("inlineCode",{parentName:"p"},"_templates"),", it's ready to use. Here's ",Object(o.b)("inlineCode",{parentName:"p"},"hello.ejs.t")," that was placed in the template folder for you:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"---\nto: app/hello.js\n---\nconst hello = `\nHello!\nThis is your first hygen template.\n\nLearn what it can do here:\n\nhttps://github.com/jondot/hygen\n`\n\nconsole.log(hello)\n")),Object(o.b)("p",null,"To make real mailer, let's copy this file and rename it a bit:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ mv _templates/mailer/new/{hello.js,html.ejs.t}\n$ cp _templates/mailer/new/{html.ejs.t,text.ejs.t}\n")),Object(o.b)("p",null,"We use a ",Object(o.b)("inlineCode",{parentName:"p"},".t")," suffix because it disables our editor trying to be smart - use what ever you like. For this example these files represent the HTML and text forms of an email sender."),Object(o.b)("p",null,"[","[info]","]\n| ###### Creative Freedom\n| hygen doesn't care about file names or file types in your generator folders. It only cares about folder structure and the ",Object(o.b)("em",{parentName:"p"},"contents")," of your files."),Object(o.b)("p",null,"Also note that each template has a ",Object(o.b)("em",{parentName:"p"},"frontmatter")," delimited by a pair of ",Object(o.b)("inlineCode",{parentName:"p"},"---"),"'s. In our example, we have a special ",Object(o.b)("inlineCode",{parentName:"p"},"to:")," property which tells ",Object(o.b)("inlineCode",{parentName:"p"},"hygen")," where to put the generated file. We'll see more of these in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/templates"}),"templates"),"."),Object(o.b)("h2",{id:"structure"},"Structure"),Object(o.b)("p",null,"Let's look at our folder structure:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"_templates/\n  mailer/\n    new/\n      html.ejs.t\n      text.ejs.t\napp/\n  index.js\npackage.json\n")),Object(o.b)("p",null,"Every time you call it, ",Object(o.b)("inlineCode",{parentName:"p"},"hygen mailer new")," automagically picks up the closest ",Object(o.b)("inlineCode",{parentName:"p"},"_templates")," folder, and renders all files in ",Object(o.b)("inlineCode",{parentName:"p"},"mailer/new"),". In this case it's ",Object(o.b)("inlineCode",{parentName:"p"},"html.ejs.t")," and ",Object(o.b)("inlineCode",{parentName:"p"},"text.ejs.t"),"."),Object(o.b)("p",null,"As of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/jondot/hygen/pull/102"}),"PR 102")," Hygen will recursively walk your template folder, so that you can structure your generators as elaborately as you wish."),Object(o.b)("p",null,"[","[info]","]\n|###### Hygen is Contextual\n|",Object(o.b)("inlineCode",{parentName:"p"},"hygen"),' simplifies things by asserting "command structure is folder structure".\n|\n|\n|',Object(o.b)("inlineCode",{parentName:"p"},"hygen")," will pick up the ",Object(o.b)("inlineCode",{parentName:"p"},"_templates")," in your current working directory."),Object(o.b)("h2",{id:"cli-arguments"},"CLI Arguments"),Object(o.b)("p",null,"To give ",Object(o.b)("inlineCode",{parentName:"p"},"hygen")," arguments via CLI, we follow this pattern:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"$ hygen mailer new --name foobar --message hello --version 1\n")),Object(o.b)("p",null,"Any double-dash (",Object(o.b)("inlineCode",{parentName:"p"},"--"),") argument becomes a variable we can use later in our templates. In the example above we can use ",Object(o.b)("inlineCode",{parentName:"p"},"name"),", ",Object(o.b)("inlineCode",{parentName:"p"},"message")," and ",Object(o.b)("inlineCode",{parentName:"p"},"version"),"."),Object(o.b)("p",null,"Here's the contents of the template ",Object(o.b)("inlineCode",{parentName:"p"},"html.ejs.t")," with the variables in place:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"---\nto: app/emails/<%= name %>.html\n---\n<h1>Hello <%= name %></h1>\n<%= message %>\n(version <%= version %>)\n")),Object(o.b)("p",null,"Try making the text variant yourself by editing ",Object(o.b)("inlineCode",{parentName:"p"},"text.ejs.t"),". Note: you want to put it in the correct place with ",Object(o.b)("inlineCode",{parentName:"p"},"to:"),"."),Object(o.b)("h2",{id:"interactive-prompt"},"Interactive Prompt"),Object(o.b)("p",null,"To create an interactive generator, add ",Object(o.b)("inlineCode",{parentName:"p"},"prompt.js")," file to the generator root directory."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash{3,4}"}),"_templates/\n  mailer/\n    new/           <-- the mailer new generator\n      prompt.js    <-- your prompt file!\n      html.ejs.t\n      text.ejs.t\n")),Object(o.b)("p",null,"For example, to ask for the ",Object(o.b)("inlineCode",{parentName:"p"},"message")," input variable, add to ",Object(o.b)("inlineCode",{parentName:"p"},"prompt.js"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"module.exports = [\n  {\n    type: 'input',\n    name: 'message',\n    message: \"What's your message?\"\n  }\n]\n")),Object(o.b)("p",null,"The format is based on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/enquirer/enquirer#prompt-options"}),"enquirer"),". Let's use the ",Object(o.b)("inlineCode",{parentName:"p"},"message")," variable now:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html{4}"}),"---\nto: app/emails/<%= name %>.txt\n---\n<%= message %>\n")),Object(o.b)("p",null,"Note that the ",Object(o.b)("inlineCode",{parentName:"p"},"name")," variable has to come from the CLI. To generate, we'll do this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"$ hygen mailer new --name fancy-mailer\n")),Object(o.b)("p",null,"Which will ask the user for the ",Object(o.b)("inlineCode",{parentName:"p"},"message"),", and generate all contents."),Object(o.b)("h2",{id:"advanced-interactive-prompt"},"Advanced Interactive Prompt"),Object(o.b)("p",null,"It's possible to create a a multi-step prompt where you ask some questions, run some computation and ask some more questions."),Object(o.b)("p",null,"In addition, it's possible to skip prompting, or re-shape parameters that were given to you from either CLI or prompt, so that you can do it in a central place."),Object(o.b)("p",null,'You can "enable" advanced params and prompting by replacing your ',Object(o.b)("inlineCode",{parentName:"p"},"prompt.js")," file with an ",Object(o.b)("inlineCode",{parentName:"p"},"index.js")," file in your action:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"my-generator\n  my-action/\n    index.js\n    template1.ejs.t\n    template2.ejs.t\n")),Object(o.b)("p",null,"Here's how you can use ",Object(o.b)("inlineCode",{parentName:"p"},"index.js")," to build a two-step prompting flow. Instead of exporting an array of question types as with the ",Object(o.b)("inlineCode",{parentName:"p"},"prompt.js")," file, you now need to export an object with a function called ",Object(o.b)("inlineCode",{parentName:"p"},"prompt"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript{3}"}),"// my-generator/my-action/index.js\nmodule.exports = {\n  prompt: ({ prompter, args }) =>\n    prompter\n      .prompt({\n        type: 'input',\n        name: 'email',\n        message: \"What's your email?\"\n      })\n      .then(({ email }) =>\n        prompter.prompt({\n          type: 'input',\n          name: 'emailConfirmation',\n          message: `Please type your email [${email}] again:`\n        })\n      )\n}\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"prompt")," function gets a data structure with an ",Object(o.b)("inlineCode",{parentName:"p"},"prompter")," field you can use."),Object(o.b)("p",null,"For completeness, here is a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/jondot/hygen/issues/35"}),"a more elaborate use of prompts")," (thanks ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/jaykoontz"}),"@jaykoontz"),")."),Object(o.b)("p",null,"You can skip prompting conditionally using custom logic:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript{4,6}"}),"// my-generator/my-action/index.js\nmodule.exports = {\n  prompt: ({ prompter, args }) => {\n    if (args.age > 18) {\n      return Promise.resolve({ allow: true })\n    }\n    return prompter.prompt({\n      type: 'input',\n      name: 'age',\n      message: 'whats your age?'\n    })\n  }\n}\n")),Object(o.b)("p",null,"You can skip ",Object(o.b)("em",{parentName:"p"},"physically")," prompting and use ",Object(o.b)("inlineCode",{parentName:"p"},"params")," to build more sophisticated parameters out of your CLI parameters:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript{2}"}),"// my-generator/my-action/index.js\nmodule.exports = {\n  params: ({ args }) => {\n    return { moreConvenientName: args.foobamboozle }\n  }\n}\n")),Object(o.b)("p",null,"[","[info]","]\n| ###### Params and Prompts are The Same\n| If you think about it, prompting for variables or reshaping CLI arguments lead to the same goal: new parameters. But to make a future-proof API, we've separated the two intents to the ",Object(o.b)("inlineCode",{parentName:"p"},"prompt")," and ",Object(o.b)("inlineCode",{parentName:"p"},"params")," functions."),Object(o.b)("h2",{id:"documenting-your-generators"},"Documenting Your Generators"),Object(o.b)("p",null,"Since there's a special ",Object(o.b)("inlineCode",{parentName:"p"},"message")," prop you can use in any template, you can use that to build generator help screens. Ultimately, your generator should be documenting itself."),Object(o.b)("p",null,"Looking at our generator layout from before, we add a ",Object(o.b)("inlineCode",{parentName:"p"},"help")," action:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash{3,4}"}),"_templates/\n  mailer/\n    help/\n      index.ejs.t\n    new/\n      prompt.js\n      html.ejs.t\n      text.ejs.t\n")),Object(o.b)("p",null,"Our ",Object(o.b)("inlineCode",{parentName:"p"},"index.ejs.t")," is simply a blank template, with just a ",Object(o.b)("inlineCode",{parentName:"p"},"message:")," prop:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"---\nmessage: |\n  - hygen {bold mailer} new --name [NAME]\n---\n")),Object(o.b)("p",null,"The special ",Object(o.b)("inlineCode",{parentName:"p"},"|")," annotation is a YAML literal block. Should you need it, ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://learnxinyminutes.com/docs/yaml/"}),"here's a quick YAML refresher"),"."),Object(o.b)("p",null,"Note that in ",Object(o.b)("inlineCode",{parentName:"p"},"message")," you can have a special coloring syntax, which can spice up your self-documenting generators."),Object(o.b)("p",null,"Here's a few examples:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"{bold mailer}\n{red mailer}\n{underline mailer}\n{green mailer}\n")),Object(o.b)("p",null,"For more styles ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/chalk/chalk#styles"}),"check out chalk"),"."),Object(o.b)("h2",{id:"selecting-parts-of-a-generator"},"Selecting Parts of a Generator"),Object(o.b)("p",null,"In addition to what we've seen until now, ",Object(o.b)("inlineCode",{parentName:"p"},"hygen")," lets the user select parts of a generator."),Object(o.b)("p",null,"The complete form is:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"$ hygen GENERATOR ACTION:SUBACTION\n")),Object(o.b)("p",null,"Where ",Object(o.b)("inlineCode",{parentName:"p"},"SUBACTION")," is a regular expression or a simple string ",Object(o.b)("inlineCode",{parentName:"p"},"hygen")," uses to pick up the subset of templates you want from a generator."),Object(o.b)("p",null,"Using our mailer example, this generates only the text part:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"$ hygen mailer new:text --name textual-mailer\n")),Object(o.b)("p",null,"Because we have a file named ",Object(o.b)("inlineCode",{parentName:"p"},"text.ejs.t"),", the string ",Object(o.b)("inlineCode",{parentName:"p"},"text")," in ",Object(o.b)("inlineCode",{parentName:"p"},"new:text")," will match it."),Object(o.b)("p",null,"In the same way we could have used a proper regular expression:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"$ hygen mailer new:.*xt --name textual-mailer\n")),Object(o.b)("p",null,"That's about it for generators."),Object(o.b)("p",null,"That's it for now, you're invited to take a look at the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/faq"}),"FAQ"),", and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/packages"}),"Packages"),"."))}s.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=s(n),u=a,d=b["".concat(l,".").concat(u)]||b[u]||m[u]||o;return n?r.a.createElement(d,i(i({ref:t},c),{},{components:n})):r.a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);