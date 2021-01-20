import React from 'react'
import { ArtistPopular } from './ArtistPopular'
// const SpotifyApi = require('spotify-web-api-node');

// Create a private playlist
// SpotifyApi.createPlaylist('My playlist', { 'description': 'My description', 'public': true })
//   .then(function(data) {
//     console.log('Created playlist!');
//   }, function(err) {
//     console.log('Something went wrong!', err);
//   });
// {



// export function Album({item}) {
//     return (
//         <div classname="item_container">
//             <div className="item_name">
//                  <p>{item.name}</p> 
//             </div>
//             <div className="item_urls">
//                  <a href={item.external_urls.spotify}> Add to Playlist </a>
//             </div>
//             <br />
//             <div>
//             <ArtistPopular artists={item.artists} />
//             </div>
//         </div>
//     )
// }

export function Tracks({item}) {
    return (
        <div className="item_container">
            <div className="track_name">
              <p>{item.name}</p> 
            </div>
            <div className="track_id">
                {/* {item.id} place in an array */}
            </div>
            <div className="item_external_urls">
            <a href={item.external_urls.spotify}>Add to Playlist</a>
            </div>
            <br />
            <div>
                
            {/* <ArtistPopular artists={item.artists} /> */}
            </div>
            <div>

            </div>
        </div>
    )
}
