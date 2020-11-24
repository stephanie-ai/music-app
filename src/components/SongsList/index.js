import React, { Component } from 'react';
import LikeButton from '../LikeButton';
import LikeCount from '../LikeCount';

class SongsList extends Component {
    state = {
        songs: [
            {
                name: 'D.A.N.C.E',
                release: 2007,
                album: 'Cross',
                art: 'http://1.bp.blogspot.com/_4yhITgIIZ5U/SV5ffR17Z9I/AAAAAAAAE7w/nCJhRLPOSi8/s400/justice_cross_cover.jpg',
            },
            {
                name: 'Genesis',
                release: 2007,
                album: 'Cross',
                art: 'http://1.bp.blogspot.com/_4yhITgIIZ5U/SV5ffR17Z9I/AAAAAAAAE7w/nCJhRLPOSi8/s400/justice_cross_cover.jpg',
            },
            {
                name: 'Stress',
                release: 2007,
                album: 'Cross',
                art: 'http://1.bp.blogspot.com/_4yhITgIIZ5U/SV5ffR17Z9I/AAAAAAAAE7w/nCJhRLPOSi8/s400/justice_cross_cover.jpg',
            },
            {
                name: 'Phantom, Pt II',
                release: 2007,
                album: 'Cross',
                art: 'http://1.bp.blogspot.com/_4yhITgIIZ5U/SV5ffR17Z9I/AAAAAAAAE7w/nCJhRLPOSi8/s400/justice_cross_cover.jpg',
            },
        ],
    };
    
    handleSongSelect = songId => {
        const chosenSong = this.state.songs.find(st => st.id === songId);
        this.setState({ chosenSong });
      };

    render() {
        return (
            <div className="songs-chart">
                {this.state.songs.map((songs) => {
                    return (
                        <>
                        <h3>{songs.name}</h3>
                        <LikeButton />
                        <LikeCount />
                        <h4>{songs.release}</h4>
                        <h4>{songs.album}</h4>
                        <img className="album-cover" src={songs.art} />
                        </>
                    )
                })}
            </div>
        )
    }
}

export default SongsList;