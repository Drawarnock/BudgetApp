import React, { Component } from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import SignUpScreen from '../SignUpScreen/SignUpScreen';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../../store/actions/actions';
import Landing from '../Landing/Landing';
import Dashboard from '../Dashboard/Dashboard';
import NewPlan from '../Plans/NewPlan';
import DetailedPlan from '../Plans/DetailedPlan';

class App extends Component {

  componentDidMount() {
    this.props.onFetchUser();
  }

  render() {
    return (
      <BrowserRouter>
       <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route path="/signup" component={SignUpScreen} />
          <Route exact path="/dashboard/" component={Dashboard} />
          <Route path="/dashboard/new-plan/" component={NewPlan}/>
          <Route path="/dashboard/full-plan/:id" component={DetailedPlan}/>
          <Footer />
        </div>
      </BrowserRouter>
      
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchUser: () => dispatch(fetchUser())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
