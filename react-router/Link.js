'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link(props, context) {
    _classCallCheck(this, Link);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _initialiseProps.call(_this);

    _this.state = {
      isActive: _this.getIsActive()
    };
    return _this;
  }

  Link.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.unlisten = this.context.router.subscribe(function () {
      _this2.setState({
        isActive: _this2.getIsActive()
      });
    });
  };

  Link.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unlisten();
  };

  Link.prototype.getIsActive = function getIsActive() {
    var _props = this.props,
        to = _props.to,
        isActive = _props.isActive;


    return isActive(this.context.router.getState().location, createLocationDescriptor(to), this.props);
  };

  Link.prototype.render = function render() {
    var isActive = this.state.isActive;

    var _props2 = this.props,
        to = _props2.to,
        style = _props2.style,
        activeStyle = _props2.activeStyle,
        className = _props2.className,
        activeClassName = _props2.activeClassName,
        activeOnlyWhenExact = _props2.activeOnlyWhenExact,
        replace = _props2.replace,
        _ = _props2.isActive,
        rest = _objectWithoutProperties(_props2, ['to', 'style', 'activeStyle', 'className', 'activeClassName', 'activeOnlyWhenExact', 'replace', 'isActive']);

    return _react2.default.createElement('a', _extends({}, rest, {
      href: this.context.router.createHref(to),
      onClick: this.handleClick,
      style: isActive ? _extends({}, style, activeStyle) : style,
      className: isActive ? [className, activeClassName].join(' ').trim() : className
    }));
  };

  return Link;
}(_react2.default.Component);

Link.defaultProps = {
  replace: false,
  activeOnlyWhenExact: false,
  className: '',
  activeClassName: '',
  style: {},
  activeStyle: {},
  isActive: function isActive(location, to, props) {
    return pathIsActive(to.pathname, location.pathname, props.activeOnlyWhenExact) && queryIsActive(to.query, location.query);
  }
};
Link.contextTypes = {
  router: _react.PropTypes.object.isRequired
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.handleClick = function (event) {
    if (_this3.props.onClick) _this3.props.onClick(event);

    if (!event.defaultPrevented && // onClick prevented default
    !_this3.props.target && // let browser handle "target=_blank" etc.
    !isModifiedEvent(event) && isLeftClickEvent(event)) {
      event.preventDefault();

      var router = _this3.context.router;
      var _props3 = _this3.props,
          to = _props3.to,
          replace = _props3.replace;


      if (replace) {
        router.replaceWith(to);
      } else {
        router.transitionTo(to);
      }
    }
  };
};

if (process.env.NODE_ENV !== 'production') {
  Link.propTypes = {
    to: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]).isRequired,
    replace: _react.PropTypes.bool,
    activeStyle: _react.PropTypes.object,
    activeClassName: _react.PropTypes.string,
    activeOnlyWhenExact: _react.PropTypes.bool,
    isActive: _react.PropTypes.func,
    children: _react.PropTypes.node,

    // props we have to deal with but aren't necessarily
    // part of the Link API
    style: _react.PropTypes.object,
    className: _react.PropTypes.string,
    target: _react.PropTypes.string,
    onClick: _react.PropTypes.func
  };
}

var createLocationDescriptor = function createLocationDescriptor(to) {
  return (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' ? to : { pathname: to };
};

var pathIsActive = function pathIsActive(to, pathname, activeOnlyWhenExact) {
  return activeOnlyWhenExact ? pathname === to : pathname.indexOf(to) === 0;
};

var queryIsActive = function queryIsActive(query, activeQuery) {
  if (activeQuery == null) return query == null;

  if (query == null) return true;

  return deepEqual(query, activeQuery);
};

var isLeftClickEvent = function isLeftClickEvent(event) {
  return event.button === 0;
};

var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

// use looseEqual from history/LocationUtils
var deepEqual = function deepEqual(a, b) {
  if (a == b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return deepEqual(item, b[index]);
    });
  }

  if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') {
    for (var p in a) {
      if (!Object.prototype.hasOwnProperty.call(a, p)) {
        continue;
      }

      if (a[p] === undefined) {
        if (b[p] !== undefined) {
          return false;
        }
      } else if (!Object.prototype.hasOwnProperty.call(b, p)) {
        return false;
      } else if (!deepEqual(a[p], b[p])) {
        return false;
      }
    }

    return true;
  }

  return String(a) === String(b);
};

exports.default = Link;