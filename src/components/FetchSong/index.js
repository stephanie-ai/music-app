// import React from 'react';

// class FetchSong extends React.Component {
//     state = {
//         loading: true,
//         song: null
//     };

//     async componentDidMount() {
//         const url = `https://www.theaudiodb.com/api/v1/json/${process.env.REACT_APP_AUDIODB_API_KEY}/search.php?s=${artistName}`;
//         const response = await fetch(url);
//         const data = await response.json();
//         this.setState({ song: data.results[0], loading: false });
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.loading || !this.state.song ? (
//                     <div>loading...</div>
//                 ) : (
//                     <div>
//                         <div>{this.state.song}</div>
//                     </div>
//                 )}
//             </div>
//         );
//     }
// }

// export default FetchSong;