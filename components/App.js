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
        let currentCardId;
        let cardElement = event.target.parentNode;
        let cardData = this.state; 
        if(event.target.className=="card_edit"){
            while((cardElement = cardElement.previousSibling) != null)
            i++;

            let inputValue = cardData.data[i].content;

            cardData.data[i].content = <textarea id='content_area' defaultValue={inputValue} />; 
            cardData.data[i].title = <input type='text' id='title_area' defaultValue={cardData.data[i].title}/>
            
            cardData.data[i].isEdit == 0 ? cardData.data[i].isEdit = 1 : cardData.data[i].isEdit = 0;


            currentCardId = cardData.data[i]._id

            this.setState({cardData})

            /**
             * Setting call to server to update card
             * endpoint {/api/card/update:id}
             * id = {field id}
             */
            let newUpdateContent = document.getElementById('content_area').value;
            let newUpdatedTitle = document.getElementById('title_area').value;

            //Check if its in edit mode to replace edit fields
            if(cardData.data[i].isEdit == 0){
                cardData.data[i].title = newUpdatedTitle;
                cardData.data[i].content = newUpdateContent
                this.setState({cardData})
            }

            if (cardData.data[i].isEdit == 0){
                console.log('Will post some data now')
                fetch('http://localhost:3000/api/card/update/:id', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    id: currentCardId,
                    title: newUpdatedTitle,
                    content: newUpdateContent,
                  })
                })
            }
        }//end if classname = card_edit

        if(event.target.className == 'card_delete'){
             console.log('Will delete some data now', cardData.data[i]._id)
                fetch('http://localhost:3000/api/card/delete/:id', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    id: cardData.data[i]._id,
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

