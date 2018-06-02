webpackJsonp([4],{

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	module.exports = function (e) {
	  var t = {};function n(o) {
	    if (t[o]) return t[o].exports;var r = t[o] = { i: o, l: !1, exports: {} };return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
	  }return n.m = e, n.c = t, n.d = function (e, t, o) {
	    n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: o });
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
	  }, n.p = "", n(n.s = 8);
	}([function (e, t, n) {
	  "use strict";
	  Object.defineProperty(t, "__esModule", { value: !0 });var o = function () {
	    function e(e, t) {
	      for (var n = 0; n < t.length; n++) {
	        var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
	      }
	    }return function (t, n, o) {
	      return n && e(t.prototype, n), o && e(t, o), t;
	    };
	  }(),
	      r = n(7),
	      i = s(r);n(6);var a = s(n(1));function s(e) {
	    return e && e.__esModule ? e : { default: e };
	  }var l = function (e) {
	    function t(e) {
	      !function (e, t) {
	        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	      }(this, t);var n = function (e, t) {
	        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
	      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));return n.width = 800, n.height = 480, n.canvasRef = i.default.createRef(), n.controlRef = i.default.createRef(), n;
	    }return function (e, t) {
	      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	    }(t, r.Component), o(t, [{ key: "componentDidMount", value: function value() {
	        var e = document.createElement("canvas");e.width = this.width, e.height = this.height, this.canvasRef.current.appendChild(e);var t = 30;void 0 !== this.props.meshsize && (t = Number(this.props.meshsize));var n = "uniform";void 0 !== this.props.lighting && (n = this.props.lighting);var o = !1;"true" === this.props.useTexturedEarth && (o = !0), (0, a.default)(this.controlRef.current, e, t, n, o);
	      } }, { key: "render", value: function value() {
	        return i.default.createElement("p", null, i.default.createElement("div", { className: "demon" }, i.default.createElement("div", { className: "demon", ref: this.controlRef, style: { height: 0, float: "right", "z-index": 0, position: "relative", top: 0, left: 0 } }), i.default.createElement("div", { ref: this.canvasRef })));
	      } }]), t;
	  }();t.default = l;
	}, function (e, t, n) {
	  "use strict";
	  n.r(t);var o = {};n.d(o, "create", function () {
	    return a;
	  }), n.d(o, "clone", function () {
	    return s;
	  }), n.d(o, "copy", function () {
	    return l;
	  }), n.d(o, "fromValues", function () {
	    return u;
	  }), n.d(o, "set", function () {
	    return c;
	  }), n.d(o, "identity", function () {
	    return d;
	  }), n.d(o, "transpose", function () {
	    return f;
	  }), n.d(o, "invert", function () {
	    return h;
	  }), n.d(o, "adjoint", function () {
	    return p;
	  }), n.d(o, "determinant", function () {
	    return _;
	  }), n.d(o, "multiply", function () {
	    return m;
	  }), n.d(o, "translate", function () {
	    return b;
	  }), n.d(o, "scale", function () {
	    return g;
	  }), n.d(o, "rotate", function () {
	    return v;
	  }), n.d(o, "rotateX", function () {
	    return y;
	  }), n.d(o, "rotateY", function () {
	    return w;
	  }), n.d(o, "rotateZ", function () {
	    return x;
	  }), n.d(o, "fromTranslation", function () {
	    return E;
	  }), n.d(o, "fromScaling", function () {
	    return A;
	  }), n.d(o, "fromRotation", function () {
	    return C;
	  }), n.d(o, "fromXRotation", function () {
	    return M;
	  }), n.d(o, "fromYRotation", function () {
	    return S;
	  }), n.d(o, "fromZRotation", function () {
	    return k;
	  }), n.d(o, "fromRotationTranslation", function () {
	    return T;
	  }), n.d(o, "fromQuat2", function () {
	    return R;
	  }), n.d(o, "getTranslation", function () {
	    return O;
	  }), n.d(o, "getScaling", function () {
	    return L;
	  }), n.d(o, "getRotation", function () {
	    return B;
	  }), n.d(o, "fromRotationTranslationScale", function () {
	    return N;
	  }), n.d(o, "fromRotationTranslationScaleOrigin", function () {
	    return F;
	  }), n.d(o, "fromQuat", function () {
	    return P;
	  }), n.d(o, "frustum", function () {
	    return D;
	  }), n.d(o, "perspective", function () {
	    return U;
	  }), n.d(o, "perspectiveFromFieldOfView", function () {
	    return I;
	  }), n.d(o, "ortho", function () {
	    return j;
	  }), n.d(o, "lookAt", function () {
	    return H;
	  }), n.d(o, "targetTo", function () {
	    return V;
	  }), n.d(o, "str", function () {
	    return z;
	  }), n.d(o, "frob", function () {
	    return G;
	  }), n.d(o, "add", function () {
	    return X;
	  }), n.d(o, "subtract", function () {
	    return Y;
	  }), n.d(o, "multiplyScalar", function () {
	    return q;
	  }), n.d(o, "multiplyScalarAndAdd", function () {
	    return W;
	  }), n.d(o, "exactEquals", function () {
	    return J;
	  }), n.d(o, "equals", function () {
	    return K;
	  }), n.d(o, "mul", function () {
	    return Q;
	  }), n.d(o, "sub", function () {
	    return Z;
	  });var r = 1e-6;var i = "undefined" != typeof Float32Array ? Float32Array : Array;Math.random;Math.PI;function a() {
	    var e = new i(16);return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
	  }function s(e) {
	    var t = new i(16);return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t;
	  }function l(e, t) {
	    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e;
	  }function u(e, t, n, o, r, a, s, l, u, c, d, f, h, p, _, m) {
	    var b = new i(16);return b[0] = e, b[1] = t, b[2] = n, b[3] = o, b[4] = r, b[5] = a, b[6] = s, b[7] = l, b[8] = u, b[9] = c, b[10] = d, b[11] = f, b[12] = h, b[13] = p, b[14] = _, b[15] = m, b;
	  }function c(e, t, n, o, r, i, a, s, l, u, c, d, f, h, p, _, m) {
	    return e[0] = t, e[1] = n, e[2] = o, e[3] = r, e[4] = i, e[5] = a, e[6] = s, e[7] = l, e[8] = u, e[9] = c, e[10] = d, e[11] = f, e[12] = h, e[13] = p, e[14] = _, e[15] = m, e;
	  }function d(e) {
	    return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
	  }function f(e, t) {
	    if (e === t) {
	      var _n = t[1],
	          _o = t[2],
	          _r = t[3],
	          _i = t[6],
	          _a = t[7],
	          _s = t[11];e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = _n, e[6] = t[9], e[7] = t[13], e[8] = _o, e[9] = _i, e[11] = t[14], e[12] = _r, e[13] = _a, e[14] = _s;
	    } else e[0] = t[0], e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = t[1], e[5] = t[5], e[6] = t[9], e[7] = t[13], e[8] = t[2], e[9] = t[6], e[10] = t[10], e[11] = t[14], e[12] = t[3], e[13] = t[7], e[14] = t[11], e[15] = t[15];return e;
	  }function h(e, t) {
	    var n = t[0],
	        o = t[1],
	        r = t[2],
	        i = t[3],
	        a = t[4],
	        s = t[5],
	        l = t[6],
	        u = t[7],
	        c = t[8],
	        d = t[9],
	        f = t[10],
	        h = t[11],
	        p = t[12],
	        _ = t[13],
	        m = t[14],
	        b = t[15],
	        g = n * s - o * a,
	        v = n * l - r * a,
	        y = n * u - i * a,
	        w = o * l - r * s,
	        x = o * u - i * s,
	        E = r * u - i * l,
	        A = c * _ - d * p,
	        C = c * m - f * p,
	        M = c * b - h * p,
	        S = d * m - f * _,
	        k = d * b - h * _,
	        T = f * b - h * m,
	        R = g * T - v * k + y * S + w * M - x * C + E * A;return R ? (R = 1 / R, e[0] = (s * T - l * k + u * S) * R, e[1] = (r * k - o * T - i * S) * R, e[2] = (_ * E - m * x + b * w) * R, e[3] = (f * x - d * E - h * w) * R, e[4] = (l * M - a * T - u * C) * R, e[5] = (n * T - r * M + i * C) * R, e[6] = (m * y - p * E - b * v) * R, e[7] = (c * E - f * y + h * v) * R, e[8] = (a * k - s * M + u * A) * R, e[9] = (o * M - n * k - i * A) * R, e[10] = (p * x - _ * y + b * g) * R, e[11] = (d * y - c * x - h * g) * R, e[12] = (s * C - a * S - l * A) * R, e[13] = (n * S - o * C + r * A) * R, e[14] = (_ * v - p * w - m * g) * R, e[15] = (c * w - d * v + f * g) * R, e) : null;
	  }function p(e, t) {
	    var n = t[0],
	        o = t[1],
	        r = t[2],
	        i = t[3],
	        a = t[4],
	        s = t[5],
	        l = t[6],
	        u = t[7],
	        c = t[8],
	        d = t[9],
	        f = t[10],
	        h = t[11],
	        p = t[12],
	        _ = t[13],
	        m = t[14],
	        b = t[15];return e[0] = s * (f * b - h * m) - d * (l * b - u * m) + _ * (l * h - u * f), e[1] = -(o * (f * b - h * m) - d * (r * b - i * m) + _ * (r * h - i * f)), e[2] = o * (l * b - u * m) - s * (r * b - i * m) + _ * (r * u - i * l), e[3] = -(o * (l * h - u * f) - s * (r * h - i * f) + d * (r * u - i * l)), e[4] = -(a * (f * b - h * m) - c * (l * b - u * m) + p * (l * h - u * f)), e[5] = n * (f * b - h * m) - c * (r * b - i * m) + p * (r * h - i * f), e[6] = -(n * (l * b - u * m) - a * (r * b - i * m) + p * (r * u - i * l)), e[7] = n * (l * h - u * f) - a * (r * h - i * f) + c * (r * u - i * l), e[8] = a * (d * b - h * _) - c * (s * b - u * _) + p * (s * h - u * d), e[9] = -(n * (d * b - h * _) - c * (o * b - i * _) + p * (o * h - i * d)), e[10] = n * (s * b - u * _) - a * (o * b - i * _) + p * (o * u - i * s), e[11] = -(n * (s * h - u * d) - a * (o * h - i * d) + c * (o * u - i * s)), e[12] = -(a * (d * m - f * _) - c * (s * m - l * _) + p * (s * f - l * d)), e[13] = n * (d * m - f * _) - c * (o * m - r * _) + p * (o * f - r * d), e[14] = -(n * (s * m - l * _) - a * (o * m - r * _) + p * (o * l - r * s)), e[15] = n * (s * f - l * d) - a * (o * f - r * d) + c * (o * l - r * s), e;
	  }function _(e) {
	    var t = e[0],
	        n = e[1],
	        o = e[2],
	        r = e[3],
	        i = e[4],
	        a = e[5],
	        s = e[6],
	        l = e[7],
	        u = e[8],
	        c = e[9],
	        d = e[10],
	        f = e[11],
	        h = e[12],
	        p = e[13],
	        _ = e[14],
	        m = e[15];return (t * a - n * i) * (d * m - f * _) - (t * s - o * i) * (c * m - f * p) + (t * l - r * i) * (c * _ - d * p) + (n * s - o * a) * (u * m - f * h) - (n * l - r * a) * (u * _ - d * h) + (o * l - r * s) * (u * p - c * h);
	  }function m(e, t, n) {
	    var o = t[0],
	        r = t[1],
	        i = t[2],
	        a = t[3],
	        s = t[4],
	        l = t[5],
	        u = t[6],
	        c = t[7],
	        d = t[8],
	        f = t[9],
	        h = t[10],
	        p = t[11],
	        _ = t[12],
	        m = t[13],
	        b = t[14],
	        g = t[15],
	        v = n[0],
	        y = n[1],
	        w = n[2],
	        x = n[3];return e[0] = v * o + y * s + w * d + x * _, e[1] = v * r + y * l + w * f + x * m, e[2] = v * i + y * u + w * h + x * b, e[3] = v * a + y * c + w * p + x * g, v = n[4], y = n[5], w = n[6], x = n[7], e[4] = v * o + y * s + w * d + x * _, e[5] = v * r + y * l + w * f + x * m, e[6] = v * i + y * u + w * h + x * b, e[7] = v * a + y * c + w * p + x * g, v = n[8], y = n[9], w = n[10], x = n[11], e[8] = v * o + y * s + w * d + x * _, e[9] = v * r + y * l + w * f + x * m, e[10] = v * i + y * u + w * h + x * b, e[11] = v * a + y * c + w * p + x * g, v = n[12], y = n[13], w = n[14], x = n[15], e[12] = v * o + y * s + w * d + x * _, e[13] = v * r + y * l + w * f + x * m, e[14] = v * i + y * u + w * h + x * b, e[15] = v * a + y * c + w * p + x * g, e;
	  }function b(e, t, n) {
	    var o = void 0,
	        r = void 0,
	        i = void 0,
	        a = void 0,
	        s = void 0,
	        l = void 0,
	        u = void 0,
	        c = void 0,
	        d = void 0,
	        f = void 0,
	        h = void 0,
	        p = void 0,
	        _ = n[0],
	        m = n[1],
	        b = n[2];return t === e ? (e[12] = t[0] * _ + t[4] * m + t[8] * b + t[12], e[13] = t[1] * _ + t[5] * m + t[9] * b + t[13], e[14] = t[2] * _ + t[6] * m + t[10] * b + t[14], e[15] = t[3] * _ + t[7] * m + t[11] * b + t[15]) : (o = t[0], r = t[1], i = t[2], a = t[3], s = t[4], l = t[5], u = t[6], c = t[7], d = t[8], f = t[9], h = t[10], p = t[11], e[0] = o, e[1] = r, e[2] = i, e[3] = a, e[4] = s, e[5] = l, e[6] = u, e[7] = c, e[8] = d, e[9] = f, e[10] = h, e[11] = p, e[12] = o * _ + s * m + d * b + t[12], e[13] = r * _ + l * m + f * b + t[13], e[14] = i * _ + u * m + h * b + t[14], e[15] = a * _ + c * m + p * b + t[15]), e;
	  }function g(e, t, n) {
	    var o = n[0],
	        r = n[1],
	        i = n[2];return e[0] = t[0] * o, e[1] = t[1] * o, e[2] = t[2] * o, e[3] = t[3] * o, e[4] = t[4] * r, e[5] = t[5] * r, e[6] = t[6] * r, e[7] = t[7] * r, e[8] = t[8] * i, e[9] = t[9] * i, e[10] = t[10] * i, e[11] = t[11] * i, e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e;
	  }function v(e, t, n, o) {
	    var i = void 0,
	        a = void 0,
	        s = void 0,
	        l = void 0,
	        u = void 0,
	        c = void 0,
	        d = void 0,
	        f = void 0,
	        h = void 0,
	        p = void 0,
	        _ = void 0,
	        m = void 0,
	        b = void 0,
	        g = void 0,
	        v = void 0,
	        y = void 0,
	        w = void 0,
	        x = void 0,
	        E = void 0,
	        A = void 0,
	        C = void 0,
	        M = void 0,
	        S = void 0,
	        k = void 0,
	        T = o[0],
	        R = o[1],
	        O = o[2],
	        L = Math.sqrt(T * T + R * R + O * O);return L < r ? null : (T *= L = 1 / L, R *= L, O *= L, i = Math.sin(n), s = 1 - (a = Math.cos(n)), l = t[0], u = t[1], c = t[2], d = t[3], f = t[4], h = t[5], p = t[6], _ = t[7], m = t[8], b = t[9], g = t[10], v = t[11], y = T * T * s + a, w = R * T * s + O * i, x = O * T * s - R * i, E = T * R * s - O * i, A = R * R * s + a, C = O * R * s + T * i, M = T * O * s + R * i, S = R * O * s - T * i, k = O * O * s + a, e[0] = l * y + f * w + m * x, e[1] = u * y + h * w + b * x, e[2] = c * y + p * w + g * x, e[3] = d * y + _ * w + v * x, e[4] = l * E + f * A + m * C, e[5] = u * E + h * A + b * C, e[6] = c * E + p * A + g * C, e[7] = d * E + _ * A + v * C, e[8] = l * M + f * S + m * k, e[9] = u * M + h * S + b * k, e[10] = c * M + p * S + g * k, e[11] = d * M + _ * S + v * k, t !== e && (e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e);
	  }function y(e, t, n) {
	    var o = Math.sin(n),
	        r = Math.cos(n),
	        i = t[4],
	        a = t[5],
	        s = t[6],
	        l = t[7],
	        u = t[8],
	        c = t[9],
	        d = t[10],
	        f = t[11];return t !== e && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[4] = i * r + u * o, e[5] = a * r + c * o, e[6] = s * r + d * o, e[7] = l * r + f * o, e[8] = u * r - i * o, e[9] = c * r - a * o, e[10] = d * r - s * o, e[11] = f * r - l * o, e;
	  }function w(e, t, n) {
	    var o = Math.sin(n),
	        r = Math.cos(n),
	        i = t[0],
	        a = t[1],
	        s = t[2],
	        l = t[3],
	        u = t[8],
	        c = t[9],
	        d = t[10],
	        f = t[11];return t !== e && (e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = i * r - u * o, e[1] = a * r - c * o, e[2] = s * r - d * o, e[3] = l * r - f * o, e[8] = i * o + u * r, e[9] = a * o + c * r, e[10] = s * o + d * r, e[11] = l * o + f * r, e;
	  }function x(e, t, n) {
	    var o = Math.sin(n),
	        r = Math.cos(n),
	        i = t[0],
	        a = t[1],
	        s = t[2],
	        l = t[3],
	        u = t[4],
	        c = t[5],
	        d = t[6],
	        f = t[7];return t !== e && (e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = i * r + u * o, e[1] = a * r + c * o, e[2] = s * r + d * o, e[3] = l * r + f * o, e[4] = u * r - i * o, e[5] = c * r - a * o, e[6] = d * r - s * o, e[7] = f * r - l * o, e;
	  }function E(e, t) {
	    return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = t[0], e[13] = t[1], e[14] = t[2], e[15] = 1, e;
	  }function A(e, t) {
	    return e[0] = t[0], e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = t[1], e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = t[2], e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
	  }function C(e, t, n) {
	    var o = void 0,
	        i = void 0,
	        a = void 0,
	        s = n[0],
	        l = n[1],
	        u = n[2],
	        c = Math.sqrt(s * s + l * l + u * u);return c < r ? null : (s *= c = 1 / c, l *= c, u *= c, o = Math.sin(t), a = 1 - (i = Math.cos(t)), e[0] = s * s * a + i, e[1] = l * s * a + u * o, e[2] = u * s * a - l * o, e[3] = 0, e[4] = s * l * a - u * o, e[5] = l * l * a + i, e[6] = u * l * a + s * o, e[7] = 0, e[8] = s * u * a + l * o, e[9] = l * u * a - s * o, e[10] = u * u * a + i, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e);
	  }function M(e, t) {
	    var n = Math.sin(t),
	        o = Math.cos(t);return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = o, e[6] = n, e[7] = 0, e[8] = 0, e[9] = -n, e[10] = o, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
	  }function S(e, t) {
	    var n = Math.sin(t),
	        o = Math.cos(t);return e[0] = o, e[1] = 0, e[2] = -n, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = n, e[9] = 0, e[10] = o, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
	  }function k(e, t) {
	    var n = Math.sin(t),
	        o = Math.cos(t);return e[0] = o, e[1] = n, e[2] = 0, e[3] = 0, e[4] = -n, e[5] = o, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
	  }function T(e, t, n) {
	    var o = t[0],
	        r = t[1],
	        i = t[2],
	        a = t[3],
	        s = o + o,
	        l = r + r,
	        u = i + i,
	        c = o * s,
	        d = o * l,
	        f = o * u,
	        h = r * l,
	        p = r * u,
	        _ = i * u,
	        m = a * s,
	        b = a * l,
	        g = a * u;return e[0] = 1 - (h + _), e[1] = d + g, e[2] = f - b, e[3] = 0, e[4] = d - g, e[5] = 1 - (c + _), e[6] = p + m, e[7] = 0, e[8] = f + b, e[9] = p - m, e[10] = 1 - (c + h), e[11] = 0, e[12] = n[0], e[13] = n[1], e[14] = n[2], e[15] = 1, e;
	  }function R(e, t) {
	    var n = new i(3),
	        o = -t[0],
	        r = -t[1],
	        a = -t[2],
	        s = t[3],
	        l = t[4],
	        u = t[5],
	        c = t[6],
	        d = t[7],
	        f = o * o + r * r + a * a + s * s;return f > 0 ? (n[0] = 2 * (l * s + d * o + u * a - c * r) / f, n[1] = 2 * (u * s + d * r + c * o - l * a) / f, n[2] = 2 * (c * s + d * a + l * r - u * o) / f) : (n[0] = 2 * (l * s + d * o + u * a - c * r), n[1] = 2 * (u * s + d * r + c * o - l * a), n[2] = 2 * (c * s + d * a + l * r - u * o)), T(e, t, n), e;
	  }function O(e, t) {
	    return e[0] = t[12], e[1] = t[13], e[2] = t[14], e;
	  }function L(e, t) {
	    var n = t[0],
	        o = t[1],
	        r = t[2],
	        i = t[4],
	        a = t[5],
	        s = t[6],
	        l = t[8],
	        u = t[9],
	        c = t[10];return e[0] = Math.sqrt(n * n + o * o + r * r), e[1] = Math.sqrt(i * i + a * a + s * s), e[2] = Math.sqrt(l * l + u * u + c * c), e;
	  }function B(e, t) {
	    var n = t[0] + t[5] + t[10],
	        o = 0;return n > 0 ? (o = 2 * Math.sqrt(n + 1), e[3] = .25 * o, e[0] = (t[6] - t[9]) / o, e[1] = (t[8] - t[2]) / o, e[2] = (t[1] - t[4]) / o) : t[0] > t[5] && t[0] > t[10] ? (o = 2 * Math.sqrt(1 + t[0] - t[5] - t[10]), e[3] = (t[6] - t[9]) / o, e[0] = .25 * o, e[1] = (t[1] + t[4]) / o, e[2] = (t[8] + t[2]) / o) : t[5] > t[10] ? (o = 2 * Math.sqrt(1 + t[5] - t[0] - t[10]), e[3] = (t[8] - t[2]) / o, e[0] = (t[1] + t[4]) / o, e[1] = .25 * o, e[2] = (t[6] + t[9]) / o) : (o = 2 * Math.sqrt(1 + t[10] - t[0] - t[5]), e[3] = (t[1] - t[4]) / o, e[0] = (t[8] + t[2]) / o, e[1] = (t[6] + t[9]) / o, e[2] = .25 * o), e;
	  }function N(e, t, n, o) {
	    var r = t[0],
	        i = t[1],
	        a = t[2],
	        s = t[3],
	        l = r + r,
	        u = i + i,
	        c = a + a,
	        d = r * l,
	        f = r * u,
	        h = r * c,
	        p = i * u,
	        _ = i * c,
	        m = a * c,
	        b = s * l,
	        g = s * u,
	        v = s * c,
	        y = o[0],
	        w = o[1],
	        x = o[2];return e[0] = (1 - (p + m)) * y, e[1] = (f + v) * y, e[2] = (h - g) * y, e[3] = 0, e[4] = (f - v) * w, e[5] = (1 - (d + m)) * w, e[6] = (_ + b) * w, e[7] = 0, e[8] = (h + g) * x, e[9] = (_ - b) * x, e[10] = (1 - (d + p)) * x, e[11] = 0, e[12] = n[0], e[13] = n[1], e[14] = n[2], e[15] = 1, e;
	  }function F(e, t, n, o, r) {
	    var i = t[0],
	        a = t[1],
	        s = t[2],
	        l = t[3],
	        u = i + i,
	        c = a + a,
	        d = s + s,
	        f = i * u,
	        h = i * c,
	        p = i * d,
	        _ = a * c,
	        m = a * d,
	        b = s * d,
	        g = l * u,
	        v = l * c,
	        y = l * d,
	        w = o[0],
	        x = o[1],
	        E = o[2],
	        A = r[0],
	        C = r[1],
	        M = r[2],
	        S = (1 - (_ + b)) * w,
	        k = (h + y) * w,
	        T = (p - v) * w,
	        R = (h - y) * x,
	        O = (1 - (f + b)) * x,
	        L = (m + g) * x,
	        B = (p + v) * E,
	        N = (m - g) * E,
	        F = (1 - (f + _)) * E;return e[0] = S, e[1] = k, e[2] = T, e[3] = 0, e[4] = R, e[5] = O, e[6] = L, e[7] = 0, e[8] = B, e[9] = N, e[10] = F, e[11] = 0, e[12] = n[0] + A - (S * A + R * C + B * M), e[13] = n[1] + C - (k * A + O * C + N * M), e[14] = n[2] + M - (T * A + L * C + F * M), e[15] = 1, e;
	  }function P(e, t) {
	    var n = t[0],
	        o = t[1],
	        r = t[2],
	        i = t[3],
	        a = n + n,
	        s = o + o,
	        l = r + r,
	        u = n * a,
	        c = o * a,
	        d = o * s,
	        f = r * a,
	        h = r * s,
	        p = r * l,
	        _ = i * a,
	        m = i * s,
	        b = i * l;return e[0] = 1 - d - p, e[1] = c + b, e[2] = f - m, e[3] = 0, e[4] = c - b, e[5] = 1 - u - p, e[6] = h + _, e[7] = 0, e[8] = f + m, e[9] = h - _, e[10] = 1 - u - d, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
	  }function D(e, t, n, o, r, i, a) {
	    var s = 1 / (n - t),
	        l = 1 / (r - o),
	        u = 1 / (i - a);return e[0] = 2 * i * s, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 2 * i * l, e[6] = 0, e[7] = 0, e[8] = (n + t) * s, e[9] = (r + o) * l, e[10] = (a + i) * u, e[11] = -1, e[12] = 0, e[13] = 0, e[14] = a * i * 2 * u, e[15] = 0, e;
	  }function U(e, t, n, o, r) {
	    var i = 1 / Math.tan(t / 2),
	        a = 1 / (o - r);return e[0] = i / n, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = i, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = (r + o) * a, e[11] = -1, e[12] = 0, e[13] = 0, e[14] = 2 * r * o * a, e[15] = 0, e;
	  }function I(e, t, n, o) {
	    var r = Math.tan(t.upDegrees * Math.PI / 180),
	        i = Math.tan(t.downDegrees * Math.PI / 180),
	        a = Math.tan(t.leftDegrees * Math.PI / 180),
	        s = Math.tan(t.rightDegrees * Math.PI / 180),
	        l = 2 / (a + s),
	        u = 2 / (r + i);return e[0] = l, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = u, e[6] = 0, e[7] = 0, e[8] = -(a - s) * l * .5, e[9] = (r - i) * u * .5, e[10] = o / (n - o), e[11] = -1, e[12] = 0, e[13] = 0, e[14] = o * n / (n - o), e[15] = 0, e;
	  }function j(e, t, n, o, r, i, a) {
	    var s = 1 / (t - n),
	        l = 1 / (o - r),
	        u = 1 / (i - a);return e[0] = -2 * s, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = -2 * l, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 2 * u, e[11] = 0, e[12] = (t + n) * s, e[13] = (r + o) * l, e[14] = (a + i) * u, e[15] = 1, e;
	  }function H(e, t, n, o) {
	    var i = void 0,
	        a = void 0,
	        s = void 0,
	        l = void 0,
	        u = void 0,
	        c = void 0,
	        f = void 0,
	        h = void 0,
	        p = void 0,
	        _ = void 0,
	        m = t[0],
	        b = t[1],
	        g = t[2],
	        v = o[0],
	        y = o[1],
	        w = o[2],
	        x = n[0],
	        E = n[1],
	        A = n[2];return Math.abs(m - x) < r && Math.abs(b - E) < r && Math.abs(g - A) < r ? d(e) : (f = m - x, h = b - E, p = g - A, i = y * (p *= _ = 1 / Math.sqrt(f * f + h * h + p * p)) - w * (h *= _), a = w * (f *= _) - v * p, s = v * h - y * f, (_ = Math.sqrt(i * i + a * a + s * s)) ? (i *= _ = 1 / _, a *= _, s *= _) : (i = 0, a = 0, s = 0), l = h * s - p * a, u = p * i - f * s, c = f * a - h * i, (_ = Math.sqrt(l * l + u * u + c * c)) ? (l *= _ = 1 / _, u *= _, c *= _) : (l = 0, u = 0, c = 0), e[0] = i, e[1] = l, e[2] = f, e[3] = 0, e[4] = a, e[5] = u, e[6] = h, e[7] = 0, e[8] = s, e[9] = c, e[10] = p, e[11] = 0, e[12] = -(i * m + a * b + s * g), e[13] = -(l * m + u * b + c * g), e[14] = -(f * m + h * b + p * g), e[15] = 1, e);
	  }function V(e, t, n, o) {
	    var r = t[0],
	        i = t[1],
	        a = t[2],
	        s = o[0],
	        l = o[1],
	        u = o[2],
	        c = r - n[0],
	        d = i - n[1],
	        f = a - n[2],
	        h = c * c + d * d + f * f;h > 0 && (c *= h = 1 / Math.sqrt(h), d *= h, f *= h);var p = l * f - u * d,
	        _ = u * c - s * f,
	        m = s * d - l * c;return (h = p * p + _ * _ + m * m) > 0 && (p *= h = 1 / Math.sqrt(h), _ *= h, m *= h), e[0] = p, e[1] = _, e[2] = m, e[3] = 0, e[4] = d * m - f * _, e[5] = f * p - c * m, e[6] = c * _ - d * p, e[7] = 0, e[8] = c, e[9] = d, e[10] = f, e[11] = 0, e[12] = r, e[13] = i, e[14] = a, e[15] = 1, e;
	  }function z(e) {
	    return "mat4(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ", " + e[4] + ", " + e[5] + ", " + e[6] + ", " + e[7] + ", " + e[8] + ", " + e[9] + ", " + e[10] + ", " + e[11] + ", " + e[12] + ", " + e[13] + ", " + e[14] + ", " + e[15] + ")";
	  }function G(e) {
	    return Math.sqrt(Math.pow(e[0], 2) + Math.pow(e[1], 2) + Math.pow(e[2], 2) + Math.pow(e[3], 2) + Math.pow(e[4], 2) + Math.pow(e[5], 2) + Math.pow(e[6], 2) + Math.pow(e[7], 2) + Math.pow(e[8], 2) + Math.pow(e[9], 2) + Math.pow(e[10], 2) + Math.pow(e[11], 2) + Math.pow(e[12], 2) + Math.pow(e[13], 2) + Math.pow(e[14], 2) + Math.pow(e[15], 2));
	  }function X(e, t, n) {
	    return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e[3] = t[3] + n[3], e[4] = t[4] + n[4], e[5] = t[5] + n[5], e[6] = t[6] + n[6], e[7] = t[7] + n[7], e[8] = t[8] + n[8], e[9] = t[9] + n[9], e[10] = t[10] + n[10], e[11] = t[11] + n[11], e[12] = t[12] + n[12], e[13] = t[13] + n[13], e[14] = t[14] + n[14], e[15] = t[15] + n[15], e;
	  }function Y(e, t, n) {
	    return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e[3] = t[3] - n[3], e[4] = t[4] - n[4], e[5] = t[5] - n[5], e[6] = t[6] - n[6], e[7] = t[7] - n[7], e[8] = t[8] - n[8], e[9] = t[9] - n[9], e[10] = t[10] - n[10], e[11] = t[11] - n[11], e[12] = t[12] - n[12], e[13] = t[13] - n[13], e[14] = t[14] - n[14], e[15] = t[15] - n[15], e;
	  }function q(e, t, n) {
	    return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e[3] = t[3] * n, e[4] = t[4] * n, e[5] = t[5] * n, e[6] = t[6] * n, e[7] = t[7] * n, e[8] = t[8] * n, e[9] = t[9] * n, e[10] = t[10] * n, e[11] = t[11] * n, e[12] = t[12] * n, e[13] = t[13] * n, e[14] = t[14] * n, e[15] = t[15] * n, e;
	  }function W(e, t, n, o) {
	    return e[0] = t[0] + n[0] * o, e[1] = t[1] + n[1] * o, e[2] = t[2] + n[2] * o, e[3] = t[3] + n[3] * o, e[4] = t[4] + n[4] * o, e[5] = t[5] + n[5] * o, e[6] = t[6] + n[6] * o, e[7] = t[7] + n[7] * o, e[8] = t[8] + n[8] * o, e[9] = t[9] + n[9] * o, e[10] = t[10] + n[10] * o, e[11] = t[11] + n[11] * o, e[12] = t[12] + n[12] * o, e[13] = t[13] + n[13] * o, e[14] = t[14] + n[14] * o, e[15] = t[15] + n[15] * o, e;
	  }function J(e, t) {
	    return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3] && e[4] === t[4] && e[5] === t[5] && e[6] === t[6] && e[7] === t[7] && e[8] === t[8] && e[9] === t[9] && e[10] === t[10] && e[11] === t[11] && e[12] === t[12] && e[13] === t[13] && e[14] === t[14] && e[15] === t[15];
	  }function K(e, t) {
	    var n = e[0],
	        o = e[1],
	        i = e[2],
	        a = e[3],
	        s = e[4],
	        l = e[5],
	        u = e[6],
	        c = e[7],
	        d = e[8],
	        f = e[9],
	        h = e[10],
	        p = e[11],
	        _ = e[12],
	        m = e[13],
	        b = e[14],
	        g = e[15],
	        v = t[0],
	        y = t[1],
	        w = t[2],
	        x = t[3],
	        E = t[4],
	        A = t[5],
	        C = t[6],
	        M = t[7],
	        S = t[8],
	        k = t[9],
	        T = t[10],
	        R = t[11],
	        O = t[12],
	        L = t[13],
	        B = t[14],
	        N = t[15];return Math.abs(n - v) <= r * Math.max(1, Math.abs(n), Math.abs(v)) && Math.abs(o - y) <= r * Math.max(1, Math.abs(o), Math.abs(y)) && Math.abs(i - w) <= r * Math.max(1, Math.abs(i), Math.abs(w)) && Math.abs(a - x) <= r * Math.max(1, Math.abs(a), Math.abs(x)) && Math.abs(s - E) <= r * Math.max(1, Math.abs(s), Math.abs(E)) && Math.abs(l - A) <= r * Math.max(1, Math.abs(l), Math.abs(A)) && Math.abs(u - C) <= r * Math.max(1, Math.abs(u), Math.abs(C)) && Math.abs(c - M) <= r * Math.max(1, Math.abs(c), Math.abs(M)) && Math.abs(d - S) <= r * Math.max(1, Math.abs(d), Math.abs(S)) && Math.abs(f - k) <= r * Math.max(1, Math.abs(f), Math.abs(k)) && Math.abs(h - T) <= r * Math.max(1, Math.abs(h), Math.abs(T)) && Math.abs(p - R) <= r * Math.max(1, Math.abs(p), Math.abs(R)) && Math.abs(_ - O) <= r * Math.max(1, Math.abs(_), Math.abs(O)) && Math.abs(m - L) <= r * Math.max(1, Math.abs(m), Math.abs(L)) && Math.abs(b - B) <= r * Math.max(1, Math.abs(b), Math.abs(B)) && Math.abs(g - N) <= r * Math.max(1, Math.abs(g), Math.abs(N));
	  }var Q = m,
	      Z = Y;function $() {
	    var e = new i(3);return e[0] = 0, e[1] = 0, e[2] = 0, e;
	  }function ee(e, t, n) {
	    var o = new i(3);return o[0] = e, o[1] = t, o[2] = n, o;
	  }function te(e, t) {
	    var n = t[0],
	        o = t[1],
	        r = t[2],
	        i = n * n + o * o + r * r;return i > 0 && (i = 1 / Math.sqrt(i), e[0] = t[0] * i, e[1] = t[1] * i, e[2] = t[2] * i), e;
	  }function ne(e, t) {
	    return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
	  }function oe(e, t, n) {
	    var o = t[0],
	        r = t[1],
	        i = t[2],
	        a = n[0],
	        s = n[1],
	        l = n[2];return e[0] = r * l - i * s, e[1] = i * a - o * l, e[2] = o * s - r * a, e;
	  }var re = function re(e) {
	    var t = e[0],
	        n = e[1],
	        o = e[2];return Math.sqrt(t * t + n * n + o * o);
	  };!function () {
	    var e = $();
	  }();!function () {
	    var e = function () {
	      var e = new i(4);return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0, e;
	    }();
	  }();function ie() {
	    var e = new i(4);return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e;
	  }function ae(e, t, n, o) {
	    var r = void 0,
	        i = void 0,
	        a = void 0,
	        s = void 0,
	        l = void 0,
	        u = t[0],
	        c = t[1],
	        d = t[2],
	        f = t[3],
	        h = n[0],
	        p = n[1],
	        _ = n[2],
	        m = n[3];return (i = u * h + c * p + d * _ + f * m) < 0 && (i = -i, h = -h, p = -p, _ = -_, m = -m), 1 - i > 1e-6 ? (r = Math.acos(i), a = Math.sin(r), s = Math.sin((1 - o) * r) / a, l = Math.sin(o * r) / a) : (s = 1 - o, l = o), e[0] = s * u + l * h, e[1] = s * c + l * p, e[2] = s * d + l * _, e[3] = s * f + l * m, e;
	  }var se = function se(e, t) {
	    var n = t[0],
	        o = t[1],
	        r = t[2],
	        i = t[3],
	        a = n * n + o * o + r * r + i * i;return a > 0 && (a = 1 / Math.sqrt(a), e[0] = n * a, e[1] = o * a, e[2] = r * a, e[3] = i * a), e;
	  };(function () {
	    var e = $(),
	        t = ee(1, 0, 0),
	        n = ee(0, 1, 0);
	  })(), function () {
	    var e = ie(),
	        t = ie();
	  }(), function () {
	    var e = function () {
	      var e = new i(9);return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 1, e[5] = 0, e[6] = 0, e[7] = 0, e[8] = 1, e;
	    }();
	  }();!function () {
	    var e = function () {
	      var e = new i(2);return e[0] = 0, e[1] = 0, e;
	    }();
	  }();function le(e, t) {
	    var n = e.__state.conversionName.toString(),
	        o = Math.round(e.r),
	        r = Math.round(e.g),
	        i = Math.round(e.b),
	        a = e.a,
	        s = Math.round(e.h),
	        l = e.s.toFixed(1),
	        u = e.v.toFixed(1);if (t || "THREE_CHAR_HEX" === n || "SIX_CHAR_HEX" === n) {
	      for (var c = e.hex.toString(16); c.length < 6;) {
	        c = "0" + c;
	      }return "#" + c;
	    }return "CSS_RGB" === n ? "rgb(" + o + "," + r + "," + i + ")" : "CSS_RGBA" === n ? "rgba(" + o + "," + r + "," + i + "," + a + ")" : "HEX" === n ? "0x" + e.hex.toString(16) : "RGB_ARRAY" === n ? "[" + o + "," + r + "," + i + "]" : "RGBA_ARRAY" === n ? "[" + o + "," + r + "," + i + "," + a + "]" : "RGB_OBJ" === n ? "{r:" + o + ",g:" + r + ",b:" + i + "}" : "RGBA_OBJ" === n ? "{r:" + o + ",g:" + r + ",b:" + i + ",a:" + a + "}" : "HSV_OBJ" === n ? "{h:" + s + ",s:" + l + ",v:" + u + "}" : "HSVA_OBJ" === n ? "{h:" + s + ",s:" + l + ",v:" + u + ",a:" + a + "}" : "unknown format";
	  }var ue = Array.prototype.forEach,
	      ce = Array.prototype.slice,
	      de = { BREAK: {}, extend: function extend(e) {
	      return this.each(ce.call(arguments, 1), function (t) {
	        (this.isObject(t) ? Object.keys(t) : []).forEach(function (n) {
	          this.isUndefined(t[n]) || (e[n] = t[n]);
	        }.bind(this));
	      }, this), e;
	    }, defaults: function defaults(e) {
	      return this.each(ce.call(arguments, 1), function (t) {
	        (this.isObject(t) ? Object.keys(t) : []).forEach(function (n) {
	          this.isUndefined(e[n]) && (e[n] = t[n]);
	        }.bind(this));
	      }, this), e;
	    }, compose: function compose() {
	      var e = ce.call(arguments);return function () {
	        for (var t = ce.call(arguments), n = e.length - 1; n >= 0; n--) {
	          t = [e[n].apply(this, t)];
	        }return t[0];
	      };
	    }, each: function each(e, t, n) {
	      if (e) if (ue && e.forEach && e.forEach === ue) e.forEach(t, n);else if (e.length === e.length + 0) {
	        var o,
	            r = void 0;for (r = 0, o = e.length; r < o; r++) {
	          if (r in e && t.call(n, e[r], r) === this.BREAK) return;
	        }
	      } else for (var i in e) {
	        if (t.call(n, e[i], i) === this.BREAK) return;
	      }
	    }, defer: function defer(e) {
	      setTimeout(e, 0);
	    }, debounce: function debounce(e, t, n) {
	      var o = void 0;return function () {
	        var r = this,
	            i = arguments;var a = n || !o;clearTimeout(o), o = setTimeout(function () {
	          o = null, n || e.apply(r, i);
	        }, t), a && e.apply(r, i);
	      };
	    }, toArray: function toArray(e) {
	      return e.toArray ? e.toArray() : ce.call(e);
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
	      fe = [{ litmus: de.isString, conversions: { THREE_CHAR_HEX: { read: function read(e) {
	          var t = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return null !== t && { space: "HEX", hex: parseInt("0x" + t[1].toString() + t[1].toString() + t[2].toString() + t[2].toString() + t[3].toString() + t[3].toString(), 0) };
	        }, write: le }, SIX_CHAR_HEX: { read: function read(e) {
	          var t = e.match(/^#([A-F0-9]{6})$/i);return null !== t && { space: "HEX", hex: parseInt("0x" + t[1].toString(), 0) };
	        }, write: le }, CSS_RGB: { read: function read(e) {
	          var t = e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);return null !== t && { space: "RGB", r: parseFloat(t[1]), g: parseFloat(t[2]), b: parseFloat(t[3]) };
	        }, write: le }, CSS_RGBA: { read: function read(e) {
	          var t = e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);return null !== t && { space: "RGB", r: parseFloat(t[1]), g: parseFloat(t[2]), b: parseFloat(t[3]), a: parseFloat(t[4]) };
	        }, write: le } } }, { litmus: de.isNumber, conversions: { HEX: { read: function read(e) {
	          return { space: "HEX", hex: e, conversionName: "HEX" };
	        }, write: function write(e) {
	          return e.hex;
	        } } } }, { litmus: de.isArray, conversions: { RGB_ARRAY: { read: function read(e) {
	          return 3 === e.length && { space: "RGB", r: e[0], g: e[1], b: e[2] };
	        }, write: function write(e) {
	          return [e.r, e.g, e.b];
	        } }, RGBA_ARRAY: { read: function read(e) {
	          return 4 === e.length && { space: "RGB", r: e[0], g: e[1], b: e[2], a: e[3] };
	        }, write: function write(e) {
	          return [e.r, e.g, e.b, e.a];
	        } } } }, { litmus: de.isObject, conversions: { RGBA_OBJ: { read: function read(e) {
	          return !!(de.isNumber(e.r) && de.isNumber(e.g) && de.isNumber(e.b) && de.isNumber(e.a)) && { space: "RGB", r: e.r, g: e.g, b: e.b, a: e.a };
	        }, write: function write(e) {
	          return { r: e.r, g: e.g, b: e.b, a: e.a };
	        } }, RGB_OBJ: { read: function read(e) {
	          return !!(de.isNumber(e.r) && de.isNumber(e.g) && de.isNumber(e.b)) && { space: "RGB", r: e.r, g: e.g, b: e.b };
	        }, write: function write(e) {
	          return { r: e.r, g: e.g, b: e.b };
	        } }, HSVA_OBJ: { read: function read(e) {
	          return !!(de.isNumber(e.h) && de.isNumber(e.s) && de.isNumber(e.v) && de.isNumber(e.a)) && { space: "HSV", h: e.h, s: e.s, v: e.v, a: e.a };
	        }, write: function write(e) {
	          return { h: e.h, s: e.s, v: e.v, a: e.a };
	        } }, HSV_OBJ: { read: function read(e) {
	          return !!(de.isNumber(e.h) && de.isNumber(e.s) && de.isNumber(e.v)) && { space: "HSV", h: e.h, s: e.s, v: e.v };
	        }, write: function write(e) {
	          return { h: e.h, s: e.s, v: e.v };
	        } } } }],
	      he = void 0,
	      pe = void 0,
	      _e = function _e() {
	    pe = !1;var e = arguments.length > 1 ? de.toArray(arguments) : arguments[0];return de.each(fe, function (t) {
	      if (t.litmus(e)) return de.each(t.conversions, function (t, n) {
	        if (he = t.read(e), !1 === pe && !1 !== he) return pe = he, he.conversionName = n, he.conversion = t, de.BREAK;
	      }), de.BREAK;
	    }), pe;
	  },
	      me = void 0,
	      be = { hsv_to_rgb: function hsv_to_rgb(e, t, n) {
	      var o = Math.floor(e / 60) % 6,
	          r = e / 60 - Math.floor(e / 60),
	          i = n * (1 - t),
	          a = n * (1 - r * t),
	          s = n * (1 - (1 - r) * t),
	          l = [[n, s, i], [a, n, i], [i, n, s], [i, a, n], [s, i, n], [n, i, a]][o];return { r: 255 * l[0], g: 255 * l[1], b: 255 * l[2] };
	    }, rgb_to_hsv: function rgb_to_hsv(e, t, n) {
	      var o = Math.min(e, t, n),
	          r = Math.max(e, t, n),
	          i = r - o,
	          a = void 0;return 0 === r ? { h: NaN, s: 0, v: 0 } : (a = e === r ? (t - n) / i : t === r ? 2 + (n - e) / i : 4 + (e - t) / i, (a /= 6) < 0 && (a += 1), { h: 360 * a, s: i / r, v: r / 255 });
	    }, rgb_to_hex: function rgb_to_hex(e, t, n) {
	      var o = this.hex_with_component(0, 2, e);return o = this.hex_with_component(o, 1, t), o = this.hex_with_component(o, 0, n);
	    }, component_from_hex: function component_from_hex(e, t) {
	      return e >> 8 * t & 255;
	    }, hex_with_component: function hex_with_component(e, t, n) {
	      return n << (me = 8 * t) | e & ~(255 << me);
	    } },
	      ge = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
	    return typeof e === "undefined" ? "undefined" : _typeof(e);
	  } : function (e) {
	    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
	  },
	      ve = function ve(e, t) {
	    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	  },
	      ye = function () {
	    function e(e, t) {
	      for (var n = 0; n < t.length; n++) {
	        var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
	      }
	    }return function (t, n, o) {
	      return n && e(t.prototype, n), o && e(t, o), t;
	    };
	  }(),
	      we = function e(t, n, o) {
	    null === t && (t = Function.prototype);var r = Object.getOwnPropertyDescriptor(t, n);if (void 0 === r) {
	      var i = Object.getPrototypeOf(t);return null === i ? void 0 : e(i, n, o);
	    }if ("value" in r) return r.value;var a = r.get;return void 0 !== a ? a.call(o) : void 0;
	  },
	      xe = function xe(e, t) {
	    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	  },
	      Ee = function Ee(e, t) {
	    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
	  },
	      Ae = function () {
	    function e() {
	      if (ve(this, e), this.__state = _e.apply(this, arguments), !1 === this.__state) throw new Error("Failed to interpret color arguments");this.__state.a = this.__state.a || 1;
	    }return ye(e, [{ key: "toString", value: function value() {
	        return le(this);
	      } }, { key: "toHexString", value: function value() {
	        return le(this, !0);
	      } }, { key: "toOriginal", value: function value() {
	        return this.__state.conversion.write(this);
	      } }]), e;
	  }();function Ce(e, t, n) {
	    Object.defineProperty(e, t, { get: function get() {
	        return "RGB" === this.__state.space ? this.__state[t] : (Ae.recalculateRGB(this, t, n), this.__state[t]);
	      }, set: function set(e) {
	        "RGB" !== this.__state.space && (Ae.recalculateRGB(this, t, n), this.__state.space = "RGB"), this.__state[t] = e;
	      } });
	  }function Me(e, t) {
	    Object.defineProperty(e, t, { get: function get() {
	        return "HSV" === this.__state.space ? this.__state[t] : (Ae.recalculateHSV(this), this.__state[t]);
	      }, set: function set(e) {
	        "HSV" !== this.__state.space && (Ae.recalculateHSV(this), this.__state.space = "HSV"), this.__state[t] = e;
	      } });
	  }Ae.recalculateRGB = function (e, t, n) {
	    if ("HEX" === e.__state.space) e.__state[t] = be.component_from_hex(e.__state.hex, n);else {
	      if ("HSV" !== e.__state.space) throw new Error("Corrupted color state");de.extend(e.__state, be.hsv_to_rgb(e.__state.h, e.__state.s, e.__state.v));
	    }
	  }, Ae.recalculateHSV = function (e) {
	    var t = be.rgb_to_hsv(e.r, e.g, e.b);de.extend(e.__state, { s: t.s, v: t.v }), de.isNaN(t.h) ? de.isUndefined(e.__state.h) && (e.__state.h = 0) : e.__state.h = t.h;
	  }, Ae.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"], Ce(Ae.prototype, "r", 2), Ce(Ae.prototype, "g", 1), Ce(Ae.prototype, "b", 0), Me(Ae.prototype, "h"), Me(Ae.prototype, "s"), Me(Ae.prototype, "v"), Object.defineProperty(Ae.prototype, "a", { get: function get() {
	      return this.__state.a;
	    }, set: function set(e) {
	      this.__state.a = e;
	    } }), Object.defineProperty(Ae.prototype, "hex", { get: function get() {
	      return "HEX" !== !this.__state.space && (this.__state.hex = be.rgb_to_hex(this.r, this.g, this.b)), this.__state.hex;
	    }, set: function set(e) {
	      this.__state.space = "HEX", this.__state.hex = e;
	    } });var Se = function () {
	    function e(t, n) {
	      ve(this, e), this.initialValue = t[n], this.domElement = document.createElement("div"), this.object = t, this.property = n, this.__onChange = void 0, this.__onFinishChange = void 0;
	    }return ye(e, [{ key: "onChange", value: function value(e) {
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
	      ke = {};de.each({ HTMLEvents: ["change"], MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"], KeyboardEvents: ["keydown"] }, function (e, t) {
	    de.each(e, function (e) {
	      ke[e] = t;
	    });
	  });var Te = /(\d+(\.\d+)?)px/;function Re(e) {
	    if ("0" === e || de.isUndefined(e)) return 0;var t = e.match(Te);return de.isNull(t) ? 0 : parseFloat(t[1]);
	  }var Oe = { makeSelectable: function makeSelectable(e, t) {
	      void 0 !== e && void 0 !== e.style && (e.onselectstart = t ? function () {
	        return !1;
	      } : function () {}, e.style.MozUserSelect = t ? "auto" : "none", e.style.KhtmlUserSelect = t ? "auto" : "none", e.unselectable = t ? "on" : "off");
	    }, makeFullscreen: function makeFullscreen(e, t, n) {
	      var o = n,
	          r = t;de.isUndefined(r) && (r = !0), de.isUndefined(o) && (o = !0), e.style.position = "absolute", r && (e.style.left = 0, e.style.right = 0), o && (e.style.top = 0, e.style.bottom = 0);
	    }, fakeEvent: function fakeEvent(e, t, n, o) {
	      var r = n || {},
	          i = ke[t];if (!i) throw new Error("Event type " + t + " not supported.");var a = document.createEvent(i);switch (i) {case "MouseEvents":
	          var s = r.x || r.clientX || 0,
	              l = r.y || r.clientY || 0;a.initMouseEvent(t, r.bubbles || !1, r.cancelable || !0, window, r.clickCount || 1, 0, 0, s, l, !1, !1, !1, !1, 0, null);break;case "KeyboardEvents":
	          var u = a.initKeyboardEvent || a.initKeyEvent;de.defaults(r, { cancelable: !0, ctrlKey: !1, altKey: !1, shiftKey: !1, metaKey: !1, keyCode: void 0, charCode: void 0 }), u(t, r.bubbles || !1, r.cancelable, window, r.ctrlKey, r.altKey, r.shiftKey, r.metaKey, r.keyCode, r.charCode);break;default:
	          a.initEvent(t, r.bubbles || !1, r.cancelable || !0);}de.defaults(a, o), e.dispatchEvent(a);
	    }, bind: function bind(e, t, n, o) {
	      var r = o || !1;return e.addEventListener ? e.addEventListener(t, n, r) : e.attachEvent && e.attachEvent("on" + t, n), Oe;
	    }, unbind: function unbind(e, t, n, o) {
	      var r = o || !1;return e.removeEventListener ? e.removeEventListener(t, n, r) : e.detachEvent && e.detachEvent("on" + t, n), Oe;
	    }, addClass: function addClass(e, t) {
	      if (void 0 === e.className) e.className = t;else if (e.className !== t) {
	        var n = e.className.split(/ +/);-1 === n.indexOf(t) && (n.push(t), e.className = n.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""));
	      }return Oe;
	    }, removeClass: function removeClass(e, t) {
	      if (t) {
	        if (e.className === t) e.removeAttribute("class");else {
	          var n = e.className.split(/ +/),
	              o = n.indexOf(t);-1 !== o && (n.splice(o, 1), e.className = n.join(" "));
	        }
	      } else e.className = void 0;return Oe;
	    }, hasClass: function hasClass(e, t) {
	      return new RegExp("(?:^|\\s+)" + t + "(?:\\s+|$)").test(e.className) || !1;
	    }, getWidth: function getWidth(e) {
	      var t = getComputedStyle(e);return Re(t["border-left-width"]) + Re(t["border-right-width"]) + Re(t["padding-left"]) + Re(t["padding-right"]) + Re(t.width);
	    }, getHeight: function getHeight(e) {
	      var t = getComputedStyle(e);return Re(t["border-top-width"]) + Re(t["border-bottom-width"]) + Re(t["padding-top"]) + Re(t["padding-bottom"]) + Re(t.height);
	    }, getOffset: function getOffset(e) {
	      var t = e,
	          n = { left: 0, top: 0 };if (t.offsetParent) do {
	        n.left += t.offsetLeft, n.top += t.offsetTop, t = t.offsetParent;
	      } while (t);return n;
	    }, isActive: function isActive(e) {
	      return e === document.activeElement && (e.type || e.href);
	    } },
	      Le = function (e) {
	    function t(e, n) {
	      ve(this, t);var o = Ee(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)),
	          r = o;return o.__prev = o.getValue(), o.__checkbox = document.createElement("input"), o.__checkbox.setAttribute("type", "checkbox"), Oe.bind(o.__checkbox, "change", function () {
	        r.setValue(!r.__prev);
	      }, !1), o.domElement.appendChild(o.__checkbox), o.updateDisplay(), o;
	    }return xe(t, Se), ye(t, [{ key: "setValue", value: function value(e) {
	        var n = we(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setValue", this).call(this, e);return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), n;
	      } }, { key: "updateDisplay", value: function value() {
	        return !0 === this.getValue() ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = !0, this.__prev = !0) : (this.__checkbox.checked = !1, this.__prev = !1), we(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this);
	      } }]), t;
	  }(),
	      Be = function (e) {
	    function t(e, n, o) {
	      ve(this, t);var r = Ee(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)),
	          i = o,
	          a = r;if (r.__select = document.createElement("select"), de.isArray(i)) {
	        var s = {};de.each(i, function (e) {
	          s[e] = e;
	        }), i = s;
	      }return de.each(i, function (e, t) {
	        var n = document.createElement("option");n.innerHTML = t, n.setAttribute("value", e), a.__select.appendChild(n);
	      }), r.updateDisplay(), Oe.bind(r.__select, "change", function () {
	        var e = this.options[this.selectedIndex].value;a.setValue(e);
	      }), r.domElement.appendChild(r.__select), r;
	    }return xe(t, Se), ye(t, [{ key: "setValue", value: function value(e) {
	        var n = we(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setValue", this).call(this, e);return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), n;
	      } }, { key: "updateDisplay", value: function value() {
	        return Oe.isActive(this.__select) ? this : (this.__select.value = this.getValue(), we(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this));
	      } }]), t;
	  }(),
	      Ne = function (e) {
	    function t(e, n) {
	      ve(this, t);var o = Ee(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)),
	          r = o;function i() {
	        r.setValue(r.__input.value);
	      }return o.__input = document.createElement("input"), o.__input.setAttribute("type", "text"), Oe.bind(o.__input, "keyup", i), Oe.bind(o.__input, "change", i), Oe.bind(o.__input, "blur", function () {
	        r.__onFinishChange && r.__onFinishChange.call(r, r.getValue());
	      }), Oe.bind(o.__input, "keydown", function (e) {
	        13 === e.keyCode && this.blur();
	      }), o.updateDisplay(), o.domElement.appendChild(o.__input), o;
	    }return xe(t, Se), ye(t, [{ key: "updateDisplay", value: function value() {
	        return Oe.isActive(this.__input) || (this.__input.value = this.getValue()), we(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this);
	      } }]), t;
	  }();function Fe(e) {
	    var t = e.toString();return t.indexOf(".") > -1 ? t.length - t.indexOf(".") - 1 : 0;
	  }var Pe = function (e) {
	    function t(e, n, o) {
	      ve(this, t);var r = Ee(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)),
	          i = o || {};return r.__min = i.min, r.__max = i.max, r.__step = i.step, de.isUndefined(r.__step) ? 0 === r.initialValue ? r.__impliedStep = 1 : r.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(r.initialValue)) / Math.LN10)) / 10 : r.__impliedStep = r.__step, r.__precision = Fe(r.__impliedStep), r;
	    }return xe(t, Se), ye(t, [{ key: "setValue", value: function value(e) {
	        var n = e;return void 0 !== this.__min && n < this.__min ? n = this.__min : void 0 !== this.__max && n > this.__max && (n = this.__max), void 0 !== this.__step && n % this.__step != 0 && (n = Math.round(n / this.__step) * this.__step), we(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setValue", this).call(this, n);
	      } }, { key: "min", value: function value(e) {
	        return this.__min = e, this;
	      } }, { key: "max", value: function value(e) {
	        return this.__max = e, this;
	      } }, { key: "step", value: function value(e) {
	        return this.__step = e, this.__impliedStep = e, this.__precision = Fe(e), this;
	      } }]), t;
	  }();var De = function (e) {
	    function t(e, n, o) {
	      ve(this, t);var r = Ee(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, o));r.__truncationSuspended = !1;var i = r,
	          a = void 0;function s() {
	        i.__onFinishChange && i.__onFinishChange.call(i, i.getValue());
	      }function l(e) {
	        var t = a - e.clientY;i.setValue(i.getValue() + t * i.__impliedStep), a = e.clientY;
	      }function u() {
	        Oe.unbind(window, "mousemove", l), Oe.unbind(window, "mouseup", u), s();
	      }return r.__input = document.createElement("input"), r.__input.setAttribute("type", "text"), Oe.bind(r.__input, "change", function () {
	        var e = parseFloat(i.__input.value);de.isNaN(e) || i.setValue(e);
	      }), Oe.bind(r.__input, "blur", function () {
	        s();
	      }), Oe.bind(r.__input, "mousedown", function (e) {
	        Oe.bind(window, "mousemove", l), Oe.bind(window, "mouseup", u), a = e.clientY;
	      }), Oe.bind(r.__input, "keydown", function (e) {
	        13 === e.keyCode && (i.__truncationSuspended = !0, this.blur(), i.__truncationSuspended = !1, s());
	      }), r.updateDisplay(), r.domElement.appendChild(r.__input), r;
	    }return xe(t, Pe), ye(t, [{ key: "updateDisplay", value: function value() {
	        var e, n, o;return this.__input.value = this.__truncationSuspended ? this.getValue() : (e = this.getValue(), n = this.__precision, o = Math.pow(10, n), Math.round(e * o) / o), we(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this);
	      } }]), t;
	  }();function Ue(e, t, n, o, r) {
	    return o + (e - t) / (n - t) * (r - o);
	  }var Ie = function (e) {
	    function t(e, n, o, r, i) {
	      ve(this, t);var a = Ee(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, { min: o, max: r, step: i })),
	          s = a;function l(e) {
	        e.preventDefault();var t = s.__background.getBoundingClientRect();return s.setValue(Ue(e.clientX, t.left, t.right, s.__min, s.__max)), !1;
	      }function u() {
	        Oe.unbind(window, "mousemove", l), Oe.unbind(window, "mouseup", u), s.__onFinishChange && s.__onFinishChange.call(s, s.getValue());
	      }function c(e) {
	        var t = e.touches[0].clientX,
	            n = s.__background.getBoundingClientRect();s.setValue(Ue(t, n.left, n.right, s.__min, s.__max));
	      }function d() {
	        Oe.unbind(window, "touchmove", c), Oe.unbind(window, "touchend", d), s.__onFinishChange && s.__onFinishChange.call(s, s.getValue());
	      }return a.__background = document.createElement("div"), a.__foreground = document.createElement("div"), Oe.bind(a.__background, "mousedown", function (e) {
	        document.activeElement.blur(), Oe.bind(window, "mousemove", l), Oe.bind(window, "mouseup", u), l(e);
	      }), Oe.bind(a.__background, "touchstart", function (e) {
	        if (1 !== e.touches.length) return;Oe.bind(window, "touchmove", c), Oe.bind(window, "touchend", d), c(e);
	      }), Oe.addClass(a.__background, "slider"), Oe.addClass(a.__foreground, "slider-fg"), a.updateDisplay(), a.__background.appendChild(a.__foreground), a.domElement.appendChild(a.__background), a;
	    }return xe(t, Pe), ye(t, [{ key: "updateDisplay", value: function value() {
	        var e = (this.getValue() - this.__min) / (this.__max - this.__min);return this.__foreground.style.width = 100 * e + "%", we(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this);
	      } }]), t;
	  }(),
	      je = function (e) {
	    function t(e, n, o) {
	      ve(this, t);var r = Ee(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)),
	          i = r;return r.__button = document.createElement("div"), r.__button.innerHTML = void 0 === o ? "Fire" : o, Oe.bind(r.__button, "click", function (e) {
	        return e.preventDefault(), i.fire(), !1;
	      }), Oe.addClass(r.__button, "button"), r.domElement.appendChild(r.__button), r;
	    }return xe(t, Se), ye(t, [{ key: "fire", value: function value() {
	        this.__onChange && this.__onChange.call(this), this.getValue().call(this.object), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue());
	      } }]), t;
	  }(),
	      He = function (e) {
	    function t(e, n) {
	      ve(this, t);var o = Ee(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));o.__color = new Ae(o.getValue()), o.__temp = new Ae(0);var r = o;o.domElement = document.createElement("div"), Oe.makeSelectable(o.domElement, !1), o.__selector = document.createElement("div"), o.__selector.className = "selector", o.__saturation_field = document.createElement("div"), o.__saturation_field.className = "saturation-field", o.__field_knob = document.createElement("div"), o.__field_knob.className = "field-knob", o.__field_knob_border = "2px solid ", o.__hue_knob = document.createElement("div"), o.__hue_knob.className = "hue-knob", o.__hue_field = document.createElement("div"), o.__hue_field.className = "hue-field", o.__input = document.createElement("input"), o.__input.type = "text", o.__input_textShadow = "0 1px 1px ", Oe.bind(o.__input, "keydown", function (e) {
	        13 === e.keyCode && d.call(this);
	      }), Oe.bind(o.__input, "blur", d), Oe.bind(o.__selector, "mousedown", function () {
	        Oe.addClass(this, "drag").bind(window, "mouseup", function () {
	          Oe.removeClass(r.__selector, "drag");
	        });
	      }), Oe.bind(o.__selector, "touchstart", function () {
	        Oe.addClass(this, "drag").bind(window, "touchend", function () {
	          Oe.removeClass(r.__selector, "drag");
	        });
	      });var i,
	          a = document.createElement("div");function s(e) {
	        h(e), Oe.bind(window, "mousemove", h), Oe.bind(window, "touchmove", h), Oe.bind(window, "mouseup", u), Oe.bind(window, "touchend", u);
	      }function l(e) {
	        p(e), Oe.bind(window, "mousemove", p), Oe.bind(window, "touchmove", p), Oe.bind(window, "mouseup", c), Oe.bind(window, "touchend", c);
	      }function u() {
	        Oe.unbind(window, "mousemove", h), Oe.unbind(window, "touchmove", h), Oe.unbind(window, "mouseup", u), Oe.unbind(window, "touchend", u), f();
	      }function c() {
	        Oe.unbind(window, "mousemove", p), Oe.unbind(window, "touchmove", p), Oe.unbind(window, "mouseup", c), Oe.unbind(window, "touchend", c), f();
	      }function d() {
	        var e = _e(this.value);!1 !== e ? (r.__color.__state = e, r.setValue(r.__color.toOriginal())) : this.value = r.__color.toString();
	      }function f() {
	        r.__onFinishChange && r.__onFinishChange.call(r, r.__color.toOriginal());
	      }function h(e) {
	        -1 === e.type.indexOf("touch") && e.preventDefault();var t = r.__saturation_field.getBoundingClientRect(),
	            n = e.touches && e.touches[0] || e,
	            o = n.clientX,
	            i = n.clientY,
	            a = (o - t.left) / (t.right - t.left),
	            s = 1 - (i - t.top) / (t.bottom - t.top);return s > 1 ? s = 1 : s < 0 && (s = 0), a > 1 ? a = 1 : a < 0 && (a = 0), r.__color.v = s, r.__color.s = a, r.setValue(r.__color.toOriginal()), !1;
	      }function p(e) {
	        -1 === e.type.indexOf("touch") && e.preventDefault();var t = r.__hue_field.getBoundingClientRect(),
	            n = 1 - ((e.touches && e.touches[0] || e).clientY - t.top) / (t.bottom - t.top);return n > 1 ? n = 1 : n < 0 && (n = 0), r.__color.h = 360 * n, r.setValue(r.__color.toOriginal()), !1;
	      }return de.extend(o.__selector.style, { width: "122px", height: "102px", padding: "3px", backgroundColor: "#222", boxShadow: "0px 1px 3px rgba(0,0,0,0.3)" }), de.extend(o.__field_knob.style, { position: "absolute", width: "12px", height: "12px", border: o.__field_knob_border + (o.__color.v < .5 ? "#fff" : "#000"), boxShadow: "0px 1px 3px rgba(0,0,0,0.5)", borderRadius: "12px", zIndex: 1 }), de.extend(o.__hue_knob.style, { position: "absolute", width: "15px", height: "2px", borderRight: "4px solid #fff", zIndex: 1 }), de.extend(o.__saturation_field.style, { width: "100px", height: "100px", border: "1px solid #555", marginRight: "3px", display: "inline-block", cursor: "pointer" }), de.extend(a.style, { width: "100%", height: "100%", background: "none" }), ze(a, "top", "rgba(0,0,0,0)", "#000"), de.extend(o.__hue_field.style, { width: "15px", height: "100px", border: "1px solid #555", cursor: "ns-resize", position: "absolute", top: "3px", right: "3px" }), (i = o.__hue_field).style.background = "", i.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", i.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", i.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", i.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", i.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", de.extend(o.__input.style, { outline: "none", textAlign: "center", color: "#fff", border: 0, fontWeight: "bold", textShadow: o.__input_textShadow + "rgba(0,0,0,0.7)" }), Oe.bind(o.__saturation_field, "mousedown", s), Oe.bind(o.__saturation_field, "touchstart", s), Oe.bind(o.__field_knob, "mousedown", s), Oe.bind(o.__field_knob, "touchstart", s), Oe.bind(o.__hue_field, "mousedown", l), Oe.bind(o.__hue_field, "touchstart", l), o.__saturation_field.appendChild(a), o.__selector.appendChild(o.__field_knob), o.__selector.appendChild(o.__saturation_field), o.__selector.appendChild(o.__hue_field), o.__hue_field.appendChild(o.__hue_knob), o.domElement.appendChild(o.__input), o.domElement.appendChild(o.__selector), o.updateDisplay(), o;
	    }return xe(t, Se), ye(t, [{ key: "updateDisplay", value: function value() {
	        var e = _e(this.getValue());if (!1 !== e) {
	          var t = !1;de.each(Ae.COMPONENTS, function (n) {
	            if (!de.isUndefined(e[n]) && !de.isUndefined(this.__color.__state[n]) && e[n] !== this.__color.__state[n]) return t = !0, {};
	          }, this), t && de.extend(this.__color.__state, e);
	        }de.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1;var n = this.__color.v < .5 || this.__color.s > .5 ? 255 : 0,
	            o = 255 - n;de.extend(this.__field_knob.style, { marginLeft: 100 * this.__color.s - 7 + "px", marginTop: 100 * (1 - this.__color.v) - 7 + "px", backgroundColor: this.__temp.toHexString(), border: this.__field_knob_border + "rgb(" + n + "," + n + "," + n + ")" }), this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px", this.__temp.s = 1, this.__temp.v = 1, ze(this.__saturation_field, "left", "#fff", this.__temp.toHexString()), this.__input.value = this.__color.toString(), de.extend(this.__input.style, { backgroundColor: this.__color.toHexString(), color: "rgb(" + n + "," + n + "," + n + ")", textShadow: this.__input_textShadow + "rgba(" + o + "," + o + "," + o + ",.7)" });
	      } }]), t;
	  }(),
	      Ve = ["-moz-", "-o-", "-webkit-", "-ms-", ""];function ze(e, t, n, o) {
	    e.style.background = "", de.each(Ve, function (r) {
	      e.style.cssText += "background: " + r + "linear-gradient(" + t + ", " + n + " 0%, " + o + " 100%); ";
	    });
	  }var Ge = function Ge(e, t) {
	    var n = t || document,
	        o = document.createElement("style");o.type = "text/css", o.innerHTML = e;var r = n.getElementsByTagName("head")[0];try {
	      r.appendChild(o);
	    } catch (e) {}
	  },
	      Xe = function Xe(e, t) {
	    var n = e[t];return de.isArray(arguments[2]) || de.isObject(arguments[2]) ? new Be(e, t, arguments[2]) : de.isNumber(n) ? de.isNumber(arguments[2]) && de.isNumber(arguments[3]) ? de.isNumber(arguments[4]) ? new Ie(e, t, arguments[2], arguments[3], arguments[4]) : new Ie(e, t, arguments[2], arguments[3]) : de.isNumber(arguments[4]) ? new De(e, t, { min: arguments[2], max: arguments[3], step: arguments[4] }) : new De(e, t, { min: arguments[2], max: arguments[3] }) : de.isString(n) ? new Ne(e, t) : de.isFunction(n) ? new je(e, t, "") : de.isBoolean(n) ? new Le(e, t) : null;
	  };var Ye = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
	    setTimeout(e, 1e3 / 60);
	  },
	      qe = function () {
	    function e() {
	      ve(this, e), this.backgroundElement = document.createElement("div"), de.extend(this.backgroundElement.style, { backgroundColor: "rgba(0,0,0,0.8)", top: 0, left: 0, display: "none", zIndex: "1000", opacity: 0, WebkitTransition: "opacity 0.2s linear", transition: "opacity 0.2s linear" }), Oe.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), de.extend(this.domElement.style, { position: "fixed", display: "none", zIndex: "1001", opacity: 0, WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear", transition: "transform 0.2s ease-out, opacity 0.2s linear" }), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement);var t = this;Oe.bind(this.backgroundElement, "click", function () {
	        t.hide();
	      });
	    }return ye(e, [{ key: "show", value: function value() {
	        var e = this;this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), de.defer(function () {
	          e.backgroundElement.style.opacity = 1, e.domElement.style.opacity = 1, e.domElement.style.webkitTransform = "scale(1)";
	        });
	      } }, { key: "hide", value: function value() {
	        var e = this,
	            t = function t() {
	          e.domElement.style.display = "none", e.backgroundElement.style.display = "none", Oe.unbind(e.domElement, "webkitTransitionEnd", t), Oe.unbind(e.domElement, "transitionend", t), Oe.unbind(e.domElement, "oTransitionEnd", t);
	        };Oe.bind(this.domElement, "webkitTransitionEnd", t), Oe.bind(this.domElement, "transitionend", t), Oe.bind(this.domElement, "oTransitionEnd", t), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)";
	      } }, { key: "layout", value: function value() {
	        this.domElement.style.left = window.innerWidth / 2 - Oe.getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - Oe.getHeight(this.domElement) / 2 + "px";
	      } }]), e;
	  }();Ge(function (e) {
	    if (e && "undefined" != typeof window) {
	      var t = document.createElement("style");return t.setAttribute("type", "text/css"), t.innerHTML = e, document.head.appendChild(t), e;
	    }
	  }(".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n"));var We = "Default",
	      Je = function () {
	    try {
	      return !!window.localStorage;
	    } catch (e) {
	      return !1;
	    }
	  }(),
	      Ke = void 0,
	      Qe = !0,
	      Ze = void 0,
	      $e = !1,
	      et = [],
	      tt = function e(t) {
	    var n = this,
	        o = t || {};this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), Oe.addClass(this.domElement, "dg"), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], o = de.defaults(o, { closeOnTop: !1, autoPlace: !0, width: e.DEFAULT_WIDTH }), o = de.defaults(o, { resizable: o.autoPlace, hideable: o.autoPlace }), de.isUndefined(o.load) ? o.load = { preset: We } : o.preset && (o.load.preset = o.preset), de.isUndefined(o.parent) && o.hideable && et.push(this), o.resizable = de.isUndefined(o.parent) && o.resizable, o.autoPlace && de.isUndefined(o.scrollable) && (o.scrollable = !0);var r,
	        i = Je && "true" === localStorage.getItem(st(this, "isLocal")),
	        a = void 0;if (Object.defineProperties(this, { parent: { get: function get() {
	          return o.parent;
	        } }, scrollable: { get: function get() {
	          return o.scrollable;
	        } }, autoPlace: { get: function get() {
	          return o.autoPlace;
	        } }, closeOnTop: { get: function get() {
	          return o.closeOnTop;
	        } }, preset: { get: function get() {
	          return n.parent ? n.getRoot().preset : o.load.preset;
	        }, set: function set(e) {
	          n.parent ? n.getRoot().preset = e : o.load.preset = e, function (e) {
	            for (var t = 0; t < e.__preset_select.length; t++) {
	              e.__preset_select[t].value === e.preset && (e.__preset_select.selectedIndex = t);
	            }
	          }(this), n.revert();
	        } }, width: { get: function get() {
	          return o.width;
	        }, set: function set(e) {
	          o.width = e, dt(n, e);
	        } }, name: { get: function get() {
	          return o.name;
	        }, set: function set(e) {
	          o.name = e, titleRowName && (titleRowName.innerHTML = o.name);
	        } }, closed: { get: function get() {
	          return o.closed;
	        }, set: function set(t) {
	          o.closed = t, o.closed ? Oe.addClass(n.__ul, e.CLASS_CLOSED) : Oe.removeClass(n.__ul, e.CLASS_CLOSED), this.onResize(), n.__closeButton && (n.__closeButton.innerHTML = t ? e.TEXT_OPEN : e.TEXT_CLOSED);
	        } }, load: { get: function get() {
	          return o.load;
	        } }, useLocalStorage: { get: function get() {
	          return i;
	        }, set: function set(e) {
	          Je && (i = e, e ? Oe.bind(window, "unload", a) : Oe.unbind(window, "unload", a), localStorage.setItem(st(n, "isLocal"), e));
	        } } }), de.isUndefined(o.parent)) {
	      if (o.closed = !1, Oe.addClass(this.domElement, e.CLASS_MAIN), Oe.makeSelectable(this.domElement, !1), Je && i) {
	        n.useLocalStorage = !0;var s = localStorage.getItem(st(this, "gui"));s && (o.load = JSON.parse(s));
	      }this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = e.TEXT_CLOSED, Oe.addClass(this.__closeButton, e.CLASS_CLOSE_BUTTON), o.closeOnTop ? (Oe.addClass(this.__closeButton, e.CLASS_CLOSE_TOP), this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0])) : (Oe.addClass(this.__closeButton, e.CLASS_CLOSE_BOTTOM), this.domElement.appendChild(this.__closeButton)), Oe.bind(this.__closeButton, "click", function () {
	        n.closed = !n.closed;
	      });
	    } else {
	      void 0 === o.closed && (o.closed = !0);var l = document.createTextNode(o.name);Oe.addClass(l, "controller-name");var u = nt(n, l);Oe.addClass(this.__ul, e.CLASS_CLOSED), Oe.addClass(u, "title"), Oe.bind(u, "click", function (e) {
	        return e.preventDefault(), n.closed = !n.closed, !1;
	      }), o.closed || (this.closed = !1);
	    }o.autoPlace && (de.isUndefined(o.parent) && (Qe && (Ze = document.createElement("div"), Oe.addClass(Ze, "dg"), Oe.addClass(Ze, e.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(Ze), Qe = !1), Ze.appendChild(this.domElement), Oe.addClass(this.domElement, e.CLASS_AUTO_PLACE)), this.parent || dt(n, o.width)), this.__resizeHandler = function () {
	      n.onResizeDebounced();
	    }, Oe.bind(window, "resize", this.__resizeHandler), Oe.bind(this.__ul, "webkitTransitionEnd", this.__resizeHandler), Oe.bind(this.__ul, "transitionend", this.__resizeHandler), Oe.bind(this.__ul, "oTransitionEnd", this.__resizeHandler), this.onResize(), o.resizable && ct(this), a = function a() {
	      Je && "true" === localStorage.getItem(st(n, "isLocal")) && localStorage.setItem(st(n, "gui"), JSON.stringify(n.getSaveObject()));
	    }, this.saveToLocalStorageIfPossible = a, o.parent || ((r = n.getRoot()).width += 1, de.defer(function () {
	      r.width -= 1;
	    }));
	  };function nt(e, t, n) {
	    var o = document.createElement("li");return t && o.appendChild(t), n ? e.__ul.insertBefore(o, n) : e.__ul.appendChild(o), e.onResize(), o;
	  }function ot(e) {
	    Oe.unbind(window, "resize", e.__resizeHandler), e.saveToLocalStorageIfPossible && Oe.unbind(window, "unload", e.saveToLocalStorageIfPossible);
	  }function rt(e, t) {
	    var n = e.__preset_select[e.__preset_select.selectedIndex];n.innerHTML = t ? n.value + "*" : n.value;
	  }function it(e, t) {
	    var n = e.getRoot(),
	        o = n.__rememberedObjects.indexOf(t.object);if (-1 !== o) {
	      var r = n.__rememberedObjectIndecesToControllers[o];if (void 0 === r && (r = {}, n.__rememberedObjectIndecesToControllers[o] = r), r[t.property] = t, n.load && n.load.remembered) {
	        var i = n.load.remembered,
	            a = void 0;if (i[e.preset]) a = i[e.preset];else {
	          if (!i[We]) return;a = i[We];
	        }if (a[o] && void 0 !== a[o][t.property]) {
	          var s = a[o][t.property];t.initialValue = s, t.setValue(s);
	        }
	      }
	    }
	  }function at(e, t, n, o) {
	    if (void 0 === t[n]) throw new Error('Object "' + t + '" has no property "' + n + '"');var r = void 0;if (o.color) r = new He(t, n);else {
	      var i = [t, n].concat(o.factoryArgs);r = Xe.apply(e, i);
	    }o.before instanceof Se && (o.before = o.before.__li), it(e, r), Oe.addClass(r.domElement, "c");var a = document.createElement("span");Oe.addClass(a, "property-name"), a.innerHTML = r.property;var s = document.createElement("div");s.appendChild(a), s.appendChild(r.domElement);var l = nt(e, s, o.before);return Oe.addClass(l, tt.CLASS_CONTROLLER_ROW), r instanceof He ? Oe.addClass(l, "color") : Oe.addClass(l, ge(r.getValue())), function (e, t, n) {
	      if (n.__li = t, n.__gui = e, de.extend(n, { options: function options(t) {
	          if (arguments.length > 1) {
	            var o = n.__li.nextElementSibling;return n.remove(), at(e, n.object, n.property, { before: o, factoryArgs: [de.toArray(arguments)] });
	          }if (de.isArray(t) || de.isObject(t)) {
	            var r = n.__li.nextElementSibling;return n.remove(), at(e, n.object, n.property, { before: r, factoryArgs: [t] });
	          }
	        }, name: function name(e) {
	          return n.__li.firstElementChild.firstElementChild.innerHTML = e, n;
	        }, listen: function listen() {
	          return n.__gui.listen(n), n;
	        }, remove: function remove() {
	          return n.__gui.remove(n), n;
	        } }), n instanceof Ie) {
	        var o = new De(n.object, n.property, { min: n.__min, max: n.__max, step: n.__step });de.each(["updateDisplay", "onChange", "onFinishChange", "step"], function (e) {
	          var t = n[e],
	              r = o[e];n[e] = o[e] = function () {
	            var e = Array.prototype.slice.call(arguments);return r.apply(o, e), t.apply(n, e);
	          };
	        }), Oe.addClass(t, "has-slider"), n.domElement.insertBefore(o.domElement, n.domElement.firstElementChild);
	      } else if (n instanceof De) {
	        var r = function r(t) {
	          if (de.isNumber(n.__min) && de.isNumber(n.__max)) {
	            var o = n.__li.firstElementChild.firstElementChild.innerHTML,
	                r = n.__gui.__listening.indexOf(n) > -1;n.remove();var i = at(e, n.object, n.property, { before: n.__li.nextElementSibling, factoryArgs: [n.__min, n.__max, n.__step] });return i.name(o), r && i.listen(), i;
	          }return t;
	        };n.min = de.compose(r, n.min), n.max = de.compose(r, n.max);
	      } else n instanceof Le ? (Oe.bind(t, "click", function () {
	        Oe.fakeEvent(n.__checkbox, "click");
	      }), Oe.bind(n.__checkbox, "click", function (e) {
	        e.stopPropagation();
	      })) : n instanceof je ? (Oe.bind(t, "click", function () {
	        Oe.fakeEvent(n.__button, "click");
	      }), Oe.bind(t, "mouseover", function () {
	        Oe.addClass(n.__button, "hover");
	      }), Oe.bind(t, "mouseout", function () {
	        Oe.removeClass(n.__button, "hover");
	      })) : n instanceof He && (Oe.addClass(t, "color"), n.updateDisplay = de.compose(function (e) {
	        return t.style.borderLeftColor = n.__color.toString(), e;
	      }, n.updateDisplay), n.updateDisplay());n.setValue = de.compose(function (t) {
	        return e.getRoot().__preset_select && n.isModified() && rt(e.getRoot(), !0), t;
	      }, n.setValue);
	    }(e, l, r), e.__controllers.push(r), r;
	  }function st(e, t) {
	    return document.location.href + "." + t;
	  }function lt(e, t, n) {
	    var o = document.createElement("option");o.innerHTML = t, o.value = t, e.__preset_select.appendChild(o), n && (e.__preset_select.selectedIndex = e.__preset_select.length - 1);
	  }function ut(e, t) {
	    t.style.display = e.useLocalStorage ? "block" : "none";
	  }function ct(e) {
	    var t = void 0;function n(n) {
	      return n.preventDefault(), e.width += t - n.clientX, e.onResize(), t = n.clientX, !1;
	    }function o() {
	      Oe.removeClass(e.__closeButton, tt.CLASS_DRAG), Oe.unbind(window, "mousemove", n), Oe.unbind(window, "mouseup", o);
	    }function r(r) {
	      return r.preventDefault(), t = r.clientX, Oe.addClass(e.__closeButton, tt.CLASS_DRAG), Oe.bind(window, "mousemove", n), Oe.bind(window, "mouseup", o), !1;
	    }e.__resize_handle = document.createElement("div"), de.extend(e.__resize_handle.style, { width: "6px", marginLeft: "-3px", height: "200px", cursor: "ew-resize", position: "absolute" }), Oe.bind(e.__resize_handle, "mousedown", r), Oe.bind(e.__closeButton, "mousedown", r), e.domElement.insertBefore(e.__resize_handle, e.domElement.firstElementChild);
	  }function dt(e, t) {
	    e.domElement.style.width = t + "px", e.__save_row && e.autoPlace && (e.__save_row.style.width = t + "px"), e.__closeButton && (e.__closeButton.style.width = t + "px");
	  }function ft(e, t) {
	    var n = {};return de.each(e.__rememberedObjects, function (o, r) {
	      var i = {},
	          a = e.__rememberedObjectIndecesToControllers[r];de.each(a, function (e, n) {
	        i[n] = t ? e.initialValue : e.getValue();
	      }), n[r] = i;
	    }), n;
	  }tt.toggleHide = function () {
	    $e = !$e, de.each(et, function (e) {
	      e.domElement.style.display = $e ? "none" : "";
	    });
	  }, tt.CLASS_AUTO_PLACE = "a", tt.CLASS_AUTO_PLACE_CONTAINER = "ac", tt.CLASS_MAIN = "main", tt.CLASS_CONTROLLER_ROW = "cr", tt.CLASS_TOO_TALL = "taller-than-window", tt.CLASS_CLOSED = "closed", tt.CLASS_CLOSE_BUTTON = "close-button", tt.CLASS_CLOSE_TOP = "close-top", tt.CLASS_CLOSE_BOTTOM = "close-bottom", tt.CLASS_DRAG = "drag", tt.DEFAULT_WIDTH = 245, tt.TEXT_CLOSED = "Close Controls", tt.TEXT_OPEN = "Open Controls", tt._keydownHandler = function (e) {
	    "text" === document.activeElement.type || 72 !== e.which && 72 !== e.keyCode || tt.toggleHide();
	  }, Oe.bind(window, "keydown", tt._keydownHandler, !1), de.extend(tt.prototype, { add: function add(e, t) {
	      return at(this, e, t, { factoryArgs: Array.prototype.slice.call(arguments, 2) });
	    }, addColor: function addColor(e, t) {
	      return at(this, e, t, { color: !0 });
	    }, remove: function remove(e) {
	      this.__ul.removeChild(e.__li), this.__controllers.splice(this.__controllers.indexOf(e), 1);var t = this;de.defer(function () {
	        t.onResize();
	      });
	    }, destroy: function destroy() {
	      if (this.parent) throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace && Ze.removeChild(this.domElement);var e = this;de.each(this.__folders, function (t) {
	        e.removeFolder(t);
	      }), Oe.unbind(window, "keydown", tt._keydownHandler, !1), ot(this);
	    }, addFolder: function addFolder(e) {
	      if (void 0 !== this.__folders[e]) throw new Error('You already have a folder in this GUI by the name "' + e + '"');var t = { name: e, parent: this };t.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[e] && (t.closed = this.load.folders[e].closed, t.load = this.load.folders[e]);var n = new tt(t);this.__folders[e] = n;var o = nt(this, n.domElement);return Oe.addClass(o, "folder"), n;
	    }, removeFolder: function removeFolder(e) {
	      this.__ul.removeChild(e.domElement.parentElement), delete this.__folders[e.name], this.load && this.load.folders && this.load.folders[e.name] && delete this.load.folders[e.name], ot(e);var t = this;de.each(e.__folders, function (t) {
	        e.removeFolder(t);
	      }), de.defer(function () {
	        t.onResize();
	      });
	    }, open: function open() {
	      this.closed = !1;
	    }, close: function close() {
	      this.closed = !0;
	    }, onResize: function onResize() {
	      var e = this.getRoot();if (e.scrollable) {
	        var t = Oe.getOffset(e.__ul).top,
	            n = 0;de.each(e.__ul.childNodes, function (t) {
	          e.autoPlace && t === e.__save_row || (n += Oe.getHeight(t));
	        }), window.innerHeight - t - 20 < n ? (Oe.addClass(e.domElement, tt.CLASS_TOO_TALL), e.__ul.style.height = window.innerHeight - t - 20 + "px") : (Oe.removeClass(e.domElement, tt.CLASS_TOO_TALL), e.__ul.style.height = "auto");
	      }e.__resize_handle && de.defer(function () {
	        e.__resize_handle.style.height = e.__ul.offsetHeight + "px";
	      }), e.__closeButton && (e.__closeButton.style.width = e.width + "px");
	    }, onResizeDebounced: de.debounce(function () {
	      this.onResize();
	    }, 50), remember: function remember() {
	      if (de.isUndefined(Ke) && ((Ke = new qe()).domElement.innerHTML = '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n\n    </div>\n\n  </div>\n\n</div>'), this.parent) throw new Error("You can only call remember on a top level GUI.");var e = this;de.each(Array.prototype.slice.call(arguments), function (t) {
	        0 === e.__rememberedObjects.length && function (e) {
	          var t = e.__save_row = document.createElement("li");Oe.addClass(e.domElement, "has-save"), e.__ul.insertBefore(t, e.__ul.firstChild), Oe.addClass(t, "save-row");var n = document.createElement("span");n.innerHTML = "&nbsp;", Oe.addClass(n, "button gears");var o = document.createElement("span");o.innerHTML = "Save", Oe.addClass(o, "button"), Oe.addClass(o, "save");var r = document.createElement("span");r.innerHTML = "New", Oe.addClass(r, "button"), Oe.addClass(r, "save-as");var i = document.createElement("span");i.innerHTML = "Revert", Oe.addClass(i, "button"), Oe.addClass(i, "revert");var a = e.__preset_select = document.createElement("select");e.load && e.load.remembered ? de.each(e.load.remembered, function (t, n) {
	            lt(e, n, n === e.preset);
	          }) : lt(e, We, !1);if (Oe.bind(a, "change", function () {
	            for (var t = 0; t < e.__preset_select.length; t++) {
	              e.__preset_select[t].innerHTML = e.__preset_select[t].value;
	            }e.preset = this.value;
	          }), t.appendChild(a), t.appendChild(n), t.appendChild(o), t.appendChild(r), t.appendChild(i), Je) {
	            var s = document.getElementById("dg-local-explain"),
	                l = document.getElementById("dg-local-storage"),
	                u = document.getElementById("dg-save-locally");u.style.display = "block", "true" === localStorage.getItem(st(e, "isLocal")) && l.setAttribute("checked", "checked"), ut(e, s), Oe.bind(l, "change", function () {
	              e.useLocalStorage = !e.useLocalStorage, ut(e, s);
	            });
	          }var c = document.getElementById("dg-new-constructor");Oe.bind(c, "keydown", function (e) {
	            !e.metaKey || 67 !== e.which && 67 !== e.keyCode || Ke.hide();
	          }), Oe.bind(n, "click", function () {
	            c.innerHTML = JSON.stringify(e.getSaveObject(), void 0, 2), Ke.show(), c.focus(), c.select();
	          }), Oe.bind(o, "click", function () {
	            e.save();
	          }), Oe.bind(r, "click", function () {
	            var t = prompt("Enter a new preset name.");t && e.saveAs(t);
	          }), Oe.bind(i, "click", function () {
	            e.revert();
	          });
	        }(e), -1 === e.__rememberedObjects.indexOf(t) && e.__rememberedObjects.push(t);
	      }), this.autoPlace && dt(this, this.width);
	    }, getRoot: function getRoot() {
	      for (var e = this; e.parent;) {
	        e = e.parent;
	      }return e;
	    }, getSaveObject: function getSaveObject() {
	      var e = this.load;return e.closed = this.closed, this.__rememberedObjects.length > 0 && (e.preset = this.preset, e.remembered || (e.remembered = {}), e.remembered[this.preset] = ft(this)), e.folders = {}, de.each(this.__folders, function (t, n) {
	        e.folders[n] = t.getSaveObject();
	      }), e;
	    }, save: function save() {
	      this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = ft(this), rt(this, !1), this.saveToLocalStorageIfPossible();
	    }, saveAs: function saveAs(e) {
	      this.load.remembered || (this.load.remembered = {}, this.load.remembered[We] = ft(this, !0)), this.load.remembered[e] = ft(this), this.preset = e, lt(this, e, !0), this.saveToLocalStorageIfPossible();
	    }, revert: function revert(e) {
	      de.each(this.__controllers, function (t) {
	        this.getRoot().load.remembered ? it(e || this.getRoot(), t) : t.setValue(t.initialValue), t.__onFinishChange && t.__onFinishChange.call(t, t.getValue());
	      }, this), de.each(this.__folders, function (e) {
	        e.revert(e);
	      }), e || rt(this.getRoot(), !1);
	    }, listen: function listen(e) {
	      var t = 0 === this.__listening.length;this.__listening.push(e), t && function e(t) {
	        0 !== t.length && Ye.call(window, function () {
	          e(t);
	        });de.each(t, function (e) {
	          e.updateDisplay();
	        });
	      }(this.__listening);
	    }, updateDisplay: function updateDisplay() {
	      de.each(this.__controllers, function (e) {
	        e.updateDisplay();
	      }), de.each(this.__folders, function (e) {
	        e.updateDisplay();
	      });
	    } });var ht = { color: { Color: Ae, math: be, interpret: _e }, controllers: { Controller: Se, BooleanController: Le, OptionController: Be, StringController: Ne, NumberController: Pe, NumberControllerBox: De, NumberControllerSlider: Ie, FunctionController: je, ColorController: He }, dom: { dom: Oe }, gui: { GUI: tt }, GUI: tt };var pt = "\n    attribute vec3 aVertexNormal;\n    attribute vec3 aVertexPosition;\n    attribute vec2 aTextureCoord;\n    attribute vec4 aVertexColor;\n\n    uniform mat4 uModelViewMatrix;\n    uniform mat4 uProjectionMatrix;\n    uniform mat4 uNormalMatrix;\n\n    uniform float uDirectionalLighting;\n\n    varying highp vec3 vLighting;\n    varying highp vec2 vTextureCoord;\n    varying highp vec4 vColor;\n\n    void main() {\n      gl_Position =   uProjectionMatrix * uModelViewMatrix \n                    * vec4(aVertexPosition, 1);\n\n      if (uDirectionalLighting > 0.0) {\n         highp vec3 ambientLight = vec3(0.1, 0.1, 0.1);\n         highp vec3 directionalLightColor = vec3(1, 1, 1);\n         highp vec3 directionalVector \n            = normalize(vec3(1.0, 0.3, 0.5));\n\n         highp vec4 transformedNormal \n            = uNormalMatrix * vec4(aVertexNormal, 1.0);\n\n         highp float directional = max(\n            dot(transformedNormal.xyz, directionalVector), \n            0.0\n         );\n\n         vLighting = ambientLight \n                   + (directionalLightColor * directional);\n      } else {\n         vLighting = vec3(1.0, 1.0, 1.0);\n      }\n\n      vTextureCoord = aTextureCoord;\n      vColor = aVertexColor;\n    }\n  ",
	      _t = "\n    varying highp vec3 vLighting;\n    varying highp vec2 vTextureCoord;\n    varying highp vec4 vColor;\n\n    uniform sampler2D uSampler;\n    uniform lowp float uUseTexture;\n\n    void main() {\n      highp vec4 color;\n      if (uUseTexture > 0.0) {\n         color = texture2D(uSampler, vTextureCoord);\n      } else {\n         color = vColor;\n      }\n\n      gl_FragColor = vec4(color.rgb * vLighting, color.a);\n    }\n  ";function mt(e, t, n, o) {
	    var r = e.FLOAT;e.bindBuffer(e.ARRAY_BUFFER, n), e.vertexAttribPointer(o, t, r, !1, 0, 0), e.enableVertexAttribArray(o);
	  }function bt(e, t, n, r) {
	    e.useProgram(t.programInfo.program), function (e, t, n) {
	      var o = t.programInfo.attribLocations;mt(e, 3, n.vertexBuffer, o.vertexPosition), mt(e, 3, n.normalBuffer, o.vertexNormal), mt(e, 4, n.colorBuffer, o.vertexColor), mt(e, 2, n.textureBuffer, o.textureCoord), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, n.indexBuffer);
	    }(e, t, n), function (e, t, n, r) {
	      var i = t.programInfo,
	          a = 25 * Math.PI / 180,
	          s = e.canvas.clientWidth / e.canvas.clientHeight,
	          l = o.create();o.perspective(l, a, s, .1, 100);var u = o.create();o.invert(u, r), o.transpose(u, u);var c = i.uniformLocations;e.uniformMatrix4fv(c.projectionMatrix, !1, l), e.uniformMatrix4fv(c.modelViewMatrix, !1, r), e.uniformMatrix4fv(c.normalMatrix, !1, u), t.useTexture ? e.uniform1f(c.useTexture, 1) : e.uniform1f(c.useTexture, 0), "directional" === t.lighting ? e.uniform1f(c.directionalLighting, 1) : e.uniform1f(c.directionalLighting, 0);
	    }(e, t, 0, r);{
	      var _t2 = 0,
	          _o2 = e.UNSIGNED_SHORT;e.drawElements(e.TRIANGLES, n.vertexCount, _o2, _t2);
	    }
	  }function gt(e, t) {
	    var n = [],
	        o = [],
	        r = [],
	        i = [],
	        a = [],
	        s = t,
	        l = t;for (var u = 0; u <= l; ++u) {
	      for (var c = 0; c <= s; ++c) {
	        var _e2 = 2 * Math.PI / s * c,
	            _t3 = Math.PI / l * u,
	            _h = u * (s + 1) + c;if (n[6 * _h + 0] = Math.cos(_e2) * Math.sin(_t3), n[6 * _h + 1] = Math.sin(_e2) * Math.sin(_t3), n[6 * _h + 2] = Math.cos(_t3), n[6 * _h + 3] = Math.cos(_e2) * Math.sin(_t3), n[6 * _h + 4] = Math.sin(_e2) * Math.sin(_t3), n[6 * _h + 5] = Math.cos(_t3), r[6 * _h + 0] = Math.cos(_e2) * Math.sin(_t3), r[6 * _h + 1] = Math.sin(_e2) * Math.sin(_t3), r[6 * _h + 2] = Math.cos(_t3), r[6 * _h + 3] = Math.cos(_e2) * Math.sin(_t3), r[6 * _h + 4] = Math.sin(_e2) * Math.sin(_t3), r[6 * _h + 5] = Math.cos(_t3), a[4 * _h + 0] = c / s, a[4 * _h + 1] = u / l, a[4 * _h + 2] = c / s, a[4 * _h + 3] = u / l, o[8 * _h + 0] = 0, o[8 * _h + 1] = 1, o[8 * _h + 2] = 0, o[8 * _h + 3] = 1, o[8 * _h + 4] = 0, o[8 * _h + 5] = 0, o[8 * _h + 6] = 1, o[8 * _h + 7] = 1, c < s && u < l) {
	          var d = u * (s + 1) + c,
	              f = s + 1;u > -1 && u < l - 1 + 2 && (i[6 * d + 0] = 2 * ((u + 1) * f + c), i[6 * d + 1] = 2 * (u * f + c), i[6 * d + 2] = 2 * (u * f + (c + 1)), i[6 * d + 3] = 2 * ((u + 1) * f + c) + 1, i[6 * d + 4] = 2 * ((u + 1) * f + (c + 1)) + 1, i[6 * d + 5] = 2 * (u * f + (c + 1)) + 1);
	        }
	      }
	    }var h = e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER, h), e.bufferData(e.ARRAY_BUFFER, new Float32Array(n), e.STATIC_DRAW);var p = e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER, p), e.bufferData(e.ARRAY_BUFFER, new Float32Array(o), e.STATIC_DRAW);var _ = e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER, _), e.bufferData(e.ARRAY_BUFFER, new Float32Array(r), e.STATIC_DRAW);var m = e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER, m), e.bufferData(e.ARRAY_BUFFER, new Float32Array(a), e.STATIC_DRAW);var b = e.createBuffer();return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, b), e.bufferData(e.ELEMENT_ARRAY_BUFFER, new Uint16Array(i), e.STATIC_DRAW), { vertexBuffer: h, colorBuffer: p, normalBuffer: _, indexBuffer: b, textureBuffer: m, vertexCount: i.length };
	  }function vt(e, t, n, r, i, a, s) {
	    var l = o.create();o.translate(l, l, [n, r, i]), o.rotate(l, l, -Math.PI / 2 + a * Math.PI / 180, [1, 0, 0]), o.rotate(l, l, s, [0, 0, 1]), bt(e, t, t.obj, l);
	  }function yt(e, t, n) {
	    var o = e.createShader(t);return e.shaderSource(o, n), e.compileShader(o), e.getShaderParameter(o, e.COMPILE_STATUS) ? o : (alert("An error occurred compiling the shaders: " + e.getShaderInfoLog(o)), e.deleteShader(o), null);
	  }function wt(e) {
	    return 0 == (e & e - 1);
	  }t.default = function (e, t, n, o, r) {
	    var i = function (e) {
	      var t = e.getContext("webgl");return t || (console.log("can't find any webgl -- this is not going to work"), alert("Your browser does not support WebGL")), t;
	    }(t);if (!i) return;var a = function (e, t, n) {
	      var o = function (e, t, n) {
	        var o = yt(e, e.VERTEX_SHADER, t),
	            r = yt(e, e.FRAGMENT_SHADER, n),
	            i = e.createProgram();return e.attachShader(i, o), e.attachShader(i, r), e.linkProgram(i), e.getProgramParameter(i, e.LINK_STATUS) ? i : (alert("Unable to initialize the shader program: " + e.getProgramInfoLog(i)), null);
	      }(e, t, n);return { program: o, attribLocations: { vertexPosition: e.getAttribLocation(o, "aVertexPosition"), vertexNormal: e.getAttribLocation(o, "aVertexNormal"), textureCoord: e.getAttribLocation(o, "aTextureCoord"), vertexColor: e.getAttribLocation(o, "aVertexColor") }, uniformLocations: { projectionMatrix: e.getUniformLocation(o, "uProjectionMatrix"), modelViewMatrix: e.getUniformLocation(o, "uModelViewMatrix"), normalMatrix: e.getUniformLocation(o, "uNormalMatrix"), directionalLighting: e.getUniformLocation(o, "uDirectionalLighting"), useTexture: e.getUniformLocation(o, "uUseTexture") } };
	    }(i, pt, _t);var s = function (e, t, n, o, r) {
	      return { useTexture: r, multipleEarth: !1, lighting: o, meshSize: n, distance: 6, phi: 0, obj: gt(e, n), programInfo: t };
	    }(i, a, n, o, r);!function (e, t, n) {
	      var o = new ht.GUI();o.add(n, "multipleEarth"), o.add(n, "useTexture"), o.add(n, "lighting", ["uniform", "directional"]), o.add(n, "meshSize", 5, 75).onChange(function (t) {
	        n.meshSize = Math.round(t), function (e, t) {
	          e.deleteBuffer(t.vertexBuffer), e.deleteBuffer(t.colorBuffer), e.deleteBuffer(t.normalBuffer), e.deleteBuffer(t.indexBuffer), e.deleteBuffer(t.textureBuffer);
	        }(e, n.obj), n.obj = gt(e, n.meshSize);
	      }), o.add(n, "distance", 2, 30), o.add(n, "phi", -90, 90), o.close(), t.appendChild(o.domElement);
	    }(i, e, s), function (e, t, n) {
	      var o = e.createTexture();e.bindTexture(e.TEXTURE_2D, o);var r = e.RGBA,
	          i = e.RGBA,
	          a = e.UNSIGNED_BYTE,
	          s = new Uint8Array([0, 0, 255, 255]);e.texImage2D(e.TEXTURE_2D, 0, r, 1, 1, 0, i, a, s);var l = new Image();l.onload = function () {
	        e.bindTexture(e.TEXTURE_2D, o), e.texImage2D(e.TEXTURE_2D, 0, r, i, a, l), wt(l.width) && wt(l.height) ? e.generateMipmap(e.TEXTURE_2D) : (e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR)), n(o);
	      }, l.src = t;
	    }(i, "land_ocean_ice_cloud_2048.jpg", function (e) {
	      return function (e, t, n) {
	        var o = window.performance.now();e.clearColor(0, 0, 0, 1), e.clearDepth(1), e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), window.requestAnimationFrame(function n(r) {
	          var i = r - o,
	              a = .001 * i * .5;t.obj, e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), vt(e, t, 0, 0, -t.distance, t.phi, a), t.multipleEarth && function (e, t, n) {
	            vt(e, t, -1.5, 1.5, -t.distance, t.phi, n), vt(e, t, 1.5, 1.5, -t.distance, t.phi, n), vt(e, t, -1.5, -1.5, -t.distance, t.phi, n), vt(e, t, 1.5, -1.5, -t.distance, t.phi, n);
	          }(e, t, a), window.requestAnimationFrame(n);
	        });
	      }(i, s);
	    });
	  };
	}, function (e, t) {
	  e.exports = function (e) {
	    var t = "undefined" != typeof window && window.location;if (!t) throw new Error("fixUrls requires window.location");if (!e || "string" != typeof e) return e;var n = t.protocol + "//" + t.host,
	        o = n + t.pathname.replace(/\/[^\/]*$/, "/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
	      var r,
	          i = t.trim().replace(/^"(.*)"$/, function (e, t) {
	        return t;
	      }).replace(/^'(.*)'$/, function (e, t) {
	        return t;
	      });return (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? e : (r = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : o + i.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")")
	      );
	    });
	  };
	}, function (e, t, n) {
	  var o,
	      r,
	      i = {},
	      a = (o = function o() {
	    return window && document && document.all && !window.atob;
	  }, function () {
	    return void 0 === r && (r = o.apply(this, arguments)), r;
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
	      d = n(2);function f(e, t) {
	    for (var n = 0; n < e.length; n++) {
	      var o = e[n],
	          r = i[o.id];if (r) {
	        r.refs++;for (var a = 0; a < r.parts.length; a++) {
	          r.parts[a](o.parts[a]);
	        }for (; a < o.parts.length; a++) {
	          r.parts.push(g(o.parts[a], t));
	        }
	      } else {
	        var s = [];for (a = 0; a < o.parts.length; a++) {
	          s.push(g(o.parts[a], t));
	        }i[o.id] = { id: o.id, refs: 1, parts: s };
	      }
	    }
	  }function h(e, t) {
	    for (var n = [], o = {}, r = 0; r < e.length; r++) {
	      var i = e[r],
	          a = t.base ? i[0] + t.base : i[0],
	          s = { css: i[1], media: i[2], sourceMap: i[3] };o[a] ? o[a].parts.push(s) : n.push(o[a] = { id: a, parts: [s] });
	    }return n;
	  }function p(e, t) {
	    var n = s(e.insertInto);if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o = c[c.length - 1];if ("top" === e.insertAt) o ? o.nextSibling ? n.insertBefore(t, o.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), c.push(t);else if ("bottom" === e.insertAt) n.appendChild(t);else {
	      if ("object" != _typeof(e.insertAt) || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r = s(e.insertInto + " " + e.insertAt.before);n.insertBefore(t, r);
	    }
	  }function _(e) {
	    if (null === e.parentNode) return !1;e.parentNode.removeChild(e);var t = c.indexOf(e);t >= 0 && c.splice(t, 1);
	  }function m(e) {
	    var t = document.createElement("style");return void 0 === e.attrs.type && (e.attrs.type = "text/css"), b(t, e.attrs), p(e, t), t;
	  }function b(e, t) {
	    Object.keys(t).forEach(function (n) {
	      e.setAttribute(n, t[n]);
	    });
	  }function g(e, t) {
	    var n, o, r, i;if (t.transform && e.css) {
	      if (!(i = t.transform(e.css))) return function () {};e.css = i;
	    }if (t.singleton) {
	      var a = u++;n = l || (l = m(t)), o = w.bind(null, n, a, !1), r = w.bind(null, n, a, !0);
	    } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (e) {
	      var t = document.createElement("link");return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", b(t, e.attrs), p(e, t), t;
	    }(t), o = function (e, t, n) {
	      var o = n.css,
	          r = n.sourceMap,
	          i = void 0 === t.convertToAbsoluteUrls && r;(t.convertToAbsoluteUrls || i) && (o = d(o));r && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");var a = new Blob([o], { type: "text/css" }),
	          s = e.href;e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
	    }.bind(null, n, t), r = function r() {
	      _(n), n.href && URL.revokeObjectURL(n.href);
	    }) : (n = m(t), o = function (e, t) {
	      var n = t.css,
	          o = t.media;o && e.setAttribute("media", o);if (e.styleSheet) e.styleSheet.cssText = n;else {
	        for (; e.firstChild;) {
	          e.removeChild(e.firstChild);
	        }e.appendChild(document.createTextNode(n));
	      }
	    }.bind(null, n), r = function r() {
	      _(n);
	    });return o(e), function (t) {
	      if (t) {
	        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;o(e = t);
	      } else r();
	    };
	  }e.exports = function (e, t) {
	    if ("undefined" != "boolean" && (true) && "object" != (typeof document === "undefined" ? "undefined" : _typeof(document))) throw new Error("The style-loader cannot be used in a non-browser environment");(t = t || {}).attrs = "object" == _typeof(t.attrs) ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = a()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");var n = h(e, t);return f(n, t), function (e) {
	      for (var o = [], r = 0; r < n.length; r++) {
	        var a = n[r];(s = i[a.id]).refs--, o.push(s);
	      }e && f(h(e, t), t);for (r = 0; r < o.length; r++) {
	        var s;if (0 === (s = o[r]).refs) {
	          for (var l = 0; l < s.parts.length; l++) {
	            s.parts[l]();
	          }delete i[s.id];
	        }
	      }
	    };
	  };var v,
	      y = (v = [], function (e, t) {
	    return v[e] = t, v.filter(Boolean).join("\n");
	  });function w(e, t, n, o) {
	    var r = n ? "" : o.css;if (e.styleSheet) e.styleSheet.cssText = y(t, r);else {
	      var i = document.createTextNode(r),
	          a = e.childNodes;a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
	    }
	  }
	}, function (e, t) {
	  e.exports = function (e) {
	    var t = [];return t.toString = function () {
	      return this.map(function (t) {
	        var n = function (e, t) {
	          var n = e[1] || "",
	              o = e[3];if (!o) return n;if (t && "function" == typeof btoa) {
	            var r = (a = o, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
	                i = o.sources.map(function (e) {
	              return "/*# sourceURL=" + o.sourceRoot + e + " */";
	            });return [n].concat(i).concat([r]).join("\n");
	          }var a;return [n].join("\n");
	        }(t, e);return t[2] ? "@media " + t[2] + "{" + n + "}" : n;
	      }).join("");
	    }, t.i = function (e, n) {
	      "string" == typeof e && (e = [[null, e, ""]]);for (var o = {}, r = 0; r < this.length; r++) {
	        var i = this[r][0];"number" == typeof i && (o[i] = !0);
	      }for (r = 0; r < e.length; r++) {
	        var a = e[r];"number" == typeof a[0] && o[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a));
	      }
	    }, t;
	  };
	}, function (e, t, n) {
	  (e.exports = n(4)(!1)).push([e.i, "/* override for just this component, it makes dat.gui work properly */\n.demon ul li {\n    margin-bottom: 0;\n}    \n", ""]);
	}, function (e, t, n) {
	  var o = n(5);"string" == typeof o && (o = [[e.i, o, ""]]);var r = { hmr: !0, transform: void 0, insertInto: void 0 };n(3)(o, r);o.locals && (e.exports = o.locals);
	}, function (e, t) {
	  e.exports = __webpack_require__(1);
	}, function (e, t, n) {
	  "use strict";
	  n.r(t);var o = n(0),
	      r = n.n(o);n.d(t, "HelloGL", function () {
	    return r.a;
	  }), console.log("here we ARE!");
	}]);

/***/ })

});