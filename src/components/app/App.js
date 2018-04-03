import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './app.css';
import Loading from './errorloading/Loading';
import Header from './header/Header';
import Footer from './footer/Footer';
import Work from '../work/Work';
import Info from '../info/Info';


export default class App extends Component {

  render() {
    
    return (
      <div className="app">
        
        <Router>
          <div>
            <Header/>
            <main role="main" id="main">
              <Loading/>
              <Switch>
                <Route exact path="/" component={Work}/>
                <Route path="/info" component={Info}/>
                {/* <Route path="/movies/:id" render={({ match }) => <MovieDetail imdbID={match.params.id}/>}/> */}
                <Redirect to="/"/>
              </Switch>
            </main>
          </div>
        </Router>

        <Footer/>
      </div>
    );
  }
}