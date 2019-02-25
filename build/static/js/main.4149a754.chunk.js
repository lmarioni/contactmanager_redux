(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,a){e.exports=a(79)},77:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(35),c=a.n(o),i=a(6),l=a(7),s=a(10),m=a(8),u=a(11),p=a(81),d=a(82),h=a(83),f=a(80),v=a(9),E=a(12),b=a.n(E),g=a(17),y=a(18),C=a.n(y),N=function(e){return function(){var t=Object(g.a)(b.a.mark(function t(a){var n;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.post("https://jsonplaceholder.typicode.com/users",e);case 2:n=t.sent,a({type:"ADD_CONTACT",payload:n.data});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},a.onDeleteClick=function(e){a.props.deleteContact(e)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,n=t.name,o=t.email,c=t.phone,i=this.state.showContactInfo;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n," ",r.a.createElement("i",{onClick:function(){return e.setState({showContactInfo:!e.state.showContactInfo})},className:"fas fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:this.onDeleteClick.bind(this,a)}),r.a.createElement(f.a,{to:"contact/edit/".concat(a)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}}))),i?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",o),r.a.createElement("li",{className:"list-group-item"},"Phone: ",c)):null)}}]),t}(n.Component),j=Object(v.b)(null,{deleteContact:function(e){return function(){var t=Object(g.a)(b.a.mark(function t(a){return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.delete("https://jsonplaceholder.typicode.com/users/".concat(e));case 2:200===t.sent.status&&a({type:"DELETE_CONTACT",payload:e});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}})(O),w=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getContacts()}},{key:"render",value:function(){var e=this.props.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),e.map(function(e){return r.a.createElement(j,{key:e.id,contact:e})}))}}]),t}(n.Component),k=Object(v.b)(function(e){return{contacts:e.contact.contacts}},{getContacts:function(){return function(){var e=Object(g.a)(b.a.mark(function e(t){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("https://jsonplaceholder.typicode.com/users");case 2:a=e.sent,t({type:"GET_CONTACTS",payload:a.data});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}})(w),T=a(14),S=a(37),A=a.n(S),_=function(e){var t=e.label,a=e.name,n=e.value,o=e.placeholder,c=e.type,i=e.onChange,l=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},t),r.a.createElement("input",{type:c,name:a,className:A()("form-control form-control-lg",{"is-invalid":l}),placeholder:o,value:n,onChange:i}),l&&r.a.createElement("div",{className:"invalid-feedback"},l))};_.defaultProps={type:"text"};var x=_,D=a(1),P=a.n(D),I=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onSubmit=function(e){e.preventDefault();var t=a.state,n=t.name,r=t.email,o=t.phone;if(""!==n)if(""!==r)if(""!==o){var c={name:n,email:r,phone:o};a.props.addContact(c),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/")}else a.setState({errors:{phone:"Phone is required"}});else a.setState({errors:{email:"Email is required"}});else a.setState({errors:{name:"Name is required"}})},a.onChange=function(e){return a.setState(Object(T.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.phone,o=e.errors;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement(x,{label:"Name",name:"name",placeholder:"Enter Name",value:t,onChange:this.onChange,error:o.name}),r.a.createElement(x,{label:"Email",name:"email",type:"email",placeholder:"Enter Email",value:a,onChange:this.onChange,error:o.email}),r.a.createElement(x,{label:"Phone",name:"phone",placeholder:"Enter Phone",value:n,onChange:this.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}))))}}]),t}(n.Component);N.propTypes={addContact:P.a.func.isRequired};var q=Object(v.b)(null,{addContact:N})(I),L=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onSubmit=function(e){e.preventDefault();var t=a.state,n=t.name,r=t.email,o=t.phone,c=t.id;if(""!==n)if(""!==r)if(""!==o){var i={id:c,name:n,email:r,phone:o};a.props.editContact(i),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/")}else a.setState({errors:{phone:"Phone is required"}});else a.setState({errors:{email:"Email is required"}});else a.setState({errors:{name:"Name is required"}})},a.onChange=function(e){return a.setState(Object(T.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e,t){var a=e.contactoEdit[0],n=a.name,r=a.email,o=a.phone,c=a.id;this.setState({id:c,name:n,email:r,phone:o})}},{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getContact(e)}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.phone,o=e.errors;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement(x,{label:"Name",name:"name",placeholder:"Enter Name",value:t,onChange:this.onChange,error:o.name}),r.a.createElement(x,{label:"Email",name:"email",type:"email",placeholder:"Enter Email",value:a,onChange:this.onChange,error:o.email}),r.a.createElement(x,{label:"Phone",name:"phone",placeholder:"Enter Phone",value:n,onChange:this.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-light btn-block"}))))}}]),t}(n.Component),R=Object(v.b)(function(e){return{contactoEdit:e.contact.contactoEdit}},{getContact:function(e){return function(t){t({type:"GET_CONTACT",payload:e})}},editContact:function(e){return function(){var t=Object(g.a)(b.a.mark(function t(a){return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.put("https://jsonplaceholder.typicode.com/users/".concat(e.id),e);case 2:t.sent,a({type:"EDIT_CONTACT",payload:e});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}})(L),W=function(e){var t=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.a,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.a,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"})," Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.a,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"})," About"))))))};W.defaultProps={branding:"My App"};var M=W,G=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple app to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))},U=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry, that page does not exist"))},X=a(13),F=a(38),V=a(40),B=a(15),J={contacts:[],contacto:{}},H=Object(X.c)({contact:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CONTACTS":return Object(B.a)({},e,{contacts:t.payload});case"DELETE_CONTACT":return Object(B.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==t.payload})});case"ADD_CONTACT":return Object(B.a)({},e,{contacts:[t.payload].concat(Object(V.a)(e.contacts))});case"GET_CONTACT":return Object(B.a)({},e,{contactoEdit:e.contacts.filter(function(e){return e.id==t.payload})});case"EDIT_CONTACT":return Object(B.a)({},e,{contacts:e.contacts.map(function(e){return e.id===t.payload.id?e=t.payload:e})});default:return e}}}),Q=[F.a],$=Object(X.e)(H,{},Object(X.d)(X.a.apply(void 0,Q),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),z=(a(76),a(77),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,{store:$},r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(M,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(d.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:k}),r.a.createElement(h.a,{exact:!0,path:"/contact/add",component:q}),r.a.createElement(h.a,{exact:!0,path:"/contact/edit/:id",component:R}),r.a.createElement(h.a,{exact:!0,path:"/about",component:G}),r.a.createElement(h.a,{component:U}))))))}}]),t}(n.Component)),K=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Y(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(z,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");K?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Y(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):Y(e)})}}()}},[[41,1,2]]]);
//# sourceMappingURL=main.4149a754.chunk.js.map