import React, { Component } from 'react';
import { SongCard } from '../../components';

class Play extends Component {
    
    state = {
        artist: {}
    };

    componentDidMount(){
        console.log('Did mount')
        this.fetchSongs('coldplay')
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

{/* <SongCard artistName={this.state.artistName} /> */}
// .then(res = this.setState({ res.data }));

// const renderSongs = this.state.artistName.map(i => <SongCard key={i.id} song={i} />)

// class Play extends Component {
//     state = {
//         plays: 0,
//         songs: [],
//         streaming: false
//     }

//     // lifecycle methods
//     componentDidMount() {
//         this.commenceTheStream();
//     }

//     componentDidUpdate() {
//         console.log('Playing a new song')
//     }

//     componentWillUnmount() {
//         this.stopPlaying();
//     }

//     // custom methods
//     fetchASong = () => {
//         fetch(`https://www.theaudiodb.com/api/v1/json/${process.env.REACT_APP_AUDIODB_API_KEY}/search.php?s={Artist name}`)
//         .then(r => r.json)
//         .then(this.addSong)
//         .catch(console.warn)
//     }

//     commenceTheStream = () => {
//         this.fetchASong();
//         const interval = setInterval(this.fetchASong, 2000);
//         this.setState({ interval, streaming: true });
//     }

//     addSong = data => {
//         const newSong = data[0]
//         this.state.songs.includes(newSong) ?
//             this.fetchASong()
//             : this.setState(prev => ({ songs: [...prev.songs, newSong], plays: ++prev.plays}))
//     }

//     stopPlaying = () => {
//         this.setState({ streaming: false })
//         clearInterval(this.state.interval);
//     }

//     render() {
//         return (
//             <>
//             <h2>{this.state.plays} Plays</h2>

//             <button onClick={this.state.streaming ? this.stopPlaying : this.commenceTheStream} >
//                 Play Song {this.state.streaming ? 'Stop' : 'Start'}    
//             </button> 

//             <section>
//                 { renderSongs }    
//             </section> 
//             </>
//         )
//     }

// }