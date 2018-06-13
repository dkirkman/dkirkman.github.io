webpackJsonp([5],{

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.AddValues = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AddValues = function (_Component) {
	  _inherits(AddValues, _Component);

	  function AddValues(props) {
	    _classCallCheck(this, AddValues);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

	    _this.onclick = _this.onclick.bind(_this);

	    var asmjs = false;
	    if (props.asmjs === 'true') asmjs = true;
	    _this.state = { asmjs: asmjs };
	    return _this;
	  }

	  AddValues.prototype.onclick = function onclick() {
	    var _this2 = this;

	    if (this.state.cspace) return; // already loaded

	    var script = document.createElement("script");
	    script.type = "text/javascript";
	    script.src = 'index.js';
	    script.addEventListener('load', function (e, f) {
	      window.EmscriptenWebpack.default({ 'asm.js': _this2.state.asmjs,
	        'url_prefix': './' }, function (cspace) {
	        _this2.setState({ cspace: cspace });
	      });
	    });

	    document.head.appendChild(script);
	  };

	  AddValues.prototype.render = function render() {
	    var result = 'unloaded';
	    if (this.state.cspace) {
	      result = this.state.cspace._add_values(12, 11);
	    }

	    var loadText = "12 + 11 via WebAssembly";
	    if (this.state.asmjs) {
	      loadText = "12 + 11 via AsmJS";
	    }

	    return _react2.default.createElement(
	      'div',
	      { style: { width: 400, margin: 'auto', display: 'block' } },
	      _react2.default.createElement(
	        'button',
	        { type: 'button', onClick: this.onclick },
	        loadText
	      ),
	      _react2.default.createElement(
	        'div',
	        { style: { float: 'right' } },
	        'Result = ',
	        result
	      )
	    );
	  };

	  return AddValues;
	}(_react.Component);

	exports.AddValues = AddValues;

/***/ })

});