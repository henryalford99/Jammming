import React from 'react';
import Tracklist from './Tracklist';
import logo from './spotify_logo.png';

const Playlist = ({ name, tracks, onRemoveTrack, onTitleChange, onSave }) => {
    return (
        <div className="Playlist">
            <input name="playlistName" onChange={onTitleChange} value={name} placeholder="Playlist Title" type="text" />
            <button onClick={onSave}>
                <p>SAVE TO SPOTIFY</p>
                <img src={logo}/>
            </button>
            <Tracklist tracks={tracks} onRemoveTrack={onRemoveTrack} isRemovable={true}/>
        </div>
    )
};

export default Playlist;