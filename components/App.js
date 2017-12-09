import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
        this.handleEditCard = this.handleEditCard.bind(this)
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
            
        ReactDOM.findDOMNode(this).addEventListener("click", this.handleEditCard);
    }
    
    componentWillUnmount() {
        ReactDOM.findDOMNode(this).removeEventListener("click", this.handleEditCard);
    }

    handleEditCard(event){
        let i = 0;
        let cardElement = event.target.parentNode;
        while((cardElement = cardElement.previousSibling) != null)
        i++;
        const cardData = this.state;        
        let inputValue = cardData.data[i].content;
        cardData.data[i].content = <textarea defaultValue={inputValue}></textarea>; 
        cardData.data[i].isEdit = 1;
        this.setState({cardData})       
    }


    render() {      
        const data = this.state.data;
        const cards = data.map((d) => 
            <Card id={d._id} key={d._id} title={d.title} content={d.content} isEdit={d.isEdit}/>
        )
                
        return (
        <div className="container"> 
            {cards}
        </div>
    )
  }
}

