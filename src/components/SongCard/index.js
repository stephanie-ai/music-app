import React from 'react';
import { withRouter } from 'react-router-dom';

// functional component
const SongCard = props => {
    const song = props.song || props.getSong(props.match.params.id);

        const renderSong = () => {
        <>
        <strong>{ this.props.artistName }</strong>
        </>
    }

    return (
        <article className="song">
            { renderSong() }
        </article>
    )
}

export default withRouter(SongCard);