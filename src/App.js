/*global $*/
import React from 'react'
import Router from 'react-router/BrowserRouter'
import Main from './app/Main'
//import Main from './app/weather/Main'
//import Main from './app/timer/Main'
//import Main from './app/todo/Main'
//import Main from './app/todoRedux/Main'
//import Main from './app/todoFirebase/Main'

//Foundation Settings
var $ = window.$ = window.jQuery = require('jquery');
require('foundation-sites/dist/js/foundation.min.js');
$(document).foundation();
//import './styles/appStyle.scss'
//if scss errors and no error msgs use "npm start scss"
import './appStyle.css' 

export default (props) => (
  <Router>
      <Main/>
  </Router>
);

