import React, { Component } from 'react';
import Routes from './components/Routes';
import Header from './components/Header';

class App extends Component {
  state = {
    userName: null
  };

  onLogIn = userName => {
    this.setState({
      userName
    });
  };

  render() {
    const { userName } = this.state;
    return (
      <div>
        <Header userName={userName} />
        <Routes onLogIn={this.onLogIn} />
      </div>
    );
  }
}

export default App;
