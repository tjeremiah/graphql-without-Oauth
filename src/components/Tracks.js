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
//     "url": "https://api.spotify.com/v1/users/taurel107%3Fsi%3DZLaiimgsR--jLzOYOYHVIg/playlists",
//     "raw_url": "https://api.spotify.com/v1/users/taurel107%3Fsi%3DZLaiimgsR--jLzOYOYHVIg/playlists",
//     "method": "post",
//     "headers": {
//         "Accept": "application/json",
//         "Content-Type": "application/json",
//         "Authorization": "Bearer BQCztTL1tnT89hIdh3-rF9E217Jit_w31TziY7ArUiHWuA3PStgZ5CpV4aZwUSPOfqpFqKP391_8oLn9i49xTTmcFPl0BN4YXTKnL9mgiyNcyKU_3TxyYI4Qtrx5VyqR6lTi62LjcUfDZL92mmXBGNsRAUIU_uJUcSiStcevtVFN"
//     },
//     "data": {
//         "{\"name\":\"New Playlist\",\"description\":\"New playlist description\",\"public\":false}": ""
//     }
// }


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