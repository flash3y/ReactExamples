'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createHashHistory = require('history/createHashHistory');

var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

var _Router = require('./Router');

var _Router2 = _interopRequireDefault(_Router);

var _PathUtils = require('history/PathUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var createHref = function createHref(hashType) {
  return function (path) {
    var newPath = void 0;

    switch (hashType) {
      case 'hashbang':
        newPath = path.charAt(0) === '!' ? path : '!/' + (0, _PathUtils.stripLeadingSlash)(path);
        break;
      case 'noslash':
        newPath = (0, _PathUtils.stripLeadingSlash)(path);
        break;
      case 'slash':
      default:
        newPath = (0, _PathUtils.addLeadingSlash)(path);
        break;
    }

    return '#' + newPath;
  };
};

var HashRouter = function (_React$Component) {
  _inherits(HashRouter, _React$Component);

  function HashRouter() {
    _classCallCheck(this, HashRouter);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  HashRouter.prototype.componentWillMount = function componentWillMount() {
    var _props = this.props,
        basename = _props.basename,
        getUserConfirmation = _props.getUserConfirmation,
        hashType = _props.hashType;


    this.history = (0, _createHashHistory2.default)({
      basename: basename,
      getUserConfirmation: getUserConfirmation,
      hashType: hashType
    });
  };

  HashRouter.prototype.render = function render() {
    var _props2 = this.props,
        basename = _props2.basename,
        getUserConfirmation = _props2.getUserConfirmation,
        hashType = _props2.hashType,
        routerProps = _objectWithoutProperties(_props2, ['basename', 'getUserConfirmation', 'hashType']);

    return _react2.default.createElement(_Router2.default, _extends({
      history: this.history,
      createHref: createHref(hashType)
    }, routerProps));
  };

  return HashRouter;
}(_react2.default.Component);

if (process.env.NODE_ENV !== 'production') {
  HashRouter.propTypes = {
    basename: _react.PropTypes.string,
    getUserConfirmation: _react.PropTypes.func,
    hashType: _react.PropTypes.string,

    // StaticRouter props
    stringifyQuery: _react.PropTypes.func,
    parseQueryString: _react.PropTypes.func,
    createHref: _react.PropTypes.func.isRequired,
    children: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.node])
  };
}

exports.default = HashRouter;