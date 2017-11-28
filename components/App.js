import React from 'react';
import Meta from './Meta'

export default class App extends React.Component {
  render() {
  return (
    <div class='card'> 
        <h1>Title: {this.props.name}</h1>
        <p>{this.props.content}</p>
        <Meta date='12/12/12' author='RScreech'/>
    </div>
    )
  }
}