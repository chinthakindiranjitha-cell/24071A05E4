import React from 'react';

function Progress() {
  const progressData = [
    { course: 'React Development', progress: 75 },
    { course: 'JavaScript Fundamentals', progress: 50 },
    { course: 'Web Design', progress: 90 },
  ];

  return (
    <div className="page">
      <h1>Your Progress</h1>
      <div className="progress-list">
        {progressData.map((item, index) => (
          <div key={index} className="progress-item">
            <h3>{item.course}</h3>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${item.progress}%` }}></div>
            </div>
            <span>{item.progress}% complete</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Progress;