(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[29],{OVbn:function(e,t,a){"use strict";a.r(t);a("T2oS");var r,n,s,o=a("W9HT"),i=a("2Taf"),c=a.n(i),l=a("vZ4D"),u=a.n(l),m=a("l4Ni"),d=a.n(m),f=a("ujKo"),g=a.n(f),p=a("MhPg"),b=a.n(p),h=a("q1tI"),M=a.n(h),j=a("MuoO"),O=a("LLXN"),E=(a("+L6B"),a("2/Rp")),v=(a("IzEo"),a("bx4M")),y=(a("14J3"),a("BMrR")),x=(a("jCWc"),a("kPKH")),I=(a("y8nQ"),a("Vl3Y")),k=a("jehZ"),w=a.n(k),D=(a("giR+"),a("fyUT")),Y=(a("7Kak"),a("9yH6")),C=(a("Znn+"),a("ZTPi")),T=(a("5NDa"),a("5rEg")),S=(a("miYZ"),a("tsqr")),A=a("zX7x"),H=(a("g9YV"),a("wCAj")),V=(a("Awhp"),a("KrTs")),L=(a("Telt"),a("Tckk")),K=a("7DNP"),N=a("wd/R"),q=a.n(N),z=function(e){function t(){return c()(this,t),d()(this,g()(t).apply(this,arguments))}return b()(t,e),u()(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.data,t={draft:{text:Object(O["formatMessage"])({id:"common.draft"}),badge:"processing",value:"draft"},publish:{text:Object(O["formatMessage"])({id:"common.publish"}),badge:"success",value:"publish"},reject:{text:Object(O["formatMessage"])({id:"common.reject"}),badge:"error",value:"reject"}},a=[{title:Object(O["formatMessage"])({id:"post.slug"}),dataIndex:"slug",key:"slug",width:200,render:function(e){return M.a.createElement(K["Link"],{to:"/post/slug/".concat(e)},e)}},{title:Object(O["formatMessage"])({id:"post.title"}),dataIndex:"title"},{title:Object(O["formatMessage"])({id:"post.cover"}),dataIndex:"cover",render:function(e){return M.a.createElement(L["a"],{src:e,shape:"square"})}},{title:Object(O["formatMessage"])({id:"post.introduce"}),dataIndex:"introduce"},{title:Object(O["formatMessage"])({id:"post.status"}),dataIndex:"status",render:function(e){return M.a.createElement(V["a"],{status:t[e].badge,text:t[e].text})}},{title:Object(O["formatMessage"])({id:"post.updatedTime"}),dataIndex:"updatedAt",render:function(e){return q()(e).format("YYYY-MM-DD HH:mm:ss")}},{title:Object(O["formatMessage"])({id:"user.option"}),key:"action",dataIndex:"slug",render:function(e){return M.a.createElement(K["Link"],{to:"/post/slug/".concat(e)},Object(O["formatMessage"])({id:"user.seeInfo"}))}}],r={showSizeChanger:!0,showQuickJumper:!0,total:e.length,showTotal:function(e){return"".concat(Object(O["formatMessage"])({id:"common.all.total"})," ").concat(e," ").concat(Object(O["formatMessage"])({id:"common.all.item"}))}};return M.a.createElement(v["a"],{className:"tableList",bordered:!1},M.a.createElement(H["a"],{rowKey:"slug",columns:a,dataSource:e,pagination:r}))}}]),t}(h["Component"]),J=z,P=function(e){function t(){return c()(this,t),d()(this,g()(t).apply(this,arguments))}return b()(t,e),u()(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.data,t={draft:{text:Object(O["formatMessage"])({id:"common.draft"}),badge:"processing",value:"draft"},publish:{text:Object(O["formatMessage"])({id:"common.publish"}),badge:"success",value:"publish"},reject:{text:Object(O["formatMessage"])({id:"common.reject"}),badge:"error",value:"reject"}},a=[{title:Object(O["formatMessage"])({id:"user.slug"}),dataIndex:"slug",key:"slug",width:200,render:function(e){return M.a.createElement(K["Link"],{to:"/animate/slug/".concat(e)},e)}},{title:Object(O["formatMessage"])({id:"user.title"}),dataIndex:"title"},{title:Object(O["formatMessage"])({id:"user.cover"}),dataIndex:"cover.vertical",render:function(e){return M.a.createElement(L["a"],{src:e,shape:"square"})}},{title:Object(O["formatMessage"])({id:"user.introduce"}),dataIndex:"information.introduce"},{title:Object(O["formatMessage"])({id:"user.status"}),dataIndex:"status",render:function(e){return M.a.createElement(V["a"],{status:t[e].badge,text:t[e].text})}},{title:Object(O["formatMessage"])({id:"user.updatedAt"}),dataIndex:"updatedAt",render:function(e){return q()(e).format("YYYY-MM-DD HH:mm:ss")}},{title:Object(O["formatMessage"])({id:"user.option"}),key:"action",dataIndex:"slug",render:function(e){return M.a.createElement(K["Link"],{to:"/animate/slug/".concat(e)},Object(O["formatMessage"])({id:"user.seeInfo"}))}}],r={showSizeChanger:!0,showQuickJumper:!0,total:e.length,showTotal:function(e){return"".concat(Object(O["formatMessage"])({id:"common.all.total"})," ").concat(e," ").concat(Object(O["formatMessage"])({id:"common.all.item"}))}};return M.a.createElement(v["a"],{className:"tableList",bordered:!1},M.a.createElement(H["a"],{rowKey:"slug",columns:a,dataSource:e,pagination:r}))}}]),t}(h["Component"]),U=P,Q=function(e){function t(){return c()(this,t),d()(this,g()(t).apply(this,arguments))}return b()(t,e),u()(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.data,t={draft:{text:Object(O["formatMessage"])({id:"common.draft"}),badge:"processing",value:"draft"},publish:{text:Object(O["formatMessage"])({id:"common.publish"}),badge:"success",value:"publish"},reject:{text:Object(O["formatMessage"])({id:"common.reject"}),badge:"error",value:"reject"}},a=[{title:Object(O["formatMessage"])({id:"user.content"}),dataIndex:"content"},{title:Object(O["formatMessage"])({id:"user.image"}),dataIndex:"image",render:function(e){return e.map(function(e){return M.a.createElement(L["a"],{src:e,shape:"square"})})}},{title:Object(O["formatMessage"])({id:"user.status"}),dataIndex:"status",render:function(e){return M.a.createElement(V["a"],{status:t[e].badge,text:t[e].text})}},{title:Object(O["formatMessage"])({id:"user.updatedAt"}),dataIndex:"updatedAt",render:function(e){return q()(e).format("YYYY-MM-DD HH:mm:ss")}}],r={showSizeChanger:!0,showQuickJumper:!0,total:e.length,showTotal:function(e){return"".concat(Object(O["formatMessage"])({id:"common.all.total"})," ").concat(e," ").concat(Object(O["formatMessage"])({id:"common.all.item"}))}};return M.a.createElement(v["a"],{className:"tableList",bordered:!1},M.a.createElement(H["a"],{rowKey:"slug",columns:a,dataSource:e,pagination:r}))}}]),t}(h["Component"]),R=Q,Z=function(e){function t(){return c()(this,t),d()(this,g()(t).apply(this,arguments))}return b()(t,e),u()(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.data,t={draft:{text:Object(O["formatMessage"])({id:"common.draft"}),badge:"processing",value:"draft"},publish:{text:Object(O["formatMessage"])({id:"common.publish"}),badge:"success",value:"publish"},reject:{text:Object(O["formatMessage"])({id:"common.reject"}),badge:"error",value:"reject"}},a={animate:Object(O["formatMessage"])({id:"user.animate"}),post:Object(O["formatMessage"])({id:"user.post"}),comment:Object(O["formatMessage"])({id:"user.comment"}),others:Object(O["formatMessage"])({id:"user.others"})},r=[{title:Object(O["formatMessage"])({id:"user.content"}),dataIndex:"content"},{title:Object(O["formatMessage"])({id:"user.image"}),dataIndex:"image",render:function(e){return e.map(function(e){return M.a.createElement(L["a"],{src:e,shape:"square"})})}},{title:Object(O["formatMessage"])({id:"user.type"}),dataIndex:"type",render:function(e){return a[e]}},{title:Object(O["formatMessage"])({id:"user.status"}),dataIndex:"status",render:function(e){return M.a.createElement(V["a"],{status:t[e].badge,text:t[e].text})}},{title:Object(O["formatMessage"])({id:"user.updatedAt"}),dataIndex:"updatedAt",render:function(e){return q()(e).format("YYYY-MM-DD HH:mm:ss")}}],n={showSizeChanger:!0,showQuickJumper:!0,total:e.length,showTotal:function(e){return"".concat(Object(O["formatMessage"])({id:"common.all.total"})," ").concat(e," ").concat(Object(O["formatMessage"])({id:"common.all.item"}))}};return M.a.createElement(v["a"],{className:"tableList",bordered:!1},M.a.createElement(H["a"],{rowKey:"slug",columns:r,dataSource:e,pagination:n}))}}]),t}(h["Component"]),F=Z,B=function(e){function t(){return c()(this,t),d()(this,g()(t).apply(this,arguments))}return b()(t,e),u()(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.data,t=[{title:Object(O["formatMessage"])({id:"user.order"}),dataIndex:"_id"},{title:Object(O["formatMessage"])({id:"user.order.createdAt"}),dataIndex:"createdAt",render:function(e){return q()(e).format("YYYY-MM-DD HH:mm:ss")}}],a={showSizeChanger:!0,showQuickJumper:!0,total:e.length,showTotal:function(e){return"".concat(Object(O["formatMessage"])({id:"common.all.total"})," ").concat(e," ").concat(Object(O["formatMessage"])({id:"common.all.item"}))}};return M.a.createElement(v["a"],{className:"tableList",bordered:!1},M.a.createElement(H["a"],{rowKey:"slug",columns:t,dataSource:e,pagination:a}))}}]),t}(h["Component"]),W=B,X=function(e){function t(){var e,a;c()(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return a=d()(this,(e=g()(t)).call.apply(e,[this].concat(n))),a.state={},a.handleSubmit=function(e){e.preventDefault();var t=a.props.onChange;a.props.form.validateFields(function(e,a){e?(S["a"].destroy(),Object.keys(e).map(function(e){switch(e){case"name":S["a"].error(Object(O["formatMessage"])({id:"animate.tips.fill.name"}));break;case"email":S["a"].error(Object(O["formatMessage"])({id:"animate.tips.fill.email"}));break;default:break}})):t(a)})},a}return b()(t,e),u()(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=T["a"].TextArea,a=C["a"].TabPane,r=Y["a"].Group,n=this.props.userInfo,s=[],o=[],i=[],c=[],l=[];n.post&&n.post.own&&(s=n.post.own),n.animate&&n.animate.own&&(o=n.animate.own),n.comment&&n.comment.own&&(i=n.comment.own),n.report&&(c=n.report),n.order&&(l=n.order);var u={labelCol:{span:4},wrapperCol:{span:18,offset:1}},m={xs:24,sm:24,md:24,lg:24,xl:12};return M.a.createElement(v["a"],{bordered:!1},M.a.createElement(I["a"],{onSubmit:this.handleSubmit},M.a.createElement(C["a"],{defaultActiveKey:"1",tabPosition:"left"},M.a.createElement(a,{tab:Object(O["formatMessage"])({id:"common.baseinfo"}),key:"1"},M.a.createElement(v["a"],{bordered:!1,style:{marginTop:"-15px"},title:"\u57fa\u672c\u4fe1\u606f"},M.a.createElement(y["a"],{type:"flex",justify:"space-between",align:"top"},M.a.createElement(x["a"],m,M.a.createElement(I["a"].Item,w()({},u,{label:Object(O["formatMessage"])({id:"user.level"})}),e("level",{initialValue:n.level})(M.a.createElement(D["a"],null))),M.a.createElement(I["a"].Item,w()({},u,{label:Object(O["formatMessage"])({id:"user.score"})}),e("score",{initialValue:n.score})(M.a.createElement(D["a"],null))),M.a.createElement(I["a"].Item,w()({},u,{label:Object(O["formatMessage"])({id:"user.money"})}),e("money",{initialValue:n.money})(M.a.createElement(D["a"],{min:0}))),M.a.createElement(I["a"].Item,w()({},u,{label:Object(O["formatMessage"])({id:"user.expired"}),extra:Object(O["formatMessage"])({id:"user.expired.extra"})}),e("expired",{initialValue:n.expired})(M.a.createElement(D["a"],null))),M.a.createElement(I["a"].Item,w()({},u,{label:Object(O["formatMessage"])({id:"user.status"})}),e("status",{initialValue:n.status})(M.a.createElement(r,null,M.a.createElement(Y["a"],{value:"inactive"},Object(O["formatMessage"])({id:"user.inactive"})),M.a.createElement(Y["a"],{value:"active"},Object(O["formatMessage"])({id:"user.active"})),M.a.createElement(Y["a"],{value:"unused"},Object(O["formatMessage"])({id:"user.unused"}))))),M.a.createElement(I["a"].Item,w()({},u,{label:Object(O["formatMessage"])({id:"user.name"})}),e("name",{initialValue:n.name,rules:[{required:!0,message:Object(O["formatMessage"])({id:"user.tips.fill.name"})}]})(M.a.createElement(T["a"],{placeholder:Object(O["formatMessage"])({id:"user.tips.fill.name"})}))),M.a.createElement(I["a"].Item,w()({},u,{label:Object(O["formatMessage"])({id:"user.email"})}),e("email",{initialValue:n.email,rules:[{required:!0,message:Object(O["formatMessage"])({id:"user.tips.fill.email"})}]})(M.a.createElement(T["a"],{placeholder:Object(O["formatMessage"])({id:"user.tips.fill.email"})}))),M.a.createElement(I["a"].Item,w()({},u,{label:Object(O["formatMessage"])({id:"user.introduce"})}),e("introduce",{initialValue:n.introduce})(M.a.createElement(t,{placeholder:Object(O["formatMessage"])({id:"user.tips.fill.introduce"}),autosize:{minRows:4,maxRows:8}})))),M.a.createElement(x["a"],m,M.a.createElement(I["a"].Item,w()({},u,{label:Object(O["formatMessage"])({id:"user.avatar"})}),e("avatar",{initialValue:n.avatar})(M.a.createElement(A["a"],{width:160,height:160}))),M.a.createElement(I["a"].Item,w()({},u,{label:Object(O["formatMessage"])({id:"user.background"})}),e("background",{initialValue:n.background})(M.a.createElement(A["a"],{width:600,height:160}))))))),M.a.createElement(a,{tab:Object(O["formatMessage"])({id:"common.animate.info"}),key:"2"},M.a.createElement(U,{data:o})),M.a.createElement(a,{tab:Object(O["formatMessage"])({id:"common.post.info"}),key:"3"},M.a.createElement(J,{data:s})),M.a.createElement(a,{tab:Object(O["formatMessage"])({id:"common.comment.info"}),key:"4"},M.a.createElement(R,{data:i})),M.a.createElement(a,{tab:Object(O["formatMessage"])({id:"common.order.info"}),key:"5"},M.a.createElement(W,{data:l})),M.a.createElement(a,{tab:Object(O["formatMessage"])({id:"common.report.info"}),key:"6"},M.a.createElement(F,{data:c})),M.a.createElement(a,{tab:M.a.createElement(E["a"],{type:"primary",htmlType:"submit"},Object(O["formatMessage"])({id:"user.update"})),key:"99",disabled:!0}))))}}]),t}(h["Component"]),G=I["a"].create()(X),_=(r=Object(j["connect"])(function(e){var t=e.user,a=e.loading;return{user:t,loading:a.effects["user/getUserInfo"]||a.effects["user/putUserInfo"]}}),r((s=function(e){function t(){var e,a;c()(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return a=d()(this,(e=g()(t)).call.apply(e,[this].concat(n))),a.state={userInfo:{}},a.getUserInfo=function(){var e=a.props,t=e.dispatch,r=e.match.params.slug;t({type:"user/getUserInfo",payload:{params:{slug:r}}})},a.handleSubmit=function(e){var t=a.props,r=t.dispatch,n=t.match.params.slug;r({type:"user/putUserInfo",payload:{params:{slug:n},data:e}})},a}return b()(t,e),u()(t,[{key:"componentDidMount",value:function(){this.getUserInfo()}},{key:"render",value:function(){var e=this.props.loading,t=this.state.userInfo;return M.a.createElement(o["a"],{spinning:!!e},M.a.createElement(G,{onChange:this.handleSubmit,userInfo:t}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.match.params.slug,r=e.user;return r.info&&r.info.name===a?{userInfo:r.info}:null}}]),t}(h["Component"]),n=s))||n);t["default"]=_}}]);