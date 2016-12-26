import React from 'react'
import Nav from './Nav'
import WeatherMain from './weather/Main'
import TimerMain from './timer/Main'
import TodoMain from './todo/Main'
import TodoRedux from './todoRedux/Main'
import TodoFirebase from './todoFirebase/Main'
import About from './About'

import Match from 'react-router/Match'

var Main = (props) => {
  return (
    <div>
      <Match pattern="/" component={Nav} />
      {/*<div className="row">*/}
        {/*<div className="columns medium-6 large-4 small-centered">*/}      
        <div>      
          <Match exactly pattern="/" component={About} />
          <Match exactly pattern="/about" component={About} />
          <Match pattern="/weather" component={WeatherMain} />
          <Match pattern="/timer" component={TimerMain} />
          <Match pattern="/todoSimple" component={TodoMain} />
          <Match pattern="/todoRedux" component={TodoRedux} />
          <Match pattern="/todoFirebase" component={TodoFirebase} />
        </div>
      {/*</div>*/}
    </div>
  );
}

export default Main;
