'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _queryString = require('query-string');

var _Match = require('./Match');

var _Match2 = _interopRequireDefault(_Match);

var _LocationUtils = require('./LocationUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var call = function call(f) {
  return f();
};

var stringifyQuery = function stringifyQuery(query) {
  return (0, _queryString.stringify)(query).replace(/%20/g, '+');
};

var StaticRouter = function (_React$Component) {
  _inherits(StaticRouter, _React$Component);

  function StaticRouter(props) {
    _classCallCheck(this, StaticRouter);

    // mange this ourselves instead of setState since we're notifying descendant
    // components (Match, Miss, Link) via subscriptions, if we use setState only,
    // then sCU will prevent valid changes from reconciling, if we use setState +
    // subscriptions, we get double virtual renders (`setState(nextState,
    // notifySubscribers)`), so we manage the location mutation manually.
    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.transitionTo = function (location) {
      _this.props.onPush(_this.createLocation(location));
    };

    _this.replaceWith = function (location) {
      _this.props.onReplace(_this.createLocation(location));
    };

    _this.blockTransitions = function (prompt) {
      return _this.props.blockTransitions(prompt);
    };

    _this.createHref = function (to) {
      var path = (0, _LocationUtils.createRouterPath)(to, _this.props.stringifyQuery);

      if (_this.props.basename) if (path === '/') path = _this.props.basename;else if (path.length >= 2 && path.charAt(0) === '/' && path.charAt(1) === '?') path = _this.props.basename + path.substring(1);else path = _this.props.basename + path;

      return _this.props.createHref(path);
    };

    _this.notifySubscribers = function () {
      if (_this.subscribers.length) _this.subscribers.forEach(call);
    };

    _this.location = _this.createLocation(props.location);
    _this.subscribers = [];
    return _this;
  }

  StaticRouter.prototype.getChildContext = function getChildContext() {
    return {
      router: this.getRouterContext()
    };
  };

  StaticRouter.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (!(0, _LocationUtils.locationsAreEqual)(nextProps.location, this.props.location)) {
      this.location = this.createLocation(nextProps.location);
      this.notifySubscribers();
    }
  };

  StaticRouter.prototype.getRouterContext = function getRouterContext() {
    var _this2 = this;

    return {
      transitionTo: this.transitionTo,
      replaceWith: this.replaceWith,
      blockTransitions: this.blockTransitions,
      createHref: this.createHref,
      getState: function getState() {
        return { location: _this2.location };
      },
      onMatch: function onMatch() {
        return _this2.props.onMatch();
      },
      subscribe: function subscribe(fn) {
        _this2.subscribers.push(fn);
        return function () {
          _this2.subscribers.splice(_this2.subscribers.indexOf(fn), 1);
        };
      }
    };
  };

  StaticRouter.prototype.createLocation = function createLocation(location) {
    var _props = this.props,
        parseQueryString = _props.parseQueryString,
        stringifyQuery = _props.stringifyQuery;

    return (0, _LocationUtils.createRouterLocation)(location, parseQueryString, stringifyQuery);
  };

  StaticRouter.prototype.render = function render() {
    var _this3 = this;

    var location = this.location;
    var _props2 = this.props,
        children = _props2.children,
        action = _props2.action;

    return _react2.default.createElement(
      _Match2.default,
      { pattern: '/' },
      function () {
        return typeof children === 'function' ? children({ action: action, location: location, router: _this3.getRouterContext() }) : _react2.default.Children.only(children);
      }
    );
  };

  return StaticRouter;
}(_react2.default.Component);

StaticRouter.defaultProps = {
  stringifyQuery: stringifyQuery,
  parseQueryString: _queryString.parse,
  createHref: function createHref(path) {
    return path;
  },
  onMatch: function onMatch() {}
};
StaticRouter.childContextTypes = {
  router: _react.PropTypes.object.isRequired
};


if (process.env.NODE_ENV !== 'production') {
  StaticRouter.propTypes = {
    children: _react.PropTypes.oneOfType([_react.PropTypes.node, _react.PropTypes.func]),

    history: _react.PropTypes.object,

    location: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.string]).isRequired,
    action: _react.PropTypes.string.isRequired,

    onPush: _react.PropTypes.func.isRequired,
    onReplace: _react.PropTypes.func.isRequired,
    onMatch: _react.PropTypes.func,
    blockTransitions: _react.PropTypes.func,

    stringifyQuery: _react.PropTypes.func,
    parseQueryString: _react.PropTypes.func,
    createHref: _react.PropTypes.func,

    basename: _react.PropTypes.string
  };
}

exports.default = StaticRouter;