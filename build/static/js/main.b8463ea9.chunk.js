(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{19:function(t,e,n){t.exports={App:"App_App__30_sm",appear:"App_appear__PwfWn",appearActive:"App_appearActive__1R_m3",notif:"App_notif__2YtsP"}},22:function(t,e,n){t.exports={wrapper:"Filter_wrapper__2jbRE",label:"Filter_label__O7jqJ",input:"Filter_input__32r4Z"}},23:function(t,e,n){t.exports={section:"Alert_section__P3kej",heading:"Alert_heading__1GHVZ"}},32:function(t,e,n){},33:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n(6),c=n.n(s),o=(n(32),n(14)),r=n(15),i=n(18),l=n(17),u=n(19),b=n.n(u),p=(n(33),n(8)),m=n.n(p),j=n(7),h=n(44),d=n(42),f=n(43),O=n(5),x=Object(O.b)("deleteList"),_=Object(O.b)("addList",(function(t,e){return{payload:{contact:{id:Object(f.a)(),name:t,number:e}}}})),g=Object(O.b)("filterList"),v=n(1),N={deleteList:x},C=Object(j.b)((function(t){var e=t.contacts,n=e.filter,a=e.items,s=n.toLowerCase();return{contacts:a.filter((function(t){return t.name.toLowerCase().includes(s)}))}}),N)((function(t){var e=t.contacts,n=t.deleteList;return Object(v.jsx)("div",{className:m.a.div,children:Object(v.jsx)(h.a,{component:"ul",className:m.a.ul,children:e.map((function(t){return Object(v.jsx)(d.a,{classNames:m.a,timeout:250,children:Object(v.jsxs)("li",{className:m.a.li,id:t.id,children:[Object(v.jsxs)("span",{children:[Object(v.jsx)("span",{className:m.a.span,children:t.name}),Object(v.jsx)("span",{className:m.a.span2,children:t.number})]}),Object(v.jsx)("button",{className:m.a.button,type:"submit",onClick:function(){return n(t.id)},children:"Delete"})]},t.id)},t.id)}))})})})),k=n(9),y=n.n(k),w=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={text:"",number:""},t.phonebookValue=function(e){return t.setState({text:e.target.value})},t.numberValue=function(e){return t.setState({number:e.target.value})},t.btnClick=function(e){e.preventDefault(),t.props.phonebookValue(t.state.text,t.state.number),t.setState({text:"",number:""})},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.state,e=t.text,n=t.number;return Object(v.jsxs)("form",{className:y.a.form,onSubmit:this.btnClick,children:[Object(v.jsxs)("label",{className:y.a.label,children:["Name",Object(v.jsx)("input",{className:y.a.input,type:"text",value:e,placeholder:"Enter name",onChange:this.phonebookValue})]}),Object(v.jsxs)("label",{className:y.a.label,children:["Number",Object(v.jsx)("input",{className:y.a.input,type:"number",max:"9999999999",value:n,placeholder:"Enter phone number",onChange:this.numberValue})]}),Object(v.jsx)("br",{}),Object(v.jsx)("button",{type:"submit",className:y.a.button,children:"Add contact"})]})}}]),n}(a.Component),A=n(22),L=n.n(A),S={changeFilter:g},F=Object(j.b)((function(t){return{filter:t.contacts.filter}}),S)((function(t){var e=t.filter,n=t.changeFilter;return Object(v.jsx)("div",{className:L.a.container,children:Object(v.jsxs)("label",{children:["Find contacts by name ",Object(v.jsx)("br",{}),Object(v.jsx)("input",{value:e,className:L.a.input,type:"text",placeholder:"Enter filter",onChange:function(t){return n(t.target.value)}})]})})})),P=n(23),V=n.n(P);function E(t){var e=t.massage;return Object(v.jsx)("div",{className:V.a.div,children:Object(v.jsx)("h3",{className:V.a.h1,children:e})})}var I,J=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={text:"",text2:"",message:!1,message2:!1},t.phonebookValue=function(e,n){""!==e&&""!==n&&!1===t.props.contacts.map((function(t){return t.name.toLowerCase()})).includes(e.toLowerCase())?t.props.onAddList(e,n):(t.setState({message2:!0,text2:"Fill in all the fields"}),setTimeout((function(){t.setState({message2:!1,text2:""})}),3e3)),t.props.contacts.map((function(t){return t.name.toLowerCase()})).includes(e.toLowerCase())&&t.setState({text:e})},t}return Object(r.a)(n,[{key:"componentDidUpdate",value:function(t,e){var n=this,a=this.state,s=a.text;if(!a.message&&this.props.contacts.map((function(t){return t.name.toLowerCase()})).includes(s.toLowerCase())&&""!==s)return this.setState({message:!0,text2:"Contact already exists!"}),void setTimeout((function(){n.setState({message:!1,text:"",text2:""})}),3e3);this.props.contacts!==t.contacts&&localStorage.setItem("contacts",JSON.stringify(this.props.contacts))}},{key:"render",value:function(){return Object(v.jsxs)("div",{className:b.a.App,children:[Object(v.jsxs)("div",{className:b.a.notif,children:[Object(v.jsx)(d.a,{in:!0,appear:!0,classNames:b.a,timeout:500,unmountOnExit:!0,children:Object(v.jsx)("h1",{children:"Phonebook"})}),Object(v.jsx)("div",{className:"alert",children:Object(v.jsx)(d.a,{in:this.state.message||this.state.message2,classNames:"alert",timeout:250,unmountOnExit:!0,children:Object(v.jsx)(E,{massage:this.state.text2})})})]}),Object(v.jsx)(w,{phonebookValue:this.phonebookValue}),Object(v.jsx)(d.a,{in:this.props.contacts.length>1,classNames:"filter",timeout:250,unmountOnExit:!0,children:Object(v.jsx)(F,{})}),Object(v.jsx)(C,{})]})}}]),n}(a.Component),D={onAddList:_},T=Object(j.b)((function(t){return{contacts:t.contacts.items}}),D)(J),R=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),a(t),s(t),c(t),o(t)}))},B=n(11),H=n(25),U=n(4),Y={contacts:{items:JSON.parse(localStorage.getItem("contacts"))?JSON.parse(localStorage.getItem("contacts")):[],filter:""}},Z=Object(O.c)(Y.contacts.items,(I={},Object(B.a)(I,x,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),Object(B.a)(I,_,(function(t,e){var n=e.payload;return[].concat(Object(H.a)(t),[n.contact])})),I)),q=Object(O.c)(Y.contacts.filter,Object(B.a)({},g,(function(t,e){return e.payload}))),z=Object(U.b)({items:Z,filter:q}),G=Object(O.a)({reducer:{contacts:z}});c.a.render(Object(v.jsx)(j.a,{store:G,children:Object(v.jsx)(T,{})}),document.getElementById("root")),R()},8:function(t,e,n){t.exports={form:"Contacts_form__2tfAw",label:"Contacts_label__3He0Q",input:"Contacts_input__iUIjK",btn:"Contacts_btn__rDtF9"}},9:function(t,e,n){t.exports={list:"Phonebook_list__2PXmm",item:"Phonebook_item__oCnwR",close:"Phonebook_close__3zYs2"}}},[[40,1,2]]]);
//# sourceMappingURL=main.b8463ea9.chunk.js.map