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

var MatchRoutes = function (_React$Component) {
  _inherits(MatchRoutes, _React$Component);

  function MatchRoutes(props, context) {
    _classCallCheck(this, MatchRoutes);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.state = _this.findMatch();
    return _this;
  }

  MatchRoutes.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.unlisten = this.context.router.subscribe(function () {
      var state = _this2.findMatch();
      if (state.match) _this2.context.router.onMatch();
      _this2.setState(state);
    });
  };

  MatchRoutes.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unlisten();
  };

  MatchRoutes.prototype.findMatch = function findMatch() {
    var routes = this.props.routes;

    var _context$router$match = this.context.router.match.getState(),
        parent = _context$router$match.match;

    var _context$router$getSt = this.context.router.getState(),
        location = _context$router$getSt.location;

    var match = null;
    var matchIndex = null;
    routes.some(function (route, index) {
      var pattern = route.pattern,
          exact = route.exact;

      matchIndex = index;
      match = (0, _matchPattern2.default)(pattern, location, !!exact, parent);
      return !!match;
    });

    return { match: match, matchIndex: matchIndex, location: location };
  };

  MatchRoutes.prototype.render = function render() {
    var _props = this.props,
        routes = _props.routes,
        renderMiss = _props.renderMiss,
        MissComponent = _props.missComponent;
    var _state = this.state,
        match = _state.match,
        matchIndex = _state.matchIndex,
        location = _state.location;


    if (match) {
      var _routes$matchIndex = routes[matchIndex],
          Component = _routes$matchIndex.component,
          pattern = _routes$matchIndex.pattern,
          render = _routes$matchIndex.render;

      var props = _extends({}, match, { location: location, pattern: pattern });
      return render ? render(props) : _react2.default.createElement(Component, props);
    } else {
      var _props2 = { location: location };
      return renderMiss ? renderMiss(_props2) : MissComponent ? _react2.default.createElement(MissComponent, _props2) : null;
    }
  };

  return MatchRoutes;
}(_react2.default.Component);

MatchRoutes.contextTypes = {
  router: _react.PropTypes.object
};


if (process.env.NODE_ENV !== 'production') {
  MatchRoutes.propTypes = {
    routes: _react.PropTypes.arrayOf(_react.PropTypes.shape({
      pattern: _react.PropTypes.string.isRequired,
      exact: _react.PropTypes.bool,
      render: _react.PropTypes.func,
      component: _react.PropTypes.func
    })).isRequired,
    renderMiss: _react.PropTypes.func,
    missComponent: _react.PropTypes.func
  };
}

exports.default = MatchRoutes;