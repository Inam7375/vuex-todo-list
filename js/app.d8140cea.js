(function(e){function t(t){for(var n,a,i=t[0],u=t[1],d=t[2],l=0,p=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&p.push(c[a][0]),c[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);s&&s(t);while(p.length)p.shift()();return r.push.apply(r,d||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,i=1;i<o.length;i++){var u=o[i];0!==c[u]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},c={app:0},r=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vuex-todo-list/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var s=u;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"1e27":function(e,t,o){},"40ec":function(e,t,o){"use strict";o("55dc")},"55dc":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),c={class:"app"},r={class:"container"};function a(e,t,o,a,i,u){var d=Object(n["k"])("AddTodo"),s=Object(n["k"])("LimitTodo"),l=Object(n["k"])("Todos");return Object(n["h"])(),Object(n["c"])("div",c,[Object(n["f"])("div",r,[Object(n["f"])(d),Object(n["f"])(s),Object(n["f"])(l)])])}var i=Object(n["f"])("div",{class:"legend"},[Object(n["f"])("span",null,"Double click to mark as complete"),Object(n["f"])("span",null,[Object(n["f"])("span",{class:"incomplete-box"}),Object(n["e"])(" = Incomplete ")]),Object(n["f"])("span",null,[Object(n["f"])("span",{class:"complete-box"}),Object(n["e"])(" = Complete ")])],-1),u={class:"todos"};function d(e,t,o,c,r,a){return Object(n["h"])(),Object(n["c"])("div",null,[i,Object(n["f"])("div",u,[(Object(n["h"])(!0),Object(n["c"])(n["a"],null,Object(n["j"])(e.allTodos,(function(t){return Object(n["h"])(),Object(n["c"])("div",{onDblclick:function(e){return a.dbClick(t)},class:[{"is-complete":t.completed},"todo"],key:t.id},[Object(n["e"])(Object(n["l"])(t.title)+" ",1),Object(n["f"])("i",{onClick:function(o){return e.deleteTodo(t.id)},class:"fas fa-trash-alt"},null,8,["onClick"])],42,["onDblclick"])})),128))])])}var s=o("5530"),l=o("5502"),p={name:"Todos",methods:Object(s["a"])(Object(s["a"])({},Object(l["b"])(["fetchTodos","deleteTodo","updateTodo"])),{},{dbClick:function(e){var t={id:e.id,title:e.title,completed:!e.completed};this.updateTodo(t)}}),computed:Object(l["c"])(["allTodos"]),created:function(){this.fetchTodos()}};o("855f");p.render=d;var f=p,b={class:"add"},m=Object(n["f"])("input",{type:"submit",value:"Add"},null,-1);function j(e,t,o,c,r,a){return Object(n["h"])(),Object(n["c"])("div",b,[Object(n["f"])("form",{onSubmit:t[2]||(t[2]=function(){return a.onSubmit&&a.onSubmit.apply(a,arguments)})},[Object(n["o"])(Object(n["f"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.title=e}),placeholder:"Add Todo"},null,512),[[n["m"],r.title]]),m],32)])}var O={name:"AddTodo",data:function(){return{title:""}},methods:Object(s["a"])(Object(s["a"])({},Object(l["b"])(["addTodo"])),{},{onSubmit:function(e){e.preventDefault(),this.addTodo(this.title)}})};o("40ec");O.render=j;var h=O,v=Object(n["e"])(" Filter: "),g=Object(n["d"])('<option value="200">200</option><option value="100">100</option><option value="50">50</option><option value="20">20</option><option value="10">10</option>',5);function T(e,t,o,c,r,a){return Object(n["h"])(),Object(n["c"])("div",null,[v,Object(n["f"])("select",{onChange:t[1]||(t[1]=function(e){return a.logIndex(e.target)})},[g],32)])}var w={name:"LimitTodo",methods:Object(s["a"])(Object(s["a"])({},Object(l["b"])(["toggleTodo"])),{},{logIndex:function(e){this.toggleTodo(e.options[e.options.selectedIndex].innerText)}})};w.render=T;var y=w,x={name:"App",components:{Todos:f,AddTodo:h,LimitTodo:y}};o("a04a");x.render=a;var k=x,R=o("1da1"),S=(o("4de4"),o("c740"),o("a434"),o("96cf"),o("bc3a")),P=o.n(S),_={todos:[]},A={allTodos:function(e){return e.todos}},C={fetchTodos:function(e){return Object(R["a"])(regeneratorRuntime.mark((function t(){var o,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=e.commit,t.next=3,P.a.get("https://jsonplaceholder.typicode.com/todos");case 3:n=t.sent,o("setTodos",n.data);case 5:case"end":return t.stop()}}),t)})))()},addTodo:function(e,t){return Object(R["a"])(regeneratorRuntime.mark((function o(){var n,c;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return n=e.commit,o.next=3,P.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1});case 3:c=o.sent,n("newTodo",c.data);case 5:case"end":return o.stop()}}),o)})))()},deleteTodo:function(e,t){return Object(R["a"])(regeneratorRuntime.mark((function o(){var n,c;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return n=e.commit,o.next=3,P.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t));case 3:c=o.sent,console.log(c.status),n("removeTodo",t);case 6:case"end":return o.stop()}}),o)})))()},toggleTodo:function(e,t){return Object(R["a"])(regeneratorRuntime.mark((function o(){var n,c;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return n=e.commit,o.next=3,P.a.get("https://jsonplaceholder.typicode.com/todos/?_limit=".concat(t));case 3:c=o.sent,n("setTodos",c.data);case 5:case"end":return o.stop()}}),o)})))()},updateTodo:function(e,t){return Object(R["a"])(regeneratorRuntime.mark((function o(){var n,c;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return n=e.commit,o.next=3,P.a.put("https://jsonplaceholder.typicode.com/todos/".concat(t.id),t);case 3:c=o.sent,console.log(c.status),n("toggleTodo",c.data);case 6:case"end":return o.stop()}}),o)})))()}},I={setTodos:function(e,t){return e.todos=t},newTodo:function(e,t){e.todos.unshift(t)},removeTodo:function(e,t){return e.todos=e.todos.filter((function(e){return e.id!==t}))},toggleTodo:function(e,t){var o=e.todos.findIndex((function(e){return e.id===t.id}));-1!==o&&e.todos.splice(o,1,t)}},D={state:_,getters:A,actions:C,mutations:I},M=new l["a"].Store({modules:{todos:D}});Object(n["b"])(k).use(M).mount("#app")},"855f":function(e,t,o){"use strict";o("cf92")},a04a:function(e,t,o){"use strict";o("1e27")},cf92:function(e,t,o){}});
//# sourceMappingURL=app.d8140cea.js.map