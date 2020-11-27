import React from 'react';
import { withRouter } from 'react-router-dom';

// functional component
const SongCard = props => {
    const song = props.song || props.getSong(props.match.params.id);

        const renderSong = () => {
        <>
        <strong>{ song.artists.strArtist }</strong> { song.artists.strGenre }
        </>
    }

    return (
        <article className="song">
            { renderSong() }
        </article>
    )
}

export default withRouter(SongCard);