"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[336],{5878:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=t(4848),a=t(8453),s=t(1470),l=t(9365);const i={sidebar_position:3},o="\u6a21\u5757",u={id:"a-v4/new-features",title:"\u6a21\u5757",description:"\u6240\u6709\u884c\u4e3a\u90fd\u5e94\u8be5\u662f\u4ece\u63a8\u8350\u7684\u6a21\u5757\u4e2d\u5bfc\u51fa\uff0c\u8fd9\u662f\u7edf\u4e00\u7684\u63a5\u53e3\u89c4\u8303\u3002",source:"@site/docs/a-v4/3-new-features.md",sourceDirName:"a-v4",slug:"/a-v4/new-features",permalink:"/docs/docs/a-v4/new-features",draft:!1,unlisted:!1,editUrl:"https://github.com/yunzai-org/docs/tree/main/docs/a-v4/3-new-features.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u59cb",permalink:"/docs/docs/a-v4/start-dev"},next:{title:"\u4e8b\u4ef6",permalink:"/docs/docs/a-v4/message-event"}},c={},d=[{value:"\u6838\u5fc3",id:"\u6838\u5fc3",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u5de5\u5177",id:"\u5de5\u5177",level:2},{value:"\u6570\u636e",id:"\u6570\u636e",level:2},{value:"\u539f\u795e",id:"\u539f\u795e",level:2}];function h(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u6a21\u5757",children:"\u6a21\u5757"}),"\n","\n",(0,r.jsx)(n.admonition,{title:"\u63d0\u793a",type:"tip",children:(0,r.jsx)(n.p,{children:"\u6240\u6709\u884c\u4e3a\u90fd\u5e94\u8be5\u662f\u4ece\u63a8\u8350\u7684\u6a21\u5757\u4e2d\u5bfc\u51fa\uff0c\u8fd9\u662f\u7edf\u4e00\u7684\u63a5\u53e3\u89c4\u8303\u3002"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6838\u5fc3",children:"\u6838\u5fc3"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import * as Core from 'yunzai/core'\n"})}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(l.A,{value:"apple",label:"\u51fd\u6570\u5e94\u7528",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="./message.ts"',children:"import { Messages } from 'yunzai/core'\nconst message = new Messages({\n  event: 'message.group'\n})\nmessage.response(/^(#|\\/)?\u4f60\u597d/, async e => {\n    e.reply('\u4f60\u597d')\n})\nexport default message\n"})})}),(0,r.jsx)(l.A,{value:"orange",label:"\u7c7b\u5e94\u7528",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="./message.ts"',children:"import { Plugin } from 'yunzai/core'\nexport default class App extends Plugin {\n  constructor () {\n    super()\n    this.priority = 700\n    this.rule = [\n        {\n          reg:/^(#|\\/)?\u4f60\u597d/,\n          fnc: this.hello.name\n        },\n      ]\n  }\n  async hello () {\n    this.e.reply('\u4f60\u597d')\n  }\n}\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import * as Config from 'yunzai/config'\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u914d\u7f6e\u6a21\u5757\u4e3b\u8981\u5206\u4e3a",(0,r.jsx)(n.code,{children:"\u7cfb\u7edf\u6027\u5e38\u91cf"}),"\u548c",(0,r.jsx)(n.code,{children:"\u7cfb\u7edf\u914d\u7f6e\u5668"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7cfb\u7edf\u6027\u5e38\u91cf"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { BOT_NAME } from 'yunzai/config'\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u662f\u65e0\u6cd5\u4fee\u6539\u7684,\u5b58\u5728\u4e8e\u5185\u5bb9,\u4e14\u8fd0\u884c\u540e\u4e0d\u53d8\u7684"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7cfb\u7edf\u914d\u7f6e\u5668"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { ConfigController } from 'yunzai/config'\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u914d\u7f6e\u5668\u5305\u542b\u4e86\u914d\u7f6e\u6587\u4ef6\u5185\u7684\u6240\u6709\u53c2\u6570."}),"\n",(0,r.jsx)(n.h2,{id:"\u5de5\u5177",children:"\u5de5\u5177"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import * as Utils from 'yunzai/utils'\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8be5\u6a21\u5757\u662f\u4e0e\u673a\u5668\u4eba\u8fd0\u884c\u65e0\u5173\u7684,\u4f46\u4e0econfig\u7cfb\u7edf\u6709\u5173\u7684."}),"\n",(0,r.jsx)(n.p,{children:"\u4e3b\u8981\u8f85\u52a9\u5f00\u53d1\u8005\u66f4\u5feb\u7684\u5b9e\u73b0\u4e1a\u52a1,\u800c\u4e0d\u518d\u9700\u8981\u5173\u6ce8\u65b9\u6cd5\u7684\u5b9e\u73b0"}),"\n",(0,r.jsx)(n.h2,{id:"\u6570\u636e",children:"\u6570\u636e"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u4e0d\u63a8\u8350\u4f7f\u7528\uff0c Redis \uff0cSqlite \u672a\u6765\u4e0d\u518d\u4e3b\u52a8\u8fde\u63a5"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import * as DB from 'yunzai/db'\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5f53\u524d\u6570\u636e\u5206\u4e3a",(0,r.jsx)(n.code,{children:"Redis"}),"\u548c",(0,r.jsx)(n.code,{children:"Sqlite"}),"\u6570\u636e\u5e93"]}),"\n",(0,r.jsx)(n.h2,{id:"\u539f\u795e",children:"\u539f\u795e"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u4e0d\u63a8\u8350\u4f7f\u7528\uff0c\u672a\u6765\u7248\u672c\u5c06\u5e9f\u5f03"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import * as MYS from 'yunzai/mys'\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u7c73\u6e38\u63a5\u53e3 -- \u975e\u7c73\u6e38\u63d2\u4ef6\u7981\u6b62\u4f7f\u7528"})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);var r=t(4164);const a={tabItem:"tabItem_Ymn6"};var s=t(4848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(6540),a=t(4164),s=t(3104),l=t(6347),i=t(205),o=t(7485),u=t(1682),c=t(679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[u,d]=m({queryString:t,groupId:a}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),g=(()=>{const e=u??f;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{g&&o(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(4848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),a=i[t].value;a!==r&&(u(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,x.jsx)(v,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function w(e){const n=(0,b.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var r=t(6540);const a={},s=r.createContext(a);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);