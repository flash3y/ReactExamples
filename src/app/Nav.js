import React from 'react'
import Link from 'react-router/Link'

var Nav = React.createClass({
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">[React App examples]</li>
            <li>
              <Link to="/weather" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Weather</Link>
            </li>
            <li>
              <Link to="/timer" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</Link>
            </li>
            <li>
              <Link to="/todoSimple" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Todo</Link>
            </li>
            <li>
              <Link to="/todoRedux" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Todo redux</Link>
            </li>
            <li>
              <Link to="/todoFirebase" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Todo firebase</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li>
              <Link to="/about" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

Nav.contextTypes = {
  router: React.PropTypes.object
}

module.exports = Nav;
