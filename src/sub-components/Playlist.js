import React from 'react';
import Tracklist from './Tracklist';
import logo from './spotify_logo.png';

const Playlist = ({ name, tracks, onRemoveTrack, onTitleChange, onSave, onSuccess, handlePlayPause, currentPlayingTrack }) => {
    return (
        <div className="Playlist">
            <input name="playlistName" onChange={onTitleChange} value={name} placeholder="New Playlist Title" type="text" />
            <button onClick={onSave}>
                <p>SAVE TO SPOTIFY</p>
                <img src={logo} alt="Spotify Logo"/>
            </button>
            {onSuccess && (
                <p className="successMessage">Playlist has been successfully saved!</p>
            )}
            <Tracklist 
                tracks={tracks} 
                onRemoveTrack={onRemoveTrack} 
                isRemovable={true}
                handlePlayPause={handlePlayPause}
                currentPlayingTrack={currentPlayingTrack}
            />
        </div>
    )
};

export default Playlist;
