import React from 'react'
import Nav from './Nav'
import Weather from './Weather'
import About from './About'
import Examples from './Examples'

import Match from 'react-router/Match'

var Main = (props) => {
  var pathname = props.pathname ? props.pathname : '/';
  var pathnameE = pathname.length === 1 ? '' : pathname;


  return (
    <div>
    {/*<Match pattern={pathname ? pathname : '/' } component={Nav} />*/}
      <Match pattern={pathname} render={(props)=> {
            return <Nav {...props} weatherPathname={pathname}/>
      }}/>
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">      
          <Match exactly pattern={pathname} component={Weather} />
          <Match pattern={`${pathnameE}/about`} component={About} />
          {/*<Match pattern={`${pathname}/examples`} component={Examples}/>*/}
          <Match pattern={`${pathnameE}/examples`} render={(props)=> {
            return <Examples {...props} weatherPathname={pathname}/>
          }}/>
        </div>
      </div>          
    </div>
  );
}

export default Main;
