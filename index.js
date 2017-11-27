var React = require("react");
var ReactDOM = require("react-dom");
require ('./styles/app.less');

import App from './components/App'

ReactDOM.render(
    <App name ='Robin Screech' />,
    document.getElementById("app")
);


