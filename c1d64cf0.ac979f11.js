(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{187:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return l}));n(210),n(211),n(207),n(212),n(213),n(214);var o=n(208);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var a={id:"advanced-topics-managing-focus",title:"Managing Focus"},r=[{value:"Translating container clicks to focus",id:"translating-container-clicks-to-focus",children:[]}],c={rightToc:r},s="wrapper";function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(o.b)(s,i({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Managing text input focus can be a tricky task within React components. The browser\nfocus/blur API is imperative, so setting or removing focus via declarative means\npurely through ",Object(o.b)("inlineCode",{parentName:"p"},"render()")," tends to feel awkward and incorrect, and it requires\nchallenging attempts at controlling focus state."),Object(o.b)("p",null,"With that in mind, at Facebook we often choose to expose ",Object(o.b)("inlineCode",{parentName:"p"},"focus()")," methods\non components that wrap text inputs. This breaks the declarative paradigm,\nbut it also simplifies the work needed for engineers to successfully manage\nfocus behavior within their apps."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Editor")," component follows this pattern, so there is a public ",Object(o.b)("inlineCode",{parentName:"p"},"focus()"),"\nmethod available on the component. This allows you to use a ref within your\nhigher-level component to call ",Object(o.b)("inlineCode",{parentName:"p"},"focus()")," directly on the component when needed."),Object(o.b)("p",null,"The event listeners within the component will observe focus changes and\npropagate them through ",Object(o.b)("inlineCode",{parentName:"p"},"onChange")," as expected, so state and DOM will remain\ncorrectly in sync."),Object(o.b)("h2",{id:"translating-container-clicks-to-focus"},"Translating container clicks to focus"),Object(o.b)("p",null,"Your higher-level component will most likely wrap the ",Object(o.b)("inlineCode",{parentName:"p"},"Editor")," component in a\ncontainer of some kind, perhaps with padding to style it to match your app."),Object(o.b)("p",null,"By default, if a user clicks within this container but outside of the rendered\n",Object(o.b)("inlineCode",{parentName:"p"},"Editor")," while attempting to focus the editor, the editor will have no awareness\nof the click event. It is therefore recommended that you use a click listener\non your container component, and use the ",Object(o.b)("inlineCode",{parentName:"p"},"focus()")," method described above to\napply focus to your editor."),Object(o.b)("p",null,"The ",Object(o.b)("a",i({parentName:"p"},{href:"https://github.com/facebook/draft-js/tree/master/examples/draft-0-10-0/plaintext"}),"plaintext editor example"),",\nfor instance, uses this pattern."))}l.isMDXComponent=!0}}]);