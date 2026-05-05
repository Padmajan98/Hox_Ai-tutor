export default function Features() {
  return (
    <section className="section features" id="features">
      <div className="container">
        <h2>Key Features</h2>
        <div className="feature-grid">
          <article className="glass-card feature-card reveal delay-100">
            <h3><span className="feature-ico">&#10024;</span> Personalized Learning Engine</h3>
            <ul>
              <li>AI analyzes student performance in real-time</li>
              <li>Identifies weak areas automatically</li>
              <li>Generates adaptive practice questions</li>
              <li>Smart revision recommendations</li>
            </ul>
          </article>
          <article className="glass-card feature-card reveal delay-200">
            <h3><span className="feature-ico">&#128200;</span> Performance Analytics Dashboard</h3>
            <ul>
              <li>Student-wise tracking</li>
              <li>Class-level insights</li>
              <li>Predictive scoring</li>
              <li>AI improvement suggestions</li>
            </ul>
          </article>
          <article className="glass-card feature-card reveal delay-300">
            <h3><span className="feature-ico">&#127979;</span> Teacher Control Panel</h3>
            <ul>
              <li>Exam creation and scheduling</li>
              <li>Module assignment</li>
              <li>Batch progress monitoring</li>
              <li>Question bank management</li>
            </ul>
          </article>
          <article className="glass-card feature-card reveal delay-400">
            <h3><span className="feature-ico">&#128106;</span> Parent Visibility</h3>
            <ul>
              <li>Real-time reports</li>
              <li>Weak-area alerts</li>
              <li>Engagement monitoring</li>
            </ul>
          </article>
          <article className="glass-card feature-card reveal delay-500">
            <h3><span className="feature-ico">&#128276;</span> Smart Notifications</h3>
            <ul>
              <li>Exam reminders</li>
              <li>Performance alerts</li>
              <li>Personalized study suggestions</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
