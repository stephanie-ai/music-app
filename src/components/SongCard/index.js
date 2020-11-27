import React from 'react';
import { withRouter } from 'react-router-dom';

// functional component
const SongCard = props => {
    const song = props.song || props.getSong(props.match.params.id);

    const renderUnknown = <p>I'm sorry we don't have a {props.match.params.id} here.</p>

    const renderSong = () => {
        <>
        <strong>{ song.artists.strArtist }</strong> { song.artists.strGenre }
        </>
    }

    return (
        <article className="song">
            { song ? renderSong() : renderUnknown }
        </article>
    )
}

export default withRouter(SongCard);