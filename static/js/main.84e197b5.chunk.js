(this["webpackJsonpshop-task"]=this["webpackJsonpshop-task"]||[]).push([[0],{11:function(e,t,n){},22:function(e,t,n){e.exports=n(32)},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(19),c=n.n(o),l=(n(11),n(9)),i=n(1),m=n(2),u=n(3),s=n(4),f=n(5),p=function(e){Object(f.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={count:0},e.onIncClick=function(){e.setState((function(e){return{count:e.count+1}}))},e.onDecClick=function(){e.setState((function(e){return{count:e.count-1}}))},e.onResetClick=function(){e.setState((function(e){return{count:0*e.count}}))},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:{width:"400px"},className:"container"},r.a.createElement("h1",{className:"title"},"\u0421\u0447\u0435\u0442\u0447\u0438\u043a ",this.state.count),r.a.createElement("div",{className:"button-group d-flex"},r.a.createElement("button",{onClick:this.onIncClick,className:"btn btn-primary mr-2 ml-3"},"INC"),r.a.createElement("button",{onClick:this.onDecClick,className:"btn btn-primary mr-2"},"DEC"),r.a.createElement("button",{onClick:this.onResetClick,className:"btn btn-primary"},"RESET")))}}]),n}(a.Component),d=n(16),h=n(8),b=function(e){var t=e.totalItems,n=e.doneCount,a=e.doneImportant;return r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("div",null,r.a.createElement("h1",null,"My Todo App")),r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("span",null,"Total items: ",t),r.a.createElement("span",null,"Imtortamt: ",a),r.a.createElement("span",null,"Done: ",n)))},g=function(e){Object(f.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.onChangeSerch=function(t){var n=t.target.value;e.setState({term:n}),e.props.onChangeSerch(n)},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("input",{onChange:this.onChangeSerch,type:"text",value:this.state.term,placeholder:"Search...",className:"form-control mr-2"})}}]),n}(a.Component),v=function(e){Object(f.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).buttonGroup=[{name:"all",text:"All"},{name:"important",text:"Important"},{name:"done",text:"Done"}],e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.filter,n=e.onFilterItem,a=this.buttonGroup.map((function(e){var a=e.name,o=e.text,c=t===a?"btn-info":"btn-outline-secondary";return r.a.createElement("button",{key:a,type:"button",className:"btn ".concat(c),onClick:function(){return n(a)}},o)}));return r.a.createElement("div",{className:"btn-group"},a)}}]),n}(a.Component),E=n(21),I=function(e){Object(f.a)(n,e);var t=Object(s.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.text,n=e.onItemDeleted,a=e.onToggleDone,o=e.onToggleImportant,c="list-group-item";return e.done&&(c+=" done"),e.important&&(c+=" important"),r.a.createElement("div",{className:c},r.a.createElement("span",{onClick:a,className:"list-group-item-name"},t),r.a.createElement("div",{className:" float-right "},r.a.createElement("i",{onClick:o,className:"btn btn-success fa fa-info  mr-1"}),r.a.createElement("i",{onClick:n,className:"btn btn-danger fa fa-trash "})))}}]),n}(a.Component),j=function(e){Object(f.a)(n,e);var t=Object(s.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.items,n=e.onItemDeleted,a=e.onToggleDone,o=e.onToggleImportant,c=t.map((function(e){var t=e.id,c=Object(E.a)(e,["id"]);return r.a.createElement("li",{key:t},r.a.createElement(I,Object.assign({},c,{onItemDeleted:function(){return n(t)},onToggleDone:function(){return a(t)},onToggleImportant:function(){return o(t)}})))}));return r.a.createElement("ul",{className:"list-group"},c)}}]),n}(a.Component),O=function(e){Object(f.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={text:""},e.onItemChange=function(t){e.setState({text:t.target.value})},e.onItemSubmit=function(t){t.preventDefault(),e.state.text&&(e.props.onItemAdd(e.state.text),e.setState({text:""}))},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("form",{className:"d-flex",onSubmit:this.onItemSubmit},r.a.createElement("input",{type:"text",value:this.state.text,placeholder:"Write a note...",className:"form-control mr-2",onChange:this.onItemChange}),r.a.createElement("button",{className:"btn btn-primary w-25"},"Add Item"))}}]),n}(a.Component),y=function(e){Object(f.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).generId=1e3,e.state={items:[e.createTodoItem("\u0423\u0441\u0442\u0440\u043e\u0438\u0442\u0441\u044f \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0443"),e.createTodoItem("\u041a\u0443\u043f\u0438\u0442\u044c \u043d\u043e\u0443\u0442\u0431\u0443\u043a"),e.createTodoItem("\u0420\u0430\u0437\u0432\u0438\u0432\u0430\u0442\u0441\u044f")],term:"",filter:"all"},e.deletedItem=function(t){e.setState((function(e){var n=e.items,a=n.findIndex((function(e){return e.id===t}));return{items:[].concat(Object(h.a)(n.slice(0,a)),Object(h.a)(n.slice(a+1)))}}))},e.addItem=function(t){var n=e.createTodoItem(t);e.setState((function(e){var t=e.items;return{items:[].concat(Object(h.a)(t),[n])}}))},e.onToggleDone=function(t){e.setState((function(e){var n=e.items,a=n.findIndex((function(e){return e.id===t})),r=n[a],o=Object(d.a)({},r,{done:!r.done});return{items:[].concat(Object(h.a)(n.slice(0,a)),[o],Object(h.a)(n.slice(a+1)))}}))},e.onToggleImportant=function(t){e.setState((function(e){var n=e.items,a=n.findIndex((function(e){return e.id===t})),r=n[a],o=Object(d.a)({},r,{important:!r.important});return{items:[].concat(Object(h.a)(n.slice(0,a)),[o],Object(h.a)(n.slice(a+1)))}}))},e.onChangeSerch=function(t){e.setState({term:t})},e.onFilterItem=function(t){e.setState({filter:t})},e}return Object(u.a)(n,[{key:"createTodoItem",value:function(e){return{text:e,id:this.generId++,done:!1,important:!1}}},{key:"serchItems",value:function(e,t){return 0===t.length?e:e.filter((function(e){return e.text.toLowerCase().indexOf(t.toLowerCase())>-1}))}},{key:"filterItem",value:function(e,t){switch(t){case"all":return e;case"important":return e.filter((function(e){return e.important}));case"done":return e.filter((function(e){return e.done}));default:return e}}},{key:"render",value:function(){var e=this.state,t=e.items,n=e.term,a=e.filter,o=this.filterItem(this.serchItems(t,n),a),c=o.length,l=t.filter((function(e){return e.done})).length,i=t.filter((function(e){return e.important})).length;return r.a.createElement("div",{style:{width:"600px"},className:"container"},r.a.createElement(b,{totalItems:c,doneCount:l,doneImportant:i}),r.a.createElement("div",{className:"d-flex  mb-2"},r.a.createElement(g,{onChangeSerch:this.onChangeSerch}),r.a.createElement(v,{filter:a,onFilterItem:this.onFilterItem})),r.a.createElement(O,{onItemAdd:this.addItem}),r.a.createElement(j,{items:o,onItemDeleted:this.deletedItem,onToggleDone:this.onToggleDone,onToggleImportant:this.onToggleImportant}))}}]),n}(a.Component),C=function(){return r.a.createElement("div",{className:" d-flex"},r.a.createElement(l.b,{to:"/"},r.a.createElement("h2",{className:"mr-5"},"My App")),r.a.createElement("ul",{className:"list-group list-group-horizontal d-flex"},r.a.createElement("li",{className:"list-group-item item "},r.a.createElement(l.b,{to:"/counter"},r.a.createElement("h3",null,"Counter"))),r.a.createElement("li",{className:"list-group-item item "},r.a.createElement(l.b,{to:"/todoApp"},r.a.createElement("h3",null,"Todo App")))))},x=function(){return r.a.createElement(l.a,null,r.a.createElement(C,null),r.a.createElement("div",null,r.a.createElement(i.a,{path:"/counter",exact:!0,component:p}),r.a.createElement(i.a,{path:"/todoApp",component:y})))};c.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.84e197b5.chunk.js.map