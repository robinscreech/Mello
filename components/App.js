import React from 'react';
import Meta from './Meta';
import ReactDOM from 'react-dom';

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
        const items = this.state.data;
        let inputValue = this.state.data[i].content;
        items[i].content = <textarea defaultValue={inputValue}></textarea>
        this.setState({items})
    }

  render() {
        const data = this.state.data;
        const cards = data.map((d) => <div className="card" id={d._id} key={d._id}><div className="card_title">{d.title}</div><div className="card_content">{d.content}</div><div className='card_edit'>edit</div></div>)

        return (
        <div className="container"> 
            {cards}
        </div>
    )
  }
}

