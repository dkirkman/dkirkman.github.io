exports.ids = [1];
exports.modules = {

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	module.exports = function (e) {
	  var t = {};function n(r) {
	    if (t[r]) return t[r].exports;var i = t[r] = { i: r, l: !1, exports: {} };return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
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
	  }, n.p = "", n(n.s = 9);
	}([function (e, t, n) {
	  "use strict";
	  function r(e, t) {
	    var n = e.__state.conversionName.toString(),
	        r = Math.round(e.r),
	        i = Math.round(e.g),
	        o = Math.round(e.b),
	        a = e.a,
	        s = Math.round(e.h),
	        l = e.s.toFixed(1),
	        u = e.v.toFixed(1);if (t || "THREE_CHAR_HEX" === n || "SIX_CHAR_HEX" === n) {
	      for (var c = e.hex.toString(16); c.length < 6;) {
	        c = "0" + c;
	      }return "#" + c;
	    }return "CSS_RGB" === n ? "rgb(" + r + "," + i + "," + o + ")" : "CSS_RGBA" === n ? "rgba(" + r + "," + i + "," + o + "," + a + ")" : "HEX" === n ? "0x" + e.hex.toString(16) : "RGB_ARRAY" === n ? "[" + r + "," + i + "," + o + "]" : "RGBA_ARRAY" === n ? "[" + r + "," + i + "," + o + "," + a + "]" : "RGB_OBJ" === n ? "{r:" + r + ",g:" + i + ",b:" + o + "}" : "RGBA_OBJ" === n ? "{r:" + r + ",g:" + i + ",b:" + o + ",a:" + a + "}" : "HSV_OBJ" === n ? "{h:" + s + ",s:" + l + ",v:" + u + "}" : "HSVA_OBJ" === n ? "{h:" + s + ",s:" + l + ",v:" + u + ",a:" + a + "}" : "unknown format";
	  }n.r(t);var i = Array.prototype.forEach,
	      o = Array.prototype.slice,
	      a = { BREAK: {}, extend: function extend(e) {
	      return this.each(o.call(arguments, 1), function (t) {
	        (this.isObject(t) ? Object.keys(t) : []).forEach(function (n) {
	          this.isUndefined(t[n]) || (e[n] = t[n]);
	        }.bind(this));
	      }, this), e;
	    }, defaults: function defaults(e) {
	      return this.each(o.call(arguments, 1), function (t) {
	        (this.isObject(t) ? Object.keys(t) : []).forEach(function (n) {
	          this.isUndefined(e[n]) && (e[n] = t[n]);
	        }.bind(this));
	      }, this), e;
	    }, compose: function compose() {
	      var e = o.call(arguments);return function () {
	        for (var t = o.call(arguments), n = e.length - 1; n >= 0; n--) {
	          t = [e[n].apply(this, t)];
	        }return t[0];
	      };
	    }, each: function each(e, t, n) {
	      if (e) if (i && e.forEach && e.forEach === i) e.forEach(t, n);else if (e.length === e.length + 0) {
	        var r,
	            o = void 0;for (o = 0, r = e.length; o < r; o++) {
	          if (o in e && t.call(n, e[o], o) === this.BREAK) return;
	        }
	      } else for (var a in e) {
	        if (t.call(n, e[a], a) === this.BREAK) return;
	      }
	    }, defer: function defer(e) {
	      setTimeout(e, 0);
	    }, debounce: function debounce(e, t, n) {
	      var r = void 0;return function () {
	        var i = this,
	            o = arguments;var a = n || !r;clearTimeout(r), r = setTimeout(function () {
	          r = null, n || e.apply(i, o);
	        }, t), a && e.apply(i, o);
	      };
	    }, toArray: function toArray(e) {
	      return e.toArray ? e.toArray() : o.call(e);
	    }, isUndefined: function isUndefined(e) {
	      return void 0 === e;
	    }, isNull: function isNull(e) {
	      return null === e;
	    }, isNaN: function (e) {
	      function t(t) {
	        return e.apply(this, arguments);
	      }return t.toString = function () {
	        return e.toString();
	      }, t;
	    }(function (e) {
	      return isNaN(e);
	    }), isArray: Array.isArray || function (e) {
	      return e.constructor === Array;
	    }, isObject: function isObject(e) {
	      return e === Object(e);
	    }, isNumber: function isNumber(e) {
	      return e === e + 0;
	    }, isString: function isString(e) {
	      return e === e + "";
	    }, isBoolean: function isBoolean(e) {
	      return !1 === e || !0 === e;
	    }, isFunction: function isFunction(e) {
	      return "[object Function]" === Object.prototype.toString.call(e);
	    } },
	      s = [{ litmus: a.isString, conversions: { THREE_CHAR_HEX: { read: function read(e) {
	          var t = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return null !== t && { space: "HEX", hex: parseInt("0x" + t[1].toString() + t[1].toString() + t[2].toString() + t[2].toString() + t[3].toString() + t[3].toString(), 0) };
	        }, write: r }, SIX_CHAR_HEX: { read: function read(e) {
	          var t = e.match(/^#([A-F0-9]{6})$/i);return null !== t && { space: "HEX", hex: parseInt("0x" + t[1].toString(), 0) };
	        }, write: r }, CSS_RGB: { read: function read(e) {
	          var t = e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);return null !== t && { space: "RGB", r: parseFloat(t[1]), g: parseFloat(t[2]), b: parseFloat(t[3]) };
	        }, write: r }, CSS_RGBA: { read: function read(e) {
	          var t = e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);return null !== t && { space: "RGB", r: parseFloat(t[1]), g: parseFloat(t[2]), b: parseFloat(t[3]), a: parseFloat(t[4]) };
	        }, write: r } } }, { litmus: a.isNumber, conversions: { HEX: { read: function read(e) {
	          return { space: "HEX", hex: e, conversionName: "HEX" };
	        }, write: function write(e) {
	          return e.hex;
	        } } } }, { litmus: a.isArray, conversions: { RGB_ARRAY: { read: function read(e) {
	          return 3 === e.length && { space: "RGB", r: e[0], g: e[1], b: e[2] };
	        }, write: function write(e) {
	          return [e.r, e.g, e.b];
	        } }, RGBA_ARRAY: { read: function read(e) {
	          return 4 === e.length && { space: "RGB", r: e[0], g: e[1], b: e[2], a: e[3] };
	        }, write: function write(e) {
	          return [e.r, e.g, e.b, e.a];
	        } } } }, { litmus: a.isObject, conversions: { RGBA_OBJ: { read: function read(e) {
	          return !!(a.isNumber(e.r) && a.isNumber(e.g) && a.isNumber(e.b) && a.isNumber(e.a)) && { space: "RGB", r: e.r, g: e.g, b: e.b, a: e.a };
	        }, write: function write(e) {
	          return { r: e.r, g: e.g, b: e.b, a: e.a };
	        } }, RGB_OBJ: { read: function read(e) {
	          return !!(a.isNumber(e.r) && a.isNumber(e.g) && a.isNumber(e.b)) && { space: "RGB", r: e.r, g: e.g, b: e.b };
	        }, write: function write(e) {
	          return { r: e.r, g: e.g, b: e.b };
	        } }, HSVA_OBJ: { read: function read(e) {
	          return !!(a.isNumber(e.h) && a.isNumber(e.s) && a.isNumber(e.v) && a.isNumber(e.a)) && { space: "HSV", h: e.h, s: e.s, v: e.v, a: e.a };
	        }, write: function write(e) {
	          return { h: e.h, s: e.s, v: e.v, a: e.a };
	        } }, HSV_OBJ: { read: function read(e) {
	          return !!(a.isNumber(e.h) && a.isNumber(e.s) && a.isNumber(e.v)) && { space: "HSV", h: e.h, s: e.s, v: e.v };
	        }, write: function write(e) {
	          return { h: e.h, s: e.s, v: e.v };
	        } } } }],
	      l = void 0,
	      u = void 0,
	      c = function c() {
	    u = !1;var e = arguments.length > 1 ? a.toArray(arguments) : arguments[0];return a.each(s, function (t) {
	      if (t.litmus(e)) return a.each(t.conversions, function (t, n) {
	        if (l = t.read(e), !1 === u && !1 !== l) return u = l, l.conversionName = n, l.conversion = t, a.BREAK;
	      }), a.BREAK;
	    }), u;
	  },
	      d = void 0,
	      f = { hsv_to_rgb: function hsv_to_rgb(e, t, n) {
	      var r = Math.floor(e / 60) % 6,
	          i = e / 60 - Math.floor(e / 60),
	          o = n * (1 - t),
	          a = n * (1 - i * t),
	          s = n * (1 - (1 - i) * t),
	          l = [[n, s, o], [a, n, o], [o, n, s], [o, a, n], [s, o, n], [n, o, a]][r];return { r: 255 * l[0], g: 255 * l[1], b: 255 * l[2] };
	    }, rgb_to_hsv: function rgb_to_hsv(e, t, n) {
	      var r = Math.min(e, t, n),
	          i = Math.max(e, t, n),
	          o = i - r,
	          a = void 0;return 0 === i ? { h: NaN, s: 0, v: 0 } : (a = e === i ? (t - n) / o : t === i ? 2 + (n - e) / o : 4 + (e - t) / o, (a /= 6) < 0 && (a += 1), { h: 360 * a, s: o / i, v: i / 255 });
	    }, rgb_to_hex: function rgb_to_hex(e, t, n) {
	      var r = this.hex_with_component(0, 2, e);return r = this.hex_with_component(r, 1, t), r = this.hex_with_component(r, 0, n);
	    }, component_from_hex: function component_from_hex(e, t) {
	      return e >> 8 * t & 255;
	    }, hex_with_component: function hex_with_component(e, t, n) {
	      return n << (d = 8 * t) | e & ~(255 << d);
	    } },
	      h = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
	    return typeof e === "undefined" ? "undefined" : _typeof(e);
	  } : function (e) {
	    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
	  },
	      p = function p(e, t) {
	    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	  },
	      _ = function () {
	    function e(e, t) {
	      for (var n = 0; n < t.length; n++) {
	        var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	      }
	    }return function (t, n, r) {
	      return n && e(t.prototype, n), r && e(t, r), t;
	    };
	  }(),
	      b = function e(t, n, r) {
	    null === t && (t = Function.prototype);var i = Object.getOwnPropertyDescriptor(t, n);if (void 0 === i) {
	      var o = Object.getPrototypeOf(t);return null === o ? void 0 : e(o, n, r);
	    }if ("value" in i) return i.value;var a = i.get;return void 0 !== a ? a.call(r) : void 0;
	  },
	      g = function g(e, t) {
	    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	  },
	      m = function m(e, t) {
	    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
	  },
	      v = function () {
	    function e() {
	      if (p(this, e), this.__state = c.apply(this, arguments), !1 === this.__state) throw new Error("Failed to interpret color arguments");this.__state.a = this.__state.a || 1;
	    }return _(e, [{ key: "toString", value: function value() {
	        return r(this);
	      } }, { key: "toHexString", value: function value() {
	        return r(this, !0);
	      } }, { key: "toOriginal", value: function value() {
	        return this.__state.conversion.write(this);
	      } }]), e;
	  }();function y(e, t, n) {
	    Object.defineProperty(e, t, { get: function get() {
	        return "RGB" === this.__state.space ? this.__state[t] : (v.recalculateRGB(this, t, n), this.__state[t]);
	      }, set: function set(e) {
	        "RGB" !== this.__state.space && (v.recalculateRGB(this, t, n), this.__state.space = "RGB"), this.__state[t] = e;
	      } });
	  }function w(e, t) {
	    Object.defineProperty(e, t, { get: function get() {
	        return "HSV" === this.__state.space ? this.__state[t] : (v.recalculateHSV(this), this.__state[t]);
	      }, set: function set(e) {
	        "HSV" !== this.__state.space && (v.recalculateHSV(this), this.__state.space = "HSV"), this.__state[t] = e;
	      } });
	  }v.recalculateRGB = function (e, t, n) {
	    if ("HEX" === e.__state.space) e.__state[t] = f.component_from_hex(e.__state.hex, n);else {
	      if ("HSV" !== e.__state.space) throw new Error("Corrupted color state");a.extend(e.__state, f.hsv_to_rgb(e.__state.h, e.__state.s, e.__state.v));
	    }
	  }, v.recalculateHSV = function (e) {
	    var t = f.rgb_to_hsv(e.r, e.g, e.b);a.extend(e.__state, { s: t.s, v: t.v }), a.isNaN(t.h) ? a.isUndefined(e.__state.h) && (e.__state.h = 0) : e.__state.h = t.h;
	  }, v.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"], y(v.prototype, "r", 2), y(v.prototype, "g", 1), y(v.prototype, "b", 0), w(v.prototype, "h"), w(v.prototype, "s"), w(v.prototype, "v"), Object.defineProperty(v.prototype, "a", { get: function get() {
	      return this.__state.a;
	    }, set: function set(e) {
	      this.__state.a = e;
	    } }), Object.defineProperty(v.prototype, "hex", { get: function get() {
	      return "HEX" !== !this.__state.space && (this.__state.hex = f.rgb_to_hex(this.r, this.g, this.b)), this.__state.hex;
	    }, set: function set(e) {
	      this.__state.space = "HEX", this.__state.hex = e;
	    } });var x = function () {
	    function e(t, n) {
	      p(this, e), this.initialValue = t[n], this.domElement = document.createElement("div"), this.object = t, this.property = n, this.__onChange = void 0, this.__onFinishChange = void 0;
	    }return _(e, [{ key: "onChange", value: function value(e) {
	        return this.__onChange = e, this;
	      } }, { key: "onFinishChange", value: function value(e) {
	        return this.__onFinishChange = e, this;
	      } }, { key: "setValue", value: function value(e) {
	        return this.object[this.property] = e, this.__onChange && this.__onChange.call(this, e), this.updateDisplay(), this;
	      } }, { key: "getValue", value: function value() {
	        return this.object[this.property];
	      } }, { key: "updateDisplay", value: function value() {
	        return this;
	      } }, { key: "isModified", value: function value() {
	        return this.initialValue !== this.getValue();
	      } }]), e;
	  }(),
	      k = {};a.each({ HTMLEvents: ["change"], MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"], KeyboardEvents: ["keydown"] }, function (e, t) {
	    a.each(e, function (e) {
	      k[e] = t;
	    });
	  });var E = /(\d+(\.\d+)?)px/;function A(e) {
	    if ("0" === e || a.isUndefined(e)) return 0;var t = e.match(E);return a.isNull(t) ? 0 : parseFloat(t[1]);
	  }var C = { makeSelectable: function makeSelectable(e, t) {
	      void 0 !== e && void 0 !== e.style && (e.onselectstart = t ? function () {
	        return !1;
	      } : function () {}, e.style.MozUserSelect = t ? "auto" : "none", e.style.KhtmlUserSelect = t ? "auto" : "none", e.unselectable = t ? "on" : "off");
	    }, makeFullscreen: function makeFullscreen(e, t, n) {
	      var r = n,
	          i = t;a.isUndefined(i) && (i = !0), a.isUndefined(r) && (r = !0), e.style.position = "absolute", i && (e.style.left = 0, e.style.right = 0), r && (e.style.top = 0, e.style.bottom = 0);
	    }, fakeEvent: function fakeEvent(e, t, n, r) {
	      var i = n || {},
	          o = k[t];if (!o) throw new Error("Event type " + t + " not supported.");var s = document.createEvent(o);switch (o) {case "MouseEvents":
	          var l = i.x || i.clientX || 0,
	              u = i.y || i.clientY || 0;s.initMouseEvent(t, i.bubbles || !1, i.cancelable || !0, window, i.clickCount || 1, 0, 0, l, u, !1, !1, !1, !1, 0, null);break;case "KeyboardEvents":
	          var c = s.initKeyboardEvent || s.initKeyEvent;a.defaults(i, { cancelable: !0, ctrlKey: !1, altKey: !1, shiftKey: !1, metaKey: !1, keyCode: void 0, charCode: void 0 }), c(t, i.bubbles || !1, i.cancelable, window, i.ctrlKey, i.altKey, i.shiftKey, i.metaKey, i.keyCode, i.charCode);break;default:
	          s.initEvent(t, i.bubbles || !1, i.cancelable || !0);}a.defaults(s, r), e.dispatchEvent(s);
	    }, bind: function bind(e, t, n, r) {
	      var i = r || !1;return e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent && e.attachEvent("on" + t, n), C;
	    }, unbind: function unbind(e, t, n, r) {
	      var i = r || !1;return e.removeEventListener ? e.removeEventListener(t, n, i) : e.detachEvent && e.detachEvent("on" + t, n), C;
	    }, addClass: function addClass(e, t) {
	      if (void 0 === e.className) e.className = t;else if (e.className !== t) {
	        var n = e.className.split(/ +/);-1 === n.indexOf(t) && (n.push(t), e.className = n.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""));
	      }return C;
	    }, removeClass: function removeClass(e, t) {
	      if (t) {
	        if (e.className === t) e.removeAttribute("class");else {
	          var n = e.className.split(/ +/),
	              r = n.indexOf(t);-1 !== r && (n.splice(r, 1), e.className = n.join(" "));
	        }
	      } else e.className = void 0;return C;
	    }, hasClass: function hasClass(e, t) {
	      return new RegExp("(?:^|\\s+)" + t + "(?:\\s+|$)").test(e.className) || !1;
	    }, getWidth: function getWidth(e) {
	      var t = getComputedStyle(e);return A(t["border-left-width"]) + A(t["border-right-width"]) + A(t["padding-left"]) + A(t["padding-right"]) + A(t.width);
	    }, getHeight: function getHeight(e) {
	      var t = getComputedStyle(e);return A(t["border-top-width"]) + A(t["border-bottom-width"]) + A(t["padding-top"]) + A(t["padding-bottom"]) + A(t.height);
	    }, getOffset: function getOffset(e) {
	      var t = e,
	          n = { left: 0, top: 0 };if (t.offsetParent) do {
	        n.left += t.offsetLeft, n.top += t.offsetTop, t = t.offsetParent;
	      } while (t);return n;
	    }, isActive: function isActive(e) {
	      return e === document.activeElement && (e.type || e.href);
	    } },
	      O = function (e) {
	    function t(e, n) {
	      p(this, t);var r = m(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)),
	          i = r;return r.__prev = r.getValue(), r.__checkbox = document.createElement("input"), r.__checkbox.setAttribute("type", "checkbox"), C.bind(r.__checkbox, "change", function () {
	        i.setValue(!i.__prev);
	      }, !1), r.domElement.appendChild(r.__checkbox), r.updateDisplay(), r;
	    }return g(t, x), _(t, [{ key: "setValue", value: function value(e) {
	        var n = b(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setValue", this).call(this, e);return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), n;
	      } }, { key: "updateDisplay", value: function value() {
	        return !0 === this.getValue() ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = !0, this.__prev = !0) : (this.__checkbox.checked = !1, this.__prev = !1), b(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this);
	      } }]), t;
	  }(),
	      S = function (e) {
	    function t(e, n, r) {
	      p(this, t);var i = m(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)),
	          o = r,
	          s = i;if (i.__select = document.createElement("select"), a.isArray(o)) {
	        var l = {};a.each(o, function (e) {
	          l[e] = e;
	        }), o = l;
	      }return a.each(o, function (e, t) {
	        var n = document.createElement("option");n.innerHTML = t, n.setAttribute("value", e), s.__select.appendChild(n);
	      }), i.updateDisplay(), C.bind(i.__select, "change", function () {
	        var e = this.options[this.selectedIndex].value;s.setValue(e);
	      }), i.domElement.appendChild(i.__select), i;
	    }return g(t, x), _(t, [{ key: "setValue", value: function value(e) {
	        var n = b(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setValue", this).call(this, e);return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), n;
	      } }, { key: "updateDisplay", value: function value() {
	        return C.isActive(this.__select) ? this : (this.__select.value = this.getValue(), b(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this));
	      } }]), t;
	  }(),
	      N = function (e) {
	    function t(e, n) {
	      p(this, t);var r = m(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)),
	          i = r;function o() {
	        i.setValue(i.__input.value);
	      }return r.__input = document.createElement("input"), r.__input.setAttribute("type", "text"), C.bind(r.__input, "keyup", o), C.bind(r.__input, "change", o), C.bind(r.__input, "blur", function () {
	        i.__onFinishChange && i.__onFinishChange.call(i, i.getValue());
	      }), C.bind(r.__input, "keydown", function (e) {
	        13 === e.keyCode && this.blur();
	      }), r.updateDisplay(), r.domElement.appendChild(r.__input), r;
	    }return g(t, x), _(t, [{ key: "updateDisplay", value: function value() {
	        return C.isActive(this.__input) || (this.__input.value = this.getValue()), b(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this);
	      } }]), t;
	  }();function R(e) {
	    var t = e.toString();return t.indexOf(".") > -1 ? t.length - t.indexOf(".") - 1 : 0;
	  }var L = function (e) {
	    function t(e, n, r) {
	      p(this, t);var i = m(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)),
	          o = r || {};return i.__min = o.min, i.__max = o.max, i.__step = o.step, a.isUndefined(i.__step) ? 0 === i.initialValue ? i.__impliedStep = 1 : i.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(i.initialValue)) / Math.LN10)) / 10 : i.__impliedStep = i.__step, i.__precision = R(i.__impliedStep), i;
	    }return g(t, x), _(t, [{ key: "setValue", value: function value(e) {
	        var n = e;return void 0 !== this.__min && n < this.__min ? n = this.__min : void 0 !== this.__max && n > this.__max && (n = this.__max), void 0 !== this.__step && n % this.__step != 0 && (n = Math.round(n / this.__step) * this.__step), b(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setValue", this).call(this, n);
	      } }, { key: "min", value: function value(e) {
	        return this.__min = e, this;
	      } }, { key: "max", value: function value(e) {
	        return this.__max = e, this;
	      } }, { key: "step", value: function value(e) {
	        return this.__step = e, this.__impliedStep = e, this.__precision = R(e), this;
	      } }]), t;
	  }();var T = function (e) {
	    function t(e, n, r) {
	      p(this, t);var i = m(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r));i.__truncationSuspended = !1;var o = i,
	          s = void 0;function l() {
	        o.__onFinishChange && o.__onFinishChange.call(o, o.getValue());
	      }function u(e) {
	        var t = s - e.clientY;o.setValue(o.getValue() + t * o.__impliedStep), s = e.clientY;
	      }function c() {
	        C.unbind(window, "mousemove", u), C.unbind(window, "mouseup", c), l();
	      }return i.__input = document.createElement("input"), i.__input.setAttribute("type", "text"), C.bind(i.__input, "change", function () {
	        var e = parseFloat(o.__input.value);a.isNaN(e) || o.setValue(e);
	      }), C.bind(i.__input, "blur", function () {
	        l();
	      }), C.bind(i.__input, "mousedown", function (e) {
	        C.bind(window, "mousemove", u), C.bind(window, "mouseup", c), s = e.clientY;
	      }), C.bind(i.__input, "keydown", function (e) {
	        13 === e.keyCode && (o.__truncationSuspended = !0, this.blur(), o.__truncationSuspended = !1, l());
	      }), i.updateDisplay(), i.domElement.appendChild(i.__input), i;
	    }return g(t, L), _(t, [{ key: "updateDisplay", value: function value() {
	        var e, n, r;return this.__input.value = this.__truncationSuspended ? this.getValue() : (e = this.getValue(), n = this.__precision, r = Math.pow(10, n), Math.round(e * r) / r), b(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this);
	      } }]), t;
	  }();function M(e, t, n, r, i) {
	    return r + (e - t) / (n - t) * (i - r);
	  }var j = function (e) {
	    function t(e, n, r, i, o) {
	      p(this, t);var a = m(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, { min: r, max: i, step: o })),
	          s = a;function l(e) {
	        e.preventDefault();var t = s.__background.getBoundingClientRect();return s.setValue(M(e.clientX, t.left, t.right, s.__min, s.__max)), !1;
	      }function u() {
	        C.unbind(window, "mousemove", l), C.unbind(window, "mouseup", u), s.__onFinishChange && s.__onFinishChange.call(s, s.getValue());
	      }function c(e) {
	        var t = e.touches[0].clientX,
	            n = s.__background.getBoundingClientRect();s.setValue(M(t, n.left, n.right, s.__min, s.__max));
	      }function d() {
	        C.unbind(window, "touchmove", c), C.unbind(window, "touchend", d), s.__onFinishChange && s.__onFinishChange.call(s, s.getValue());
	      }return a.__background = document.createElement("div"), a.__foreground = document.createElement("div"), C.bind(a.__background, "mousedown", function (e) {
	        document.activeElement.blur(), C.bind(window, "mousemove", l), C.bind(window, "mouseup", u), l(e);
	      }), C.bind(a.__background, "touchstart", function (e) {
	        if (1 !== e.touches.length) return;C.bind(window, "touchmove", c), C.bind(window, "touchend", d), c(e);
	      }), C.addClass(a.__background, "slider"), C.addClass(a.__foreground, "slider-fg"), a.updateDisplay(), a.__background.appendChild(a.__foreground), a.domElement.appendChild(a.__background), a;
	    }return g(t, L), _(t, [{ key: "updateDisplay", value: function value() {
	        var e = (this.getValue() - this.__min) / (this.__max - this.__min);return this.__foreground.style.width = 100 * e + "%", b(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this);
	      } }]), t;
	  }(),
	      B = function (e) {
	    function t(e, n, r) {
	      p(this, t);var i = m(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)),
	          o = i;return i.__button = document.createElement("div"), i.__button.innerHTML = void 0 === r ? "Fire" : r, C.bind(i.__button, "click", function (e) {
	        return e.preventDefault(), o.fire(), !1;
	      }), C.addClass(i.__button, "button"), i.domElement.appendChild(i.__button), i;
	    }return g(t, x), _(t, [{ key: "fire", value: function value() {
	        this.__onChange && this.__onChange.call(this), this.getValue().call(this.object), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue());
	      } }]), t;
	  }(),
	      P = function (e) {
	    function t(e, n) {
	      p(this, t);var r = m(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));r.__color = new v(r.getValue()), r.__temp = new v(0);var i = r;r.domElement = document.createElement("div"), C.makeSelectable(r.domElement, !1), r.__selector = document.createElement("div"), r.__selector.className = "selector", r.__saturation_field = document.createElement("div"), r.__saturation_field.className = "saturation-field", r.__field_knob = document.createElement("div"), r.__field_knob.className = "field-knob", r.__field_knob_border = "2px solid ", r.__hue_knob = document.createElement("div"), r.__hue_knob.className = "hue-knob", r.__hue_field = document.createElement("div"), r.__hue_field.className = "hue-field", r.__input = document.createElement("input"), r.__input.type = "text", r.__input_textShadow = "0 1px 1px ", C.bind(r.__input, "keydown", function (e) {
	        13 === e.keyCode && h.call(this);
	      }), C.bind(r.__input, "blur", h), C.bind(r.__selector, "mousedown", function () {
	        C.addClass(this, "drag").bind(window, "mouseup", function () {
	          C.removeClass(i.__selector, "drag");
	        });
	      }), C.bind(r.__selector, "touchstart", function () {
	        C.addClass(this, "drag").bind(window, "touchend", function () {
	          C.removeClass(i.__selector, "drag");
	        });
	      });var o,
	          s = document.createElement("div");function l(e) {
	        b(e), C.bind(window, "mousemove", b), C.bind(window, "touchmove", b), C.bind(window, "mouseup", d), C.bind(window, "touchend", d);
	      }function u(e) {
	        g(e), C.bind(window, "mousemove", g), C.bind(window, "touchmove", g), C.bind(window, "mouseup", f), C.bind(window, "touchend", f);
	      }function d() {
	        C.unbind(window, "mousemove", b), C.unbind(window, "touchmove", b), C.unbind(window, "mouseup", d), C.unbind(window, "touchend", d), _();
	      }function f() {
	        C.unbind(window, "mousemove", g), C.unbind(window, "touchmove", g), C.unbind(window, "mouseup", f), C.unbind(window, "touchend", f), _();
	      }function h() {
	        var e = c(this.value);!1 !== e ? (i.__color.__state = e, i.setValue(i.__color.toOriginal())) : this.value = i.__color.toString();
	      }function _() {
	        i.__onFinishChange && i.__onFinishChange.call(i, i.__color.toOriginal());
	      }function b(e) {
	        -1 === e.type.indexOf("touch") && e.preventDefault();var t = i.__saturation_field.getBoundingClientRect(),
	            n = e.touches && e.touches[0] || e,
	            r = n.clientX,
	            o = n.clientY,
	            a = (r - t.left) / (t.right - t.left),
	            s = 1 - (o - t.top) / (t.bottom - t.top);return s > 1 ? s = 1 : s < 0 && (s = 0), a > 1 ? a = 1 : a < 0 && (a = 0), i.__color.v = s, i.__color.s = a, i.setValue(i.__color.toOriginal()), !1;
	      }function g(e) {
	        -1 === e.type.indexOf("touch") && e.preventDefault();var t = i.__hue_field.getBoundingClientRect(),
	            n = 1 - ((e.touches && e.touches[0] || e).clientY - t.top) / (t.bottom - t.top);return n > 1 ? n = 1 : n < 0 && (n = 0), i.__color.h = 360 * n, i.setValue(i.__color.toOriginal()), !1;
	      }return a.extend(r.__selector.style, { width: "122px", height: "102px", padding: "3px", backgroundColor: "#222", boxShadow: "0px 1px 3px rgba(0,0,0,0.3)" }), a.extend(r.__field_knob.style, { position: "absolute", width: "12px", height: "12px", border: r.__field_knob_border + (r.__color.v < .5 ? "#fff" : "#000"), boxShadow: "0px 1px 3px rgba(0,0,0,0.5)", borderRadius: "12px", zIndex: 1 }), a.extend(r.__hue_knob.style, { position: "absolute", width: "15px", height: "2px", borderRight: "4px solid #fff", zIndex: 1 }), a.extend(r.__saturation_field.style, { width: "100px", height: "100px", border: "1px solid #555", marginRight: "3px", display: "inline-block", cursor: "pointer" }), a.extend(s.style, { width: "100%", height: "100%", background: "none" }), I(s, "top", "rgba(0,0,0,0)", "#000"), a.extend(r.__hue_field.style, { width: "15px", height: "100px", border: "1px solid #555", cursor: "ns-resize", position: "absolute", top: "3px", right: "3px" }), (o = r.__hue_field).style.background = "", o.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", o.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", o.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", o.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", o.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", a.extend(r.__input.style, { outline: "none", textAlign: "center", color: "#fff", border: 0, fontWeight: "bold", textShadow: r.__input_textShadow + "rgba(0,0,0,0.7)" }), C.bind(r.__saturation_field, "mousedown", l), C.bind(r.__saturation_field, "touchstart", l), C.bind(r.__field_knob, "mousedown", l), C.bind(r.__field_knob, "touchstart", l), C.bind(r.__hue_field, "mousedown", u), C.bind(r.__hue_field, "touchstart", u), r.__saturation_field.appendChild(s), r.__selector.appendChild(r.__field_knob), r.__selector.appendChild(r.__saturation_field), r.__selector.appendChild(r.__hue_field), r.__hue_field.appendChild(r.__hue_knob), r.domElement.appendChild(r.__input), r.domElement.appendChild(r.__selector), r.updateDisplay(), r;
	    }return g(t, x), _(t, [{ key: "updateDisplay", value: function value() {
	        var e = c(this.getValue());if (!1 !== e) {
	          var t = !1;a.each(v.COMPONENTS, function (n) {
	            if (!a.isUndefined(e[n]) && !a.isUndefined(this.__color.__state[n]) && e[n] !== this.__color.__state[n]) return t = !0, {};
	          }, this), t && a.extend(this.__color.__state, e);
	        }a.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1;var n = this.__color.v < .5 || this.__color.s > .5 ? 255 : 0,
	            r = 255 - n;a.extend(this.__field_knob.style, { marginLeft: 100 * this.__color.s - 7 + "px", marginTop: 100 * (1 - this.__color.v) - 7 + "px", backgroundColor: this.__temp.toHexString(), border: this.__field_knob_border + "rgb(" + n + "," + n + "," + n + ")" }), this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px", this.__temp.s = 1, this.__temp.v = 1, I(this.__saturation_field, "left", "#fff", this.__temp.toHexString()), this.__input.value = this.__color.toString(), a.extend(this.__input.style, { backgroundColor: this.__color.toHexString(), color: "rgb(" + n + "," + n + "," + n + ")", textShadow: this.__input_textShadow + "rgba(" + r + "," + r + "," + r + ",.7)" });
	      } }]), t;
	  }(),
	      H = ["-moz-", "-o-", "-webkit-", "-ms-", ""];function I(e, t, n, r) {
	    e.style.background = "", a.each(H, function (i) {
	      e.style.cssText += "background: " + i + "linear-gradient(" + t + ", " + n + " 0%, " + r + " 100%); ";
	    });
	  }var F = function F(e, t) {
	    var n = t || document,
	        r = document.createElement("style");r.type = "text/css", r.innerHTML = e;var i = n.getElementsByTagName("head")[0];try {
	      i.appendChild(r);
	    } catch (e) {}
	  },
	      D = function D(e, t) {
	    var n = e[t];return a.isArray(arguments[2]) || a.isObject(arguments[2]) ? new S(e, t, arguments[2]) : a.isNumber(n) ? a.isNumber(arguments[2]) && a.isNumber(arguments[3]) ? a.isNumber(arguments[4]) ? new j(e, t, arguments[2], arguments[3], arguments[4]) : new j(e, t, arguments[2], arguments[3]) : a.isNumber(arguments[4]) ? new T(e, t, { min: arguments[2], max: arguments[3], step: arguments[4] }) : new T(e, t, { min: arguments[2], max: arguments[3] }) : a.isString(n) ? new N(e, t) : a.isFunction(n) ? new B(e, t, "") : a.isBoolean(n) ? new O(e, t) : null;
	  };var z = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
	    setTimeout(e, 1e3 / 60);
	  },
	      U = function () {
	    function e() {
	      p(this, e), this.backgroundElement = document.createElement("div"), a.extend(this.backgroundElement.style, { backgroundColor: "rgba(0,0,0,0.8)", top: 0, left: 0, display: "none", zIndex: "1000", opacity: 0, WebkitTransition: "opacity 0.2s linear", transition: "opacity 0.2s linear" }), C.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), a.extend(this.domElement.style, { position: "fixed", display: "none", zIndex: "1001", opacity: 0, WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear", transition: "transform 0.2s ease-out, opacity 0.2s linear" }), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement);var t = this;C.bind(this.backgroundElement, "click", function () {
	        t.hide();
	      });
	    }return _(e, [{ key: "show", value: function value() {
	        var e = this;this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), a.defer(function () {
	          e.backgroundElement.style.opacity = 1, e.domElement.style.opacity = 1, e.domElement.style.webkitTransform = "scale(1)";
	        });
	      } }, { key: "hide", value: function value() {
	        var e = this,
	            t = function t() {
	          e.domElement.style.display = "none", e.backgroundElement.style.display = "none", C.unbind(e.domElement, "webkitTransitionEnd", t), C.unbind(e.domElement, "transitionend", t), C.unbind(e.domElement, "oTransitionEnd", t);
	        };C.bind(this.domElement, "webkitTransitionEnd", t), C.bind(this.domElement, "transitionend", t), C.bind(this.domElement, "oTransitionEnd", t), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)";
	      } }, { key: "layout", value: function value() {
	        this.domElement.style.left = window.innerWidth / 2 - C.getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - C.getHeight(this.domElement) / 2 + "px";
	      } }]), e;
	  }();F(function (e) {
	    if (e && "undefined" != typeof window) {
	      var t = document.createElement("style");return t.setAttribute("type", "text/css"), t.innerHTML = e, document.head.appendChild(t), e;
	    }
	  }(".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid transparent}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n"));var V = "Default",
	      G = function () {
	    try {
	      return "localStorage" in window && null !== window.localStorage;
	    } catch (e) {
	      return !1;
	    }
	  }(),
	      X = void 0,
	      Y = !0,
	      K = void 0,
	      q = !1,
	      J = [],
	      W = function e(t) {
	    var n = this,
	        r = t || {};this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), C.addClass(this.domElement, "dg"), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], r = a.defaults(r, { closeOnTop: !1, autoPlace: !0, width: e.DEFAULT_WIDTH }), r = a.defaults(r, { resizable: r.autoPlace, hideable: r.autoPlace }), a.isUndefined(r.load) ? r.load = { preset: V } : r.preset && (r.load.preset = r.preset), a.isUndefined(r.parent) && r.hideable && J.push(this), r.resizable = a.isUndefined(r.parent) && r.resizable, r.autoPlace && a.isUndefined(r.scrollable) && (r.scrollable = !0);var i,
	        o = G && "true" === localStorage.getItem(ne(this, "isLocal")),
	        s = void 0;if (Object.defineProperties(this, { parent: { get: function get() {
	          return r.parent;
	        } }, scrollable: { get: function get() {
	          return r.scrollable;
	        } }, autoPlace: { get: function get() {
	          return r.autoPlace;
	        } }, closeOnTop: { get: function get() {
	          return r.closeOnTop;
	        } }, preset: { get: function get() {
	          return n.parent ? n.getRoot().preset : r.load.preset;
	        }, set: function set(e) {
	          n.parent ? n.getRoot().preset = e : r.load.preset = e, function (e) {
	            for (var t = 0; t < e.__preset_select.length; t++) {
	              e.__preset_select[t].value === e.preset && (e.__preset_select.selectedIndex = t);
	            }
	          }(this), n.revert();
	        } }, width: { get: function get() {
	          return r.width;
	        }, set: function set(e) {
	          r.width = e, ae(n, e);
	        } }, name: { get: function get() {
	          return r.name;
	        }, set: function set(e) {
	          r.name = e, titleRowName && (titleRowName.innerHTML = r.name);
	        } }, closed: { get: function get() {
	          return r.closed;
	        }, set: function set(t) {
	          r.closed = t, r.closed ? C.addClass(n.__ul, e.CLASS_CLOSED) : C.removeClass(n.__ul, e.CLASS_CLOSED), this.onResize(), n.__closeButton && (n.__closeButton.innerHTML = t ? e.TEXT_OPEN : e.TEXT_CLOSED);
	        } }, load: { get: function get() {
	          return r.load;
	        } }, useLocalStorage: { get: function get() {
	          return o;
	        }, set: function set(e) {
	          G && (o = e, e ? C.bind(window, "unload", s) : C.unbind(window, "unload", s), localStorage.setItem(ne(n, "isLocal"), e));
	        } } }), a.isUndefined(r.parent)) {
	      if (r.closed = !1, C.addClass(this.domElement, e.CLASS_MAIN), C.makeSelectable(this.domElement, !1), G && o) {
	        n.useLocalStorage = !0;var l = localStorage.getItem(ne(this, "gui"));l && (r.load = JSON.parse(l));
	      }this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = e.TEXT_CLOSED, C.addClass(this.__closeButton, e.CLASS_CLOSE_BUTTON), r.closeOnTop ? (C.addClass(this.__closeButton, e.CLASS_CLOSE_TOP), this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0])) : (C.addClass(this.__closeButton, e.CLASS_CLOSE_BOTTOM), this.domElement.appendChild(this.__closeButton)), C.bind(this.__closeButton, "click", function () {
	        n.closed = !n.closed;
	      });
	    } else {
	      void 0 === r.closed && (r.closed = !0);var u = document.createTextNode(r.name);C.addClass(u, "controller-name");var c = Q(n, u);C.addClass(this.__ul, e.CLASS_CLOSED), C.addClass(c, "title"), C.bind(c, "click", function (e) {
	        return e.preventDefault(), n.closed = !n.closed, !1;
	      }), r.closed || (this.closed = !1);
	    }r.autoPlace && (a.isUndefined(r.parent) && (Y && (K = document.createElement("div"), C.addClass(K, "dg"), C.addClass(K, e.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(K), Y = !1), K.appendChild(this.domElement), C.addClass(this.domElement, e.CLASS_AUTO_PLACE)), this.parent || ae(n, r.width)), this.__resizeHandler = function () {
	      n.onResizeDebounced();
	    }, C.bind(window, "resize", this.__resizeHandler), C.bind(this.__ul, "webkitTransitionEnd", this.__resizeHandler), C.bind(this.__ul, "transitionend", this.__resizeHandler), C.bind(this.__ul, "oTransitionEnd", this.__resizeHandler), this.onResize(), r.resizable && oe(this), s = function s() {
	      G && "true" === localStorage.getItem(ne(n, "isLocal")) && localStorage.setItem(ne(n, "gui"), JSON.stringify(n.getSaveObject()));
	    }, this.saveToLocalStorageIfPossible = s, r.parent || ((i = n.getRoot()).width += 1, a.defer(function () {
	      i.width -= 1;
	    }));
	  };function Q(e, t, n) {
	    var r = document.createElement("li");return t && r.appendChild(t), n ? e.__ul.insertBefore(r, n) : e.__ul.appendChild(r), e.onResize(), r;
	  }function Z(e) {
	    C.unbind(window, "resize", e.__resizeHandler), e.saveToLocalStorageIfPossible && C.unbind(window, "unload", e.saveToLocalStorageIfPossible);
	  }function $(e, t) {
	    var n = e.__preset_select[e.__preset_select.selectedIndex];n.innerHTML = t ? n.value + "*" : n.value;
	  }function ee(e, t) {
	    var n = e.getRoot(),
	        r = n.__rememberedObjects.indexOf(t.object);if (-1 !== r) {
	      var i = n.__rememberedObjectIndecesToControllers[r];if (void 0 === i && (i = {}, n.__rememberedObjectIndecesToControllers[r] = i), i[t.property] = t, n.load && n.load.remembered) {
	        var o = n.load.remembered,
	            a = void 0;if (o[e.preset]) a = o[e.preset];else {
	          if (!o[V]) return;a = o[V];
	        }if (a[r] && void 0 !== a[r][t.property]) {
	          var s = a[r][t.property];t.initialValue = s, t.setValue(s);
	        }
	      }
	    }
	  }function te(e, t, n, r) {
	    if (void 0 === t[n]) throw new Error('Object "' + t + '" has no property "' + n + '"');var i = void 0;if (r.color) i = new P(t, n);else {
	      var o = [t, n].concat(r.factoryArgs);i = D.apply(e, o);
	    }r.before instanceof x && (r.before = r.before.__li), ee(e, i), C.addClass(i.domElement, "c");var s = document.createElement("span");C.addClass(s, "property-name"), s.innerHTML = i.property;var l = document.createElement("div");l.appendChild(s), l.appendChild(i.domElement);var u = Q(e, l, r.before);return C.addClass(u, W.CLASS_CONTROLLER_ROW), i instanceof P ? C.addClass(u, "color") : C.addClass(u, h(i.getValue())), function (e, t, n) {
	      if (n.__li = t, n.__gui = e, a.extend(n, { options: function options(t) {
	          if (arguments.length > 1) {
	            var r = n.__li.nextElementSibling;return n.remove(), te(e, n.object, n.property, { before: r, factoryArgs: [a.toArray(arguments)] });
	          }if (a.isArray(t) || a.isObject(t)) {
	            var i = n.__li.nextElementSibling;return n.remove(), te(e, n.object, n.property, { before: i, factoryArgs: [t] });
	          }
	        }, name: function name(e) {
	          return n.__li.firstElementChild.firstElementChild.innerHTML = e, n;
	        }, listen: function listen() {
	          return n.__gui.listen(n), n;
	        }, remove: function remove() {
	          return n.__gui.remove(n), n;
	        } }), n instanceof j) {
	        var r = new T(n.object, n.property, { min: n.__min, max: n.__max, step: n.__step });a.each(["updateDisplay", "onChange", "onFinishChange", "step"], function (e) {
	          var t = n[e],
	              i = r[e];n[e] = r[e] = function () {
	            var e = Array.prototype.slice.call(arguments);return i.apply(r, e), t.apply(n, e);
	          };
	        }), C.addClass(t, "has-slider"), n.domElement.insertBefore(r.domElement, n.domElement.firstElementChild);
	      } else if (n instanceof T) {
	        var i = function i(t) {
	          if (a.isNumber(n.__min) && a.isNumber(n.__max)) {
	            var r = n.__li.firstElementChild.firstElementChild.innerHTML,
	                i = n.__gui.__listening.indexOf(n) > -1;n.remove();var o = te(e, n.object, n.property, { before: n.__li.nextElementSibling, factoryArgs: [n.__min, n.__max, n.__step] });return o.name(r), i && o.listen(), o;
	          }return t;
	        };n.min = a.compose(i, n.min), n.max = a.compose(i, n.max);
	      } else n instanceof O ? (C.bind(t, "click", function () {
	        C.fakeEvent(n.__checkbox, "click");
	      }), C.bind(n.__checkbox, "click", function (e) {
	        e.stopPropagation();
	      })) : n instanceof B ? (C.bind(t, "click", function () {
	        C.fakeEvent(n.__button, "click");
	      }), C.bind(t, "mouseover", function () {
	        C.addClass(n.__button, "hover");
	      }), C.bind(t, "mouseout", function () {
	        C.removeClass(n.__button, "hover");
	      })) : n instanceof P && (C.addClass(t, "color"), n.updateDisplay = a.compose(function (e) {
	        return t.style.borderLeftColor = n.__color.toString(), e;
	      }, n.updateDisplay), n.updateDisplay());n.setValue = a.compose(function (t) {
	        return e.getRoot().__preset_select && n.isModified() && $(e.getRoot(), !0), t;
	      }, n.setValue);
	    }(e, u, i), e.__controllers.push(i), i;
	  }function ne(e, t) {
	    return document.location.href + "." + t;
	  }function re(e, t, n) {
	    var r = document.createElement("option");r.innerHTML = t, r.value = t, e.__preset_select.appendChild(r), n && (e.__preset_select.selectedIndex = e.__preset_select.length - 1);
	  }function ie(e, t) {
	    t.style.display = e.useLocalStorage ? "block" : "none";
	  }function oe(e) {
	    var t = void 0;function n(n) {
	      return n.preventDefault(), e.width += t - n.clientX, e.onResize(), t = n.clientX, !1;
	    }function r() {
	      C.removeClass(e.__closeButton, W.CLASS_DRAG), C.unbind(window, "mousemove", n), C.unbind(window, "mouseup", r);
	    }function i(i) {
	      return i.preventDefault(), t = i.clientX, C.addClass(e.__closeButton, W.CLASS_DRAG), C.bind(window, "mousemove", n), C.bind(window, "mouseup", r), !1;
	    }e.__resize_handle = document.createElement("div"), a.extend(e.__resize_handle.style, { width: "6px", marginLeft: "-3px", height: "200px", cursor: "ew-resize", position: "absolute" }), C.bind(e.__resize_handle, "mousedown", i), C.bind(e.__closeButton, "mousedown", i), e.domElement.insertBefore(e.__resize_handle, e.domElement.firstElementChild);
	  }function ae(e, t) {
	    e.domElement.style.width = t + "px", e.__save_row && e.autoPlace && (e.__save_row.style.width = t + "px"), e.__closeButton && (e.__closeButton.style.width = t + "px");
	  }function se(e, t) {
	    var n = {};return a.each(e.__rememberedObjects, function (r, i) {
	      var o = {},
	          s = e.__rememberedObjectIndecesToControllers[i];a.each(s, function (e, n) {
	        o[n] = t ? e.initialValue : e.getValue();
	      }), n[i] = o;
	    }), n;
	  }W.toggleHide = function () {
	    q = !q, a.each(J, function (e) {
	      e.domElement.style.display = q ? "none" : "";
	    });
	  }, W.CLASS_AUTO_PLACE = "a", W.CLASS_AUTO_PLACE_CONTAINER = "ac", W.CLASS_MAIN = "main", W.CLASS_CONTROLLER_ROW = "cr", W.CLASS_TOO_TALL = "taller-than-window", W.CLASS_CLOSED = "closed", W.CLASS_CLOSE_BUTTON = "close-button", W.CLASS_CLOSE_TOP = "close-top", W.CLASS_CLOSE_BOTTOM = "close-bottom", W.CLASS_DRAG = "drag", W.DEFAULT_WIDTH = 245, W.TEXT_CLOSED = "Close Controls", W.TEXT_OPEN = "Open Controls", W._keydownHandler = function (e) {
	    "text" === document.activeElement.type || 72 !== e.which && 72 !== e.keyCode || W.toggleHide();
	  }, C.bind(window, "keydown", W._keydownHandler, !1), a.extend(W.prototype, { add: function add(e, t) {
	      return te(this, e, t, { factoryArgs: Array.prototype.slice.call(arguments, 2) });
	    }, addColor: function addColor(e, t) {
	      return te(this, e, t, { color: !0 });
	    }, remove: function remove(e) {
	      this.__ul.removeChild(e.__li), this.__controllers.splice(this.__controllers.indexOf(e), 1);var t = this;a.defer(function () {
	        t.onResize();
	      });
	    }, destroy: function destroy() {
	      if (this.parent) throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace && K.removeChild(this.domElement);var e = this;a.each(this.__folders, function (t) {
	        e.removeFolder(t);
	      }), C.unbind(window, "keydown", W._keydownHandler, !1), Z(this);
	    }, addFolder: function addFolder(e) {
	      if (void 0 !== this.__folders[e]) throw new Error('You already have a folder in this GUI by the name "' + e + '"');var t = { name: e, parent: this };t.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[e] && (t.closed = this.load.folders[e].closed, t.load = this.load.folders[e]);var n = new W(t);this.__folders[e] = n;var r = Q(this, n.domElement);return C.addClass(r, "folder"), n;
	    }, removeFolder: function removeFolder(e) {
	      this.__ul.removeChild(e.domElement.parentElement), delete this.__folders[e.name], this.load && this.load.folders && this.load.folders[e.name] && delete this.load.folders[e.name], Z(e);var t = this;a.each(e.__folders, function (t) {
	        e.removeFolder(t);
	      }), a.defer(function () {
	        t.onResize();
	      });
	    }, open: function open() {
	      this.closed = !1;
	    }, close: function close() {
	      this.closed = !0;
	    }, onResize: function onResize() {
	      var e = this.getRoot();if (e.scrollable) {
	        var t = C.getOffset(e.__ul).top,
	            n = 0;a.each(e.__ul.childNodes, function (t) {
	          e.autoPlace && t === e.__save_row || (n += C.getHeight(t));
	        }), window.innerHeight - t - 20 < n ? (C.addClass(e.domElement, W.CLASS_TOO_TALL), e.__ul.style.height = window.innerHeight - t - 20 + "px") : (C.removeClass(e.domElement, W.CLASS_TOO_TALL), e.__ul.style.height = "auto");
	      }e.__resize_handle && a.defer(function () {
	        e.__resize_handle.style.height = e.__ul.offsetHeight + "px";
	      }), e.__closeButton && (e.__closeButton.style.width = e.width + "px");
	    }, onResizeDebounced: a.debounce(function () {
	      this.onResize();
	    }, 50), remember: function remember() {
	      if (a.isUndefined(X) && ((X = new U()).domElement.innerHTML = '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n\n    </div>\n\n  </div>\n\n</div>'), this.parent) throw new Error("You can only call remember on a top level GUI.");var e = this;a.each(Array.prototype.slice.call(arguments), function (t) {
	        0 === e.__rememberedObjects.length && function (e) {
	          var t = e.__save_row = document.createElement("li");C.addClass(e.domElement, "has-save"), e.__ul.insertBefore(t, e.__ul.firstChild), C.addClass(t, "save-row");var n = document.createElement("span");n.innerHTML = "&nbsp;", C.addClass(n, "button gears");var r = document.createElement("span");r.innerHTML = "Save", C.addClass(r, "button"), C.addClass(r, "save");var i = document.createElement("span");i.innerHTML = "New", C.addClass(i, "button"), C.addClass(i, "save-as");var o = document.createElement("span");o.innerHTML = "Revert", C.addClass(o, "button"), C.addClass(o, "revert");var s = e.__preset_select = document.createElement("select");e.load && e.load.remembered ? a.each(e.load.remembered, function (t, n) {
	            re(e, n, n === e.preset);
	          }) : re(e, V, !1);if (C.bind(s, "change", function () {
	            for (var t = 0; t < e.__preset_select.length; t++) {
	              e.__preset_select[t].innerHTML = e.__preset_select[t].value;
	            }e.preset = this.value;
	          }), t.appendChild(s), t.appendChild(n), t.appendChild(r), t.appendChild(i), t.appendChild(o), G) {
	            var l = document.getElementById("dg-local-explain"),
	                u = document.getElementById("dg-local-storage"),
	                c = document.getElementById("dg-save-locally");c.style.display = "block", "true" === localStorage.getItem(ne(e, "isLocal")) && u.setAttribute("checked", "checked"), ie(e, l), C.bind(u, "change", function () {
	              e.useLocalStorage = !e.useLocalStorage, ie(e, l);
	            });
	          }var d = document.getElementById("dg-new-constructor");C.bind(d, "keydown", function (e) {
	            !e.metaKey || 67 !== e.which && 67 !== e.keyCode || X.hide();
	          }), C.bind(n, "click", function () {
	            d.innerHTML = JSON.stringify(e.getSaveObject(), void 0, 2), X.show(), d.focus(), d.select();
	          }), C.bind(r, "click", function () {
	            e.save();
	          }), C.bind(i, "click", function () {
	            var t = prompt("Enter a new preset name.");t && e.saveAs(t);
	          }), C.bind(o, "click", function () {
	            e.revert();
	          });
	        }(e), -1 === e.__rememberedObjects.indexOf(t) && e.__rememberedObjects.push(t);
	      }), this.autoPlace && ae(this, this.width);
	    }, getRoot: function getRoot() {
	      for (var e = this; e.parent;) {
	        e = e.parent;
	      }return e;
	    }, getSaveObject: function getSaveObject() {
	      var e = this.load;return e.closed = this.closed, this.__rememberedObjects.length > 0 && (e.preset = this.preset, e.remembered || (e.remembered = {}), e.remembered[this.preset] = se(this)), e.folders = {}, a.each(this.__folders, function (t, n) {
	        e.folders[n] = t.getSaveObject();
	      }), e;
	    }, save: function save() {
	      this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = se(this), $(this, !1), this.saveToLocalStorageIfPossible();
	    }, saveAs: function saveAs(e) {
	      this.load.remembered || (this.load.remembered = {}, this.load.remembered[V] = se(this, !0)), this.load.remembered[e] = se(this), this.preset = e, re(this, e, !0), this.saveToLocalStorageIfPossible();
	    }, revert: function revert(e) {
	      a.each(this.__controllers, function (t) {
	        this.getRoot().load.remembered ? ee(e || this.getRoot(), t) : t.setValue(t.initialValue), t.__onFinishChange && t.__onFinishChange.call(t, t.getValue());
	      }, this), a.each(this.__folders, function (e) {
	        e.revert(e);
	      }), e || $(this.getRoot(), !1);
	    }, listen: function listen(e) {
	      var t = 0 === this.__listening.length;this.__listening.push(e), t && function e(t) {
	        0 !== t.length && z.call(window, function () {
	          e(t);
	        });a.each(t, function (e) {
	          e.updateDisplay();
	        });
	      }(this.__listening);
	    }, updateDisplay: function updateDisplay() {
	      a.each(this.__controllers, function (e) {
	        e.updateDisplay();
	      }), a.each(this.__folders, function (e) {
	        e.updateDisplay();
	      });
	    } });var le = { color: { Color: v, math: f, interpret: c }, controllers: { Controller: x, BooleanController: O, OptionController: S, StringController: N, NumberController: L, NumberControllerBox: T, NumberControllerSlider: j, FunctionController: B, ColorController: P }, dom: { dom: C }, gui: { GUI: W }, GUI: W };t.default = le;
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
	          i,
	          o,
	          a,
	          s,
	          l,
	          u,
	          c,
	          d,
	          f,
	          h,
	          p,
	          _,
	          b,
	          _g,
	          _m,
	          v,
	          y,
	          w,
	          x,
	          k,
	          E,
	          A,
	          C,
	          O,
	          S,
	          N,
	          R,
	          L,
	          T,
	          M,
	          j,
	          B,
	          P,
	          H,
	          I,
	          F,
	          D,
	          z,
	          U,
	          V,
	          G,
	          X,
	          Y,
	          K,
	          q,
	          J,
	          W,
	          Q,
	          Z,
	          $,
	          ee,
	          te,
	          ne,
	          re,
	          ie,
	          oe,
	          ae,
	          se,
	          le,
	          ue,
	          ce,
	          de,
	          fe,
	          he,
	          pe,
	          _e,
	          be,
	          ge,
	          ve,
	          ye,
	          we,
	          xe,
	          ke,
	          Ee,
	          Ae,
	          Ce,
	          Oe,
	          Se,
	          Ne,
	          Re = [].slice;Ae = function () {
	        var e, t, n, r, i;for (e = {}, r = 0, t = (i = "Boolean Number String Function Array Date RegExp Undefined Null".split(" ")).length; r < t; r++) {
	          n = i[r], e["[object " + n + "]"] = n.toLowerCase();
	        }return function (t) {
	          var n;return n = Object.prototype.toString.call(t), e[n] || "object";
	        };
	      }(), J = function J(e, t, n) {
	        return null == t && (t = 0), null == n && (n = 1), e < t && (e = t), e > n && (e = n), e;
	      }, Ce = function Ce(e) {
	        return e.length >= 3 ? [].slice.call(e) : e[0];
	      }, k = function k(e) {
	        var t, n;for (e._clipped = !1, e._unclipped = e.slice(0), t = n = 0; n < 3; t = ++n) {
	          t < 3 ? ((e[t] < 0 || e[t] > 255) && (e._clipped = !0), e[t] < 0 && (e[t] = 0), e[t] > 255 && (e[t] = 255)) : 3 === t && (e[t] < 0 && (e[t] = 0), e[t] > 1 && (e[t] = 1));
	        }return e._clipped || delete e._unclipped, e;
	      }, a = Math.PI, ye = Math.round, A = Math.cos, R = Math.floor, re = Math.pow, W = Math.log, xe = Math.sin, ke = Math.sqrt, b = Math.atan2, $ = Math.max, _ = Math.abs, u = 2 * a, s = a / 3, i = a / 180, l = 180 / a, (x = function x() {
	        return arguments[0] instanceof r ? arguments[0] : function (e, t, n) {
	          n.prototype = e.prototype;var r = new n(),
	              i = e.apply(r, t);return Object(i) === i ? i : r;
	        }(r, arguments, function () {});
	      }).default = x, p = [], void 0 !== e && null !== e && null != e.exports && (e.exports = x), void 0 === (n = function () {
	        return x;
	      }.apply(t, [])) || (e.exports = n), x.version = "1.3.5", h = {}, d = [], f = !1, r = function () {
	        function e() {
	          var e, t, n, r, i, o, a, s, l;for (o = this, t = [], s = 0, r = arguments.length; s < r; s++) {
	            null != (e = arguments[s]) && t.push(e);
	          }if (t.length > 1 && (a = t[t.length - 1]), null != h[a]) o._rgb = k(h[a](Ce(t.slice(0, -1))));else {
	            for (f || (d = d.sort(function (e, t) {
	              return t.p - e.p;
	            }), f = !0), l = 0, i = d.length; l < i && !(a = (n = d[l]).test.apply(n, t)); l++) {}a && (o._rgb = k(h[a].apply(h, t)));
	          }null == o._rgb && console.warn("unknown format: " + t), null == o._rgb && (o._rgb = [0, 0, 0]), 3 === o._rgb.length && o._rgb.push(1);
	        }return e.prototype.toString = function () {
	          return this.hex();
	        }, e.prototype.clone = function () {
	          return x(me._rgb);
	        }, e;
	      }(), x._input = h,
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
	      x.brewer = y = { OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"], PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"], BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"], Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"], BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"], YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"], YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"], Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"], RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"], Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"], YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"], Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"], GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"], Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"], YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"], PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"], Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"], PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"], Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"], Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"], RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"], RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"], PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"], PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"], RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"], BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"], RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"], PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"], Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"], Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"], Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"], Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"], Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"], Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"], Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"], Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"] }, function () {
	        var e, t;for (e in t = [], y) {
	          t.push(y[e.toLowerCase()] = y[e]);
	        }
	      }(), x.colors = Oe = { aliceblue: "#f0f8ff", antiquewhite: "#faebd7", aqua: "#00ffff", aquamarine: "#7fffd4", azure: "#f0ffff", beige: "#f5f5dc", bisque: "#ffe4c4", black: "#000000", blanchedalmond: "#ffebcd", blue: "#0000ff", blueviolet: "#8a2be2", brown: "#a52a2a", burlywood: "#deb887", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", cornflower: "#6495ed", cornflowerblue: "#6495ed", cornsilk: "#fff8dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkgray: "#a9a9a9", darkgreen: "#006400", darkgrey: "#a9a9a9", darkkhaki: "#bdb76b", darkmagenta: "#8b008b", darkolivegreen: "#556b2f", darkorange: "#ff8c00", darkorchid: "#9932cc", darkred: "#8b0000", darksalmon: "#e9967a", darkseagreen: "#8fbc8f", darkslateblue: "#483d8b", darkslategray: "#2f4f4f", darkslategrey: "#2f4f4f", darkturquoise: "#00ced1", darkviolet: "#9400d3", deeppink: "#ff1493", deepskyblue: "#00bfff", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1e90ff", firebrick: "#b22222", floralwhite: "#fffaf0", forestgreen: "#228b22", fuchsia: "#ff00ff", gainsboro: "#dcdcdc", ghostwhite: "#f8f8ff", gold: "#ffd700", goldenrod: "#daa520", gray: "#808080", green: "#008000", greenyellow: "#adff2f", grey: "#808080", honeydew: "#f0fff0", hotpink: "#ff69b4", indianred: "#cd5c5c", indigo: "#4b0082", ivory: "#fffff0", khaki: "#f0e68c", laserlemon: "#ffff54", lavender: "#e6e6fa", lavenderblush: "#fff0f5", lawngreen: "#7cfc00", lemonchiffon: "#fffacd", lightblue: "#add8e6", lightcoral: "#f08080", lightcyan: "#e0ffff", lightgoldenrod: "#fafad2", lightgoldenrodyellow: "#fafad2", lightgray: "#d3d3d3", lightgreen: "#90ee90", lightgrey: "#d3d3d3", lightpink: "#ffb6c1", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", lightskyblue: "#87cefa", lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#b0c4de", lightyellow: "#ffffe0", lime: "#00ff00", limegreen: "#32cd32", linen: "#faf0e6", magenta: "#ff00ff", maroon: "#800000", maroon2: "#7f0000", maroon3: "#b03060", mediumaquamarine: "#66cdaa", mediumblue: "#0000cd", mediumorchid: "#ba55d3", mediumpurple: "#9370db", mediumseagreen: "#3cb371", mediumslateblue: "#7b68ee", mediumspringgreen: "#00fa9a", mediumturquoise: "#48d1cc", mediumvioletred: "#c71585", midnightblue: "#191970", mintcream: "#f5fffa", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", navajowhite: "#ffdead", navy: "#000080", oldlace: "#fdf5e6", olive: "#808000", olivedrab: "#6b8e23", orange: "#ffa500", orangered: "#ff4500", orchid: "#da70d6", palegoldenrod: "#eee8aa", palegreen: "#98fb98", paleturquoise: "#afeeee", palevioletred: "#db7093", papayawhip: "#ffefd5", peachpuff: "#ffdab9", peru: "#cd853f", pink: "#ffc0cb", plum: "#dda0dd", powderblue: "#b0e0e6", purple: "#800080", purple2: "#7f007f", purple3: "#a020f0", rebeccapurple: "#663399", red: "#ff0000", rosybrown: "#bc8f8f", royalblue: "#4169e1", saddlebrown: "#8b4513", salmon: "#fa8072", sandybrown: "#f4a460", seagreen: "#2e8b57", seashell: "#fff5ee", sienna: "#a0522d", silver: "#c0c0c0", skyblue: "#87ceeb", slateblue: "#6a5acd", slategray: "#708090", slategrey: "#708090", snow: "#fffafa", springgreen: "#00ff7f", steelblue: "#4682b4", tan: "#d2b48c", teal: "#008080", thistle: "#d8bfd8", tomato: "#ff6347", turquoise: "#40e0d0", violet: "#ee82ee", wheat: "#f5deb3", white: "#ffffff", whitesmoke: "#f5f5f5", yellow: "#ffff00", yellowgreen: "#9acd32" }, G = function G() {
	        var e, t, n, r, i, a, s;return r = (t = Ce(arguments))[0], e = t[1], n = t[2], a = (r + 16) / 116, i = isNaN(e) ? a : a + e / 500, s = isNaN(n) ? a : a - n / 200, a = o.Yn * X(a), i = o.Xn * X(i), s = o.Zn * X(s), [Ne(3.2404542 * i - 1.5371385 * a - .4985314 * s), Ne(-.969266 * i + 1.8760108 * a + .041556 * s), n = Ne(.0556434 * i - .2040259 * a + 1.0572252 * s), t.length > 3 ? t[3] : 1];
	      }, Ne = function Ne(e) {
	        return 255 * (e <= .00304 ? 12.92 * e : 1.055 * re(e, 1 / 2.4) - .055);
	      }, X = function X(e) {
	        return e > o.t1 ? e * e * e : o.t2 * (e - o.t0);
	      }, o = { Kn: 18, Xn: .95047, Yn: 1, Zn: 1.08883, t0: .137931034, t1: .206896552, t2: .12841855, t3: .008856452 }, de = function de() {
	        var e, t, n, r, i, o, a;return n = (r = Ce(arguments))[0], t = r[1], e = r[2], o = (i = be(n, t, e))[0], [116 * (a = i[1]) - 16, 500 * (o - a), 200 * (a - i[2])];
	      }, ge = function ge(e) {
	        return (e /= 255) <= .04045 ? e / 12.92 : re((e + .055) / 1.055, 2.4);
	      }, Se = function Se(e) {
	        return e > o.t3 ? re(e, 1 / 3) : e / o.t2 + o.t0;
	      }, be = function be() {
	        var e, t, n, r;return n = (r = Ce(arguments))[0], t = r[1], e = r[2], n = ge(n), t = ge(t), e = ge(e), [Se((.4124564 * n + .3575761 * t + .1804375 * e) / o.Xn), Se((.2126729 * n + .7151522 * t + .072175 * e) / o.Yn), Se((.0193339 * n + .119192 * t + .9503041 * e) / o.Zn)];
	      }, x.lab = function () {
	        return function (e, t, n) {
	          n.prototype = e.prototype;var r = new n(),
	              i = e.apply(r, t);return Object(i) === i ? i : r;
	        }(r, Re.call(arguments).concat(["lab"]), function () {});
	      }, h.lab = G, r.prototype.lab = function () {
	        return de(this._rgb);
	      }, _g = function g(e) {
	        var t, n, r, i, o, a, s, l, u, c, d;return 2 === (e = function () {
	          var t, n, r;for (r = [], n = 0, t = e.length; n < t; n++) {
	            i = e[n], r.push(x(i));
	          }return r;
	        }()).length ? (u = function () {
	          var t, n, r;for (r = [], n = 0, t = e.length; n < t; n++) {
	            i = e[n], r.push(i.lab());
	          }return r;
	        }(), o = u[0], a = u[1], t = function t(e) {
	          var t, n;return n = function () {
	            var n, r;for (r = [], t = n = 0; n <= 2; t = ++n) {
	              r.push(o[t] + e * (a[t] - o[t]));
	            }return r;
	          }(), x.lab.apply(x, n);
	        }) : 3 === e.length ? (c = function () {
	          var t, n, r;for (r = [], n = 0, t = e.length; n < t; n++) {
	            i = e[n], r.push(i.lab());
	          }return r;
	        }(), o = c[0], a = c[1], s = c[2], t = function t(e) {
	          var t, n;return n = function () {
	            var n, r;for (r = [], t = n = 0; n <= 2; t = ++n) {
	              r.push((1 - e) * (1 - e) * o[t] + 2 * (1 - e) * e * a[t] + e * e * s[t]);
	            }return r;
	          }(), x.lab.apply(x, n);
	        }) : 4 === e.length ? (d = function () {
	          var t, n, r;for (r = [], n = 0, t = e.length; n < t; n++) {
	            i = e[n], r.push(i.lab());
	          }return r;
	        }(), o = d[0], a = d[1], s = d[2], l = d[3], t = function t(e) {
	          var t, n;return n = function () {
	            var n, r;for (r = [], t = n = 0; n <= 2; t = ++n) {
	              r.push((1 - e) * (1 - e) * (1 - e) * o[t] + 3 * (1 - e) * (1 - e) * e * a[t] + 3 * (1 - e) * e * e * s[t] + e * e * e * l[t]);
	            }return r;
	          }(), x.lab.apply(x, n);
	        }) : 5 === e.length && (n = _g(e.slice(0, 3)), r = _g(e.slice(2, 5)), t = function t(e) {
	          return e < .5 ? n(2 * e) : r(2 * (e - .5));
	        }), t;
	      }, x.bezier = function (e) {
	        var t;return (t = _g(e)).scale = function () {
	          return x.scale(t);
	        }, t;
	      }, x.cubehelix = function (e, t, n, r, i) {
	        var o, a, s;return null == e && (e = 300), null == t && (t = -1.5), null == n && (n = 1), null == r && (r = 1), null == i && (i = [0, 1]), o = 0, "array" === Ae(i) ? a = i[1] - i[0] : (a = 0, i = [i, i]), (s = function s(_s) {
	          var l, c, d, f, h;return l = u * ((e + 120) / 360 + t * _s), f = re(i[0] + a * _s, r), c = (0 !== o ? n[0] + _s * o : n) * f * (1 - f) / 2, d = A(l), h = xe(l), x(k([255 * (f + c * (-.14861 * d + 1.78277 * h)), 255 * (f + c * (-.29227 * d - .90649 * h)), 255 * (f + c * (1.97294 * d))]));
	        }).start = function (t) {
	          return null == t ? e : (e = t, s);
	        }, s.rotations = function (e) {
	          return null == e ? t : (t = e, s);
	        }, s.gamma = function (e) {
	          return null == e ? r : (r = e, s);
	        }, s.hue = function (e) {
	          return null == e ? n : ("array" === Ae(n = e) ? 0 === (o = n[1] - n[0]) && (n = n[1]) : o = 0, s);
	        }, s.lightness = function (e) {
	          return null == e ? i : ("array" === Ae(e) ? (i = e, a = e[1] - e[0]) : (i = [e, e], a = 0), s);
	        }, s.scale = function () {
	          return x.scale(s);
	        }, s.hue(n), s;
	      }, x.random = function () {
	        var e, t;for ("0123456789abcdef", e = "#", t = 0; t < 6; ++t) {
	          e += "0123456789abcdef".charAt(R(16 * Math.random()));
	        }return new r(e);
	      }, p = [], x.interpolate = H = function H(e, t, n, r) {
	        var i, o, a, s;for (null == n && (n = .5), null == r && (r = "rgb"), "object" !== Ae(e) && (e = x(e)), "object" !== Ae(t) && (t = x(t)), a = 0, o = p.length; a < o; a++) {
	          if (r === (i = p[a])[0]) {
	            s = i[1](e, t, n, r);break;
	          }
	        }if (null == s) throw "color mode " + r + " is not supported";return s.alpha(e.alpha() + n * (t.alpha() - e.alpha()));
	      }, r.prototype.interpolate = function (e, t, n) {
	        return H(this, e, t, n);
	      }, x.mix = H, r.prototype.mix = r.prototype.interpolate, h.rgb = function () {
	        var e, t, n, r;for (e in n = [], t = Ce(arguments)) {
	          r = t[e], n.push(r);
	        }return n;
	      }, x.rgb = function () {
	        return function (e, t, n) {
	          n.prototype = e.prototype;var r = new n(),
	              i = e.apply(r, t);return Object(i) === i ? i : r;
	        }(r, Re.call(arguments).concat(["rgb"]), function () {});
	      }, r.prototype.rgb = function (e) {
	        return null == e && (e = !0), e ? this._rgb.map(Math.round).slice(0, 3) : this._rgb.slice(0, 3);
	      }, r.prototype.rgba = function (e) {
	        return null == e && (e = !0), e ? [Math.round(this._rgb[0]), Math.round(this._rgb[1]), Math.round(this._rgb[2]), this._rgb[3]] : this._rgb.slice(0);
	      }, d.push({ p: 3, test: function test(e) {
	          var t;return t = Ce(arguments), "array" === Ae(t) && 3 === t.length ? "rgb" : 4 === t.length && "number" === Ae(t[3]) && t[3] >= 0 && t[3] <= 1 ? "rgb" : void 0;
	        } }), h.lrgb = h.rgb, D = function D(e, t, n, i) {
	        var o, a;return o = e._rgb, a = t._rgb, new r(ke(re(o[0], 2) * (1 - n) + re(a[0], 2) * n), ke(re(o[1], 2) * (1 - n) + re(a[1], 2) * n), ke(re(o[2], 2) * (1 - n) + re(a[2], 2) * n), i);
	      }, c = function c(e) {
	        var t, n, i, o, a;for (t = 1 / e.length, a = [0, 0, 0, 0], i = 0, n = e.length; i < n; i++) {
	          o = e[i]._rgb, a[0] += re(o[0], 2) * t, a[1] += re(o[1], 2) * t, a[2] += re(o[2], 2) * t, a[3] += o[3] * t;
	        }return a[0] = ke(a[0]), a[1] = ke(a[1]), a[2] = ke(a[2]), new r(a);
	      }, p.push(["lrgb", D]), x.average = function (e, t) {
	        var n, r, i, o, s, l, u, d, f, h, p, _, g;if (null == t && (t = "rgb"), f = e.length, u = (e = e.map(function (e) {
	          return x(e);
	        })).splice(0, 1)[0], "lrgb" === t) return c(e);for (d in o = [], s = 0, l = 0, _ = u.get(t)) {
	          _[d] = _[d] || 0, o.push(isNaN(_[d]) ? 0 : 1), "h" !== t.charAt(d) || isNaN(_[d]) || (n = _[d] / 180 * a, s += A(n), l += xe(n));
	        }for (r = u.alpha(), p = 0, h = e.length; p < h; p++) {
	          for (d in g = (i = e[p]).get(t), r += i.alpha(), _) {
	            isNaN(g[d]) || (_[d] += g[d], o[d] += 1, "h" === t.charAt(d) && (n = _[d] / 180 * a, s += A(n), l += xe(n)));
	          }
	        }for (d in _) {
	          if (_[d] = _[d] / o[d], "h" === t.charAt(d)) {
	            for (n = b(l / o[d], s / o[d]) / a * 180; n < 0;) {
	              n += 360;
	            }for (; n >= 360;) {
	              n -= 360;
	            }_[d] = n;
	          }
	        }return x(_, t).alpha(r / f);
	      }, T = function T(e) {
	        var t, n;if (e.match(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) return 4 !== e.length && 7 !== e.length || (e = e.substr(1)), 3 === e.length && (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2]), [(n = parseInt(e, 16)) >> 16, n >> 8 & 255, 255 & n, 1];if (e.match(/^#?([A-Fa-f0-9]{8})$/)) return 9 === e.length && (e = e.substr(1)), [(n = parseInt(e, 16)) >> 24 & 255, n >> 16 & 255, n >> 8 & 255, ye((255 & n) / 255 * 100) / 100];if (null != h.css && (t = h.css(e))) return t;throw "unknown color: " + e;
	      }, se = function se(e, t) {
	        var n, r, i, o, a, s;return null == t && (t = "rgb"), a = e[0], i = e[1], r = e[2], n = e[3], a = Math.round(a), i = Math.round(i), r = Math.round(r), s = (s = "000000" + (a << 16 | i << 8 | r).toString(16)).substr(s.length - 6), o = (o = "0" + ye(255 * n).toString(16)).substr(o.length - 2), "#" + function () {
	          switch (t.toLowerCase()) {case "rgba":
	              return s + o;case "argb":
	              return o + s;default:
	              return s;}
	        }();
	      }, h.hex = function (e) {
	        return T(e);
	      }, x.hex = function () {
	        return function (e, t, n) {
	          n.prototype = e.prototype;var r = new n(),
	              i = e.apply(r, t);return Object(i) === i ? i : r;
	        }(r, Re.call(arguments).concat(["hex"]), function () {});
	      }, r.prototype.hex = function (e) {
	        return null == e && (e = "rgb"), se(this._rgb, e);
	      }, d.push({ p: 4, test: function test(e) {
	          if (1 === arguments.length && "string" === Ae(e)) return "hex";
	        } }), B = function B() {
	        var e, t, n, r, i, o, a, s, l, u, c, d, f, h;if (i = (e = Ce(arguments))[0], c = e[1], a = e[2], 0 === c) l = r = t = 255 * a;else {
	          for (h = [0, 0, 0], n = [0, 0, 0], d = 2 * a - (f = a < .5 ? a * (1 + c) : a + c - a * c), i /= 360, h[0] = i + 1 / 3, h[1] = i, h[2] = i - 1 / 3, o = s = 0; s <= 2; o = ++s) {
	            h[o] < 0 && (h[o] += 1), h[o] > 1 && (h[o] -= 1), 6 * h[o] < 1 ? n[o] = d + 6 * (f - d) * h[o] : 2 * h[o] < 1 ? n[o] = f : 3 * h[o] < 2 ? n[o] = d + (f - d) * (2 / 3 - h[o]) * 6 : n[o] = d;
	          }l = (u = [ye(255 * n[0]), ye(255 * n[1]), ye(255 * n[2])])[0], r = u[1], t = u[2];
	        }return e.length > 3 ? [l, r, t, e[3]] : [l, r, t];
	      }, ue = function ue(e, t, n) {
	        var r, i, o, a, s;return void 0 !== e && e.length >= 3 && (e = (a = e)[0], t = a[1], n = a[2]), e /= 255, t /= 255, n /= 255, o = Math.min(e, t, n), i = (($ = Math.max(e, t, n)) + o) / 2, $ === o ? (s = 0, r = Number.NaN) : s = i < .5 ? ($ - o) / ($ + o) : ($ - o) / (2 - $ - o), e === $ ? r = (t - n) / ($ - o) : t === $ ? r = 2 + (n - e) / ($ - o) : n === $ && (r = 4 + (e - t) / ($ - o)), (r *= 60) < 0 && (r += 360), [r, s, i];
	      }, x.hsl = function () {
	        return function (e, t, n) {
	          n.prototype = e.prototype;var r = new n(),
	              i = e.apply(r, t);return Object(i) === i ? i : r;
	        }(r, Re.call(arguments).concat(["hsl"]), function () {});
	      }, h.hsl = B, r.prototype.hsl = function () {
	        return ue(this._rgb);
	      }, P = function P() {
	        var e, t, n, r, i, o, a, s, l, u, c, d, f, h, p, _, b, g;if (i = (e = Ce(arguments))[0], _ = e[1], g = e[2], g *= 255, 0 === _) l = r = t = g;else switch (360 === i && (i = 0), i > 360 && (i -= 360), i < 0 && (i += 360), a = g * (1 - _), s = g * (1 - _ * (n = (i /= 60) - (o = R(i)))), b = g * (1 - _ * (1 - n)), o) {case 0:
	            l = (u = [g, b, a])[0], r = u[1], t = u[2];break;case 1:
	            l = (c = [s, g, a])[0], r = c[1], t = c[2];break;case 2:
	            l = (d = [a, g, b])[0], r = d[1], t = d[2];break;case 3:
	            l = (f = [a, s, g])[0], r = f[1], t = f[2];break;case 4:
	            l = (h = [b, a, g])[0], r = h[1], t = h[2];break;case 5:
	            l = (p = [g, a, s])[0], r = p[1], t = p[2];}return [l, r, t, e.length > 3 ? e[3] : 1];
	      }, ce = function ce() {
	        var e, t, n, r, i, o, a, s, l;return o = (a = Ce(arguments))[0], n = a[1], e = a[2], i = Math.min(o, n, e), t = ($ = Math.max(o, n, e)) - i, l = $ / 255, 0 === $ ? (r = Number.NaN, s = 0) : (s = t / $, o === $ && (r = (n - e) / t), n === $ && (r = 2 + (e - o) / t), e === $ && (r = 4 + (o - n) / t), (r *= 60) < 0 && (r += 360)), [r, s, l];
	      }, x.hsv = function () {
	        return function (e, t, n) {
	          n.prototype = e.prototype;var r = new n(),
	              i = e.apply(r, t);return Object(i) === i ? i : r;
	        }(r, Re.call(arguments).concat(["hsv"]), function () {});
	      }, h.hsv = P, r.prototype.hsv = function () {
	        return ce(this._rgb);
	      }, te = function te(e) {
	        return "number" === Ae(e) && e >= 0 && e <= 16777215 ? [e >> 16, e >> 8 & 255, 255 & e, 1] : (console.warn("unknown num color: " + e), [0, 0, 0, 1]);
	      }, pe = function pe() {
	        var e;return ((e = Ce(arguments))[0] << 16) + (e[1] << 8) + e[2];
	      }, x.num = function (e) {
	        return new r(e, "num");
	      }, r.prototype.num = function (e) {
	        return null == e && (e = "rgb"), pe(this._rgb, e);
	      }, h.num = te, d.push({ p: 1, test: function test(e) {
	          if (1 === arguments.length && "number" === Ae(e) && e >= 0 && e <= 16777215) return "num";
	        } }), L = function L() {
	        var e, t, n, r, i, o, a, s, l, u, c, d, f, h, p, _, b, g, m, v;if (s = (n = Ce(arguments))[0], i = n[1], t = n[2], a = a / 100 * 255, e = 255 * (i /= 100), 0 === i) d = a = r = t;else switch (360 === s && (s = 0), s > 360 && (s -= 360), s < 0 && (s += 360), c = (u = t * (1 - i)) + e * (1 - (o = (s /= 60) - (l = R(s)))), m = u + e * o, v = u + e, l) {case 0:
	            d = (f = [v, m, u])[0], a = f[1], r = f[2];break;case 1:
	            d = (h = [c, v, u])[0], a = h[1], r = h[2];break;case 2:
	            d = (p = [u, v, m])[0], a = p[1], r = p[2];break;case 3:
	            d = (_ = [u, c, v])[0], a = _[1], r = _[2];break;case 4:
	            d = (b = [m, u, v])[0], a = b[1], r = b[2];break;case 5:
	            d = (g = [v, u, c])[0], a = g[1], r = g[2];}return [d, a, r, n.length > 3 ? n[3] : 1];
	      }, ae = function ae() {
	        var e, t, n, r, i, o, a, s, l;return s = (l = Ce(arguments))[0], i = l[1], t = l[2], a = Math.min(s, i, t), n = 100 * (r = ($ = Math.max(s, i, t)) - a) / 255, e = a / (255 - r) * 100, 0 === r ? o = Number.NaN : (s === $ && (o = (i - t) / r), i === $ && (o = 2 + (t - s) / r), t === $ && (o = 4 + (s - i) / r), (o *= 60) < 0 && (o += 360)), [o, n, e];
	      }, x.hcg = function () {
	        return function (e, t, n) {
	          n.prototype = e.prototype;var r = new n(),
	              i = e.apply(r, t);return Object(i) === i ? i : r;
	        }(r, Re.call(arguments).concat(["hcg"]), function () {});
	      }, h.hcg = L, r.prototype.hcg = function () {
	        return ae(this._rgb);
	      }, C = function C(e) {
	        var t, n, r, i, o, a, s, l;if (e = e.toLowerCase(), null != x.colors && x.colors[e]) return T(x.colors[e]);if (o = e.match(/rgb\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*\)/)) {
	          for (s = o.slice(1, 4), i = a = 0; a <= 2; i = ++a) {
	            s[i] = +s[i];
	          }s[3] = 1;
	        } else if (o = e.match(/rgba\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*,\s*([01]|[01]?\.\d+)\)/)) for (s = o.slice(1, 5), i = l = 0; l <= 3; i = ++l) {
	          s[i] = +s[i];
	        } else if (o = e.match(/rgb\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) {
	          for (s = o.slice(1, 4), i = t = 0; t <= 2; i = ++t) {
	            s[i] = ye(2.55 * s[i]);
	          }s[3] = 1;
	        } else if (o = e.match(/rgba\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) {
	          for (s = o.slice(1, 5), i = n = 0; n <= 2; i = ++n) {
	            s[i] = ye(2.55 * s[i]);
	          }s[3] = +s[3];
	        } else (o = e.match(/hsl\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) ? ((r = o.slice(1, 4))[1] *= .01, r[2] *= .01, (s = B(r))[3] = 1) : (o = e.match(/hsla\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) && ((r = o.slice(1, 4))[1] *= .01, r[2] *= .01, (s = B(r))[3] = +o[4]);return s;
	      }, oe = function oe(e) {
	        var t;return "rgb" === (t = e[3] < 1 ? "rgba" : "rgb") ? t + "(" + e.slice(0, 3).map(ye).join(",") + ")" : "rgba" === t ? t + "(" + e.slice(0, 3).map(ye).join(",") + "," + e[3] + ")" : void 0;
	      }, ve = function ve(e) {
	        return ye(100 * e) / 100;
	      }, j = function j(e, t) {
	        var n;return n = t < 1 ? "hsla" : "hsl", e[0] = ve(e[0] || 0), e[1] = ve(100 * e[1]) + "%", e[2] = ve(100 * e[2]) + "%", "hsla" === n && (e[3] = t), n + "(" + e.join(",") + ")";
	      }, h.css = function (e) {
	        return C(e);
	      }, x.css = function () {
	        return function (e, t, n) {
	          n.prototype = e.prototype;var r = new n(),
	              i = e.apply(r, t);return Object(i) === i ? i : r;
	        }(r, Re.call(arguments).concat(["css"]), function () {});
	      }, r.prototype.css = function (e) {
	        return null == e && (e = "rgb"), "rgb" === e.slice(0, 3) ? oe(this._rgb) : "hsl" === e.slice(0, 3) ? j(this.hsl(), this.alpha()) : void 0;
	      }, h.named = function (e) {
	        return T(Oe[e]);
	      }, d.push({ p: 5, test: function test(e) {
	          if (1 === arguments.length && null != Oe[e]) return "named";
	        } }), r.prototype.name = function (e) {
	        var t, n;for (n in arguments.length && (Oe[e] && (this._rgb = T(Oe[e])), this._rgb[3] = 1), t = this.hex(), Oe) {
	          if (t === Oe[n]) return n;
	        }return t;
	      }, Y = function Y() {
	        var e, t, n, r;return n = (r = Ce(arguments))[0], e = r[1], t = r[2], [n, A(t *= i) * e, xe(t) * e];
	      }, K = function K() {
	        var e, t, n, r, i, o, a, s, l;return a = (n = Ce(arguments))[0], i = n[1], o = n[2], e = (s = Y(a, i, o))[0], t = s[1], r = s[2], [(l = G(e, t, r))[0], l[1], r = l[2], n.length > 3 ? n[3] : 1];
	      }, V = function V() {
	        var e, t, n, r, i, o;return i = (o = Ce(arguments))[0], e = o[1], t = o[2], n = ke(e * e + t * t), r = (b(t, e) * l + 360) % 360, 0 === ye(1e4 * n) && (r = Number.NaN), [i, n, r];
	      }, fe = function fe() {
	        var e, t, n, r, i, o, a;return i = (o = Ce(arguments))[0], n = o[1], t = o[2], r = (a = de(i, n, t))[0], e = a[1], t = a[2], V(r, e, t);
	      }, x.lch = function () {
	        var e;return e = Ce(arguments), new r(e, "lch");
	      }, x.hcl = function () {
	        var e;return e = Ce(arguments), new r(e, "hcl");
	      }, h.lch = K, h.hcl = function () {
	        var e, t, n, r;return t = (r = Ce(arguments))[0], e = r[1], n = r[2], K([n, e, t]);
	      }, r.prototype.lch = function () {
	        return fe(this._rgb);
	      }, r.prototype.hcl = function () {
	        return fe(this._rgb).reverse();
	      }, ie = function ie(e) {
	        var t, n, r, i, o, a;return null == e && (e = "rgb"), o = (a = Ce(arguments))[0], r = a[1], t = a[2], r /= 255, t /= 255, [(1 - (o /= 255) - (i = 1 - Math.max(o, Math.max(r, t)))) * (n = i < 1 ? 1 / (1 - i) : 0), (1 - r - i) * n, (1 - t - i) * n, i];
	      }, E = function E() {
	        var e, t, n, r, i, o;return n = (t = Ce(arguments))[0], i = t[1], o = t[2], r = t[3], e = t.length > 4 ? t[4] : 1, 1 === r ? [0, 0, 0, e] : [n >= 1 ? 0 : 255 * (1 - n) * (1 - r), i >= 1 ? 0 : 255 * (1 - i) * (1 - r), o >= 1 ? 0 : 255 * (1 - o) * (1 - r), e];
	      }, h.cmyk = function () {
	        return E(Ce(arguments));
	      }, x.cmyk = function () {
	        return function (e, t, n) {
	          n.prototype = e.prototype;var r = new n(),
	              i = e.apply(r, t);return Object(i) === i ? i : r;
	        }(r, Re.call(arguments).concat(["cmyk"]), function () {});
	      }, r.prototype.cmyk = function () {
	        return ie(this._rgb);
	      }, h.gl = function () {
	        var e, t, n, r, i;for (r = function () {
	          var e, n;for (t in n = [], e = Ce(arguments)) {
	            i = e[t], n.push(i);
	          }return n;
	        }.apply(this, arguments), e = n = 0; n <= 2; e = ++n) {
	          r[e] *= 255;
	        }return r;
	      }, x.gl = function () {
	        return function (e, t, n) {
	          n.prototype = e.prototype;var r = new n(),
	              i = e.apply(r, t);return Object(i) === i ? i : r;
	        }(r, Re.call(arguments).concat(["gl"]), function () {});
	      }, r.prototype.gl = function () {
	        var e;return [(e = this._rgb)[0] / 255, e[1] / 255, e[2] / 255, e[3]];
	      }, he = function he(e, t, n) {
	        var r;return e = (r = Ce(arguments))[0], t = r[1], n = r[2], .2126 * (e = Q(e)) + .7152 * (t = Q(t)) + .0722 * (n = Q(n));
	      }, Q = function Q(e) {
	        return (e /= 255) <= .03928 ? e / 12.92 : re((e + .055) / 1.055, 2.4);
	      }, U = function U(e, t, n, i) {
	        var o, a;return o = e._rgb, a = t._rgb, new r(o[0] + n * (a[0] - o[0]), o[1] + n * (a[1] - o[1]), o[2] + n * (a[2] - o[2]), i);
	      }, p.push(["rgb", U]), r.prototype.luminance = function (e, t) {
	        var n, r, i, _o;return null == t && (t = "rgb"), arguments.length ? (0 === e ? this._rgb = [0, 0, 0, this._rgb[3]] : 1 === e ? this._rgb = [255, 255, 255, this._rgb[3]] : (r = 1e-7, i = 20, _o = function o(n, a) {
	          var s, l;return s = (l = n.interpolate(a, .5, t)).luminance(), Math.abs(e - s) < r || !i-- ? l : s > e ? _o(n, l) : _o(l, a);
	        }, n = he(this._rgb), this._rgb = (n > e ? _o(x("black"), this) : _o(this, x("white"))).rgba()), this) : he(this._rgb);
	      }, Ee = function Ee(e) {
	        var t, n, r, i;return (i = e / 100) < 66 ? (r = 255, n = -155.25485562709179 - .44596950469579133 * (n = i - 2) + 104.49216199393888 * W(n), t = i < 20 ? 0 : .8274096064007395 * (t = i - 10) - 254.76935184120902 + 115.67994401066147 * W(t)) : (r = 351.97690566805693 + .114206453784165 * (r = i - 55) - 40.25366309332127 * W(r), n = 325.4494125711974 + .07943456536662342 * (n = i - 50) - 28.0852963507957 * W(n), t = 255), [r, n, t];
	      }, _e = function _e() {
	        var e, t, n, r, i, o, a;for (r = (i = Ce(arguments))[0], i[1], e = i[2], n = 1e3, t = 4e4, .4; t - n > .4;) {
	          (o = Ee(a = .5 * (t + n)))[2] / o[0] >= e / r ? t = a : n = a;
	        }return ye(a);
	      }, x.temperature = x.kelvin = function () {
	        return function (e, t, n) {
	          n.prototype = e.prototype;var r = new n(),
	              i = e.apply(r, t);return Object(i) === i ? i : r;
	        }(r, Re.call(arguments).concat(["temperature"]), function () {});
	      }, h.temperature = h.kelvin = h.K = Ee, r.prototype.temperature = function () {
	        return _e(this._rgb);
	      }, r.prototype.kelvin = r.prototype.temperature, x.contrast = function (e, t) {
	        var n, i, o, a;return "string" !== (o = Ae(e)) && "number" !== o || (e = new r(e)), "string" !== (a = Ae(t)) && "number" !== a || (t = new r(t)), (n = e.luminance()) > (i = t.luminance()) ? (n + .05) / (i + .05) : (i + .05) / (n + .05);
	      }, x.distance = function (e, t, n) {
	        var i, o, a, s, l, u, c;for (o in null == n && (n = "lab"), "string" !== (l = Ae(e)) && "number" !== l || (e = new r(e)), "string" !== (u = Ae(t)) && "number" !== u || (t = new r(t)), a = e.get(n), s = t.get(n), c = 0, a) {
	          c += (i = (a[o] || 0) - (s[o] || 0)) * i;
	        }return Math.sqrt(c);
	      }, x.deltaE = function (e, t, n, i) {
	        var o, s, l, u, c, d, f, h, p, g, m, v, y, w, x, k, E, C, O, S, N, R, L, T;for (null == n && (n = 1), null == i && (i = 1), "string" !== (x = Ae(e)) && "number" !== x || (e = new r(e)), "string" !== (k = Ae(t)) && "number" !== k || (t = new r(t)), o = (E = e.lab())[0], l = E[1], c = E[2], s = (C = t.lab())[0], u = C[1], d = C[2], f = ke(l * l + c * c), h = ke(u * u + d * d), S = o < 16 ? .511 : .040975 * o / (1 + .01765 * o), O = .0638 * f / (1 + .0131 * f) + .638, w = f < 1e-6 ? 0 : 180 * b(c, l) / a; w < 0;) {
	          w += 360;
	        }for (; w >= 360;) {
	          w -= 360;
	        }return N = w >= 164 && w <= 345 ? .56 + _(.2 * A(a * (w + 168) / 180)) : .36 + _(.4 * A(a * (w + 35) / 180)), y = ke((p = f * f * f * f) / (p + 1900)), ke((R = (o - s) / (n * S)) * R + (L = (v = f - h) / (i * O)) * L + ((g = l - u) * g + (m = c - d) * m - v * v) / ((T = O * (y * N + 1 - y)) * T));
	      }, r.prototype.get = function (e) {
	        var t, n, r, i, o;return this, r = (i = e.split("."))[0], t = i[1], o = this[r](), t ? (n = r.indexOf(t)) > -1 ? o[n] : console.warn("unknown channel " + t + " in mode " + r) : o;
	      }, r.prototype.set = function (e, t) {
	        var n, r, i, o, a;if (this, i = (o = e.split("."))[0], n = o[1]) {
	          if (a = this[i](), (r = i.indexOf(n)) > -1) {
	            if ("string" === Ae(t)) switch (t.charAt(0)) {case "+":case "-":
	                a[r] += +t;break;case "*":
	                a[r] *= +t.substr(1);break;case "/":
	                a[r] /= +t.substr(1);break;default:
	                a[r] = +t;} else a[r] = t;
	          } else console.warn("unknown channel " + n + " in mode " + i);
	        } else a = t;return x(a, i).alpha(this.alpha());
	      }, r.prototype.clipped = function () {
	        return this._rgb._clipped || !1;
	      }, r.prototype.alpha = function (e) {
	        return arguments.length ? x.rgb([this._rgb[0], this._rgb[1], this._rgb[2], e]) : this._rgb[3];
	      }, r.prototype.darken = function (e) {
	        var t;return null == e && (e = 1), this, (t = this.lab())[0] -= o.Kn * e, x.lab(t).alpha(this.alpha());
	      }, r.prototype.brighten = function (e) {
	        return null == e && (e = 1), this.darken(-e);
	      }, r.prototype.darker = r.prototype.darken, r.prototype.brighter = r.prototype.brighten, r.prototype.saturate = function (e) {
	        var t;return null == e && (e = 1), this, (t = this.lch())[1] += e * o.Kn, t[1] < 0 && (t[1] = 0), x.lch(t).alpha(this.alpha());
	      }, r.prototype.desaturate = function (e) {
	        return null == e && (e = 1), this.saturate(-e);
	      }, r.prototype.premultiply = function () {
	        var e, t;return t = this.rgb(), e = this.alpha(), x(t[0] * e, t[1] * e, t[2] * e, e);
	      }, ee = function ee(e, t) {
	        return e * t / 255;
	      }, O = function O(e, t) {
	        return e > t ? t : e;
	      }, q = function q(e, t) {
	        return e > t ? e : t;
	      }, we = function we(e, t) {
	        return 255 * (1 - (1 - e / 255) * (1 - t / 255));
	      }, ne = function ne(e, t) {
	        return t < 128 ? 2 * e * t / 255 : 255 * (1 - 2 * (1 - e / 255) * (1 - t / 255));
	      }, w = function w(e, t) {
	        return 255 * (1 - (1 - t / 255) / (e / 255));
	      }, S = function S(e, t) {
	        return 255 === e ? 255 : (e = t / 255 * 255 / (1 - e / 255)) > 255 ? 255 : e;
	      }, (_m = function m(e, t, n) {
	        if (!_m[n]) throw "unknown blend mode " + n;return _m[n](e, t);
	      }).normal = (v = function v(e) {
	        return function (t, n) {
	          var r, i;return r = x(n).rgb(), i = x(t).rgb(), x(e(r, i), "rgb");
	        };
	      })((N = function N(e) {
	        return function (t, n) {
	          var r, i, o;for (o = [], r = i = 0; i <= 3; r = ++i) {
	            o[r] = e(t[r], n[r]);
	          }return o;
	        };
	      })(function (e, t) {
	        return e;
	      })), _m.multiply = v(N(ee)), _m.screen = v(N(we)), _m.overlay = v(N(ne)), _m.darken = v(N(O)), _m.lighten = v(N(q)), _m.dodge = v(N(S)), _m.burn = v(N(w)), x.blend = _m, x.analyze = function (e) {
	        var t, n, r, i;for (r = { min: Number.MAX_VALUE, max: -1 * Number.MAX_VALUE, sum: 0, values: [], count: 0 }, n = 0, t = e.length; n < t; n++) {
	          null == (i = e[n]) || isNaN(i) || (r.values.push(i), r.sum += i, i < r.min && (r.min = i), i > r.max && (r.max = i), r.count += 1);
	        }return r.domain = [r.min, r.max], r.limits = function (e, t) {
	          return x.limits(r, e, t);
	        }, r;
	      }, x.scale = function (e, t) {
	        var n, r, i, o, a, s, l, u, c, d, f, h, p, _, b, g, m, v, y, w, k;return c = "rgb", d = x("#ccc"), _ = 0, !1, a = [0, 1], p = [], h = [0, 0], n = !1, i = [], f = !1, u = 0, l = 1, o = !1, r = {}, b = !0, s = 1, w = function w(e) {
	          var t, n, r, o, a, s;if (null == e && (e = ["#fff", "#000"]), null != e && "string" === Ae(e) && null != x.brewer && (e = x.brewer[e] || x.brewer[e.toLowerCase()] || e), "array" === Ae(e)) {
	            for (t = r = 0, o = (e = e.slice(0)).length - 1; 0 <= o ? r <= o : r >= o; t = 0 <= o ? ++r : --r) {
	              n = e[t], "string" === Ae(n) && (e[t] = x(n));
	            }for (p.length = 0, t = s = 0, a = e.length - 1; 0 <= a ? s <= a : s >= a; t = 0 <= a ? ++s : --s) {
	              p.push(t / (e.length - 1));
	            }
	          }return y(), i = e;
	        }, m = function m(e) {
	          var t, r;if (null != n) {
	            for (r = n.length - 1, t = 0; t < r && e >= n[t];) {
	              t++;
	            }return t - 1;
	          }return 0;
	        }, k = function k(e) {
	          return e;
	        }, function (e) {
	          var t, r, i, o, a;return a = e, n.length > 2 && (o = n.length - 1, t = m(e), i = n[0] + (n[1] - n[0]) * (0 + .5 * _), r = n[o - 1] + (n[o] - n[o - 1]) * (1 - .5 * _), a = u + (n[t] + .5 * (n[t + 1] - n[t]) - i) / (r - i) * (l - u)), a;
	        }, v = function v(e, t) {
	          var o, a, f, _, g, v, y;if (null == t && (t = !1), isNaN(e)) return d;if (y = t ? e : n && n.length > 2 ? m(e) / (n.length - 2) : l !== u ? (e - u) / (l - u) : 1, t || (y = k(y)), 1 !== s && (y = re(y, s)), y = h[0] + y * (1 - h[0] - h[1]), y = Math.min(1, Math.max(0, y)), f = Math.floor(1e4 * y), b && r[f]) o = r[f];else {
	            if ("array" === Ae(i)) for (a = _ = 0, v = p.length - 1; 0 <= v ? _ <= v : _ >= v; a = 0 <= v ? ++_ : --_) {
	              if (y <= (g = p[a])) {
	                o = i[a];break;
	              }if (y >= g && a === p.length - 1) {
	                o = i[a];break;
	              }if (y > g && y < p[a + 1]) {
	                y = (y - g) / (p[a + 1] - g), o = x.interpolate(i[a], i[a + 1], y, c);break;
	              }
	            } else "function" === Ae(i) && (o = i(y));b && (r[f] = o);
	          }return o;
	        }, y = function y() {
	          return r = {};
	        }, w(e), (g = function g(e) {
	          var t;return t = x(v(e)), f && t[f] ? t[f]() : t;
	        }).classes = function (e) {
	          var t;return null != e ? ("array" === Ae(e) ? (n = e, a = [e[0], e[e.length - 1]]) : (t = x.analyze(a), n = 0 === e ? [t.min, t.max] : x.limits(t, "e", e)), g) : n;
	        }, g.domain = function (e) {
	          var t, n, r, o, s, c, d;if (!arguments.length) return a;if (u = e[0], l = e[e.length - 1], p = [], r = i.length, e.length === r && u !== l) for (s = 0, o = e.length; s < o; s++) {
	            n = e[s], p.push((n - u) / (l - u));
	          } else for (t = d = 0, c = r - 1; 0 <= c ? d <= c : d >= c; t = 0 <= c ? ++d : --d) {
	            p.push(t / (r - 1));
	          }return a = [u, l], g;
	        }, g.mode = function (e) {
	          return arguments.length ? (c = e, y(), g) : c;
	        }, g.range = function (e, t) {
	          return w(e), g;
	        }, g.out = function (e) {
	          return f = e, g;
	        }, g.spread = function (e) {
	          return arguments.length ? (_ = e, g) : _;
	        }, g.correctLightness = function (e) {
	          return null == e && (e = !0), o = e, y(), k = o ? function (e) {
	            var t, n, r, i, o, a, s, l, u;for (t = v(0, !0).lab()[0], n = v(1, !0).lab()[0], s = t > n, r = v(e, !0).lab()[0], i = r - (o = t + (n - t) * e), l = 0, u = 1, a = 20; Math.abs(i) > .01 && a-- > 0;) {
	              s && (i *= -1), i < 0 ? (l = e, e += .5 * (u - e)) : (u = e, e += .5 * (l - e)), r = v(e, !0).lab()[0], i = r - o;
	            }return e;
	          } : function (e) {
	            return e;
	          }, g;
	        }, g.padding = function (e) {
	          return null != e ? ("number" === Ae(e) && (e = [e, e]), h = e, g) : h;
	        }, g.colors = function (t, r) {
	          var o, s, l, u, c, d, f, h;if (arguments.length < 2 && (r = "hex"), c = [], 0 === arguments.length) c = i.slice(0);else if (1 === t) c = [g(.5)];else if (t > 1) s = a[0], o = a[1] - s, c = function () {
	            d = [];for (var e = 0; 0 <= t ? e < t : e > t; 0 <= t ? e++ : e--) {
	              d.push(e);
	            }return d;
	          }.apply(this).map(function (e) {
	            return g(s + e / (t - 1) * o);
	          });else {
	            if (e = [], f = [], n && n.length > 2) for (l = h = 1, u = n.length; 1 <= u ? h < u : h > u; l = 1 <= u ? ++h : --h) {
	              f.push(.5 * (n[l - 1] + n[l]));
	            } else f = a;c = f.map(function (e) {
	              return g(e);
	            });
	          }return x[r] && (c = c.map(function (e) {
	            return e[r]();
	          })), c;
	        }, g.cache = function (e) {
	          return null != e ? (b = e, g) : b;
	        }, g.gamma = function (e) {
	          return null != e ? (s = e, g) : s;
	        }, g;
	      }, null == x.scales && (x.scales = {}), x.scales.cool = function () {
	        return x.scale([x.hsl(180, 1, .9), x.hsl(250, .7, .4)]);
	      }, x.scales.hot = function () {
	        return x.scale(["#000", "#f00", "#ff0", "#fff"], [0, .25, .75, 1]).mode("rgb");
	      }, x.analyze = function (e, t, n) {
	        var r, i, o, a, s, l;if (s = { min: Number.MAX_VALUE, max: -1 * Number.MAX_VALUE, sum: 0, values: [], count: 0 }, null == n && (n = function n() {
	          return !0;
	        }), r = function r(e) {
	          null == e || isNaN(e) || (s.values.push(e), s.sum += e, e < s.min && (s.min = e), e > s.max && (s.max = e), s.count += 1);
	        }, l = function l(e, i) {
	          if (n(e, i)) return null != t && "function" === Ae(t) ? r(t(e)) : null != t && "string" === Ae(t) || "number" === Ae(t) ? r(e[t]) : r(e);
	        }, "array" === Ae(e)) for (a = 0, o = e.length; a < o; a++) {
	          l(e[a]);
	        } else for (i in e) {
	          l(e[i], i);
	        }return s.domain = [s.min, s.max], s.limits = function (e, t) {
	          return x.limits(s, e, t);
	        }, s;
	      }, x.limits = function (e, t, n) {
	        var r, i, o, a, s, l, u, c, d, f, h, p, b, g, m, v, y, w, k, E, A, C, O, S, N, L, T, M, j, B, P, H, I, F, D, z, U, V, G, X, Y, K, q, J, Q, Z, ee, te, ne, ie, oe, ae, se, le, ue;if (null == t && (t = "equal"), null == n && (n = 7), "array" === Ae(e) && (e = x.analyze(e)), N = e.min, $ = e.max, e.sum, le = e.values.sort(function (e, t) {
	          return e - t;
	        }), 1 === n) return [N, $];if (O = [], "c" === t.substr(0, 1) && (O.push(N), O.push($)), "e" === t.substr(0, 1)) {
	          for (O.push(N), E = P = 1, D = n - 1; 1 <= D ? P <= D : P >= D; E = 1 <= D ? ++P : --P) {
	            O.push(N + E / n * ($ - N));
	          }O.push($);
	        } else if ("l" === t.substr(0, 1)) {
	          if (N <= 0) throw "Logarithmic scales are only possible for values > 0";for (L = Math.LOG10E * W(N), S = Math.LOG10E * W($), O.push(N), E = ue = 1, z = n - 1; 1 <= z ? ue <= z : ue >= z; E = 1 <= z ? ++ue : --ue) {
	            O.push(re(10, L + E / n * (S - L)));
	          }O.push($);
	        } else if ("q" === t.substr(0, 1)) {
	          for (O.push(N), E = r = 1, K = n - 1; 1 <= K ? r <= K : r >= K; E = 1 <= K ? ++r : --r) {
	            H = (le.length - 1) * E / n, (I = R(H)) === H ? O.push(le[I]) : (F = H - I, O.push(le[I] * (1 - F) + le[I + 1] * F));
	          }O.push($);
	        } else if ("k" === t.substr(0, 1)) {
	          for (M = le.length, g = new Array(M), w = new Array(n), ie = !0, j = 0, v = null, (v = []).push(N), E = i = 1, q = n - 1; 1 <= q ? i <= q : i >= q; E = 1 <= q ? ++i : --i) {
	            v.push(N + E / n * ($ - N));
	          }for (v.push($); ie;) {
	            for (A = o = 0, J = n - 1; 0 <= J ? o <= J : o >= J; A = 0 <= J ? ++o : --o) {
	              w[A] = 0;
	            }for (E = a = 0, Q = M - 1; 0 <= Q ? a <= Q : a >= Q; E = 0 <= Q ? ++a : --a) {
	              for (se = le[E], T = Number.MAX_VALUE, A = s = 0, Z = n - 1; 0 <= Z ? s <= Z : s >= Z; A = 0 <= Z ? ++s : --s) {
	                (k = _(v[A] - se)) < T && (T = k, m = A);
	              }w[m]++, g[E] = m;
	            }for (B = new Array(n), A = l = 0, ee = n - 1; 0 <= ee ? l <= ee : l >= ee; A = 0 <= ee ? ++l : --l) {
	              B[A] = null;
	            }for (E = u = 0, te = M - 1; 0 <= te ? u <= te : u >= te; E = 0 <= te ? ++u : --u) {
	              null === B[y = g[E]] ? B[y] = le[E] : B[y] += le[E];
	            }for (A = c = 0, ne = n - 1; 0 <= ne ? c <= ne : c >= ne; A = 0 <= ne ? ++c : --c) {
	              B[A] *= 1 / w[A];
	            }for (ie = !1, A = d = 0, U = n - 1; 0 <= U ? d <= U : d >= U; A = 0 <= U ? ++d : --d) {
	              if (B[A] !== v[E]) {
	                ie = !0;break;
	              }
	            }v = B, ++j > 200 && (ie = !1);
	          }for (C = {}, A = f = 0, V = n - 1; 0 <= V ? f <= V : f >= V; A = 0 <= V ? ++f : --f) {
	            C[A] = [];
	          }for (E = h = 0, G = M - 1; 0 <= G ? h <= G : h >= G; E = 0 <= G ? ++h : --h) {
	            C[y = g[E]].push(le[E]);
	          }for (oe = [], A = p = 0, X = n - 1; 0 <= X ? p <= X : p >= X; A = 0 <= X ? ++p : --p) {
	            oe.push(C[A][0]), oe.push(C[A][C[A].length - 1]);
	          }for (oe = oe.sort(function (e, t) {
	            return e - t;
	          }), O.push(oe[0]), E = b = 1, Y = oe.length - 1; b <= Y; E = b += 2) {
	            ae = oe[E], isNaN(ae) || -1 !== O.indexOf(ae) || O.push(ae);
	          }
	        }return O;
	      }, M = function M(e, t, n) {
	        var r, i, o, a;return e = (r = Ce(arguments))[0], t = r[1], n = r[2], isNaN(e) && (e = 0), (e /= 360) < 1 / 3 ? o = 1 - ((i = (1 - t) / 3) + (a = (1 + t * A(u * e) / A(s - u * e)) / 3)) : e < 2 / 3 ? i = 1 - ((a = (1 - t) / 3) + (o = (1 + t * A(u * (e -= 1 / 3)) / A(s - u * e)) / 3)) : a = 1 - ((o = (1 - t) / 3) + (i = (1 + t * A(u * (e -= 2 / 3)) / A(s - u * e)) / 3)), [255 * (a = J(n * a * 3)), 255 * (o = J(n * o * 3)), 255 * (i = J(n * i * 3)), r.length > 3 ? r[3] : 1];
	      }, le = function le() {
	        var e, t, n, r, i, o, a;return i = (o = Ce(arguments))[0], t = o[1], e = o[2], u = 2 * Math.PI, i /= 255, t /= 255, e /= 255, 0 === (a = 1 - Math.min(i, t, e) / (r = (i + t + e) / 3)) ? n = 0 : (n = (i - t + (i - e)) / 2, n /= Math.sqrt((i - t) * (i - t) + (i - e) * (t - e)), n = Math.acos(n), e > t && (n = u - n), n /= u), [360 * n, a, r];
	      }, x.hsi = function () {
	        return function (e, t, n) {
	          n.prototype = e.prototype;var r = new n(),
	              i = e.apply(r, t);return Object(i) === i ? i : r;
	        }(r, Re.call(arguments).concat(["hsi"]), function () {});
	      }, h.hsi = M, r.prototype.hsi = function () {
	        return le(this._rgb);
	      }, I = function I(e, t, n, r) {
	        var i, o, a, s, l, u, c, d, f, h;return "hsl" === r ? (f = e.hsl(), h = t.hsl()) : "hsv" === r ? (f = e.hsv(), h = t.hsv()) : "hcg" === r ? (f = e.hcg(), h = t.hcg()) : "hsi" === r ? (f = e.hsi(), h = t.hsi()) : "lch" !== r && "hcl" !== r || (r = "hcl", f = e.hcl(), h = t.hcl()), "h" === r.substr(0, 1) && (o = f[0], c = f[1], s = f[2], a = h[0], d = h[1], l = h[2]), isNaN(o) || isNaN(a) ? isNaN(o) ? isNaN(a) ? i = Number.NaN : (i = a, 1 !== s && 0 !== s || "hsv" === r || (u = d)) : (i = o, 1 !== l && 0 !== l || "hsv" === r || (u = c)) : i = o + n * (a > o && a - o > 180 ? a - (o + 360) : a < o && o - a > 180 ? a + 360 - o : a - o), null == u && (u = c + n * (d - c)), x[r](i, u, s + n * (l - s));
	      }, z = function z(e, t, n, r) {
	        var i, o;return i = e.num(), o = t.num(), x.num(i + (o - i) * n, "num");
	      }, (p = p.concat(function () {
	        var e, t, n, r;for (r = [], t = 0, e = (n = ["hsv", "hsl", "hsi", "hcl", "lch", "hcg"]).length; t < e; t++) {
	          Z = n[t], r.push([Z, I]);
	        }return r;
	      }())).push(["num", z]), F = function F(e, t, n, i) {
	        var o, a;return o = e.lab(), a = t.lab(), new r(o[0] + n * (a[0] - o[0]), o[1] + n * (a[1] - o[1]), o[2] + n * (a[2] - o[2]), i);
	      }, p.push(["lab", F]);
	    }).call(this);
	  }).call(this, n(1)(e));
	}, function (e, t) {
	  e.exports = function (e) {
	    var t = "undefined" != typeof window && window.location;if (!t) throw new Error("fixUrls requires window.location");if (!e || "string" != typeof e) return e;var n = t.protocol + "//" + t.host,
	        r = n + t.pathname.replace(/\/[^\/]*$/, "/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
	      var i,
	          o = t.trim().replace(/^"(.*)"$/, function (e, t) {
	        return t;
	      }).replace(/^'(.*)'$/, function (e, t) {
	        return t;
	      });return (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o) ? e : (i = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? n + o : r + o.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")")
	      );
	    });
	  };
	}, function (e, t, n) {
	  var r,
	      i,
	      o = {},
	      a = (r = function r() {
	    return window && document && document.all && !window.atob;
	  }, function () {
	    return void 0 === i && (i = r.apply(this, arguments)), i;
	  }),
	      s = function (e) {
	    var t = {};return function (e) {
	      if ("function" == typeof e) return e();if (void 0 === t[e]) {
	        var n = function (e) {
	          return document.querySelector(e);
	        }.call(this, e);if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
	          n = n.contentDocument.head;
	        } catch (e) {
	          n = null;
	        }t[e] = n;
	      }return t[e];
	    };
	  }(),
	      l = null,
	      u = 0,
	      c = [],
	      d = n(3);function f(e, t) {
	    for (var n = 0; n < e.length; n++) {
	      var r = e[n],
	          i = o[r.id];if (i) {
	        i.refs++;for (var a = 0; a < i.parts.length; a++) {
	          i.parts[a](r.parts[a]);
	        }for (; a < r.parts.length; a++) {
	          i.parts.push(m(r.parts[a], t));
	        }
	      } else {
	        var s = [];for (a = 0; a < r.parts.length; a++) {
	          s.push(m(r.parts[a], t));
	        }o[r.id] = { id: r.id, refs: 1, parts: s };
	      }
	    }
	  }function h(e, t) {
	    for (var n = [], r = {}, i = 0; i < e.length; i++) {
	      var o = e[i],
	          a = t.base ? o[0] + t.base : o[0],
	          s = { css: o[1], media: o[2], sourceMap: o[3] };r[a] ? r[a].parts.push(s) : n.push(r[a] = { id: a, parts: [s] });
	    }return n;
	  }function p(e, t) {
	    var n = s(e.insertInto);if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r = c[c.length - 1];if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), c.push(t);else if ("bottom" === e.insertAt) n.appendChild(t);else {
	      if ("object" != _typeof(e.insertAt) || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i = s(e.insertInto + " " + e.insertAt.before);n.insertBefore(t, i);
	    }
	  }function _(e) {
	    if (null === e.parentNode) return !1;e.parentNode.removeChild(e);var t = c.indexOf(e);t >= 0 && c.splice(t, 1);
	  }function b(e) {
	    var t = document.createElement("style");return void 0 === e.attrs.type && (e.attrs.type = "text/css"), g(t, e.attrs), p(e, t), t;
	  }function g(e, t) {
	    Object.keys(t).forEach(function (n) {
	      e.setAttribute(n, t[n]);
	    });
	  }function m(e, t) {
	    var n, r, i, o;if (t.transform && e.css) {
	      if (!(o = t.transform(e.css))) return function () {};e.css = o;
	    }if (t.singleton) {
	      var a = u++;n = l || (l = b(t)), r = w.bind(null, n, a, !1), i = w.bind(null, n, a, !0);
	    } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (e) {
	      var t = document.createElement("link");return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", g(t, e.attrs), p(e, t), t;
	    }(t), r = function (e, t, n) {
	      var r = n.css,
	          i = n.sourceMap,
	          o = void 0 === t.convertToAbsoluteUrls && i;(t.convertToAbsoluteUrls || o) && (r = d(r));i && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");var a = new Blob([r], { type: "text/css" }),
	          s = e.href;e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
	    }.bind(null, n, t), i = function i() {
	      _(n), n.href && URL.revokeObjectURL(n.href);
	    }) : (n = b(t), r = function (e, t) {
	      var n = t.css,
	          r = t.media;r && e.setAttribute("media", r);if (e.styleSheet) e.styleSheet.cssText = n;else {
	        for (; e.firstChild;) {
	          e.removeChild(e.firstChild);
	        }e.appendChild(document.createTextNode(n));
	      }
	    }.bind(null, n), i = function i() {
	      _(n);
	    });return r(e), function (t) {
	      if (t) {
	        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;r(e = t);
	      } else i();
	    };
	  }e.exports = function (e, t) {
	    if ("undefined" != "boolean" && (true) && "object" != (typeof document === "undefined" ? "undefined" : _typeof(document))) throw new Error("The style-loader cannot be used in a non-browser environment");(t = t || {}).attrs = "object" == _typeof(t.attrs) ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = a()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");var n = h(e, t);return f(n, t), function (e) {
	      for (var r = [], i = 0; i < n.length; i++) {
	        var a = n[i];(s = o[a.id]).refs--, r.push(s);
	      }e && f(h(e, t), t);for (i = 0; i < r.length; i++) {
	        var s;if (0 === (s = r[i]).refs) {
	          for (var l = 0; l < s.parts.length; l++) {
	            s.parts[l]();
	          }delete o[s.id];
	        }
	      }
	    };
	  };var v,
	      y = (v = [], function (e, t) {
	    return v[e] = t, v.filter(Boolean).join("\n");
	  });function w(e, t, n, r) {
	    var i = n ? "" : r.css;if (e.styleSheet) e.styleSheet.cssText = y(t, i);else {
	      var o = document.createTextNode(i),
	          a = e.childNodes;a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o);
	    }
	  }
	}, function (e, t) {
	  e.exports = function (e) {
	    var t = [];return t.toString = function () {
	      return this.map(function (t) {
	        var n = function (e, t) {
	          var n = e[1] || "",
	              r = e[3];if (!r) return n;if (t && "function" == typeof btoa) {
	            var i = (a = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
	                o = r.sources.map(function (e) {
	              return "/*# sourceURL=" + r.sourceRoot + e + " */";
	            });return [n].concat(o).concat([i]).join("\n");
	          }var a;return [n].join("\n");
	        }(t, e);return t[2] ? "@media " + t[2] + "{" + n + "}" : n;
	      }).join("");
	    }, t.i = function (e, n) {
	      "string" == typeof e && (e = [[null, e, ""]]);for (var r = {}, i = 0; i < this.length; i++) {
	        var o = this[i][0];"number" == typeof o && (r[o] = !0);
	      }for (i = 0; i < e.length; i++) {
	        var a = e[i];"number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a));
	      }
	    }, t;
	  };
	}, function (e, t, n) {
	  (e.exports = n(5)(!1)).push([e.i, "/* override for just this component, it makes dat.gui work properly */\n.demon ul li {\n    margin-bottom: 0;\n}    \n", ""]);
	}, function (e, t, n) {
	  var r = n(6);"string" == typeof r && (r = [[e.i, r, ""]]);var i = { hmr: !0, transform: void 0, insertInto: void 0 };n(4)(r, i);r.locals && (e.exports = r.locals);
	}, function (e, t) {
	  e.exports = __webpack_require__(1);
	}, function (e, t, n) {
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
	      i = n(8),
	      o = s(i);n(7);var a = s(n(2));function s(e) {
	    return e && e.__esModule ? e : { default: e };
	  }var l = function (e) {
	    function t(e) {
	      !function (e, t) {
	        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	      }(this, t);var r = function (e, t) {
	        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
	      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));return r.go_update = r.go_update.bind(r), r.set_color = r.set_color.bind(r), r.initialize_colormap = r.initialize_colormap.bind(r), r.set_cyclic_brightness = r.set_cyclic_brightness.bind(r), r.myRef = o.default.createRef(), "undefined" != typeof window && (r.dat = n(0), r.width = 640, r.height = 480, r.scale_left = a.default.scale(["black", "red", "white"]).correctLightness(), r.scale_right = a.default.scale(["black", "blue", "white"]).correctLightness(), r.params = { num_states: 16, neighborhood: "von Neumann", reset: function reset() {
	          return r.initialize_state();
	        }, colormap: "cyclic brightness", frameDelay: 20, run: !1, justInitialized: !1, stopped: !1 }, r.gui = new r.dat.default.GUI(), r.gui.add(r.params, "num_states", 5, 30).onFinishChange(function (e) {
	        r.params.num_states = Math.round(e), r.initialize_state();
	      }), r.gui.add(r.params, "neighborhood", ["von Neumann", "Moore"]), r.gui.add(r.params, "colormap", ["grayscale", "cyclic grayscale", "cyclic rainbow", "cyclic brightness"]).onFinishChange(function (e) {
	        r.initialize_colormap();
	      }), r.gui.add(r.params, "frameDelay", 0, 50), r.gui.add(r.params, "run"), r.gui.add(r.params, "reset")), r;
	    }return function (e, t) {
	      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	    }(t, i.Component), r(t, [{ key: "componentDidMount", value: function value() {
	        this.create_dom_elements_and_go();
	      } }, { key: "componentWillUnmount", value: function value() {
	        this.params.stopped = !0;
	      } }, { key: "set_grayscale", value: function value(e) {
	        return { red: 255 * e, green: 255 * e, blue: 255 * e };
	      } }, { key: "set_cyclic_grayscale", value: function value(e) {
	        (e *= 2) >= 1 && (e = 2 - e);var t = 255 * e;return { red: t, green: t, blue: t };
	      } }, { key: "set_cyclic_brightness", value: function value(e) {
	        var t;return (e *= 2) < 1 ? t = this.scale_left(e) : (e = 2 - e, t = this.scale_right(e)), { red: t.get("rgb.r"), green: t.get("rgb.g"), blue: t.get("rgb.b") };
	      } }, { key: "set_cyclic_rainbow", value: function value(e) {
	        var t = 0,
	            n = 0,
	            r = 0;function i(e) {
	          var t = Math.sin(e * Math.PI / 2);return Math.round(255 * t);
	        }if (e < 1 / 6) t = 255, r = 0, n = i(6 * e);else if (e < 2 / 6) {
	          n = 255, r = 0, t = i(1 - 6 * (e - 1 / 6));
	        } else if (e < .5) {
	          n = 255, t = 0, r = i(6 * (e - 2 / 6));
	        } else if (e < 4 / 6) {
	          r = 255, t = 0, n = i(1 - 6 * (e - .5));
	        } else if (e < 5 / 6) {
	          r = 255, n = 0, t = i(6 * (e - 4 / 6));
	        } else {
	          t = 255, n = 0, r = i(1 - 6 * (e - 5 / 6));
	        }return { red: t, green: n, blue: r };
	      } }, { key: "set_color", value: function value(e, t, n, r) {
	        e[t + 0] = this.color_red[n], e[t + 1] = this.color_green[n], e[t + 2] = this.color_blue[n], e[t + 3] = 255;
	      } }, { key: "initialize_colormap", value: function value() {
	        this.color_red = new Uint8Array(this.params.num_states), this.color_green = new Uint8Array(this.params.num_states), this.color_blue = new Uint8Array(this.params.num_states);var e,
	            t,
	            n = this.set_grayscale;for ("cyclic grayscale" == this.params.colormap ? n = this.set_cyclic_grayscale : "cyclic rainbow" == this.params.colormap ? n = this.set_cyclic_rainbow : "cyclic brightness" == this.params.colormap && (n = this.set_cyclic_brightness), e = 0; e < this.params.num_states; ++e) {
	          t = n(e / this.params.num_states), this.color_red[e] = t.red, this.color_green[e] = t.green, this.color_blue[e] = t.blue;
	        }this.params.justInitialized = !0;
	      } }, { key: "initialize_state", value: function value() {
	        for (var e = 0; e < this.view.length; ++e) {
	          this.view[e] = Math.round(Math.random() * (this.params.num_states - 1)), this.view2[e] = this.view[e];
	        }this.params.justInitialized = !0, this.initialize_colormap();
	      } }, { key: "swap_buffers", value: function value() {
	        var e = this.buffer,
	            t = this.view;this.buffer = this.buffer2, this.view = this.view2, this.buffer2 = e, this.view2 = t;
	      } }, { key: "update_view", value: function value() {
	        var e = this.params,
	            t = this.width,
	            n = this.height,
	            r = this.view,
	            i = this.view2;function o(e) {
	          return e < 0 ? t - 1 : e > t - 1 ? 0 : e;
	        }function a(e) {
	          return e < 0 ? n - 1 : e > n - 1 ? 0 : e;
	        }function s(t, n) {
	          return 0 == t && n == e.num_states - 1 || t == n + 1;
	        }function l(n, i) {
	          var l = r[i * t + n],
	              u = r[a(i) * t + o(n + 1)];if (s(u, l)) return u;var c = r[a(i) * t + o(n - 1)];if (s(c, l)) return c;var d = r[a(i + 1) * t + o(n)];if (s(d, l)) return d;var f = r[a(i - 1) * t + o(n)];if (s(f, l)) return f;if ("Moore" == e.neighborhood) {
	            var h = r[a(i + 1) * t + o(n + 1)];if (s(h, l)) return h;var p = r[a(i + 1) * t + o(n - 1)];if (s(p, l)) return p;var _ = r[a(i - 1) * t + o(n + 1)];if (s(_, l)) return _;var b = r[a(i - 1) * t + o(n - 1)];if (s(b, l)) return b;
	          }return l;
	        }for (var u = 0; u < n; ++u) {
	          for (var c = 0; c < t; ++c) {
	            i[u * t + c] = l(c, u);
	          }
	        }this.swap_buffers();
	      } }, { key: "go_update", value: function value() {
	        if (this.params.run || this.params.justInitialized) {
	          for (var e = 0; e < this.height; ++e) {
	            for (var t = 0; t < this.width; ++t) {
	              var n = 4 * (e * this.width + t);this.set_color(this.data, n, this.view[t + e * this.width], this.params.num_states);
	            }
	          }this.context.putImageData(this.image_data, 0, 0), this.update_view(), this.params.justInitialized = !1;
	        }this.params.stopped || (this.params.run ? setTimeout(this.go_update, this.params.frameDelay) : setTimeout(this.go_update, 50));
	      } }, { key: "create_dom_elements_and_go", value: function value() {
	        if (this.demon_div = this.myRef.current, this.canvas = document.createElement("canvas"), this.buffer = new ArrayBuffer(this.width * this.height), this.view = new Uint8Array(this.buffer), this.buffer2 = new ArrayBuffer(this.width * this.height), this.view2 = new Uint8Array(this.buffer2), this.canvas.getContext) {
	          this.canvas.width = this.width, this.canvas.height = this.height, this.canvas.style["margin-left"] = "auto", this.canvas.style["margin-right"] = "auto", this.canvas.style.display = "block";var e = document.createElement("div"),
	              t = document.createElement("div");this.demon_div.appendChild(t), this.demon_div.appendChild(e), e.appendChild(this.canvas), t.appendChild(this.gui.domElement), t.style.float = "right", t.style.height = "0", t.style["z-index"] = 1, t.style.position = "relative", t.style["margin-bottom"] = "0", this.gui.domElement.style["margin-bottom"] = "0", this.demon_div.style["line-height"] = "1rem", this.context = this.canvas.getContext("2d"), this.image_data = this.context.createImageData(this.width, this.height), this.data = this.image_data.data, this.initialize_state(), this.go_update();
	        }
	      } }, { key: "render", value: function value() {
	        return o.default.createElement("div", { className: "demon", ref: this.myRef });
	      } }]), t;
	  }();t.default = l;
	}]);

/***/ })

};;
//# sourceMappingURL=1.render-page.js.map