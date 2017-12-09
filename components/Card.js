import React from 'react';
import ReactDOM from 'react-dom';

export default class Card extends React.Component {
   
  render() {

    let isEdit = this.props.isEdit;
    let isEditText = 'Edit';
    isEdit ? isEditText="Save" : isEditText="Edit"

        return ( 
        <div className="card" key='this.props.key'>
            <div className="card_title">{this.props.title}</div>
            <div className="card_content">{this.props.content}</div>
            <div className='card_edit'>
                {isEditText}
            </div>
        </div>
    )
  }
}

