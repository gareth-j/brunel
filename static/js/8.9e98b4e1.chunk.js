(this.webpackJsonpbrunel=this.webpackJsonpbrunel||[]).push([[8],{112:function(e,t,a){"use strict";var o=a(3),n=a(7),s=a(0),r=a.n(s),c=a(1),l=a.n(c),i=a(12),u=a.n(i),d=a(2),p={tag:d.e,className:l.a.string,cssModule:l.a.object},b=function(e){var t=e.className,a=e.cssModule,s=e.tag,c=Object(n.a)(e,["className","cssModule","tag"]),l=Object(d.c)(u()(t,"card-text"),a);return r.a.createElement(s,Object(o.a)({},c,{className:l}))};b.propTypes=p,b.defaultProps={tag:"p"},t.a=b},143:function(e,t,a){"use strict";var o=a(64);function n(e,t,a){return(n="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(e,t,a){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Object(o.a)(e)););return e}(e,t);if(n){var s=Object.getOwnPropertyDescriptor(n,t);return s.get?s.get.call(a):s.value}})(e,t,a||e)}a.d(t,"a",(function(){return n}))},320:function(e,t,a){"use strict";var o=a(3),n=a(7),s=a(0),r=a.n(s),c=a(1),l=a.n(c),i=a(12),u=a.n(i),d=a(2),p={tag:d.e,className:l.a.string,cssModule:l.a.object},b=function(e){var t=e.className,a=e.cssModule,s=e.tag,c=Object(n.a)(e,["className","cssModule","tag"]),l=Object(d.c)(u()(t,"card-title"),a);return r.a.createElement(s,Object(o.a)({},c,{className:l}))};b.propTypes=p,b.defaultProps={tag:"div"},t.a=b},59:function(e,t,a){"use strict";a.r(t);var o=a(25),n=a(0),s=a.n(n),r=a(26),c=a(61),l=a(62),i=a(66),u=a(64),d=a(143),p=a(65),b=a(73),f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).graphs=e.graphs,a.current_graph=0,a.slow_physics=e.slow_physics,a.fast_physics=e.fast_physics,a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"onClick",value:function(){var e=this.current_graph,t=this.graphs;(e+=1)>t.length-1&&(e=0);var a=this.Network.getViewPosition(),o=this.Network.getScale();this.Network.setOptions({physics:!1});var n=this.Network.getPositions();this.Network.setData(t[e]);for(var s=0,c=Object.entries(n);s<c.length;s++){var l=c[s],i=Object(r.a)(l,2),u=i[0],d=i[1];this.Network.moveNode(u,d.x,d.y)}this.Network.moveTo({position:a,scale:o}),setTimeout(function(){this.Network.setOptions({physics:this.slow_physics})}.bind(this),100),setTimeout(function(){this.Network.setOptions({physics:this.fast_physics})}.bind(this),350),this.current_graph=e}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("button",{className:"graph-buttton",onClick:function(){e.onClick()}},"Click Me!"),Object(d.a)(Object(u.a)(t.prototype),"render",this).call(this))}}]),t}(a.n(b).a),m=a(89),g=a(90),h=a(91),v=a(92),y=a(93),O=a(94),j=a(112),N=a(320);function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}var E=["John","James","Jane","Janet","Jason"],x=[{nodes:[{id:E[0],label:E[0],title:"{people[0]} tootip text"},{id:E[1],label:E[1],title:"node 2 tootip text"},{id:E[2],label:E[2],title:"node 3 tootip text"},{id:E[3],label:E[3],title:"node 4 tootip text"},{id:E[4],label:E[4],title:"node 5 tootip text"}],edges:[{from:E[0],to:E[1]},{from:E[1],to:E[2]},{from:E[2],to:E[3]},{from:E[3],to:E[4]}]},{nodes:[{id:E[0],label:E[0],title:"node 1 tootip text"},{id:E[1],label:E[1],title:"node 2 tootip text"},{id:E[2],label:E[2],title:"node 2 tootip text"},{id:E[3],label:E[3],title:"node 2 tootip text"},{id:E[4],label:E[4],title:"node 2 tootip text"}],edges:[{from:E[0],to:E[3]},{from:E[2],to:E[4]},{from:E[1],to:E[2]}]},{nodes:[{id:E[0],label:E[0],title:"node 1 tootip text"},{id:E[1],label:E[1],title:"node 1 tootip text"},{id:E[2],label:E[2],title:"node 1 tootip text"},{id:E[3],label:E[3],title:"node 1 tootip text"},{id:E[4],label:E[4],title:"node 1 tootip text"}],edges:[{from:E[0],to:E[3],dashes:!0,color:"red",smooth:{type:"curvedCW"}},{from:E[3],to:E[0],width:4,color:"blue",smooth:{type:"curvedCW"}},{from:E[0],to:E[4],dashes:!0,color:"red"},{from:E[1],to:E[2]}]}],M={enabled:!0,barnesHut:{gravitationalConstant:-50,centralGravity:0,springLength:50,springConstant:.02,damping:.2,avoidOverlap:.5},maxVelocity:30,minVelocity:.2,solver:"barnesHut",stabilization:{enabled:!0,iterations:100,updateInterval:10,onlyDynamicEdges:!1,fit:!0},timestep:.5,adaptiveTimestep:!0},k=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(Object(a),!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},M);k.timestep=.1;var P={height:"450px",width:"100%",layout:{randomSeed:42},manipulation:{enabled:!1,initiallyActive:!1},interaction:{navigationButtons:!0},edges:{shadow:!0,smooth:{enabled:!0,type:"continuous",roundness:.3},width:.5},physics:M},T={select:function(e){var t=e.nodes,a=e.edges;console.log(t),console.log(a)}};t.default=function(e){return s.a.createElement("div",null,s.a.createElement(m.a,null,s.a.createElement(g.a,null,s.a.createElement(h.a,null,s.a.createElement(v.a,null,s.a.createElement(y.a,{align:"center"},"A Great Britain's Social Network")))),s.a.createElement(g.a,null,s.a.createElement(h.a,null,s.a.createElement(v.a,{body:!0,outline:!0,color:"secondary",style:{height:"550px"}},s.a.createElement(O.a,null,s.a.createElement(f,{graph:x[0],graphs:x,options:P,events:T,slow_physics:k,fast_physics:M,getNetwork:function(e){}})))),s.a.createElement(h.a,{xs:"4"},s.a.createElement(v.a,{body:!0,outline:!0,color:"secondary",style:{height:"550px"}},s.a.createElement(y.a,{align:"center"},"Isambard Kingdom Brunel"),s.a.createElement("p",null,"Imagine this is a picture!"),s.a.createElement(O.a,null,s.a.createElement(j.a,null,"Information about Brunel. This could be a long description giving some background and information. Maybe also show the dates and times of change etc..."))))),s.a.createElement(g.a,null,s.a.createElement(h.a,null,s.a.createElement(v.a,null,s.a.createElement(N.a,{align:"center"},"See the source ",s.a.createElement("a",{href:"https://github.com/chryswoods/brunel"},"on GitHub")))))))}},89:function(e,t,a){"use strict";var o=a(3),n=a(7),s=a(0),r=a.n(s),c=a(1),l=a.n(c),i=a(12),u=a.n(i),d=a(2),p={tag:d.e,fluid:l.a.bool,className:l.a.string,cssModule:l.a.object},b=function(e){var t=e.className,a=e.cssModule,s=e.fluid,c=e.tag,l=Object(n.a)(e,["className","cssModule","fluid","tag"]),i=Object(d.c)(u()(t,s?"container-fluid":"container"),a);return r.a.createElement(c,Object(o.a)({},l,{className:i}))};b.propTypes=p,b.defaultProps={tag:"div"},t.a=b},90:function(e,t,a){"use strict";var o=a(3),n=a(7),s=a(0),r=a.n(s),c=a(1),l=a.n(c),i=a(12),u=a.n(i),d=a(2),p={tag:d.e,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool},b=function(e){var t=e.className,a=e.cssModule,s=e.noGutters,c=e.tag,l=e.form,i=Object(n.a)(e,["className","cssModule","noGutters","tag","form"]),p=Object(d.c)(u()(t,s?"no-gutters":null,l?"form-row":"row"),a);return r.a.createElement(c,Object(o.a)({},i,{className:p}))};b.propTypes=p,b.defaultProps={tag:"div"},t.a=b},91:function(e,t,a){"use strict";var o=a(3),n=a(7),s=a(0),r=a.n(s),c=a(1),l=a.n(c),i=a(12),u=a.n(i),d=a(2),p=l.a.oneOfType([l.a.number,l.a.string]),b=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:p,offset:p})]),f={tag:d.e,xs:b,sm:b,md:b,lg:b,xl:b,className:l.a.string,cssModule:l.a.object,widths:l.a.array},m={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},h=function(e){var t=e.className,a=e.cssModule,s=e.widths,c=e.tag,l=Object(n.a)(e,["className","cssModule","widths","tag"]),i=[];s.forEach((function(t,o){var n=e[t];if(delete l[t],n||""===n){var s=!o;if(Object(d.a)(n)){var r,c=s?"-":"-"+t+"-",p=g(s,t,n.size);i.push(Object(d.c)(u()(((r={})[p]=n.size||""===n.size,r["order"+c+n.order]=n.order||0===n.order,r["offset"+c+n.offset]=n.offset||0===n.offset,r)),a))}else{var b=g(s,t,n);i.push(b)}}})),i.length||i.push("col");var p=Object(d.c)(u()(t,i),a);return r.a.createElement(c,Object(o.a)({},l,{className:p}))};h.propTypes=f,h.defaultProps=m,t.a=h},92:function(e,t,a){"use strict";var o=a(3),n=a(7),s=a(0),r=a.n(s),c=a(1),l=a.n(c),i=a(12),u=a.n(i),d=a(2),p={tag:d.e,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},b=function(e){var t=e.className,a=e.cssModule,s=e.color,c=e.body,l=e.inverse,i=e.outline,p=e.tag,b=e.innerRef,f=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),m=Object(d.c)(u()(t,"card",!!l&&"text-white",!!c&&"card-body",!!s&&(i?"border":"bg")+"-"+s),a);return r.a.createElement(p,Object(o.a)({},f,{className:m,ref:b}))};b.propTypes=p,b.defaultProps={tag:"div"},t.a=b},93:function(e,t,a){"use strict";var o=a(3),n=a(7),s=a(0),r=a.n(s),c=a(1),l=a.n(c),i=a(12),u=a.n(i),d=a(2),p={tag:d.e,className:l.a.string,cssModule:l.a.object},b=function(e){var t=e.className,a=e.cssModule,s=e.tag,c=Object(n.a)(e,["className","cssModule","tag"]),l=Object(d.c)(u()(t,"card-header"),a);return r.a.createElement(s,Object(o.a)({},c,{className:l}))};b.propTypes=p,b.defaultProps={tag:"div"},t.a=b},94:function(e,t,a){"use strict";var o=a(3),n=a(7),s=a(0),r=a.n(s),c=a(1),l=a.n(c),i=a(12),u=a.n(i),d=a(2),p={tag:d.e,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},b=function(e){var t=e.className,a=e.cssModule,s=e.innerRef,c=e.tag,l=Object(n.a)(e,["className","cssModule","innerRef","tag"]),i=Object(d.c)(u()(t,"card-body"),a);return r.a.createElement(c,Object(o.a)({},l,{className:i,ref:s}))};b.propTypes=p,b.defaultProps={tag:"div"},t.a=b}}]);
//# sourceMappingURL=8.9e98b4e1.chunk.js.map