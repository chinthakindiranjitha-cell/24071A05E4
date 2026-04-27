import React from 'react';

function Home() {
  return (
    <div className="page">
      <h1>Welcome to Online Learning Platform</h1>
      <p>Enhance your skills with our comprehensive courses.</p>
      <div className="home-content">
        <h2>Featured Courses</h2>
        <ul>
          <li>React Development</li>
          <li>JavaScript Fundamentals</li>
          <li>Web Design</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;