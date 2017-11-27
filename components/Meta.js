import React from 'react';

export default class Meta extends React.Component {
    render(){
        return(
            <div class='meta'>
                <span class='date'>{this.props.date}</span>
                &nbsp; - &nbsp;
                <span class='author'>{this.props.author}</span>
            </div>
        )
    }
}