exports.ids = [2];
exports.modules = {

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	module.exports = function (t) {
	  var e = {};function n(r) {
	    if (e[r]) return e[r].exports;var i = e[r] = { i: r, l: !1, exports: {} };return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
	  }return n.m = t, n.c = e, n.d = function (t, e, r) {
	    n.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: r });
	  }, n.r = function (t) {
	    Object.defineProperty(t, "__esModule", { value: !0 });
	  }, n.n = function (t) {
	    var e = t && t.__esModule ? function () {
	      return t.default;
	    } : function () {
	      return t;
	    };return n.d(e, "a", e), e;
	  }, n.o = function (t, e) {
	    return Object.prototype.hasOwnProperty.call(t, e);
	  }, n.p = "", n(n.s = 15);
	}([function (t, e, n) {
	  "use strict";
	  n.r(e);var r = function r(t, e, n) {
	    t.prototype = e.prototype = n, n.constructor = t;
	  };function i(t, e) {
	    var n = Object.create(t.prototype);for (var r in e) {
	      n[r] = e[r];
	    }return n;
	  }function a() {}var f = "\\s*([+-]?\\d+)\\s*",
	      c = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
	      u = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
	      o = /^#([0-9a-f]{3})$/,
	      s = /^#([0-9a-f]{6})$/,
	      l = new RegExp("^rgb\\(" + [f, f, f] + "\\)$"),
	      h = new RegExp("^rgb\\(" + [u, u, u] + "\\)$"),
	      d = new RegExp("^rgba\\(" + [f, f, f, c] + "\\)$"),
	      b = new RegExp("^rgba\\(" + [u, u, u, c] + "\\)$"),
	      p = new RegExp("^hsl\\(" + [c, u, u] + "\\)$"),
	      _ = new RegExp("^hsla\\(" + [c, u, u, c] + "\\)$"),
	      g = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };function y(t) {
	    var e;return t = (t + "").trim().toLowerCase(), (e = o.exec(t)) ? new M((e = parseInt(e[1], 16)) >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, (15 & e) << 4 | 15 & e, 1) : (e = s.exec(t)) ? m(parseInt(e[1], 16)) : (e = l.exec(t)) ? new M(e[1], e[2], e[3], 1) : (e = h.exec(t)) ? new M(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, 1) : (e = d.exec(t)) ? v(e[1], e[2], e[3], e[4]) : (e = b.exec(t)) ? v(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = p.exec(t)) ? k(e[1], e[2] / 100, e[3] / 100, 1) : (e = _.exec(t)) ? k(e[1], e[2] / 100, e[3] / 100, e[4]) : g.hasOwnProperty(t) ? m(g[t]) : "transparent" === t ? new M(NaN, NaN, NaN, 0) : null;
	  }function m(t) {
	    return new M(t >> 16 & 255, t >> 8 & 255, 255 & t, 1);
	  }function v(t, e, n, r) {
	    return r <= 0 && (t = e = n = NaN), new M(t, e, n, r);
	  }function x(t) {
	    return t instanceof a || (t = y(t)), t ? new M((t = t.rgb()).r, t.g, t.b, t.opacity) : new M();
	  }function w(t, e, n, r) {
	    return 1 === arguments.length ? x(t) : new M(t, e, n, null == r ? 1 : r);
	  }function M(t, e, n, r) {
	    this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
	  }function k(t, e, n, r) {
	    return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new N(t, e, n, r);
	  }function T(t, e, n, r) {
	    return 1 === arguments.length ? function (t) {
	      if (t instanceof N) return new N(t.h, t.s, t.l, t.opacity);if (t instanceof a || (t = y(t)), !t) return new N();if (t instanceof N) return t;var e = (t = t.rgb()).r / 255,
	          n = t.g / 255,
	          r = t.b / 255,
	          i = Math.min(e, n, r),
	          f = Math.max(e, n, r),
	          c = NaN,
	          u = f - i,
	          o = (f + i) / 2;return u ? (c = e === f ? (n - r) / u + 6 * (n < r) : n === f ? (r - e) / u + 2 : (e - n) / u + 4, u /= o < .5 ? f + i : 2 - f - i, c *= 60) : u = o > 0 && o < 1 ? 0 : c, new N(c, u, o, t.opacity);
	    }(t) : new N(t, e, n, null == r ? 1 : r);
	  }function N(t, e, n, r) {
	    this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
	  }function A(t, e, n) {
	    return 255 * (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e);
	  }r(a, y, { displayable: function displayable() {
	      return this.rgb().displayable();
	    }, toString: function toString() {
	      return this.rgb() + "";
	    } }), r(M, w, i(a, { brighter: function brighter(t) {
	      return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new M(this.r * t, this.g * t, this.b * t, this.opacity);
	    }, darker: function darker(t) {
	      return t = null == t ? .7 : Math.pow(.7, t), new M(this.r * t, this.g * t, this.b * t, this.opacity);
	    }, rgb: function rgb() {
	      return this;
	    }, displayable: function displayable() {
	      return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1;
	    }, toString: function toString() {
	      var t = this.opacity;return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")");
	    } })), r(N, T, i(a, { brighter: function brighter(t) {
	      return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new N(this.h, this.s, this.l * t, this.opacity);
	    }, darker: function darker(t) {
	      return t = null == t ? .7 : Math.pow(.7, t), new N(this.h, this.s, this.l * t, this.opacity);
	    }, rgb: function rgb() {
	      var t = this.h % 360 + 360 * (this.h < 0),
	          e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
	          n = this.l,
	          r = n + (n < .5 ? n : 1 - n) * e,
	          i = 2 * n - r;return new M(A(t >= 240 ? t - 240 : t + 120, i, r), A(t, i, r), A(t < 120 ? t + 240 : t - 120, i, r), this.opacity);
	    }, displayable: function displayable() {
	      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
	    } }));var E = Math.PI / 180,
	      C = 180 / Math.PI,
	      O = .96422,
	      S = 1,
	      P = .82521,
	      j = 4 / 29,
	      D = 6 / 29,
	      R = 3 * D * D,
	      U = D * D * D;function Y(t) {
	    if (t instanceof L) return new L(t.l, t.a, t.b, t.opacity);if (t instanceof $) {
	      if (isNaN(t.h)) return new L(t.l, 0, 0, t.opacity);var e = t.h * E;return new L(t.l, Math.cos(e) * t.c, Math.sin(e) * t.c, t.opacity);
	    }t instanceof M || (t = x(t));var n,
	        r,
	        i = I(t.r),
	        a = I(t.g),
	        f = I(t.b),
	        c = G((.2225045 * i + .7168786 * a + .0606169 * f) / S);return i === a && a === f ? n = r = c : (n = G((.4360747 * i + .3850649 * a + .1430804 * f) / O), r = G((.0139322 * i + .0971045 * a + .7141733 * f) / P)), new L(116 * c - 16, 500 * (n - c), 200 * (c - r), t.opacity);
	  }function B(t, e) {
	    return new L(t, 0, 0, null == e ? 1 : e);
	  }function q(t, e, n, r) {
	    return 1 === arguments.length ? Y(t) : new L(t, e, n, null == r ? 1 : r);
	  }function L(t, e, n, r) {
	    this.l = +t, this.a = +e, this.b = +n, this.opacity = +r;
	  }function G(t) {
	    return t > U ? Math.pow(t, 1 / 3) : t / R + j;
	  }function z(t) {
	    return t > D ? t * t * t : R * (t - j);
	  }function F(t) {
	    return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055);
	  }function I(t) {
	    return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
	  }function H(t) {
	    if (t instanceof $) return new $(t.h, t.c, t.l, t.opacity);if (t instanceof L || (t = Y(t)), 0 === t.a && 0 === t.b) return new $(NaN, 0, t.l, t.opacity);var e = Math.atan2(t.b, t.a) * C;return new $(e < 0 ? e + 360 : e, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
	  }function X(t, e, n, r) {
	    return 1 === arguments.length ? H(t) : new $(n, e, t, null == r ? 1 : r);
	  }function V(t, e, n, r) {
	    return 1 === arguments.length ? H(t) : new $(t, e, n, null == r ? 1 : r);
	  }function $(t, e, n, r) {
	    this.h = +t, this.c = +e, this.l = +n, this.opacity = +r;
	  }r(L, q, i(a, { brighter: function brighter(t) {
	      return new L(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
	    }, darker: function darker(t) {
	      return new L(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
	    }, rgb: function rgb() {
	      var t = (this.l + 16) / 116,
	          e = isNaN(this.a) ? t : t + this.a / 500,
	          n = isNaN(this.b) ? t : t - this.b / 200;return new M(F(3.1338561 * (e = O * z(e)) - 1.6168667 * (t = S * z(t)) - .4906146 * (n = P * z(n))), F(-.9787684 * e + 1.9161415 * t + .033454 * n), F(.0719453 * e - .2289914 * t + 1.4052427 * n), this.opacity);
	    } })), r($, V, i(a, { brighter: function brighter(t) {
	      return new $(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity);
	    }, darker: function darker(t) {
	      return new $(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity);
	    }, rgb: function rgb() {
	      return Y(this).rgb();
	    } }));var Z = -.14861,
	      W = 1.78277,
	      Q = -.29227,
	      J = -.90649,
	      K = 1.97294,
	      tt = K * J,
	      et = K * W,
	      nt = W * Q - J * Z;function rt(t, e, n, r) {
	    return 1 === arguments.length ? function (t) {
	      if (t instanceof it) return new it(t.h, t.s, t.l, t.opacity);t instanceof M || (t = x(t));var e = t.r / 255,
	          n = t.g / 255,
	          r = t.b / 255,
	          i = (nt * r + tt * e - et * n) / (nt + tt - et),
	          a = r - i,
	          f = (K * (n - i) - Q * a) / J,
	          c = Math.sqrt(f * f + a * a) / (K * i * (1 - i)),
	          u = c ? Math.atan2(f, a) * C - 120 : NaN;return new it(u < 0 ? u + 360 : u, c, i, t.opacity);
	    }(t) : new it(t, e, n, null == r ? 1 : r);
	  }function it(t, e, n, r) {
	    this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
	  }r(it, rt, i(a, { brighter: function brighter(t) {
	      return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new it(this.h, this.s, this.l * t, this.opacity);
	    }, darker: function darker(t) {
	      return t = null == t ? .7 : Math.pow(.7, t), new it(this.h, this.s, this.l * t, this.opacity);
	    }, rgb: function rgb() {
	      var t = isNaN(this.h) ? 0 : (this.h + 120) * E,
	          e = +this.l,
	          n = isNaN(this.s) ? 0 : this.s * e * (1 - e),
	          r = Math.cos(t),
	          i = Math.sin(t);return new M(255 * (e + n * (Z * r + W * i)), 255 * (e + n * (Q * r + J * i)), 255 * (e + n * (K * r)), this.opacity);
	    } })), n.d(e, "color", function () {
	    return y;
	  }), n.d(e, "rgb", function () {
	    return w;
	  }), n.d(e, "hsl", function () {
	    return T;
	  }), n.d(e, "lab", function () {
	    return q;
	  }), n.d(e, "hcl", function () {
	    return V;
	  }), n.d(e, "lch", function () {
	    return X;
	  }), n.d(e, "gray", function () {
	    return B;
	  }), n.d(e, "cubehelix", function () {
	    return rt;
	  });
	}, function (t, e, n) {
	  "use strict";
	  var r = n(0);function i(t, e, n, r, i) {
	    var a = t * t,
	        f = a * t;return ((1 - 3 * t + 3 * a - f) * e + (4 - 6 * a + 3 * f) * n + (1 + 3 * t + 3 * a - 3 * f) * r + f * i) / 6;
	  }var a = function a(t) {
	    var e = t.length - 1;return function (n) {
	      var r = n <= 0 ? n = 0 : n >= 1 ? (n = 1, e - 1) : Math.floor(n * e),
	          a = t[r],
	          f = t[r + 1],
	          c = r > 0 ? t[r - 1] : 2 * a - f,
	          u = r < e - 1 ? t[r + 2] : 2 * f - a;return i((n - r / e) * e, c, a, f, u);
	    };
	  },
	      f = function f(t) {
	    var e = t.length;return function (n) {
	      var r = Math.floor(((n %= 1) < 0 ? ++n : n) * e),
	          a = t[(r + e - 1) % e],
	          f = t[r % e],
	          c = t[(r + 1) % e],
	          u = t[(r + 2) % e];return i((n - r / e) * e, a, f, c, u);
	    };
	  },
	      c = function c(t) {
	    return function () {
	      return t;
	    };
	  };function u(t, e) {
	    return function (n) {
	      return t + n * e;
	    };
	  }function o(t, e) {
	    var n = e - t;return n ? u(t, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : c(isNaN(t) ? e : t);
	  }function s(t) {
	    return 1 == (t = +t) ? l : function (e, n) {
	      return n - e ? function (t, e, n) {
	        return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function (r) {
	          return Math.pow(t + r * e, n);
	        };
	      }(e, n, t) : c(isNaN(e) ? n : e);
	    };
	  }function l(t, e) {
	    var n = e - t;return n ? u(t, n) : c(isNaN(t) ? e : t);
	  }var h = function t(e) {
	    var n = s(e);function i(t, e) {
	      var i = n((t = Object(r.rgb)(t)).r, (e = Object(r.rgb)(e)).r),
	          a = n(t.g, e.g),
	          f = n(t.b, e.b),
	          c = l(t.opacity, e.opacity);return function (e) {
	        return t.r = i(e), t.g = a(e), t.b = f(e), t.opacity = c(e), t + "";
	      };
	    }return i.gamma = t, i;
	  }(1);function d(t) {
	    return function (e) {
	      var n,
	          i,
	          a = e.length,
	          f = new Array(a),
	          c = new Array(a),
	          u = new Array(a);for (n = 0; n < a; ++n) {
	        i = Object(r.rgb)(e[n]), f[n] = i.r || 0, c[n] = i.g || 0, u[n] = i.b || 0;
	      }return f = t(f), c = t(c), u = t(u), i.opacity = 1, function (t) {
	        return i.r = f(t), i.g = c(t), i.b = u(t), i + "";
	      };
	    };
	  }var b = d(a),
	      p = d(f),
	      _ = function _(t, e) {
	    var n,
	        r = e ? e.length : 0,
	        i = t ? Math.min(r, t.length) : 0,
	        a = new Array(i),
	        f = new Array(r);for (n = 0; n < i; ++n) {
	      a[n] = A(t[n], e[n]);
	    }for (; n < r; ++n) {
	      f[n] = e[n];
	    }return function (t) {
	      for (n = 0; n < i; ++n) {
	        f[n] = a[n](t);
	      }return f;
	    };
	  },
	      g = function g(t, e) {
	    var n = new Date();return e -= t = +t, function (r) {
	      return n.setTime(t + e * r), n;
	    };
	  },
	      y = function y(t, e) {
	    return e -= t = +t, function (n) {
	      return t + e * n;
	    };
	  },
	      m = function m(t, e) {
	    var n,
	        r = {},
	        i = {};for (n in null !== t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || (t = {}), null !== e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || (e = {}), e) {
	      n in t ? r[n] = A(t[n], e[n]) : i[n] = e[n];
	    }return function (t) {
	      for (n in r) {
	        i[n] = r[n](t);
	      }return i;
	    };
	  },
	      v = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
	      x = new RegExp(v.source, "g");var w,
	      M,
	      k,
	      T,
	      N = function N(t, e) {
	    var n,
	        r,
	        i,
	        a = v.lastIndex = x.lastIndex = 0,
	        f = -1,
	        c = [],
	        u = [];for (t += "", e += ""; (n = v.exec(t)) && (r = x.exec(e));) {
	      (i = r.index) > a && (i = e.slice(a, i), c[f] ? c[f] += i : c[++f] = i), (n = n[0]) === (r = r[0]) ? c[f] ? c[f] += r : c[++f] = r : (c[++f] = null, u.push({ i: f, x: y(n, r) })), a = x.lastIndex;
	    }return a < e.length && (i = e.slice(a), c[f] ? c[f] += i : c[++f] = i), c.length < 2 ? u[0] ? function (t) {
	      return function (e) {
	        return t(e) + "";
	      };
	    }(u[0].x) : function (t) {
	      return function () {
	        return t;
	      };
	    }(e) : (e = u.length, function (t) {
	      for (var n, r = 0; r < e; ++r) {
	        c[(n = u[r]).i] = n.x(t);
	      }return c.join("");
	    });
	  },
	      A = function A(t, e) {
	    var n,
	        i = typeof e === "undefined" ? "undefined" : _typeof(e);return null == e || "boolean" === i ? c(e) : ("number" === i ? y : "string" === i ? (n = Object(r.color)(e)) ? (e = n, h) : N : e instanceof r.color ? h : e instanceof Date ? g : Array.isArray(e) ? _ : "function" != typeof e.valueOf && "function" != typeof e.toString || isNaN(e) ? m : y)(t, e);
	  },
	      E = function E(t, e) {
	    return e -= t = +t, function (n) {
	      return Math.round(t + e * n);
	    };
	  },
	      C = 180 / Math.PI,
	      O = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 },
	      S = function S(t, e, n, r, i, a) {
	    var f, c, u;return (f = Math.sqrt(t * t + e * e)) && (t /= f, e /= f), (u = t * n + e * r) && (n -= t * u, r -= e * u), (c = Math.sqrt(n * n + r * r)) && (n /= c, r /= c, u /= c), t * r < e * n && (t = -t, e = -e, u = -u, f = -f), { translateX: i, translateY: a, rotate: Math.atan2(e, t) * C, skewX: Math.atan(u) * C, scaleX: f, scaleY: c };
	  };function P(t, e, n, r) {
	    function i(t) {
	      return t.length ? t.pop() + " " : "";
	    }return function (a, f) {
	      var c = [],
	          u = [];return a = t(a), f = t(f), function (t, r, i, a, f, c) {
	        if (t !== i || r !== a) {
	          var u = f.push("translate(", null, e, null, n);c.push({ i: u - 4, x: y(t, i) }, { i: u - 2, x: y(r, a) });
	        } else (i || a) && f.push("translate(" + i + e + a + n);
	      }(a.translateX, a.translateY, f.translateX, f.translateY, c, u), function (t, e, n, a) {
	        t !== e ? (t - e > 180 ? e += 360 : e - t > 180 && (t += 360), a.push({ i: n.push(i(n) + "rotate(", null, r) - 2, x: y(t, e) })) : e && n.push(i(n) + "rotate(" + e + r);
	      }(a.rotate, f.rotate, c, u), function (t, e, n, a) {
	        t !== e ? a.push({ i: n.push(i(n) + "skewX(", null, r) - 2, x: y(t, e) }) : e && n.push(i(n) + "skewX(" + e + r);
	      }(a.skewX, f.skewX, c, u), function (t, e, n, r, a, f) {
	        if (t !== n || e !== r) {
	          var c = a.push(i(a) + "scale(", null, ",", null, ")");f.push({ i: c - 4, x: y(t, n) }, { i: c - 2, x: y(e, r) });
	        } else 1 === n && 1 === r || a.push(i(a) + "scale(" + n + "," + r + ")");
	      }(a.scaleX, a.scaleY, f.scaleX, f.scaleY, c, u), a = f = null, function (t) {
	        for (var e, n = -1, r = u.length; ++n < r;) {
	          c[(e = u[n]).i] = e.x(t);
	        }return c.join("");
	      };
	    };
	  }var j = P(function (t) {
	    return "none" === t ? O : (w || (w = document.createElement("DIV"), M = document.documentElement, k = document.defaultView), w.style.transform = t, t = k.getComputedStyle(M.appendChild(w), null).getPropertyValue("transform"), M.removeChild(w), t = t.slice(7, -1).split(","), S(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]));
	  }, "px, ", "px)", "deg)"),
	      D = P(function (t) {
	    return null == t ? O : (T || (T = document.createElementNS("http://www.w3.org/2000/svg", "g")), T.setAttribute("transform", t), (t = T.transform.baseVal.consolidate()) ? (t = t.matrix, S(t.a, t.b, t.c, t.d, t.e, t.f)) : O);
	  }, ", ", ")", ")"),
	      R = Math.SQRT2;function U(t) {
	    return ((t = Math.exp(t)) + 1 / t) / 2;
	  }var Y = function Y(t, e) {
	    var n,
	        r,
	        i = t[0],
	        a = t[1],
	        f = t[2],
	        c = e[0],
	        u = e[1],
	        o = e[2],
	        s = c - i,
	        l = u - a,
	        h = s * s + l * l;if (h < 1e-12) r = Math.log(o / f) / R, n = function n(t) {
	      return [i + t * s, a + t * l, f * Math.exp(R * t * r)];
	    };else {
	      var d = Math.sqrt(h),
	          b = (o * o - f * f + 4 * h) / (2 * f * 2 * d),
	          p = (o * o - f * f - 4 * h) / (2 * o * 2 * d),
	          _ = Math.log(Math.sqrt(b * b + 1) - b),
	          g = Math.log(Math.sqrt(p * p + 1) - p);r = (g - _) / R, n = function n(t) {
	        var e,
	            n = t * r,
	            c = U(_),
	            u = f / (2 * d) * (c * (e = R * n + _, ((e = Math.exp(2 * e)) - 1) / (e + 1)) - function (t) {
	          return ((t = Math.exp(t)) - 1 / t) / 2;
	        }(_));return [i + u * s, a + u * l, f * c / U(R * n + _)];
	      };
	    }return n.duration = 1e3 * r, n;
	  };function B(t) {
	    return function (e, n) {
	      var i = t((e = Object(r.hsl)(e)).h, (n = Object(r.hsl)(n)).h),
	          a = l(e.s, n.s),
	          f = l(e.l, n.l),
	          c = l(e.opacity, n.opacity);return function (t) {
	        return e.h = i(t), e.s = a(t), e.l = f(t), e.opacity = c(t), e + "";
	      };
	    };
	  }var q = B(o),
	      L = B(l);function G(t, e) {
	    var n = l((t = Object(r.lab)(t)).l, (e = Object(r.lab)(e)).l),
	        i = l(t.a, e.a),
	        a = l(t.b, e.b),
	        f = l(t.opacity, e.opacity);return function (e) {
	      return t.l = n(e), t.a = i(e), t.b = a(e), t.opacity = f(e), t + "";
	    };
	  }function z(t) {
	    return function (e, n) {
	      var i = t((e = Object(r.hcl)(e)).h, (n = Object(r.hcl)(n)).h),
	          a = l(e.c, n.c),
	          f = l(e.l, n.l),
	          c = l(e.opacity, n.opacity);return function (t) {
	        return e.h = i(t), e.c = a(t), e.l = f(t), e.opacity = c(t), e + "";
	      };
	    };
	  }var F = z(o),
	      I = z(l);function H(t) {
	    return function e(n) {
	      function i(e, i) {
	        var a = t((e = Object(r.cubehelix)(e)).h, (i = Object(r.cubehelix)(i)).h),
	            f = l(e.s, i.s),
	            c = l(e.l, i.l),
	            u = l(e.opacity, i.opacity);return function (t) {
	          return e.h = a(t), e.s = f(t), e.l = c(Math.pow(t, n)), e.opacity = u(t), e + "";
	        };
	      }return n = +n, i.gamma = e, i;
	    }(1);
	  }var X = H(o),
	      V = H(l),
	      $ = function $(t, e) {
	    for (var n = new Array(e), r = 0; r < e; ++r) {
	      n[r] = t(r / (e - 1));
	    }return n;
	  };n.d(e, "a", function () {
	    return A;
	  }), n.d(e, !1, function () {
	    return _;
	  }), n.d(e, !1, function () {
	    return a;
	  }), n.d(e, !1, function () {
	    return f;
	  }), n.d(e, !1, function () {
	    return g;
	  }), n.d(e, "c", function () {
	    return y;
	  }), n.d(e, !1, function () {
	    return m;
	  }), n.d(e, "e", function () {
	    return E;
	  }), n.d(e, !1, function () {
	    return N;
	  }), n.d(e, !1, function () {
	    return j;
	  }), n.d(e, !1, function () {
	    return D;
	  }), n.d(e, !1, function () {
	    return Y;
	  }), n.d(e, !1, function () {
	    return h;
	  }), n.d(e, "d", function () {
	    return b;
	  }), n.d(e, !1, function () {
	    return p;
	  }), n.d(e, !1, function () {
	    return q;
	  }), n.d(e, !1, function () {
	    return L;
	  }), n.d(e, !1, function () {
	    return G;
	  }), n.d(e, !1, function () {
	    return F;
	  }), n.d(e, !1, function () {
	    return I;
	  }), n.d(e, !1, function () {
	    return X;
	  }), n.d(e, "b", function () {
	    return V;
	  }), n.d(e, !1, function () {
	    return $;
	  });
	}, function (t, e, n) {
	  "use strict";
	  Object.defineProperty(e, "__esModule", { value: !0 });var r,
	      i = function () {
	    function t(t, e) {
	      for (var n = 0; n < e.length; n++) {
	        var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
	      }
	    }return function (e, n, r) {
	      return n && t(e.prototype, n), r && t(e, r), e;
	    };
	  }(),
	      a = n(8),
	      f = (r = a) && r.__esModule ? r : { default: r },
	      c = n(0),
	      u = function (t) {
	    if (t && t.__esModule) return t;var e = {};if (null != t) for (var n in t) {
	      Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
	    }return e.default = t, e;
	  }(n(10));var o = function () {
	    function t() {
	      !function (t, e) {
	        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
	      }(this, t), this.cyclic_demon = this.cyclic_demon.bind(this), this.scale1 = f.default.scale(["black", "red", "white"]).correctLightness(), this.scale2 = f.default.scale(["black", "blue", "white"]).correctLightness();
	    }return i(t, [{ key: "get_map", value: function value(t) {
	        switch (t) {case "rainbow":case "kludge-rainbow":
	            return this.rainbow(t);case "constant-lightness":
	            return this.constant_lightness(t);case "cyclic-demon":
	            return this.cyclic_demon(t);case "cyclic-grayscale":
	            return this.cyclic_grayscale(t);case "blues":case "greens":case "greys":case "oranges":case "purples":case "reds":case "viridis":case "inferno":case "magma":case "plasma":case "warm":case "cool":case "cubehelix":case "bugn":case "bupu":case "gnbu":case "orrd":case "pubugn":case "pubu":case "purd":case "rdpu":case "ylgnbu":case "ylgn":case "ylorbr":case "ylorrd":case "d3rainbow":
	            return this.d3(t);default:
	            return this.grayscale(t);}
	      } }, { key: "grayscale", value: function value(t) {
	        return function (t) {
	          return { red: 255 * t, green: 255 * t, blue: 255 * t };
	        };
	      } }, { key: "cyclic_grayscale", value: function value(t) {
	        return function (t) {
	          return (t *= 2) > 1 && (t = 2 - t), { red: 255 * t, green: 255 * t, blue: 255 * t };
	        };
	      } }, { key: "cyclic_demon", value: function value(t) {
	        var e = this;return function (t) {
	          var n;return (t *= 2) <= 1 ? n = e.scale1(t) : (t = 2 - t, n = e.scale2(t)), { red: n.get("rgb.r"), blue: n.get("rgb.b"), green: n.get("rgb.g") };
	        };
	      } }, { key: "constant_lightness", value: function value(t) {
	        return function (t) {
	          var e = Math.round(250 * t),
	              n = f.default.hcl(e, 60, 80);return { red: n.get("rgb.r"), green: n.get("rgb.g"), blue: n.get("rgb.b") };
	        };
	      } }, { key: "rainbow", value: function value(t) {
	        var e = function e(t) {
	          return t;
	        };"kludge-rainbow" === t && (e = function e(t) {
	          return Math.sin(t * Math.PI / 2);
	        });return function (t) {
	          var n,
	              r = (n = t) < 1 / 6 ? { red: 1, green: e(6 * (n - 0)), blue: 0 } : n < 2 / 6 ? { red: e(1 - 6 * (n - 1 / 6)), green: 1, blue: 0 } : n < .5 ? { red: 0, green: 1, blue: e(6 * (n - 2 / 6)) } : n < 4 / 6 ? { red: 0, green: e(1 - 6 * (n - .5)), blue: 1 } : n < 5 / 6 ? { red: e(6 * (n - 4 / 6)), green: 0, blue: 1 } : { red: 1, green: 0, blue: e(1 - 6 * (n - 5 / 6)) };return { red: Math.round(255 * r.red), green: Math.round(255 * r.green), blue: Math.round(255 * r.blue) };
	        };
	      } }, { key: "d3", value: function value(t) {
	        var e;switch (t) {case "blues":
	            e = u.interpolateBlues;break;case "greens":
	            e = u.interpolateGreens;break;case "greys":
	            e = u.interpolateGreys;break;case "oranges":
	            e = u.interpolateOranges;break;case "purples":
	            e = u.interpolatePurples;break;case "reds":
	            e = u.interpolateReds;break;case "viridis":
	            e = u.interpolateViridis;break;case "inferno":
	            e = u.interpolateInferno;break;case "magma":
	            e = u.interpolateMagma;break;case "plasma":
	            e = u.interpolatePlasma;break;case "warm":
	            e = u.interpolateWarm;break;case "cool":
	            e = u.interpolateCool;break;case "cubehelix":
	            e = u.interpolateCubehelixDefault;break;case "bugn":
	            e = u.interpolateBuGn;break;case "bupu":
	            e = u.interpolateBuPu;break;case "gnbu":
	            e = u.interpolateGnBu;break;case "orrd":
	            e = u.interpolateOrRd;break;case "pubugn":
	            e = u.interpolatePuBuGn;break;case "pubu":
	            e = u.interpolatePuBu;break;case "purd":
	            e = u.interpolatePuRd;break;case "rdpu":
	            e = u.interpolateRdPu;break;case "ylgnbu":
	            e = u.interpolateYlGnBu;break;case "ylgn":
	            e = u.interpolateYlGn;break;case "ylorbr":
	            e = u.interpolateYlOrBr;break;case "ylorrd":
	            e = u.interpolateYlOrRd;break;case "d3rainbow":
	            e = u.interpolateRainbow;break;default:
	            e = u.interpolateInferno;}return function (t) {
	          var n = (0, c.rgb)(e(t));return { red: n.r, green: n.g, blue: n.b };
	        };
	      } }]), t;
	  }();e.default = o;
	}, function (t, e) {
	  t.exports = __webpack_require__(1);
	}, function (t, e, n) {
	  "use strict";
	  Object.defineProperty(e, "__esModule", { value: !0 });var r = function () {
	    function t(t, e) {
	      for (var n = 0; n < e.length; n++) {
	        var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
	      }
	    }return function (e, n, r) {
	      return n && t(e.prototype, n), r && t(e, r), e;
	    };
	  }(),
	      i = n(3),
	      a = u(i),
	      f = u(n(8)),
	      c = u(n(2));function u(t) {
	    return t && t.__esModule ? t : { default: t };
	  }var o = function (t) {
	    function e(t) {
	      !function (t, e) {
	        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
	      }(this, e);var n = function (t, e) {
	        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
	      }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));return n.state = { cmap: n.props.cmap }, n.myRef = a.default.createRef(), n.colormap = new c.default(), n;
	    }return function (t, e) {
	      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
	    }(e, i.Component), r(e, [{ key: "componentDidMount", value: function value() {
	        var t = this;this.is_mounted = !0, this.width = 512, this.height = 100, this.center_x = this.width / 2, this.center_y = this.height / 2;var e = document.createElement("canvas");if (e.style.margin = "auto", e.style.display = "block", e.width = this.width, e.height = this.height, this.myRef.current.append(e), this.canvas_context = e.getContext("2d"), this.imageData = this.canvas_context.getImageData(0, 0, this.width, this.height), this.data = this.imageData.data, "true" === this.props.lmap) {
	          this.lmap_height = 20, this.lmap_padding_top = 10;var n = document.createElement("canvas");n.style.margin = "auto", n.style.display = "block", n.style["padding-top"] = this.lmap_padding_top + "px", n.width = this.width, n.height = this.lmap_height, this.myRef.current.append(n), this.lmap_context = n.getContext("2d"), this.lmap_imageData = this.lmap_context.getImageData(0, 0, this.width, this.lmap_height), this.lmap_data = this.lmap_imageData.data;
	        }"undefined" != typeof window && window.setTimeout(function () {
	          return t.go();
	        }, 50);
	      } }, { key: "shouldComponentUpdate", value: function value(t, e) {
	        return e.cmap != this.state.cmap;
	      } }, { key: "componentDidUpdate", value: function value(t, e) {
	        this.go();
	      } }, { key: "componentWillUnmount", value: function value() {} }, { key: "set_cmap", value: function value(t) {
	        this.setState({ cmap: t });
	      } }, { key: "initialize_colormap", value: function value() {
	        this.cmap_size = 200, this.color_red = new Uint8Array(this.cmap_size), this.color_green = new Uint8Array(this.cmap_size), this.color_blue = new Uint8Array(this.cmap_size), this.color_luminance = new Float32Array(this.cmap_size);var t,
	            e,
	            n = this.colormap.get_map(this.state.cmap),
	            r = function r(t, e) {
	          return t;
	        };for ("linear" === this.props.luminance && (r = function r(t, e) {
	          return t.luminance(e);
	        }), t = 0; t < this.cmap_size; ++t) {
	          var i = n(e = t / this.cmap_size),
	              a = f.default.rgb(i.red, i.green, i.blue);a = r(a, e), this.color_red[t] = a.get("rgb.r"), this.color_green[t] = a.get("rgb.g"), this.color_blue[t] = a.get("rgb.b"), this.color_luminance[t] = (0, f.default)(a).luminance(), this.color_luminance[t] = a.luminance();
	        }
	      } }, { key: "set_pix", value: function value(t, e, n, r, i) {
	        var a = Math.round((n - r) / (i - r) * this.cmap_size);a >= this.cmap_size && (a = this.cmap_size - 1), t[e] = this.color_red[a], t[e + 1] = this.color_green[a], t[e + 2] = this.color_blue[a], t[e + 3] = 255;
	      } }, { key: "set_lmap_pix", value: function value(t, e, n, r, i) {
	        var a = Math.round((n - r) / (i - r) * this.cmap_size);a >= this.cmap_size && (a = this.cmap_size - 1);var f = Math.round(255 * this.color_luminance[a]);t[e] = f, t[e + 1] = f, t[e + 2] = f, t[e + 3] = 255;
	      } }, { key: "go_rake", value: function value() {
	        this.initialize_colormap();var t,
	            e,
	            n,
	            r,
	            i,
	            a = this.width,
	            f = this.height,
	            c = this.data,
	            u = this.height,
	            o = this.lmap_data;for (e = 0; e < f; ++e) {
	          for (i = .1 * (1 - e / f), t = 0; t < a; ++t) {
	            n = 4 * (e * a + t), r = t / a * .8 + Math.sin(2 * Math.PI * t / 8) * i + .1, this.set_pix(c, n, r, 0, 1);
	          }
	        }if ("true" === this.props.lmap) for (t = 0; t < a; ++t) {
	          for (e = 0; e < u; ++e) {
	            n = 4 * (e * a + t), r = t / a * .8 + .1, this.set_lmap_pix(o, n, r, 0, 1);
	          }
	        }this.canvas_context.putImageData(this.imageData, 0, 0), "true" === this.props.lmap && this.lmap_context.putImageData(this.lmap_imageData, 0, 0);
	      } }, { key: "go_expsin", value: function value() {
	        this.initialize_colormap();var t,
	            e,
	            n,
	            r,
	            i,
	            a,
	            f,
	            c,
	            u,
	            o = this.height,
	            s = this.width,
	            l = this.center_x,
	            h = this.center_y,
	            d = this.data;for (e = 0; e < o; ++e) {
	          for (u = (c = e - h) * c, t = 0; t < s; ++t) {
	            if (n = 4 * (e * s + t), f = (a = t - l) * a, (i = Math.sqrt(f + u)) > 0) {
	              var b = Math.exp(-i / 200);r = Math.sin(2 * Math.PI * i / 50) * b, r *= r;
	            } else r = 0;this.set_pix(d, n, r, 0, 1);
	          }
	        }this.canvas_context.putImageData(this.imageData, 0, 0);
	      } }, { key: "go", value: function value() {
	        return "expsin" === this.props.type ? this.go_expsin() : "rake" === this.props.type ? this.go_rake() : void 0;
	      } }, { key: "render", value: function value() {
	        var t = this.height;return "true" === this.props.lmap && (t += this.lmap_height, t += this.lmap_padding_top), t += "px", a.default.createElement("div", { ref: this.myRef, style: { height: t, margin: "auto", display: "block" } });
	      } }]), e;
	  }();e.default = o;
	}, function (t, e, n) {
	  "use strict";
	  Object.defineProperty(e, "__esModule", { value: !0 });var r = function () {
	    function t(t, e) {
	      for (var n = 0; n < e.length; n++) {
	        var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
	      }
	    }return function (e, n, r) {
	      return n && t(e.prototype, n), r && t(e, r), e;
	    };
	  }(),
	      i = n(3),
	      a = c(i),
	      f = c(n(4));function c(t) {
	    return t && t.__esModule ? t : { default: t };
	  }var u = function (t) {
	    function e(t) {
	      !function (t, e) {
	        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
	      }(this, e);var n = function (t, e) {
	        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
	      }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));return n.rake_ref = a.default.createRef(), n.expsin_ref = a.default.createRef(), n.select_changed = n.select_changed.bind(n), n;
	    }return function (t, e) {
	      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
	    }(e, i.Component), r(e, [{ key: "select_changed", value: function value(t) {
	        this.rake_ref.current.set_cmap(t.target.value), this.expsin_ref.current.set_cmap(t.target.value);
	      } }, { key: "render", value: function value() {
	        return this.expsin = a.default.createElement(f.default, { ref: this.expsin_ref, type: "expsin" }), this.rake = a.default.createElement(f.default, { ref: this.rake_ref, type: "rake", lmap: "true" }), a.default.createElement("div", null, a.default.createElement("select", { onChange: this.select_changed }, a.default.createElement("optgroup", { label: "David maps" }, a.default.createElement("option", { value: "grayscale" }, "Grayscale"), a.default.createElement("option", { value: "constant-lightness" }, "Constant Lightness"), a.default.createElement("option", { value: "cyclic-grayscale" }, "Cyclic Grayscale"), a.default.createElement("option", { value: "rainbow" }, "Cyclic Rainbow"), a.default.createElement("option", { value: "kludge-rainbow" }, "Cyclic Kludge Rainbow"), a.default.createElement("option", { value: "cyclic-demon" }, "Cyclic Demon")), a.default.createElement("optgroup", { label: "d3 maps" }, a.default.createElement("option", { value: "blues" }, "Blues"), a.default.createElement("option", { value: "greens" }, "Greens"), a.default.createElement("option", { value: "greys" }, "Greys"), a.default.createElement("option", { value: "oranges" }, "Oranges"), a.default.createElement("option", { value: "purples" }, "Purples"), a.default.createElement("option", { value: "reds" }, "Reds"), a.default.createElement("option", { value: "viridis" }, "Viridis"), a.default.createElement("option", { value: "inferno" }, "Inferno"), a.default.createElement("option", { value: "magma" }, "Magma"), a.default.createElement("option", { value: "plasma" }, "Plasma"), a.default.createElement("option", { value: "warm" }, "Warm"), a.default.createElement("option", { value: "cool" }, "Cool"), a.default.createElement("option", { value: "cubehelix" }, "CubeHelix"), a.default.createElement("option", { value: "bugn" }, "BuGn"), a.default.createElement("option", { value: "bupu" }, "BuPu"), a.default.createElement("option", { value: "gnbu" }, "GnBu"), a.default.createElement("option", { value: "orrd" }, "OrRd"), a.default.createElement("option", { value: "pubugn" }, "PuBuGn"), a.default.createElement("option", { value: "pubu" }, "PuBu"), a.default.createElement("option", { value: "purd" }, "PuRd"), a.default.createElement("option", { value: "rdpu" }, "RdPu"), a.default.createElement("option", { value: "ylgnbu" }, "YlGnBu"), a.default.createElement("option", { value: "ylgn" }, "YlGn"), a.default.createElement("option", { value: "ylorbr" }, "YlOrBr"), a.default.createElement("option", { value: "ylorrd" }, "YlOrRd"), a.default.createElement("option", { value: "d3rainbow" }, "Cyclic Rainbow"))), this.expsin, a.default.createElement("br", null), this.rake);
	      } }]), e;
	  }();e.default = u;
	}, function (t, e, n) {
	  "use strict";
	  Object.defineProperty(e, "__esModule", { value: !0 });var r = function () {
	    function t(t, e) {
	      for (var n = 0; n < e.length; n++) {
	        var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
	      }
	    }return function (e, n, r) {
	      return n && t(e.prototype, n), r && t(e, r), e;
	    };
	  }(),
	      i = n(3),
	      a = c(i),
	      f = c(n(2));function c(t) {
	    return t && t.__esModule ? t : { default: t };
	  }var u = function (t) {
	    function e(t) {
	      !function (t, e) {
	        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
	      }(this, e);var n = function (t, e) {
	        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
	      }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));return n.myRef = a.default.createRef(), n;
	    }return function (t, e) {
	      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
	    }(e, i.Component), r(e, [{ key: "componentDidMount", value: function value() {
	        var t = this;"undefined" != typeof window && window.setTimeout(function () {
	          return t.go();
	        }, 100);
	      } }, { key: "componentWillUnmount", value: function value() {} }, { key: "go", value: function value() {
	        var t,
	            e,
	            n = new f.default(),
	            r = function r(t, e, n, _r) {
	          return { x: t + Math.sin(_r) * n, y: e - Math.cos(_r) * n };
	        },
	            i = function i(t, e, n, _i, a, f) {
	          var c = _i - n,
	              u = r(t, e, n += c / 2, a),
	              o = r(t, e, n, f),
	              s = document.createElementNS("http://www.w3.org/2000/svg", "path"),
	              l = "0";Math.abs(a - f) > Math.PI / 2 && (l = 1);var h = "M " + u.x + " " + u.y + " ";return h += "A " + n + " " + n + " 0 " + l + " 1 ", h += o.x + " " + o.y, s.setAttribute("d", h), s.setAttribute("stroke", "green"), s.setAttribute("stroke-width", c), s.setAttribute("fill", "none"), s;
	        };!function (t, e) {
	          for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 30, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100, a = 0; a < 300; ++a) {
	            var f = a + 2;299 == a && (f = a + 1);var c = 2 * Math.PI / 300 * a,
	                u = 2 * Math.PI / 300 * f,
	                o = i(100, 100, n, r, c, u),
	                s = e(a / 300);o.setAttribute("stroke", s), t.appendChild(o);
	          }
	        }(this.myRef.current, (t = this.props.type, e = n.get_map(t), function (t) {
	          var n = e(t),
	              r = Math.round(n.red).toString(16),
	              i = Math.round(n.green).toString(16),
	              a = Math.round(n.blue).toString(16);return r.length < 2 && (r = "0" + r), i.length < 2 && (i = "0" + i), a.length < 2 && (a = "0" + a), "#" + r + i + a;
	        }));
	      } }, { key: "render", value: function value() {
	        return a.default.createElement("div", { style: { display: "block", margin: "auto" } }, a.default.createElement("svg", { width: "200", height: "200", style: { display: "block", margin: "auto" }, ref: this.myRef }));
	      } }]), e;
	  }();e.default = u;
	}, function (t, e, n) {
	  "use strict";
	  Object.defineProperty(e, "__esModule", { value: !0 });var r,
	      i = function () {
	    function t(t, e) {
	      for (var n = 0; n < e.length; n++) {
	        var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
	      }
	    }return function (e, n, r) {
	      return n && t(e.prototype, n), r && t(e, r), e;
	    };
	  }(),
	      a = n(3),
	      f = (r = a) && r.__esModule ? r : { default: r },
	      c = n(11),
	      u = n(13),
	      o = n(12),
	      s = n(9);var l = function (t) {
	    function e(t) {
	      !function (t, e) {
	        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
	      }(this, e);var n = function (t, e) {
	        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
	      }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));return n.myRef = f.default.createRef(), n.width = 400, n.height = 200, n.margin = { top: 20, right: 20, bottom: 30, left: 50 }, n;
	    }return function (t, e) {
	      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
	    }(e, a.Component), i(e, [{ key: "getTrans", value: function value() {
	        var t = function t(_t2) {
	          return _t2;
	        };return "sin" === this.props.trans && (t = function t(_t3) {
	          return Math.sin(_t3 * Math.PI / 2);
	        }), t;
	      } }, { key: "getRed", value: function value() {
	        var t,
	            e,
	            n = [],
	            r = this.getTrans();for (t = 0; t < 1; t += .001) {
	          e = [t], t < 1 / 6 ? e.push(1) : t < 2 / 6 ? e.push(r(1 - 6 * (t - 1 / 6))) : t < 4 / 6 ? e.push(0) : t < 5 / 6 ? e.push(r(6 * (t - 4 / 6))) : e.push(1), n.push(e);
	        }return n;
	      } }, { key: "getGreen", value: function value() {
	        var t,
	            e,
	            n = [],
	            r = this.getTrans();for (t = 0; t < 1; t += .001) {
	          e = [t], t < 1 / 6 ? e.push(r(6 * (t - 0))) : t < .5 ? e.push(1) : t < 4 / 6 ? e.push(r(1 - 6 * (t - .5))) : e.push(0), n.push(e);
	        }return n;
	      } }, { key: "getBlue", value: function value() {
	        var t,
	            e,
	            n = [],
	            r = this.getTrans();for (t = 0; t < 1; t += .001) {
	          e = [t], t < 2 / 6 ? e.push(0) : t < .5 ? e.push(r(6 * (t - 2 / 6))) : t < 5 / 6 ? e.push(1) : t < 1 && e.push(r(1 - 6 * (t - 5 / 6))), n.push(e);
	        }return n;
	      } }, { key: "componentDidMount", value: function value() {
	        var t = this.getRed(),
	            e = this.getGreen(),
	            n = this.getBlue(),
	            r = (0, c.select)(this.myRef.current).append("svg").attr("width", this.width + this.margin.left + this.margin.right).attr("height", this.height + this.margin.top + this.margin.bottom).attr("margin", "auto").attr("display", "block").append("g").attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")"),
	            i = (0, u.scaleLinear)().domain([0, 1]).range([0, this.width]),
	            a = (0, u.scaleLinear)().domain([0, 1]).range([this.height, 0]),
	            f = (0, o.line)().x(function (t) {
	          return i(t[0]);
	        }).y(function (t) {
	          return a(t[1]);
	        });r.append("path").data([t]).attr("fill", "none").attr("stroke", "red").attr("stroke-width", 1.5).attr("stroke-linecap", "round").attr("stroke-linejoin", "round").attr("d", f), r.append("path").data([e]).attr("fill", "none").attr("stroke", "green").attr("stroke-width", 1.5).attr("stroke-linecap", "round").attr("stroke-linejoin", "round").attr("d", f), r.append("path").data([n]).attr("fill", "none").attr("stroke", "blue").attr("stroke-width", 1.5).attr("stroke-linecap", "round").attr("stroke-linejoin", "round").attr("d", f), r.append("g").call((0, s.axisLeft)(a)), r.append("g").attr("transform", "translate(0," + this.height + ")").call((0, s.axisBottom)(i));
	      } }, { key: "render", value: function value() {
	        return f.default.createElement("div", { ref: this.myRef, style: { height: this.height + this.margin.top + this.margin.bottom, margin: "auto", display: "block" } });
	      } }]), e;
	  }();e.default = l;
	}, function (t, e, n) {
	  (function (t) {
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
	          a,
	          f,
	          c,
	          u,
	          o,
	          s,
	          l,
	          h,
	          d,
	          b,
	          p,
	          _,
	          _g,
	          _y,
	          m,
	          v,
	          x,
	          w,
	          M,
	          k,
	          T,
	          N,
	          A,
	          E,
	          C,
	          O,
	          S,
	          P,
	          j,
	          D,
	          R,
	          U,
	          Y,
	          B,
	          q,
	          L,
	          G,
	          z,
	          F,
	          I,
	          H,
	          X,
	          V,
	          $,
	          Z,
	          W,
	          Q,
	          J,
	          K,
	          tt,
	          et,
	          nt,
	          rt,
	          it,
	          at,
	          ft,
	          ct,
	          ut,
	          ot,
	          st,
	          lt,
	          ht,
	          dt,
	          bt,
	          pt,
	          _t,
	          gt,
	          yt,
	          mt,
	          vt,
	          xt,
	          wt,
	          Mt,
	          kt,
	          Tt,
	          Nt,
	          At,
	          Et,
	          Ct = [].slice;kt = function () {
	        var t, e, n, r, i;for (t = {}, r = 0, e = (i = "Boolean Number String Function Array Date RegExp Undefined Null".split(" ")).length; r < e; r++) {
	          n = i[r], t["[object " + n + "]"] = n.toLowerCase();
	        }return function (e) {
	          var n;return n = Object.prototype.toString.call(e), t[n] || "object";
	        };
	      }(), Z = function Z(t, e, n) {
	        return null == e && (e = 0), null == n && (n = 1), t < e && (t = e), t > n && (t = n), t;
	      }, Tt = function Tt(t) {
	        return t.length >= 3 ? Array.prototype.slice.call(t) : t[0];
	      }, M = function M(t) {
	        var e, n;for (t._clipped = !1, t._unclipped = t.slice(0), e = n = 0; n < 3; e = ++n) {
	          e < 3 ? ((t[e] < 0 || t[e] > 255) && (t._clipped = !0), t[e] < 0 && (t[e] = 0), t[e] > 255 && (t[e] = 255)) : 3 === e && (t[e] < 0 && (t[e] = 0), t[e] > 1 && (t[e] = 1));
	        }return t._clipped || delete t._unclipped, t;
	      }, f = Math.PI, mt = Math.round, T = Math.cos, O = Math.floor, rt = Math.pow, W = Math.log, xt = Math.sin, wt = Math.sqrt, _ = Math.atan2, K = Math.max, p = Math.abs, o = 2 * f, c = f / 3, i = f / 180, u = 180 / f, (w = function w() {
	        return arguments[0] instanceof r ? arguments[0] : function (t, e, n) {
	          n.prototype = t.prototype;var r = new n(),
	              i = t.apply(r, e);return Object(i) === i ? i : r;
	        }(r, arguments, function () {});
	      }).default = w, b = [], void 0 !== t && null !== t && null != t.exports && (t.exports = w), void 0 === (n = function () {
	        return w;
	      }.apply(e, [])) || (t.exports = n), w.version = "1.3.7", d = {}, l = [], h = !1, r = function () {
	        function t() {
	          var t, e, n, r, i, a, f, c, u;for (a = this, e = [], c = 0, r = arguments.length; c < r; c++) {
	            null != (t = arguments[c]) && e.push(t);
	          }if (e.length > 1 && (f = e[e.length - 1]), null != d[f]) a._rgb = M(d[f](Tt(e.slice(0, -1))));else {
	            for (h || (l = l.sort(function (t, e) {
	              return e.p - t.p;
	            }), h = !0), u = 0, i = l.length; u < i && !(f = (n = l[u]).test.apply(n, e)); u++) {}f && (a._rgb = M(d[f].apply(d, e)));
	          }null == a._rgb && console.warn("unknown format: " + e), null == a._rgb && (a._rgb = [0, 0, 0]), 3 === a._rgb.length && a._rgb.push(1);
	        }return t.prototype.toString = function () {
	          return this.hex();
	        }, t.prototype.clone = function () {
	          return w(me._rgb);
	        }, t;
	      }(), w._input = d,
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
	      w.brewer = v = { OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"], PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"], BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"], Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"], BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"], YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"], YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"], Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"], RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"], Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"], YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"], Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"], GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"], Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"], YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"], PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"], Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"], PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"], Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"], Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"], RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"], RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"], PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"], PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"], RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"], BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"], RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"], PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"], Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"], Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"], Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"], Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"], Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"], Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"], Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"], Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"] }, function () {
	        var t, e;for (t in e = [], v) {
	          e.push(v[t.toLowerCase()] = v[t]);
	        }
	      }(), w.colors = Nt = { aliceblue: "#f0f8ff", antiquewhite: "#faebd7", aqua: "#00ffff", aquamarine: "#7fffd4", azure: "#f0ffff", beige: "#f5f5dc", bisque: "#ffe4c4", black: "#000000", blanchedalmond: "#ffebcd", blue: "#0000ff", blueviolet: "#8a2be2", brown: "#a52a2a", burlywood: "#deb887", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", cornflower: "#6495ed", cornflowerblue: "#6495ed", cornsilk: "#fff8dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkgray: "#a9a9a9", darkgreen: "#006400", darkgrey: "#a9a9a9", darkkhaki: "#bdb76b", darkmagenta: "#8b008b", darkolivegreen: "#556b2f", darkorange: "#ff8c00", darkorchid: "#9932cc", darkred: "#8b0000", darksalmon: "#e9967a", darkseagreen: "#8fbc8f", darkslateblue: "#483d8b", darkslategray: "#2f4f4f", darkslategrey: "#2f4f4f", darkturquoise: "#00ced1", darkviolet: "#9400d3", deeppink: "#ff1493", deepskyblue: "#00bfff", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1e90ff", firebrick: "#b22222", floralwhite: "#fffaf0", forestgreen: "#228b22", fuchsia: "#ff00ff", gainsboro: "#dcdcdc", ghostwhite: "#f8f8ff", gold: "#ffd700", goldenrod: "#daa520", gray: "#808080", green: "#008000", greenyellow: "#adff2f", grey: "#808080", honeydew: "#f0fff0", hotpink: "#ff69b4", indianred: "#cd5c5c", indigo: "#4b0082", ivory: "#fffff0", khaki: "#f0e68c", laserlemon: "#ffff54", lavender: "#e6e6fa", lavenderblush: "#fff0f5", lawngreen: "#7cfc00", lemonchiffon: "#fffacd", lightblue: "#add8e6", lightcoral: "#f08080", lightcyan: "#e0ffff", lightgoldenrod: "#fafad2", lightgoldenrodyellow: "#fafad2", lightgray: "#d3d3d3", lightgreen: "#90ee90", lightgrey: "#d3d3d3", lightpink: "#ffb6c1", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", lightskyblue: "#87cefa", lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#b0c4de", lightyellow: "#ffffe0", lime: "#00ff00", limegreen: "#32cd32", linen: "#faf0e6", magenta: "#ff00ff", maroon: "#800000", maroon2: "#7f0000", maroon3: "#b03060", mediumaquamarine: "#66cdaa", mediumblue: "#0000cd", mediumorchid: "#ba55d3", mediumpurple: "#9370db", mediumseagreen: "#3cb371", mediumslateblue: "#7b68ee", mediumspringgreen: "#00fa9a", mediumturquoise: "#48d1cc", mediumvioletred: "#c71585", midnightblue: "#191970", mintcream: "#f5fffa", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", navajowhite: "#ffdead", navy: "#000080", oldlace: "#fdf5e6", olive: "#808000", olivedrab: "#6b8e23", orange: "#ffa500", orangered: "#ff4500", orchid: "#da70d6", palegoldenrod: "#eee8aa", palegreen: "#98fb98", paleturquoise: "#afeeee", palevioletred: "#db7093", papayawhip: "#ffefd5", peachpuff: "#ffdab9", peru: "#cd853f", pink: "#ffc0cb", plum: "#dda0dd", powderblue: "#b0e0e6", purple: "#800080", purple2: "#7f007f", purple3: "#a020f0", rebeccapurple: "#663399", red: "#ff0000", rosybrown: "#bc8f8f", royalblue: "#4169e1", saddlebrown: "#8b4513", salmon: "#fa8072", sandybrown: "#f4a460", seagreen: "#2e8b57", seashell: "#fff5ee", sienna: "#a0522d", silver: "#c0c0c0", skyblue: "#87ceeb", slateblue: "#6a5acd", slategray: "#708090", slategrey: "#708090", snow: "#fffafa", springgreen: "#00ff7f", steelblue: "#4682b4", tan: "#d2b48c", teal: "#008080", thistle: "#d8bfd8", tomato: "#ff6347", turquoise: "#40e0d0", violet: "#ee82ee", wheat: "#f5deb3", white: "#ffffff", whitesmoke: "#f5f5f5", yellow: "#ffff00", yellowgreen: "#9acd32" }, I = function I() {
	        var t, e, n, r, i, f, c;return r = (e = Tt(arguments))[0], t = e[1], n = e[2], f = (r + 16) / 116, i = isNaN(t) ? f : f + t / 500, c = isNaN(n) ? f : f - n / 200, f = a.Yn * H(f), i = a.Xn * H(i), c = a.Zn * H(c), [Et(3.2404542 * i - 1.5371385 * f - .4985314 * c), Et(-.969266 * i + 1.8760108 * f + .041556 * c), n = Et(.0556434 * i - .2040259 * f + 1.0572252 * c), e.length > 3 ? e[3] : 1];
	      }, Et = function Et(t) {
	        return 255 * (t <= .00304 ? 12.92 * t : 1.055 * rt(t, 1 / 2.4) - .055);
	      }, H = function H(t) {
	        return t > a.t1 ? t * t * t : a.t2 * (t - a.t0);
	      }, a = { Kn: 18, Xn: .95047, Yn: 1, Zn: 1.08883, t0: .137931034, t1: .206896552, t2: .12841855, t3: .008856452 }, lt = function lt() {
	        var t, e, n, r, i, a, f;return n = (r = Tt(arguments))[0], e = r[1], t = r[2], a = (i = _t(n, e, t))[0], [116 * (f = i[1]) - 16, 500 * (a - f), 200 * (f - i[2])];
	      }, gt = function gt(t) {
	        return (t /= 255) <= .04045 ? t / 12.92 : rt((t + .055) / 1.055, 2.4);
	      }, At = function At(t) {
	        return t > a.t3 ? rt(t, 1 / 3) : t / a.t2 + a.t0;
	      }, _t = function _t() {
	        var t, e, n, r;return n = (r = Tt(arguments))[0], e = r[1], t = r[2], n = gt(n), e = gt(e), t = gt(t), [At((.4124564 * n + .3575761 * e + .1804375 * t) / a.Xn), At((.2126729 * n + .7151522 * e + .072175 * t) / a.Yn), At((.0193339 * n + .119192 * e + .9503041 * t) / a.Zn)];
	      }, w.lab = function () {
	        return function (t, e, n) {
	          n.prototype = t.prototype;var r = new n(),
	              i = t.apply(r, e);return Object(i) === i ? i : r;
	        }(r, Ct.call(arguments).concat(["lab"]), function () {});
	      }, d.lab = I, r.prototype.lab = function () {
	        return lt(this._rgb);
	      }, _g = function g(t) {
	        var e, n, r, i, a, f, c, u, o, s, l;return 2 === (t = function () {
	          var e, n, r;for (r = [], n = 0, e = t.length; n < e; n++) {
	            i = t[n], r.push(w(i));
	          }return r;
	        }()).length ? (o = function () {
	          var e, n, r;for (r = [], n = 0, e = t.length; n < e; n++) {
	            i = t[n], r.push(i.lab());
	          }return r;
	        }(), a = o[0], f = o[1], e = function e(t) {
	          var e, n;return n = function () {
	            var n, r;for (r = [], e = n = 0; n <= 2; e = ++n) {
	              r.push(a[e] + t * (f[e] - a[e]));
	            }return r;
	          }(), w.lab.apply(w, n);
	        }) : 3 === t.length ? (s = function () {
	          var e, n, r;for (r = [], n = 0, e = t.length; n < e; n++) {
	            i = t[n], r.push(i.lab());
	          }return r;
	        }(), a = s[0], f = s[1], c = s[2], e = function e(t) {
	          var e, n;return n = function () {
	            var n, r;for (r = [], e = n = 0; n <= 2; e = ++n) {
	              r.push((1 - t) * (1 - t) * a[e] + 2 * (1 - t) * t * f[e] + t * t * c[e]);
	            }return r;
	          }(), w.lab.apply(w, n);
	        }) : 4 === t.length ? (l = function () {
	          var e, n, r;for (r = [], n = 0, e = t.length; n < e; n++) {
	            i = t[n], r.push(i.lab());
	          }return r;
	        }(), a = l[0], f = l[1], c = l[2], u = l[3], e = function e(t) {
	          var e, n;return n = function () {
	            var n, r;for (r = [], e = n = 0; n <= 2; e = ++n) {
	              r.push((1 - t) * (1 - t) * (1 - t) * a[e] + 3 * (1 - t) * (1 - t) * t * f[e] + 3 * (1 - t) * t * t * c[e] + t * t * t * u[e]);
	            }return r;
	          }(), w.lab.apply(w, n);
	        }) : 5 === t.length && (n = _g(t.slice(0, 3)), r = _g(t.slice(2, 5)), e = function e(t) {
	          return t < .5 ? n(2 * t) : r(2 * (t - .5));
	        }), e;
	      }, w.bezier = function (t) {
	        var e;return (e = _g(t)).scale = function () {
	          return w.scale(e);
	        }, e;
	      }, w.cubehelix = function (t, e, n, r, i) {
	        var a, f, c;return null == t && (t = 300), null == e && (e = -1.5), null == n && (n = 1), null == r && (r = 1), null == i && (i = [0, 1]), a = 0, "array" === kt(i) ? f = i[1] - i[0] : (f = 0, i = [i, i]), (c = function c(_c) {
	          var u, s, l, h, d;return u = o * ((t + 120) / 360 + e * _c), h = rt(i[0] + f * _c, r), s = (0 !== a ? n[0] + _c * a : n) * h * (1 - h) / 2, l = T(u), d = xt(u), w(M([255 * (h + s * (-.14861 * l + 1.78277 * d)), 255 * (h + s * (-.29227 * l - .90649 * d)), 255 * (h + s * (1.97294 * l))]));
	        }).start = function (e) {
	          return null == e ? t : (t = e, c);
	        }, c.rotations = function (t) {
	          return null == t ? e : (e = t, c);
	        }, c.gamma = function (t) {
	          return null == t ? r : (r = t, c);
	        }, c.hue = function (t) {
	          return null == t ? n : ("array" === kt(n = t) ? 0 === (a = n[1] - n[0]) && (n = n[1]) : a = 0, c);
	        }, c.lightness = function (t) {
	          return null == t ? i : ("array" === kt(t) ? (i = t, f = t[1] - t[0]) : (i = [t, t], f = 0), c);
	        }, c.scale = function () {
	          return w.scale(c);
	        }, c.hue(n), c;
	      }, w.random = function () {
	        var t, e;for ("0123456789abcdef", t = "#", e = 0; e < 6; ++e) {
	          t += "0123456789abcdef".charAt(O(16 * Math.random()));
	        }return new r(t);
	      }, b = [], w.interpolate = Y = function Y(t, e, n, r) {
	        var i, a, f, c;for (null == n && (n = .5), null == r && (r = "rgb"), "object" !== kt(t) && (t = w(t)), "object" !== kt(e) && (e = w(e)), f = 0, a = b.length; f < a; f++) {
	          if (r === (i = b[f])[0]) {
	            c = i[1](t, e, n, r);break;
	          }
	        }if (null == c) throw "color mode " + r + " is not supported";return c.alpha(t.alpha() + n * (e.alpha() - t.alpha()));
	      }, r.prototype.interpolate = function (t, e, n) {
	        return Y(this, t, e, n);
	      }, w.mix = Y, r.prototype.mix = r.prototype.interpolate, d.rgb = function () {
	        var t, e, n, r;for (t in n = [], e = Tt(arguments)) {
	          r = e[t], n.push(r);
	        }return n;
	      }, w.rgb = function () {
	        return function (t, e, n) {
	          n.prototype = t.prototype;var r = new n(),
	              i = t.apply(r, e);return Object(i) === i ? i : r;
	        }(r, Ct.call(arguments).concat(["rgb"]), function () {});
	      }, r.prototype.rgb = function (t) {
	        return null == t && (t = !0), t ? this._rgb.map(Math.round).slice(0, 3) : this._rgb.slice(0, 3);
	      }, r.prototype.rgba = function (t) {
	        return null == t && (t = !0), t ? [Math.round(this._rgb[0]), Math.round(this._rgb[1]), Math.round(this._rgb[2]), this._rgb[3]] : this._rgb.slice(0);
	      }, l.push({ p: 3, test: function test(t) {
	          var e;return e = Tt(arguments), "array" === kt(e) && 3 === e.length ? "rgb" : 4 === e.length && "number" === kt(e[3]) && e[3] >= 0 && e[3] <= 1 ? "rgb" : void 0;
	        } }), d.lrgb = d.rgb, L = function L(t, e, n, i) {
	        var a, f;return a = t._rgb, f = e._rgb, new r(wt(rt(a[0], 2) * (1 - n) + rt(f[0], 2) * n), wt(rt(a[1], 2) * (1 - n) + rt(f[1], 2) * n), wt(rt(a[2], 2) * (1 - n) + rt(f[2], 2) * n), i);
	      }, s = function s(t) {
	        var e, n, i, a, f;for (e = 1 / t.length, f = [0, 0, 0, 0], i = 0, n = t.length; i < n; i++) {
	          a = t[i]._rgb, f[0] += rt(a[0], 2) * e, f[1] += rt(a[1], 2) * e, f[2] += rt(a[2], 2) * e, f[3] += a[3] * e;
	        }return f[0] = wt(f[0]), f[1] = wt(f[1]), f[2] = wt(f[2]), new r(f);
	      }, b.push(["lrgb", L]), w.average = function (t, e) {
	        var n, r, i, a, c, u, o, l, h, d, b, p, g;if (null == e && (e = "rgb"), h = t.length, o = (t = t.map(function (t) {
	          return w(t);
	        })).splice(0, 1)[0], "lrgb" === e) return s(t);for (l in a = [], c = 0, u = 0, p = o.get(e)) {
	          p[l] = p[l] || 0, a.push(isNaN(p[l]) ? 0 : 1), "h" !== e.charAt(l) || isNaN(p[l]) || (n = p[l] / 180 * f, c += T(n), u += xt(n));
	        }for (r = o.alpha(), b = 0, d = t.length; b < d; b++) {
	          for (l in g = (i = t[b]).get(e), r += i.alpha(), p) {
	            isNaN(g[l]) || (a[l] += 1, "h" === e.charAt(l) ? (n = g[l] / 180 * f, c += T(n), u += xt(n)) : p[l] += g[l]);
	          }
	        }for (l in p) {
	          if ("h" === e.charAt(l)) {
	            for (n = _(u / a[l], c / a[l]) / f * 180; n < 0;) {
	              n += 360;
	            }for (; n >= 360;) {
	              n -= 360;
	            }p[l] = n;
	          } else p[l] = p[l] / a[l];
	        }return w(p, e).alpha(r / h);
	      }, P = function P(t) {
	        var e, n;if (t.match(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) return 4 !== t.length && 7 !== t.length || (t = t.substr(1)), 3 === t.length && (t = (t = t.split(""))[0] + t[0] + t[1] + t[1] + t[2] + t[2]), [(n = parseInt(t, 16)) >> 16, n >> 8 & 255, 255 & n, 1];if (t.match(/^#?([A-Fa-f0-9]{8})$/)) return 9 === t.length && (t = t.substr(1)), [(n = parseInt(t, 16)) >> 24 & 255, n >> 16 & 255, n >> 8 & 255, mt((255 & n) / 255 * 100) / 100];if (null != d.css && (e = d.css(t))) return e;throw "unknown color: " + t;
	      }, ct = function ct(t, e) {
	        var n, r, i, a, f, c;return null == e && (e = "rgb"), f = t[0], i = t[1], r = t[2], n = t[3], f = Math.round(f), i = Math.round(i), r = Math.round(r), c = (c = "000000" + (f << 16 | i << 8 | r).toString(16)).substr(c.length - 6), a = (a = "0" + mt(255 * n).toString(16)).substr(a.length - 2), "#" + function () {
	          switch (e.toLowerCase()) {case "rgba":
	              return c + a;case "argb":
	              return a + c;default:
	              return c;}
	        }();
	      }, d.hex = function (t) {
	        return P(t);
	      }, w.hex = function () {
	        return function (t, e, n) {
	          n.prototype = t.prototype;var r = new n(),
	              i = t.apply(r, e);return Object(i) === i ? i : r;
	        }(r, Ct.call(arguments).concat(["hex"]), function () {});
	      }, r.prototype.hex = function (t) {
	        return null == t && (t = "rgb"), ct(this._rgb, t);
	      }, l.push({ p: 4, test: function test(t) {
	          if (1 === arguments.length && "string" === kt(t)) return "hex";
	        } }), R = function R() {
	        var t, e, n, r, i, a, f, c, u, o, s, l, h, d;if (i = (t = Tt(arguments))[0], s = t[1], f = t[2], 0 === s) u = r = e = 255 * f;else {
	          for (d = [0, 0, 0], n = [0, 0, 0], l = 2 * f - (h = f < .5 ? f * (1 + s) : f + s - f * s), i /= 360, d[0] = i + 1 / 3, d[1] = i, d[2] = i - 1 / 3, a = c = 0; c <= 2; a = ++c) {
	            d[a] < 0 && (d[a] += 1), d[a] > 1 && (d[a] -= 1), 6 * d[a] < 1 ? n[a] = l + 6 * (h - l) * d[a] : 2 * d[a] < 1 ? n[a] = h : 3 * d[a] < 2 ? n[a] = l + (h - l) * (2 / 3 - d[a]) * 6 : n[a] = l;
	          }u = (o = [mt(255 * n[0]), mt(255 * n[1]), mt(255 * n[2])])[0], r = o[1], e = o[2];
	        }return t.length > 3 ? [u, r, e, t[3]] : [u, r, e];
	      }, ot = function ot(t, e, n) {
	        var r, i, a, f, c;return void 0 !== t && t.length >= 3 && (t = (f = t)[0], e = f[1], n = f[2]), t /= 255, e /= 255, n /= 255, a = Math.min(t, e, n), i = ((K = Math.max(t, e, n)) + a) / 2, K === a ? (c = 0, r = Number.NaN) : c = i < .5 ? (K - a) / (K + a) : (K - a) / (2 - K - a), t === K ? r = (e - n) / (K - a) : e === K ? r = 2 + (n - t) / (K - a) : n === K && (r = 4 + (t - e) / (K - a)), (r *= 60) < 0 && (r += 360), [r, c, i];
	      }, w.hsl = function () {
	        return function (t, e, n) {
	          n.prototype = t.prototype;var r = new n(),
	              i = t.apply(r, e);return Object(i) === i ? i : r;
	        }(r, Ct.call(arguments).concat(["hsl"]), function () {});
	      }, d.hsl = R, r.prototype.hsl = function () {
	        return ot(this._rgb);
	      }, U = function U() {
	        var t, e, n, r, i, a, f, c, u, o, s, l, h, d, b, p, _, g;if (i = (t = Tt(arguments))[0], p = t[1], g = t[2], g *= 255, 0 === p) u = r = e = g;else switch (360 === i && (i = 0), i > 360 && (i -= 360), i < 0 && (i += 360), f = g * (1 - p), c = g * (1 - p * (n = (i /= 60) - (a = O(i)))), _ = g * (1 - p * (1 - n)), a) {case 0:
	            u = (o = [g, _, f])[0], r = o[1], e = o[2];break;case 1:
	            u = (s = [c, g, f])[0], r = s[1], e = s[2];break;case 2:
	            u = (l = [f, g, _])[0], r = l[1], e = l[2];break;case 3:
	            u = (h = [f, c, g])[0], r = h[1], e = h[2];break;case 4:
	            u = (d = [_, f, g])[0], r = d[1], e = d[2];break;case 5:
	            u = (b = [g, f, c])[0], r = b[1], e = b[2];}return [u, r, e, t.length > 3 ? t[3] : 1];
	      }, st = function st() {
	        var t, e, n, r, i, a, f, c, u;return a = (f = Tt(arguments))[0], n = f[1], t = f[2], i = Math.min(a, n, t), e = (K = Math.max(a, n, t)) - i, u = K / 255, 0 === K ? (r = Number.NaN, c = 0) : (c = e / K, a === K && (r = (n - t) / e), n === K && (r = 2 + (t - a) / e), t === K && (r = 4 + (a - n) / e), (r *= 60) < 0 && (r += 360)), [r, c, u];
	      }, w.hsv = function () {
	        return function (t, e, n) {
	          n.prototype = t.prototype;var r = new n(),
	              i = t.apply(r, e);return Object(i) === i ? i : r;
	        }(r, Ct.call(arguments).concat(["hsv"]), function () {});
	      }, d.hsv = U, r.prototype.hsv = function () {
	        return st(this._rgb);
	      }, et = function et(t) {
	        return "number" === kt(t) && t >= 0 && t <= 16777215 ? [t >> 16, t >> 8 & 255, 255 & t, 1] : (console.warn("unknown num color: " + t), [0, 0, 0, 1]);
	      }, bt = function bt() {
	        var t;return ((t = Tt(arguments))[0] << 16) + (t[1] << 8) + t[2];
	      }, w.num = function (t) {
	        return new r(t, "num");
	      }, r.prototype.num = function (t) {
	        return null == t && (t = "rgb"), bt(this._rgb, t);
	      }, d.num = et, l.push({ p: 1, test: function test(t) {
	          if (1 === arguments.length && "number" === kt(t) && t >= 0 && t <= 16777215) return "num";
	        } }), S = function S() {
	        var t, e, n, r, i, a, f, c, u, o, s, l, h, d, b, p, _, g, y, m;if (c = (n = Tt(arguments))[0], i = n[1], e = n[2], f = f / 100 * 255, t = 255 * (i /= 100), 0 === i) l = f = r = e;else switch (360 === c && (c = 0), c > 360 && (c -= 360), c < 0 && (c += 360), s = (o = e * (1 - i)) + t * (1 - (a = (c /= 60) - (u = O(c)))), y = o + t * a, m = o + t, u) {case 0:
	            l = (h = [m, y, o])[0], f = h[1], r = h[2];break;case 1:
	            l = (d = [s, m, o])[0], f = d[1], r = d[2];break;case 2:
	            l = (b = [o, m, y])[0], f = b[1], r = b[2];break;case 3:
	            l = (p = [o, s, m])[0], f = p[1], r = p[2];break;case 4:
	            l = (_ = [y, o, m])[0], f = _[1], r = _[2];break;case 5:
	            l = (g = [m, o, s])[0], f = g[1], r = g[2];}return [l, f, r, n.length > 3 ? n[3] : 1];
	      }, ft = function ft() {
	        var t, e, n, r, i, a, f, c, u;return c = (u = Tt(arguments))[0], i = u[1], e = u[2], f = Math.min(c, i, e), n = 100 * (r = (K = Math.max(c, i, e)) - f) / 255, t = f / (255 - r) * 100, 0 === r ? a = Number.NaN : (c === K && (a = (i - e) / r), i === K && (a = 2 + (e - c) / r), e === K && (a = 4 + (c - i) / r), (a *= 60) < 0 && (a += 360)), [a, n, t];
	      }, w.hcg = function () {
	        return function (t, e, n) {
	          n.prototype = t.prototype;var r = new n(),
	              i = t.apply(r, e);return Object(i) === i ? i : r;
	        }(r, Ct.call(arguments).concat(["hcg"]), function () {});
	      }, d.hcg = S, r.prototype.hcg = function () {
	        return ft(this._rgb);
	      }, N = function N(t) {
	        var e, n, r, i, a, f, c, u;if (t = t.toLowerCase(), null != w.colors && w.colors[t]) return P(w.colors[t]);if (a = t.match(/rgb\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*\)/)) {
	          for (c = a.slice(1, 4), i = f = 0; f <= 2; i = ++f) {
	            c[i] = +c[i];
	          }c[3] = 1;
	        } else if (a = t.match(/rgba\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*,\s*([01]|[01]?\.\d+)\)/)) for (c = a.slice(1, 5), i = u = 0; u <= 3; i = ++u) {
	          c[i] = +c[i];
	        } else if (a = t.match(/rgb\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) {
	          for (c = a.slice(1, 4), i = e = 0; e <= 2; i = ++e) {
	            c[i] = mt(2.55 * c[i]);
	          }c[3] = 1;
	        } else if (a = t.match(/rgba\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) {
	          for (c = a.slice(1, 5), i = n = 0; n <= 2; i = ++n) {
	            c[i] = mt(2.55 * c[i]);
	          }c[3] = +c[3];
	        } else (a = t.match(/hsl\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) ? ((r = a.slice(1, 4))[1] *= .01, r[2] *= .01, (c = R(r))[3] = 1) : (a = t.match(/hsla\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) && ((r = a.slice(1, 4))[1] *= .01, r[2] *= .01, (c = R(r))[3] = +a[4]);return c;
	      }, at = function at(t) {
	        var e;return "rgb" === (e = t[3] < 1 ? "rgba" : "rgb") ? e + "(" + t.slice(0, 3).map(mt).join(",") + ")" : "rgba" === e ? e + "(" + t.slice(0, 3).map(mt).join(",") + "," + t[3] + ")" : void 0;
	      }, yt = function yt(t) {
	        return mt(100 * t) / 100;
	      }, D = function D(t, e) {
	        var n;return n = e < 1 ? "hsla" : "hsl", t[0] = yt(t[0] || 0), t[1] = yt(100 * t[1]) + "%", t[2] = yt(100 * t[2]) + "%", "hsla" === n && (t[3] = e), n + "(" + t.join(",") + ")";
	      }, d.css = function (t) {
	        return N(t);
	      }, w.css = function () {
	        return function (t, e, n) {
	          n.prototype = t.prototype;var r = new n(),
	              i = t.apply(r, e);return Object(i) === i ? i : r;
	        }(r, Ct.call(arguments).concat(["css"]), function () {});
	      }, r.prototype.css = function (t) {
	        return null == t && (t = "rgb"), "rgb" === t.slice(0, 3) ? at(this._rgb) : "hsl" === t.slice(0, 3) ? D(this.hsl(), this.alpha()) : void 0;
	      }, d.named = function (t) {
	        return P(Nt[t]);
	      }, l.push({ p: 5, test: function test(t) {
	          if (1 === arguments.length && null != Nt[t]) return "named";
	        } }), r.prototype.name = function (t) {
	        var e, n;for (n in arguments.length && (Nt[t] && (this._rgb = P(Nt[t])), this._rgb[3] = 1), e = this.hex(), Nt) {
	          if (e === Nt[n]) return n;
	        }return e;
	      }, X = function X() {
	        var t, e, n, r;return n = (r = Tt(arguments))[0], t = r[1], e = r[2], [n, T(e *= i) * t, xt(e) * t];
	      }, V = function V() {
	        var t, e, n, r, i, a, f, c, u;return f = (n = Tt(arguments))[0], i = n[1], a = n[2], t = (c = X(f, i, a))[0], e = c[1], r = c[2], [(u = I(t, e, r))[0], u[1], r = u[2], n.length > 3 ? n[3] : 1];
	      }, F = function F() {
	        var t, e, n, r, i, a;return i = (a = Tt(arguments))[0], t = a[1], e = a[2], n = wt(t * t + e * e), r = (_(e, t) * u + 360) % 360, 0 === mt(1e4 * n) && (r = Number.NaN), [i, n, r];
	      }, ht = function ht() {
	        var t, e, n, r, i, a, f;return i = (a = Tt(arguments))[0], n = a[1], e = a[2], r = (f = lt(i, n, e))[0], t = f[1], e = f[2], F(r, t, e);
	      }, w.lch = function () {
	        var t;return t = Tt(arguments), new r(t, "lch");
	      }, w.hcl = function () {
	        var t;return t = Tt(arguments), new r(t, "hcl");
	      }, d.lch = V, d.hcl = function () {
	        var t, e, n, r;return e = (r = Tt(arguments))[0], t = r[1], n = r[2], V([n, t, e]);
	      }, r.prototype.lch = function () {
	        return ht(this._rgb);
	      }, r.prototype.hcl = function () {
	        return ht(this._rgb).reverse();
	      }, it = function it(t) {
	        var e, n, r, i, a, f;return null == t && (t = "rgb"), a = (f = Tt(arguments))[0], r = f[1], e = f[2], r /= 255, e /= 255, [(1 - (a /= 255) - (i = 1 - Math.max(a, Math.max(r, e)))) * (n = i < 1 ? 1 / (1 - i) : 0), (1 - r - i) * n, (1 - e - i) * n, i];
	      }, k = function k() {
	        var t, e, n, r, i, a;return n = (e = Tt(arguments))[0], i = e[1], a = e[2], r = e[3], t = e.length > 4 ? e[4] : 1, 1 === r ? [0, 0, 0, t] : [n >= 1 ? 0 : 255 * (1 - n) * (1 - r), i >= 1 ? 0 : 255 * (1 - i) * (1 - r), a >= 1 ? 0 : 255 * (1 - a) * (1 - r), t];
	      }, d.cmyk = function () {
	        return k(Tt(arguments));
	      }, w.cmyk = function () {
	        return function (t, e, n) {
	          n.prototype = t.prototype;var r = new n(),
	              i = t.apply(r, e);return Object(i) === i ? i : r;
	        }(r, Ct.call(arguments).concat(["cmyk"]), function () {});
	      }, r.prototype.cmyk = function () {
	        return it(this._rgb);
	      }, d.gl = function () {
	        var t, e, n, r, i;for (r = function () {
	          var t, n;for (e in n = [], t = Tt(arguments)) {
	            i = t[e], n.push(i);
	          }return n;
	        }.apply(this, arguments), t = n = 0; n <= 2; t = ++n) {
	          r[t] *= 255;
	        }return r;
	      }, w.gl = function () {
	        return function (t, e, n) {
	          n.prototype = t.prototype;var r = new n(),
	              i = t.apply(r, e);return Object(i) === i ? i : r;
	        }(r, Ct.call(arguments).concat(["gl"]), function () {});
	      }, r.prototype.gl = function () {
	        var t;return [(t = this._rgb)[0] / 255, t[1] / 255, t[2] / 255, t[3]];
	      }, dt = function dt(t, e, n) {
	        var r;return t = (r = Tt(arguments))[0], e = r[1], n = r[2], .2126 * (t = Q(t)) + .7152 * (e = Q(e)) + .0722 * (n = Q(n));
	      }, Q = function Q(t) {
	        return (t /= 255) <= .03928 ? t / 12.92 : rt((t + .055) / 1.055, 2.4);
	      }, z = function z(t, e, n, i) {
	        var a, f;return a = t._rgb, f = e._rgb, new r(a[0] + n * (f[0] - a[0]), a[1] + n * (f[1] - a[1]), a[2] + n * (f[2] - a[2]), i);
	      }, b.push(["rgb", z]), r.prototype.luminance = function (t, e) {
	        var n, r, i, a, _f;return null == e && (e = "rgb"), arguments.length ? (a = this._rgb, 0 === t ? a = [0, 0, 0, this._rgb[3]] : 1 === t ? a = [255, 255, 255, this[3]] : (n = dt(this._rgb), r = 1e-7, i = 20, _f = function f(n, a) {
	          var c, u;return c = (u = n.interpolate(a, .5, e)).luminance(), Math.abs(t - c) < r || !i-- ? u : c > t ? _f(n, u) : _f(u, a);
	        }, a = n > t ? _f(w("black"), this).rgba() : _f(this, w("white")).rgba()), w(a).alpha(this.alpha())) : dt(this._rgb);
	      }, Mt = function Mt(t) {
	        var e, n, r, i;return (i = t / 100) < 66 ? (r = 255, n = -155.25485562709179 - .44596950469579133 * (n = i - 2) + 104.49216199393888 * W(n), e = i < 20 ? 0 : .8274096064007395 * (e = i - 10) - 254.76935184120902 + 115.67994401066147 * W(e)) : (r = 351.97690566805693 + .114206453784165 * (r = i - 55) - 40.25366309332127 * W(r), n = 325.4494125711974 + .07943456536662342 * (n = i - 50) - 28.0852963507957 * W(n), e = 255), [r, n, e];
	      }, pt = function pt() {
	        var t, e, n, r, i, a, f;for (r = (i = Tt(arguments))[0], i[1], t = i[2], n = 1e3, e = 4e4, .4; e - n > .4;) {
	          (a = Mt(f = .5 * (e + n)))[2] / a[0] >= t / r ? e = f : n = f;
	        }return mt(f);
	      }, w.temperature = w.kelvin = function () {
	        return function (t, e, n) {
	          n.prototype = t.prototype;var r = new n(),
	              i = t.apply(r, e);return Object(i) === i ? i : r;
	        }(r, Ct.call(arguments).concat(["temperature"]), function () {});
	      }, d.temperature = d.kelvin = d.K = Mt, r.prototype.temperature = function () {
	        return pt(this._rgb);
	      }, r.prototype.kelvin = r.prototype.temperature, w.contrast = function (t, e) {
	        var n, i, a, f;return "string" !== (a = kt(t)) && "number" !== a || (t = new r(t)), "string" !== (f = kt(e)) && "number" !== f || (e = new r(e)), (n = t.luminance()) > (i = e.luminance()) ? (n + .05) / (i + .05) : (i + .05) / (n + .05);
	      }, w.distance = function (t, e, n) {
	        var i, a, f, c, u, o, s;for (a in null == n && (n = "lab"), "string" !== (u = kt(t)) && "number" !== u || (t = new r(t)), "string" !== (o = kt(e)) && "number" !== o || (e = new r(e)), f = t.get(n), c = e.get(n), s = 0, f) {
	          s += (i = (f[a] || 0) - (c[a] || 0)) * i;
	        }return Math.sqrt(s);
	      }, w.deltaE = function (t, e, n, i) {
	        var a, c, u, o, s, l, h, d, b, g, y, m, v, x, w, M, k, N, A, E, C, O, S, P;for (null == n && (n = 1), null == i && (i = 1), "string" !== (w = kt(t)) && "number" !== w || (t = new r(t)), "string" !== (M = kt(e)) && "number" !== M || (e = new r(e)), a = (k = t.lab())[0], u = k[1], s = k[2], c = (N = e.lab())[0], o = N[1], l = N[2], h = wt(u * u + s * s), d = wt(o * o + l * l), E = a < 16 ? .511 : .040975 * a / (1 + .01765 * a), A = .0638 * h / (1 + .0131 * h) + .638, x = h < 1e-6 ? 0 : 180 * _(s, u) / f; x < 0;) {
	          x += 360;
	        }for (; x >= 360;) {
	          x -= 360;
	        }return C = x >= 164 && x <= 345 ? .56 + p(.2 * T(f * (x + 168) / 180)) : .36 + p(.4 * T(f * (x + 35) / 180)), v = wt((b = h * h * h * h) / (b + 1900)), wt((O = (a - c) / (n * E)) * O + (S = (m = h - d) / (i * A)) * S + ((g = u - o) * g + (y = s - l) * y - m * m) / ((P = A * (v * C + 1 - v)) * P));
	      }, r.prototype.get = function (t) {
	        var e, n, r, i, a;return this, r = (i = t.split("."))[0], e = i[1], a = this[r](), e ? (n = r.indexOf(e)) > -1 ? a[n] : console.warn("unknown channel " + e + " in mode " + r) : a;
	      }, r.prototype.set = function (t, e) {
	        var n, r, i, a, f;if (this, i = (a = t.split("."))[0], n = a[1]) {
	          if (f = this[i](), (r = i.indexOf(n)) > -1) {
	            if ("string" === kt(e)) switch (e.charAt(0)) {case "+":case "-":
	                f[r] += +e;break;case "*":
	                f[r] *= +e.substr(1);break;case "/":
	                f[r] /= +e.substr(1);break;default:
	                f[r] = +e;} else f[r] = e;
	          } else console.warn("unknown channel " + n + " in mode " + i);
	        } else f = e;return w(f, i).alpha(this.alpha());
	      }, r.prototype.clipped = function () {
	        return this._rgb._clipped || !1;
	      }, r.prototype.alpha = function (t) {
	        return arguments.length ? w.rgb([this._rgb[0], this._rgb[1], this._rgb[2], t]) : this._rgb[3];
	      }, r.prototype.darken = function (t) {
	        var e;return null == t && (t = 1), this, (e = this.lab())[0] -= a.Kn * t, w.lab(e).alpha(this.alpha());
	      }, r.prototype.brighten = function (t) {
	        return null == t && (t = 1), this.darken(-t);
	      }, r.prototype.darker = r.prototype.darken, r.prototype.brighter = r.prototype.brighten, r.prototype.saturate = function (t) {
	        var e;return null == t && (t = 1), this, (e = this.lch())[1] += t * a.Kn, e[1] < 0 && (e[1] = 0), w.lch(e).alpha(this.alpha());
	      }, r.prototype.desaturate = function (t) {
	        return null == t && (t = 1), this.saturate(-t);
	      }, r.prototype.premultiply = function () {
	        var t, e;return e = this.rgb(), t = this.alpha(), w(e[0] * t, e[1] * t, e[2] * t, t);
	      }, tt = function tt(t, e) {
	        return t * e / 255;
	      }, A = function A(t, e) {
	        return t > e ? e : t;
	      }, $ = function $(t, e) {
	        return t > e ? t : e;
	      }, vt = function vt(t, e) {
	        return 255 * (1 - (1 - t / 255) * (1 - e / 255));
	      }, nt = function nt(t, e) {
	        return e < 128 ? 2 * t * e / 255 : 255 * (1 - 2 * (1 - t / 255) * (1 - e / 255));
	      }, x = function x(t, e) {
	        return 255 * (1 - (1 - e / 255) / (t / 255));
	      }, E = function E(t, e) {
	        return 255 === t ? 255 : (t = e / 255 * 255 / (1 - t / 255)) > 255 ? 255 : t;
	      }, (_y = function y(t, e, n) {
	        if (!_y[n]) throw "unknown blend mode " + n;return _y[n](t, e);
	      }).normal = (m = function m(t) {
	        return function (e, n) {
	          var r, i;return r = w(n).rgb(), i = w(e).rgb(), w(t(r, i), "rgb");
	        };
	      })((C = function C(t) {
	        return function (e, n) {
	          var r, i, a;for (a = [], r = i = 0; i <= 3; r = ++i) {
	            a[r] = t(e[r], n[r]);
	          }return a;
	        };
	      })(function (t, e) {
	        return t;
	      })), _y.multiply = m(C(tt)), _y.screen = m(C(vt)), _y.overlay = m(C(nt)), _y.darken = m(C(A)), _y.lighten = m(C($)), _y.dodge = m(C(E)), _y.burn = m(C(x)), w.blend = _y, w.analyze = function (t) {
	        var e, n, r, i;for (r = { min: Number.MAX_VALUE, max: -1 * Number.MAX_VALUE, sum: 0, values: [], count: 0 }, n = 0, e = t.length; n < e; n++) {
	          null == (i = t[n]) || isNaN(i) || (r.values.push(i), r.sum += i, i < r.min && (r.min = i), i > r.max && (r.max = i), r.count += 1);
	        }return r.domain = [r.min, r.max], r.limits = function (t, e) {
	          return w.limits(r, t, e);
	        }, r;
	      }, w.scale = function (t, e) {
	        var n, r, i, a, f, c, u, o, s, l, h, d, b, p, _, g, y, m, v, x, M;return s = "rgb", l = w("#ccc"), p = 0, !1, f = [0, 1], b = [], d = [0, 0], n = !1, i = [], h = !1, o = 0, u = 1, a = !1, r = {}, _ = !0, c = 1, x = function x(t) {
	          var e, n, r, a, f, c;if (null == t && (t = ["#fff", "#000"]), null != t && "string" === kt(t) && null != w.brewer && (t = w.brewer[t] || w.brewer[t.toLowerCase()] || t), "array" === kt(t)) {
	            for (e = r = 0, a = (t = t.slice(0)).length - 1; 0 <= a ? r <= a : r >= a; e = 0 <= a ? ++r : --r) {
	              n = t[e], "string" === kt(n) && (t[e] = w(n));
	            }for (b.length = 0, e = c = 0, f = t.length - 1; 0 <= f ? c <= f : c >= f; e = 0 <= f ? ++c : --c) {
	              b.push(e / (t.length - 1));
	            }
	          }return v(), i = t;
	        }, y = function y(t) {
	          var e, r;if (null != n) {
	            for (r = n.length - 1, e = 0; e < r && t >= n[e];) {
	              e++;
	            }return e - 1;
	          }return 0;
	        }, M = function M(t) {
	          return t;
	        }, function (t) {
	          var e, r, i, a, f;return f = t, n.length > 2 && (a = n.length - 1, e = y(t), i = n[0] + (n[1] - n[0]) * (0 + .5 * p), r = n[a - 1] + (n[a] - n[a - 1]) * (1 - .5 * p), f = o + (n[e] + .5 * (n[e + 1] - n[e]) - i) / (r - i) * (u - o)), f;
	        }, m = function m(t, e) {
	          var a, f, h, p, g, m, v;if (null == e && (e = !1), isNaN(t)) return l;if (v = e ? t : n && n.length > 2 ? y(t) / (n.length - 2) : u !== o ? (t - o) / (u - o) : 1, e || (v = M(v)), 1 !== c && (v = rt(v, c)), v = d[0] + v * (1 - d[0] - d[1]), v = Math.min(1, Math.max(0, v)), h = Math.floor(1e4 * v), _ && r[h]) a = r[h];else {
	            if ("array" === kt(i)) for (f = p = 0, m = b.length - 1; 0 <= m ? p <= m : p >= m; f = 0 <= m ? ++p : --p) {
	              if (v <= (g = b[f])) {
	                a = i[f];break;
	              }if (v >= g && f === b.length - 1) {
	                a = i[f];break;
	              }if (v > g && v < b[f + 1]) {
	                v = (v - g) / (b[f + 1] - g), a = w.interpolate(i[f], i[f + 1], v, s);break;
	              }
	            } else "function" === kt(i) && (a = i(v));_ && (r[h] = a);
	          }return a;
	        }, v = function v() {
	          return r = {};
	        }, x(t), (g = function g(t) {
	          var e;return e = w(m(t)), h && e[h] ? e[h]() : e;
	        }).classes = function (t) {
	          var e;return null != t ? ("array" === kt(t) ? (n = t, f = [t[0], t[t.length - 1]]) : (e = w.analyze(f), n = 0 === t ? [e.min, e.max] : w.limits(e, "e", t)), g) : n;
	        }, g.domain = function (t) {
	          var e, n, r, a, c, s, l;if (!arguments.length) return f;if (o = t[0], u = t[t.length - 1], b = [], r = i.length, t.length === r && o !== u) for (c = 0, a = t.length; c < a; c++) {
	            n = t[c], b.push((n - o) / (u - o));
	          } else for (e = l = 0, s = r - 1; 0 <= s ? l <= s : l >= s; e = 0 <= s ? ++l : --l) {
	            b.push(e / (r - 1));
	          }return f = [o, u], g;
	        }, g.mode = function (t) {
	          return arguments.length ? (s = t, v(), g) : s;
	        }, g.range = function (t, e) {
	          return x(t), g;
	        }, g.out = function (t) {
	          return h = t, g;
	        }, g.spread = function (t) {
	          return arguments.length ? (p = t, g) : p;
	        }, g.correctLightness = function (t) {
	          return null == t && (t = !0), a = t, v(), M = a ? function (t) {
	            var e, n, r, i, a, f, c, u, o;for (e = m(0, !0).lab()[0], n = m(1, !0).lab()[0], c = e > n, r = m(t, !0).lab()[0], i = r - (a = e + (n - e) * t), u = 0, o = 1, f = 20; Math.abs(i) > .01 && f-- > 0;) {
	              c && (i *= -1), i < 0 ? (u = t, t += .5 * (o - t)) : (o = t, t += .5 * (u - t)), r = m(t, !0).lab()[0], i = r - a;
	            }return t;
	          } : function (t) {
	            return t;
	          }, g;
	        }, g.padding = function (t) {
	          return null != t ? ("number" === kt(t) && (t = [t, t]), d = t, g) : d;
	        }, g.colors = function (e, r) {
	          var a, c, u, o, s, l, h, d;if (arguments.length < 2 && (r = "hex"), s = [], 0 === arguments.length) s = i.slice(0);else if (1 === e) s = [g(.5)];else if (e > 1) c = f[0], a = f[1] - c, s = function () {
	            l = [];for (var t = 0; 0 <= e ? t < e : t > e; 0 <= e ? t++ : t--) {
	              l.push(t);
	            }return l;
	          }.apply(this).map(function (t) {
	            return g(c + t / (e - 1) * a);
	          });else {
	            if (t = [], h = [], n && n.length > 2) for (u = d = 1, o = n.length; 1 <= o ? d < o : d > o; u = 1 <= o ? ++d : --d) {
	              h.push(.5 * (n[u - 1] + n[u]));
	            } else h = f;s = h.map(function (t) {
	              return g(t);
	            });
	          }return w[r] && (s = s.map(function (t) {
	            return t[r]();
	          })), s;
	        }, g.cache = function (t) {
	          return null != t ? (_ = t, g) : _;
	        }, g.gamma = function (t) {
	          return null != t ? (c = t, g) : c;
	        }, g;
	      }, null == w.scales && (w.scales = {}), w.scales.cool = function () {
	        return w.scale([w.hsl(180, 1, .9), w.hsl(250, .7, .4)]);
	      }, w.scales.hot = function () {
	        return w.scale(["#000", "#f00", "#ff0", "#fff"], [0, .25, .75, 1]).mode("rgb");
	      }, w.analyze = function (t, e, n) {
	        var r, i, a, f, c, u;if (c = { min: Number.MAX_VALUE, max: -1 * Number.MAX_VALUE, sum: 0, values: [], count: 0 }, null == n && (n = function n() {
	          return !0;
	        }), r = function r(t) {
	          null == t || isNaN(t) || (c.values.push(t), c.sum += t, t < c.min && (c.min = t), t > c.max && (c.max = t), c.count += 1);
	        }, u = function u(t, i) {
	          if (n(t, i)) return null != e && "function" === kt(e) ? r(e(t)) : null != e && "string" === kt(e) || "number" === kt(e) ? r(t[e]) : r(t);
	        }, "array" === kt(t)) for (f = 0, a = t.length; f < a; f++) {
	          u(t[f]);
	        } else for (i in t) {
	          u(t[i], i);
	        }return c.domain = [c.min, c.max], c.limits = function (t, e) {
	          return w.limits(c, t, e);
	        }, c;
	      }, w.limits = function (t, e, n) {
	        var r, i, a, f, c, u, o, s, l, h, d, b, _, g, y, m, v, x, M, k, T, N, A, E, C, S, P, j, D, R, U, Y, B, q, L, G, z, F, I, H, X, V, $, Z, Q, J, tt, et, nt, it, at, ft, ct, ut, ot;if (null == e && (e = "equal"), null == n && (n = 7), "array" === kt(t) && (t = w.analyze(t)), C = t.min, K = t.max, t.sum, ut = t.values.sort(function (t, e) {
	          return t - e;
	        }), 1 === n) return [C, K];if (A = [], "c" === e.substr(0, 1) && (A.push(C), A.push(K)), "e" === e.substr(0, 1)) {
	          for (A.push(C), k = U = 1, L = n - 1; 1 <= L ? U <= L : U >= L; k = 1 <= L ? ++U : --U) {
	            A.push(C + k / n * (K - C));
	          }A.push(K);
	        } else if ("l" === e.substr(0, 1)) {
	          if (C <= 0) throw "Logarithmic scales are only possible for values > 0";for (S = Math.LOG10E * W(C), E = Math.LOG10E * W(K), A.push(C), k = ot = 1, G = n - 1; 1 <= G ? ot <= G : ot >= G; k = 1 <= G ? ++ot : --ot) {
	            A.push(rt(10, S + k / n * (E - S)));
	          }A.push(K);
	        } else if ("q" === e.substr(0, 1)) {
	          for (A.push(C), k = r = 1, V = n - 1; 1 <= V ? r <= V : r >= V; k = 1 <= V ? ++r : --r) {
	            Y = (ut.length - 1) * k / n, (B = O(Y)) === Y ? A.push(ut[B]) : (q = Y - B, A.push(ut[B] * (1 - q) + ut[B + 1] * q));
	          }A.push(K);
	        } else if ("k" === e.substr(0, 1)) {
	          for (j = ut.length, g = new Array(j), x = new Array(n), it = !0, D = 0, m = null, (m = []).push(C), k = i = 1, $ = n - 1; 1 <= $ ? i <= $ : i >= $; k = 1 <= $ ? ++i : --i) {
	            m.push(C + k / n * (K - C));
	          }for (m.push(K); it;) {
	            for (T = a = 0, Z = n - 1; 0 <= Z ? a <= Z : a >= Z; T = 0 <= Z ? ++a : --a) {
	              x[T] = 0;
	            }for (k = f = 0, Q = j - 1; 0 <= Q ? f <= Q : f >= Q; k = 0 <= Q ? ++f : --f) {
	              for (ct = ut[k], P = Number.MAX_VALUE, T = c = 0, J = n - 1; 0 <= J ? c <= J : c >= J; T = 0 <= J ? ++c : --c) {
	                (M = p(m[T] - ct)) < P && (P = M, y = T);
	              }x[y]++, g[k] = y;
	            }for (R = new Array(n), T = u = 0, tt = n - 1; 0 <= tt ? u <= tt : u >= tt; T = 0 <= tt ? ++u : --u) {
	              R[T] = null;
	            }for (k = o = 0, et = j - 1; 0 <= et ? o <= et : o >= et; k = 0 <= et ? ++o : --o) {
	              null === R[v = g[k]] ? R[v] = ut[k] : R[v] += ut[k];
	            }for (T = s = 0, nt = n - 1; 0 <= nt ? s <= nt : s >= nt; T = 0 <= nt ? ++s : --s) {
	              R[T] *= 1 / x[T];
	            }for (it = !1, T = l = 0, z = n - 1; 0 <= z ? l <= z : l >= z; T = 0 <= z ? ++l : --l) {
	              if (R[T] !== m[k]) {
	                it = !0;break;
	              }
	            }m = R, ++D > 200 && (it = !1);
	          }for (N = {}, T = h = 0, F = n - 1; 0 <= F ? h <= F : h >= F; T = 0 <= F ? ++h : --h) {
	            N[T] = [];
	          }for (k = d = 0, I = j - 1; 0 <= I ? d <= I : d >= I; k = 0 <= I ? ++d : --d) {
	            N[v = g[k]].push(ut[k]);
	          }for (at = [], T = b = 0, H = n - 1; 0 <= H ? b <= H : b >= H; T = 0 <= H ? ++b : --b) {
	            at.push(N[T][0]), at.push(N[T][N[T].length - 1]);
	          }for (at = at.sort(function (t, e) {
	            return t - e;
	          }), A.push(at[0]), k = _ = 1, X = at.length - 1; _ <= X; k = _ += 2) {
	            ft = at[k], isNaN(ft) || -1 !== A.indexOf(ft) || A.push(ft);
	          }
	        }return A;
	      }, j = function j(t, e, n) {
	        var r, i, a, f;return t = (r = Tt(arguments))[0], e = r[1], n = r[2], isNaN(t) && (t = 0), (t /= 360) < 1 / 3 ? a = 1 - ((i = (1 - e) / 3) + (f = (1 + e * T(o * t) / T(c - o * t)) / 3)) : t < 2 / 3 ? i = 1 - ((f = (1 - e) / 3) + (a = (1 + e * T(o * (t -= 1 / 3)) / T(c - o * t)) / 3)) : f = 1 - ((a = (1 - e) / 3) + (i = (1 + e * T(o * (t -= 2 / 3)) / T(c - o * t)) / 3)), [255 * (f = Z(n * f * 3)), 255 * (a = Z(n * a * 3)), 255 * (i = Z(n * i * 3)), r.length > 3 ? r[3] : 1];
	      }, ut = function ut() {
	        var t, e, n, r, i, a, f;return i = (a = Tt(arguments))[0], e = a[1], t = a[2], o = 2 * Math.PI, i /= 255, e /= 255, t /= 255, 0 === (f = 1 - Math.min(i, e, t) / (r = (i + e + t) / 3)) ? n = 0 : (n = (i - e + (i - t)) / 2, n /= Math.sqrt((i - e) * (i - e) + (i - t) * (e - t)), n = Math.acos(n), t > e && (n = o - n), n /= o), [360 * n, f, r];
	      }, w.hsi = function () {
	        return function (t, e, n) {
	          n.prototype = t.prototype;var r = new n(),
	              i = t.apply(r, e);return Object(i) === i ? i : r;
	        }(r, Ct.call(arguments).concat(["hsi"]), function () {});
	      }, d.hsi = j, r.prototype.hsi = function () {
	        return ut(this._rgb);
	      }, B = function B(t, e, n, r) {
	        var i, a, f, c, u, o, s, l, h, d;return "hsl" === r ? (h = t.hsl(), d = e.hsl()) : "hsv" === r ? (h = t.hsv(), d = e.hsv()) : "hcg" === r ? (h = t.hcg(), d = e.hcg()) : "hsi" === r ? (h = t.hsi(), d = e.hsi()) : "lch" !== r && "hcl" !== r || (r = "hcl", h = t.hcl(), d = e.hcl()), "h" === r.substr(0, 1) && (a = h[0], s = h[1], c = h[2], f = d[0], l = d[1], u = d[2]), isNaN(a) || isNaN(f) ? isNaN(a) ? isNaN(f) ? i = Number.NaN : (i = f, 1 !== c && 0 !== c || "hsv" === r || (o = l)) : (i = a, 1 !== u && 0 !== u || "hsv" === r || (o = s)) : i = a + n * (f > a && f - a > 180 ? f - (a + 360) : f < a && a - f > 180 ? f + 360 - a : f - a), null == o && (o = s + n * (l - s)), w[r](i, o, c + n * (u - c));
	      }, G = function G(t, e, n, r) {
	        var i, a;return i = t.num(), a = e.num(), w.num(i + (a - i) * n, "num");
	      }, (b = b.concat(function () {
	        var t, e, n, r;for (r = [], e = 0, t = (n = ["hsv", "hsl", "hsi", "hcl", "lch", "hcg"]).length; e < t; e++) {
	          J = n[e], r.push([J, B]);
	        }return r;
	      }())).push(["num", G]), q = function q(t, e, n, i) {
	        var a, f;return a = t.lab(), f = e.lab(), new r(a[0] + n * (f[0] - a[0]), a[1] + n * (f[1] - a[1]), a[2] + n * (f[2] - a[2]), i);
	      }, b.push(["lab", q]);
	    }).call(this);
	  }).call(this, n(14)(t));
	}, function (t, e, n) {
	  "use strict";
	  n.r(e);var r = Array.prototype.slice,
	      i = function i(t) {
	    return t;
	  },
	      a = 1,
	      f = 2,
	      c = 3,
	      u = 4,
	      o = 1e-6;function s(t) {
	    return "translate(" + (t + .5) + ",0)";
	  }function l(t) {
	    return "translate(0," + (t + .5) + ")";
	  }function h() {
	    return !this.__axis;
	  }function d(t, e) {
	    var n = [],
	        d = null,
	        b = null,
	        p = 6,
	        _ = 6,
	        g = 3,
	        y = t === a || t === u ? -1 : 1,
	        m = t === u || t === f ? "x" : "y",
	        v = t === a || t === c ? s : l;function x(r) {
	      var s = null == d ? e.ticks ? e.ticks.apply(e, n) : e.domain() : d,
	          l = null == b ? e.tickFormat ? e.tickFormat.apply(e, n) : i : b,
	          x = Math.max(p, 0) + g,
	          w = e.range(),
	          M = +w[0] + .5,
	          k = +w[w.length - 1] + .5,
	          T = (e.bandwidth ? function (t) {
	        var e = Math.max(0, t.bandwidth() - 1) / 2;return t.round() && (e = Math.round(e)), function (n) {
	          return +t(n) + e;
	        };
	      } : function (t) {
	        return function (e) {
	          return +t(e);
	        };
	      })(e.copy()),
	          N = r.selection ? r.selection() : r,
	          A = N.selectAll(".domain").data([null]),
	          E = N.selectAll(".tick").data(s, e).order(),
	          C = E.exit(),
	          O = E.enter().append("g").attr("class", "tick"),
	          S = E.select("line"),
	          P = E.select("text");A = A.merge(A.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "#000")), E = E.merge(O), S = S.merge(O.append("line").attr("stroke", "#000").attr(m + "2", y * p)), P = P.merge(O.append("text").attr("fill", "#000").attr(m, y * x).attr("dy", t === a ? "0em" : t === c ? "0.71em" : "0.32em")), r !== N && (A = A.transition(r), E = E.transition(r), S = S.transition(r), P = P.transition(r), C = C.transition(r).attr("opacity", o).attr("transform", function (t) {
	        return isFinite(t = T(t)) ? v(t) : this.getAttribute("transform");
	      }), O.attr("opacity", o).attr("transform", function (t) {
	        var e = this.parentNode.__axis;return v(e && isFinite(e = e(t)) ? e : T(t));
	      })), C.remove(), A.attr("d", t === u || t == f ? "M" + y * _ + "," + M + "H0.5V" + k + "H" + y * _ : "M" + M + "," + y * _ + "V0.5H" + k + "V" + y * _), E.attr("opacity", 1).attr("transform", function (t) {
	        return v(T(t));
	      }), S.attr(m + "2", y * p), P.attr(m, y * x).text(l), N.filter(h).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === f ? "start" : t === u ? "end" : "middle"), N.each(function () {
	        this.__axis = T;
	      });
	    }return x.scale = function (t) {
	      return arguments.length ? (e = t, x) : e;
	    }, x.ticks = function () {
	      return n = r.call(arguments), x;
	    }, x.tickArguments = function (t) {
	      return arguments.length ? (n = null == t ? [] : r.call(t), x) : n.slice();
	    }, x.tickValues = function (t) {
	      return arguments.length ? (d = null == t ? null : r.call(t), x) : d && d.slice();
	    }, x.tickFormat = function (t) {
	      return arguments.length ? (b = t, x) : b;
	    }, x.tickSize = function (t) {
	      return arguments.length ? (p = _ = +t, x) : p;
	    }, x.tickSizeInner = function (t) {
	      return arguments.length ? (p = +t, x) : p;
	    }, x.tickSizeOuter = function (t) {
	      return arguments.length ? (_ = +t, x) : _;
	    }, x.tickPadding = function (t) {
	      return arguments.length ? (g = +t, x) : g;
	    }, x;
	  }function b(t) {
	    return d(a, t);
	  }function p(t) {
	    return d(f, t);
	  }function _(t) {
	    return d(c, t);
	  }function g(t) {
	    return d(u, t);
	  }n.d(e, "axisTop", function () {
	    return b;
	  }), n.d(e, "axisRight", function () {
	    return p;
	  }), n.d(e, "axisBottom", function () {
	    return _;
	  }), n.d(e, "axisLeft", function () {
	    return g;
	  });
	}, function (t, e, n) {
	  "use strict";
	  n.r(e);var r = function r(t) {
	    for (var e = t.length / 6 | 0, n = new Array(e), r = 0; r < e;) {
	      n[r] = "#" + t.slice(6 * r, 6 * ++r);
	    }return n;
	  },
	      i = r("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
	      a = r("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"),
	      f = r("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"),
	      c = r("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"),
	      u = r("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"),
	      o = r("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"),
	      s = r("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"),
	      l = r("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"),
	      h = r("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"),
	      d = n(1),
	      b = function b(t) {
	    return Object(d.d)(t[t.length - 1]);
	  },
	      p = new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(r),
	      _ = b(p),
	      g = new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(r),
	      y = b(g),
	      m = new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(r),
	      v = b(m),
	      x = new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(r),
	      w = b(x),
	      M = new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(r),
	      k = b(M),
	      T = new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(r),
	      N = b(T),
	      A = new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(r),
	      E = b(A),
	      C = new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(r),
	      O = b(C),
	      S = new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(r),
	      P = b(S),
	      j = new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(r),
	      D = b(j),
	      R = new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(r),
	      U = b(R),
	      Y = new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(r),
	      B = b(Y),
	      q = new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(r),
	      L = b(q),
	      G = new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(r),
	      z = b(G),
	      F = new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(r),
	      I = b(F),
	      H = new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(r),
	      X = b(H),
	      V = new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(r),
	      $ = b(V),
	      Z = new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(r),
	      W = b(Z),
	      Q = new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(r),
	      J = b(Q),
	      K = new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(r),
	      tt = b(K),
	      et = new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(r),
	      nt = b(et),
	      rt = new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(r),
	      it = b(rt),
	      at = new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(r),
	      ft = b(at),
	      ct = new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(r),
	      ut = b(ct),
	      ot = new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(r),
	      st = b(ot),
	      lt = new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(r),
	      ht = b(lt),
	      dt = new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(r),
	      bt = b(dt),
	      pt = n(0),
	      _t = Object(d.b)(Object(pt.cubehelix)(300, .5, 0), Object(pt.cubehelix)(-240, .5, 1)),
	      gt = Object(d.b)(Object(pt.cubehelix)(-100, .75, .35), Object(pt.cubehelix)(80, 1.5, .8)),
	      yt = Object(d.b)(Object(pt.cubehelix)(260, .75, .35), Object(pt.cubehelix)(80, 1.5, .8)),
	      mt = Object(pt.cubehelix)(),
	      vt = function vt(t) {
	    (t < 0 || t > 1) && (t -= Math.floor(t));var e = Math.abs(t - .5);return mt.h = 360 * t - 100, mt.s = 1.5 - 1.5 * e, mt.l = .8 - .9 * e, mt + "";
	  };function xt(t) {
	    var e = t.length;return function (n) {
	      return t[Math.max(0, Math.min(e - 1, Math.floor(n * e)))];
	    };
	  }var wt = xt(r("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),
	      Mt = xt(r("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),
	      kt = xt(r("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),
	      Tt = xt(r("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));n.d(e, "schemeCategory10", function () {
	    return i;
	  }), n.d(e, "schemeAccent", function () {
	    return a;
	  }), n.d(e, "schemeDark2", function () {
	    return f;
	  }), n.d(e, "schemePaired", function () {
	    return c;
	  }), n.d(e, "schemePastel1", function () {
	    return u;
	  }), n.d(e, "schemePastel2", function () {
	    return o;
	  }), n.d(e, "schemeSet1", function () {
	    return s;
	  }), n.d(e, "schemeSet2", function () {
	    return l;
	  }), n.d(e, "schemeSet3", function () {
	    return h;
	  }), n.d(e, "interpolateBrBG", function () {
	    return _;
	  }), n.d(e, "schemeBrBG", function () {
	    return p;
	  }), n.d(e, "interpolatePRGn", function () {
	    return y;
	  }), n.d(e, "schemePRGn", function () {
	    return g;
	  }), n.d(e, "interpolatePiYG", function () {
	    return v;
	  }), n.d(e, "schemePiYG", function () {
	    return m;
	  }), n.d(e, "interpolatePuOr", function () {
	    return w;
	  }), n.d(e, "schemePuOr", function () {
	    return x;
	  }), n.d(e, "interpolateRdBu", function () {
	    return k;
	  }), n.d(e, "schemeRdBu", function () {
	    return M;
	  }), n.d(e, "interpolateRdGy", function () {
	    return N;
	  }), n.d(e, "schemeRdGy", function () {
	    return T;
	  }), n.d(e, "interpolateRdYlBu", function () {
	    return E;
	  }), n.d(e, "schemeRdYlBu", function () {
	    return A;
	  }), n.d(e, "interpolateRdYlGn", function () {
	    return O;
	  }), n.d(e, "schemeRdYlGn", function () {
	    return C;
	  }), n.d(e, "interpolateSpectral", function () {
	    return P;
	  }), n.d(e, "schemeSpectral", function () {
	    return S;
	  }), n.d(e, "interpolateBuGn", function () {
	    return D;
	  }), n.d(e, "schemeBuGn", function () {
	    return j;
	  }), n.d(e, "interpolateBuPu", function () {
	    return U;
	  }), n.d(e, "schemeBuPu", function () {
	    return R;
	  }), n.d(e, "interpolateGnBu", function () {
	    return B;
	  }), n.d(e, "schemeGnBu", function () {
	    return Y;
	  }), n.d(e, "interpolateOrRd", function () {
	    return L;
	  }), n.d(e, "schemeOrRd", function () {
	    return q;
	  }), n.d(e, "interpolatePuBuGn", function () {
	    return z;
	  }), n.d(e, "schemePuBuGn", function () {
	    return G;
	  }), n.d(e, "interpolatePuBu", function () {
	    return I;
	  }), n.d(e, "schemePuBu", function () {
	    return F;
	  }), n.d(e, "interpolatePuRd", function () {
	    return X;
	  }), n.d(e, "schemePuRd", function () {
	    return H;
	  }), n.d(e, "interpolateRdPu", function () {
	    return $;
	  }), n.d(e, "schemeRdPu", function () {
	    return V;
	  }), n.d(e, "interpolateYlGnBu", function () {
	    return W;
	  }), n.d(e, "schemeYlGnBu", function () {
	    return Z;
	  }), n.d(e, "interpolateYlGn", function () {
	    return J;
	  }), n.d(e, "schemeYlGn", function () {
	    return Q;
	  }), n.d(e, "interpolateYlOrBr", function () {
	    return tt;
	  }), n.d(e, "schemeYlOrBr", function () {
	    return K;
	  }), n.d(e, "interpolateYlOrRd", function () {
	    return nt;
	  }), n.d(e, "schemeYlOrRd", function () {
	    return et;
	  }), n.d(e, "interpolateBlues", function () {
	    return it;
	  }), n.d(e, "schemeBlues", function () {
	    return rt;
	  }), n.d(e, "interpolateGreens", function () {
	    return ft;
	  }), n.d(e, "schemeGreens", function () {
	    return at;
	  }), n.d(e, "interpolateGreys", function () {
	    return ut;
	  }), n.d(e, "schemeGreys", function () {
	    return ct;
	  }), n.d(e, "interpolatePurples", function () {
	    return st;
	  }), n.d(e, "schemePurples", function () {
	    return ot;
	  }), n.d(e, "interpolateReds", function () {
	    return ht;
	  }), n.d(e, "schemeReds", function () {
	    return lt;
	  }), n.d(e, "interpolateOranges", function () {
	    return bt;
	  }), n.d(e, "schemeOranges", function () {
	    return dt;
	  }), n.d(e, "interpolateCubehelixDefault", function () {
	    return _t;
	  }), n.d(e, "interpolateRainbow", function () {
	    return vt;
	  }), n.d(e, "interpolateWarm", function () {
	    return gt;
	  }), n.d(e, "interpolateCool", function () {
	    return yt;
	  }), n.d(e, "interpolateViridis", function () {
	    return wt;
	  }), n.d(e, "interpolateMagma", function () {
	    return Mt;
	  }), n.d(e, "interpolateInferno", function () {
	    return kt;
	  }), n.d(e, "interpolatePlasma", function () {
	    return Tt;
	  });
	}, function (t, e, n) {
	  "use strict";
	  n.r(e);var r = "http://www.w3.org/1999/xhtml",
	      i = { svg: "http://www.w3.org/2000/svg", xhtml: r, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" },
	      a = function a(t) {
	    var e = t += "",
	        n = e.indexOf(":");return n >= 0 && "xmlns" !== (e = t.slice(0, n)) && (t = t.slice(n + 1)), i.hasOwnProperty(e) ? { space: i[e], local: t } : t;
	  };var f = function f(t) {
	    var e = a(t);return (e.local ? function (t) {
	      return function () {
	        return this.ownerDocument.createElementNS(t.space, t.local);
	      };
	    } : function (t) {
	      return function () {
	        var e = this.ownerDocument,
	            n = this.namespaceURI;return n === r && e.documentElement.namespaceURI === r ? e.createElement(t) : e.createElementNS(n, t);
	      };
	    })(e);
	  };function c() {}var u = function u(t) {
	    return null == t ? c : function () {
	      return this.querySelector(t);
	    };
	  };function o() {
	    return [];
	  }var s = function s(t) {
	    return null == t ? o : function () {
	      return this.querySelectorAll(t);
	    };
	  },
	      l = function l(t) {
	    return function () {
	      return this.matches(t);
	    };
	  };if ("undefined" != typeof document) {
	    var h = document.documentElement;if (!h.matches) {
	      var d = h.webkitMatchesSelector || h.msMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector;l = function l(t) {
	        return function () {
	          return d.call(this, t);
	        };
	      };
	    }
	  }var b = l,
	      p = function p(t) {
	    return new Array(t.length);
	  };function _(t, e) {
	    this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
	  }_.prototype = { constructor: _, appendChild: function appendChild(t) {
	      return this._parent.insertBefore(t, this._next);
	    }, insertBefore: function insertBefore(t, e) {
	      return this._parent.insertBefore(t, e);
	    }, querySelector: function querySelector(t) {
	      return this._parent.querySelector(t);
	    }, querySelectorAll: function querySelectorAll(t) {
	      return this._parent.querySelectorAll(t);
	    } };var g = "$";function y(t, e, n, r, i, a) {
	    for (var f, c = 0, u = e.length, o = a.length; c < o; ++c) {
	      (f = e[c]) ? (f.__data__ = a[c], r[c] = f) : n[c] = new _(t, a[c]);
	    }for (; c < u; ++c) {
	      (f = e[c]) && (i[c] = f);
	    }
	  }function m(t, e, n, r, i, a, f) {
	    var c,
	        u,
	        o,
	        s = {},
	        l = e.length,
	        h = a.length,
	        d = new Array(l);for (c = 0; c < l; ++c) {
	      (u = e[c]) && (d[c] = o = g + f.call(u, u.__data__, c, e), o in s ? i[c] = u : s[o] = u);
	    }for (c = 0; c < h; ++c) {
	      (u = s[o = g + f.call(t, a[c], c, a)]) ? (r[c] = u, u.__data__ = a[c], s[o] = null) : n[c] = new _(t, a[c]);
	    }for (c = 0; c < l; ++c) {
	      (u = e[c]) && s[d[c]] === u && (i[c] = u);
	    }
	  }function v(t, e) {
	    return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
	  }var x = function x(t) {
	    return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
	  };function w(t, e) {
	    return t.style.getPropertyValue(e) || x(t).getComputedStyle(t, null).getPropertyValue(e);
	  }function M(t) {
	    return t.trim().split(/^|\s+/);
	  }function k(t) {
	    return t.classList || new T(t);
	  }function T(t) {
	    this._node = t, this._names = M(t.getAttribute("class") || "");
	  }function N(t, e) {
	    for (var n = k(t), r = -1, i = e.length; ++r < i;) {
	      n.add(e[r]);
	    }
	  }function A(t, e) {
	    for (var n = k(t), r = -1, i = e.length; ++r < i;) {
	      n.remove(e[r]);
	    }
	  }T.prototype = { add: function add(t) {
	      this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
	    }, remove: function remove(t) {
	      var e = this._names.indexOf(t);e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
	    }, contains: function contains(t) {
	      return this._names.indexOf(t) >= 0;
	    } };function E() {
	    this.textContent = "";
	  }function C() {
	    this.innerHTML = "";
	  }function O() {
	    this.nextSibling && this.parentNode.appendChild(this);
	  }function S() {
	    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
	  }function P() {
	    return null;
	  }function j() {
	    var t = this.parentNode;t && t.removeChild(this);
	  }function D() {
	    return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling);
	  }function R() {
	    return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling);
	  }var U = {},
	      Y = null;"undefined" != typeof document && ("onmouseenter" in document.documentElement || (U = { mouseenter: "mouseover", mouseleave: "mouseout" }));function B(t, e, n) {
	    return t = q(t, e, n), function (e) {
	      var n = e.relatedTarget;n && (n === this || 8 & n.compareDocumentPosition(this)) || t.call(this, e);
	    };
	  }function q(t, e, n) {
	    return function (r) {
	      var i = Y;Y = r;try {
	        t.call(this, this.__data__, e, n);
	      } finally {
	        Y = i;
	      }
	    };
	  }function L(t) {
	    return function () {
	      var e = this.__on;if (e) {
	        for (var n, r = 0, i = -1, a = e.length; r < a; ++r) {
	          n = e[r], t.type && n.type !== t.type || n.name !== t.name ? e[++i] = n : this.removeEventListener(n.type, n.listener, n.capture);
	        }++i ? e.length = i : delete this.__on;
	      }
	    };
	  }function G(t, e, n) {
	    var r = U.hasOwnProperty(t.type) ? B : q;return function (i, a, f) {
	      var c,
	          u = this.__on,
	          o = r(e, a, f);if (u) for (var s = 0, l = u.length; s < l; ++s) {
	        if ((c = u[s]).type === t.type && c.name === t.name) return this.removeEventListener(c.type, c.listener, c.capture), this.addEventListener(c.type, c.listener = o, c.capture = n), void (c.value = e);
	      }this.addEventListener(t.type, o, n), c = { type: t.type, name: t.name, value: e, listener: o, capture: n }, u ? u.push(c) : this.__on = [c];
	    };
	  }function z(t, e, n, r) {
	    var i = Y;t.sourceEvent = Y, Y = t;try {
	      return e.apply(n, r);
	    } finally {
	      Y = i;
	    }
	  }function F(t, e, n) {
	    var r = x(t),
	        i = r.CustomEvent;"function" == typeof i ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
	  }var I = [null];function H(t, e) {
	    this._groups = t, this._parents = e;
	  }function X() {
	    return new H([[document.documentElement]], I);
	  }H.prototype = X.prototype = { constructor: H, select: function select(t) {
	      "function" != typeof t && (t = u(t));for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i) {
	        for (var a, f, c = e[i], o = c.length, s = r[i] = new Array(o), l = 0; l < o; ++l) {
	          (a = c[l]) && (f = t.call(a, a.__data__, l, c)) && ("__data__" in a && (f.__data__ = a.__data__), s[l] = f);
	        }
	      }return new H(r, this._parents);
	    }, selectAll: function selectAll(t) {
	      "function" != typeof t && (t = s(t));for (var e = this._groups, n = e.length, r = [], i = [], a = 0; a < n; ++a) {
	        for (var f, c = e[a], u = c.length, o = 0; o < u; ++o) {
	          (f = c[o]) && (r.push(t.call(f, f.__data__, o, c)), i.push(f));
	        }
	      }return new H(r, i);
	    }, filter: function filter(t) {
	      "function" != typeof t && (t = b(t));for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i) {
	        for (var a, f = e[i], c = f.length, u = r[i] = [], o = 0; o < c; ++o) {
	          (a = f[o]) && t.call(a, a.__data__, o, f) && u.push(a);
	        }
	      }return new H(r, this._parents);
	    }, data: function data(t, e) {
	      if (!t) return b = new Array(this.size()), s = -1, this.each(function (t) {
	        b[++s] = t;
	      }), b;var n,
	          r = e ? m : y,
	          i = this._parents,
	          a = this._groups;"function" != typeof t && (n = t, t = function t() {
	        return n;
	      });for (var f = a.length, c = new Array(f), u = new Array(f), o = new Array(f), s = 0; s < f; ++s) {
	        var l = i[s],
	            h = a[s],
	            d = h.length,
	            b = t.call(l, l && l.__data__, s, i),
	            p = b.length,
	            _ = u[s] = new Array(p),
	            g = c[s] = new Array(p);r(l, h, _, g, o[s] = new Array(d), b, e);for (var v, x, w = 0, M = 0; w < p; ++w) {
	          if (v = _[w]) {
	            for (w >= M && (M = w + 1); !(x = g[M]) && ++M < p;) {}v._next = x || null;
	          }
	        }
	      }return (c = new H(c, i))._enter = u, c._exit = o, c;
	    }, enter: function enter() {
	      return new H(this._enter || this._groups.map(p), this._parents);
	    }, exit: function exit() {
	      return new H(this._exit || this._groups.map(p), this._parents);
	    }, merge: function merge(t) {
	      for (var e = this._groups, n = t._groups, r = e.length, i = n.length, a = Math.min(r, i), f = new Array(r), c = 0; c < a; ++c) {
	        for (var u, o = e[c], s = n[c], l = o.length, h = f[c] = new Array(l), d = 0; d < l; ++d) {
	          (u = o[d] || s[d]) && (h[d] = u);
	        }
	      }for (; c < r; ++c) {
	        f[c] = e[c];
	      }return new H(f, this._parents);
	    }, order: function order() {
	      for (var t = this._groups, e = -1, n = t.length; ++e < n;) {
	        for (var r, i = t[e], a = i.length - 1, f = i[a]; --a >= 0;) {
	          (r = i[a]) && (f && f !== r.nextSibling && f.parentNode.insertBefore(r, f), f = r);
	        }
	      }return this;
	    }, sort: function sort(t) {
	      function e(e, n) {
	        return e && n ? t(e.__data__, n.__data__) : !e - !n;
	      }t || (t = v);for (var n = this._groups, r = n.length, i = new Array(r), a = 0; a < r; ++a) {
	        for (var f, c = n[a], u = c.length, o = i[a] = new Array(u), s = 0; s < u; ++s) {
	          (f = c[s]) && (o[s] = f);
	        }o.sort(e);
	      }return new H(i, this._parents).order();
	    }, call: function call() {
	      var t = arguments[0];return arguments[0] = this, t.apply(null, arguments), this;
	    }, nodes: function nodes() {
	      var t = new Array(this.size()),
	          e = -1;return this.each(function () {
	        t[++e] = this;
	      }), t;
	    }, node: function node() {
	      for (var t = this._groups, e = 0, n = t.length; e < n; ++e) {
	        for (var r = t[e], i = 0, a = r.length; i < a; ++i) {
	          var f = r[i];if (f) return f;
	        }
	      }return null;
	    }, size: function size() {
	      var t = 0;return this.each(function () {
	        ++t;
	      }), t;
	    }, empty: function empty() {
	      return !this.node();
	    }, each: function each(t) {
	      for (var e = this._groups, n = 0, r = e.length; n < r; ++n) {
	        for (var i, a = e[n], f = 0, c = a.length; f < c; ++f) {
	          (i = a[f]) && t.call(i, i.__data__, f, a);
	        }
	      }return this;
	    }, attr: function attr(t, e) {
	      var n = a(t);if (arguments.length < 2) {
	        var r = this.node();return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
	      }return this.each((null == e ? n.local ? function (t) {
	        return function () {
	          this.removeAttributeNS(t.space, t.local);
	        };
	      } : function (t) {
	        return function () {
	          this.removeAttribute(t);
	        };
	      } : "function" == typeof e ? n.local ? function (t, e) {
	        return function () {
	          var n = e.apply(this, arguments);null == n ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
	        };
	      } : function (t, e) {
	        return function () {
	          var n = e.apply(this, arguments);null == n ? this.removeAttribute(t) : this.setAttribute(t, n);
	        };
	      } : n.local ? function (t, e) {
	        return function () {
	          this.setAttributeNS(t.space, t.local, e);
	        };
	      } : function (t, e) {
	        return function () {
	          this.setAttribute(t, e);
	        };
	      })(n, e));
	    }, style: function style(t, e, n) {
	      return arguments.length > 1 ? this.each((null == e ? function (t) {
	        return function () {
	          this.style.removeProperty(t);
	        };
	      } : "function" == typeof e ? function (t, e, n) {
	        return function () {
	          var r = e.apply(this, arguments);null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
	        };
	      } : function (t, e, n) {
	        return function () {
	          this.style.setProperty(t, e, n);
	        };
	      })(t, e, null == n ? "" : n)) : w(this.node(), t);
	    }, property: function property(t, e) {
	      return arguments.length > 1 ? this.each((null == e ? function (t) {
	        return function () {
	          delete this[t];
	        };
	      } : "function" == typeof e ? function (t, e) {
	        return function () {
	          var n = e.apply(this, arguments);null == n ? delete this[t] : this[t] = n;
	        };
	      } : function (t, e) {
	        return function () {
	          this[t] = e;
	        };
	      })(t, e)) : this.node()[t];
	    }, classed: function classed(t, e) {
	      var n = M(t + "");if (arguments.length < 2) {
	        for (var r = k(this.node()), i = -1, a = n.length; ++i < a;) {
	          if (!r.contains(n[i])) return !1;
	        }return !0;
	      }return this.each(("function" == typeof e ? function (t, e) {
	        return function () {
	          (e.apply(this, arguments) ? N : A)(this, t);
	        };
	      } : e ? function (t) {
	        return function () {
	          N(this, t);
	        };
	      } : function (t) {
	        return function () {
	          A(this, t);
	        };
	      })(n, e));
	    }, text: function text(t) {
	      return arguments.length ? this.each(null == t ? E : ("function" == typeof t ? function (t) {
	        return function () {
	          var e = t.apply(this, arguments);this.textContent = null == e ? "" : e;
	        };
	      } : function (t) {
	        return function () {
	          this.textContent = t;
	        };
	      })(t)) : this.node().textContent;
	    }, html: function html(t) {
	      return arguments.length ? this.each(null == t ? C : ("function" == typeof t ? function (t) {
	        return function () {
	          var e = t.apply(this, arguments);this.innerHTML = null == e ? "" : e;
	        };
	      } : function (t) {
	        return function () {
	          this.innerHTML = t;
	        };
	      })(t)) : this.node().innerHTML;
	    }, raise: function raise() {
	      return this.each(O);
	    }, lower: function lower() {
	      return this.each(S);
	    }, append: function append(t) {
	      var e = "function" == typeof t ? t : f(t);return this.select(function () {
	        return this.appendChild(e.apply(this, arguments));
	      });
	    }, insert: function insert(t, e) {
	      var n = "function" == typeof t ? t : f(t),
	          r = null == e ? P : "function" == typeof e ? e : u(e);return this.select(function () {
	        return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
	      });
	    }, remove: function remove() {
	      return this.each(j);
	    }, clone: function clone(t) {
	      return this.select(t ? R : D);
	    }, datum: function datum(t) {
	      return arguments.length ? this.property("__data__", t) : this.node().__data__;
	    }, on: function on(t, e, n) {
	      var r,
	          i,
	          a = function (t) {
	        return t.trim().split(/^|\s+/).map(function (t) {
	          var e = "",
	              n = t.indexOf(".");return n >= 0 && (e = t.slice(n + 1), t = t.slice(0, n)), { type: t, name: e };
	        });
	      }(t + ""),
	          f = a.length;if (!(arguments.length < 2)) {
	        for (c = e ? G : L, null == n && (n = !1), r = 0; r < f; ++r) {
	          this.each(c(a[r], e, n));
	        }return this;
	      }var c = this.node().__on;if (c) for (var u, o = 0, s = c.length; o < s; ++o) {
	        for (r = 0, u = c[o]; r < f; ++r) {
	          if ((i = a[r]).type === u.type && i.name === u.name) return u.value;
	        }
	      }
	    }, dispatch: function dispatch(t, e) {
	      return this.each(("function" == typeof e ? function (t, e) {
	        return function () {
	          return F(this, t, e.apply(this, arguments));
	        };
	      } : function (t, e) {
	        return function () {
	          return F(this, t, e);
	        };
	      })(t, e));
	    } };var V = X,
	      $ = function $(t) {
	    return "string" == typeof t ? new H([[document.querySelector(t)]], [document.documentElement]) : new H([[t]], I);
	  },
	      Z = function Z(t) {
	    return $(f(t).call(document.documentElement));
	  },
	      W = 0;function Q() {
	    return new J();
	  }function J() {
	    this._ = "@" + (++W).toString(36);
	  }J.prototype = Q.prototype = { constructor: J, get: function get(t) {
	      for (var e = this._; !(e in t);) {
	        if (!(t = t.parentNode)) return;
	      }return t[e];
	    }, set: function set(t, e) {
	      return t[this._] = e;
	    }, remove: function remove(t) {
	      return this._ in t && delete t[this._];
	    }, toString: function toString() {
	      return this._;
	    } };var K = function K() {
	    for (var t, e = Y; t = e.sourceEvent;) {
	      e = t;
	    }return e;
	  },
	      tt = function tt(t, e) {
	    var n = t.ownerSVGElement || t;if (n.createSVGPoint) {
	      var r = n.createSVGPoint();return r.x = e.clientX, r.y = e.clientY, [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y];
	    }var i = t.getBoundingClientRect();return [e.clientX - i.left - t.clientLeft, e.clientY - i.top - t.clientTop];
	  },
	      et = function et(t) {
	    var e = K();return e.changedTouches && (e = e.changedTouches[0]), tt(t, e);
	  },
	      nt = function nt(t) {
	    return "string" == typeof t ? new H([document.querySelectorAll(t)], [document.documentElement]) : new H([null == t ? [] : t], I);
	  },
	      rt = function rt(t, e, n) {
	    arguments.length < 3 && (n = e, e = K().changedTouches);for (var r, i = 0, a = e ? e.length : 0; i < a; ++i) {
	      if ((r = e[i]).identifier === n) return tt(t, r);
	    }return null;
	  },
	      it = function it(t, e) {
	    null == e && (e = K().touches);for (var n = 0, r = e ? e.length : 0, i = new Array(r); n < r; ++n) {
	      i[n] = tt(t, e[n]);
	    }return i;
	  };n.d(e, "create", function () {
	    return Z;
	  }), n.d(e, "creator", function () {
	    return f;
	  }), n.d(e, "local", function () {
	    return Q;
	  }), n.d(e, "matcher", function () {
	    return b;
	  }), n.d(e, "mouse", function () {
	    return et;
	  }), n.d(e, "namespace", function () {
	    return a;
	  }), n.d(e, "namespaces", function () {
	    return i;
	  }), n.d(e, "clientPoint", function () {
	    return tt;
	  }), n.d(e, "select", function () {
	    return $;
	  }), n.d(e, "selectAll", function () {
	    return nt;
	  }), n.d(e, "selection", function () {
	    return V;
	  }), n.d(e, "selector", function () {
	    return u;
	  }), n.d(e, "selectorAll", function () {
	    return s;
	  }), n.d(e, "style", function () {
	    return w;
	  }), n.d(e, "touch", function () {
	    return rt;
	  }), n.d(e, "touches", function () {
	    return it;
	  }), n.d(e, "window", function () {
	    return x;
	  }), n.d(e, "event", function () {
	    return Y;
	  }), n.d(e, "customEvent", function () {
	    return z;
	  });
	}, function (t, e, n) {
	  "use strict";
	  n.r(e);var r = Math.PI,
	      i = 2 * r,
	      a = i - 1e-6;function f() {
	    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
	  }function c() {
	    return new f();
	  }f.prototype = c.prototype = { constructor: f, moveTo: function moveTo(t, e) {
	      this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e);
	    }, closePath: function closePath() {
	      null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
	    }, lineTo: function lineTo(t, e) {
	      this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +e);
	    }, quadraticCurveTo: function quadraticCurveTo(t, e, n, r) {
	      this._ += "Q" + +t + "," + +e + "," + (this._x1 = +n) + "," + (this._y1 = +r);
	    }, bezierCurveTo: function bezierCurveTo(t, e, n, r, i, a) {
	      this._ += "C" + +t + "," + +e + "," + +n + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +a);
	    }, arcTo: function arcTo(t, e, n, i, a) {
	      t = +t, e = +e, n = +n, i = +i, a = +a;var f = this._x1,
	          c = this._y1,
	          u = n - t,
	          o = i - e,
	          s = f - t,
	          l = c - e,
	          h = s * s + l * l;if (a < 0) throw new Error("negative radius: " + a);if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = e);else if (h > 1e-6) {
	        if (Math.abs(l * u - o * s) > 1e-6 && a) {
	          var d = n - f,
	              b = i - c,
	              p = u * u + o * o,
	              _ = d * d + b * b,
	              g = Math.sqrt(p),
	              y = Math.sqrt(h),
	              m = a * Math.tan((r - Math.acos((p + h - _) / (2 * g * y))) / 2),
	              v = m / y,
	              x = m / g;Math.abs(v - 1) > 1e-6 && (this._ += "L" + (t + v * s) + "," + (e + v * l)), this._ += "A" + a + "," + a + ",0,0," + +(l * d > s * b) + "," + (this._x1 = t + x * u) + "," + (this._y1 = e + x * o);
	        } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = e);
	      } else ;
	    }, arc: function arc(t, e, n, f, c, u) {
	      t = +t, e = +e;var o = (n = +n) * Math.cos(f),
	          s = n * Math.sin(f),
	          l = t + o,
	          h = e + s,
	          d = 1 ^ u,
	          b = u ? f - c : c - f;if (n < 0) throw new Error("negative radius: " + n);null === this._x1 ? this._ += "M" + l + "," + h : (Math.abs(this._x1 - l) > 1e-6 || Math.abs(this._y1 - h) > 1e-6) && (this._ += "L" + l + "," + h), n && (b < 0 && (b = b % i + i), b > a ? this._ += "A" + n + "," + n + ",0,1," + d + "," + (t - o) + "," + (e - s) + "A" + n + "," + n + ",0,1," + d + "," + (this._x1 = l) + "," + (this._y1 = h) : b > 1e-6 && (this._ += "A" + n + "," + n + ",0," + +(b >= r) + "," + d + "," + (this._x1 = t + n * Math.cos(c)) + "," + (this._y1 = e + n * Math.sin(c))));
	    }, rect: function rect(t, e, n, r) {
	      this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e) + "h" + +n + "v" + +r + "h" + -n + "Z";
	    }, toString: function toString() {
	      return this._;
	    } };var u = c,
	      o = function o(t) {
	    return function () {
	      return t;
	    };
	  },
	      s = Math.abs,
	      l = Math.atan2,
	      h = Math.cos,
	      d = Math.max,
	      b = Math.min,
	      p = Math.sin,
	      _ = Math.sqrt,
	      g = 1e-12,
	      y = Math.PI,
	      m = y / 2,
	      v = 2 * y;function x(t) {
	    return t >= 1 ? m : t <= -1 ? -m : Math.asin(t);
	  }function w(t) {
	    return t.innerRadius;
	  }function M(t) {
	    return t.outerRadius;
	  }function k(t) {
	    return t.startAngle;
	  }function T(t) {
	    return t.endAngle;
	  }function N(t) {
	    return t && t.padAngle;
	  }function A(t, e, n, r, i, a, f) {
	    var c = t - n,
	        u = e - r,
	        o = (f ? a : -a) / _(c * c + u * u),
	        s = o * u,
	        l = -o * c,
	        h = t + s,
	        b = e + l,
	        p = n + s,
	        g = r + l,
	        y = (h + p) / 2,
	        m = (b + g) / 2,
	        v = p - h,
	        x = g - b,
	        w = v * v + x * x,
	        M = i - a,
	        k = h * g - p * b,
	        T = (x < 0 ? -1 : 1) * _(d(0, M * M * w - k * k)),
	        N = (k * x - v * T) / w,
	        A = (-k * v - x * T) / w,
	        E = (k * x + v * T) / w,
	        C = (-k * v + x * T) / w,
	        O = N - y,
	        S = A - m,
	        P = E - y,
	        j = C - m;return O * O + S * S > P * P + j * j && (N = E, A = C), { cx: N, cy: A, x01: -s, y01: -l, x11: N * (i / M - 1), y11: A * (i / M - 1) };
	  }var E = function E() {
	    var t = w,
	        e = M,
	        n = o(0),
	        r = null,
	        i = k,
	        a = T,
	        f = N,
	        c = null;function d() {
	      var o,
	          d,
	          w,
	          M = +t.apply(this, arguments),
	          k = +e.apply(this, arguments),
	          T = i.apply(this, arguments) - m,
	          N = a.apply(this, arguments) - m,
	          E = s(N - T),
	          C = N > T;if (c || (c = o = u()), k < M && (d = k, k = M, M = d), k > g) {
	        if (E > v - g) c.moveTo(k * h(T), k * p(T)), c.arc(0, 0, k, T, N, !C), M > g && (c.moveTo(M * h(N), M * p(N)), c.arc(0, 0, M, N, T, C));else {
	          var O,
	              S,
	              P = T,
	              j = N,
	              D = T,
	              R = N,
	              U = E,
	              Y = E,
	              B = f.apply(this, arguments) / 2,
	              q = B > g && (r ? +r.apply(this, arguments) : _(M * M + k * k)),
	              L = b(s(k - M) / 2, +n.apply(this, arguments)),
	              G = L,
	              z = L;if (q > g) {
	            var F = x(q / M * p(B)),
	                I = x(q / k * p(B));(U -= 2 * F) > g ? (D += F *= C ? 1 : -1, R -= F) : (U = 0, D = R = (T + N) / 2), (Y -= 2 * I) > g ? (P += I *= C ? 1 : -1, j -= I) : (Y = 0, P = j = (T + N) / 2);
	          }var H = k * h(P),
	              X = k * p(P),
	              V = M * h(R),
	              $ = M * p(R);if (L > g) {
	            var Z = k * h(j),
	                W = k * p(j),
	                Q = M * h(D),
	                J = M * p(D);if (E < y) {
	              var K = U > g ? function (t, e, n, r, i, a, f, c) {
	                var u = n - t,
	                    o = r - e,
	                    s = f - i,
	                    l = c - a,
	                    h = (s * (e - a) - l * (t - i)) / (l * u - s * o);return [t + h * u, e + h * o];
	              }(H, X, Q, J, Z, W, V, $) : [V, $],
	                  tt = H - K[0],
	                  et = X - K[1],
	                  nt = Z - K[0],
	                  rt = W - K[1],
	                  it = 1 / p(((w = (tt * nt + et * rt) / (_(tt * tt + et * et) * _(nt * nt + rt * rt))) > 1 ? 0 : w < -1 ? y : Math.acos(w)) / 2),
	                  at = _(K[0] * K[0] + K[1] * K[1]);G = b(L, (M - at) / (it - 1)), z = b(L, (k - at) / (it + 1));
	            }
	          }Y > g ? z > g ? (O = A(Q, J, H, X, k, z, C), S = A(Z, W, V, $, k, z, C), c.moveTo(O.cx + O.x01, O.cy + O.y01), z < L ? c.arc(O.cx, O.cy, z, l(O.y01, O.x01), l(S.y01, S.x01), !C) : (c.arc(O.cx, O.cy, z, l(O.y01, O.x01), l(O.y11, O.x11), !C), c.arc(0, 0, k, l(O.cy + O.y11, O.cx + O.x11), l(S.cy + S.y11, S.cx + S.x11), !C), c.arc(S.cx, S.cy, z, l(S.y11, S.x11), l(S.y01, S.x01), !C))) : (c.moveTo(H, X), c.arc(0, 0, k, P, j, !C)) : c.moveTo(H, X), M > g && U > g ? G > g ? (O = A(V, $, Z, W, M, -G, C), S = A(H, X, Q, J, M, -G, C), c.lineTo(O.cx + O.x01, O.cy + O.y01), G < L ? c.arc(O.cx, O.cy, G, l(O.y01, O.x01), l(S.y01, S.x01), !C) : (c.arc(O.cx, O.cy, G, l(O.y01, O.x01), l(O.y11, O.x11), !C), c.arc(0, 0, M, l(O.cy + O.y11, O.cx + O.x11), l(S.cy + S.y11, S.cx + S.x11), C), c.arc(S.cx, S.cy, G, l(S.y11, S.x11), l(S.y01, S.x01), !C))) : c.arc(0, 0, M, R, D, C) : c.lineTo(V, $);
	        }
	      } else c.moveTo(0, 0);if (c.closePath(), o) return c = null, o + "" || null;
	    }return d.centroid = function () {
	      var n = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2,
	          r = (+i.apply(this, arguments) + +a.apply(this, arguments)) / 2 - y / 2;return [h(r) * n, p(r) * n];
	    }, d.innerRadius = function (e) {
	      return arguments.length ? (t = "function" == typeof e ? e : o(+e), d) : t;
	    }, d.outerRadius = function (t) {
	      return arguments.length ? (e = "function" == typeof t ? t : o(+t), d) : e;
	    }, d.cornerRadius = function (t) {
	      return arguments.length ? (n = "function" == typeof t ? t : o(+t), d) : n;
	    }, d.padRadius = function (t) {
	      return arguments.length ? (r = null == t ? null : "function" == typeof t ? t : o(+t), d) : r;
	    }, d.startAngle = function (t) {
	      return arguments.length ? (i = "function" == typeof t ? t : o(+t), d) : i;
	    }, d.endAngle = function (t) {
	      return arguments.length ? (a = "function" == typeof t ? t : o(+t), d) : a;
	    }, d.padAngle = function (t) {
	      return arguments.length ? (f = "function" == typeof t ? t : o(+t), d) : f;
	    }, d.context = function (t) {
	      return arguments.length ? (c = null == t ? null : t, d) : c;
	    }, d;
	  };function C(t) {
	    this._context = t;
	  }C.prototype = { areaStart: function areaStart() {
	      this._line = 0;
	    }, areaEnd: function areaEnd() {
	      this._line = NaN;
	    }, lineStart: function lineStart() {
	      this._point = 0;
	    }, lineEnd: function lineEnd() {
	      (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
	    }, point: function point(t, e) {
	      switch (t = +t, e = +e, this._point) {case 0:
	          this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);break;case 1:
	          this._point = 2;default:
	          this._context.lineTo(t, e);}
	    } };var O = function O(t) {
	    return new C(t);
	  };function S(t) {
	    return t[0];
	  }function P(t) {
	    return t[1];
	  }var j = function j() {
	    var t = S,
	        e = P,
	        n = o(!0),
	        r = null,
	        i = O,
	        a = null;function f(f) {
	      var c,
	          o,
	          s,
	          l = f.length,
	          h = !1;for (null == r && (a = i(s = u())), c = 0; c <= l; ++c) {
	        !(c < l && n(o = f[c], c, f)) === h && ((h = !h) ? a.lineStart() : a.lineEnd()), h && a.point(+t(o, c, f), +e(o, c, f));
	      }if (s) return a = null, s + "" || null;
	    }return f.x = function (e) {
	      return arguments.length ? (t = "function" == typeof e ? e : o(+e), f) : t;
	    }, f.y = function (t) {
	      return arguments.length ? (e = "function" == typeof t ? t : o(+t), f) : e;
	    }, f.defined = function (t) {
	      return arguments.length ? (n = "function" == typeof t ? t : o(!!t), f) : n;
	    }, f.curve = function (t) {
	      return arguments.length ? (i = t, null != r && (a = i(r)), f) : i;
	    }, f.context = function (t) {
	      return arguments.length ? (null == t ? r = a = null : a = i(r = t), f) : r;
	    }, f;
	  },
	      D = function D() {
	    var t = S,
	        e = null,
	        n = o(0),
	        r = P,
	        i = o(!0),
	        a = null,
	        f = O,
	        c = null;function s(o) {
	      var s,
	          l,
	          h,
	          d,
	          b,
	          p = o.length,
	          _ = !1,
	          g = new Array(p),
	          y = new Array(p);for (null == a && (c = f(b = u())), s = 0; s <= p; ++s) {
	        if (!(s < p && i(d = o[s], s, o)) === _) if (_ = !_) l = s, c.areaStart(), c.lineStart();else {
	          for (c.lineEnd(), c.lineStart(), h = s - 1; h >= l; --h) {
	            c.point(g[h], y[h]);
	          }c.lineEnd(), c.areaEnd();
	        }_ && (g[s] = +t(d, s, o), y[s] = +n(d, s, o), c.point(e ? +e(d, s, o) : g[s], r ? +r(d, s, o) : y[s]));
	      }if (b) return c = null, b + "" || null;
	    }function l() {
	      return j().defined(i).curve(f).context(a);
	    }return s.x = function (n) {
	      return arguments.length ? (t = "function" == typeof n ? n : o(+n), e = null, s) : t;
	    }, s.x0 = function (e) {
	      return arguments.length ? (t = "function" == typeof e ? e : o(+e), s) : t;
	    }, s.x1 = function (t) {
	      return arguments.length ? (e = null == t ? null : "function" == typeof t ? t : o(+t), s) : e;
	    }, s.y = function (t) {
	      return arguments.length ? (n = "function" == typeof t ? t : o(+t), r = null, s) : n;
	    }, s.y0 = function (t) {
	      return arguments.length ? (n = "function" == typeof t ? t : o(+t), s) : n;
	    }, s.y1 = function (t) {
	      return arguments.length ? (r = null == t ? null : "function" == typeof t ? t : o(+t), s) : r;
	    }, s.lineX0 = s.lineY0 = function () {
	      return l().x(t).y(n);
	    }, s.lineY1 = function () {
	      return l().x(t).y(r);
	    }, s.lineX1 = function () {
	      return l().x(e).y(n);
	    }, s.defined = function (t) {
	      return arguments.length ? (i = "function" == typeof t ? t : o(!!t), s) : i;
	    }, s.curve = function (t) {
	      return arguments.length ? (f = t, null != a && (c = f(a)), s) : f;
	    }, s.context = function (t) {
	      return arguments.length ? (null == t ? a = c = null : c = f(a = t), s) : a;
	    }, s;
	  },
	      R = function R(t, e) {
	    return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
	  },
	      U = function U(t) {
	    return t;
	  },
	      Y = function Y() {
	    var t = U,
	        e = R,
	        n = null,
	        r = o(0),
	        i = o(v),
	        a = o(0);function f(f) {
	      var c,
	          u,
	          o,
	          s,
	          l,
	          h = f.length,
	          d = 0,
	          b = new Array(h),
	          p = new Array(h),
	          _ = +r.apply(this, arguments),
	          g = Math.min(v, Math.max(-v, i.apply(this, arguments) - _)),
	          y = Math.min(Math.abs(g) / h, a.apply(this, arguments)),
	          m = y * (g < 0 ? -1 : 1);for (c = 0; c < h; ++c) {
	        (l = p[b[c] = c] = +t(f[c], c, f)) > 0 && (d += l);
	      }for (null != e ? b.sort(function (t, n) {
	        return e(p[t], p[n]);
	      }) : null != n && b.sort(function (t, e) {
	        return n(f[t], f[e]);
	      }), c = 0, o = d ? (g - h * m) / d : 0; c < h; ++c, _ = s) {
	        u = b[c], s = _ + ((l = p[u]) > 0 ? l * o : 0) + m, p[u] = { data: f[u], index: c, value: l, startAngle: _, endAngle: s, padAngle: y };
	      }return p;
	    }return f.value = function (e) {
	      return arguments.length ? (t = "function" == typeof e ? e : o(+e), f) : t;
	    }, f.sortValues = function (t) {
	      return arguments.length ? (e = t, n = null, f) : e;
	    }, f.sort = function (t) {
	      return arguments.length ? (n = t, e = null, f) : n;
	    }, f.startAngle = function (t) {
	      return arguments.length ? (r = "function" == typeof t ? t : o(+t), f) : r;
	    }, f.endAngle = function (t) {
	      return arguments.length ? (i = "function" == typeof t ? t : o(+t), f) : i;
	    }, f.padAngle = function (t) {
	      return arguments.length ? (a = "function" == typeof t ? t : o(+t), f) : a;
	    }, f;
	  },
	      B = L(O);function q(t) {
	    this._curve = t;
	  }function L(t) {
	    function e(e) {
	      return new q(t(e));
	    }return e._curve = t, e;
	  }function G(t) {
	    var e = t.curve;return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t.curve = function (t) {
	      return arguments.length ? e(L(t)) : e()._curve;
	    }, t;
	  }q.prototype = { areaStart: function areaStart() {
	      this._curve.areaStart();
	    }, areaEnd: function areaEnd() {
	      this._curve.areaEnd();
	    }, lineStart: function lineStart() {
	      this._curve.lineStart();
	    }, lineEnd: function lineEnd() {
	      this._curve.lineEnd();
	    }, point: function point(t, e) {
	      this._curve.point(e * Math.sin(t), e * -Math.cos(t));
	    } };var z = function z() {
	    return G(j().curve(B));
	  },
	      F = function F() {
	    var t = D().curve(B),
	        e = t.curve,
	        n = t.lineX0,
	        r = t.lineX1,
	        i = t.lineY0,
	        a = t.lineY1;return t.angle = t.x, delete t.x, t.startAngle = t.x0, delete t.x0, t.endAngle = t.x1, delete t.x1, t.radius = t.y, delete t.y, t.innerRadius = t.y0, delete t.y0, t.outerRadius = t.y1, delete t.y1, t.lineStartAngle = function () {
	      return G(n());
	    }, delete t.lineX0, t.lineEndAngle = function () {
	      return G(r());
	    }, delete t.lineX1, t.lineInnerRadius = function () {
	      return G(i());
	    }, delete t.lineY0, t.lineOuterRadius = function () {
	      return G(a());
	    }, delete t.lineY1, t.curve = function (t) {
	      return arguments.length ? e(L(t)) : e()._curve;
	    }, t;
	  },
	      I = function I(t, e) {
	    return [(e = +e) * Math.cos(t -= Math.PI / 2), e * Math.sin(t)];
	  },
	      H = Array.prototype.slice;function X(t) {
	    return t.source;
	  }function V(t) {
	    return t.target;
	  }function $(t) {
	    var e = X,
	        n = V,
	        r = S,
	        i = P,
	        a = null;function f() {
	      var f,
	          c = H.call(arguments),
	          o = e.apply(this, c),
	          s = n.apply(this, c);if (a || (a = f = u()), t(a, +r.apply(this, (c[0] = o, c)), +i.apply(this, c), +r.apply(this, (c[0] = s, c)), +i.apply(this, c)), f) return a = null, f + "" || null;
	    }return f.source = function (t) {
	      return arguments.length ? (e = t, f) : e;
	    }, f.target = function (t) {
	      return arguments.length ? (n = t, f) : n;
	    }, f.x = function (t) {
	      return arguments.length ? (r = "function" == typeof t ? t : o(+t), f) : r;
	    }, f.y = function (t) {
	      return arguments.length ? (i = "function" == typeof t ? t : o(+t), f) : i;
	    }, f.context = function (t) {
	      return arguments.length ? (a = null == t ? null : t, f) : a;
	    }, f;
	  }function Z(t, e, n, r, i) {
	    t.moveTo(e, n), t.bezierCurveTo(e = (e + r) / 2, n, e, i, r, i);
	  }function W(t, e, n, r, i) {
	    t.moveTo(e, n), t.bezierCurveTo(e, n = (n + i) / 2, r, n, r, i);
	  }function Q(t, e, n, r, i) {
	    var a = I(e, n),
	        f = I(e, n = (n + i) / 2),
	        c = I(r, n),
	        u = I(r, i);t.moveTo(a[0], a[1]), t.bezierCurveTo(f[0], f[1], c[0], c[1], u[0], u[1]);
	  }function J() {
	    return $(Z);
	  }function K() {
	    return $(W);
	  }function tt() {
	    var t = $(Q);return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t;
	  }var et = { draw: function draw(t, e) {
	      var n = Math.sqrt(e / y);t.moveTo(n, 0), t.arc(0, 0, n, 0, v);
	    } },
	      nt = { draw: function draw(t, e) {
	      var n = Math.sqrt(e / 5) / 2;t.moveTo(-3 * n, -n), t.lineTo(-n, -n), t.lineTo(-n, -3 * n), t.lineTo(n, -3 * n), t.lineTo(n, -n), t.lineTo(3 * n, -n), t.lineTo(3 * n, n), t.lineTo(n, n), t.lineTo(n, 3 * n), t.lineTo(-n, 3 * n), t.lineTo(-n, n), t.lineTo(-3 * n, n), t.closePath();
	    } },
	      rt = Math.sqrt(1 / 3),
	      it = 2 * rt,
	      at = { draw: function draw(t, e) {
	      var n = Math.sqrt(e / it),
	          r = n * rt;t.moveTo(0, -n), t.lineTo(r, 0), t.lineTo(0, n), t.lineTo(-r, 0), t.closePath();
	    } },
	      ft = Math.sin(y / 10) / Math.sin(7 * y / 10),
	      ct = Math.sin(v / 10) * ft,
	      ut = -Math.cos(v / 10) * ft,
	      ot = { draw: function draw(t, e) {
	      var n = Math.sqrt(.8908130915292852 * e),
	          r = ct * n,
	          i = ut * n;t.moveTo(0, -n), t.lineTo(r, i);for (var a = 1; a < 5; ++a) {
	        var f = v * a / 5,
	            c = Math.cos(f),
	            u = Math.sin(f);t.lineTo(u * n, -c * n), t.lineTo(c * r - u * i, u * r + c * i);
	      }t.closePath();
	    } },
	      st = { draw: function draw(t, e) {
	      var n = Math.sqrt(e),
	          r = -n / 2;t.rect(r, r, n, n);
	    } },
	      lt = Math.sqrt(3),
	      ht = { draw: function draw(t, e) {
	      var n = -Math.sqrt(e / (3 * lt));t.moveTo(0, 2 * n), t.lineTo(-lt * n, -n), t.lineTo(lt * n, -n), t.closePath();
	    } },
	      dt = Math.sqrt(3) / 2,
	      bt = 1 / Math.sqrt(12),
	      pt = 3 * (bt / 2 + 1),
	      _t = { draw: function draw(t, e) {
	      var n = Math.sqrt(e / pt),
	          r = n / 2,
	          i = n * bt,
	          a = r,
	          f = n * bt + n,
	          c = -a,
	          u = f;t.moveTo(r, i), t.lineTo(a, f), t.lineTo(c, u), t.lineTo(-.5 * r - dt * i, dt * r + -.5 * i), t.lineTo(-.5 * a - dt * f, dt * a + -.5 * f), t.lineTo(-.5 * c - dt * u, dt * c + -.5 * u), t.lineTo(-.5 * r + dt * i, -.5 * i - dt * r), t.lineTo(-.5 * a + dt * f, -.5 * f - dt * a), t.lineTo(-.5 * c + dt * u, -.5 * u - dt * c), t.closePath();
	    } },
	      gt = [et, nt, at, st, ot, ht, _t],
	      yt = function yt() {
	    var t = o(et),
	        e = o(64),
	        n = null;function r() {
	      var r;if (n || (n = r = u()), t.apply(this, arguments).draw(n, +e.apply(this, arguments)), r) return n = null, r + "" || null;
	    }return r.type = function (e) {
	      return arguments.length ? (t = "function" == typeof e ? e : o(e), r) : t;
	    }, r.size = function (t) {
	      return arguments.length ? (e = "function" == typeof t ? t : o(+t), r) : e;
	    }, r.context = function (t) {
	      return arguments.length ? (n = null == t ? null : t, r) : n;
	    }, r;
	  },
	      mt = function mt() {};function vt(t, e, n) {
	    t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + e) / 6, (t._y0 + 4 * t._y1 + n) / 6);
	  }function xt(t) {
	    this._context = t;
	  }xt.prototype = { areaStart: function areaStart() {
	      this._line = 0;
	    }, areaEnd: function areaEnd() {
	      this._line = NaN;
	    }, lineStart: function lineStart() {
	      this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
	    }, lineEnd: function lineEnd() {
	      switch (this._point) {case 3:
	          vt(this, this._x1, this._y1);case 2:
	          this._context.lineTo(this._x1, this._y1);}(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
	    }, point: function point(t, e) {
	      switch (t = +t, e = +e, this._point) {case 0:
	          this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);break;case 1:
	          this._point = 2;break;case 2:
	          this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);default:
	          vt(this, t, e);}this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
	    } };var wt = function wt(t) {
	    return new xt(t);
	  };function Mt(t) {
	    this._context = t;
	  }Mt.prototype = { areaStart: mt, areaEnd: mt, lineStart: function lineStart() {
	      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
	    }, lineEnd: function lineEnd() {
	      switch (this._point) {case 1:
	          this._context.moveTo(this._x2, this._y2), this._context.closePath();break;case 2:
	          this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();break;case 3:
	          this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);}
	    }, point: function point(t, e) {
	      switch (t = +t, e = +e, this._point) {case 0:
	          this._point = 1, this._x2 = t, this._y2 = e;break;case 1:
	          this._point = 2, this._x3 = t, this._y3 = e;break;case 2:
	          this._point = 3, this._x4 = t, this._y4 = e, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + e) / 6);break;default:
	          vt(this, t, e);}this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
	    } };var kt = function kt(t) {
	    return new Mt(t);
	  };function Tt(t) {
	    this._context = t;
	  }Tt.prototype = { areaStart: function areaStart() {
	      this._line = 0;
	    }, areaEnd: function areaEnd() {
	      this._line = NaN;
	    }, lineStart: function lineStart() {
	      this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
	    }, lineEnd: function lineEnd() {
	      (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line;
	    }, point: function point(t, e) {
	      switch (t = +t, e = +e, this._point) {case 0:
	          this._point = 1;break;case 1:
	          this._point = 2;break;case 2:
	          this._point = 3;var n = (this._x0 + 4 * this._x1 + t) / 6,
	              r = (this._y0 + 4 * this._y1 + e) / 6;this._line ? this._context.lineTo(n, r) : this._context.moveTo(n, r);break;case 3:
	          this._point = 4;default:
	          vt(this, t, e);}this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
	    } };var Nt = function Nt(t) {
	    return new Tt(t);
	  };function At(t, e) {
	    this._basis = new xt(t), this._beta = e;
	  }At.prototype = { lineStart: function lineStart() {
	      this._x = [], this._y = [], this._basis.lineStart();
	    }, lineEnd: function lineEnd() {
	      var t = this._x,
	          e = this._y,
	          n = t.length - 1;if (n > 0) for (var r, i = t[0], a = e[0], f = t[n] - i, c = e[n] - a, u = -1; ++u <= n;) {
	        r = u / n, this._basis.point(this._beta * t[u] + (1 - this._beta) * (i + r * f), this._beta * e[u] + (1 - this._beta) * (a + r * c));
	      }this._x = this._y = null, this._basis.lineEnd();
	    }, point: function point(t, e) {
	      this._x.push(+t), this._y.push(+e);
	    } };var Et = function t(e) {
	    function n(t) {
	      return 1 === e ? new xt(t) : new At(t, e);
	    }return n.beta = function (e) {
	      return t(+e);
	    }, n;
	  }(.85);function Ct(t, e, n) {
	    t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - e), t._y2 + t._k * (t._y1 - n), t._x2, t._y2);
	  }function Ot(t, e) {
	    this._context = t, this._k = (1 - e) / 6;
	  }Ot.prototype = { areaStart: function areaStart() {
	      this._line = 0;
	    }, areaEnd: function areaEnd() {
	      this._line = NaN;
	    }, lineStart: function lineStart() {
	      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
	    }, lineEnd: function lineEnd() {
	      switch (this._point) {case 2:
	          this._context.lineTo(this._x2, this._y2);break;case 3:
	          Ct(this, this._x1, this._y1);}(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
	    }, point: function point(t, e) {
	      switch (t = +t, e = +e, this._point) {case 0:
	          this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);break;case 1:
	          this._point = 2, this._x1 = t, this._y1 = e;break;case 2:
	          this._point = 3;default:
	          Ct(this, t, e);}this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
	    } };var St = function t(e) {
	    function n(t) {
	      return new Ot(t, e);
	    }return n.tension = function (e) {
	      return t(+e);
	    }, n;
	  }(0);function Pt(t, e) {
	    this._context = t, this._k = (1 - e) / 6;
	  }Pt.prototype = { areaStart: mt, areaEnd: mt, lineStart: function lineStart() {
	      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
	    }, lineEnd: function lineEnd() {
	      switch (this._point) {case 1:
	          this._context.moveTo(this._x3, this._y3), this._context.closePath();break;case 2:
	          this._context.lineTo(this._x3, this._y3), this._context.closePath();break;case 3:
	          this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);}
	    }, point: function point(t, e) {
	      switch (t = +t, e = +e, this._point) {case 0:
	          this._point = 1, this._x3 = t, this._y3 = e;break;case 1:
	          this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = e);break;case 2:
	          this._point = 3, this._x5 = t, this._y5 = e;break;default:
	          Ct(this, t, e);}this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
	    } };var jt = function t(e) {
	    function n(t) {
	      return new Pt(t, e);
	    }return n.tension = function (e) {
	      return t(+e);
	    }, n;
	  }(0);function Dt(t, e) {
	    this._context = t, this._k = (1 - e) / 6;
	  }Dt.prototype = { areaStart: function areaStart() {
	      this._line = 0;
	    }, areaEnd: function areaEnd() {
	      this._line = NaN;
	    }, lineStart: function lineStart() {
	      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
	    }, lineEnd: function lineEnd() {
	      (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line;
	    }, point: function point(t, e) {
	      switch (t = +t, e = +e, this._point) {case 0:
	          this._point = 1;break;case 1:
	          this._point = 2;break;case 2:
	          this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);break;case 3:
	          this._point = 4;default:
	          Ct(this, t, e);}this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
	    } };var Rt = function t(e) {
	    function n(t) {
	      return new Dt(t, e);
	    }return n.tension = function (e) {
	      return t(+e);
	    }, n;
	  }(0);function Ut(t, e, n) {
	    var r = t._x1,
	        i = t._y1,
	        a = t._x2,
	        f = t._y2;if (t._l01_a > g) {
	      var c = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
	          u = 3 * t._l01_a * (t._l01_a + t._l12_a);r = (r * c - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / u, i = (i * c - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / u;
	    }if (t._l23_a > g) {
	      var o = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
	          s = 3 * t._l23_a * (t._l23_a + t._l12_a);a = (a * o + t._x1 * t._l23_2a - e * t._l12_2a) / s, f = (f * o + t._y1 * t._l23_2a - n * t._l12_2a) / s;
	    }t._context.bezierCurveTo(r, i, a, f, t._x2, t._y2);
	  }function Yt(t, e) {
	    this._context = t, this._alpha = e;
	  }Yt.prototype = { areaStart: function areaStart() {
	      this._line = 0;
	    }, areaEnd: function areaEnd() {
	      this._line = NaN;
	    }, lineStart: function lineStart() {
	      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
	    }, lineEnd: function lineEnd() {
	      switch (this._point) {case 2:
	          this._context.lineTo(this._x2, this._y2);break;case 3:
	          this.point(this._x2, this._y2);}(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
	    }, point: function point(t, e) {
	      if (t = +t, e = +e, this._point) {
	        var n = this._x2 - t,
	            r = this._y2 - e;this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + r * r, this._alpha));
	      }switch (this._point) {case 0:
	          this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);break;case 1:
	          this._point = 2;break;case 2:
	          this._point = 3;default:
	          Ut(this, t, e);}this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
	    } };var Bt = function t(e) {
	    function n(t) {
	      return e ? new Yt(t, e) : new Ot(t, 0);
	    }return n.alpha = function (e) {
	      return t(+e);
	    }, n;
	  }(.5);function qt(t, e) {
	    this._context = t, this._alpha = e;
	  }qt.prototype = { areaStart: mt, areaEnd: mt, lineStart: function lineStart() {
	      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
	    }, lineEnd: function lineEnd() {
	      switch (this._point) {case 1:
	          this._context.moveTo(this._x3, this._y3), this._context.closePath();break;case 2:
	          this._context.lineTo(this._x3, this._y3), this._context.closePath();break;case 3:
	          this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);}
	    }, point: function point(t, e) {
	      if (t = +t, e = +e, this._point) {
	        var n = this._x2 - t,
	            r = this._y2 - e;this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + r * r, this._alpha));
	      }switch (this._point) {case 0:
	          this._point = 1, this._x3 = t, this._y3 = e;break;case 1:
	          this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = e);break;case 2:
	          this._point = 3, this._x5 = t, this._y5 = e;break;default:
	          Ut(this, t, e);}this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
	    } };var Lt = function t(e) {
	    function n(t) {
	      return e ? new qt(t, e) : new Pt(t, 0);
	    }return n.alpha = function (e) {
	      return t(+e);
	    }, n;
	  }(.5);function Gt(t, e) {
	    this._context = t, this._alpha = e;
	  }Gt.prototype = { areaStart: function areaStart() {
	      this._line = 0;
	    }, areaEnd: function areaEnd() {
	      this._line = NaN;
	    }, lineStart: function lineStart() {
	      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
	    }, lineEnd: function lineEnd() {
	      (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line;
	    }, point: function point(t, e) {
	      if (t = +t, e = +e, this._point) {
	        var n = this._x2 - t,
	            r = this._y2 - e;this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + r * r, this._alpha));
	      }switch (this._point) {case 0:
	          this._point = 1;break;case 1:
	          this._point = 2;break;case 2:
	          this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);break;case 3:
	          this._point = 4;default:
	          Ut(this, t, e);}this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
	    } };var zt = function t(e) {
	    function n(t) {
	      return e ? new Gt(t, e) : new Dt(t, 0);
	    }return n.alpha = function (e) {
	      return t(+e);
	    }, n;
	  }(.5);function Ft(t) {
	    this._context = t;
	  }Ft.prototype = { areaStart: mt, areaEnd: mt, lineStart: function lineStart() {
	      this._point = 0;
	    }, lineEnd: function lineEnd() {
	      this._point && this._context.closePath();
	    }, point: function point(t, e) {
	      t = +t, e = +e, this._point ? this._context.lineTo(t, e) : (this._point = 1, this._context.moveTo(t, e));
	    } };var It = function It(t) {
	    return new Ft(t);
	  };function Ht(t) {
	    return t < 0 ? -1 : 1;
	  }function Xt(t, e, n) {
	    var r = t._x1 - t._x0,
	        i = e - t._x1,
	        a = (t._y1 - t._y0) / (r || i < 0 && -0),
	        f = (n - t._y1) / (i || r < 0 && -0),
	        c = (a * i + f * r) / (r + i);return (Ht(a) + Ht(f)) * Math.min(Math.abs(a), Math.abs(f), .5 * Math.abs(c)) || 0;
	  }function Vt(t, e) {
	    var n = t._x1 - t._x0;return n ? (3 * (t._y1 - t._y0) / n - e) / 2 : e;
	  }function $t(t, e, n) {
	    var r = t._x0,
	        i = t._y0,
	        a = t._x1,
	        f = t._y1,
	        c = (a - r) / 3;t._context.bezierCurveTo(r + c, i + c * e, a - c, f - c * n, a, f);
	  }function Zt(t) {
	    this._context = t;
	  }function Wt(t) {
	    this._context = new Qt(t);
	  }function Qt(t) {
	    this._context = t;
	  }function Jt(t) {
	    return new Zt(t);
	  }function Kt(t) {
	    return new Wt(t);
	  }function te(t) {
	    this._context = t;
	  }function ee(t) {
	    var e,
	        n,
	        r = t.length - 1,
	        i = new Array(r),
	        a = new Array(r),
	        f = new Array(r);for (i[0] = 0, a[0] = 2, f[0] = t[0] + 2 * t[1], e = 1; e < r - 1; ++e) {
	      i[e] = 1, a[e] = 4, f[e] = 4 * t[e] + 2 * t[e + 1];
	    }for (i[r - 1] = 2, a[r - 1] = 7, f[r - 1] = 8 * t[r - 1] + t[r], e = 1; e < r; ++e) {
	      n = i[e] / a[e - 1], a[e] -= n, f[e] -= n * f[e - 1];
	    }for (i[r - 1] = f[r - 1] / a[r - 1], e = r - 2; e >= 0; --e) {
	      i[e] = (f[e] - i[e + 1]) / a[e];
	    }for (a[r - 1] = (t[r] + i[r - 1]) / 2, e = 0; e < r - 1; ++e) {
	      a[e] = 2 * t[e + 1] - i[e + 1];
	    }return [i, a];
	  }Zt.prototype = { areaStart: function areaStart() {
	      this._line = 0;
	    }, areaEnd: function areaEnd() {
	      this._line = NaN;
	    }, lineStart: function lineStart() {
	      this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
	    }, lineEnd: function lineEnd() {
	      switch (this._point) {case 2:
	          this._context.lineTo(this._x1, this._y1);break;case 3:
	          $t(this, this._t0, Vt(this, this._t0));}(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
	    }, point: function point(t, e) {
	      var n = NaN;if (e = +e, (t = +t) !== this._x1 || e !== this._y1) {
	        switch (this._point) {case 0:
	            this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);break;case 1:
	            this._point = 2;break;case 2:
	            this._point = 3, $t(this, Vt(this, n = Xt(this, t, e)), n);break;default:
	            $t(this, this._t0, n = Xt(this, t, e));}this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e, this._t0 = n;
	      }
	    } }, (Wt.prototype = Object.create(Zt.prototype)).point = function (t, e) {
	    Zt.prototype.point.call(this, e, t);
	  }, Qt.prototype = { moveTo: function moveTo(t, e) {
	      this._context.moveTo(e, t);
	    }, closePath: function closePath() {
	      this._context.closePath();
	    }, lineTo: function lineTo(t, e) {
	      this._context.lineTo(e, t);
	    }, bezierCurveTo: function bezierCurveTo(t, e, n, r, i, a) {
	      this._context.bezierCurveTo(e, t, r, n, a, i);
	    } }, te.prototype = { areaStart: function areaStart() {
	      this._line = 0;
	    }, areaEnd: function areaEnd() {
	      this._line = NaN;
	    }, lineStart: function lineStart() {
	      this._x = [], this._y = [];
	    }, lineEnd: function lineEnd() {
	      var t = this._x,
	          e = this._y,
	          n = t.length;if (n) if (this._line ? this._context.lineTo(t[0], e[0]) : this._context.moveTo(t[0], e[0]), 2 === n) this._context.lineTo(t[1], e[1]);else for (var r = ee(t), i = ee(e), a = 0, f = 1; f < n; ++a, ++f) {
	        this._context.bezierCurveTo(r[0][a], i[0][a], r[1][a], i[1][a], t[f], e[f]);
	      }(this._line || 0 !== this._line && 1 === n) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
	    }, point: function point(t, e) {
	      this._x.push(+t), this._y.push(+e);
	    } };var ne = function ne(t) {
	    return new te(t);
	  };function re(t, e) {
	    this._context = t, this._t = e;
	  }re.prototype = { areaStart: function areaStart() {
	      this._line = 0;
	    }, areaEnd: function areaEnd() {
	      this._line = NaN;
	    }, lineStart: function lineStart() {
	      this._x = this._y = NaN, this._point = 0;
	    }, lineEnd: function lineEnd() {
	      0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
	    }, point: function point(t, e) {
	      switch (t = +t, e = +e, this._point) {case 0:
	          this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);break;case 1:
	          this._point = 2;default:
	          if (this._t <= 0) this._context.lineTo(this._x, e), this._context.lineTo(t, e);else {
	            var n = this._x * (1 - this._t) + t * this._t;this._context.lineTo(n, this._y), this._context.lineTo(n, e);
	          }}this._x = t, this._y = e;
	    } };var ie = function ie(t) {
	    return new re(t, .5);
	  };function ae(t) {
	    return new re(t, 0);
	  }function fe(t) {
	    return new re(t, 1);
	  }var ce = function ce(t, e) {
	    if ((i = t.length) > 1) for (var n, r, i, a = 1, f = t[e[0]], c = f.length; a < i; ++a) {
	      for (r = f, f = t[e[a]], n = 0; n < c; ++n) {
	        f[n][1] += f[n][0] = isNaN(r[n][1]) ? r[n][0] : r[n][1];
	      }
	    }
	  },
	      ue = function ue(t) {
	    for (var e = t.length, n = new Array(e); --e >= 0;) {
	      n[e] = e;
	    }return n;
	  };function oe(t, e) {
	    return t[e];
	  }var se = function se() {
	    var t = o([]),
	        e = ue,
	        n = ce,
	        r = oe;function i(i) {
	      var a,
	          f,
	          c = t.apply(this, arguments),
	          u = i.length,
	          o = c.length,
	          s = new Array(o);for (a = 0; a < o; ++a) {
	        for (var l, h = c[a], d = s[a] = new Array(u), b = 0; b < u; ++b) {
	          d[b] = l = [0, +r(i[b], h, b, i)], l.data = i[b];
	        }d.key = h;
	      }for (a = 0, f = e(s); a < o; ++a) {
	        s[f[a]].index = a;
	      }return n(s, f), s;
	    }return i.keys = function (e) {
	      return arguments.length ? (t = "function" == typeof e ? e : o(H.call(e)), i) : t;
	    }, i.value = function (t) {
	      return arguments.length ? (r = "function" == typeof t ? t : o(+t), i) : r;
	    }, i.order = function (t) {
	      return arguments.length ? (e = null == t ? ue : "function" == typeof t ? t : o(H.call(t)), i) : e;
	    }, i.offset = function (t) {
	      return arguments.length ? (n = null == t ? ce : t, i) : n;
	    }, i;
	  },
	      le = function le(t, e) {
	    if ((r = t.length) > 0) {
	      for (var n, r, i, a = 0, f = t[0].length; a < f; ++a) {
	        for (i = n = 0; n < r; ++n) {
	          i += t[n][a][1] || 0;
	        }if (i) for (n = 0; n < r; ++n) {
	          t[n][a][1] /= i;
	        }
	      }ce(t, e);
	    }
	  },
	      he = function he(t, e) {
	    if ((c = t.length) > 1) for (var n, r, i, a, f, c, u = 0, o = t[e[0]].length; u < o; ++u) {
	      for (a = f = 0, n = 0; n < c; ++n) {
	        (i = (r = t[e[n]][u])[1] - r[0]) >= 0 ? (r[0] = a, r[1] = a += i) : i < 0 ? (r[1] = f, r[0] = f += i) : r[0] = a;
	      }
	    }
	  },
	      de = function de(t, e) {
	    if ((n = t.length) > 0) {
	      for (var n, r = 0, i = t[e[0]], a = i.length; r < a; ++r) {
	        for (var f = 0, c = 0; f < n; ++f) {
	          c += t[f][r][1] || 0;
	        }i[r][1] += i[r][0] = -c / 2;
	      }ce(t, e);
	    }
	  },
	      be = function be(t, e) {
	    if ((i = t.length) > 0 && (r = (n = t[e[0]]).length) > 0) {
	      for (var n, r, i, a = 0, f = 1; f < r; ++f) {
	        for (var c = 0, u = 0, o = 0; c < i; ++c) {
	          for (var s = t[e[c]], l = s[f][1] || 0, h = (l - (s[f - 1][1] || 0)) / 2, d = 0; d < c; ++d) {
	            var b = t[e[d]];h += (b[f][1] || 0) - (b[f - 1][1] || 0);
	          }u += l, o += h * l;
	        }n[f - 1][1] += n[f - 1][0] = a, u && (a -= o / u);
	      }n[f - 1][1] += n[f - 1][0] = a, ce(t, e);
	    }
	  },
	      pe = function pe(t) {
	    var e = t.map(_e);return ue(t).sort(function (t, n) {
	      return e[t] - e[n];
	    });
	  };function _e(t) {
	    for (var e, n = 0, r = -1, i = t.length; ++r < i;) {
	      (e = +t[r][1]) && (n += e);
	    }return n;
	  }var ge = function ge(t) {
	    return pe(t).reverse();
	  },
	      ye = function ye(t) {
	    var e,
	        n,
	        r = t.length,
	        i = t.map(_e),
	        a = ue(t).sort(function (t, e) {
	      return i[e] - i[t];
	    }),
	        f = 0,
	        c = 0,
	        u = [],
	        o = [];for (e = 0; e < r; ++e) {
	      n = a[e], f < c ? (f += i[n], u.push(n)) : (c += i[n], o.push(n));
	    }return o.reverse().concat(u);
	  },
	      me = function me(t) {
	    return ue(t).reverse();
	  };n.d(e, "arc", function () {
	    return E;
	  }), n.d(e, "area", function () {
	    return D;
	  }), n.d(e, "line", function () {
	    return j;
	  }), n.d(e, "pie", function () {
	    return Y;
	  }), n.d(e, "areaRadial", function () {
	    return F;
	  }), n.d(e, "radialArea", function () {
	    return F;
	  }), n.d(e, "lineRadial", function () {
	    return z;
	  }), n.d(e, "radialLine", function () {
	    return z;
	  }), n.d(e, "pointRadial", function () {
	    return I;
	  }), n.d(e, "linkHorizontal", function () {
	    return J;
	  }), n.d(e, "linkVertical", function () {
	    return K;
	  }), n.d(e, "linkRadial", function () {
	    return tt;
	  }), n.d(e, "symbol", function () {
	    return yt;
	  }), n.d(e, "symbols", function () {
	    return gt;
	  }), n.d(e, "symbolCircle", function () {
	    return et;
	  }), n.d(e, "symbolCross", function () {
	    return nt;
	  }), n.d(e, "symbolDiamond", function () {
	    return at;
	  }), n.d(e, "symbolSquare", function () {
	    return st;
	  }), n.d(e, "symbolStar", function () {
	    return ot;
	  }), n.d(e, "symbolTriangle", function () {
	    return ht;
	  }), n.d(e, "symbolWye", function () {
	    return _t;
	  }), n.d(e, "curveBasisClosed", function () {
	    return kt;
	  }), n.d(e, "curveBasisOpen", function () {
	    return Nt;
	  }), n.d(e, "curveBasis", function () {
	    return wt;
	  }), n.d(e, "curveBundle", function () {
	    return Et;
	  }), n.d(e, "curveCardinalClosed", function () {
	    return jt;
	  }), n.d(e, "curveCardinalOpen", function () {
	    return Rt;
	  }), n.d(e, "curveCardinal", function () {
	    return St;
	  }), n.d(e, "curveCatmullRomClosed", function () {
	    return Lt;
	  }), n.d(e, "curveCatmullRomOpen", function () {
	    return zt;
	  }), n.d(e, "curveCatmullRom", function () {
	    return Bt;
	  }), n.d(e, "curveLinearClosed", function () {
	    return It;
	  }), n.d(e, "curveLinear", function () {
	    return O;
	  }), n.d(e, "curveMonotoneX", function () {
	    return Jt;
	  }), n.d(e, "curveMonotoneY", function () {
	    return Kt;
	  }), n.d(e, "curveNatural", function () {
	    return ne;
	  }), n.d(e, "curveStep", function () {
	    return ie;
	  }), n.d(e, "curveStepAfter", function () {
	    return fe;
	  }), n.d(e, "curveStepBefore", function () {
	    return ae;
	  }), n.d(e, "stack", function () {
	    return se;
	  }), n.d(e, "stackOffsetExpand", function () {
	    return le;
	  }), n.d(e, "stackOffsetDiverging", function () {
	    return he;
	  }), n.d(e, "stackOffsetNone", function () {
	    return ce;
	  }), n.d(e, "stackOffsetSilhouette", function () {
	    return de;
	  }), n.d(e, "stackOffsetWiggle", function () {
	    return be;
	  }), n.d(e, "stackOrderAscending", function () {
	    return pe;
	  }), n.d(e, "stackOrderDescending", function () {
	    return ge;
	  }), n.d(e, "stackOrderInsideOut", function () {
	    return ye;
	  }), n.d(e, "stackOrderNone", function () {
	    return ue;
	  }), n.d(e, "stackOrderReverse", function () {
	    return me;
	  });
	}, function (t, e, n) {
	  "use strict";
	  n.r(e);var r = function r(t, e) {
	    return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
	  },
	      i = function i(t) {
	    var e;return 1 === t.length && (e = t, t = function t(_t4, n) {
	      return r(e(_t4), n);
	    }), { left: function left(e, n, r, i) {
	        for (null == r && (r = 0), null == i && (i = e.length); r < i;) {
	          var a = r + i >>> 1;t(e[a], n) < 0 ? r = a + 1 : i = a;
	        }return r;
	      }, right: function right(e, n, r, i) {
	        for (null == r && (r = 0), null == i && (i = e.length); r < i;) {
	          var a = r + i >>> 1;t(e[a], n) > 0 ? i = a : r = a + 1;
	        }return r;
	      } };
	  };var a = i(r),
	      f = a.right,
	      c = (a.left, f);var u = function u(t) {
	    return null === t ? NaN : +t;
	  },
	      o = Array.prototype,
	      s = (o.slice, o.map, function (t, e, n) {
	    t = +t, e = +e, n = (i = arguments.length) < 2 ? (e = t, t = 0, 1) : i < 3 ? 1 : +n;for (var r = -1, i = 0 | Math.max(0, Math.ceil((e - t) / n)), a = new Array(i); ++r < i;) {
	      a[r] = t + r * n;
	    }return a;
	  }),
	      l = Math.sqrt(50),
	      h = Math.sqrt(10),
	      d = Math.sqrt(2),
	      b = function b(t, e, n) {
	    var r,
	        i,
	        a,
	        f,
	        c = -1;if (n = +n, (t = +t) === (e = +e) && n > 0) return [t];if ((r = e < t) && (i = t, t = e, e = i), 0 === (f = p(t, e, n)) || !isFinite(f)) return [];if (f > 0) for (t = Math.ceil(t / f), e = Math.floor(e / f), a = new Array(i = Math.ceil(e - t + 1)); ++c < i;) {
	      a[c] = (t + c) * f;
	    } else for (t = Math.floor(t * f), e = Math.ceil(e * f), a = new Array(i = Math.ceil(t - e + 1)); ++c < i;) {
	      a[c] = (t - c) / f;
	    }return r && a.reverse(), a;
	  };function p(t, e, n) {
	    var r = (e - t) / Math.max(0, n),
	        i = Math.floor(Math.log(r) / Math.LN10),
	        a = r / Math.pow(10, i);return i >= 0 ? (a >= l ? 10 : a >= h ? 5 : a >= d ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (a >= l ? 10 : a >= h ? 5 : a >= d ? 2 : 1);
	  }function _(t, e, n) {
	    var r = Math.abs(e - t) / Math.max(0, n),
	        i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
	        a = r / i;return a >= l ? i *= 10 : a >= h ? i *= 5 : a >= d && (i *= 2), e < t ? -i : i;
	  }var g = function g(t, e, n) {
	    if (null == n && (n = u), r = t.length) {
	      if ((e = +e) <= 0 || r < 2) return +n(t[0], 0, t);if (e >= 1) return +n(t[r - 1], r - 1, t);var r,
	          i = (r - 1) * e,
	          a = Math.floor(i),
	          f = +n(t[a], a, t);return f + (+n(t[a + 1], a + 1, t) - f) * (i - a);
	    }
	  };function y() {}function m(t, e) {
	    var n = new y();if (t instanceof y) t.each(function (t, e) {
	      n.set(e, t);
	    });else if (Array.isArray(t)) {
	      var r,
	          i = -1,
	          a = t.length;if (null == e) for (; ++i < a;) {
	        n.set(i, t[i]);
	      } else for (; ++i < a;) {
	        n.set(e(r = t[i], i, t), r);
	      }
	    } else if (t) for (var f in t) {
	      n.set(f, t[f]);
	    }return n;
	  }y.prototype = m.prototype = { constructor: y, has: function has(t) {
	      return "$" + t in this;
	    }, get: function get(t) {
	      return this["$" + t];
	    }, set: function set(t, e) {
	      return this["$" + t] = e, this;
	    }, remove: function remove(t) {
	      var e = "$" + t;return e in this && delete this[e];
	    }, clear: function clear() {
	      for (var t in this) {
	        "$" === t[0] && delete this[t];
	      }
	    }, keys: function keys() {
	      var t = [];for (var e in this) {
	        "$" === e[0] && t.push(e.slice(1));
	      }return t;
	    }, values: function values() {
	      var t = [];for (var e in this) {
	        "$" === e[0] && t.push(this[e]);
	      }return t;
	    }, entries: function entries() {
	      var t = [];for (var e in this) {
	        "$" === e[0] && t.push({ key: e.slice(1), value: this[e] });
	      }return t;
	    }, size: function size() {
	      var t = 0;for (var e in this) {
	        "$" === e[0] && ++t;
	      }return t;
	    }, empty: function empty() {
	      for (var t in this) {
	        if ("$" === t[0]) return !1;
	      }return !0;
	    }, each: function each(t) {
	      for (var e in this) {
	        "$" === e[0] && t(this[e], e.slice(1), this);
	      }
	    } };var v = m;function x() {}var w = v.prototype;function M(t, e) {
	    var n = new x();if (t instanceof x) t.each(function (t) {
	      n.add(t);
	    });else if (t) {
	      var r = -1,
	          i = t.length;if (null == e) for (; ++r < i;) {
	        n.add(t[r]);
	      } else for (; ++r < i;) {
	        n.add(e(t[r], r, t));
	      }
	    }return n;
	  }x.prototype = M.prototype = { constructor: x, has: w.has, add: function add(t) {
	      return this["$" + (t += "")] = t, this;
	    }, remove: w.remove, clear: w.clear, values: w.keys, size: w.size, empty: w.empty, each: w.each };var k = Array.prototype,
	      T = k.map,
	      N = k.slice,
	      A = { name: "implicit" };function E(t) {
	    var e = v(),
	        n = [],
	        r = A;function i(i) {
	      var a = i + "",
	          f = e.get(a);if (!f) {
	        if (r !== A) return r;e.set(a, f = n.push(i));
	      }return t[(f - 1) % t.length];
	    }return t = null == t ? [] : N.call(t), i.domain = function (t) {
	      if (!arguments.length) return n.slice();n = [], e = v();for (var r, a, f = -1, c = t.length; ++f < c;) {
	        e.has(a = (r = t[f]) + "") || e.set(a, n.push(r));
	      }return i;
	    }, i.range = function (e) {
	      return arguments.length ? (t = N.call(e), i) : t.slice();
	    }, i.unknown = function (t) {
	      return arguments.length ? (r = t, i) : r;
	    }, i.copy = function () {
	      return E().domain(n).range(t).unknown(r);
	    }, i;
	  }function C() {
	    var t,
	        e,
	        n = E().unknown(void 0),
	        r = n.domain,
	        i = n.range,
	        a = [0, 1],
	        f = !1,
	        c = 0,
	        u = 0,
	        o = .5;function l() {
	      var n = r().length,
	          l = a[1] < a[0],
	          h = a[l - 0],
	          d = a[1 - l];t = (d - h) / Math.max(1, n - c + 2 * u), f && (t = Math.floor(t)), h += (d - h - t * (n - c)) * o, e = t * (1 - c), f && (h = Math.round(h), e = Math.round(e));var b = s(n).map(function (e) {
	        return h + t * e;
	      });return i(l ? b.reverse() : b);
	    }return delete n.unknown, n.domain = function (t) {
	      return arguments.length ? (r(t), l()) : r();
	    }, n.range = function (t) {
	      return arguments.length ? (a = [+t[0], +t[1]], l()) : a.slice();
	    }, n.rangeRound = function (t) {
	      return a = [+t[0], +t[1]], f = !0, l();
	    }, n.bandwidth = function () {
	      return e;
	    }, n.step = function () {
	      return t;
	    }, n.round = function (t) {
	      return arguments.length ? (f = !!t, l()) : f;
	    }, n.padding = function (t) {
	      return arguments.length ? (c = u = Math.max(0, Math.min(1, t)), l()) : c;
	    }, n.paddingInner = function (t) {
	      return arguments.length ? (c = Math.max(0, Math.min(1, t)), l()) : c;
	    }, n.paddingOuter = function (t) {
	      return arguments.length ? (u = Math.max(0, Math.min(1, t)), l()) : u;
	    }, n.align = function (t) {
	      return arguments.length ? (o = Math.max(0, Math.min(1, t)), l()) : o;
	    }, n.copy = function () {
	      return C().domain(r()).range(a).round(f).paddingInner(c).paddingOuter(u).align(o);
	    }, l();
	  }function O() {
	    return function t(e) {
	      var n = e.copy;return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function () {
	        return t(n());
	      }, e;
	    }(C().paddingInner(1));
	  }var S = n(1),
	      P = function P(t) {
	    return function () {
	      return t;
	    };
	  },
	      j = function j(t) {
	    return +t;
	  },
	      D = [0, 1];function R(t, e) {
	    return (e -= t = +t) ? function (n) {
	      return (n - t) / e;
	    } : P(e);
	  }function U(t, e, n, r) {
	    var i = t[0],
	        a = t[1],
	        f = e[0],
	        c = e[1];return a < i ? (i = n(a, i), f = r(c, f)) : (i = n(i, a), f = r(f, c)), function (t) {
	      return f(i(t));
	    };
	  }function Y(t, e, n, r) {
	    var i = Math.min(t.length, e.length) - 1,
	        a = new Array(i),
	        f = new Array(i),
	        u = -1;for (t[i] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++u < i;) {
	      a[u] = n(t[u], t[u + 1]), f[u] = r(e[u], e[u + 1]);
	    }return function (e) {
	      var n = c(t, e, 1, i) - 1;return f[n](a[n](e));
	    };
	  }function B(t, e) {
	    return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp());
	  }function q(t, e) {
	    var n,
	        r,
	        i,
	        a = D,
	        f = D,
	        c = S.a,
	        u = !1;function o() {
	      return n = Math.min(a.length, f.length) > 2 ? Y : U, r = i = null, s;
	    }function s(e) {
	      return (r || (r = n(a, f, u ? function (t) {
	        return function (e, n) {
	          var r = t(e = +e, n = +n);return function (t) {
	            return t <= e ? 0 : t >= n ? 1 : r(t);
	          };
	        };
	      }(t) : t, c)))(+e);
	    }return s.invert = function (t) {
	      return (i || (i = n(f, a, R, u ? function (t) {
	        return function (e, n) {
	          var r = t(e = +e, n = +n);return function (t) {
	            return t <= 0 ? e : t >= 1 ? n : r(t);
	          };
	        };
	      }(e) : e)))(+t);
	    }, s.domain = function (t) {
	      return arguments.length ? (a = T.call(t, j), o()) : a.slice();
	    }, s.range = function (t) {
	      return arguments.length ? (f = N.call(t), o()) : f.slice();
	    }, s.rangeRound = function (t) {
	      return f = N.call(t), c = S.e, o();
	    }, s.clamp = function (t) {
	      return arguments.length ? (u = !!t, o()) : u;
	    }, s.interpolate = function (t) {
	      return arguments.length ? (c = t, o()) : c;
	    }, o();
	  }var L,
	      G = function G(t, e) {
	    if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;var n,
	        r = t.slice(0, n);return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(n + 1)];
	  },
	      z = function z(t) {
	    return (t = G(Math.abs(t))) ? t[1] : NaN;
	  },
	      F = function F(t, e) {
	    var n = G(t, e);if (!n) return t + "";var r = n[0],
	        i = n[1];return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
	  },
	      I = { "": function _(t, e) {
	      t = t.toPrecision(e);t: for (var n, r = t.length, i = 1, a = -1; i < r; ++i) {
	        switch (t[i]) {case ".":
	            a = n = i;break;case "0":
	            0 === a && (a = i), n = i;break;case "e":
	            break t;default:
	            a > 0 && (a = 0);}
	      }return a > 0 ? t.slice(0, a) + t.slice(n + 1) : t;
	    }, "%": function _(t, e) {
	      return (100 * t).toFixed(e);
	    }, b: function b(t) {
	      return Math.round(t).toString(2);
	    }, c: function c(t) {
	      return t + "";
	    }, d: function d(t) {
	      return Math.round(t).toString(10);
	    }, e: function e(t, _e2) {
	      return t.toExponential(_e2);
	    }, f: function f(t, e) {
	      return t.toFixed(e);
	    }, g: function g(t, e) {
	      return t.toPrecision(e);
	    }, o: function o(t) {
	      return Math.round(t).toString(8);
	    }, p: function p(t, e) {
	      return F(100 * t, e);
	    }, r: F, s: function s(t, e) {
	      var n = G(t, e);if (!n) return t + "";var r = n[0],
	          i = n[1],
	          a = i - (L = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
	          f = r.length;return a === f ? r : a > f ? r + new Array(a - f + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + G(t, Math.max(0, e + a - 1))[0];
	    }, X: function X(t) {
	      return Math.round(t).toString(16).toUpperCase();
	    }, x: function x(t) {
	      return Math.round(t).toString(16);
	    } },
	      H = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;function X(t) {
	    return new V(t);
	  }function V(t) {
	    if (!(e = H.exec(t))) throw new Error("invalid format: " + t);var e,
	        n = e[1] || " ",
	        r = e[2] || ">",
	        i = e[3] || "-",
	        a = e[4] || "",
	        f = !!e[5],
	        c = e[6] && +e[6],
	        u = !!e[7],
	        o = e[8] && +e[8].slice(1),
	        s = e[9] || "";"n" === s ? (u = !0, s = "g") : I[s] || (s = ""), (f || "0" === n && "=" === r) && (f = !0, n = "0", r = "="), this.fill = n, this.align = r, this.sign = i, this.symbol = a, this.zero = f, this.width = c, this.comma = u, this.precision = o, this.type = s;
	  }X.prototype = V.prototype, V.prototype.toString = function () {
	    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + this.type;
	  };var $,
	      Z,
	      W,
	      Q = function Q(t) {
	    return t;
	  },
	      J = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];$ = function (t) {
	    var e,
	        n,
	        r = t.grouping && t.thousands ? (e = t.grouping, n = t.thousands, function (t, r) {
	      for (var i = t.length, a = [], f = 0, c = e[0], u = 0; i > 0 && c > 0 && (u + c + 1 > r && (c = Math.max(1, r - u)), a.push(t.substring(i -= c, i + c)), !((u += c + 1) > r));) {
	        c = e[f = (f + 1) % e.length];
	      }return a.reverse().join(n);
	    }) : Q,
	        i = t.currency,
	        a = t.decimal,
	        f = t.numerals ? function (t) {
	      return function (e) {
	        return e.replace(/[0-9]/g, function (e) {
	          return t[+e];
	        });
	      };
	    }(t.numerals) : Q,
	        c = t.percent || "%";function u(t) {
	      var e = (t = X(t)).fill,
	          n = t.align,
	          u = t.sign,
	          o = t.symbol,
	          s = t.zero,
	          l = t.width,
	          h = t.comma,
	          d = t.precision,
	          b = t.type,
	          p = "$" === o ? i[0] : "#" === o && /[boxX]/.test(b) ? "0" + b.toLowerCase() : "",
	          _ = "$" === o ? i[1] : /[%p]/.test(b) ? c : "",
	          g = I[b],
	          y = !b || /[defgprs%]/.test(b);function m(t) {
	        var i,
	            c,
	            o,
	            m = p,
	            v = _;if ("c" === b) v = g(t) + v, t = "";else {
	          var x = (t = +t) < 0;if (t = g(Math.abs(t), d), x && 0 == +t && (x = !1), m = (x ? "(" === u ? u : "-" : "-" === u || "(" === u ? "" : u) + m, v = ("s" === b ? J[8 + L / 3] : "") + v + (x && "(" === u ? ")" : ""), y) for (i = -1, c = t.length; ++i < c;) {
	            if (48 > (o = t.charCodeAt(i)) || o > 57) {
	              v = (46 === o ? a + t.slice(i + 1) : t.slice(i)) + v, t = t.slice(0, i);break;
	            }
	          }
	        }h && !s && (t = r(t, 1 / 0));var w = m.length + t.length + v.length,
	            M = w < l ? new Array(l - w + 1).join(e) : "";switch (h && s && (t = r(M + t, M.length ? l - v.length : 1 / 0), M = ""), n) {case "<":
	            t = m + t + v + M;break;case "=":
	            t = m + M + t + v;break;case "^":
	            t = M.slice(0, w = M.length >> 1) + m + t + v + M.slice(w);break;default:
	            t = M + m + t + v;}return f(t);
	      }return d = null == d ? b ? 6 : 12 : /[gprs]/.test(b) ? Math.max(1, Math.min(21, d)) : Math.max(0, Math.min(20, d)), m.toString = function () {
	        return t + "";
	      }, m;
	    }return { format: u, formatPrefix: function formatPrefix(t, e) {
	        var n = u(((t = X(t)).type = "f", t)),
	            r = 3 * Math.max(-8, Math.min(8, Math.floor(z(e) / 3))),
	            i = Math.pow(10, -r),
	            a = J[8 + r / 3];return function (t) {
	          return n(i * t) + a;
	        };
	      } };
	  }({ decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""] }), Z = $.format, W = $.formatPrefix;var K = function K(t, e, n) {
	    var r,
	        i = t[0],
	        a = t[t.length - 1],
	        f = _(i, a, null == e ? 10 : e);switch ((n = X(null == n ? ",f" : n)).type) {case "s":
	        var c = Math.max(Math.abs(i), Math.abs(a));return null != n.precision || isNaN(r = function (t, e) {
	          return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(z(e) / 3))) - z(Math.abs(t)));
	        }(f, c)) || (n.precision = r), W(n, c);case "":case "e":case "g":case "p":case "r":
	        null != n.precision || isNaN(r = function (t, e) {
	          return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, z(e) - z(t)) + 1;
	        }(f, Math.max(Math.abs(i), Math.abs(a)))) || (n.precision = r - ("e" === n.type));break;case "f":case "%":
	        null != n.precision || isNaN(r = function (t) {
	          return Math.max(0, -z(Math.abs(t)));
	        }(f)) || (n.precision = r - 2 * ("%" === n.type));}return Z(n);
	  };function tt(t) {
	    var e = t.domain;return t.ticks = function (t) {
	      var n = e();return b(n[0], n[n.length - 1], null == t ? 10 : t);
	    }, t.tickFormat = function (t, n) {
	      return K(e(), t, n);
	    }, t.nice = function (n) {
	      null == n && (n = 10);var r,
	          i = e(),
	          a = 0,
	          f = i.length - 1,
	          c = i[a],
	          u = i[f];return u < c && (r = c, c = u, u = r, r = a, a = f, f = r), (r = p(c, u, n)) > 0 ? r = p(c = Math.floor(c / r) * r, u = Math.ceil(u / r) * r, n) : r < 0 && (r = p(c = Math.ceil(c * r) / r, u = Math.floor(u * r) / r, n)), r > 0 ? (i[a] = Math.floor(c / r) * r, i[f] = Math.ceil(u / r) * r, e(i)) : r < 0 && (i[a] = Math.ceil(c * r) / r, i[f] = Math.floor(u * r) / r, e(i)), t;
	    }, t;
	  }function et() {
	    var t = q(R, S.c);return t.copy = function () {
	      return B(t, et());
	    }, tt(t);
	  }function nt() {
	    var t = [0, 1];function e(t) {
	      return +t;
	    }return e.invert = e, e.domain = e.range = function (n) {
	      return arguments.length ? (t = T.call(n, j), e) : t.slice();
	    }, e.copy = function () {
	      return nt().domain(t);
	    }, tt(e);
	  }var rt = function rt(t, e) {
	    var n,
	        r = 0,
	        i = (t = t.slice()).length - 1,
	        a = t[r],
	        f = t[i];return f < a && (n = r, r = i, i = n, n = a, a = f, f = n), t[r] = e.floor(a), t[i] = e.ceil(f), t;
	  };function it(t, e) {
	    return (e = Math.log(e / t)) ? function (n) {
	      return Math.log(n / t) / e;
	    } : P(e);
	  }function at(t, e) {
	    return t < 0 ? function (n) {
	      return -Math.pow(-e, n) * Math.pow(-t, 1 - n);
	    } : function (n) {
	      return Math.pow(e, n) * Math.pow(t, 1 - n);
	    };
	  }function ft(t) {
	    return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
	  }function ct(t) {
	    return 10 === t ? ft : t === Math.E ? Math.exp : function (e) {
	      return Math.pow(t, e);
	    };
	  }function ut(t) {
	    return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), function (e) {
	      return Math.log(e) / t;
	    });
	  }function ot(t) {
	    return function (e) {
	      return -t(-e);
	    };
	  }function st() {
	    var t = q(it, at).domain([1, 10]),
	        e = t.domain,
	        n = 10,
	        r = ut(10),
	        i = ct(10);function a() {
	      return r = ut(n), i = ct(n), e()[0] < 0 && (r = ot(r), i = ot(i)), t;
	    }return t.base = function (t) {
	      return arguments.length ? (n = +t, a()) : n;
	    }, t.domain = function (t) {
	      return arguments.length ? (e(t), a()) : e();
	    }, t.ticks = function (t) {
	      var a,
	          f = e(),
	          c = f[0],
	          u = f[f.length - 1];(a = u < c) && (h = c, c = u, u = h);var o,
	          s,
	          l,
	          h = r(c),
	          d = r(u),
	          p = null == t ? 10 : +t,
	          _ = [];if (!(n % 1) && d - h < p) {
	        if (h = Math.round(h) - 1, d = Math.round(d) + 1, c > 0) {
	          for (; h < d; ++h) {
	            for (s = 1, o = i(h); s < n; ++s) {
	              if (!((l = o * s) < c)) {
	                if (l > u) break;_.push(l);
	              }
	            }
	          }
	        } else for (; h < d; ++h) {
	          for (s = n - 1, o = i(h); s >= 1; --s) {
	            if (!((l = o * s) < c)) {
	              if (l > u) break;_.push(l);
	            }
	          }
	        }
	      } else _ = b(h, d, Math.min(d - h, p)).map(i);return a ? _.reverse() : _;
	    }, t.tickFormat = function (e, a) {
	      if (null == a && (a = 10 === n ? ".0e" : ","), "function" != typeof a && (a = Z(a)), e === 1 / 0) return a;null == e && (e = 10);var f = Math.max(1, n * e / t.ticks().length);return function (t) {
	        var e = t / i(Math.round(r(t)));return e * n < n - .5 && (e *= n), e <= f ? a(t) : "";
	      };
	    }, t.nice = function () {
	      return e(rt(e(), { floor: function floor(t) {
	          return i(Math.floor(r(t)));
	        }, ceil: function ceil(t) {
	          return i(Math.ceil(r(t)));
	        } }));
	    }, t.copy = function () {
	      return B(t, st().base(n));
	    }, t;
	  }function lt(t, e) {
	    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
	  }function ht() {
	    var t = 1,
	        e = q(function (e, n) {
	      return (n = lt(n, t) - (e = lt(e, t))) ? function (r) {
	        return (lt(r, t) - e) / n;
	      } : P(n);
	    }, function (e, n) {
	      return n = lt(n, t) - (e = lt(e, t)), function (r) {
	        return lt(e + n * r, 1 / t);
	      };
	    }),
	        n = e.domain;return e.exponent = function (e) {
	      return arguments.length ? (t = +e, n(n())) : t;
	    }, e.copy = function () {
	      return B(e, ht().exponent(t));
	    }, tt(e);
	  }function dt() {
	    return ht().exponent(.5);
	  }function bt() {
	    var t = [],
	        e = [],
	        n = [];function i() {
	      var r = 0,
	          i = Math.max(1, e.length);for (n = new Array(i - 1); ++r < i;) {
	        n[r - 1] = g(t, r / i);
	      }return a;
	    }function a(t) {
	      if (!isNaN(t = +t)) return e[c(n, t)];
	    }return a.invertExtent = function (r) {
	      var i = e.indexOf(r);return i < 0 ? [NaN, NaN] : [i > 0 ? n[i - 1] : t[0], i < n.length ? n[i] : t[t.length - 1]];
	    }, a.domain = function (e) {
	      if (!arguments.length) return t.slice();t = [];for (var n, a = 0, f = e.length; a < f; ++a) {
	        null == (n = e[a]) || isNaN(n = +n) || t.push(n);
	      }return t.sort(r), i();
	    }, a.range = function (t) {
	      return arguments.length ? (e = N.call(t), i()) : e.slice();
	    }, a.quantiles = function () {
	      return n.slice();
	    }, a.copy = function () {
	      return bt().domain(t).range(e);
	    }, a;
	  }function pt() {
	    var t = 0,
	        e = 1,
	        n = 1,
	        r = [.5],
	        i = [0, 1];function a(t) {
	      if (t <= t) return i[c(r, t, 0, n)];
	    }function f() {
	      var i = -1;for (r = new Array(n); ++i < n;) {
	        r[i] = ((i + 1) * e - (i - n) * t) / (n + 1);
	      }return a;
	    }return a.domain = function (n) {
	      return arguments.length ? (t = +n[0], e = +n[1], f()) : [t, e];
	    }, a.range = function (t) {
	      return arguments.length ? (n = (i = N.call(t)).length - 1, f()) : i.slice();
	    }, a.invertExtent = function (a) {
	      var f = i.indexOf(a);return f < 0 ? [NaN, NaN] : f < 1 ? [t, r[0]] : f >= n ? [r[n - 1], e] : [r[f - 1], r[f]];
	    }, a.copy = function () {
	      return pt().domain([t, e]).range(i);
	    }, tt(a);
	  }function _t() {
	    var t = [.5],
	        e = [0, 1],
	        n = 1;function r(r) {
	      if (r <= r) return e[c(t, r, 0, n)];
	    }return r.domain = function (i) {
	      return arguments.length ? (t = N.call(i), n = Math.min(t.length, e.length - 1), r) : t.slice();
	    }, r.range = function (i) {
	      return arguments.length ? (e = N.call(i), n = Math.min(t.length, e.length - 1), r) : e.slice();
	    }, r.invertExtent = function (n) {
	      var r = e.indexOf(n);return [t[r - 1], t[r]];
	    }, r.copy = function () {
	      return _t().domain(t).range(e);
	    }, r;
	  }var gt = new Date(),
	      yt = new Date();function mt(t, e, n, r) {
	    function i(e) {
	      return t(e = new Date(+e)), e;
	    }return i.floor = i, i.ceil = function (n) {
	      return t(n = new Date(n - 1)), e(n, 1), t(n), n;
	    }, i.round = function (t) {
	      var e = i(t),
	          n = i.ceil(t);return t - e < n - t ? e : n;
	    }, i.offset = function (t, n) {
	      return e(t = new Date(+t), null == n ? 1 : Math.floor(n)), t;
	    }, i.range = function (n, r, a) {
	      var f,
	          c = [];if (n = i.ceil(n), a = null == a ? 1 : Math.floor(a), !(n < r && a > 0)) return c;do {
	        c.push(f = new Date(+n)), e(n, a), t(n);
	      } while (f < n && n < r);return c;
	    }, i.filter = function (n) {
	      return mt(function (e) {
	        if (e >= e) for (; t(e), !n(e);) {
	          e.setTime(e - 1);
	        }
	      }, function (t, r) {
	        if (t >= t) if (r < 0) for (; ++r <= 0;) {
	          for (; e(t, -1), !n(t);) {}
	        } else for (; --r >= 0;) {
	          for (; e(t, 1), !n(t);) {}
	        }
	      });
	    }, n && (i.count = function (e, r) {
	      return gt.setTime(+e), yt.setTime(+r), t(gt), t(yt), Math.floor(n(gt, yt));
	    }, i.every = function (t) {
	      return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? i.filter(r ? function (e) {
	        return r(e) % t == 0;
	      } : function (e) {
	        return i.count(0, e) % t == 0;
	      }) : i : null;
	    }), i;
	  }var vt = mt(function () {}, function (t, e) {
	    t.setTime(+t + e);
	  }, function (t, e) {
	    return e - t;
	  });vt.every = function (t) {
	    return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? mt(function (e) {
	      e.setTime(Math.floor(e / t) * t);
	    }, function (e, n) {
	      e.setTime(+e + n * t);
	    }, function (e, n) {
	      return (n - e) / t;
	    }) : vt : null;
	  };var xt = vt,
	      wt = (vt.range, 6e4),
	      Mt = 6048e5,
	      kt = mt(function (t) {
	    t.setTime(1e3 * Math.floor(t / 1e3));
	  }, function (t, e) {
	    t.setTime(+t + 1e3 * e);
	  }, function (t, e) {
	    return (e - t) / 1e3;
	  }, function (t) {
	    return t.getUTCSeconds();
	  }),
	      Tt = kt,
	      Nt = (kt.range, mt(function (t) {
	    t.setTime(Math.floor(t / wt) * wt);
	  }, function (t, e) {
	    t.setTime(+t + e * wt);
	  }, function (t, e) {
	    return (e - t) / wt;
	  }, function (t) {
	    return t.getMinutes();
	  })),
	      At = Nt,
	      Et = (Nt.range, mt(function (t) {
	    var e = t.getTimezoneOffset() * wt % 36e5;e < 0 && (e += 36e5), t.setTime(36e5 * Math.floor((+t - e) / 36e5) + e);
	  }, function (t, e) {
	    t.setTime(+t + 36e5 * e);
	  }, function (t, e) {
	    return (e - t) / 36e5;
	  }, function (t) {
	    return t.getHours();
	  })),
	      Ct = Et,
	      Ot = (Et.range, mt(function (t) {
	    t.setHours(0, 0, 0, 0);
	  }, function (t, e) {
	    t.setDate(t.getDate() + e);
	  }, function (t, e) {
	    return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * wt) / 864e5;
	  }, function (t) {
	    return t.getDate() - 1;
	  })),
	      St = Ot;Ot.range;function Pt(t) {
	    return mt(function (e) {
	      e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7), e.setHours(0, 0, 0, 0);
	    }, function (t, e) {
	      t.setDate(t.getDate() + 7 * e);
	    }, function (t, e) {
	      return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * wt) / Mt;
	    });
	  }var jt = Pt(0),
	      Dt = Pt(1),
	      Rt = Pt(2),
	      Ut = Pt(3),
	      Yt = Pt(4),
	      Bt = Pt(5),
	      qt = Pt(6),
	      Lt = (jt.range, Dt.range, Rt.range, Ut.range, Yt.range, Bt.range, qt.range, mt(function (t) {
	    t.setDate(1), t.setHours(0, 0, 0, 0);
	  }, function (t, e) {
	    t.setMonth(t.getMonth() + e);
	  }, function (t, e) {
	    return e.getMonth() - t.getMonth() + 12 * (e.getFullYear() - t.getFullYear());
	  }, function (t) {
	    return t.getMonth();
	  })),
	      Gt = Lt,
	      zt = (Lt.range, mt(function (t) {
	    t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
	  }, function (t, e) {
	    t.setFullYear(t.getFullYear() + e);
	  }, function (t, e) {
	    return e.getFullYear() - t.getFullYear();
	  }, function (t) {
	    return t.getFullYear();
	  }));zt.every = function (t) {
	    return isFinite(t = Math.floor(t)) && t > 0 ? mt(function (e) {
	      e.setFullYear(Math.floor(e.getFullYear() / t) * t), e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
	    }, function (e, n) {
	      e.setFullYear(e.getFullYear() + n * t);
	    }) : null;
	  };var Ft = zt,
	      It = (zt.range, mt(function (t) {
	    t.setUTCSeconds(0, 0);
	  }, function (t, e) {
	    t.setTime(+t + e * wt);
	  }, function (t, e) {
	    return (e - t) / wt;
	  }, function (t) {
	    return t.getUTCMinutes();
	  })),
	      Ht = It,
	      Xt = (It.range, mt(function (t) {
	    t.setUTCMinutes(0, 0, 0);
	  }, function (t, e) {
	    t.setTime(+t + 36e5 * e);
	  }, function (t, e) {
	    return (e - t) / 36e5;
	  }, function (t) {
	    return t.getUTCHours();
	  })),
	      Vt = Xt,
	      $t = (Xt.range, mt(function (t) {
	    t.setUTCHours(0, 0, 0, 0);
	  }, function (t, e) {
	    t.setUTCDate(t.getUTCDate() + e);
	  }, function (t, e) {
	    return (e - t) / 864e5;
	  }, function (t) {
	    return t.getUTCDate() - 1;
	  })),
	      Zt = $t;$t.range;function Wt(t) {
	    return mt(function (e) {
	      e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7), e.setUTCHours(0, 0, 0, 0);
	    }, function (t, e) {
	      t.setUTCDate(t.getUTCDate() + 7 * e);
	    }, function (t, e) {
	      return (e - t) / Mt;
	    });
	  }var Qt = Wt(0),
	      Jt = Wt(1),
	      Kt = Wt(2),
	      te = Wt(3),
	      ee = Wt(4),
	      ne = Wt(5),
	      re = Wt(6),
	      ie = (Qt.range, Jt.range, Kt.range, te.range, ee.range, ne.range, re.range, mt(function (t) {
	    t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
	  }, function (t, e) {
	    t.setUTCMonth(t.getUTCMonth() + e);
	  }, function (t, e) {
	    return e.getUTCMonth() - t.getUTCMonth() + 12 * (e.getUTCFullYear() - t.getUTCFullYear());
	  }, function (t) {
	    return t.getUTCMonth();
	  })),
	      ae = ie,
	      fe = (ie.range, mt(function (t) {
	    t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
	  }, function (t, e) {
	    t.setUTCFullYear(t.getUTCFullYear() + e);
	  }, function (t, e) {
	    return e.getUTCFullYear() - t.getUTCFullYear();
	  }, function (t) {
	    return t.getUTCFullYear();
	  }));fe.every = function (t) {
	    return isFinite(t = Math.floor(t)) && t > 0 ? mt(function (e) {
	      e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
	    }, function (e, n) {
	      e.setUTCFullYear(e.getUTCFullYear() + n * t);
	    }) : null;
	  };var ce = fe;fe.range;function ue(t) {
	    if (0 <= t.y && t.y < 100) {
	      var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);return e.setFullYear(t.y), e;
	    }return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
	  }function oe(t) {
	    if (0 <= t.y && t.y < 100) {
	      var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));return e.setUTCFullYear(t.y), e;
	    }return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
	  }function se(t) {
	    return { y: t, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0 };
	  }var le,
	      he,
	      de,
	      be,
	      pe = { "-": "", _: " ", 0: "0" },
	      _e = /^\s*\d+/,
	      ge = /^%/,
	      ye = /[\\^$*+?|[\]().{}]/g;function me(t, e, n) {
	    var r = t < 0 ? "-" : "",
	        i = (r ? -t : t) + "",
	        a = i.length;return r + (a < n ? new Array(n - a + 1).join(e) + i : i);
	  }function ve(t) {
	    return t.replace(ye, "\\$&");
	  }function xe(t) {
	    return new RegExp("^(?:" + t.map(ve).join("|") + ")", "i");
	  }function we(t) {
	    for (var e = {}, n = -1, r = t.length; ++n < r;) {
	      e[t[n].toLowerCase()] = n;
	    }return e;
	  }function Me(t, e, n) {
	    var r = _e.exec(e.slice(n, n + 1));return r ? (t.w = +r[0], n + r[0].length) : -1;
	  }function ke(t, e, n) {
	    var r = _e.exec(e.slice(n, n + 1));return r ? (t.u = +r[0], n + r[0].length) : -1;
	  }function Te(t, e, n) {
	    var r = _e.exec(e.slice(n, n + 2));return r ? (t.U = +r[0], n + r[0].length) : -1;
	  }function Ne(t, e, n) {
	    var r = _e.exec(e.slice(n, n + 2));return r ? (t.V = +r[0], n + r[0].length) : -1;
	  }function Ae(t, e, n) {
	    var r = _e.exec(e.slice(n, n + 2));return r ? (t.W = +r[0], n + r[0].length) : -1;
	  }function Ee(t, e, n) {
	    var r = _e.exec(e.slice(n, n + 4));return r ? (t.y = +r[0], n + r[0].length) : -1;
	  }function Ce(t, e, n) {
	    var r = _e.exec(e.slice(n, n + 2));return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
	  }function Oe(t, e, n) {
	    var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
	  }function Se(t, e, n) {
	    var r = _e.exec(e.slice(n, n + 2));return r ? (t.m = r[0] - 1, n + r[0].length) : -1;
	  }function Pe(t, e, n) {
	    var r = _e.exec(e.slice(n, n + 2));return r ? (t.d = +r[0], n + r[0].length) : -1;
	  }function je(t, e, n) {
	    var r = _e.exec(e.slice(n, n + 3));return r ? (t.m = 0, t.d = +r[0], n + r[0].length) : -1;
	  }function De(t, e, n) {
	    var r = _e.exec(e.slice(n, n + 2));return r ? (t.H = +r[0], n + r[0].length) : -1;
	  }function Re(t, e, n) {
	    var r = _e.exec(e.slice(n, n + 2));return r ? (t.M = +r[0], n + r[0].length) : -1;
	  }function Ue(t, e, n) {
	    var r = _e.exec(e.slice(n, n + 2));return r ? (t.S = +r[0], n + r[0].length) : -1;
	  }function Ye(t, e, n) {
	    var r = _e.exec(e.slice(n, n + 3));return r ? (t.L = +r[0], n + r[0].length) : -1;
	  }function Be(t, e, n) {
	    var r = _e.exec(e.slice(n, n + 6));return r ? (t.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
	  }function qe(t, e, n) {
	    var r = ge.exec(e.slice(n, n + 1));return r ? n + r[0].length : -1;
	  }function Le(t, e, n) {
	    var r = _e.exec(e.slice(n));return r ? (t.Q = +r[0], n + r[0].length) : -1;
	  }function Ge(t, e, n) {
	    var r = _e.exec(e.slice(n));return r ? (t.Q = 1e3 * +r[0], n + r[0].length) : -1;
	  }function ze(t, e) {
	    return me(t.getDate(), e, 2);
	  }function Fe(t, e) {
	    return me(t.getHours(), e, 2);
	  }function Ie(t, e) {
	    return me(t.getHours() % 12 || 12, e, 2);
	  }function He(t, e) {
	    return me(1 + St.count(Ft(t), t), e, 3);
	  }function Xe(t, e) {
	    return me(t.getMilliseconds(), e, 3);
	  }function Ve(t, e) {
	    return Xe(t, e) + "000";
	  }function $e(t, e) {
	    return me(t.getMonth() + 1, e, 2);
	  }function Ze(t, e) {
	    return me(t.getMinutes(), e, 2);
	  }function We(t, e) {
	    return me(t.getSeconds(), e, 2);
	  }function Qe(t) {
	    var e = t.getDay();return 0 === e ? 7 : e;
	  }function Je(t, e) {
	    return me(jt.count(Ft(t), t), e, 2);
	  }function Ke(t, e) {
	    var n = t.getDay();return t = n >= 4 || 0 === n ? Yt(t) : Yt.ceil(t), me(Yt.count(Ft(t), t) + (4 === Ft(t).getDay()), e, 2);
	  }function tn(t) {
	    return t.getDay();
	  }function en(t, e) {
	    return me(Dt.count(Ft(t), t), e, 2);
	  }function nn(t, e) {
	    return me(t.getFullYear() % 100, e, 2);
	  }function rn(t, e) {
	    return me(t.getFullYear() % 1e4, e, 4);
	  }function an(t) {
	    var e = t.getTimezoneOffset();return (e > 0 ? "-" : (e *= -1, "+")) + me(e / 60 | 0, "0", 2) + me(e % 60, "0", 2);
	  }function fn(t, e) {
	    return me(t.getUTCDate(), e, 2);
	  }function cn(t, e) {
	    return me(t.getUTCHours(), e, 2);
	  }function un(t, e) {
	    return me(t.getUTCHours() % 12 || 12, e, 2);
	  }function on(t, e) {
	    return me(1 + Zt.count(ce(t), t), e, 3);
	  }function sn(t, e) {
	    return me(t.getUTCMilliseconds(), e, 3);
	  }function ln(t, e) {
	    return sn(t, e) + "000";
	  }function hn(t, e) {
	    return me(t.getUTCMonth() + 1, e, 2);
	  }function dn(t, e) {
	    return me(t.getUTCMinutes(), e, 2);
	  }function bn(t, e) {
	    return me(t.getUTCSeconds(), e, 2);
	  }function pn(t) {
	    var e = t.getUTCDay();return 0 === e ? 7 : e;
	  }function _n(t, e) {
	    return me(Qt.count(ce(t), t), e, 2);
	  }function gn(t, e) {
	    var n = t.getUTCDay();return t = n >= 4 || 0 === n ? ee(t) : ee.ceil(t), me(ee.count(ce(t), t) + (4 === ce(t).getUTCDay()), e, 2);
	  }function yn(t) {
	    return t.getUTCDay();
	  }function mn(t, e) {
	    return me(Jt.count(ce(t), t), e, 2);
	  }function vn(t, e) {
	    return me(t.getUTCFullYear() % 100, e, 2);
	  }function xn(t, e) {
	    return me(t.getUTCFullYear() % 1e4, e, 4);
	  }function wn() {
	    return "+0000";
	  }function Mn() {
	    return "%";
	  }function kn(t) {
	    return +t;
	  }function Tn(t) {
	    return Math.floor(+t / 1e3);
	  }!function (t) {
	    le = function (t) {
	      var e = t.dateTime,
	          n = t.date,
	          r = t.time,
	          i = t.periods,
	          a = t.days,
	          f = t.shortDays,
	          c = t.months,
	          u = t.shortMonths,
	          o = xe(i),
	          s = we(i),
	          l = xe(a),
	          h = we(a),
	          d = xe(f),
	          b = we(f),
	          p = xe(c),
	          _ = we(c),
	          g = xe(u),
	          y = we(u),
	          m = { a: function a(t) {
	          return f[t.getDay()];
	        }, A: function A(t) {
	          return a[t.getDay()];
	        }, b: function b(t) {
	          return u[t.getMonth()];
	        }, B: function B(t) {
	          return c[t.getMonth()];
	        }, c: null, d: ze, e: ze, f: Ve, H: Fe, I: Ie, j: He, L: Xe, m: $e, M: Ze, p: function p(t) {
	          return i[+(t.getHours() >= 12)];
	        }, Q: kn, s: Tn, S: We, u: Qe, U: Je, V: Ke, w: tn, W: en, x: null, X: null, y: nn, Y: rn, Z: an, "%": Mn },
	          v = { a: function a(t) {
	          return f[t.getUTCDay()];
	        }, A: function A(t) {
	          return a[t.getUTCDay()];
	        }, b: function b(t) {
	          return u[t.getUTCMonth()];
	        }, B: function B(t) {
	          return c[t.getUTCMonth()];
	        }, c: null, d: fn, e: fn, f: ln, H: cn, I: un, j: on, L: sn, m: hn, M: dn, p: function p(t) {
	          return i[+(t.getUTCHours() >= 12)];
	        }, Q: kn, s: Tn, S: bn, u: pn, U: _n, V: gn, w: yn, W: mn, x: null, X: null, y: vn, Y: xn, Z: wn, "%": Mn },
	          x = { a: function a(t, e, n) {
	          var r = d.exec(e.slice(n));return r ? (t.w = b[r[0].toLowerCase()], n + r[0].length) : -1;
	        }, A: function A(t, e, n) {
	          var r = l.exec(e.slice(n));return r ? (t.w = h[r[0].toLowerCase()], n + r[0].length) : -1;
	        }, b: function b(t, e, n) {
	          var r = g.exec(e.slice(n));return r ? (t.m = y[r[0].toLowerCase()], n + r[0].length) : -1;
	        }, B: function B(t, e, n) {
	          var r = p.exec(e.slice(n));return r ? (t.m = _[r[0].toLowerCase()], n + r[0].length) : -1;
	        }, c: function c(t, n, r) {
	          return k(t, e, n, r);
	        }, d: Pe, e: Pe, f: Be, H: De, I: De, j: je, L: Ye, m: Se, M: Re, p: function p(t, e, n) {
	          var r = o.exec(e.slice(n));return r ? (t.p = s[r[0].toLowerCase()], n + r[0].length) : -1;
	        }, Q: Le, s: Ge, S: Ue, u: ke, U: Te, V: Ne, w: Me, W: Ae, x: function x(t, e, r) {
	          return k(t, n, e, r);
	        }, X: function X(t, e, n) {
	          return k(t, r, e, n);
	        }, y: Ce, Y: Ee, Z: Oe, "%": qe };function w(t, e) {
	        return function (n) {
	          var r,
	              i,
	              a,
	              f = [],
	              c = -1,
	              u = 0,
	              o = t.length;for (n instanceof Date || (n = new Date(+n)); ++c < o;) {
	            37 === t.charCodeAt(c) && (f.push(t.slice(u, c)), null != (i = pe[r = t.charAt(++c)]) ? r = t.charAt(++c) : i = "e" === r ? " " : "0", (a = e[r]) && (r = a(n, i)), f.push(r), u = c + 1);
	          }return f.push(t.slice(u, c)), f.join("");
	        };
	      }function M(t, e) {
	        return function (n) {
	          var r,
	              i,
	              a = se(1900);if (k(a, t, n += "", 0) != n.length) return null;if ("Q" in a) return new Date(a.Q);if ("p" in a && (a.H = a.H % 12 + 12 * a.p), "V" in a) {
	            if (a.V < 1 || a.V > 53) return null;"w" in a || (a.w = 1), "Z" in a ? (r = (i = (r = oe(se(a.y))).getUTCDay()) > 4 || 0 === i ? Jt.ceil(r) : Jt(r), r = Zt.offset(r, 7 * (a.V - 1)), a.y = r.getUTCFullYear(), a.m = r.getUTCMonth(), a.d = r.getUTCDate() + (a.w + 6) % 7) : (r = (i = (r = e(se(a.y))).getDay()) > 4 || 0 === i ? Dt.ceil(r) : Dt(r), r = St.offset(r, 7 * (a.V - 1)), a.y = r.getFullYear(), a.m = r.getMonth(), a.d = r.getDate() + (a.w + 6) % 7);
	          } else ("W" in a || "U" in a) && ("w" in a || (a.w = "u" in a ? a.u % 7 : "W" in a ? 1 : 0), i = "Z" in a ? oe(se(a.y)).getUTCDay() : e(se(a.y)).getDay(), a.m = 0, a.d = "W" in a ? (a.w + 6) % 7 + 7 * a.W - (i + 5) % 7 : a.w + 7 * a.U - (i + 6) % 7);return "Z" in a ? (a.H += a.Z / 100 | 0, a.M += a.Z % 100, oe(a)) : e(a);
	        };
	      }function k(t, e, n, r) {
	        for (var i, a, f = 0, c = e.length, u = n.length; f < c;) {
	          if (r >= u) return -1;if (37 === (i = e.charCodeAt(f++))) {
	            if (i = e.charAt(f++), !(a = x[i in pe ? e.charAt(f++) : i]) || (r = a(t, n, r)) < 0) return -1;
	          } else if (i != n.charCodeAt(r++)) return -1;
	        }return r;
	      }return m.x = w(n, m), m.X = w(r, m), m.c = w(e, m), v.x = w(n, v), v.X = w(r, v), v.c = w(e, v), { format: function format(t) {
	          var e = w(t += "", m);return e.toString = function () {
	            return t;
	          }, e;
	        }, parse: function parse(t) {
	          var e = M(t += "", ue);return e.toString = function () {
	            return t;
	          }, e;
	        }, utcFormat: function utcFormat(t) {
	          var e = w(t += "", v);return e.toString = function () {
	            return t;
	          }, e;
	        }, utcParse: function utcParse(t) {
	          var e = M(t, oe);return e.toString = function () {
	            return t;
	          }, e;
	        } };
	    }(t), he = le.format, le.parse, de = le.utcFormat, be = le.utcParse;
	  }({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] });Date.prototype.toISOString || de("%Y-%m-%dT%H:%M:%S.%LZ");+new Date("2000-01-01T00:00:00.000Z") || be("%Y-%m-%dT%H:%M:%S.%LZ");var Nn = 1e3,
	      An = 60 * Nn,
	      En = 60 * An,
	      Cn = 24 * En,
	      On = 7 * Cn,
	      Sn = 30 * Cn,
	      Pn = 365 * Cn;function jn(t) {
	    return new Date(t);
	  }function Dn(t) {
	    return t instanceof Date ? +t : +new Date(+t);
	  }function Rn(t, e, n, r, a, f, c, u, o) {
	    var s = q(R, S.c),
	        l = s.invert,
	        h = s.domain,
	        d = o(".%L"),
	        b = o(":%S"),
	        p = o("%I:%M"),
	        g = o("%I %p"),
	        y = o("%a %d"),
	        m = o("%b %d"),
	        v = o("%B"),
	        x = o("%Y"),
	        w = [[c, 1, Nn], [c, 5, 5 * Nn], [c, 15, 15 * Nn], [c, 30, 30 * Nn], [f, 1, An], [f, 5, 5 * An], [f, 15, 15 * An], [f, 30, 30 * An], [a, 1, En], [a, 3, 3 * En], [a, 6, 6 * En], [a, 12, 12 * En], [r, 1, Cn], [r, 2, 2 * Cn], [n, 1, On], [e, 1, Sn], [e, 3, 3 * Sn], [t, 1, Pn]];function M(i) {
	      return (c(i) < i ? d : f(i) < i ? b : a(i) < i ? p : r(i) < i ? g : e(i) < i ? n(i) < i ? y : m : t(i) < i ? v : x)(i);
	    }function k(e, n, r, a) {
	      if (null == e && (e = 10), "number" == typeof e) {
	        var f = Math.abs(r - n) / e,
	            c = i(function (t) {
	          return t[2];
	        }).right(w, f);c === w.length ? (a = _(n / Pn, r / Pn, e), e = t) : c ? (a = (c = w[f / w[c - 1][2] < w[c][2] / f ? c - 1 : c])[1], e = c[0]) : (a = Math.max(_(n, r, e), 1), e = u);
	      }return null == a ? e : e.every(a);
	    }return s.invert = function (t) {
	      return new Date(l(t));
	    }, s.domain = function (t) {
	      return arguments.length ? h(T.call(t, Dn)) : h().map(jn);
	    }, s.ticks = function (t, e) {
	      var n,
	          r = h(),
	          i = r[0],
	          a = r[r.length - 1],
	          f = a < i;return f && (n = i, i = a, a = n), n = (n = k(t, i, a, e)) ? n.range(i, a + 1) : [], f ? n.reverse() : n;
	    }, s.tickFormat = function (t, e) {
	      return null == e ? M : o(e);
	    }, s.nice = function (t, e) {
	      var n = h();return (t = k(t, n[0], n[n.length - 1], e)) ? h(rt(n, t)) : s;
	    }, s.copy = function () {
	      return B(s, Rn(t, e, n, r, a, f, c, u, o));
	    }, s;
	  }var Un = function Un() {
	    return Rn(Ft, Gt, jt, St, Ct, At, Tt, xt, he).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]);
	  },
	      Yn = function Yn() {
	    return Rn(ce, ae, Qt, Zt, Vt, Ht, Tt, xt, de).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]);
	  };function Bn(t) {
	    var e = 0,
	        n = 1,
	        r = !1;function i(i) {
	      var a = (i - e) / (n - e);return t(r ? Math.max(0, Math.min(1, a)) : a);
	    }return i.domain = function (t) {
	      return arguments.length ? (e = +t[0], n = +t[1], i) : [e, n];
	    }, i.clamp = function (t) {
	      return arguments.length ? (r = !!t, i) : r;
	    }, i.interpolator = function (e) {
	      return arguments.length ? (t = e, i) : t;
	    }, i.copy = function () {
	      return Bn(t).domain([e, n]).clamp(r);
	    }, tt(i);
	  }n.d(e, "scaleBand", function () {
	    return C;
	  }), n.d(e, "scalePoint", function () {
	    return O;
	  }), n.d(e, "scaleIdentity", function () {
	    return nt;
	  }), n.d(e, "scaleLinear", function () {
	    return et;
	  }), n.d(e, "scaleLog", function () {
	    return st;
	  }), n.d(e, "scaleOrdinal", function () {
	    return E;
	  }), n.d(e, "scaleImplicit", function () {
	    return A;
	  }), n.d(e, "scalePow", function () {
	    return ht;
	  }), n.d(e, "scaleSqrt", function () {
	    return dt;
	  }), n.d(e, "scaleQuantile", function () {
	    return bt;
	  }), n.d(e, "scaleQuantize", function () {
	    return pt;
	  }), n.d(e, "scaleThreshold", function () {
	    return _t;
	  }), n.d(e, "scaleTime", function () {
	    return Un;
	  }), n.d(e, "scaleUtc", function () {
	    return Yn;
	  }), n.d(e, "scaleSequential", function () {
	    return Bn;
	  });
	}, function (t, e) {
	  t.exports = function (t) {
	    return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", { enumerable: !0, get: function get() {
	        return t.l;
	      } }), Object.defineProperty(t, "id", { enumerable: !0, get: function get() {
	        return t.i;
	      } }), t.webpackPolyfill = 1), t;
	  };
	}, function (t, e, n) {
	  "use strict";
	  n.r(e);var r = n(4),
	      i = n.n(r);n.d(e, "ColormapTestImage", function () {
	    return i.a;
	  });var a = n(7),
	      f = n.n(a);n.d(e, "ColormapRGBPlot", function () {
	    return f.a;
	  });var c = n(6),
	      u = n.n(c);n.d(e, "ColorWheel", function () {
	    return u.a;
	  });var o = n(5),
	      s = n.n(o);n.d(e, "ColormapSelector", function () {
	    return s.a;
	  });var l = n(2),
	      h = n.n(l);n.d(e, "Colormap", function () {
	    return h.a;
	  });
	}]);

/***/ })

};;
//# sourceMappingURL=2.render-page.js.map