// src/pages/Academics.jsx
import React from "react";
import "../dashboard.css";

export default function Academy() {
  return (
    <div className="acad-page">

      {/* Header */}
      <div className="acad-header">
        <div>
          <h2 className="acad-title">Welcome back, Diya 👋🏻</h2>
          <p className="acad-sub">Your progress this week is awesome. Keep going and earn more reward points!</p>
        </div>
        <div className="acad-score-box">
          <div className="score-card">
            <span>Hours Spent</span>
            <h3>34h</h3>
          </div>
          <div className="score-card">
            <span>Test Results</span>
            <h3>82%</h3>
          </div>
          <div className="score-card">
            <span>Course Completed</span>
            <h3>14</h3>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="acad-main-grid">

        {/* LEFT SECTION */}
        <div className="acad-left">

          {/* Weekly Report */}
          <div className="acad-card gradient1">
            <h3>Time Spending</h3>
            <p className="acad-label">Weekly Report</p>
            <h2 className="big-number">231h 14m</h2>
            <span className="positive-tag">+18.4%</span>
          </div>

          {/* Interests */}
          <div className="acad-card">
            <h3>Topics you are interested in</h3>

            <div className="interest-list">
              <div className="interest-item"><span>UI Design</span><strong>35%</strong></div>
              <div className="interest-item"><span>UX Design</span><strong>20%</strong></div>
              <div className="interest-item"><span>Music</span><strong>14%</strong></div>
              <div className="interest-item"><span>Animation</span><strong>12%</strong></div>
              <div className="interest-item"><span>Vue</span><strong>10%</strong></div>
              <div className="interest-item"><span>SEO</span><strong>9%</strong></div>
            </div>
          </div>

          {/* Popular Instructors */}
          <div className="acad-card">
            <h3>Popular Instructors</h3>

            <div className="instructor-grid">

              <div className="instructor-card">
                <div className="inst-avatar">JS</div>
                <p className="inst-name">Jordan Stevenson</p>
                <span className="inst-course">Business Intelligence</span>
                <strong className="inst-count">33 Courses</strong>
              </div>

              <div className="instructor-card">
                <div className="inst-avatar green">BE</div>
                <p className="inst-name">Bentlee Emblin</p>
                <span className="inst-course">Digital Marketing</span>
                <strong className="inst-count">52 Courses</strong>
              </div>

              <div className="instructor-card">
                <div className="inst-avatar orange">BR</div>
                <p className="inst-name">Benedetto Rossiter</p>
                <span className="inst-course">UI/UX Design</span>
                <strong className="inst-count">12 Courses</strong>
              </div>

              <div className="instructor-card">
                <div className="inst-avatar purple">BK</div>
                <p className="inst-name">Beverlie Krabbe</p>
                <span className="inst-course">Vue</span>
                <strong className="inst-count">8 Courses</strong>
              </div>

            </div>
          </div>

        </div>

        {/* RIGHT SECTION */}
        <div className="acad-right">

          {/* Top Courses */}
          <div className="acad-card">
            <h3>Top Courses</h3>

            <div className="course-item">
              <div>
                <p className="course-title">Videography Basic Design Course</p>
                <span className="course-views">1.2k Views</span>
              </div>
            </div>

            <div className="course-item">
              <p className="course-title">Basic Front-end Development Course</p>
              <span className="course-views">834 Views</span>
            </div>

            <div className="course-item">
              <p className="course-title">Basic Fundamentals of Photography</p>
              <span className="course-views">3.7k Views</span>
            </div>

            <div className="course-item">
              <p className="course-title">Advance Dribble Base Visual Design</p>
              <span className="course-views">2.5k Views</span>
            </div>

            <div className="course-item">
              <p className="course-title">Your First Singing Lesson</p>
              <span className="course-views">948 Views</span>
            </div>
          </div>

          {/* Webinar */}
          <div className="acad-card gradient2">
            <h3>Upcoming Webinar</h3>
            <p className="webinar-title">Next Generation Frontend Architecture Using Layout Engine And Vue.</p>
            <div className="webinar-row">
              <span>Date</span>
              <strong>17 Nov 23</strong>
            </div>
            <div className="webinar-row">
              <span>Duration</span>
              <strong>32 Minutes</strong>
            </div>
          </div>

          {/* Assignments */}
          <div className="acad-card">
            <h3>Assignment Progress</h3>

            <div className="assign-item">
              <p>User Experience Design</p>
              <span>72% • 120 Tasks</span>
            </div>

            <div className="assign-item">
              <p>Basic Fundamentals</p>
              <span>48% • 32 Tasks</span>
            </div>

            <div className="assign-item">
              <p>React Native Components</p>
              <span>15% • 182 Tasks</span>
            </div>

            <div className="assign-item">
              <p>Basic of Music Theory</p>
              <span>24% • 56 Tasks</span>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
