import React, {Component } from 'react';
import Album from './Tracks'
import SpotifyWebApi from 'spotify-web-api-node'


class CreatePlayList extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        "playlistName": "New Playlist",
        "playlistTracks": []
      }
      this.handleNameChange = this.handleNameChange.bind(this) 
      this.handleKeyPress = this.handleKeyPress.bind(this)
      this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        event.target.setSelectionRange(0, event.target.value.length)
    }

    handleKeyPress(event) {
        if (event.key == 'Enter' && event.target.value) {
            this.props.onSave();
        }
    }

    handleNameChange(event) {
        this.props.onNameChange(event.target.value)
    }

    addTrack(track) {
        let tracks = this.state.playlistTracks;
        if (!tracks.find(trackIndex => trackIndex.id === track.id)) {
          tracks.push(track);
          this.setState({playlistTracks: tracks});
        }
    }

    savePlaylist() {
        let tracks = this.state.playlistTracks;
        if(tracks.length && this.state.playlistName) {
          let trackURIs = tracks.map(trackIndex => trackIndex.uri);
          SpotifyWebApi.savePlaylist(this.state.playlistName, trackURIs).then(() => {
            this.setState({
              playlistName: 'New Playlist',
              playlistTracks: []
            });
            document.getElementById('Playlist-name').value = this.state.playlistName;
          });
        }
      }

    render() {
        return (
            <div className="PlayList" >
              <input id="Playlist" placeholder="Enter a Playlist name" defaultValue={this.props.playlistName} onChange={this.handleNameChange} onKeyPress={this.handleKeyPress} onClick={this.handleClick} />  
              <Album addTrack={this.addTrack}/>
              <a className="Playlist-save" onClick={this.props.onSave}> Save to Spotify </a>
            </div>
        )
    }
}

export default CreatePlayList;


