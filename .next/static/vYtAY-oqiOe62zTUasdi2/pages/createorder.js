(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"+NoR":function(e,a,t){"use strict";t.r(a);var n=t("hfKm"),r=t.n(n),o=t("2Eek"),c=t.n(o),l=t("XoMD"),u=t.n(l),s=t("Jo+v"),i=t.n(s),d=t("4mXO"),p=t.n(d),m=t("pLtp"),b=t.n(m),h=t("eVuF"),v=t.n(h),f=t("ln6h"),O=t.n(f),j=t("vYYK"),g=t("2wwy"),w=t.n(g),N=t("q1tI"),S=t.n(N),y=t("aQu0"),C=t("D1pA"),k=t("vFsZ"),x=t("TbSc"),E=t("umxb"),q=t("5XkN"),F=t("yZlV"),_=t("QetY"),G=t("vDqi"),T=t.n(G),X=t("rjN7"),D=t("xUX2"),K=t("nOHt"),P=t.n(K),Y=S.a.createElement;function U(e,a){var t=b()(e);if(p.a){var n=p()(e);a&&(n=n.filter((function(a){return i()(e,a).enumerable}))),t.push.apply(t,n)}return t}function A(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?U(Object(t),!0).forEach((function(a){Object(j.a)(e,a,t[a])})):u.a?c()(e,u()(t)):U(Object(t)).forEach((function(a){r()(e,a,i()(t,a))}))}return e}var I={user:"",products:[],name:"",phone:"",email:"",notes:"",orderStatus:"",total:"",media:""},J=[{key:"Open",text:"Open",value:"Open"},{key:"Complete",text:"Complete",value:"Complete"}];a.default=function(e,a){var t=Object(N.useState)(I),n=t[0],r=t[1],o=Object(N.useState)(""),c=o[0],l=o[1],u=Object(N.useState)(!1),s=u[0],i=u[1],d=Object(N.useState)(!1),p=d[0],m=d[1],b=Object(N.useState)(!0),h=(b[0],b[1]),f=Object(N.useState)(""),g=f[0],G=f[1];function K(e,a){var t=e.target,n=t.name,o=t.value,c=(t.text,t.files);"media"===n?(r((function(e){return A({},e,{media:c[0]})})),l(window.URL.createObjectURL(c[0]))):(r((function(e){return A({},e,Object(j.a)({},n,o))})),console.log(I))}function U(){var e,a,t;return O.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return(e=new FormData).append("file",n.media),e.append("upload_preset","builders-log"),e.append("cloud_name","dtan19"),r.next=6,O.a.awrap(T.a.post("https://api.cloudinary.com/v1_1/dtan19/image/upload",e));case 6:return a=r.sent,t=a.data.url,console.log(t),r.abrupt("return",t);case 10:case"end":return r.stop()}}),null,null,null,v.a)}return S.a.useEffect((function(){var e=w()(n).every((function(e){return Boolean(e)}));h(!e)}),[n]),Y(S.a.Fragment,null,Y(y.a,{as:"h2",block:!0},Y(C.a,{name:"add",color:"orange"}),"Create an Order"),Y(k.a,{loading:p,error:Boolean(g),success:s,onSubmit:function(e){var a,t,o,c,l,u,s,d,p,b,h;return O.a.async((function(v){for(;;)switch(v.prev=v.next){case 0:return v.prev=0,e.preventDefault(),m(!0),G(""),v.next=6,O.a.awrap(U());case 6:return a=v.sent,t="".concat(X.a,"/api/order"),o=n.name,c=n.phone,l=n.email,u=n.notes,s=n.orderStatus,d=n.total,p={mediaUrl:a,name:o,phone:c,email:l,notes:u,orderStatus:s,total:d},v.next=12,O.a.awrap(T.a.post(t,p));case 12:b=v.sent,r(I),i(!0),h=b.data._id,P.a.push("/order?_id=".concat(h)),v.next=22;break;case 19:v.prev=19,v.t0=v.catch(0),Object(D.a)(v.t0,G);case 22:return v.prev=22,m(!1),v.finish(22);case 25:case"end":return v.stop()}}),null,null,[[0,19,22,25]],v.a)}},Y(x.a,{error:!0,header:"Oops!",content:g}),Y(x.a,{success:!0,icon:"check",header:"Success",content:"Your order has been created"}),Y(k.a.Group,{widths:"equal"},Y(k.a.Field,{control:E.a,name:"media",type:"file",label:"Media",content:"Select Image",onChange:K})),Y(q.a,{src:c,rounded:!0,centered:!0,size:"small"}),Y(k.a.Group,null,Y("p",null,"Create your own order:")),Y(k.a.Group,{widths:"equal"},Y(k.a.Field,{control:E.a,name:"name",label:"Name",placeholder:"Jane Smith",value:n.name,onChange:K,required:!0})),Y(k.a.Group,{widths:"equal"},Y(k.a.Field,{control:E.a,name:"phone",label:"Phone",placeholder:"801-555-1234",value:n.phone,onChange:K,required:!0})),Y(k.a.Group,{widths:"equal"},Y(k.a.Field,{control:E.a,name:"email",label:"Email",placeholder:"name@email.com",value:n.email,onChange:K,required:!0})),Y(k.a.Group,{widths:"equal"},Y(k.a.Field,{control:F.a,name:"notes",label:"Notes",placeholder:"Type any special instructions here.",value:n.notes,onChange:K})),Y(k.a.Group,null,Y(k.a.Dropdown,{selection:!0,name:"orderStatus",label:"Status",placeholder:"Open",options:J,onChange:function(e,a){I.orderStatus=a.value,console.log(I.orderStatus)},required:!0}),Y(k.a.Field,{control:E.a,name:"total",label:"Total",placeholder:"3.99",value:n.total,onChange:K,required:!0})),Y(k.a.Field,{control:_.a,color:"blue",content:"Create",type:"Submit"})))}},aQu0:function(e,a,t){"use strict";var n=t("pVnL"),r=t.n(n),o=(t("Wt1U"),t("TSYQ")),c=t.n(o),l=(t("17x9"),t("q1tI")),u=t.n(l),s=t("ZeOK"),i=t("ICNK"),d=t("Y53p"),p=t("H+2d"),m=t("D1pA"),b=t("5XkN"),h=t("MZgk");function v(e){var a=e.children,t=e.className,n=e.content,o=c()("sub header",t),l=Object(i.a)(v,e),s=Object(d.a)(v,e);return u.a.createElement(s,r()({},l,{className:o}),p.a.isNil(a)?n:a)}v.handledProps=["as","children","className","content"],v.propTypes={},v.create=Object(h.e)(v,(function(e){return{content:e}}));var f=v;function O(e){var a=e.children,t=e.className,n=e.content,o=c()("content",t),l=Object(i.a)(O,e),s=Object(d.a)(O,e);return u.a.createElement(s,r()({},l,{className:o}),p.a.isNil(a)?n:a)}O.handledProps=["as","children","className","content"],O.propTypes={};var j=O;function g(e){var a=e.attached,t=e.block,n=e.children,o=e.className,l=e.color,h=e.content,v=e.disabled,O=e.dividing,w=e.floated,N=e.icon,S=e.image,y=e.inverted,C=e.size,k=e.sub,x=e.subheader,E=e.textAlign,q=c()("ui",l,C,Object(s.a)(t,"block"),Object(s.a)(v,"disabled"),Object(s.a)(O,"dividing"),Object(s.d)(w,"floated"),Object(s.a)(!0===N,"icon"),Object(s.a)(!0===S,"image"),Object(s.a)(y,"inverted"),Object(s.a)(k,"sub"),Object(s.b)(a,"attached"),Object(s.c)(E),"header",o),F=Object(i.a)(g,e),_=Object(d.a)(g,e);if(!p.a.isNil(n))return u.a.createElement(_,r()({},F,{className:q}),n);var G=m.a.create(N,{autoGenerateKey:!1}),T=b.a.create(S,{autoGenerateKey:!1}),X=f.create(x,{autoGenerateKey:!1});return G||T?u.a.createElement(_,r()({},F,{className:q}),G||T,(h||X)&&u.a.createElement(j,null,h,X)):u.a.createElement(_,r()({},F,{className:q}),h,X)}g.handledProps=["as","attached","block","children","className","color","content","disabled","dividing","floated","icon","image","inverted","size","sub","subheader","textAlign"],g.propTypes={},g.Content=j,g.Subheader=f;a.a=g},lpXu:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/createorder",function(){return t("+NoR")}])}},[["lpXu",0,1,2,3,4,5,6,7,8]]]);