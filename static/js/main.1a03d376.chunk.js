(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(4),s=n.n(a),c=n(2),i=n(5),l=n(6),u=n(7),m=n(9),d=n(8),p=n(10),f=n(1),h=n.n(f),b=(h.a.string.isRequired,h.a.shape({name:h.a.string}).isRequired),O=(h.a.shape({title:h.a.string,completed:h.a.bool,id:h.a.number,user:b}).isRequired,h.a.arrayOf(h.a.shape({title:h.a.string,completed:h.a.bool,id:h.a.number,user:b}).isRequired).isRequired,n(18),function(e){var t=e.text,n=e.listOfTodos,r=e.onClick;return o.a.createElement("button",{className:"btn btn-primary btn--start",type:"button",onClick:function(){return r(n)}},t)}),v=(n(19),function(e){var t=e.user;return o.a.createElement("span",{className:"todo-list-item__user"},t.name)}),y=(n(20),function(e){var t=e.todo,n=t.title,r=t.completed,a=void 0!==r&&r,s=t.user,c=t.id,i=a?"todo-list-item todo-list-item--done":"todo-list-item";return o.a.createElement("span",{className:i},o.a.createElement("span",{className:"todo-list-item__id"},c),o.a.createElement(v,{user:s}),o.a.createElement("span",{className:"todo-list-item__name"},n))}),E=(n(21),function(e){var t=e.todos;return o.a.createElement("ul",{className:"list-group todo-list"},t.map(function(e){return o.a.createElement("li",{className:"list-group-item",key:e.id},o.a.createElement(y,{todo:e}))}))});n(22);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var j=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={todos:[],users:[],notShown:!0},n.getTodosWithUsers=function(e,t){return e.map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{user:t.find(function(t){return t.id===e.userId})})})},n.handleShow=function(){n.setState({notShown:!1})},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;Promise.all([fetch("https://jsonplaceholder.typicode.com/todos"),fetch("https://jsonplaceholder.typicode.com/users")]).then(function(e){var t=Object(c.a)(e,2),n=t[0],r=t[1];return Promise.all([n.json(),r.json()])}).then(function(t){var n=Object(c.a)(t,2),r=n[0],o=n[1];return e.setState({todos:r,users:o})})}},{key:"render",value:function(){var e=this.state,t=e.todos,n=e.users,r=e.notShown;console.log("todos",t),console.log("users",n);var a=this.getTodosWithUsers(t,n);return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Dynamic list of todos"),o.a.createElement("div",{className:"container"},r?o.a.createElement(O,{className:"btn--start",text:"Start",onClick:this.handleShow}):o.a.createElement("div",{className:"content"},o.a.createElement("p",null,o.a.createElement("span",null,"Todos: "),t.length),o.a.createElement("p",null,o.a.createElement("span",null,"Users: "),n.length),o.a.createElement(E,{todos:a}))))}}]),t}(r.Component);s.a.render(o.a.createElement(j,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.1a03d376.chunk.js.map