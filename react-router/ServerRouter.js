'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _StaticRouter = require('./StaticRouter');

var _StaticRouter2 = _interopRequireDefault(_StaticRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ignoreFirstCall = function ignoreFirstCall(fn) {
  var called = false;
  return function () {
    if (called) {
      fn.apply(undefined, arguments);
    } else {
      called = true;
    }
  };
};

var ServerRouter = function (_React$Component) {
  _inherits(ServerRouter, _React$Component);

  function ServerRouter(props) {
    _classCallCheck(this, ServerRouter);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.handleMatch = ignoreFirstCall(function () {
      _this.props.context.missed = false;
    });

    _this.handleRedirect = function (location) {
      // only take the first redirect
      if (!_this.props.context.redirect) _this.props.context.redirect = location;
    };

    var context = props.context;

    context.missed = true;
    context.redirect = null;
    return _this;
  }

  ServerRouter.prototype.getChildContext = function getChildContext() {
    return { serverRouter: true };
  };

  // ignore first call because StaticRouter renders a <Match>,
  // so we ignore that one.


  ServerRouter.prototype.render = function render() {
    var _props = this.props,
        location = _props.location,
        basename = _props.basename,
        rest = _objectWithoutProperties(_props, ['location', 'basename']);

    return _react2.default.createElement(_StaticRouter2.default, _extends({
      action: 'POP',
      location: location,
      basename: basename,
      onReplace: this.handleRedirect,
      onPush: this.handleRedirect,
      onMatch: this.handleMatch
    }, rest));
  };

  return ServerRouter;
}(_react2.default.Component);

ServerRouter.childContextTypes = {
  serverRouter: _react.PropTypes.bool
};


if (process.env.NODE_ENV !== 'production') {
  ServerRouter.propTypes = {
    basename: _react.PropTypes.string,
    context: _react.PropTypes.object.isRequired,
    location: _react.PropTypes.string.isRequired,
    children: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.node])
  };
}

exports.default = ServerRouter;