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
        const urlAddress = "http://localhost:3000/api/allcards"
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
        cardData.data[i].content = <textarea defaultValue={inputValue} />; 
        cardData.data[i].isEdit == 0 ? cardData.data[i].isEdit = 1 : cardData.data[i].isEdit = 0
        this.setState({cardData})

        /**
         * Setting call to server to update card
         * endpoint {/api/card/update:id}
         * id = {field id}
         */

        if (cardData.data[i].isEdit == 0){
            console.log('Will post some data now')
            fetch('http://localhost:3000/api/card/update:id', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                firstParam: 'yourValue',
                secondParam: 'yourOtherValue',
              })
            })
        }       
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

