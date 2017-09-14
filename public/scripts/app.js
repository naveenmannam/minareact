console.log("App.js is working fine.");

// var template = <p>Hello from app.js</p>;

var template = React.createElement(
    "h1",
    null,
    "Hello from app.js"
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);