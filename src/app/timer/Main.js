var React = require('react');
var Navigation = require('./Navigation');
var Timer = require('./Timer');
var Countdown = require('./Countdown');
import Match from 'react-router/Match'

var Main = (props) => {
  var pathname = props.pathname ? props.pathname : '/';
  var pathnameE = pathname.length === 1 ? '' : pathname;    
  return (
    <div>
      <Match pattern={pathname} component={Navigation}/>      
      <div className="row">
        <div className="column small-centered medium-6 large-4">
          <Match exactly pattern={pathname} component={Timer} />
          <Match pattern={`${pathnameE}/countdown`} component={Countdown} />
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
