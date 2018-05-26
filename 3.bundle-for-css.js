webpackJsonp([3],{

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	module.exports = function (e) {
	  var t = {};function n(r) {
	    if (t[r]) return t[r].exports;var f = t[r] = { i: r, l: !1, exports: {} };return e[r].call(f.exports, f, f.exports, n), f.l = !0, f.exports;
	  }return n.m = e, n.c = t, n.d = function (e, t, r) {
	    n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: r });
	  }, n.r = function (e) {
	    Object.defineProperty(e, "__esModule", { value: !0 });
	  }, n.n = function (e) {
	    var t = e && e.__esModule ? function () {
	      return e.default;
	    } : function () {
	      return e;
	    };return n.d(t, "a", t), t;
	  }, n.o = function (e, t) {
	    return Object.prototype.hasOwnProperty.call(e, t);
	  }, n.p = "", n(n.s = 4);
	}([function (e, t, n) {
	  "use strict";
	  Object.defineProperty(t, "__esModule", { value: !0 });var r = function () {
	    function e(e, t) {
	      for (var n = 0; n < t.length; n++) {
	        var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	      }
	    }return function (t, n, r) {
	      return n && e(t.prototype, n), r && e(t, r), t;
	    };
	  }(),
	      f = n(3),
	      a = o(f),
	      u = o(n(2));function o(e) {
	    return e && e.__esModule ? e : { default: e };
	  }var i = function (e) {
	    function t(e) {
	      !function (e, t) {
	        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	      }(this, t);var n = function (e, t) {
	        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
	      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));n.myRef = a.default.createRef(), n.widthRef = a.default.createRef(), n.lightnessRef = a.default.createRef(), n.offsetRef = a.default.createRef(), n.widthChange = n.widthChange.bind(n), n.lightnessChange = n.lightnessChange.bind(n), n.offsetChange = n.offsetChange.bind(n);var r = "blue";void 0 !== n.props.background && (r = n.props.background);var f = "yellow";return void 0 !== n.props.bar && (f = n.props.bar), n.scaleBackground = u.default.scale([r, "white"]).correctLightness(), n.scaleBar = u.default.scale([f, "white"]).correctLightness(), n.width = 350, n.height = 200, n;
	    }return function (e, t) {
	      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	    }(t, f.Component), r(t, [{ key: "componentDidMount", value: function value() {
	        this.go();
	      } }, { key: "widthChange", value: function value(e) {
	        this.go();
	      } }, { key: "lightnessChange", value: function value(e) {
	        this.go();
	      } }, { key: "offsetChange", value: function value(e) {
	        this.go();
	      } }, { key: "go", value: function value() {
	        var e = Number(this.lightnessRef.current.value),
	            t = Number(this.widthRef.current.value),
	            n = Number(this.offsetRef.current.value),
	            r = this.scaleBackground(e).hex(),
	            f = this.scaleBar(e).hex(),
	            a = "red";void 0 !== this.props.grating && (a = this.props.grating);var u,
	            o = this.myRef.current;for (o.innerHTML = "", o.style.background = r, u = t / 2; u <= this.height + t; u += 2 * t) {
	          var i = document.createElementNS("http://www.w3.org/2000/svg", "line");if (i.setAttribute("x1", 0), i.setAttribute("y1", u), i.setAttribute("x2", this.width), i.setAttribute("y2", u), i.setAttribute("stroke", f), i.setAttribute("stroke-width", t), o.appendChild(i), u > 50 && u < 150) {
	            var c = document.createElementNS("http://www.w3.org/2000/svg", "line");c.setAttribute("x1", 50), c.setAttribute("y1", u), c.setAttribute("x2", 150), c.setAttribute("y2", u), c.setAttribute("stroke", a), c.setAttribute("stroke-width", t), o.appendChild(c);var l = document.createElementNS("http://www.w3.org/2000/svg", "line");l.setAttribute("x1", 200), l.setAttribute("y1", u + t - n * t), l.setAttribute("x2", 300), l.setAttribute("y2", u + t - n * t), l.setAttribute("stroke", a), l.setAttribute("stroke-width", t);o.appendChild(l);
	          }
	        }
	      } }, { key: "labeled_slider", value: function value(e, t, n, r, f, u, o) {
	        return a.default.createElement("div", { style: { display: "block", width: "350px" } }, a.default.createElement("div", { style: { display: "table-cell", "vertical-align": "top", width: "350px" } }, a.default.createElement("label", { style: { "font-size": "1.0rem", "vertical-align": "middle" } }, e), a.default.createElement("div", { style: { width: "150px", float: "right" } }, a.default.createElement("input", { type: "range", ref: u, min: t, max: n, step: r, defaultValue: f, onInput: o, onChange: o, style: { "vertical-align": "middle" } }))));
	      } }, { key: "render", value: function value() {
	        return a.default.createElement("div", null, a.default.createElement("div", { style: { display: "inline" } }, this.labeled_slider("Stripe Width", 1, 50, 1, 5, this.widthRef, this.widthChange), this.labeled_slider("Background Lightness", 0, 1, .01, 0, this.lightnessRef, this.lightnessChange), this.labeled_slider("Right Grating Offset", 0, 1, .05, 0, this.offsetRef, this.offsetChange)), a.default.createElement("div", { style: { display: "block", margin: "auto" } }, a.default.createElement("svg", { width: this.width, height: this.height, ref: this.myRef, style: { display: "block", margin: "auto" } })));
	      } }]), t;
	  }();t.default = i;
	}, function (e, t) {
	  e.exports = function (e) {
	    return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", { enumerable: !0, get: function get() {
	        return e.l;
	      } }), Object.defineProperty(e, "id", { enumerable: !0, get: function get() {
	        return e.i;
	      } }), e.webpackPolyfill = 1), e;
	  };
	}, function (e, t, n) {
	  (function (e) {
	    var n;
	    /**
	     * @license
	     *
	     * chroma.js - JavaScript library for color conversions
	     * 
	     * Copyright (c) 2011-2017, Gregor Aisch
	     * All rights reserved.
	     * 
	     * Redistribution and use in source and binary forms, with or without
	     * modification, are permitted provided that the following conditions are met:
	     * 
	     * 1. Redistributions of source code must retain the above copyright notice, this
	     *    list of conditions and the following disclaimer.
	     * 
	     * 2. Redistributions in binary form must reproduce the above copyright notice,
	     *    this list of conditions and the following disclaimer in the documentation
	     *    and/or other materials provided with the distribution.
	     * 
	     * 3. The name Gregor Aisch may not be used to endorse or promote products
	     *    derived from this software without specific prior written permission.
	     * 
	     * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	     * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	     * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
	     * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
	     * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
	     * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	     * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	     * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
	     * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
	     * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	     *
	     */
	    /**
	     * @license
	     *
	     * chroma.js - JavaScript library for color conversions
	     * 
	     * Copyright (c) 2011-2017, Gregor Aisch
	     * All rights reserved.
	     * 
	     * Redistribution and use in source and binary forms, with or without
	     * modification, are permitted provided that the following conditions are met:
	     * 
	     * 1. Redistributions of source code must retain the above copyright notice, this
	     *    list of conditions and the following disclaimer.
	     * 
	     * 2. Redistributions in binary form must reproduce the above copyright notice,
	     *    this list of conditions and the following disclaimer in the documentation
	     *    and/or other materials provided with the distribution.
	     * 
	     * 3. The name Gregor Aisch may not be used to endorse or promote products
	     *    derived from this software without specific prior written permission.
	     * 
	     * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	     * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	     * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
	     * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
	     * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
	     * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	     * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	     * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
	     * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
	     * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	     *
	     */
	    (function () {
	      var r,
	          f,
	          a,
	          u,
	          o,
	          i,
	          c,
	          l,
	          s,
	          d,
	          h,
	          b,
	          p,
	          g,
	          _m,
	          _y,
	          v,
	          w,
	          k,
	          _,
	          x,
	          N,
	          M,
	          A,
	          O,
	          j,
	          R,
	          P,
	          E,
	          C,
	          B,
	          L,
	          q,
	          G,
	          S,
	          Y,
	          X,
	          z,
	          V,
	          I,
	          U,
	          F,
	          K,
	          D,
	          T,
	          Z,
	          $,
	          H,
	          W,
	          J,
	          Q,
	          ee,
	          te,
	          ne,
	          re,
	          fe,
	          ae,
	          ue,
	          oe,
	          ie,
	          ce,
	          le,
	          se,
	          de,
	          he,
	          be,
	          pe,
	          ge,
	          ye,
	          ve,
	          we,
	          ke,
	          _e,
	          xe,
	          Ne,
	          Me,
	          Ae,
	          Oe,
	          je,
	          Re,
	          Pe = [].slice;Me = function () {
	        var e, t, n, r, f;for (e = {}, r = 0, t = (f = "Boolean Number String Function Array Date RegExp Undefined Null".split(" ")).length; r < t; r++) {
	          n = f[r], e["[object " + n + "]"] = n.toLowerCase();
	        }return function (t) {
	          var n;return n = Object.prototype.toString.call(t), e[n] || "object";
	        };
	      }(), $ = function $(e, t, n) {
	        return null == t && (t = 0), null == n && (n = 1), e < t && (e = t), e > n && (e = n), e;
	      }, Ae = function Ae(e) {
	        return e.length >= 3 ? Array.prototype.slice.call(e) : e[0];
	      }, x = function x(e) {
	        var t, n;for (e._clipped = !1, e._unclipped = e.slice(0), t = n = 0; n < 3; t = ++n) {
	          t < 3 ? ((e[t] < 0 || e[t] > 255) && (e._clipped = !0), e[t] < 0 && (e[t] = 0), e[t] > 255 && (e[t] = 255)) : 3 === t && (e[t] < 0 && (e[t] = 0), e[t] > 1 && (e[t] = 1));
	        }return e._clipped || delete e._unclipped, e;
	      }, u = Math.PI, we = Math.round, M = Math.cos, P = Math.floor, re = Math.pow, H = Math.log, _e = Math.sin, xe = Math.sqrt, g = Math.atan2, Q = Math.max, p = Math.abs, c = 2 * u, o = u / 3, f = u / 180, i = 180 / u, (_ = function _() {
	        return arguments[0] instanceof r ? arguments[0] : function (e, t, n) {
	          n.prototype = e.prototype;var r = new n(),
	              f = e.apply(r, t);return Object(f) === f ? f : r;
	        }(r, arguments, function () {});
	      }).default = _, b = [], void 0 !== e && null !== e && null != e.exports && (e.exports = _), void 0 === (n = function () {
	        return _;
	      }.apply(t, [])) || (e.exports = n), _.version = "1.3.7", h = {}, s = [], d = !1, r = function () {
	        function e() {
	          var e, t, n, r, f, a, u, o, i;for (a = this, t = [], o = 0, r = arguments.length; o < r; o++) {
	            null != (e = arguments[o]) && t.push(e);
	          }if (t.length > 1 && (u = t[t.length - 1]), null != h[u]) a._rgb = x(h[u](Ae(t.slice(0, -1))));else {
	            for (d || (s = s.sort(function (e, t) {
	              return t.p - e.p;
	            }), d = !0), i = 0, f = s.length; i < f && !(u = (n = s[i]).test.apply(n, t)); i++) {}u && (a._rgb = x(h[u].apply(h, t)));
	          }null == a._rgb && console.warn("unknown format: " + t), null == a._rgb && (a._rgb = [0, 0, 0]), 3 === a._rgb.length && a._rgb.push(1);
	        }return e.prototype.toString = function () {
	          return this.hex();
	        }, e.prototype.clone = function () {
	          return _(me._rgb);
	        }, e;
	      }(), _._input = h,
	      /**
	        	ColorBrewer colors for chroma.js
	        
	        	Copyright (c) 2002 Cynthia Brewer, Mark Harrower, and The 
	        	Pennsylvania State University.
	        
	        	Licensed under the Apache License, Version 2.0 (the "License"); 
	        	you may not use this file except in compliance with the License.
	        	You may obtain a copy of the License at	
	        	http://www.apache.org/licenses/LICENSE-2.0
	        
	        	Unless required by applicable law or agreed to in writing, software distributed
	        	under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
	        	CONDITIONS OF ANY KIND, either express or implied. See the License for the
	        	specific language governing permissions and limitations under the License.
	        
	            @preserve
	         */
	      _.brewer = w = { OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"], PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"], BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"], Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"], BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"], YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"], YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"], Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"], RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"], Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"], YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"], Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"], GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"], Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"], YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"], PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"], Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"], PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"], Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"], Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"], RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"], RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"], PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"], PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"], RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"], BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"], RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"], PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"], Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"], Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"], Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"], Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"], Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"], Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"], Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"], Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"] }, function () {
	        var e, t;for (e in t = [], w) {
	          t.push(w[e.toLowerCase()] = w[e]);
	        }
	      }(), _.colors = Oe = { aliceblue: "#f0f8ff", antiquewhite: "#faebd7", aqua: "#00ffff", aquamarine: "#7fffd4", azure: "#f0ffff", beige: "#f5f5dc", bisque: "#ffe4c4", black: "#000000", blanchedalmond: "#ffebcd", blue: "#0000ff", blueviolet: "#8a2be2", brown: "#a52a2a", burlywood: "#deb887", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", cornflower: "#6495ed", cornflowerblue: "#6495ed", cornsilk: "#fff8dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkgray: "#a9a9a9", darkgreen: "#006400", darkgrey: "#a9a9a9", darkkhaki: "#bdb76b", darkmagenta: "#8b008b", darkolivegreen: "#556b2f", darkorange: "#ff8c00", darkorchid: "#9932cc", darkred: "#8b0000", darksalmon: "#e9967a", darkseagreen: "#8fbc8f", darkslateblue: "#483d8b", darkslategray: "#2f4f4f", darkslategrey: "#2f4f4f", darkturquoise: "#00ced1", darkviolet: "#9400d3", deeppink: "#ff1493", deepskyblue: "#00bfff", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1e90ff", firebrick: "#b22222", floralwhite: "#fffaf0", forestgreen: "#228b22", fuchsia: "#ff00ff", gainsboro: "#dcdcdc", ghostwhite: "#f8f8ff", gold: "#ffd700", goldenrod: "#daa520", gray: "#808080", green: "#008000", greenyellow: "#adff2f", grey: "#808080", honeydew: "#f0fff0", hotpink: "#ff69b4", indianred: "#cd5c5c", indigo: "#4b0082", ivory: "#fffff0", khaki: "#f0e68c", laserlemon: "#ffff54", lavender: "#e6e6fa", lavenderblush: "#fff0f5", lawngreen: "#7cfc00", lemonchiffon: "#fffacd", lightblue: "#add8e6", lightcoral: "#f08080", lightcyan: "#e0ffff", lightgoldenrod: "#fafad2", lightgoldenrodyellow: "#fafad2", lightgray: "#d3d3d3", lightgreen: "#90ee90", lightgrey: "#d3d3d3", lightpink: "#ffb6c1", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", lightskyblue: "#87cefa", lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#b0c4de", lightyellow: "#ffffe0", lime: "#00ff00", limegreen: "#32cd32", linen: "#faf0e6", magenta: "#ff00ff", maroon: "#800000", maroon2: "#7f0000", maroon3: "#b03060", mediumaquamarine: "#66cdaa", mediumblue: "#0000cd", mediumorchid: "#ba55d3", mediumpurple: "#9370db", mediumseagreen: "#3cb371", mediumslateblue: "#7b68ee", mediumspringgreen: "#00fa9a", mediumturquoise: "#48d1cc", mediumvioletred: "#c71585", midnightblue: "#191970", mintcream: "#f5fffa", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", navajowhite: "#ffdead", navy: "#000080", oldlace: "#fdf5e6", olive: "#808000", olivedrab: "#6b8e23", orange: "#ffa500", orangered: "#ff4500", orchid: "#da70d6", palegoldenrod: "#eee8aa", palegreen: "#98fb98", paleturquoise: "#afeeee", palevioletred: "#db7093", papayawhip: "#ffefd5", peachpuff: "#ffdab9", peru: "#cd853f", pink: "#ffc0cb", plum: "#dda0dd", powderblue: "#b0e0e6", purple: "#800080", purple2: "#7f007f", purple3: "#a020f0", rebeccapurple: "#663399", red: "#ff0000", rosybrown: "#bc8f8f", royalblue: "#4169e1", saddlebrown: "#8b4513", salmon: "#fa8072", sandybrown: "#f4a460", seagreen: "#2e8b57", seashell: "#fff5ee", sienna: "#a0522d", silver: "#c0c0c0", skyblue: "#87ceeb", slateblue: "#6a5acd", slategray: "#708090", slategrey: "#708090", snow: "#fffafa", springgreen: "#00ff7f", steelblue: "#4682b4", tan: "#d2b48c", teal: "#008080", thistle: "#d8bfd8", tomato: "#ff6347", turquoise: "#40e0d0", violet: "#ee82ee", wheat: "#f5deb3", white: "#ffffff", whitesmoke: "#f5f5f5", yellow: "#ffff00", yellowgreen: "#9acd32" }, F = function F() {
	        var e, t, n, r, f, u, o;return r = (t = Ae(arguments))[0], e = t[1], n = t[2], u = (r + 16) / 116, f = isNaN(e) ? u : u + e / 500, o = isNaN(n) ? u : u - n / 200, u = a.Yn * K(u), f = a.Xn * K(f), o = a.Zn * K(o), [Re(3.2404542 * f - 1.5371385 * u - .4985314 * o), Re(-.969266 * f + 1.8760108 * u + .041556 * o), n = Re(.0556434 * f - .2040259 * u + 1.0572252 * o), t.length > 3 ? t[3] : 1];
	      }, Re = function Re(e) {
	        return 255 * (e <= .00304 ? 12.92 * e : 1.055 * re(e, 1 / 2.4) - .055);
	      }, K = function K(e) {
	        return e > a.t1 ? e * e * e : a.t2 * (e - a.t0);
	      }, a = { Kn: 18, Xn: .95047, Yn: 1, Zn: 1.08883, t0: .137931034, t1: .206896552, t2: .12841855, t3: .008856452 }, se = function se() {
	        var e, t, n, r, f, a, u;return n = (r = Ae(arguments))[0], t = r[1], e = r[2], a = (f = ge(n, t, e))[0], [116 * (u = f[1]) - 16, 500 * (a - u), 200 * (u - f[2])];
	      }, ye = function ye(e) {
	        return (e /= 255) <= .04045 ? e / 12.92 : re((e + .055) / 1.055, 2.4);
	      }, je = function je(e) {
	        return e > a.t3 ? re(e, 1 / 3) : e / a.t2 + a.t0;
	      }, ge = function ge() {
	        var e, t, n, r;return n = (r = Ae(arguments))[0], t = r[1], e = r[2], n = ye(n), t = ye(t), e = ye(e), [je((.4124564 * n + .3575761 * t + .1804375 * e) / a.Xn), je((.2126729 * n + .7151522 * t + .072175 * e) / a.Yn), je((.0193339 * n + .119192 * t + .9503041 * e) / a.Zn)];
	      }, _.lab = function () {
	        return function (e, t, n) {
	          n.prototype = e.prototype;var r = new n(),
	              f = e.apply(r, t);return Object(f) === f ? f : r;
	        }(r, Pe.call(arguments).concat(["lab"]), function () {});
	      }, h.lab = F, r.prototype.lab = function () {
	        return se(this._rgb);
	      }, _m = function m(e) {
	        var t, n, r, f, a, u, o, i, c, l, s;return 2 === (e = function () {
	          var t, n, r;for (r = [], n = 0, t = e.length; n < t; n++) {
	            f = e[n], r.push(_(f));
	          }return r;
	        }()).length ? (c = function () {
	          var t, n, r;for (r = [], n = 0, t = e.length; n < t; n++) {
	            f = e[n], r.push(f.lab());
	          }return r;
	        }(), a = c[0], u = c[1], t = function t(e) {
	          var t, n;return n = function () {
	            var n, r;for (r = [], t = n = 0; n <= 2; t = ++n) {
	              r.push(a[t] + e * (u[t] - a[t]));
	            }return r;
	          }(), _.lab.apply(_, n);
	        }) : 3 === e.length ? (l = function () {
	          var t, n, r;for (r = [], n = 0, t = e.length; n < t; n++) {
	            f = e[n], r.push(f.lab());
	          }return r;
	        }(), a = l[0], u = l[1], o = l[2], t = function t(e) {
	          var t, n;return n = function () {
	            var n, r;for (r = [], t = n = 0; n <= 2; t = ++n) {
	              r.push((1 - e) * (1 - e) * a[t] + 2 * (1 - e) * e * u[t] + e * e * o[t]);
	            }return r;
	          }(), _.lab.apply(_, n);
	        }) : 4 === e.length ? (s = function () {
	          var t, n, r;for (r = [], n = 0, t = e.length; n < t; n++) {
	            f = e[n], r.push(f.lab());
	          }return r;
	        }(), a = s[0], u = s[1], o = s[2], i = s[3], t = function t(e) {
	          var t, n;return n = function () {
	            var n, r;for (r = [], t = n = 0; n <= 2; t = ++n) {
	              r.push((1 - e) * (1 - e) * (1 - e) * a[t] + 3 * (1 - e) * (1 - e) * e * u[t] + 3 * (1 - e) * e * e * o[t] + e * e * e * i[t]);
	            }return r;
	          }(), _.lab.apply(_, n);
	        }) : 5 === e.length && (n = _m(e.slice(0, 3)), r = _m(e.slice(2, 5)), t = function t(e) {
	          return e < .5 ? n(2 * e) : r(2 * (e - .5));
	        }), t;
	      }, _.bezier = function (e) {
	        var t;return (t = _m(e)).scale = function () {
	          return _.scale(t);
	        }, t;
	      }, _.cubehelix = function (e, t, n, r, f) {
	        var a, u, o;return null == e && (e = 300), null == t && (t = -1.5), null == n && (n = 1), null == r && (r = 1), null == f && (f = [0, 1]), a = 0, "array" === Me(f) ? u = f[1] - f[0] : (u = 0, f = [f, f]), (o = function o(_o) {
	          var i, l, s, d, h;return i = c * ((e + 120) / 360 + t * _o), d = re(f[0] + u * _o, r), l = (0 !== a ? n[0] + _o * a : n) * d * (1 - d) / 2, s = M(i), h = _e(i), _(x([255 * (d + l * (-.14861 * s + 1.78277 * h)), 255 * (d + l * (-.29227 * s - .90649 * h)), 255 * (d + l * (1.97294 * s))]));
	        }).start = function (t) {
	          return null == t ? e : (e = t, o);
	        }, o.rotations = function (e) {
	          return null == e ? t : (t = e, o);
	        }, o.gamma = function (e) {
	          return null == e ? r : (r = e, o);
	        }, o.hue = function (e) {
	          return null == e ? n : ("array" === Me(n = e) ? 0 === (a = n[1] - n[0]) && (n = n[1]) : a = 0, o);
	        }, o.lightness = function (e) {
	          return null == e ? f : ("array" === Me(e) ? (f = e, u = e[1] - e[0]) : (f = [e, e], u = 0), o);
	        }, o.scale = function () {
	          return _.scale(o);
	        }, o.hue(n), o;
	      }, _.random = function () {
	        var e, t;for ("0123456789abcdef", e = "#", t = 0; t < 6; ++t) {
	          e += "0123456789abcdef".charAt(P(16 * Math.random()));
	        }return new r(e);
	      }, b = [], _.interpolate = S = function S(e, t, n, r) {
	        var f, a, u, o;for (null == n && (n = .5), null == r && (r = "rgb"), "object" !== Me(e) && (e = _(e)), "object" !== Me(t) && (t = _(t)), u = 0, a = b.length; u < a; u++) {
	          if (r === (f = b[u])[0]) {
	            o = f[1](e, t, n, r);break;
	          }
	        }if (null == o) throw "color mode " + r + " is not supported";return o.alpha(e.alpha() + n * (t.alpha() - e.alpha()));
	      }, r.prototype.interpolate = function (e, t, n) {
	        return S(this, e, t, n);
	      }, _.mix = S, r.prototype.mix = r.prototype.interpolate, h.rgb = function () {
	        var e, t, n, r;for (e in n = [], t = Ae(arguments)) {
	          r = t[e], n.push(r);
	        }return n;
	      }, _.rgb = function () {
	        return function (e, t, n) {
	          n.prototype = e.prototype;var r = new n(),
	              f = e.apply(r, t);return Object(f) === f ? f : r;
	        }(r, Pe.call(arguments).concat(["rgb"]), function () {});
	      }, r.prototype.rgb = function (e) {
	        return null == e && (e = !0), e ? this._rgb.map(Math.round).slice(0, 3) : this._rgb.slice(0, 3);
	      }, r.prototype.rgba = function (e) {
	        return null == e && (e = !0), e ? [Math.round(this._rgb[0]), Math.round(this._rgb[1]), Math.round(this._rgb[2]), this._rgb[3]] : this._rgb.slice(0);
	      }, s.push({ p: 3, test: function test(e) {
	          var t;return t = Ae(arguments), "array" === Me(t) && 3 === t.length ? "rgb" : 4 === t.length && "number" === Me(t[3]) && t[3] >= 0 && t[3] <= 1 ? "rgb" : void 0;
	        } }), h.lrgb = h.rgb, z = function z(e, t, n, f) {
	        var a, u;return a = e._rgb, u = t._rgb, new r(xe(re(a[0], 2) * (1 - n) + re(u[0], 2) * n), xe(re(a[1], 2) * (1 - n) + re(u[1], 2) * n), xe(re(a[2], 2) * (1 - n) + re(u[2], 2) * n), f);
	      }, l = function l(e) {
	        var t, n, f, a, u;for (t = 1 / e.length, u = [0, 0, 0, 0], f = 0, n = e.length; f < n; f++) {
	          a = e[f]._rgb, u[0] += re(a[0], 2) * t, u[1] += re(a[1], 2) * t, u[2] += re(a[2], 2) * t, u[3] += a[3] * t;
	        }return u[0] = xe(u[0]), u[1] = xe(u[1]), u[2] = xe(u[2]), new r(u);
	      }, b.push(["lrgb", z]), _.average = function (e, t) {
	        var n, r, f, a, o, i, c, s, d, h, b, p, m;if (null == t && (t = "rgb"), d = e.length, c = (e = e.map(function (e) {
	          return _(e);
	        })).splice(0, 1)[0], "lrgb" === t) return l(e);for (s in a = [], o = 0, i = 0, p = c.get(t)) {
	          p[s] = p[s] || 0, a.push(isNaN(p[s]) ? 0 : 1), "h" !== t.charAt(s) || isNaN(p[s]) || (n = p[s] / 180 * u, o += M(n), i += _e(n));
	        }for (r = c.alpha(), b = 0, h = e.length; b < h; b++) {
	          for (s in m = (f = e[b]).get(t), r += f.alpha(), p) {
	            isNaN(m[s]) || (a[s] += 1, "h" === t.charAt(s) ? (n = m[s] / 180 * u, o += M(n), i += _e(n)) : p[s] += m[s]);
	          }
	        }for (s in p) {
	          if ("h" === t.charAt(s)) {
	            for (n = g(i / a[s], o / a[s]) / u * 180; n < 0;) {
	              n += 360;
	            }for (; n >= 360;) {
	              n -= 360;
	            }p[s] = n;
	          } else p[s] = p[s] / a[s];
	        }return _(p, t).alpha(r / d);
	      }, C = function C(e) {
	        var t, n;if (e.match(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) return 4 !== e.length && 7 !== e.length || (e = e.substr(1)), 3 === e.length && (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2]), [(n = parseInt(e, 16)) >> 16, n >> 8 & 255, 255 & n, 1];if (e.match(/^#?([A-Fa-f0-9]{8})$/)) return 9 === e.length && (e = e.substr(1)), [(n = parseInt(e, 16)) >> 24 & 255, n >> 16 & 255, n >> 8 & 255, we((255 & n) / 255 * 100) / 100];if (null != h.css && (t = h.css(e))) return t;throw "unknown color: " + e;
	      }, oe = function oe(e, t) {
	        var n, r, f, a, u, o;return null == t && (t = "rgb"), u = e[0], f = e[1], r = e[2], n = e[3], u = Math.round(u), f = Math.round(f), r = Math.round(r), o = (o = "000000" + (u << 16 | f << 8 | r).toString(16)).substr(o.length - 6), a = (a = "0" + we(255 * n).toString(16)).substr(a.length - 2), "#" + function () {
	          switch (t.toLowerCase()) {case "rgba":
	              return o + a;case "argb":
	              return a + o;default:
	              return o;}
	        }();
	      }, h.hex = function (e) {
	        return C(e);
	      }, _.hex = function () {
	        return function (e, t, n) {
	          n.prototype = e.prototype;var r = new n(),
	              f = e.apply(r, t);return Object(f) === f ? f : r;
	        }(r, Pe.call(arguments).concat(["hex"]), function () {});
	      }, r.prototype.hex = function (e) {
	        return null == e && (e = "rgb"), oe(this._rgb, e);
	      }, s.push({ p: 4, test: function test(e) {
	          if (1 === arguments.length && "string" === Me(e)) return "hex";
	        } }), q = function q() {
	        var e, t, n, r, f, a, u, o, i, c, l, s, d, h;if (f = (e = Ae(arguments))[0], l = e[1], u = e[2], 0 === l) i = r = t = 255 * u;else {
	          for (h = [0, 0, 0], n = [0, 0, 0], s = 2 * u - (d = u < .5 ? u * (1 + l) : u + l - u * l), f /= 360, h[0] = f + 1 / 3, h[1] = f, h[2] = f - 1 / 3, a = o = 0; o <= 2; a = ++o) {
	            h[a] < 0 && (h[a] += 1), h[a] > 1 && (h[a] -= 1), 6 * h[a] < 1 ? n[a] = s + 6 * (d - s) * h[a] : 2 * h[a] < 1 ? n[a] = d : 3 * h[a] < 2 ? n[a] = s + (d - s) * (2 / 3 - h[a]) * 6 : n[a] = s;
	          }i = (c = [we(255 * n[0]), we(255 * n[1]), we(255 * n[2])])[0], r = c[1], t = c[2];
	        }return e.length > 3 ? [i, r, t, e[3]] : [i, r, t];
	      }, ce = function ce(e, t, n) {
	        var r, f, a, u, o;return void 0 !== e && e.length >= 3 && (e = (u = e)[0], t = u[1], n = u[2]), e /= 255, t /= 255, n /= 255, a = Math.min(e, t, n), f = ((Q = Math.max(e, t, n)) + a) / 2, Q === a ? (o = 0, r = Number.NaN) : o = f < .5 ? (Q - a) / (Q + a) : (Q - a) / (2 - Q - a), e === Q ? r = (t - n) / (Q - a) : t === Q ? r = 2 + (n - e) / (Q - a) : n === Q && (r = 4 + (e - t) / (Q - a)), (r *= 60) < 0 && (r += 360), [r, o, f];
	      }, _.hsl = function () {
	        return function (e, t, n) {
	          n.prototype = e.prototype;var r = new n(),
	              f = e.apply(r, t);return Object(f) === f ? f : r;
	        }(r, Pe.call(arguments).concat(["hsl"]), function () {});
	      }, h.hsl = q, r.prototype.hsl = function () {
	        return ce(this._rgb);
	      }, G = function G() {
	        var e, t, n, r, f, a, u, o, i, c, l, s, d, h, b, p, g, m;if (f = (e = Ae(arguments))[0], p = e[1], m = e[2], m *= 255, 0 === p) i = r = t = m;else switch (360 === f && (f = 0), f > 360 && (f -= 360), f < 0 && (f += 360), u = m * (1 - p), o = m * (1 - p * (n = (f /= 60) - (a = P(f)))), g = m * (1 - p * (1 - n)), a) {case 0:
	            i = (c = [m, g, u])[0], r = c[1], t = c[2];break;case 1:
	            i = (l = [o, m, u])[0], r = l[1], t = l[2];break;case 2:
	            i = (s = [u, m, g])[0], r = s[1], t = s[2];break;case 3:
	            i = (d = [u, o, m])[0], r = d[1], t = d[2];break;case 4:
	            i = (h = [g, u, m])[0], r = h[1], t = h[2];break;case 5:
	            i = (b = [m, u, o])[0], r = b[1], t = b[2];}return [i, r, t, e.length > 3 ? e[3] : 1];
	      }, le = function le() {
	        var e, t, n, r, f, a, u, o, i;return a = (u = Ae(arguments))[0], n = u[1], e = u[2], f = Math.min(a, n, e), t = (Q = Math.max(a, n, e)) - f, i = Q / 255, 0 === Q ? (r = Number.NaN, o = 0) : (o = t / Q, a === Q && (r = (n - e) / t), n === Q && (r = 2 + (e - a) / t), e === Q && (r = 4 + (a - n) / t), (r *= 60) < 0 && (r += 360)), [r, o, i];
	      }, _.hsv = function () {
	        return function (e, t, n) {
	          n.prototype = e.prototype;var r = new n(),
	              f = e.apply(r, t);return Object(f) === f ? f : r;
	        }(r, Pe.call(arguments).concat(["hsv"]), function () {});
	      }, h.hsv = G, r.prototype.hsv = function () {
	        return le(this._rgb);
	      }, te = function te(e) {
	        return "number" === Me(e) && e >= 0 && e <= 16777215 ? [e >> 16, e >> 8 & 255, 255 & e, 1] : (console.warn("unknown num color: " + e), [0, 0, 0, 1]);
	      }, be = function be() {
	        var e;return ((e = Ae(arguments))[0] << 16) + (e[1] << 8) + e[2];
	      }, _.num = function (e) {
	        return new r(e, "num");
	      }, r.prototype.num = function (e) {
	        return null == e && (e = "rgb"), be(this._rgb, e);
	      }, h.num = te, s.push({ p: 1, test: function test(e) {
	          if (1 === arguments.length && "number" === Me(e) && e >= 0 && e <= 16777215) return "num";
	        } }), E = function E() {
	        var e, t, n, r, f, a, u, o, i, c, l, s, d, h, b, p, g, m, y, v;if (o = (n = Ae(arguments))[0], f = n[1], t = n[2], u = u / 100 * 255, e = 255 * (f /= 100), 0 === f) s = u = r = t;else switch (360 === o && (o = 0), o > 360 && (o -= 360), o < 0 && (o += 360), l = (c = t * (1 - f)) + e * (1 - (a = (o /= 60) - (i = P(o)))), y = c + e * a, v = c + e, i) {case 0:
	            s = (d = [v, y, c])[0], u = d[1], r = d[2];break;case 1:
	            s = (h = [l, v, c])[0], u = h[1], r = h[2];break;case 2:
	            s = (b = [c, v, y])[0], u = b[1], r = b[2];break;case 3:
	            s = (p = [c, l, v])[0], u = p[1], r = p[2];break;case 4:
	            s = (g = [y, c, v])[0], u = g[1], r = g[2];break;case 5:
	            s = (m = [v, c, l])[0], u = m[1], r = m[2];}return [s, u, r, n.length > 3 ? n[3] : 1];
	      }, ue = function ue() {
	        var e, t, n, r, f, a, u, o, i;return o = (i = Ae(arguments))[0], f = i[1], t = i[2], u = Math.min(o, f, t), n = 100 * (r = (Q = Math.max(o, f, t)) - u) / 255, e = u / (255 - r) * 100, 0 === r ? a = Number.NaN : (o === Q && (a = (f - t) / r), f === Q && (a = 2 + (t - o) / r), t === Q && (a = 4 + (o - f) / r), (a *= 60) < 0 && (a += 360)), [a, n, e];
	      }, _.hcg = function () {
	        return function (e, t, n) {
	          n.prototype = e.prototype;var r = new n(),
	              f = e.apply(r, t);return Object(f) === f ? f : r;
	        }(r, Pe.call(arguments).concat(["hcg"]), function () {});
	      }, h.hcg = E, r.prototype.hcg = function () {
	        return ue(this._rgb);
	      }, A = function A(e) {
	        var t, n, r, f, a, u, o, i;if (e = e.toLowerCase(), null != _.colors && _.colors[e]) return C(_.colors[e]);if (a = e.match(/rgb\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*\)/)) {
	          for (o = a.slice(1, 4), f = u = 0; u <= 2; f = ++u) {
	            o[f] = +o[f];
	          }o[3] = 1;
	        } else if (a = e.match(/rgba\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*,\s*([01]|[01]?\.\d+)\)/)) for (o = a.slice(1, 5), f = i = 0; i <= 3; f = ++i) {
	          o[f] = +o[f];
	        } else if (a = e.match(/rgb\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) {
	          for (o = a.slice(1, 4), f = t = 0; t <= 2; f = ++t) {
	            o[f] = we(2.55 * o[f]);
	          }o[3] = 1;
	        } else if (a = e.match(/rgba\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) {
	          for (o = a.slice(1, 5), f = n = 0; n <= 2; f = ++n) {
	            o[f] = we(2.55 * o[f]);
	          }o[3] = +o[3];
	        } else (a = e.match(/hsl\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) ? ((r = a.slice(1, 4))[1] *= .01, r[2] *= .01, (o = q(r))[3] = 1) : (a = e.match(/hsla\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) && ((r = a.slice(1, 4))[1] *= .01, r[2] *= .01, (o = q(r))[3] = +a[4]);return o;
	      }, ae = function ae(e) {
	        var t;return "rgb" === (t = e[3] < 1 ? "rgba" : "rgb") ? t + "(" + e.slice(0, 3).map(we).join(",") + ")" : "rgba" === t ? t + "(" + e.slice(0, 3).map(we).join(",") + "," + e[3] + ")" : void 0;
	      }, ve = function ve(e) {
	        return we(100 * e) / 100;
	      }, L = function L(e, t) {
	        var n;return n = t < 1 ? "hsla" : "hsl", e[0] = ve(e[0] || 0), e[1] = ve(100 * e[1]) + "%", e[2] = ve(100 * e[2]) + "%", "hsla" === n && (e[3] = t), n + "(" + e.join(",") + ")";
	      }, h.css = function (e) {
	        return A(e);
	      }, _.css = function () {
	        return function (e, t, n) {
	          n.prototype = e.prototype;var r = new n(),
	              f = e.apply(r, t);return Object(f) === f ? f : r;
	        }(r, Pe.call(arguments).concat(["css"]), function () {});
	      }, r.prototype.css = function (e) {
	        return null == e && (e = "rgb"), "rgb" === e.slice(0, 3) ? ae(this._rgb) : "hsl" === e.slice(0, 3) ? L(this.hsl(), this.alpha()) : void 0;
	      }, h.named = function (e) {
	        return C(Oe[e]);
	      }, s.push({ p: 5, test: function test(e) {
	          if (1 === arguments.length && null != Oe[e]) return "named";
	        } }), r.prototype.name = function (e) {
	        var t, n;for (n in arguments.length && (Oe[e] && (this._rgb = C(Oe[e])), this._rgb[3] = 1), t = this.hex(), Oe) {
	          if (t === Oe[n]) return n;
	        }return t;
	      }, D = function D() {
	        var e, t, n, r;return n = (r = Ae(arguments))[0], e = r[1], t = r[2], [n, M(t *= f) * e, _e(t) * e];
	      }, T = function T() {
	        var e, t, n, r, f, a, u, o, i;return u = (n = Ae(arguments))[0], f = n[1], a = n[2], e = (o = D(u, f, a))[0], t = o[1], r = o[2], [(i = F(e, t, r))[0], i[1], r = i[2], n.length > 3 ? n[3] : 1];
	      }, U = function U() {
	        var e, t, n, r, f, a;return f = (a = Ae(arguments))[0], e = a[1], t = a[2], n = xe(e * e + t * t), r = (g(t, e) * i + 360) % 360, 0 === we(1e4 * n) && (r = Number.NaN), [f, n, r];
	      }, de = function de() {
	        var e, t, n, r, f, a, u;return f = (a = Ae(arguments))[0], n = a[1], t = a[2], r = (u = se(f, n, t))[0], e = u[1], t = u[2], U(r, e, t);
	      }, _.lch = function () {
	        var e;return e = Ae(arguments), new r(e, "lch");
	      }, _.hcl = function () {
	        var e;return e = Ae(arguments), new r(e, "hcl");
	      }, h.lch = T, h.hcl = function () {
	        var e, t, n, r;return t = (r = Ae(arguments))[0], e = r[1], n = r[2], T([n, e, t]);
	      }, r.prototype.lch = function () {
	        return de(this._rgb);
	      }, r.prototype.hcl = function () {
	        return de(this._rgb).reverse();
	      }, fe = function fe(e) {
	        var t, n, r, f, a, u;return null == e && (e = "rgb"), a = (u = Ae(arguments))[0], r = u[1], t = u[2], r /= 255, t /= 255, [(1 - (a /= 255) - (f = 1 - Math.max(a, Math.max(r, t)))) * (n = f < 1 ? 1 / (1 - f) : 0), (1 - r - f) * n, (1 - t - f) * n, f];
	      }, N = function N() {
	        var e, t, n, r, f, a;return n = (t = Ae(arguments))[0], f = t[1], a = t[2], r = t[3], e = t.length > 4 ? t[4] : 1, 1 === r ? [0, 0, 0, e] : [n >= 1 ? 0 : 255 * (1 - n) * (1 - r), f >= 1 ? 0 : 255 * (1 - f) * (1 - r), a >= 1 ? 0 : 255 * (1 - a) * (1 - r), e];
	      }, h.cmyk = function () {
	        return N(Ae(arguments));
	      }, _.cmyk = function () {
	        return function (e, t, n) {
	          n.prototype = e.prototype;var r = new n(),
	              f = e.apply(r, t);return Object(f) === f ? f : r;
	        }(r, Pe.call(arguments).concat(["cmyk"]), function () {});
	      }, r.prototype.cmyk = function () {
	        return fe(this._rgb);
	      }, h.gl = function () {
	        var e, t, n, r, f;for (r = function () {
	          var e, n;for (t in n = [], e = Ae(arguments)) {
	            f = e[t], n.push(f);
	          }return n;
	        }.apply(this, arguments), e = n = 0; n <= 2; e = ++n) {
	          r[e] *= 255;
	        }return r;
	      }, _.gl = function () {
	        return function (e, t, n) {
	          n.prototype = e.prototype;var r = new n(),
	              f = e.apply(r, t);return Object(f) === f ? f : r;
	        }(r, Pe.call(arguments).concat(["gl"]), function () {});
	      }, r.prototype.gl = function () {
	        var e;return [(e = this._rgb)[0] / 255, e[1] / 255, e[2] / 255, e[3]];
	      }, he = function he(e, t, n) {
	        var r;return e = (r = Ae(arguments))[0], t = r[1], n = r[2], .2126 * (e = W(e)) + .7152 * (t = W(t)) + .0722 * (n = W(n));
	      }, W = function W(e) {
	        return (e /= 255) <= .03928 ? e / 12.92 : re((e + .055) / 1.055, 2.4);
	      }, I = function I(e, t, n, f) {
	        var a, u;return a = e._rgb, u = t._rgb, new r(a[0] + n * (u[0] - a[0]), a[1] + n * (u[1] - a[1]), a[2] + n * (u[2] - a[2]), f);
	      }, b.push(["rgb", I]), r.prototype.luminance = function (e, t) {
	        var n, r, f, a, _u;return null == t && (t = "rgb"), arguments.length ? (a = this._rgb, 0 === e ? a = [0, 0, 0, this._rgb[3]] : 1 === e ? a = [255, 255, 255, this[3]] : (n = he(this._rgb), r = 1e-7, f = 20, _u = function u(n, a) {
	          var o, i;return o = (i = n.interpolate(a, .5, t)).luminance(), Math.abs(e - o) < r || !f-- ? i : o > e ? _u(n, i) : _u(i, a);
	        }, a = n > e ? _u(_("black"), this).rgba() : _u(this, _("white")).rgba()), _(a).alpha(this.alpha())) : he(this._rgb);
	      }, Ne = function Ne(e) {
	        var t, n, r, f;return (f = e / 100) < 66 ? (r = 255, n = -155.25485562709179 - .44596950469579133 * (n = f - 2) + 104.49216199393888 * H(n), t = f < 20 ? 0 : .8274096064007395 * (t = f - 10) - 254.76935184120902 + 115.67994401066147 * H(t)) : (r = 351.97690566805693 + .114206453784165 * (r = f - 55) - 40.25366309332127 * H(r), n = 325.4494125711974 + .07943456536662342 * (n = f - 50) - 28.0852963507957 * H(n), t = 255), [r, n, t];
	      }, pe = function pe() {
	        var e, t, n, r, f, a, u;for (r = (f = Ae(arguments))[0], f[1], e = f[2], n = 1e3, t = 4e4, .4; t - n > .4;) {
	          (a = Ne(u = .5 * (t + n)))[2] / a[0] >= e / r ? t = u : n = u;
	        }return we(u);
	      }, _.temperature = _.kelvin = function () {
	        return function (e, t, n) {
	          n.prototype = e.prototype;var r = new n(),
	              f = e.apply(r, t);return Object(f) === f ? f : r;
	        }(r, Pe.call(arguments).concat(["temperature"]), function () {});
	      }, h.temperature = h.kelvin = h.K = Ne, r.prototype.temperature = function () {
	        return pe(this._rgb);
	      }, r.prototype.kelvin = r.prototype.temperature, _.contrast = function (e, t) {
	        var n, f, a, u;return "string" !== (a = Me(e)) && "number" !== a || (e = new r(e)), "string" !== (u = Me(t)) && "number" !== u || (t = new r(t)), (n = e.luminance()) > (f = t.luminance()) ? (n + .05) / (f + .05) : (f + .05) / (n + .05);
	      }, _.distance = function (e, t, n) {
	        var f, a, u, o, i, c, l;for (a in null == n && (n = "lab"), "string" !== (i = Me(e)) && "number" !== i || (e = new r(e)), "string" !== (c = Me(t)) && "number" !== c || (t = new r(t)), u = e.get(n), o = t.get(n), l = 0, u) {
	          l += (f = (u[a] || 0) - (o[a] || 0)) * f;
	        }return Math.sqrt(l);
	      }, _.deltaE = function (e, t, n, f) {
	        var a, o, i, c, l, s, d, h, b, m, y, v, w, k, _, x, N, A, O, j, R, P, E, C;for (null == n && (n = 1), null == f && (f = 1), "string" !== (_ = Me(e)) && "number" !== _ || (e = new r(e)), "string" !== (x = Me(t)) && "number" !== x || (t = new r(t)), a = (N = e.lab())[0], i = N[1], l = N[2], o = (A = t.lab())[0], c = A[1], s = A[2], d = xe(i * i + l * l), h = xe(c * c + s * s), j = a < 16 ? .511 : .040975 * a / (1 + .01765 * a), O = .0638 * d / (1 + .0131 * d) + .638, k = d < 1e-6 ? 0 : 180 * g(l, i) / u; k < 0;) {
	          k += 360;
	        }for (; k >= 360;) {
	          k -= 360;
	        }return R = k >= 164 && k <= 345 ? .56 + p(.2 * M(u * (k + 168) / 180)) : .36 + p(.4 * M(u * (k + 35) / 180)), w = xe((b = d * d * d * d) / (b + 1900)), xe((P = (a - o) / (n * j)) * P + (E = (v = d - h) / (f * O)) * E + ((m = i - c) * m + (y = l - s) * y - v * v) / ((C = O * (w * R + 1 - w)) * C));
	      }, r.prototype.get = function (e) {
	        var t, n, r, f, a;return this, r = (f = e.split("."))[0], t = f[1], a = this[r](), t ? (n = r.indexOf(t)) > -1 ? a[n] : console.warn("unknown channel " + t + " in mode " + r) : a;
	      }, r.prototype.set = function (e, t) {
	        var n, r, f, a, u;if (this, f = (a = e.split("."))[0], n = a[1]) {
	          if (u = this[f](), (r = f.indexOf(n)) > -1) {
	            if ("string" === Me(t)) switch (t.charAt(0)) {case "+":case "-":
	                u[r] += +t;break;case "*":
	                u[r] *= +t.substr(1);break;case "/":
	                u[r] /= +t.substr(1);break;default:
	                u[r] = +t;} else u[r] = t;
	          } else console.warn("unknown channel " + n + " in mode " + f);
	        } else u = t;return _(u, f).alpha(this.alpha());
	      }, r.prototype.clipped = function () {
	        return this._rgb._clipped || !1;
	      }, r.prototype.alpha = function (e) {
	        return arguments.length ? _.rgb([this._rgb[0], this._rgb[1], this._rgb[2], e]) : this._rgb[3];
	      }, r.prototype.darken = function (e) {
	        var t;return null == e && (e = 1), this, (t = this.lab())[0] -= a.Kn * e, _.lab(t).alpha(this.alpha());
	      }, r.prototype.brighten = function (e) {
	        return null == e && (e = 1), this.darken(-e);
	      }, r.prototype.darker = r.prototype.darken, r.prototype.brighter = r.prototype.brighten, r.prototype.saturate = function (e) {
	        var t;return null == e && (e = 1), this, (t = this.lch())[1] += e * a.Kn, t[1] < 0 && (t[1] = 0), _.lch(t).alpha(this.alpha());
	      }, r.prototype.desaturate = function (e) {
	        return null == e && (e = 1), this.saturate(-e);
	      }, r.prototype.premultiply = function () {
	        var e, t;return t = this.rgb(), e = this.alpha(), _(t[0] * e, t[1] * e, t[2] * e, e);
	      }, ee = function ee(e, t) {
	        return e * t / 255;
	      }, O = function O(e, t) {
	        return e > t ? t : e;
	      }, Z = function Z(e, t) {
	        return e > t ? e : t;
	      }, ke = function ke(e, t) {
	        return 255 * (1 - (1 - e / 255) * (1 - t / 255));
	      }, ne = function ne(e, t) {
	        return t < 128 ? 2 * e * t / 255 : 255 * (1 - 2 * (1 - e / 255) * (1 - t / 255));
	      }, k = function k(e, t) {
	        return 255 * (1 - (1 - t / 255) / (e / 255));
	      }, j = function j(e, t) {
	        return 255 === e ? 255 : (e = t / 255 * 255 / (1 - e / 255)) > 255 ? 255 : e;
	      }, (_y = function y(e, t, n) {
	        if (!_y[n]) throw "unknown blend mode " + n;return _y[n](e, t);
	      }).normal = (v = function v(e) {
	        return function (t, n) {
	          var r, f;return r = _(n).rgb(), f = _(t).rgb(), _(e(r, f), "rgb");
	        };
	      })((R = function R(e) {
	        return function (t, n) {
	          var r, f, a;for (a = [], r = f = 0; f <= 3; r = ++f) {
	            a[r] = e(t[r], n[r]);
	          }return a;
	        };
	      })(function (e, t) {
	        return e;
	      })), _y.multiply = v(R(ee)), _y.screen = v(R(ke)), _y.overlay = v(R(ne)), _y.darken = v(R(O)), _y.lighten = v(R(Z)), _y.dodge = v(R(j)), _y.burn = v(R(k)), _.blend = _y, _.analyze = function (e) {
	        var t, n, r, f;for (r = { min: Number.MAX_VALUE, max: -1 * Number.MAX_VALUE, sum: 0, values: [], count: 0 }, n = 0, t = e.length; n < t; n++) {
	          null == (f = e[n]) || isNaN(f) || (r.values.push(f), r.sum += f, f < r.min && (r.min = f), f > r.max && (r.max = f), r.count += 1);
	        }return r.domain = [r.min, r.max], r.limits = function (e, t) {
	          return _.limits(r, e, t);
	        }, r;
	      }, _.scale = function (e, t) {
	        var n, r, f, a, u, o, i, c, l, s, d, h, b, p, g, m, y, v, w, k, x;return l = "rgb", s = _("#ccc"), p = 0, !1, u = [0, 1], b = [], h = [0, 0], n = !1, f = [], d = !1, c = 0, i = 1, a = !1, r = {}, g = !0, o = 1, k = function k(e) {
	          var t, n, r, a, u, o;if (null == e && (e = ["#fff", "#000"]), null != e && "string" === Me(e) && null != _.brewer && (e = _.brewer[e] || _.brewer[e.toLowerCase()] || e), "array" === Me(e)) {
	            for (t = r = 0, a = (e = e.slice(0)).length - 1; 0 <= a ? r <= a : r >= a; t = 0 <= a ? ++r : --r) {
	              n = e[t], "string" === Me(n) && (e[t] = _(n));
	            }for (b.length = 0, t = o = 0, u = e.length - 1; 0 <= u ? o <= u : o >= u; t = 0 <= u ? ++o : --o) {
	              b.push(t / (e.length - 1));
	            }
	          }return w(), f = e;
	        }, y = function y(e) {
	          var t, r;if (null != n) {
	            for (r = n.length - 1, t = 0; t < r && e >= n[t];) {
	              t++;
	            }return t - 1;
	          }return 0;
	        }, x = function x(e) {
	          return e;
	        }, function (e) {
	          var t, r, f, a, u;return u = e, n.length > 2 && (a = n.length - 1, t = y(e), f = n[0] + (n[1] - n[0]) * (0 + .5 * p), r = n[a - 1] + (n[a] - n[a - 1]) * (1 - .5 * p), u = c + (n[t] + .5 * (n[t + 1] - n[t]) - f) / (r - f) * (i - c)), u;
	        }, v = function v(e, t) {
	          var a, u, d, p, m, v, w;if (null == t && (t = !1), isNaN(e)) return s;if (w = t ? e : n && n.length > 2 ? y(e) / (n.length - 2) : i !== c ? (e - c) / (i - c) : 1, t || (w = x(w)), 1 !== o && (w = re(w, o)), w = h[0] + w * (1 - h[0] - h[1]), w = Math.min(1, Math.max(0, w)), d = Math.floor(1e4 * w), g && r[d]) a = r[d];else {
	            if ("array" === Me(f)) for (u = p = 0, v = b.length - 1; 0 <= v ? p <= v : p >= v; u = 0 <= v ? ++p : --p) {
	              if (w <= (m = b[u])) {
	                a = f[u];break;
	              }if (w >= m && u === b.length - 1) {
	                a = f[u];break;
	              }if (w > m && w < b[u + 1]) {
	                w = (w - m) / (b[u + 1] - m), a = _.interpolate(f[u], f[u + 1], w, l);break;
	              }
	            } else "function" === Me(f) && (a = f(w));g && (r[d] = a);
	          }return a;
	        }, w = function w() {
	          return r = {};
	        }, k(e), (m = function m(e) {
	          var t;return t = _(v(e)), d && t[d] ? t[d]() : t;
	        }).classes = function (e) {
	          var t;return null != e ? ("array" === Me(e) ? (n = e, u = [e[0], e[e.length - 1]]) : (t = _.analyze(u), n = 0 === e ? [t.min, t.max] : _.limits(t, "e", e)), m) : n;
	        }, m.domain = function (e) {
	          var t, n, r, a, o, l, s;if (!arguments.length) return u;if (c = e[0], i = e[e.length - 1], b = [], r = f.length, e.length === r && c !== i) for (o = 0, a = e.length; o < a; o++) {
	            n = e[o], b.push((n - c) / (i - c));
	          } else for (t = s = 0, l = r - 1; 0 <= l ? s <= l : s >= l; t = 0 <= l ? ++s : --s) {
	            b.push(t / (r - 1));
	          }return u = [c, i], m;
	        }, m.mode = function (e) {
	          return arguments.length ? (l = e, w(), m) : l;
	        }, m.range = function (e, t) {
	          return k(e), m;
	        }, m.out = function (e) {
	          return d = e, m;
	        }, m.spread = function (e) {
	          return arguments.length ? (p = e, m) : p;
	        }, m.correctLightness = function (e) {
	          return null == e && (e = !0), a = e, w(), x = a ? function (e) {
	            var t, n, r, f, a, u, o, i, c;for (t = v(0, !0).lab()[0], n = v(1, !0).lab()[0], o = t > n, r = v(e, !0).lab()[0], f = r - (a = t + (n - t) * e), i = 0, c = 1, u = 20; Math.abs(f) > .01 && u-- > 0;) {
	              o && (f *= -1), f < 0 ? (i = e, e += .5 * (c - e)) : (c = e, e += .5 * (i - e)), r = v(e, !0).lab()[0], f = r - a;
	            }return e;
	          } : function (e) {
	            return e;
	          }, m;
	        }, m.padding = function (e) {
	          return null != e ? ("number" === Me(e) && (e = [e, e]), h = e, m) : h;
	        }, m.colors = function (t, r) {
	          var a, o, i, c, l, s, d, h;if (arguments.length < 2 && (r = "hex"), l = [], 0 === arguments.length) l = f.slice(0);else if (1 === t) l = [m(.5)];else if (t > 1) o = u[0], a = u[1] - o, l = function () {
	            s = [];for (var e = 0; 0 <= t ? e < t : e > t; 0 <= t ? e++ : e--) {
	              s.push(e);
	            }return s;
	          }.apply(this).map(function (e) {
	            return m(o + e / (t - 1) * a);
	          });else {
	            if (e = [], d = [], n && n.length > 2) for (i = h = 1, c = n.length; 1 <= c ? h < c : h > c; i = 1 <= c ? ++h : --h) {
	              d.push(.5 * (n[i - 1] + n[i]));
	            } else d = u;l = d.map(function (e) {
	              return m(e);
	            });
	          }return _[r] && (l = l.map(function (e) {
	            return e[r]();
	          })), l;
	        }, m.cache = function (e) {
	          return null != e ? (g = e, m) : g;
	        }, m.gamma = function (e) {
	          return null != e ? (o = e, m) : o;
	        }, m;
	      }, null == _.scales && (_.scales = {}), _.scales.cool = function () {
	        return _.scale([_.hsl(180, 1, .9), _.hsl(250, .7, .4)]);
	      }, _.scales.hot = function () {
	        return _.scale(["#000", "#f00", "#ff0", "#fff"], [0, .25, .75, 1]).mode("rgb");
	      }, _.analyze = function (e, t, n) {
	        var r, f, a, u, o, i;if (o = { min: Number.MAX_VALUE, max: -1 * Number.MAX_VALUE, sum: 0, values: [], count: 0 }, null == n && (n = function n() {
	          return !0;
	        }), r = function r(e) {
	          null == e || isNaN(e) || (o.values.push(e), o.sum += e, e < o.min && (o.min = e), e > o.max && (o.max = e), o.count += 1);
	        }, i = function i(e, f) {
	          if (n(e, f)) return null != t && "function" === Me(t) ? r(t(e)) : null != t && "string" === Me(t) || "number" === Me(t) ? r(e[t]) : r(e);
	        }, "array" === Me(e)) for (u = 0, a = e.length; u < a; u++) {
	          i(e[u]);
	        } else for (f in e) {
	          i(e[f], f);
	        }return o.domain = [o.min, o.max], o.limits = function (e, t) {
	          return _.limits(o, e, t);
	        }, o;
	      }, _.limits = function (e, t, n) {
	        var r, f, a, u, o, i, c, l, s, d, h, b, g, m, y, v, w, k, x, N, M, A, O, j, R, E, C, B, L, q, G, S, Y, X, z, V, I, U, F, K, D, T, Z, $, W, J, ee, te, ne, fe, ae, ue, oe, ie, ce;if (null == t && (t = "equal"), null == n && (n = 7), "array" === Me(e) && (e = _.analyze(e)), R = e.min, Q = e.max, e.sum, ie = e.values.sort(function (e, t) {
	          return e - t;
	        }), 1 === n) return [R, Q];if (O = [], "c" === t.substr(0, 1) && (O.push(R), O.push(Q)), "e" === t.substr(0, 1)) {
	          for (O.push(R), N = G = 1, z = n - 1; 1 <= z ? G <= z : G >= z; N = 1 <= z ? ++G : --G) {
	            O.push(R + N / n * (Q - R));
	          }O.push(Q);
	        } else if ("l" === t.substr(0, 1)) {
	          if (R <= 0) throw "Logarithmic scales are only possible for values > 0";for (E = Math.LOG10E * H(R), j = Math.LOG10E * H(Q), O.push(R), N = ce = 1, V = n - 1; 1 <= V ? ce <= V : ce >= V; N = 1 <= V ? ++ce : --ce) {
	            O.push(re(10, E + N / n * (j - E)));
	          }O.push(Q);
	        } else if ("q" === t.substr(0, 1)) {
	          for (O.push(R), N = r = 1, T = n - 1; 1 <= T ? r <= T : r >= T; N = 1 <= T ? ++r : --r) {
	            S = (ie.length - 1) * N / n, (Y = P(S)) === S ? O.push(ie[Y]) : (X = S - Y, O.push(ie[Y] * (1 - X) + ie[Y + 1] * X));
	          }O.push(Q);
	        } else if ("k" === t.substr(0, 1)) {
	          for (B = ie.length, m = new Array(B), k = new Array(n), fe = !0, L = 0, v = null, (v = []).push(R), N = f = 1, Z = n - 1; 1 <= Z ? f <= Z : f >= Z; N = 1 <= Z ? ++f : --f) {
	            v.push(R + N / n * (Q - R));
	          }for (v.push(Q); fe;) {
	            for (M = a = 0, $ = n - 1; 0 <= $ ? a <= $ : a >= $; M = 0 <= $ ? ++a : --a) {
	              k[M] = 0;
	            }for (N = u = 0, W = B - 1; 0 <= W ? u <= W : u >= W; N = 0 <= W ? ++u : --u) {
	              for (oe = ie[N], C = Number.MAX_VALUE, M = o = 0, J = n - 1; 0 <= J ? o <= J : o >= J; M = 0 <= J ? ++o : --o) {
	                (x = p(v[M] - oe)) < C && (C = x, y = M);
	              }k[y]++, m[N] = y;
	            }for (q = new Array(n), M = i = 0, ee = n - 1; 0 <= ee ? i <= ee : i >= ee; M = 0 <= ee ? ++i : --i) {
	              q[M] = null;
	            }for (N = c = 0, te = B - 1; 0 <= te ? c <= te : c >= te; N = 0 <= te ? ++c : --c) {
	              null === q[w = m[N]] ? q[w] = ie[N] : q[w] += ie[N];
	            }for (M = l = 0, ne = n - 1; 0 <= ne ? l <= ne : l >= ne; M = 0 <= ne ? ++l : --l) {
	              q[M] *= 1 / k[M];
	            }for (fe = !1, M = s = 0, I = n - 1; 0 <= I ? s <= I : s >= I; M = 0 <= I ? ++s : --s) {
	              if (q[M] !== v[N]) {
	                fe = !0;break;
	              }
	            }v = q, ++L > 200 && (fe = !1);
	          }for (A = {}, M = d = 0, U = n - 1; 0 <= U ? d <= U : d >= U; M = 0 <= U ? ++d : --d) {
	            A[M] = [];
	          }for (N = h = 0, F = B - 1; 0 <= F ? h <= F : h >= F; N = 0 <= F ? ++h : --h) {
	            A[w = m[N]].push(ie[N]);
	          }for (ae = [], M = b = 0, K = n - 1; 0 <= K ? b <= K : b >= K; M = 0 <= K ? ++b : --b) {
	            ae.push(A[M][0]), ae.push(A[M][A[M].length - 1]);
	          }for (ae = ae.sort(function (e, t) {
	            return e - t;
	          }), O.push(ae[0]), N = g = 1, D = ae.length - 1; g <= D; N = g += 2) {
	            ue = ae[N], isNaN(ue) || -1 !== O.indexOf(ue) || O.push(ue);
	          }
	        }return O;
	      }, B = function B(e, t, n) {
	        var r, f, a, u;return e = (r = Ae(arguments))[0], t = r[1], n = r[2], isNaN(e) && (e = 0), (e /= 360) < 1 / 3 ? a = 1 - ((f = (1 - t) / 3) + (u = (1 + t * M(c * e) / M(o - c * e)) / 3)) : e < 2 / 3 ? f = 1 - ((u = (1 - t) / 3) + (a = (1 + t * M(c * (e -= 1 / 3)) / M(o - c * e)) / 3)) : u = 1 - ((a = (1 - t) / 3) + (f = (1 + t * M(c * (e -= 2 / 3)) / M(o - c * e)) / 3)), [255 * (u = $(n * u * 3)), 255 * (a = $(n * a * 3)), 255 * (f = $(n * f * 3)), r.length > 3 ? r[3] : 1];
	      }, ie = function ie() {
	        var e, t, n, r, f, a, u;return f = (a = Ae(arguments))[0], t = a[1], e = a[2], c = 2 * Math.PI, f /= 255, t /= 255, e /= 255, 0 === (u = 1 - Math.min(f, t, e) / (r = (f + t + e) / 3)) ? n = 0 : (n = (f - t + (f - e)) / 2, n /= Math.sqrt((f - t) * (f - t) + (f - e) * (t - e)), n = Math.acos(n), e > t && (n = c - n), n /= c), [360 * n, u, r];
	      }, _.hsi = function () {
	        return function (e, t, n) {
	          n.prototype = e.prototype;var r = new n(),
	              f = e.apply(r, t);return Object(f) === f ? f : r;
	        }(r, Pe.call(arguments).concat(["hsi"]), function () {});
	      }, h.hsi = B, r.prototype.hsi = function () {
	        return ie(this._rgb);
	      }, Y = function Y(e, t, n, r) {
	        var f, a, u, o, i, c, l, s, d, h;return "hsl" === r ? (d = e.hsl(), h = t.hsl()) : "hsv" === r ? (d = e.hsv(), h = t.hsv()) : "hcg" === r ? (d = e.hcg(), h = t.hcg()) : "hsi" === r ? (d = e.hsi(), h = t.hsi()) : "lch" !== r && "hcl" !== r || (r = "hcl", d = e.hcl(), h = t.hcl()), "h" === r.substr(0, 1) && (a = d[0], l = d[1], o = d[2], u = h[0], s = h[1], i = h[2]), isNaN(a) || isNaN(u) ? isNaN(a) ? isNaN(u) ? f = Number.NaN : (f = u, 1 !== o && 0 !== o || "hsv" === r || (c = s)) : (f = a, 1 !== i && 0 !== i || "hsv" === r || (c = l)) : f = a + n * (u > a && u - a > 180 ? u - (a + 360) : u < a && a - u > 180 ? u + 360 - a : u - a), null == c && (c = l + n * (s - l)), _[r](f, c, o + n * (i - o));
	      }, V = function V(e, t, n, r) {
	        var f, a;return f = e.num(), a = t.num(), _.num(f + (a - f) * n, "num");
	      }, (b = b.concat(function () {
	        var e, t, n, r;for (r = [], t = 0, e = (n = ["hsv", "hsl", "hsi", "hcl", "lch", "hcg"]).length; t < e; t++) {
	          J = n[t], r.push([J, Y]);
	        }return r;
	      }())).push(["num", V]), X = function X(e, t, n, f) {
	        var a, u;return a = e.lab(), u = t.lab(), new r(a[0] + n * (u[0] - a[0]), a[1] + n * (u[1] - a[1]), a[2] + n * (u[2] - a[2]), f);
	      }, b.push(["lab", X]);
	    }).call(this);
	  }).call(this, n(1)(e));
	}, function (e, t) {
	  e.exports = __webpack_require__(1);
	}, function (e, t, n) {
	  "use strict";
	  n.r(t);var r = n(0),
	      f = n.n(r);n.d(t, "MunkerIllusion", function () {
	    return f.a;
	  });
	}]);

/***/ })

});