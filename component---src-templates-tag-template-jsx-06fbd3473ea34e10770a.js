webpackJsonp([2638498282051],{160:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),s=r(l),i=n(35),c=r(i),f=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=[],t=this.props.pathContext.tag,n=this.props.data.allMarkdownRemark.edges;return n.forEach(function(t){e.push(s.default.createElement(c.default,{data:t,key:t.node.fields.slug}))}),s.default.createElement("div",{className:"content"},s.default.createElement("div",{className:"content__inner"},s.default.createElement("div",{className:"page"},s.default.createElement("h1",{className:"page__title"},'All Posts tagged as "',t,'"'),s.default.createElement("div",{className:"page__body"},e))))},t}(s.default.Component);t.default=f,e.exports=t.default},170:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var l=n(1),s=r(l),i=n(9),c=r(i),f=n(10),p=r(f),d=n(160),h=r(d),y=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title,t=this.props.pathContext.tag;return s.default.createElement("div",null,s.default.createElement(c.default,{title:'All Posts tagged as "'+t+'" - '+e}),s.default.createElement(p.default,this.props),s.default.createElement(h.default,this.props))},t}(s.default.Component);t.default=y;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-tag-template-jsx-06fbd3473ea34e10770a.js.map