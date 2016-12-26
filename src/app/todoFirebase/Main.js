var React = require('react');
var {Provider} = require('react-redux');

var actions = require('./actions/actions');
var store = require('./store/configureStore').configure();
import firebase from './firebase/';
import Main from './router/';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(actions.login(user.uid));
    store.dispatch(actions.startAddTodos());
    //hashHistory.push('/todos');
  } else {
    store.dispatch(actions.logout());
    //hashHistory.push('/');
  }
});

var todoFirebase = (props) => {
  console.log('todoProps', props)
  return (
  <Provider store={store}>
    <Main pathname={props.pathname} location={props.location}/>
  </Provider>
  )
}

export default todoFirebase
