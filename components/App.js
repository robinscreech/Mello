import React from 'react';
import Meta from './Meta'

export default class App extends React.Component {
  render() {
  return (
    <div class='card'> 
        <h1>Card Title {this.props.name}</h1>
        <p>This is some card content which will be added to MongoDB one day</p>
        <Meta date='12/12/12' author='RScreech'/>
    </div>
    )
  }
}

