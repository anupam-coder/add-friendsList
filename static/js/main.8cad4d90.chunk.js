(this["webpackJsonphaptik-test"]=this["webpackJsonphaptik-test"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(10),o=n.n(a),s=n(3),i=n.n(s),u=n(4),j=n(2),l=(n(16),n(8)),f=n(0),d=function(e){var t=e.friends,n=(e.completeFriend,e.removeFriend),c=t[0],a=Object(r.useState)(!1),o=Object(j.a)(a,2),s=o[0],i=o[1];return console.log(c),c.map((function(e,t){return Object(f.jsxs)("div",{className:"todo-row",children:[Object(f.jsxs)("div",{children:[e,Object(f.jsx)("div",{children:"is your friend"})]},e.id),Object(f.jsxs)("div",{className:"icons",children:[Object(f.jsx)(l.a,{onClick:function(){return n(e.id)},className:"delete-icon"}),Object(f.jsx)(l.b,{onClick:function(){return i(!1===s)},style:s?{color:"yellow"}:{color:"white"},className:"star-icon"})]})]},t)}))},b=function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),n=(t[0],t[1]),c=Object(r.useState)(""),a=Object(j.a)(c,2),o=(a[0],a[1]),s=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3001/friends").then((function(e){return e.json()})).then((function(e){e.map((function(e,t){n(e),o(e.name)}))}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){s()}),[]);return Object(f.jsx)(f.Fragment,{})},h=n(9);var O=function(e){var t=Object(r.useState)(""),n=Object(j.a)(t,2),c=n[0],a=n[1],o=Object(r.useRef)(null);Object(r.useEffect)((function(){o.current.focus()}));var s=function(e){console.log(e.target.value),e.preventDefault(),fetch("http://localhost:3001/friends",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({id:Math.floor(1e4*Math.random()),name:e.target.value})}),a("")};return Object(f.jsxs)("form",{onSubmit:s,className:"todo-form",children:["        ",Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("input",{placeholder:"Enter your friend's name",value:c,onChange:function(e){a(e.target.value)},name:"text",className:"todo-input",ref:o}),Object(f.jsx)("button",{value:c,onClick:s,className:"todo-button",children:"Add Friend"})]})]})};var m=function(e){var t=e.data.map((function(e){return e.name})),n=Object(r.useState)([t]),c=Object(j.a)(n,2),a=c[0],o=c[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"Friends"}),Object(f.jsx)(O,{onSubmit:function(e){if(e.text&&!/^\s*$/.test(e.text)){var t=[e].concat(Object(h.a)(a));o(t)}}}),Object(f.jsx)(d,{friends:a,completeFriend:function(e){var t=a.map((function(t){return t.id===e&&(t.isComplete=!t.isComplete),t}));o(t)},removeFriend:function(e){var t=Object(h.a)(a).filter((function(t){return t.id!==e}));console.log(),o(t)}})]})};var p=function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)((function(){a()}),[n]);var a=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3001/friends").then((function(e){return e.json()})).then((function(e){return c(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object.values(n),Object(f.jsxs)("div",{className:"todo-app",children:[Object(f.jsx)(m,{data:[{id:1,name:"Rahul Gupta"},{id:2,name:"Virat Kohli"},{id:3,name:"Leo Messi"},{id:4,name:"Cr Ronaldo"}]}),Object(f.jsx)(b,{})]})};o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(p,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.8cad4d90.chunk.js.map