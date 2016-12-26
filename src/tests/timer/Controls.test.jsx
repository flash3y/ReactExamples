var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('../../app/timer/Controls');

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    var df = (status) => status 
    it('should render pause when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started" onStatusChange={df}/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);
    });

    it('should render start when paused', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused" onStatusChange={df}/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Start)');

      expect($pauseButton.length).toBe(1);
    });
  });
});
