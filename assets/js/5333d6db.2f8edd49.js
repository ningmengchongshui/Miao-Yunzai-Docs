"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[449],{4669:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=t(4848),i=t(8453);const r={sidebar_position:5},o="\u673a\u5236",a={id:"a-v4/plugins-event",title:"\u673a\u5236",description:"\u6b64\u5904\u5185\u5bb9\u9700\u8981\u9605\u8bfb\u524d\u7f6e\u7ae0\u8282",source:"@site/docs/a-v4/5-plugins-event.md",sourceDirName:"a-v4",slug:"/a-v4/plugins-event",permalink:"/docs/docs/a-v4/plugins-event",draft:!1,unlisted:!1,editUrl:"https://github.com/yunzai-org/docs/tree/main/docs/a-v4/5-plugins-event.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u4e8b\u4ef6",permalink:"/docs/docs/a-v4/message-event"},next:{title:"\u56fe\u7247",permalink:"/docs/docs/a-v4/image-dev"}},c={},l=[{value:"\u6d88\u606f",id:"\u6d88\u606f",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u673a\u5236",children:"\u673a\u5236"}),"\n",(0,s.jsx)(n.admonition,{title:"\u63d0\u793a",type:"tip",children:(0,s.jsx)(n.p,{children:"\u6b64\u5904\u5185\u5bb9\u9700\u8981\u9605\u8bfb\u524d\u7f6e\u7ae0\u8282"})}),"\n",(0,s.jsx)(n.h2,{id:"\u6d88\u606f",children:"\u6d88\u606f"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4e0a\u4e0b\u6587"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="./message.ts"',children:"export default class App extends plugin {\n  constructor () {\n    // super\u662f\u5fc5\u987b\u7684\n    super()\n    // \u5b9a\u4e49\u5339\u914d\n    this.rule = [\n        {\n          reg:/^(#|\\/)?\u767b\u5f55\u8d26\u53f7$/,\n          fnc: this.userLogin.name\n        },\n      ]\n  }\n  async userLogin () {\n    this.e.reply('\u8bf7\u8f93\u5165\u5bc6\u7801')\n    // highlight-next-line\n    this.setContext(this.vPassword.name)\n    return true\n  }\n  async vPassword(){\n    if(/^123456$/.test(this.e.msg)){\n    // highlight-next-line\n      this.finish(this.vPassword.name)\n    }else{\n      this.e.reply('\u8bf7\u8f93\u5165\u5bc6\u7801')\n    }\n    return true\n  }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(6540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);