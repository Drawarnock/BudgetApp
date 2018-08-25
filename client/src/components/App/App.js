import React, { Component } from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import SignUpScreen from '../SignUpScreen/SignUpScreen';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <div className="App">
          <Navbar />
          <Route exact path="/" render={() => <h2 className="title">Save Your money and your time</h2>} />
          <Route path="/signup" component={SignUpScreen} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
