(this.webpackJsonpexplorext=this.webpackJsonpexplorext||[]).push([[0],{58:function(A,e,g){},59:function(A,e,g){},60:function(A,e,g){},62:function(A,e,g){},63:function(A,e,g){},64:function(A,e,g){},65:function(A,e,g){},66:function(A,e,g){},67:function(A,e,g){},73:function(A,e,g){},74:function(A,e,g){"use strict";g.r(e);var E=g(0),B=g(21),t=g.n(B),C=(g(58),g(5)),a=(g(59),[{type:"folder",name:"Instruments",childrens:[{type:"folder",name:"Fender",childrens:[{type:"folder",name:"Acoustic guitar",childrens:[{type:"file",name:"file 1"},{type:"file",name:"file 2"}]},{type:"folder",name:"Electric guitar",childrens:[{type:"file",name:"file 3"},{type:"file",name:"file 4"}]}]},{type:"folder",name:"Yamaha",childrens:[{type:"file",name:"file 5"},{type:"file",name:"file 6"}]}]},{type:"folder",name:"Songs"}]),n=(g(60),g(1));var c=function(A){var e=A.setOpen;return Object(n.jsxs)("div",{className:"modal-container",children:[Object(n.jsxs)("div",{className:"modal-input-container lock-modal",children:[Object(n.jsx)("input",{className:"modal-input lock-modal-input",type:"text"}),Object(n.jsx)("input",{className:"modal-input lock-modal-input",type:"text"}),Object(n.jsx)("input",{className:"modal-input lock-modal-input",type:"text"}),Object(n.jsx)("input",{className:"modal-input lock-modal-input",type:"text"})]}),Object(n.jsx)("button",{className:"modal-create-file",onClick:function(){e(!1)},children:"Unlock"})]})},s=function(A){var e=A.active,g=A.setActive,B=A.name,t=A.children,a=A.path,c=A.setBreadCrumb,s=Object(E.useState)(!1),l=Object(C.a)(s,2),r=l[0],Q=l[1];console.log(e),console.log(B);var d=e==B?"folder--label dark":"folder--label";return Object(n.jsxs)("div",{className:"tree-folder",children:[Object(n.jsxs)("div",{className:d,onClick:function(A){A.preventDefault(),g(A.currentTarget.children[1].innerText),c(a),Q(!r)},children:[Object(n.jsx)("img",{src:r?"data:image/png;base64,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":"data:image/png;base64,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AAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUCEBAAAVEgAAUKEmyb6uhwAAxqgpaZI83PUcAMAYNWXYpBUAAFCVpiw1KXmk6zkAgDHqZaFJ8mDXcwAAY9Q0B5q07Z6u5wAAxqhf7m6S8r2u5wAAxqjf3N4k5btdzwEAjFGv/J8m/VYAAEBNSvmfTR5auCPJ3q5nAQDGoFfaTJx6XVMuvWkhKdd3PQ8AMAZT/fvKFdfuf+y3AIZf7nYaAGAsppqvJgd/DGhYBAAA1GCi/7nkYADcM3VTkh91OQ8AMGL9pk3/5i8kjwVAueLaxST/qdOhAIDR2jq4rVyRxeTgCkCSlPaazgYCAEZvsvk3B/9bDv6nbVNy2/P3JNndyVDA+H3tnq4nAMZloreYv3f7ZCkZJoesAJSSNm3+Q3eTAQAjs7X/ZwcP/smhpwCSpOR3kiyMeyYAYIRKksnBuw596EkBUC688a7EKgAAbCqzE98rL//WjYc+1Bz2omH5YJKlcc0EAIxSSbb0f/XHHz0sAMrFN9yRNr8/nqEAgJHaNrirvOKW//bjDx++ApAkbfu+uBYAADa2JsmW/tuO9tRhysVf/U5KfnOkQwEAo7Vj6vojffpPjrYCkCSPLLwvyV0jGgkAGKWJ3mIGB159tKePGgDl0pseTfLOkQwFAIzWzomPlFfuOerdvsrRnjiovfX5n0vy99d0KGB9cCdA2Jy2TdxZfv62uWO95OinAA4aTv2DJLet1UwAwAhN9BYyO/k3jvey4wZAufjaR5LymiT71mQwAGA0mpJsm3x9+Zvf/MvjvnQl2ysX3nBzUt5x8pMBACNzysRV5VW3fH4lL11RACRJufCGT6bkoyc+FQAwMqdMXV9edesbV/ryFQdAkuT8G9+dtv3UamcCAEZo+8T387PfedFq3rKqACglbS58xj9M8p9XNRgAMBqzE3dn21MvPvSnfldidSsASUr5vaVsLb+U5IurfS8AsIa2Dn6YHVMXlCuu3b/at646AJKknHXDvlxw1quT8tsn8n4A4CRtm7gjO582V674xoMn8vbj3gjoWNo2Jbc9/z1J3nMy2wE64kZAsDHtnLwxf/vWn1rtsv+hTmgF4KBS0pYLb3xv2vKGJHtPZlsAwHH00ubUqU+Un7v1BSdz8E9OMgAOKhfdcHVK75Ik31qL7QEAP2aqfyCnz7y6vOo7/3gtNrcmAZAk5YLrv5u9Cy9Iyb9fq20CAEm2T9yWpw/OKC+7+b+s1SZP6hqAo2lvfcGLk3w8aS8exfaBNeIaAFjfJnoL2T54T/lb3/nQWm96zVYADlUuvOEr2Tv/3JT215M8Mop9AMCm1ZRk5+RXsu2UU0dx8E9GtAJwqPbmy87KoPfutHlzkqlR7w9YBSsAsL40JZkd3JyZ3lvKy779tVHuauQBcFB7xwufkoXhLyf59STbx7Vf4BgEAKwPTUm2Db6ZrYO3lJfefNM4djm2ADiovfV5u1KaX0qb1yW5bNz7Bw4hAKBb0/29mRn8UVLeXV51y55x7nrsAXCo9nvPvzBLeV3S/mJSzu9yFqiSAIDxm+ofyJb+1zPV/2B52be+1NUYnQbAodrbfuqMZPGlGeaKpLw4Jed0PRNsegIARm+it5Dp3p2Z7P1Jmvx2ecW3v9H1SMk6CoAf137z2TPpz5yX0p6XUs5P2t1JZpNsT5ttKdmaFBcVwsn45n1ndT0CbGhNhillMU05kJJ9acq+9JsfpGm+ldJ8Nc3ePymv3KO0AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2LD+P7+64ebsY0DYAAAAAElFTkSuQmCC"}),Object(n.jsx)("span",{children:B})]}),t&&Object(n.jsx)("div",{className:r?"collapsible open":"collapsible",children:t})]})},l=function A(e){var g=e.active,E=e.setActive,B=e.data,t=e.path,C=e.setBreadCrumb,a=B.map((function(e){if("folder"===e.type)return e.childrens?Object(n.jsx)(s,{setActive:E,active:g,name:e.name,path:"".concat(t,"/").concat(e.name),setBreadCrumb:C,children:Object(n.jsx)(A,{setActive:E,active:g,data:e.childrens,path:"".concat(t,"/").concat(e.name),setBreadCrumb:C})}):Object(n.jsx)(s,{setActive:E,active:g,name:e.name,path:"".concat(t,"/").concat(e.name),setBreadCrumb:C})}));return a=a.filter((function(A){return void 0!=A}))},r=(g(62),function(A){var e=A.data,g=A.setBreadCrumb,B=Object(E.useState)(""),t=Object(C.a)(B,2),a=t[0],c=t[1];return Object(n.jsx)("div",{className:"tree",children:Object(n.jsx)(l,{active:a,setActive:c,data:e,path:"",setBreadCrumb:g})})}),Q=g.p+"static/media/logo.f0f8f2b8.png";g(63);var d=function(A){var e=A.tree,g=A.setBreadCrumb,B=Object(E.useState)(!1),t=Object(C.a)(B,2),a=t[0],s=t[1];return Object(n.jsxs)("div",{className:"sidebar",children:[Object(n.jsxs)("div",{className:"sidebar__header",children:[Object(n.jsx)("img",{src:Q,className:"sidebar__logo",alt:"logo"}),Object(n.jsx)("h3",{className:"sidebar__title",children:"ExploreXT"})]}),Object(n.jsx)("div",{className:"sidebar__folders",children:Object(n.jsx)(r,{data:e,setBreadCrumb:g})}),Object(n.jsx)("div",{className:"lock-btn",onClick:function(){s(!0)},children:"Lock"}),a&&Object(n.jsx)("div",{className:"blur-background",children:Object(n.jsx)(c,{setOpen:s})})]})},f=g(24),I="data:image/png;base64,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";g(64);var i=function(A){var e=A.setEditFile,g=A.fileData;return Object(n.jsx)("div",{className:"edit-file-blur",children:Object(n.jsxs)("div",{class:"edit-file-container",children:[Object(n.jsxs)("div",{class:"heading-container",children:[Object(n.jsx)("img",{src:I,alt:"document"}),Object(n.jsx)("p",{class:"file-name",children:g.name})]}),Object(n.jsx)("div",{class:"edit-file-input",children:Object(n.jsx)("textarea",{name:"",id:"",cols:"30",rows:"10",onChange:function(){}})}),Object(n.jsx)("button",{class:"save-file",onClick:function(){e(!1)},children:"Save file"})]})})};g(65);var v=function(A){var e=A.tree,g=A.breadCrumb,B=Object(E.useState)(!1),t=Object(C.a)(B,2),a=t[0],c=t[1],s=Object(E.useState)({}),l=Object(C.a)(s,2),r=l[0],Q=l[1],d=Object(E.useState)([]),v=Object(C.a)(d,2),w=v[0],b=v[1];Object(E.useEffect)((function(){!function A(e,g,E){if(void 0!=E&&0!=g.length)for(var B=0;B<E.length;B++)if("folder"==E[B].type&&E[B].name==g[e]){if(e==g.length-1)return void b(E[B].childrens||[]);A(e+1,g,E[B].childrens)}}(0,g.split("/").slice(1),e)}),[g]);var k=w.filter((function(A){return"folder"!==A.type}));return Object(n.jsxs)("div",{className:"main",children:[k.map((function(A){return Object(n.jsxs)("div",{className:"file",onClick:function(){return function(A){Q(Object(f.a)(Object(f.a)({},A),{},{path:g})),c(!0)}(A)},children:[Object(n.jsx)("img",{className:"file-img",src:I,alt:"document"}),Object(n.jsx)("p",{className:"file-name",children:A.name})]})})),a&&Object(n.jsx)(i,{setEditFile:c,fileData:r})]})},w=(g(66),g(104)),b=g(105);g(67);function k(A){var e=A.open,g=A.anchorEl,E=A.handleClose;return Object(n.jsx)("div",{children:Object(n.jsxs)(w.a,{id:"basic-menu",anchorEl:g,open:e,onClose:E,MenuListProps:{"aria-labelledby":"basic-button"},children:[Object(n.jsx)(b.a,{onClick:E,children:"File"}),Object(n.jsx)(b.a,{onClick:E,children:"Folder"})]})})}g(73);var j=function(A){var e=A.placeholder,g=A.btnText,B=(A.type,A.breadCrumb),t=A.setOpenModal,a=A.setData,c=(A.tree,A.setTree,Object(E.useState)("")),s=Object(C.a)(c,2),l=(s[0],s[1]);return B.split("/"),Object(n.jsx)("div",{className:"modal-blur",children:Object(n.jsxs)("div",{className:"modal-container",children:[Object(n.jsxs)("div",{className:"modal-input-container create-modal",children:[Object(n.jsx)("img",{src:I,alt:"images"}),Object(n.jsx)("input",{placeholder:e,className:"modal-input create-modal-input",type:"text",onChange:function(A){l(A.target.value)}})]}),Object(n.jsx)("button",{className:"modal-create-file",onClick:function(){t(!1),a({placeholder:"",btnText:""})},children:g})]})})};var o=function(A){var e=A.breadCrumb,g=A.tree,B=A.setTree,t=Object(E.useState)({placeholder:"",btnText:"",type:""}),a=Object(C.a)(t,2),c=a[0],s=a[1],l=Object(E.useState)(!1),r=Object(C.a)(l,2),Q=r[0],d=r[1],I=Object(E.useState)(null),i=Object(C.a)(I,2),v=i[0],w=i[1],b=Boolean(v);return Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)("div",{className:"breadcrumbs",children:e}),Object(n.jsx)("div",{className:"grow"}),Object(n.jsxs)("div",{className:"header__actions",children:[Object(n.jsx)("input",{placeholder:"Search..",className:"search__input"}),Object(n.jsx)("button",{"aria-controls":"basic-menu","aria-haspopup":"true","aria-expanded":b?"true":void 0,onClick:function(A){w(A.currentTarget)},className:"header__create-btn",children:"+"}),Object(n.jsx)(k,{open:b,anchorEl:v,handleClose:function(A){"File"==A.target.outerText?s({placeholder:"Enter file name..",btnText:"Create File",type:"file"}):s({placeholder:"Enter folder name..",btnText:"Create Folder",type:"folder"}),d(!0),w(null)}})]}),Q&&Object(n.jsx)(j,Object(f.a)(Object(f.a)({},c),{},{breadCrumb:e,setOpenModal:d,setData:s,tree:g,setTree:B}))]})};var D=function(){var A=Object(E.useState)(""),e=Object(C.a)(A,2),g=e[0],B=e[1],t=Object(E.useState)(a),c=Object(C.a)(t,2),s=c[0],l=c[1];return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)(d,{tree:s,setBreadCrumb:B}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(o,{breadCrumb:g,tree:s,setTree:l}),Object(n.jsx)(v,{breadCrumb:g,tree:s})]})]})};t.a.render(Object(n.jsx)(D,{}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.b2146eca.chunk.js.map