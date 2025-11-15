import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import '../styles/dashboard.css';
import { Radar, Line, Doughnut, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
} from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, CategoryScale, LinearScale, ArcElement, BarElement);

export default function AdminDashboard({ onLogout }) {
  const [collapsed, setCollapsed] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const menu = ['Dashboard', 'Actions', 'Events', 'Identifiers', 'Collection', 'Reports', 'Threat Flow', 'Supply Chain', 'Leaks Browser', 'Configure', 'Help', 'Admin'];
  const navigate = useNavigate();

  const radarData = {
    labels: ['Sensitive Data', 'External Attack Surface', 'Exposed Source Code', 'Criminal Underground', 'Leaked Credentials'],
    datasets: [
      { label: 'Current', data: [8, 6, 3, 7, 5], backgroundColor: 'rgba(25,118,210,0.2)', borderColor: '#1976d2' },
      { label: 'Target', data: [5, 4, 2, 4, 3], backgroundColor: 'rgba(255,193,7,0.2)', borderColor: '#ffc107' },
    ],
  };

  const scoreEvolution = {
    labels: ['Feb 8', 'Feb 13', 'Feb 18', 'Feb 23', 'Feb 28', 'Mar 4'],
    datasets: [
      { label: 'Exposure', data: [5, 6, 5, 6, 7, 4], borderColor: '#64b5f6', backgroundColor: 'rgba(100,181,246,0.2)' },
      { label: 'Benchmark', data: [4, 5, 4, 5, 6, 3], borderColor: '#ffb74d', backgroundColor: 'rgba(255,183,77,0.2)' },
    ],
  };

  const gaugeValue = 5.5;
  const gaugeData = {
    labels: ['Score', 'Remaining'],
    datasets: [{ data: [gaugeValue, 10 - gaugeValue], backgroundColor: ['#42a5f5', '#263238'], borderWidth: 0, circumference: 180, rotation: 270 }],
  };

  const eventsByCategory = {
    labels: ['Data', 'Surface', 'Code', 'Underground', 'Creds'],
    datasets: [{ label: 'Events', data: [200, 160, 80, 140, 120], backgroundColor: '#29b6f6' }],
  };

  const recentActions = ['Policy updated', 'User suspended', 'New report'];
  const recentEvents = ['Leak detected', 'Credential dump', 'Forum mention', 'Dark web chatter'];
  const recommendedIdentifiers = ['corp@example.com', 'github/org', 'prod-domain.com'];

  return (
    <div className={`dashboard ${isDark ? 'dark' : 'light'}`}>
      <Sidebar items={menu} theme="dark" onLogout={onLogout} collapsed={collapsed} onToggleCollapse={() => setCollapsed(!collapsed)} onSelect={(it) => {
        if (it === 'Threat Flow') navigate('/admin/threat-flow');
        if (it === 'Dashboard') navigate('/admin');
      }} />
      <main className="content">
        <div className="admin-header">
          <div className="left">
            <h2>Dashboard</h2>
            <div className="tabs">
              <button className="tab active">Overview</button>
              <button className="tab">Insights</button>
              <button className="tab">Footprint</button>
              <button className="tab">History</button>
            </div>
          </div>
          <div className="right">
            <div className="period">Time Period: Last 30 Days</div>
            <button className="icon-btn" aria-label="settings">⚙️</button>
            <button className="icon-btn" aria-label="theme" onClick={() => setIsDark(!isDark)}>🌓</button>
          </div>
        </div>

        <div className="grid admin-grid">
          <section className="card">
            <h3>Exposure Profile</h3>
            <div className="chart"><Radar data={radarData} /></div>
          </section>
          <section className="card">
            <h3>Exposure Score Evolution</h3>
            <div className="chart"><Line data={scoreEvolution} /></div>
          </section>
          <section className="card">
            <h3>Exposure Score</h3>
            <div className="chart gauge"><Doughnut data={gaugeData} /></div>
          </section>
          <section className="card">
            <h3>Recent Actions</h3>
            <ul className="list">
              {recentActions.map((a) => (<li key={a}>{a}</li>))}
            </ul>
          </section>
          <section className="card">
            <h3>Recent Events</h3>
            <ul className="list">
              {recentEvents.map((e) => (<li key={e}>{e}</li>))}
            </ul>
          </section>
          <section className="card">
            <h3>Recommended Identifiers</h3>
            <ul className="list">
              {recommendedIdentifiers.map((r) => (<li key={r}>{r}</li>))}
            </ul>
          </section>
          <section className="card span-2">
            <h3>Events by Category</h3>
            <div className="chart"><Bar data={eventsByCategory} /></div>
          </section>
          <section className="card">
            <h3>Recent High Risk Corporations</h3>
            <ul className="list"><li>—</li></ul>
          </section>
          <section className="card">
            <h3>Recent High Risk Look-alikes</h3>
            <ul className="list"><li>—</li></ul>
          </section>
        </div>
      </main>
    </div>
  );
}
