import './Css/Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-heading">
        Dashboard
      </h1>
      
      <div className="dashboard-content">
        <h2>Your Courses</h2>
        <ul>
          <li>Web development</li>
          <li>Java</li>
          <li>C#</li>
        </ul>

        <h2>Progress</h2>
        <p>You've completed 60% of your courses.</p>

        <h2>Announcements</h2>
        <div className="announcement-card">
          <p className="announcement-title">New Course Available!</p>
          <p className="announcement-text">Explore our latest course on JavaScript development.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
