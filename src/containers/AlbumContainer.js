import React from 'react'
import { useQuery , gql } from '@apollo/client'
import { Album, Tracks } from '../components/Tracks'

const ALL_ALBUMS = gql`
  query album_tracks {
   album_tracks {
      items {
       id
       uri
       name
       external_urls {
        spotify
      }
      artists {
        id  
        name
        album
        external_urls {
            spotify
        }
      }
    }
   }
  }
 `;

export default function AlbumContainer () {
    const { loading, error, data } = useQuery(ALL_ALBUMS)
    console.log("the items are")
    if (loading ) return <p>Loading Albums...</p>

    if (error) return <p>Something went wrong</p>
    return (
        <div className="container">
         {data.album_tracks.items && data.album_tracks.items.map(item => <Tracks key={item.id} item={item}  /> )}
        </div>
    )
}

