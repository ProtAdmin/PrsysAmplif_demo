(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{7276:(o,e,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5008)}])},5008:(o,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>p});var t=n(4848);let r={aws_project_region:"ap-northeast-1",aws_cognito_region:"ap-northeast-1",aws_user_pools_id:"ap-northeast-1_h2Ira36fY",aws_user_pools_web_client_id:"128mcrh4ftsd1onp7q9vomaolp",oauth:{}};var i=n(2589),s=n(9384),l=n(8768),a=n(6540),c=n(6715);function u(){let o=window.location.origin;if(console.log("\uD83C\uDF0D Detected CloudFront Domain:",o),!["https://d1xj20n18wdq9y.cloudfront.net","https://d2f1z4tvqap875.cloudfront.net"].includes(o)){console.error("\uD83D\uDEAB Unauthorized access from ".concat(o,". Redirecting to error page.")),window.location.href="/unauthorized";return}let e="https://ap-northeast-1h2ira36fy.auth.ap-northeast-1.amazoncognito.com/login?client_id=128mcrh4ftsd1onp7q9vomaolp&response_type=token&scope=openid+profile+email"+"&redirect_uri=".concat(encodeURIComponent(o));console.log("\uD83D\uDD04 Redirecting to Cognito:",e),window.location.href=e}function d(){let[o,e]=(0,a.useState)(null),[n,r]=(0,a.useState)(!0),[i,d]=(0,a.useState)(!1),p=(0,c.useRouter)(),h=(0,a.useCallback)(async()=>{try{console.log("\uD83D\uDD0D Fetching user info...");let t=new URLSearchParams(window.location.hash.substring(1)).get("id_token");if(t)console.log("✅ ID Token from URL:",t),window.history.replaceState({},document.title,"/");else try{var o,n;console.log("\uD83D\uDD0D Checking getCurrentUser()...");let e=await (0,s.H)();t=null==e?void 0:null===(n=e.signInUserSession)||void 0===n?void 0:null===(o=n.idToken)||void 0===o?void 0:o.jwtToken,console.log("✅ ID Token from getCurrentUser():",t)}catch(o){console.warn("⚠️ No authenticated user found. Redirecting to Cognito..."),d(!0),u();return}if(!t){console.warn("❌ No ID Token found. Redirecting to Cognito..."),d(!0),u();return}let r=function(o){try{let e=o.split(".");if(3!==e.length)throw Error("Invalid ID Token format");return JSON.parse(atob(e[1]))}catch(o){return console.error("❌ Failed to parse ID Token:",o),null}}(t);if(!r)throw Error("❌ Failed to parse ID token payload");console.log("✅ User Token Payload:",r);let i=r["cognito:groups"]||[];console.log("✅ User Groups:",i),e({username:r["cognito:username"],groups:i});let l=window.location.origin,a="/unauthorized";"https://d1xj20n18wdq9y.cloudfront.net"===l?(console.log("✅ System A is loaded"),i.includes("Proto-Admin-Group")&&(a="/admin")):"https://d2f1z4tvqap875.cloudfront.net"===l&&(console.log("✅ System B is loaded"),i.includes("Proto-Admin-Group")?a="/employee":i.includes("Proto-User-Group")&&(a="/employees")),p.push(a)}catch(o){console.error("❌ Error fetching user:",o),d(!0),u()}finally{r(!1)}},[p]);async function g(){try{await (0,l.C)(),console.log("✅ User signed out successfully."),p.push("/")}catch(o){console.error("❌ Sign out failed:",o)}}return(0,a.useEffect)(()=>{h()},[h]),(0,t.jsx)("div",{style:{textAlign:"center",marginTop:"50px"},children:n||i?(0,t.jsx)("h2",{children:"\uD83D\uDD04 読み込み中..."}):o?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h2",{children:"✅ ユーザー情報を確認中..."}),(0,t.jsx)("button",{onClick:g,style:{margin:"10px",padding:"10px",backgroundColor:"red",color:"white",border:"none",borderRadius:"5px"},children:"サインアウト"})]}):null})}function p(){return(0,t.jsx)(d,{})}i.E.configure({...r,ssr:!0}),i.E.configure(r)}},o=>{var e=e=>o(o.s=e);o.O(0,[737,636,593,792],()=>e(7276)),_N_E=o.O()}]);