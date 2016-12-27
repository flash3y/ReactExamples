'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Redirect = function (_React$Component) {
  _inherits(Redirect, _React$Component);

  function Redirect() {
    _classCallCheck(this, Redirect);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Redirect.prototype.isServerRender = function isServerRender() {
    return this.context.serverRouter;
  };

  Redirect.prototype.componentWillMount = function componentWillMount() {
    if (this.isServerRender()) this.redirect();
  };

  Redirect.prototype.componentDidMount = function componentDidMount() {
    if (!this.isServerRender()) this.redirect();
  };

  Redirect.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    // TODO: use looseEqual from history/LocationUtils
    // so we can allow for objects here
    if (prevProps.to !== this.props.to) {
      this.redirect();
    }
  };

  Redirect.prototype.redirect = function redirect() {
    var router = this.context.router;
    var _props = this.props,
        to = _props.to,
        push = _props.push;

    var navigate = push ? router.transitionTo : router.replaceWith;
    navigate(to);
  };

  Redirect.prototype.render = function render() {
    return null;
  };

  return Redirect;
}(_react2.default.Component);

Redirect.defaultProps = {
  push: false
};
Redirect.contextTypes = {
  router: _react.PropTypes.object,
  serverRouter: _react.PropTypes.bool
};


if (process.env.NODE_ENV !== 'production') {
  Redirect.propTypes = {
    to: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]).isRequired,
    push: _react.PropTypes.bool
  };
}

exports.default = Redirect;