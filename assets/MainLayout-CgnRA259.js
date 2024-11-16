import{u as m,j as e,N as h,A as a,a as k,b as S,c as F,r as g,F as A,d as I,e as C,f as w,g as v,h as O,i as L,L as x,k as M,B as T,l as _,m as E,t as z,n as D,o as U,p as P,q as R,s as W,M as b,v as d,w as B,x as H,y as q,z as V,C as $,P as Q,O as X}from"./index-BhNEi1aA.js";const Y=[{id:1,url:a.ROOT,text:"home"},{id:2,url:a.ABOUT,text:"about"},{id:3,url:a.SERVICES,text:"Our Services"},{id:4,url:a.INVESTORS_WINDOW,text:"Investors"},{id:5,url:a.CONTACT_US,text:"Contact Us"}],N=()=>{const t=m(l=>l.userState.user);return e.jsx(e.Fragment,{children:Y.map(l=>{const{id:s,url:r,text:n}=l;return(r==="checkout"||r==="orders")&&!t?null:e.jsx("li",{children:e.jsx(h,{className:"capitalize",to:r,children:n})},s)})})},G=()=>{const t=k(),l=S(),s=m(c=>c.userState.user),r=F(),n=m(c=>c.userState.theme),o=()=>{t(a.ROOT),l(E()),r.removeQueries()},i=()=>{l(z())},[u,j]=g.useState(!0);return g.useEffect(()=>{const c=()=>{const y=window.pageYOffset;j(y<50)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]),e.jsxs(e.Fragment,{children:[u&&e.jsx("nav",{className:"hidden lg:block",children:e.jsx("div",{className:"w-full flex items-center justify-center  py-3 bg-primary text-white",children:e.jsxs("div",{className:"flex items-center",children:[e.jsxs("a",{href:"tel:+447495398251",className:"mr-4 flex items-center gap-2",children:[e.jsx(A,{className:"w-4 h-4"}),"+447495398251"]}),e.jsxs("a",{href:"mailto:info@helloxpress.co.uk",className:"mr-4 flex items-center gap-2",children:[e.jsx(I,{className:"w-4 h-4"}),"info@helloxpress.co.uk"]}),e.jsxs("a",{href:"#",className:"mr-4 flex items-center gap-2",children:[e.jsx(C,{className:"w-4 h-4"}),"Manchester, United Kingdom"]}),e.jsxs("div",{className:"flex space-x-3 text-white",children:[e.jsx("a",{href:"https://www.facebook.com/helloxpress",className:"hover:text-gray-300",children:e.jsx(w,{className:"mx-auto h-full w-4"})}),e.jsx("a",{href:"https://twitter.com/helloxpress",className:"hover:text-gray-300",children:e.jsx(v,{className:"mx-auto h-full w-4"})}),e.jsx("a",{href:"https://www.linkedin.com/company/helloxpress",className:"hover:text-gray-300",children:e.jsx(O,{className:"mx-auto h-full w-4"})}),e.jsx("a",{href:"https://www.instagram.com/helloxpress",className:"hover:text-gray-300",children:e.jsx(L,{className:"mx-auto h-full w-4"})})]}),e.jsx(x,{to:a.INVESTORS_WINDOW,className:"ml-4 px-4 py-2 btn  ` ",children:"Investors"})]})})}),e.jsx("nav",{className:"bg-base-300 fixed w-full z-40 mb-4",children:e.jsxs("div",{className:"navbar align-element",children:[e.jsxs("div",{className:"navbar-start",children:[e.jsx(h,{to:"/",className:"hidden lg:flex text-3xl items-center",children:e.jsx("img",{src:"/images/logo-medium.png",alt:"Logo",className:"rounded w-16 "})}),e.jsxs("div",{className:"dropdown",children:[e.jsx("label",{tabIndex:0,className:"btn btn-ghost lg:hidden",children:e.jsx(M,{className:"h-6 w-6"})}),e.jsx("ul",{tabIndex:0,className:"menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52",children:e.jsx(N,{})})]})]}),e.jsx("div",{className:"navbar-center hidden lg:flex",children:e.jsx("ul",{className:"menu menu-horizontal",children:e.jsx(N,{})})}),e.jsxs("div",{className:"navbar-end",children:[e.jsxs("label",{className:"swap swap-rotate",children:[e.jsx("input",{type:"checkbox",onChange:i,checked:n==="dracula"}),e.jsx(T,{className:"swap-on h-4 w-4"}),e.jsx(_,{className:"swap-off h-4 w-4"})]}),e.jsx("div",{className:"dropdown dropdown-end",children:s?e.jsxs(e.Fragment,{children:[e.jsx("label",{tabIndex:0,className:"btn btn-ghost btn-circle avatar",children:e.jsx("div",{className:"w-8 rounded-full",children:s.profile.image?e.jsx("div",{className:"avatar",children:e.jsx("div",{className:"w-9 rounded-full",children:e.jsx("img",{src:s.profile.image})})}):e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-9 h-10",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"})})})}),e.jsxs("ul",{tabIndex:0,className:"menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52",children:[e.jsx("li",{children:e.jsxs("a",{className:"justify-between",children:["Profile",e.jsx("span",{className:"badge",children:"New"})]})}),(s.profile.user_type==="admin"||s.profile.user_type==="staff")&&e.jsx("li",{children:e.jsx(h,{to:a.ADMIN_DASHBOARD,children:"Dashboard"})}),e.jsx("li",{children:e.jsx(h,{to:a.ORDERS,children:"Orders"})}),e.jsx("li",{children:e.jsx("a",{children:"Settings"})}),e.jsx("div",{className:"divider"}),e.jsx("li",{children:e.jsx("button",{className:"btn btn-outline btn-error p-2",onClick:o,children:"Logout"})})]})]}):e.jsx(e.Fragment,{children:e.jsx("ul",{className:"menu menu-horizontal",children:e.jsx("li",{children:e.jsx(x,{to:a.LOGIN,className:" btn btn-sm btn-primary rounded-md capitalize font-medium cursor-pointer px-4 hover:scale-105 ",children:"Login"})})})})})]})]})})]})},K=()=>{const t=m(j=>j.constantsState),l=t.site_email,s=t.site_phone,r=t.site_address,n=t.facebook_url,o=t.twitter_url,i=t.tiktok_url,u=t.instagram_url;return e.jsx(e.Fragment,{children:e.jsxs("footer",{className:"flex flex-col items-center bg-base-300 text-center",children:[e.jsx("div",{className:"container px-6 pt-6",children:e.jsxs("div",{className:"container mx-auto flex flex-wrap justify-between",children:[e.jsxs("div",{className:"w-full md:w-1/4 mb-4 md:mb-0 text-justify",children:[e.jsx("h2",{className:"text-lg font-bold mb-4 capitalize",children:"Hello Xpress"}),e.jsxs("ul",{children:[e.jsx("li",{className:"mb-2",children:e.jsx("a",{href:a.ROOT,className:"hover:text-gray-300",children:"Home"})}),e.jsx("li",{className:"mb-2",children:e.jsx("a",{href:a.ABOUT,className:"hover:text-gray-300",children:"About Us"})}),e.jsx("li",{className:"mb-2",children:e.jsx("a",{href:a.MAIN_DETAILS("faqs"),className:"hover:text-gray-300",children:"FAQs"})}),e.jsx("li",{className:"mb-2",children:e.jsx("a",{href:a.MAIN_DETAILS("terms"),className:"hover:text-gray-300",children:"Terms & Conditions"})})]})]}),e.jsxs("div",{className:"w-full md:w-1/4 mb-4 md:mb-0 text-justify",children:[e.jsx("h2",{className:"text-lg font-bold mb-4",children:"Useful Links"}),e.jsxs("ul",{children:[e.jsx("li",{className:"mb-2",children:e.jsx("a",{href:a.INVESTORS_WINDOW,className:"hover:text-gray-300",children:"Investors"})}),e.jsx("li",{className:"mb-2",children:e.jsx("a",{href:a.MAIN_DETAILS("privacy"),className:"hover:text-gray-300",children:"Privacy Policy"})}),e.jsx("li",{className:"mb-2",children:e.jsx("a",{href:a.MAIN_DETAILS("payments"),className:"hover:text-gray-300",children:"Payments"})}),e.jsx("li",{className:"mb-2",children:e.jsx("a",{href:"https://mail.zoho.com/zm",className:"hover:text-gray-300",children:"Staff Webmail"})})]})]}),e.jsxs("div",{className:"w-full md:w-1/4 mb-4 md:mb-0 text-justify",children:[e.jsx("h2",{className:"text-lg font-bold mb-4",children:"Contact Us"}),e.jsx("a",{href:a.CONTACT_US,className:"hover:text-gray-300",children:"Contact Us"}),e.jsxs("p",{children:["Email: ",l]}),e.jsxs("p",{children:["Phone: ",s]}),e.jsxs("p",{children:["Address: ",r]})]}),e.jsxs("div",{className:"w-full md:w-1/4",children:[e.jsx("h2",{className:"text-lg font-bold mb-4",children:"Follow Us"}),e.jsxs("div",{className:"flex space-x-4 mb-6 justify-center",children:[e.jsx("a",{href:n,type:"button",className:"m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0","data-te-ripple-init":!0,"data-te-ripple-color":"light",children:e.jsx(w,{className:"mx-auto h-full w-8 text-blue-600"})}),e.jsx("a",{href:o,type:"button",className:"m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0","data-te-ripple-init":!0,"data-te-ripple-color":"light",children:e.jsx(v,{className:"mx-auto h-full w-4 text-blue-600"})}),e.jsx("a",{href:i,type:"button",className:"m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0","data-te-ripple-init":!0,"data-te-ripple-color":"light",children:e.jsx(D,{className:"mx-auto h-full w-4"})}),e.jsx("a",{href:u,type:"button",className:"m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0","data-te-ripple-init":!0,"data-te-ripple-color":"light",children:e.jsx(U,{className:"mx-auto h-full w-4"})})]})]})]})}),e.jsxs("div",{className:"w-full p-4 text-center",style:{backgroundColor:"rgba(0, 0, 0, 0.2)"},children:["© ",new Date().getFullYear()," ",e.jsx("a",{className:"text-white capitalize",href:"/",children:"Hello Xpress"}),e.jsx("br",{}),e.jsxs("span",{className:"badge badge-secondary mt-2",children:["Made with ",e.jsx(P,{className:"h-6 w-6 mr-2 ml-2 text-red-500"})," by"," ",e.jsx("a",{href:"https://dabolinux.com/",className:"ml-2",children:"Dabolinux Technologies"})]})]})]})})},J=()=>{const t="+447495398251",l=`Hello! From HelloXpress Website,
I have a question.`,s=()=>{const r=encodeURIComponent(l),n=`https://wa.me/${t}?text=${r}`;window.open(n,"_blank")};return e.jsx(e.Fragment,{children:e.jsx("button",{className:"flex items-center justify-center w-16 h-16 rounded-full fixed bottom-12 right-6 bg-green-500 hover:bg-blue-700 text-white",style:{bottom:"6rem",right:"1.5rem"},onClick:s,children:e.jsx(R,{size:44})})})},p={home:e.jsx(B,{}),products:e.jsx(H,{}),carts:e.jsx(q,{}),orders:e.jsx(V,{}),about:e.jsx(d,{}),terms:e.jsx(d,{}),faqs:e.jsx(d,{}),privacy:e.jsx(d,{}),pages:e.jsx(b,{}),current:e.jsx(b,{})},f={home:"Home",products:"Products",current:"Current Page"},Z=()=>{const t=W(),l=t.pathname.split("/").filter(s=>s);return t.pathname==="/"?null:e.jsx("div",{className:"breadcrumbs breadcrumbs-accent text-sm mt-4 bg-base-300 p-4",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(x,{to:"/",className:"inline-flex items-center gap-2",children:[p.home,f.home]})}),l.map((s,r)=>{const n=`/${l.slice(0,r+1).join("/")}`,o=r===l.length-1,i=f[s]||s.charAt(0).toUpperCase()+s.slice(1);return o?e.jsxs("li",{className:"inline-flex items-center gap-2",children:[p[s]||e.jsx(b,{}),i]},n):e.jsx("li",{children:e.jsxs(x,{to:n,className:"inline-flex items-center gap-2",children:[p[s]||e.jsx(d,{}),i]})},n)})]})})},se=()=>{const l=$().state==="loading";return e.jsxs(e.Fragment,{children:[e.jsx(G,{}),e.jsxs("section",{className:"align-element pt-20",children:[" ",e.jsx(Z,{}),"  "]}),l?e.jsx(Q,{}):e.jsxs("section",{className:"",children:[" ",e.jsx(X,{})," "]}),e.jsx(J,{}),e.jsx(K,{})]})};export{se as default};
