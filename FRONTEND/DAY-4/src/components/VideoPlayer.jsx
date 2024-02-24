import React from 'react';

function VideoPlayer({ title, videoUrl }) {
    return (
        <div className="video-player">
            <h3>{title}</h3>
            <video controls>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default VideoPlayer;
