webpackJsonp([90179704293519],{156:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),i=r(l),c=n(35),s=r(c),f=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=[],t=this.props.pathContext.category,n=this.props.data.allMarkdownRemark.edges;return n.forEach(function(t){e.push(i.default.createElement(s.default,{data:t,key:t.node.fields.slug}))}),i.default.createElement("div",{className:"content"},i.default.createElement("div",{className:"content__inner"},i.default.createElement("div",{className:"page"},i.default.createElement("h1",{className:"page__title"},t),i.default.createElement("div",{className:"page__body"},e))))},t}(i.default.Component);t.default=f,e.exports=t.default},169:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var l=n(1),i=r(l),c=n(9),s=r(c),f=n(10),p=r(f),d=n(156),h=r(d),y=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title,t=this.props.pathContext.category;return i.default.createElement("div",null,i.default.createElement(s.default,{title:t+" - "+e}),i.default.createElement(p.default,this.props),i.default.createElement(h.default,this.props))},t}(i.default.Component);t.default=y;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-category-template-jsx-cf1c8b990648253d5738.js.map