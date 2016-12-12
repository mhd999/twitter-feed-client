// @flow

import React, { Component } from 'react';
import Tweet from './Tweet';
import { API_URL } from '../config';

const es = new EventSource(`${API_URL}/dashboard/feed`);

class TweetsList extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
            tweets: [],
        };
    }
    state : {
        tweets: any[]
    };
    
    componentDidMount() {
        let tweets = this.props.tweets;
        es.onmessage =  event => {
            tweets.push(event.data);
            this.setState({ tweets: tweets });
        } 
    }

    render () {
        let tweetList = [];
        
        tweetList = this.props.tweets.map((tweet, index) => (
            <Tweet key={index} data={JSON.parse(tweet)} />  
        ));
        return(
            <ul>
                {tweetList}
            </ul>
        );
    }
}

export default TweetsList;
