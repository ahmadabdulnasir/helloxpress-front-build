import{b as k,a as E,u as F,v as a,Y as R,y as P,j as e,Z as b,$ as A,a0 as O,L as u,A as n,a1 as M,V as T,a2 as C,X as m,a3 as D}from"./index-BwHQpA8W.js";const G=()=>{const j=k(),i=E(),x=F(d=>d.userState.user),[y,t]=a.useState(!1),[w,o]=a.useState(""),[p,g]=a.useState(!1),[c,N]=a.useState(!1),{register:h,handleSubmit:v,formState:{errors:l,isValid:S}}=R({resolver:M(D),mode:"onChange"}),L=async d=>{g(!0),t(!1),o("");try{const s=await fetch(T.USER_LOGIN,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)});if(s!=null&&s.ok){console.log("Login Successful");const r=await s.json();j(C(r)),m.success("Login Successful"),i(n.Landing)}else if((s==null?void 0:s.status)===401)t(!0),o("Please check your email and verify your account");else{const f=(await s.json()).detail||"Please double check your credentials";m.error(f),t(!0),o(f)}}catch(s){console.error("Login error:",s),console.error(s);const r="An error occurred while processing your request";m.error(r),t(!0),o(r)}finally{g(!1)}};return a.useEffect(()=>{x&&i("/")},[x,i]),P("Login"),e.jsx("div",{className:"w-full h-screen flex justify-center items-center",children:e.jsxs("div",{className:"max-w-md w-full rounded-lg shadow-md p-8",children:[e.jsx("h1",{className:"font-bold text-2xl lg:text-3xl text-center",children:"Welcome back"}),e.jsx("div",{className:"divider divider-primary",children:"Login"}),e.jsxs("form",{onSubmit:v(L),children:[y&&e.jsx("div",{className:"text-center text-red-600 mb-4",children:w}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-bold mb-2",children:"Email address"}),e.jsx("input",{id:"email",type:"email","data-test":"email-input",className:"w-full px-3 py-2 border bg-[#F3F3F3] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"janedoe@email.com",...h("email")}),l.email&&e.jsx(b,{message:l.email.message})]}),e.jsxs("div",{className:"mb-0",children:[e.jsx("label",{htmlFor:"password",className:"block text-sm font-bold",children:"Password"}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{id:"password",type:c?"text":"password","data-test":"password-input",className:"w-full px-3 py-2 border bg-[#F3F3F3] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Min. 8 characters",...h("password")}),e.jsx("button",{type:"button",className:"absolute inset-y-0 right-0 pr-3 flex items-center",onClick:()=>N(!c),children:c?e.jsx(A,{className:"h-5 w-5 text-gray-500"}):e.jsx(O,{className:"h-5 w-5 text-gray-500"})})]}),l.password&&e.jsx(b,{message:l.password.message})]}),e.jsx("div",{className:"flex flex-row justify-end",children:e.jsx("span",{className:"inline-block text-bluemedium underline underline-offset-4 hover:text-bluestrong ml-2",children:e.jsx(u,{to:n.ForgotPassword,children:"Forgot password?"})})}),e.jsx("button",{className:"btn btn-primary w-full font-bold py-2 px-4 rounded-md  mb-2  mt-2",type:"submit",disabled:p||!S,children:p?"Logging in...":"Log in"}),e.jsxs("p",{className:"text-dark",children:["Don't have an account yet?",e.jsx("span",{className:"inline-block text-bluemedium underline underline-offset-4 hover:text-bluestrong ml-2",children:e.jsx(u,{to:n.REGISTER,children:"Sign up"})})]}),e.jsx("p",{className:"text-center",children:e.jsxs(u,{to:n.ROOT,className:"ml-2 link link-hover link-primary capitalize",children:["Proceed without login"," "]})})]})]})})};export{G as default};
