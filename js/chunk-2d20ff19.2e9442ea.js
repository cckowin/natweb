(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20ff19"],{b67f:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("van-nav-bar",{attrs:{title:"采集系统登录"}}),t("van-form",{on:{submit:e.onSubmit}},[t("van-field",{attrs:{name:"用户名",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},model:{value:e.username,callback:function(a){e.username=a},expression:"username"}}),t("van-field",{attrs:{type:"password",name:"密码",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:e.password,callback:function(a){e.password=a},expression:"password"}}),t("div",{staticStyle:{margin:"16px"}},[t("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("登录")])],1)],1),t("div",{attrs:{id:"reader"}})],1)},n=[],o=t("d399"),r={name:"login",data:function(){return{username:"",password:""}},created:function(){this.checkLogin()},methods:{checkLogin:function(){var e=this;this.axios.post("/operator/checklogin").then((function(a){a.data.flag&&(o["a"].success(a.data.msg),e.$router.push("/operator/selectjob"))})).catch((function(e){console.log(e)}))},onSubmit:function(){var e=this;this.axios.post("/operator/login",this.qs.stringify({username:this.username,password:this.password})).then((function(a){a.data.flag?(o["a"].success(a.data.msg),e.$router.push("/operator/selectjob")):o["a"].fail(a.data.msg)})).catch((function(e){console.log(e)}))}}},i=r,c=t("2877"),u=Object(c["a"])(i,s,n,!1,null,"9987dcfe",null);a["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d20ff19.2e9442ea.js.map