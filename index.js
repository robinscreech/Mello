var React = require("react");
var ReactDOM = require("react-dom");
require ('./styles/app.less');

import App from './components/App'


//This does the Fetch:
let cardTitle = "";
let cardContent = "";
const urlAddress = "http://localhost:3000"
fetch(urlAddress)
    .then(response => {
        response.json().then(jsonRes => {
            console.log(jsonRes);
            console.info(jsonRes[0].title)
            cardTitle = jsonRes[0].title;
            cardContent = jsonRes[0].content;
            
            ReactDOM.render(
                <App name = {cardTitle} content = {cardContent}/>,
                document.getElementById("app")
            );
        })
    })
    



