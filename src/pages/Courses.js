import React from 'react';
import { useNavigate } from 'react-router-dom';

function Courses() {
  const navigate = useNavigate();

  const courses = [
    { id: 1, title: 'React Development', description: 'Learn React from scratch.' },
    { id: 2, title: 'JavaScript Fundamentals', description: 'Master JavaScript basics.' },
    { id: 3, title: 'Web Design', description: 'Create beautiful websites.' },
  ];

  const handleEnroll = () => {
    alert('Enrolled!');
    navigate('/video');
  };

  return (
    <div className="page">
      <h1>Courses</h1>
      <div className="courses-list">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button onClick={handleEnroll}>Enroll</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;