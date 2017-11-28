import React from 'react';
import Meta from './Meta';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    };//end constructor

    componentDidMount(){
        //This does the Fetch: set const func
        const urlAddress = "http://localhost:3000"
        fetch(urlAddress)
            .then(response => {
                response.json().then(jsonRes => {
                    this.setState({data:jsonRes})
                })
            })
    }

  render() {
        const data = this.state.data;
        const cards = data.map((d) => <div class="card" key={d._id}><div class="card_title">{d.title}</div><div class="card_content">{d.content}</div></div>)

        return (
        <div class="container"> 
            {cards}
        </div>
    )
  }
}