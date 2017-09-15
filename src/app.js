console.log("App.js is working fine.");

var template1 = <p>Hello One from app.js</p>;
var template2 = <p>Hello Two from app.js</p>;



var appRoot1 = document.getElementById('app1');
var appRoot2 = document.getElementById('app2');

ReactDOM.render(template1, appRoot1);
ReactDOM.render(template2, appRoot2);
