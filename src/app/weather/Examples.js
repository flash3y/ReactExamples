var React = require('react');
var {Link} = require('react-router');

var Examples = ({weatherPathname}) => {
  var wPathname = weatherPathname 
  return (
    <div>
      <h1 className="text-center page-title-weather">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to={`${wPathname}?location=Philadelphia`}>Philadelphia, PA</Link>
        </li>
        <li>
          <Link to={`${wPathname}?location=Rio`}>Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
