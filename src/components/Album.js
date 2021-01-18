import React from 'react'
import { ArtistPopular } from './ArtistPopular'

export function Album({item}) {
    return (
        <div classname="item_container">
            <div className="item_name">
                 <p>{item.name}</p> 
            </div>
            <div className="item_urls">
                 <a href={item.external_urls.spotify}> Add to Playlist </a>
            </div>
            <br />
            <div>
            <ArtistPopular artists={item.artists} />
            </div>
        </div>
    )
}