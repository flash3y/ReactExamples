import React from 'react'
import Link from 'react-router/Link'

var Nav = React.createClass({
  onSearch: function (e) {
      e.preventDefault();

      var location = this.refs.search.value;
      var encodedLocation = encodeURIComponent(location);
      var wPathname = this.props.weatherPathname;

      if (location.length > 0) {
        this.refs.search.value = '';
        this.context.router.transitionTo(`${wPathname}?location=${encodedLocation}`);
        //window.location.hash = '/?location=' + encodedLocation;
      }
  },
  render: function () {
    var pathname = this.props.pathname ? this.props.pathname : '/';
    var pathnameE = pathname.length === 1 ? '' : pathname;

    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <Link to={pathname} activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</Link>
            </li>
            <li>
              <Link to={`${pathnameE}/about`} activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to={`${pathnameE}/examples`} activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search weather by city" ref="search"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

Nav.contextTypes = {
  router: React.PropTypes.object
}

module.exports = Nav;
