'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createMemoryHistory = require('history/createMemoryHistory');

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

var _Router = require('./Router');

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MemoryRouter = function (_Component) {
  _inherits(MemoryRouter, _Component);

  function MemoryRouter() {
    _classCallCheck(this, MemoryRouter);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  MemoryRouter.prototype.componentWillMount = function componentWillMount() {
    var _props = this.props,
        getUserConfirmation = _props.getUserConfirmation,
        initialEntries = _props.initialEntries,
        initialIndex = _props.initialIndex,
        keyLength = _props.keyLength;


    this.history = (0, _createMemoryHistory2.default)({
      getUserConfirmation: getUserConfirmation,
      initialEntries: initialEntries,
      initialIndex: initialIndex,
      keyLength: keyLength
    });
  };

  MemoryRouter.prototype.render = function render() {
    var _props2 = this.props,
        getUserConfirmation = _props2.getUserConfirmation,
        initialEntries = _props2.initialEntries,
        initialIndex = _props2.initialIndex,
        keyLength = _props2.keyLength,
        routerProps = _objectWithoutProperties(_props2, ['getUserConfirmation', 'initialEntries', 'initialIndex', 'keyLength']);

    return _react2.default.createElement(_Router2.default, _extends({
      history: this.history
    }, routerProps));
  };

  return MemoryRouter;
}(_react.Component);

if (process.env.NODE_ENV !== 'production') {
  MemoryRouter.propTypes = {
    getUserConfirmation: _react.PropTypes.func,
    initialEntries: _react.PropTypes.array,
    initialIndex: _react.PropTypes.number,
    keyLength: _react.PropTypes.number,

    // StaticRouter props
    stringifyQuery: _react.PropTypes.func,
    parseQueryString: _react.PropTypes.func,
    children: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.node])
  };
}

exports.default = MemoryRouter;