import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import { Header, Footer } from './layout/';
import { Home, About, Contact, Play } from './pages';

class App extends Component {
    render() {
      return (
        <>
              <Header />
              <h1>{process.env.REACT_APP_SECRET_GREETING}</h1>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />

                {/* This way for component lifecycle */}
                <Route path="/play" component={Play} />
               
              </Switch>
              <Footer />
          
        </>
      );
    }
  }

export default App;




