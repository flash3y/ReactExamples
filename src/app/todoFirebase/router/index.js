import React from 'react';
import Match from 'react-router/Match'
import Redirect from 'react-router/Redirect'
import Miss from 'react-router/Miss'
import Link from 'react-router/Link'
import MatchRoutes from 'react-router/MatchRoutes'

import TodoApp from '../components/TodoApp';
import Login from '../components/Login';
//import firebase from '../firebase/';
import {connect} from 'react-redux';

//var requireLogin = (nextState, replace, next) => {
//  if (!firebase.auth().currentUser) {
//    replace('/');
//  }
//  next();
//};
//
//var redirectIfLoggedIn = (nextState, replace, next) => {
//  if (firebase.auth().currentUser) {
//    replace('/todos');
//  }
//
//  next();
//};

//export default (
//  <Router history={hashHistory}>
//    <Route path="/">
//      <Route path="todos" component={TodoApp} onEnter={requireLogin}/>
//      <IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
//    </Route>
//  </Router>
//);

//const MatchWhenAuthorized = ({ component: Component, redirectPath, authorized, ...rest }) => (
//  <Match {...rest} render={props => (
//    fakeAuth.isAuthenticated ? (
//      <Component {...props}/>
//    ) : (
//      <Redirect to={{
//        pathname: redirectPath,
//        state: { from: props.location }
//      }}/>
//    )
//  )}/>
//)

//var AuthorizedMatch = ({ component: Component, redirectPath, authorized, ...rest }) => {
//  console.log('AuthorizedMatch', redirectPath, authorized, rest);
//  return <Match {...rest} render={ (props) => {
//    return (
//    authorized ? (
//      <Component {...props}/>
//    ) : (
//      <Redirect to={{
//        pathname: redirectPath,
//        state: { from: props.location }
//      }}/>
//    )
//    )}
//  }/>
//}
//var UnauthorizedMatch = ({authorized, ...rest}) => <AuthorizedMatch {...rest} authorized={!authorized}/>
//
class Main extends React.Component {
  render() {
    //var authorized = this.context.store.getState().auth.uid ? true : false;
    var authorized = this.props.authorized;
    var pathname = this.props.pathname ? this.props.pathname : '/';
    var pathnameE = pathname.length === 1 ? '' : pathname;    
    //console.log('Router', this.props);
    //console.log('pathname', pathname);
    //console.log('store', this.context.store, this.context.store.getState());
    return (
      <div>
      <hr/>
      {authorized ? (
              <MatchRoutes
                renderMiss={(props) => <Link to={`${pathnameE}/todos`} activeClassName="active"
                                    activeStyle={{fontWeight: 'bold'}}>OOPS unknown route - Press for Todo app</Link>}
                routes={[
                  { pattern: pathname, exact: true, component: TodoApp },
                  { pattern: `${pathnameE}/todos`, component: TodoApp },
                ]}
                />
              /*<Match exactly pattern={pathname} component={TodoApp} />
              <Match exactly pattern={`${pathnameE}/todos`} component={TodoApp} />
              <Miss render={props => (
                              <Link to={`${pathnameE}/todos`} activeClassName="active"
                                    activeStyle={{fontWeight: 'bold'}}>OOPS unknown route - Press for Todo app</Link>
                  )} />
              <Miss render={props => (
                             <Redirect to={{
                                          pathname: `${pathnameE}/todos`,
                                          state: { from: props.location }
                                }}/>
                  )} />
              {/*<AuthorizedMatch exactly pattern={pathname} component={TodoApp} 
                               authorized={props.authorized} redirectPath={`${pathnameE}/todos`}/>
              <AuthorizedMatch exactly pattern={`${pathnameE}/todos`} component={TodoApp} 
                               authorized={props.authorized} redirectPath={`${pathnameE}/login`}/>
              <AuthorizedMatch exactly pattern={`${pathnameE}/login`} component={TodoApp} 
                               authorized={props.authorized} redirectPath={`${pathnameE}/login`}/>
              <Miss render={props => (
                      <UnauthorizedMatch pattern={pathname} component={Login} 
                                         authorized={props.authorized} redirectPath={`${pathnameE}/todos`}/>
                  )} />*/
      ) : ( 
              <MatchRoutes
                renderMiss={(props) => <Link to={`${pathnameE}/login`} activeClassName="active"
                                    activeStyle={{fontWeight: 'bold'}}>OOPS unknown route - Press for login</Link>}
                routes={[
                  { pattern: pathname, exact: true, component: Login },
                  { pattern: `${pathnameE}/login`, component: Login },
                ]}
                />
              /*<Match exactly pattern={pathname} component={Login} />
              <Match exactly pattern={`${pathnameE}/login`} component={Login} />
              <Miss render={props => (
                              <Link to={`${pathnameE}/login`} activeClassName="active"
                                    activeStyle={{fontWeight: 'bold'}}>OOPS unknown route - Press for login</Link>
                  )} />
              <Miss render={props => (
                             <Redirect to={{
                                          pathname: `${pathnameE}/login`,
                                          state: { from: props.location }
                                }}/>
                  )} />
              <UnauthorizedMatch exactly pattern={pathname} component={Login} 
                               authorized={props.authorized} redirectPath={`${pathnameE}/todos`}/>
              <UnauthorizedMatch exactly pattern={`${pathnameE}/todos`} component={Login} 
                               authorized={props.authorized} redirectPath={`${pathnameE}/login`}/>
              <UnauthorizedMatch exactly pattern={`${pathnameE}/todos`} component={Login} 
                               authorized={props.authorized} redirectPath={`${pathnameE}/login`}/>
              <Miss render={props => (
                      <UnauthorizedMatch pattern={pathname} component={Login} 
                                         authorized={props.authorized} redirectPath={`${pathnameE}/todos`}/>
                  )} />*/
      )}
    </div>
    );
  }
}

Main.contextTypes = {
  store: React.PropTypes.object.isRequired
};

//export default Main
export default connect(
  (state) => {
    return {
      authorized: state.auth.uid ? true : false,
    }
  }
)(Main);
