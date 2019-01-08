import React, { Component } from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import FooterContainer from './components/FooterComponents/FooterContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      counterShare: 0,
      counterLikes: 0
    }
  }
  render() {
    // console.log(this.state);
    return(
      <div className="app-container">
        <HeaderContainer />
        <CardContainer />
        <FooterContainer />
      </div>
    );
  }
};

export default App;
