import React, { Component } from 'react';
import { SongCard } from '../../components';

class Play extends Component {
    
    state = {
        artist: {}
    };

    componentDidMount(){
        console.log('Did mount')
        this.fetchSongs('justice')
    }

    componentDidUpdate(){
        console.log('Did update')
    }
    

    fetchSongs = (artistName) => {
        console.log('Fetching songs');
        // let artistName= "coldplay";
       fetch(`https://www.theaudiodb.com/api/v1/json/${process.env.REACT_APP_AUDIODB_API_KEY}/search.php?s=${artistName}`)
            .then(resp => resp.json())
            .then(data => this.setState({ artist: data.artists[0] }))
    }

    render() {
        console.log('Rendering')
        // const renderSongs = this.state.artistName.map((artist, idx) => <div key={idx}> <SongCard /> {artist.idx} </div>)

        return (
            <>
            <h2>Play Songs</h2>
            {/* <p>{this.state.artistName}</p> */}
            <section>

                {this.state.artist.strArtist} 
            </section>
            <section>
                {this.state.artist.strBiographyEN}
                {/* { this.fetchSongs() } */}
                {/* {renderSongs} */}
                {/* {
                    this.state.artistName.map(artist => {
                        <div key={artist.id}></div>
                    })
                } */}
            </section>
            </>
        )
    }
};

//https://www.theaudiodb.com/api/v1/json/${process.env.REACT_APP_AUDIODB_API_KEY}/search.php?s=coldplay
// https://www.theaudiodb.com/api/v1/json/${process.env.REACT_APP_AUDIODB_API_KEY}/search.php?s=${artistName}
export default Play;
