"use strict";(self["webpackChunkvue_final"]=self["webpackChunkvue_final"]||[]).push([[808],{6808:function(e,l,a){a.r(l),a.d(l,{default:function(){return F}});var s=a(6252),t=a(3577);const n=e=>((0,s.dD)("data-v-0e84a92d"),e=e(),(0,s.Cn)(),e),m={class:"container"},i={class:"body my-5"},o={class:"mb-5"},d=n((()=>(0,s._)("h1",{class:"text-primary fw-bold text-center fs-2"},"聯絡我們",-1))),r={class:"text-center lh-lg text-muted pt-3 fs-7"},c=(0,s.Uk)(" 若有任何問題，歡迎透過表單與我們聯繫，我們將於服務時段儘速聯絡你！"),u=n((()=>(0,s._)("br",null,null,-1))),f=(0,s.Uk)("你也可以試著在 "),p=(0,s.Uk)("常見問答"),b=(0,s.Uk)(" 找到相關答案 "),h={class:"form-floating form-downline mt-4 mb-3"},_=n((()=>(0,s._)("label",{for:"name",class:"form-label fs-7"},[(0,s._)("span",{class:"text-danger"},"* "),(0,s.Uk)("姓名")],-1))),g={class:"d-md-flex"},v={class:"form-floating form-downline col-md-6 pe-md-3"},k=n((()=>(0,s._)("label",{for:"email",class:"form-label fs-7"},[(0,s._)("span",{class:"text-danger"},"* "),(0,s.Uk)("Email")],-1))),x={class:"form-floating form-downline col-md-6"},y=n((()=>(0,s._)("label",{for:"tel",class:"form-label fs-7"},[(0,s._)("span",{class:"text-danger"},"* "),(0,s.Uk)("聯絡電話")],-1))),V={class:"form-floating form-downline my-3"},w=n((()=>(0,s._)("label",{for:"message",class:"form-label fs-7"},[(0,s._)("span",{class:"text-danger"},"* "),(0,s.Uk)("留下你的訊息")],-1))),U={class:"mt-4 d-flex justify-content-between"},W=n((()=>(0,s._)("p",{class:"fs-8 text-muted d-flex align-items-end"}," 服務時段：MON.-FRI. 09:00-18:00 ",-1))),C=["disabled"];function j(e,l,n,j,q,S){const E=(0,s.up)("RouterLink"),F=(0,s.up)("VeeField"),I=(0,s.up)("ErrorMessage"),$=(0,s.up)("VeeForm");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",{class:"banner mt-3 d-md-none d-block",style:(0,t.j5)({backgroundImage:`url(${a(8111)} )`})},null,4),(0,s._)("div",m,[(0,s._)("div",{class:"banner mt-3 d-md-block d-none",style:(0,t.j5)({backgroundImage:`url(${a(8111)} )`})},null,4),(0,s._)("div",i,[(0,s._)("div",o,[(0,s.Wm)($,{class:"rounded-3 shadow p-5",ref:"form",onSubmit:S.getSubscription},{default:(0,s.w5)((({errors:e})=>[d,(0,s._)("h2",r,[c,u,f,(0,s.Wm)(E,{class:"faq text-decoration-underline",to:"/faq"},{default:(0,s.w5)((()=>[p])),_:1}),b]),(0,s._)("div",h,[(0,s.Wm)(F,{id:"name",name:"姓名",type:"text",class:(0,t.C_)(["form-control",{"is-invalid":e["姓名"]}]),rules:"required",placeholder:"請輸入姓名",modelValue:q.name,"onUpdate:modelValue":l[0]||(l[0]=e=>q.name=e)},null,8,["class","modelValue"]),_,(0,s.Wm)(I,{name:"姓名",class:"invalid-feedback"})]),(0,s._)("div",g,[(0,s._)("div",v,[(0,s.Wm)(F,{id:"email",name:"email",type:"email",class:(0,t.C_)(["form-control",{"is-invalid":e["email"]}]),rules:"email|required",placeholder:"請輸入Email",modelValue:q.mail,"onUpdate:modelValue":l[1]||(l[1]=e=>q.mail=e)},null,8,["class","modelValue"]),k,(0,s.Wm)(I,{name:"email",class:"invalid-feedback"})]),(0,s._)("div",x,[(0,s.Wm)(F,{id:"tel",name:"電話",type:"text",class:(0,t.C_)(["form-control",{"is-invalid":e["電話"]}]),rules:"required|min:8|max:10",placeholder:"請輸入電話",modelValue:q.phone,"onUpdate:modelValue":l[2]||(l[2]=e=>q.phone=e)},null,8,["class","modelValue"]),y,(0,s.Wm)(I,{name:"電話",class:"invalid-feedback"})])]),(0,s._)("div",V,[(0,s.Wm)(F,{id:"message",name:"訊息",type:"text",class:(0,t.C_)(["form-control",{"is-invalid":e["訊息"]}]),rules:"required",placeholder:"請輸入訊息",modelValue:q.message,"onUpdate:modelValue":l[3]||(l[3]=e=>q.message=e)},null,8,["class","modelValue"]),w,(0,s.Wm)(I,{name:"訊息",class:"invalid-feedback"})]),(0,s._)("div",U,[W,(0,s._)("button",{type:"submit",class:"btn btn-primary text-white fs-7",disabled:Object.keys(e).length>0}," 送出 ",8,C)])])),_:1},8,["onSubmit"])])])])],64)}var q={data(){return{name:"",mail:"",phone:"",message:""}},inject:["emitter"],methods:{getSubscription(){const e={name:this.name,mail:this.mail,phone:this.phone,message:this.message};this.$http.post("https://script.google.com/macros/s/AKfycbyhKvpyzuYF0pp_rOafaI5xbZRS2ppk1u0rXawV56kEC6YgbLPLXT39EydNcD0cSVhH/exec",null,{params:e}).then((()=>{this.emitter.emit("push-message",{style:"success",title:"成功送出，請耐心等待我們的聯繫！"}),this.$refs.form.resetForm()})).catch((()=>{this.emitter.emit("push-message",{style:"danger",title:"發生錯誤，請稍後再試！"})}))},validateNote(e){return!!e||"請記得備註！"}}},S=a(3744);const E=(0,S.Z)(q,[["render",j],["__scopeId","data-v-0e84a92d"]]);var F=E},8111:function(e,l,a){e.exports=a.p+"img/contact.e746d371.jpg"}}]);
//# sourceMappingURL=808.e7dd2851.js.map