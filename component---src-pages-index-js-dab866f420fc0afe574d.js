(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{150:function(e,t,a){"use strict";a.r(t);a(33);var n=a(75),r=a.n(n),i=a(0),c=a.n(i),l=a(167),o=a(4),s=a.n(o),u=a(156),d=a(157),m=a(160),p=a(161),h=a.n(p),f=a(197),v=a.n(f),b=a(168),E=a(286),g=a(289),y=a(178),k=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).handleClick=function(e){var a=t.props,n=a.onClick;if(a.disabled)return e.preventDefault(),void e.stopPropagation();n&&n(e)},t}return Object(m.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.bsPrefix,a=e.active,n=e.disabled,r=e.className,i=e.variant,l=e.action,o=e.as,s=e.eventKey,m=Object(d.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey"]);return c.a.createElement(g.a,Object(u.a)({},m,{eventKey:Object(y.b)(s,m.href),as:o||(l?m.href?"a":"button":"div"),onClick:this.handleClick,className:h()(r,t,a&&"active",n&&"disabled",i&&t+"-"+i,l&&t+"-action")}))},t}(c.a.Component);k.defaultProps={variant:null,active:!1,disabled:!1};var x=Object(b.a)(k,"list-group-item"),j=function(e){function t(){return e.apply(this,arguments)||this}return Object(m.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.className,a=e.bsPrefix,n=e.variant,r=Object(d.a)(e,["className","bsPrefix","variant"]);return c.a.createElement(E.a,Object(u.a)({},r,{className:h()(t,a,n&&a+"-"+n)}))},t}(c.a.Component);j.defaultProps={as:"div",variant:null};var N=v()(Object(b.a)(j,"list-group"),{activeKey:"onSelect"});N.Item=x;var R=N,q=a(238),C=a(174),T=function(e){var t=e.header,a=e.children,n=r()(e,["header","children"]);return c.a.createElement(l.a,Object.assign({},n,{className:"list-group-item"}),c.a.createElement("h4",{className:"list-group-item-heading"},t),c.a.createElement("p",{className:"list-group-item-text"},a))};T.propTypes={header:s.a.string.isRequired,children:s.a.node.isRequired};t.default=function(){return c.a.createElement(C.a,null,c.a.createElement("h4",null,"Installation"),c.a.createElement(q.a,{language:"bash"},"npm install bandit-pouch --save"),c.a.createElement("hr",null),c.a.createElement(R,null,c.a.createElement(T,{header:"UI components",to:"/ui"},"Common React components"),c.a.createElement(T,{header:"Forms",to:"/forms"},"Form input control components"),c.a.createElement(T,{header:"Redux",to:"/redux"},"Redux helper functions"),c.a.createElement(T,{header:"Utils",to:"/utils"},"Custom utility funtions"),c.a.createElement(T,{header:"Component API",to:"/api"},"Component API documentation")))}},167:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(34),o=a.n(l);a.d(t,"a",function(){return o.a});a(169);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},169:function(e,t,a){var n;e.exports=(n=a(172))&&n.default||n},172:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(56),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},173:function(e){e.exports={data:{site:{siteMetadata:{title:"Bandit Pouch",description:"Common React components and utilities",library:{name:"bandit-pouch",version:"2.1.7"}}}}}},174:function(e,t,a){"use strict";var n=a(173),r=a(0),i=a.n(r),c=a(4),l=a.n(c),o=a(180),s=a.n(o),u=a(167),d=a(752),m=a(753),p=a(754),h=(a(33),a(75)),f=a.n(h),v=a(161),b=a.n(v),E=a(766),g=a(764),y=function(e){var t=e.active,a=e.disabled,n=e.className,r=e.to,c=e.useATag,l=void 0!==c&&c,o=f()(e,["active","disabled","className","to","useATag"]);return delete o.onSelect,delete o.eventKey,delete o.activeKey,delete o.activeHref,i.a.createElement("li",{role:"presentation",className:b()(n,{active:t,disabled:a})},l?i.a.createElement(E.a.Link,Object.assign({},o,{href:r})):i.a.createElement(u.a,Object.assign({},o,{className:"nav-link",to:r,disabled:a})))},k=function(e){var t=e.siteTitle;return i.a.createElement(g.a,{bg:"dark",variant:"dark"},i.a.createElement(u.a,{className:"navbar-brand",to:"/"},t),i.a.createElement(E.a,null,i.a.createElement(y,{to:"/ui"},"UI components"),i.a.createElement(y,{to:"/forms"},"Form"),i.a.createElement(y,{to:"/redux"},"Redux"),i.a.createElement(y,{to:"/utils"},"Utilities"),i.a.createElement(y,{to:"/api"},"API"),i.a.createElement(y,{to:"//kayak.github.io/bandit-pouch/storybook",useATag:!0},"Storybook")))};k.propTypes={siteTitle:l.a.string.isRequired};var x=k,j=(a(166),a(179)),N=a.n(j),R=function(e){var t=e.repo,a=e.type;return i.a.createElement("span",{className:"github-button-wrapper"},i.a.createElement("iframe",{title:a,src:"https://ghbtns.com/github-btn.html?user=kayak&repo="+t+"&type="+a,frameBorder:"0",scrolling:"0",width:"60px",height:"20px"}))},q=function(e){var t=e.name,a=e.version;return i.a.createElement("footer",{style:{padding:"40px 0 20px",background:"#f8f8f8",borderTop:"1px solid #e7e7e7"}},i.a.createElement(d.a,null,i.a.createElement(m.a,null,i.a.createElement(p.a,{className:"text-center"},i.a.createElement(R,{repo:t,type:"star"}),i.a.createElement(R,{repo:t,type:"fork"}))),i.a.createElement(m.a,null,i.a.createElement(p.a,{xs:12,className:"text-center"},i.a.createElement("p",null,"Copyright  ",N()().format("YYYY"),"  KAYAK Germany, GmbH"),i.a.createElement("p",null,"Licensed under the  ",i.a.createElement("a",{href:"http://www.apache.org/licenses/LICENSE-2.0"},"Apache License Version 2.0"),", Documentation built using  ",i.a.createElement("a",{href:"https://gatsbyjs.org"},"Gatsby")),i.a.createElement("p",{className:"text-right"},i.a.createElement("small",null,"v"+a))))))},C=(a(181),a(182),a(183),a(184),a(185),a(186),a(187)),T=a(188),w=a(189);T.a.add(w.f,w.i,w.k,w.e,w.a,w.h,w.b,w.c,C.a,w.g,w.j,w.d);a(190);var O=function(e){var t=e.children,a=e.data.site,n=(void 0===a?{}:a).siteMetadata,r=void 0===n?{}:n;return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:r.title,meta:[{name:"description",content:r.description},{name:"keywords",content:"kayak, react, redux"}],script:[{type:"text/javascript",src:"https://buttons.github.io/buttons.js"}]},i.a.createElement("html",{lang:"en"}),i.a.createElement("link",{rel:"canonical",href:"https://kayak.github.io/bandit-pouch"})),i.a.createElement(x,{siteTitle:r.title}),i.a.createElement(d.a,{className:"my-5"},i.a.createElement(m.a,null,i.a.createElement(p.a,{xs:12},t))),i.a.createElement(q,r.library))};O.propTypes={data:l.a.object.isRequired,children:l.a.node.isRequired};var P=function(e){var t=e.children;return i.a.createElement(u.b,{query:"2212968517",render:function(e){return i.a.createElement(O,{data:e},t)},data:n})};P.propTypes={children:l.a.node.isRequired};t.a=P},238:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),c=a.n(i),l=a(4),o=a.n(l),s=a(193),u=a.n(s),d=function(e){function t(t){var a;return(a=e.call(this,t)||this).element=c.a.createRef(),a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.highlight()},a.componentDidUpdate=function(){this.highlight()},a.highlight=function(){this.element.current.querySelectorAll("code").forEach(function(e){return u.a.highlightBlock(e)})},a.render=function(){var e=this.props,t=e.children,a=e.language;return c.a.createElement("pre",{ref:this.element},c.a.createElement("code",{className:"hljs "+a},t))},t}(i.Component);d.propTypes={children:o.a.node.isRequired,language:o.a.string},d.defaultProps={language:"javascript"},t.a=d}}]);
//# sourceMappingURL=component---src-pages-index-js-dab866f420fc0afe574d.js.map