import React, { Component } from 'react';
import './App.css';
import { Intro, SongsList, Form } from './components';

class App extends Component {
    render() {
      return (
          <main>
              <Intro />
              <Form />
              <SongsList />
          </main>
      );
    }
  }

export default App;




