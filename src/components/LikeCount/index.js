import React, { Component } from 'react';

class LikeCount extends Component {
    state = {
        likeCount: 0
    };

    increaseLikeCount = () => this.setState(prevState => ({ likeCount: ++prevState.likeCount}));

    render(){
        return (
            <>
            <p>There have been {this.state.likeCount} like(s)!</p>

            <button onClick={this.increaseLikeCount}>I liked this!</button>
            </>
        )
    }
}

export default LikeCount;