(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[523],{1412:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/employees",function(){return s(9754)}])},3226:(e,t,s)=>{"use strict";s.d(t,{A:()=>d});var n=s(4848),l=s(6540),a=s(1106),c=s.n(a),i=s(3914),r=s(6188);function d(e){let{children:t}=e,[s,a]=(0,l.useState)(!0),d=[{path:"/admin",icon:r.cNj,label:"HOME"},{path:"/employees",icon:r.gdJ,label:"社員一覧"},{path:"/projects",icon:r.AgW,label:"案件一覧"},{path:"/employees/edit",icon:r.X46,label:"人員処理"},{path:"/attendance",icon:r.e68,label:"勤怠管理"},{path:"/education",icon:r.cNj,label:"新人教育"}];return(0,n.jsxs)("div",{className:"layout-container",children:[(0,n.jsx)("header",{className:"header",children:"ProtoSystem"}),(0,n.jsxs)("div",{className:"content",children:[(0,n.jsx)("nav",{className:"sidebar ".concat(s?"open":"hidden"),children:(0,n.jsx)("ul",{className:"menu",children:d.map(e=>(0,n.jsx)("li",{children:(0,n.jsxs)(c(),{href:e.path,className:"menu-item",children:[(0,n.jsx)(i.g,{icon:e.icon,style:{marginRight:"8px"}}),e.label]})},e.path))})}),(0,n.jsx)("button",{className:"sidebar-toggle-button",onClick:()=>{a(!s)},children:(0,n.jsx)(i.g,{icon:s?r.rCU:r.ckx,size:"lg"})}),(0,n.jsx)("main",{className:"main-content ".concat(s?"":"collapsed"),children:t})]})]})}},9754:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var n=s(4848),l=s(6540);s(7584);var a=s(3226),c=s(6715);let i=function(){let[e,t]=(0,l.useState)([]),[s,i]=(0,l.useState)([]),[r,d]=(0,l.useState)({}),[o,h]=(0,l.useState)(!1),[j,u]=(0,l.useState)(""),x=(0,c.useRouter)(),m=()=>{fetch("".concat("https://k6c1jaiusb.execute-api.ap-northeast-1.amazonaws.com/prod-DynamoDB-Users-GetALL","?tableName=").concat("Proto_User_Profiles")).then(e=>e.json()).then(e=>{if(e.data){let s=[...e.data].sort((e,t)=>e.UserID-t.UserID);t(s),i(s)}}).catch(e=>console.error("Error fetching employees:",e))};(0,l.useEffect)(()=>{m()},[]);let p=t=>{if(u(t),t){let s=t.toLowerCase();i(e.filter(e=>Object.values(e).some(e=>String(e).toLowerCase().includes(s))))}else b(r)},b=t=>{d(t);let s=e;if(Object.entries(t).forEach(e=>{let[t,n]=e;n&&(s=s.filter(e=>String(e[t]).includes(n)))}),j){let e=j.toLowerCase();s=s.filter(t=>Object.values(t).some(t=>String(t).toLowerCase().includes(e)))}i(s)};return(0,n.jsx)(a.A,{children:(0,n.jsxs)("div",{className:"employee-list",children:[(0,n.jsx)("h2",{children:"社員一覧"}),(0,n.jsx)("div",{className:"search-container",children:(0,n.jsx)("input",{type:"text",placeholder:"社員ID・氏名・メール・参画先 などで検索",value:j,onChange:e=>p(e.target.value),className:"search-input"})}),(0,n.jsxs)("div",{className:"button-container",children:[(0,n.jsx)("button",{className:"refresh-button",onClick:m,children:"ページの更新"}),(0,n.jsx)("button",{className:"add-button",onClick:()=>x.push("/employees/edit"),children:"新規追加"}),(0,n.jsx)("button",{className:"filter-button",onClick:()=>h(e=>!e),children:"フィルター"})]}),o&&(0,n.jsxs)("div",{className:"filter-options",children:[["id","name","status","project","money","in","out","mail"].map(e=>(0,n.jsxs)("div",{children:[(0,n.jsxs)("label",{children:[e,":"]}),(0,n.jsx)("input",{type:"text",value:r[e]||"",onChange:t=>{b({...r,[e]:t.target.value})}})]},e)),(0,n.jsx)("div",{children:(0,n.jsx)("button",{className:"reset-filter-button",onClick:()=>b({}),children:"フィルターを解除"})})]}),(0,n.jsxs)("table",{className:"styled-table",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"社員ID"}),(0,n.jsx)("th",{children:"氏名"}),(0,n.jsx)("th",{children:"状況"}),(0,n.jsx)("th",{children:"参画先"}),(0,n.jsx)("th",{children:"単価"}),(0,n.jsx)("th",{children:"参画開始"}),(0,n.jsx)("th",{children:"参画終了"}),(0,n.jsx)("th",{children:"スキルシート"}),(0,n.jsx)("th",{children:"操作"})]})}),(0,n.jsx)("tbody",{children:s.map(e=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e.UserID}),(0,n.jsx)("td",{children:e.Name}),(0,n.jsx)("td",{children:e.status}),(0,n.jsx)("td",{children:e.Vender}),(0,n.jsx)("td",{children:e.money}),(0,n.jsx)("td",{children:e.IN}),(0,n.jsx)("td",{children:e.OUT}),(0,n.jsx)("td",{children:e.SkillSheet?(0,n.jsx)("a",{href:e.SkillSheet,target:"_blank",rel:"noopener noreferrer",children:"参照"}):"なし"}),(0,n.jsx)("td",{children:(0,n.jsx)("button",{onClick:()=>x.push("/employees/edit?id=".concat(e._id)),children:"編集"})})]},e._id||e.UserID))})]})]})})}},7584:()=>{},6715:(e,t,s)=>{e.exports=s(4009)}},e=>{var t=t=>e(e.s=t);e.O(0,[69,269,636,593,792],()=>t(1412)),_N_E=e.O()}]);