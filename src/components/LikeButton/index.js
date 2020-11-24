import React, { Component } from 'react';

class LikeButton extends Component {
    state = { liked : false }

    handleLike = e => {
        e.stopPropagation();
        this.setState(prevState => ({ liked: !prevState.liked}))
    }

    render() {
        return (
            <span onClick={this.handleLike} style={{ color: this.state.liked ? 'blue' : 'grey' }}>✓</span>
        );
    }
}

export default LikeButton;