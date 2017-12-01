import React from 'react';
import ReactDOM from 'react-dom';

export default class Card extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            save: 'Edit'
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
        this.setState({cardData, save:'Save'})       
    }

  render() {
        // const data = this.state.data;
        // const cards = data.map((d) => 
        //     <div className="card" id={d._id} key={d._id}>
        //         <div className="card_title">{d.title}</div>
        //         <div className="card_content">{d.content}</div>
        //         <div className='card_edit'>{this.state.save}</div>
        //     </div>
        // )
        
        const data = this.state.data;
        console.table(data)

       // console.log(typeof data)
        return (
        <div className="container"> 
           <div className="card" key=''>
                <div className="card_title">title</div>
                <div className="card_content">some card content</div>
                <div className='card_edit'>EDIT</div>
            </div>
        </div>
    )
  }
}

