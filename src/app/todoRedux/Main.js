var React = require('react');
var {Provider} = require('react-redux');

var TodoApp = require('./TodoApp');
var actions = require('./actions/actions');
var store = require('./store/configureStore').configure();
var TodoAPI = require('./api/TodoAPI');

store.subscribe(() => {
  var state = store.getState();
  //console.log('New state', state);
  TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

var todoRedux = () => {
  return (
  <Provider store={store}>
    <TodoApp/>
  </Provider>
  )
}

export default todoRedux
