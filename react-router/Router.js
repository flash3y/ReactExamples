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

var Router = function (_React$Component) {
  _inherits(Router, _React$Component);

  function Router(props) {
    _classCallCheck(this, Router);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      location: props.history.location,
      action: props.history.action
    };
    return _this;
  }

  Router.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var history = this.props.history;

    this.unlisten = history.listen(function () {
      _this2.setState({
        location: history.location,
        action: history.action
      });
    });
  };

  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unlisten();
  };

  Router.prototype.render = function render() {
    var _state = this.state,
        location = _state.location,
        action = _state.action;

    var _props = this.props,
        history = _props.history,
        rest = _objectWithoutProperties(_props, ['history']);

    return _react2.default.createElement(_StaticRouter2.default, _extends({
      action: action,
      location: location,
      onPush: history.push,
      onReplace: history.replace,
      blockTransitions: history.block
    }, rest));
  };

  return Router;
}(_react2.default.Component);

if (process.env.NODE_ENV !== 'production') {
  Router.propTypes = {
    history: _react.PropTypes.object.isRequired
  };
}

exports.default = Router;