import React, { Component } from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = { message: ""}
  }
  componentDidMount() {
    this.receiveMessage();
  }

  receiveMessage = () => {
    fetch('/messageservice')
    .then(res => res.json())
    .then(message => this.setState({ message }));
  }

  render() {
    return (
      <div className="App">
        <div>
            <h1>Time in Server </h1>
            <div> {this.state.message} </div>
        </div>
      </div>
      
      );
  }
}
export default App;
