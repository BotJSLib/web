"use strict";(self.webpackChunkbotjs_web=self.webpackChunkbotjs_web||[]).push([[554],{9333:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=t(1527),a=t(8672);const s={sidebar_position:1},r="Command",c={id:"decorators/command",title:"Command",description:"Commands are the most common ways to trigger a bot. In all the platforms, commands are triggered by a prefix, which is /. On Whatsapp and Twitch, the prefix is not needed.",source:"@site/docs/decorators/command.md",sourceDirName:"decorators",slug:"/decorators/command",permalink:"/docs/decorators/command",draft:!1,unlisted:!1,editUrl:"https://github.com/BotJSLib/web/tree/main/docs/decorators/command.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Decorators",permalink:"/docs/category/decorators"},next:{title:"Event",permalink:"/docs/decorators/event"}},i={},d=[{value:"Usage",id:"usage",level:2}];function m(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"command",children:"Command"}),"\n",(0,o.jsxs)(n.p,{children:["Commands are the most common ways to trigger a bot. In all the platforms, commands are triggered by a prefix, which is ",(0,o.jsx)(n.code,{children:"/"}),". On Whatsapp and Twitch, the prefix is not needed."]}),"\n",(0,o.jsxs)(n.p,{children:["You can register a command by using the ",(0,o.jsx)(n.code,{children:"@Command"})," decorator.\nThis will automatically create it on all the platforms, for example it will be registered as a slash command on Discord."]}),"\n",(0,o.jsxs)(n.p,{children:["All the functions must return a ",(0,o.jsx)(n.code,{children:"MessageBuilder"})," object, which is used to create messages. You can learn more about it ",(0,o.jsx)(n.a,{href:"/docs/usage",children:"here"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:'import { Command, MessageBuilder } from "@michelo11/botjs";\n\nexport class ExampleCommand {\n\n    @Command("example", "This is an example command")\n    public exampleCommand() {\n        return new MessageBuilder("This is an example command");\n    }\n\n}\n'})})]})}function l(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},8672:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var o=t(959);const a={},s=o.createContext(a);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);