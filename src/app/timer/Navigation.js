var React = require('react');
var {Link} = require('react-router');

var Navigation = (props) => {
  var pathname = props.pathname ? props.pathname : '/';
  var pathnameE = pathname.length === 1 ? '' : pathname;
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            React Timer App
          </li>
          <li>
            <Link to={pathname} activeClassName="active-link">Timer</Link>
          </li>
          <li>
            <Link to={`${pathnameE}/countdown`} activeClassName="active-link">Countdown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="http://www.mead.io" target="_blank">Andrew Mead</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

module.exports = Navigation;
