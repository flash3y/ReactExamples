'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Miss = function (_React$Component) {
  _inherits(Miss, _React$Component);

  function Miss() {
    _classCallCheck(this, Miss);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Miss.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.unlisten = this.context.router.subscribe(function () {
      _this2.forceUpdate();
    });
  };

  Miss.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unlisten();
  };

  Miss.prototype.render = function render() {
    var _props = this.props,
        render = _props.render,
        Component = _props.component;

    var _context$router$match = this.context.router.match.getState(),
        matchCount = _context$router$match.matchCount;

    var _context$router$getSt = this.context.router.getState(),
        location = _context$router$getSt.location;

    return matchCount === 0 ? render ? render({ location: location }) : _react2.default.createElement(Component, { location: location }) : null;
  };

  return Miss;
}(_react2.default.Component);

Miss.contextTypes = {
  router: _react.PropTypes.object
};


if (process.env.NODE_ENV !== 'production') {
  Miss.propTypes = {
    children: _react.PropTypes.node,
    render: _react.PropTypes.func,
    component: _react.PropTypes.func
  };
}

exports.default = Miss;