(()=>{var e={};e.id=229,e.ids=[229],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},92761:e=>{"use strict";e.exports=require("node:async_hooks")},6005:e=>{"use strict";e.exports=require("node:crypto")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},2955:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>d,routeModule:()=>x,tree:()=>c}),s(66345),s(38121),s(98139),s(35866),s(58258);var r=s(23191),a=s(88716),n=s(37922),i=s.n(n),o=s(95231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let c=["",{children:["(components)",{children:["(content)",{children:["playground",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,66345)),"C:\\Users\\Apurv Krishn Jha\\Desktop\\chit-chat-next-v2\\src\\app\\(components)\\(content)\\playground\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,38121)),"C:\\Users\\Apurv Krishn Jha\\Desktop\\chit-chat-next-v2\\src\\app\\(components)\\(content)\\layout.tsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,98139)),"C:\\Users\\Apurv Krishn Jha\\Desktop\\chit-chat-next-v2\\src\\app\\(components)\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,35866,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,58258)),"C:\\Users\\Apurv Krishn Jha\\Desktop\\chit-chat-next-v2\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,35866,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\Users\\Apurv Krishn Jha\\Desktop\\chit-chat-next-v2\\src\\app\\(components)\\(content)\\playground\\page.tsx"],p="/(components)/(content)/playground/page",u={require:s,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(components)/(content)/playground/page",pathname:"/playground",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},92079:(e,t,s)=>{Promise.resolve().then(s.bind(s,37682))},69686:(e,t,s)=>{Promise.resolve().then(s.bind(s,73175))},37682:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var r=s(10326),a=s(17577),n=s(29280),i=s(41840),o=s(35047),l=s(66775),c=s(84097);let d=()=>{let{toast:e}=(0,c.pm)(),[t,s]=(0,a.useState)([]),[d,p]=(0,a.useState)(!0),u=(0,o.useRouter)(),{isSignedIn:x,user:h,isLoaded:m}=(0,l.aF)();return((0,a.useEffect)(()=>{m&&(x?(async()=>{try{let e=await (0,i.XU)(h?.id);s(e?.response?.data||[])}catch(t){e({title:"Oops! Something went wrong.",description:"Unable to fetch AI models.",variant:"destructive"})}finally{p(!1)}})():u.push("/sign-in"))},[x,m,h?.id,u,e]),!m||d)?r.jsx("div",{className:"flex justify-center items-center h-full",children:"Loading..."}):r.jsx("div",{className:"flex justify-center items-center h-full",children:(0,r.jsxs)(n.Ph,{onValueChange:e=>u.push(`/playground/${e}`),children:[r.jsx(n.i4,{className:"w-[280px]",children:r.jsx(n.ki,{placeholder:"Select AI Model"})}),r.jsx(n.Bw,{children:(0,r.jsxs)(n.DI,{children:[r.jsx(n.n5,{children:"AI Models"}),t.length>0?t.map(e=>r.jsx(n.Ql,{value:e.originalAPIKey,children:e.organizationName},e.originalAPIKey)):r.jsx(n.Ph,{onValueChange:()=>u.push("/dashboard"),children:r.jsx(n.Ql,{value:"dashboaord",children:"Create AI Model."})})]})})]})})}},41840:(e,t,s)=>{"use strict";s.d(t,{$9:()=>n,BX:()=>l,Fi:()=>p,Lc:()=>i,Mo:()=>u,Pd:()=>d,Wi:()=>o,XU:()=>c});var r=s(44099);let a=(0,s(67990).K)({Production:!0}),n=async e=>(await r.Z.get(a+"/api/v1/newOrganization",{params:{UserId:e}})).data,i=async e=>(await r.Z.post(a+"/api/v1/addAiTrainingModel",e)).data,o=async e=>await r.Z.post(a+"/api/v1/upload",e),l=async e=>await r.Z.post(a+"/api/v1/upload/url",{resource_url:e}),c=async e=>(await r.Z.get(a+"/api/v1/addAiTrainingModel",{params:{UserId:e}})).data,d=async e=>(await r.Z.get(a+"/api/v1/addAiTrainingModel/key",{params:{originalAPIKey:e}})).data,p=async e=>await r.Z.post(a+"/api/v1/newOrganization",e),u=async e=>await r.Z.post(a+"/signup",e)},67990:(e,t,s)=>{"use strict";s.d(t,{K:()=>r});let r=e=>(e.Production,"https://api.chit-chat.fun")},73175:(e,t,s)=>{"use strict";s.d(t,{default:()=>P});var r=s(10326),a=s(17577),n=s(51223),i=s(90434),o=s(25155),l=s(88129),c=s(56093),d=s(94118);let p=(0,a.createContext)(void 0),u=()=>{let e=(0,a.useContext)(p);if(!e)throw Error("useSidebar must be used within a SidebarProvider");return e},x=({children:e,open:t,setOpen:s,animate:n=!0})=>{let[i,o]=(0,a.useState)(!1);return r.jsx(p.Provider,{value:{open:void 0!==t?t:i,setOpen:void 0!==s?s:o,animate:n},children:e})},h=({children:e,open:t,setOpen:s,animate:a})=>r.jsx(x,{open:t,setOpen:s,animate:a,children:e}),m=e=>(0,r.jsxs)(r.Fragment,{children:[r.jsx(f,{...e}),r.jsx(g,{...e})]}),f=({className:e,children:t,...s})=>{let{open:a,setOpen:i,animate:l}=u();return r.jsx(r.Fragment,{children:r.jsx(o.E.div,{className:(0,n.cn)("h-full px-4 py-4 hidden  md:flex md:flex-col bg-background w-[300px] flex-shrink-0",e),animate:{width:l?a?"200px":"60px":"200px"},onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),...s,children:t})})},g=({className:e,children:t,...s})=>{let{open:a,setOpen:i}=u();return r.jsx(r.Fragment,{children:(0,r.jsxs)("div",{className:(0,n.cn)("h-10 px-4 py-4 flex flex-row md:hidden  items-center justify-between bg-background w-full"),...s,children:[r.jsx("div",{className:"flex justify-end z-20 w-full",children:r.jsx(c.Z,{className:"text-gray-200",onClick:()=>i(!a)})}),r.jsx(l.M,{children:a&&(0,r.jsxs)(o.E.div,{initial:{x:"-100%",opacity:0},animate:{x:0,opacity:1},exit:{x:"-100%",opacity:0},transition:{duration:.3,ease:"easeInOut"},className:(0,n.cn)("fixed h-full w-full inset-0 bg-background p-10 z-[100] flex flex-col justify-between",e),children:[r.jsx("div",{className:"absolute right-10 top-10 z-50 text-gray-200",onClick:()=>i(!a),children:r.jsx(d.Z,{})}),t]})})]})})},y=({link:e,className:t,...s})=>{let{open:a,animate:l}=u();return(0,r.jsxs)(i.default,{href:e.href,className:(0,n.cn)("flex items-center justify-start gap-2  group/sidebar py-2",t),...s,children:[e.icon,r.jsx(o.E.span,{animate:{display:l?a?"inline-block":"none":"inline-block",opacity:l?a?1:0:1},className:"text-gray-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0",children:e.label})]})};var v=s(31797),j=s(66775),b=s(38787),w=s(94893),N=s(21965),k=s(58525);let P=({children:e})=>{let{user:t}=(0,j.aF)(),s=[{label:"Dashboard",href:"/dashboard",icon:r.jsx(v.Z,{className:"text-gray-200  h-5 w-5 flex-shrink-0"})},{label:"Organization",href:"/organization",icon:r.jsx(b.Z,{className:"text-gray-200 h-5 w-5 flex-shrink-0"})},{label:"Playground",href:"/playground",icon:r.jsx(w.Z,{className:"text-gray-200  h-5 w-5 flex-shrink-0"})},{label:"ChatbotConfig",href:"/chatbotconfig",icon:r.jsx(N.Z,{className:"text-gray-200 h-5 w-5 flex-shrink-0"})},{label:"Docs",href:"/docs",icon:r.jsx(k.Z,{className:"text-gray-200 h-5 w-5 flex-shrink-0"})}],[i,o]=(0,a.useState)(!1);return(0,r.jsxs)("div",{className:"flex h-screen",children:[r.jsx("div",{className:(0,n.cn)("h-full bg-background border-r border-border"),children:r.jsx(h,{open:i,setOpen:o,animate:!0,children:(0,r.jsxs)(m,{className:"justify-between gap-10",children:[r.jsx("div",{className:"flex flex-col flex-1 overflow-y-auto overflow-x-hidden",children:r.jsx("div",{className:"flex flex-col gap-2",children:s.map((e,t)=>r.jsx(y,{link:e},t))})}),r.jsx("div",{children:r.jsx(y,{link:{label:t?t.fullName:"Undefined",href:"#",icon:r.jsx(j.l8,{})}})})]})})}),r.jsx("div",{className:"flex-1 flex flex-col",children:e})]})}},29280:(e,t,s)=>{"use strict";s.d(t,{Bw:()=>f,DI:()=>p,Ph:()=>d,Ql:()=>y,i4:()=>x,ki:()=>u,n5:()=>g});var r=s(10326),a=s(17577),n=s(91481),i=s(941),o=s(96633),l=s(32933),c=s(51223);let d=n.fC,p=n.ZA,u=n.B4,x=a.forwardRef(({className:e,children:t,...s},a)=>(0,r.jsxs)(n.xz,{ref:a,className:(0,c.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",e),...s,children:[t,r.jsx(n.JO,{asChild:!0,children:r.jsx(i.Z,{className:"h-4 w-4 opacity-50"})})]}));x.displayName=n.xz.displayName;let h=a.forwardRef(({className:e,...t},s)=>r.jsx(n.u_,{ref:s,className:(0,c.cn)("flex cursor-pointer items-center justify-center py-1",e),...t,children:r.jsx(o.Z,{className:"h-4 w-4"})}));h.displayName=n.u_.displayName;let m=a.forwardRef(({className:e,...t},s)=>r.jsx(n.$G,{ref:s,className:(0,c.cn)("flex cursor-pointer items-center justify-center py-1",e),...t,children:r.jsx(i.Z,{className:"h-4 w-4"})}));m.displayName=n.$G.displayName;let f=a.forwardRef(({className:e,children:t,position:s="popper",...a},i)=>r.jsx(n.h_,{children:(0,r.jsxs)(n.VY,{ref:i,className:(0,c.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===s&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:s,...a,children:[r.jsx(h,{}),r.jsx(n.l_,{className:(0,c.cn)("p-1","popper"===s&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:t}),r.jsx(m,{})]})}));f.displayName=n.VY.displayName;let g=a.forwardRef(({className:e,...t},s)=>r.jsx(n.__,{ref:s,className:(0,c.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",e),...t}));g.displayName=n.__.displayName;let y=a.forwardRef(({className:e,children:t,...s},a)=>(0,r.jsxs)(n.ck,{ref:a,className:(0,c.cn)("relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...s,children:[r.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:r.jsx(n.wU,{children:r.jsx(l.Z,{className:"h-4 w-4"})})}),r.jsx(n.eT,{children:t})]}));y.displayName=n.ck.displayName,a.forwardRef(({className:e,...t},s)=>r.jsx(n.Z0,{ref:s,className:(0,c.cn)("-mx-1 my-1 h-px bg-muted",e),...t})).displayName=n.Z0.displayName},38121:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var r=s(19510),a=s(68570);let n=(0,a.createProxy)(String.raw`C:\Users\Apurv Krishn Jha\Desktop\chit-chat-next-v2\src\components\home\navigation\Sidebar.tsx`),{__esModule:i,$$typeof:o}=n;n.default,(0,a.createProxy)(String.raw`C:\Users\Apurv Krishn Jha\Desktop\chit-chat-next-v2\src\components\home\navigation\Sidebar.tsx#Logo`);let l=(0,a.createProxy)(String.raw`C:\Users\Apurv Krishn Jha\Desktop\chit-chat-next-v2\src\components\home\navigation\Sidebar.tsx#default`);s(71159);let c=({children:e})=>r.jsx("div",{children:r.jsx(l,{children:e})})},66345:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>i,__esModule:()=>n,default:()=>o});var r=s(68570);let a=(0,r.createProxy)(String.raw`C:\Users\Apurv Krishn Jha\Desktop\chit-chat-next-v2\src\app\(components)\(content)\playground\page.tsx`),{__esModule:n,$$typeof:i}=a;a.default;let o=(0,r.createProxy)(String.raw`C:\Users\Apurv Krishn Jha\Desktop\chit-chat-next-v2\src\app\(components)\(content)\playground\page.tsx#default`)}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[601,245,99,991,709],()=>s(2955));module.exports=r})();