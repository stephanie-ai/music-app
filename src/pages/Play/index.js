import React, { Component } from 'react';
import { SongCard } from '../../components';

class Play extends Component {

    state = {
        songs: [],
        plays: 0
    };

    componentDidMount(){
        console.log('Did mount')
        this.fetchSongs()
    }

    componentDidUpdate(){
        console.log('Did update')
    }
    
    fetchSongs = () => {
        console.log('Fetching songs')
        fetch(`https://www.theaudiodb.com/api/v1/json/${process.env.REACT_APP_AUDIODB_API_KEY}/search.php?s=${artistName}`)
            .then(resp => resp.json())
            .then(data => this.setState({ allSongs: data }))
    }

    render() {
        console.log('Rendering')
        const renderSongs = this.state.allSongs.map(i => <SongCard key={i.id} song={i} />)

        return (
            <>
            <h2>Play Songs</h2>
            <section>
                { renderSongs }
            </section>
            </>
        )
    }
};

//https://www.theaudiodb.com/api/v1/json/${process.env.REACT_APP_AUDIODB_API_KEY}/search.php?s=coldplay
// https://www.theaudiodb.com/api/v1/json/${process.env.REACT_APP_AUDIODB_API_KEY}/search.php?s=${artistName}
export default Play;

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