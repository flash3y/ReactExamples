'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _matchPattern = require('./matchPattern');

var _matchPattern2 = _interopRequireDefault(_matchPattern);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Match = function (_React$Component) {
  _inherits(Match, _React$Component);

  function Match(props, context) {
    _classCallCheck(this, Match);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.matchCount = 0;
    _this.state = {
      match: null
    };


    var match = _this.getMatch();
    var parent = context.router.match;

    if (parent && match) parent.registerMatch();

    _this.state = { match: _this.getMatch() };
    return _this;
  }

  Match.prototype.getChildContext = function getChildContext() {
    var _this2 = this;

    var match = {
      registerMatch: function registerMatch() {
        _this2.matchCount++;
        _this2.context.router.onMatch();
      },

      unregisterMatch: function unregisterMatch() {
        _this2.matchCount--;
      },

      getState: function getState() {
        return {
          match: _this2.state.match,
          matchCount: _this2.matchCount
        };
      }
    };

    return { router: _extends({}, this.context.router, { match: match }) };
  };

  Match.prototype.componentDidMount = function componentDidMount() {
    var _this3 = this;

    this.unlisten = this.context.router.subscribe(function () {
      _this3.matchCount = 0;

      var parent = _this3.context.router.match;
      var match = _this3.getMatch();

      if (parent && match) parent.registerMatch();

      _this3.setState({
        match: _this3.getMatch()
      });
    });
  };

  Match.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unlisten();
  };

  Match.prototype.getMatch = function getMatch() {
    var router = this.context.router;
    var _props = this.props,
        pattern = _props.pattern,
        exactly = _props.exactly;

    var _router$getState = router.getState(),
        location = _router$getState.location;

    var parent = router.match && router.match.getState().match;
    return (0, _matchPattern2.default)(pattern, location, exactly, parent);
  };

  Match.prototype.render = function render() {
    var _props2 = this.props,
        children = _props2.children,
        render = _props2.render,
        Component = _props2.component,
        pattern = _props2.pattern;
    var match = this.state.match;

    var _context$router$getSt = this.context.router.getState(),
        location = _context$router$getSt.location;

    var props = _extends({}, match, { location: location, pattern: pattern });
    return children ? children(_extends({ matched: !!match }, props)) : match ? render ? render(props) : _react2.default.createElement(Component, props) : null;
  };

  return Match;
}(_react2.default.Component);

Match.defaultProps = {
  exactly: false
};
Match.contextTypes = {
  router: _react.PropTypes.object
};
Match.childContextTypes = {
  router: _react.PropTypes.object
};


if (process.env.NODE_ENV !== 'production') {
  Match.propTypes = {
    pattern: _react.PropTypes.string,
    exactly: _react.PropTypes.bool,
    component: _react.PropTypes.func,
    render: _react.PropTypes.func,
    children: _react.PropTypes.func
  };
}

// oh crap, what if mount/unmount w/o location change?  need to notify misses
// so they know to start or stop rendering geez...

exports.default = Match;