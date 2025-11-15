import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import '../styles/dashboard.css';

export default function AdminThreatFlow({ onLogout }) {
  const [collapsed, setCollapsed] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const navigate = useNavigate();
  const menu = ['Dashboard', 'Actions', 'Events', 'Identifiers', 'Collection', 'Reports', 'Threat Flow', 'Supply Chain', 'Leaks Browser', 'Configure', 'Help', 'Admin'];

  return (
    <div className={`dashboard ${isDark ? 'dark' : 'light'}`}>
      <Sidebar items={menu} theme="dark" onLogout={onLogout} collapsed={collapsed} onToggleCollapse={() => setCollapsed(!collapsed)} onSelect={(it) => {
        if (it === 'Dashboard') navigate('/admin');
      }} />
      <main className="content">
        <div className="admin-header">
          <div className="left">
            <h2>Threat Flow <span className="beta-label">BETA</span></h2>
            <div className="tabs">
              <button className="tab active">Articles</button>
              <button className="tab">Conversation Explorer</button>
            </div>
          </div>
          <div className="right">
            <div className="period">Time Period: Last 30 Days</div>
            <button className="icon-btn" aria-label="theme" onClick={() => setIsDark(!isDark)}>🌓</button>
            <button className="secondary">Create Custom Article</button>
          </div>
        </div>

        <div className="article-list">
          <div className="article-card">
            <div className="article-meta">July 23rd 2024 • 2 days ago • 1 min read</div>
            <div className="article-tags"><span className="badge">General</span><span className="badge">Technology</span><span className="badge">Hacking</span><span className="badge">Tools & Vulnerabilities</span></div>
            <div className="article-title">Exploiting CrowdStrike Outage: LATAM Clients Allegedly Targeted</div>
            <div className="article-desc">Threat actors allegedly distributed a malicious ZIP archive named Crowdstrike-hotfix.zip containing HijackLoader, targeting LATAM clients...</div>
            <div className="article-badges">
              <span className="chip">CrowdStrike Outage</span>
              <span className="chip">malicious ZIP archive</span>
              <span className="chip">Crowdstrike-hotfix.zip</span>
              <span className="chip">HijackLoader</span>
            </div>
            <div className="article-actions"><button className="ghost">Related Events</button><button className="ghost">Read More</button></div>
          </div>

          <div className="article-card">
            <div className="article-meta">July 23rd 2024 • 1 min read</div>
            <div className="article-tags"><span className="badge">Custom Report</span></div>
            <div className="article-title">CrowdStrike and Microsoft Incident Analysis – July 2024</div>
            <div className="article-desc">Significant disruptions due to flawed update causing BSOD crashes; strategic perspectives and discussions from underground channels...</div>
            <div className="article-badges">
              <span className="chip">CrowdStrike update</span>
              <span className="chip">BSOD crashes</span>
              <span className="chip">Windows systems</span>
              <span className="chip">global air traffic disruption</span>
            </div>
            <div className="article-actions"><button className="ghost">Related Events</button><button className="ghost">Read More</button></div>
          </div>
        </div>
      </main>
    </div>
  );
}
