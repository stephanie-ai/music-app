import React, { Component } from 'react';
import { Intro, SongsList, Form } from '../../components';

class Home extends Component {
    render() {

        return  (
            <>
            <h1>Welcome</h1>
            <Intro />
            <Form />
            <SongsList />
            </>
        );
    }
}

export default Home;