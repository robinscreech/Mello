import React from 'react';
import Meta from './Meta';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "", //needs to be an array
            content: "" // needs to be an array
        }
    };//end constructor

    componentDidMount(){
        //This does the Fetch: set const func
        let cardTitle = "";
        let cardContent = "";
        const urlAddress = "http://localhost:3000"
        fetch(urlAddress)
            .then(response => {
                response.json().then(jsonRes => {
                    console.log(jsonRes);
                    cardTitle = jsonRes[0].title;
                    cardContent = jsonRes[0].content;
                    this.setState({title: cardTitle, content:cardContent})
                })
            })
    }

  render() {
  return (
    <div class='card'> 
        <h1>Title: {this.state.title}</h1>
        <p>{this.state.content}</p>
        <Meta date='12/12/12' author='RScreech'/>
    </div>
    )
  }
}