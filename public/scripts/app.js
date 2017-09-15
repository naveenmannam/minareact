'use strict';

console.log("App.js is working fine.");

var template1 = React.createElement(
  'p',
  null,
  'Hello One from app.js'
);
var template2 = React.createElement(
  'p',
  null,
  'Hello Two from app.js'
);

var appRoot1 = document.getElementById('app1');
var appRoot2 = document.getElementById('app2');

ReactDOM.render(template1, appRoot1);
ReactDOM.render(template2, appRoot2);
