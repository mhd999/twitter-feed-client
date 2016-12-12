// @flow

import React from 'react';
import styler from 'react-styling';

const style = styler `
    Tweet
        background: gray
        margin: 5px
`;
const Tweet = (props: any) => {
    const tweet = props.data;
    return (
        <li key={tweet.id} style={style.Tweet}>
            <span> {tweet.text} </span>
        </li>
    );
}

export default Tweet;