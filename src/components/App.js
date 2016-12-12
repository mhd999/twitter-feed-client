// @flow

import React, { Component } from 'react';
import TweetsList from './TweetsList';
import { API_URL } from '../config';

class App extends Component {
    constructor() {
        super();
        this.state = {
            tweets: [],
        };
    }
    state : {
        tweets: any[]
    };

    componentDidMount() {
        fetch(`${API_URL}/dashboard`)
          .then(response => {
            response.json().then(data => {
            if (response.status !== 200) {
                throw new Error('success, no data');
            } else {
                this.setState({ tweets: data.tweets });
             }
            });
        });
    }

    render() {
        return(
            <div id='app'>
                {this.state.tweets.length > 0 && 
                    <TweetsList tweets={this.state.tweets} /> 
                }
            </div>
        );
    }
}

export default App;