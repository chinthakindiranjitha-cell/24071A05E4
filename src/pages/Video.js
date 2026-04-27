import React from 'react';

function Video() {
  return (
    <div className="page video-page">
      <h1>Video Lessons</h1>
      <div className="video-content">
        <div className="video-player">
          <h2>Introduction to React</h2>
          <video controls className="video-element">
            <source src="https://www.youtube.com/watch?v=TtPXvEcE11E" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="video-description">
            Watch this introductory video to get started with React development. Learn the basics of components, JSX, and state management.
          </p>
        </div>
        <div className="video-sidebar">
          <h3>Course Playlist</h3>
          <ul className="playlist">
            <li className="playlist-item active">
              <span className="play-icon">▶</span>
              Introduction to React
            </li>
            <li className="playlist-item">
              <span className="play-icon">▶</span>
              Components and Props
            </li>
            <li className="playlist-item">
              <span className="play-icon">▶</span>
              State and Lifecycle
            </li>
            <li className="playlist-item">
              <span className="play-icon">▶</span>
              Handling Events
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Video;