(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(9),o=(n(0),n(161)),l={title:"Quick Start",id:"quick-start"},p={id:"quick-start",isDocsHomePage:!1,title:"Quick Start",description:"You can have plenty of ways to run hygen. Pick one of the following:",source:"@site/docs/quick-start.md",permalink:"/docs/quick-start",editUrl:"https://github.com/jondot/hygen/edit/master/website/docs/quick-start.md",sidebar:"sidebar",next:{title:"Templates",permalink:"/docs/templates"}},c=[{value:"Bootstrapping Your Project",id:"bootstrapping-your-project",children:[]},{value:"Invoking Generators",id:"invoking-generators",children:[]}],i={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can have plenty of ways to run ",Object(o.b)("inlineCode",{parentName:"p"},"hygen"),". Pick one of the following:"),Object(o.b)("p",null,"On macOS and Homebrew:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"$ brew tap jondot/tap\n$ brew install hygen\n")),Object(o.b)("p",null,"Globally with npm (or yarn):"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"$ npm i -g hygen\n")),Object(o.b)("p",null,"Or, if you like a no-strings-attached approach, use\nwith ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b"}),Object(o.b)("inlineCode",{parentName:"a"},"npx"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"$ npx hygen ...\n")),Object(o.b)("p",null,"Should any of these be confusing to you, check out the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/jondot/hygen/releases"}),"binary releases")," where you'll find a binary for every major platform."),Object(o.b)("p",null,"With this done, let's use a ",Object(o.b)("inlineCode",{parentName:"p"},"hygen")," generator."),Object(o.b)("p",null,"To use a generator, we supply a ",Object(o.b)("inlineCode",{parentName:"p"},"GENERATOR ACTION")," pair like so (here ",Object(o.b)("inlineCode",{parentName:"p"},"mailer")," and ",Object(o.b)("inlineCode",{parentName:"p"},"new")," are examples)."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"$ hygen mailer new [NAME]\n         |      ^----- action\n         `------------ generator\n")),Object(o.b)("p",null,"[","[info]","]\n| New in hygen 4.0.0: a positional ",Object(o.b)("inlineCode",{parentName:"p"},"NAME")," parameter to save a bit of typing. With versions prior to 4.0.0 you still have to use ",Object(o.b)("inlineCode",{parentName:"p"},"--name NAME"),"."),Object(o.b)("p",null,"Here's a quick run-down to get to your own generator:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ hygen init self\n$ hygen generator new awesome-generator\n$ hygen awesome-generator new hello\n")),Object(o.b)("p",null,"To see the ",Object(o.b)("inlineCode",{parentName:"p"},"generator")," help, you could always do:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ hygen generator help\n\nLoaded templates: _templates\nhelp:\nhygen generator new [NAME] --action [ACTION]\nhygen generator with-prompt [NAME] --action [ACTION]\n")),Object(o.b)("p",null,"Finally, use ",Object(o.b)("inlineCode",{parentName:"p"},"--dry")," to do a test-run of your generators."),Object(o.b)("p",null,"Congratz! you've made a new generator called ",Object(o.b)("inlineCode",{parentName:"p"},"awesome-generator"),"!"),Object(o.b)("p",null,"Let's walk through what we just did."),Object(o.b)("p",null,"[","[info]","]\n| You can also install ",Object(o.b)("inlineCode",{parentName:"p"},"hygen")," from Homebrew or download a standalone binary. For more, see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/standalone"}),"standalone"),"."),Object(o.b)("h2",{id:"bootstrapping-your-project"},"Bootstrapping Your Project"),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"hygen init self")," to start using it in your own project. ",Object(o.b)("inlineCode",{parentName:"p"},"hygen")," comes with two pre-built generators that helps you build your own - although it was built to ease the boilerplate fatigue for React, Redux, and Node.js it can be use for any technology really."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml{2}"}),"$ cd your-project\n$ hygen init self\n\nLoaded templates: src/templates\n       added: _templates/generator/with-prompt/hello.ejs.t\n       added: _templates/generator/with-prompt/prompt.ejs.t\n       added: _templates/generator/new/hello.ejs.t\n")),Object(o.b)("p",null,"This creates a project-local ",Object(o.b)("inlineCode",{parentName:"p"},"_templates")," folder for you at your source root with two helper generators that saves you time:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"hygen generator new generatorName")," - builds a new generator for you"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"hygen generator with-prompt new generatorName")," - the same as before, only this one will be prompt driven.")),Object(o.b)("p",null,"[","[info]","]\n|###### Template Locality\n|On multi-team projects, each team can have their own templates right there in the shared repo."),Object(o.b)("p",null,"Still in your project root, let's create a new generator now:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"$ hygen generator new mygen\nLoaded templates: _templates\n       added: _templates/mygen/new/hello.ejs.t\n")),Object(o.b)("p",null,"And let's use it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml{4}"}),"$ hygen mygen new\n\nLoaded templates: _templates\n       added: app/hello.js\n")),Object(o.b)("p",null,"[","[info]","]\n|###### Did You Notice?\n|Instead of bundling the ",Object(o.b)("inlineCode",{parentName:"p"},"hygen generator new")," command in ",Object(o.b)("inlineCode",{parentName:"p"},"hygen"),", we chose to ",Object(o.b)("em",{parentName:"p"},"copy")," it to your local templates folder.\n|\n|\n|In this way you can even tweak the way ",Object(o.b)("inlineCode",{parentName:"p"},"hygen")," generates new generators. It scales to a set up with different teams, each with its own preference."),Object(o.b)("p",null,"That's it! we've done a basic walkthrough of ",Object(o.b)("inlineCode",{parentName:"p"},"hygen"),". Next up is a detailed overview of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/templates"}),"templates")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/generators"}),"generators"),"."),Object(o.b)("h2",{id:"invoking-generators"},"Invoking Generators"),Object(o.b)("p",null,"There are more ways to play with a generator after you've built it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-perl"}),"# generate all files, with a 'name' variable\n$ hygen example-prompt new reporter\n\n\n# generate one specific file, picked up based on the substring 'mailer'\n$ hygen example-prompt new:mailer reporter\n\n\n# generate all resources that correspond to a regular expression\n$ hygen example-prompt 'new:.*html' reporter\n")),Object(o.b)("p",null,"You made it to the end! nice! Now check out ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/templates"}),"templates")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/generators"}),"generators"),"."))}b.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),b=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),s=b(n),m=a,d=s["".concat(l,".").concat(m)]||s[m]||u[m]||o;return n?r.a.createElement(d,p(p({ref:t},i),{},{components:n})):r.a.createElement(d,p({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);