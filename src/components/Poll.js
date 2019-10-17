import React, { Component } from 'react';
import openSocket from 'socket.io-client';

class Poll extends Component {
  constructor(props) {
    super(props);
    this.socket = openSocket('http://localhost:5000');

    this.socket.on('connected', data => {
      console.log(data);
    });
  
    this.socket.on('poll', data => {
      console.log(data);
    });
  };

  handleClick = () => {
    this.socket.emit('answer', 'a');
  }

  componentWillUnmount() {
    this.socket.close();
  }

  render() {
    return (
      <>
        <h1>Polls</h1>
        <button onClick={this.handleClick}>A</button>
      </>
    );
  }
};

export default Poll;