import { useMemo, useState } from 'react';
import Sidebar from '../components/Sidebar';
import ReportsTable from '../components/ReportsTable';
import SettingsAPIIntegration from '../components/SettingsAPIIntegration';
import CredentialsDashboard from '../components/CredentialsDashboard';
import ThreatIntelFeeds from '../components/ThreatIntelFeeds';
import '../styles/dashboard.css';
import { Doughnut, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale);

export default function UserDashboard({ onLogout }) {
  const [collapsed, setCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState(localStorage.getItem('userActiveTab') || 'Home');
  const [billing, setBilling] = useState('Monthly');
  const [subscribed, setSubscribed] = useState({});
  const menu = ['Home', 'Identifiers', 'Status', 'Docs', 'Team', 'New Scan', 'Threat Intel Feeds', 'Credentials', 'Reports', 'Subscriptions', 'Settings'];

  const categories = useMemo(() => ({
    labels: ['Market Listing', 'Forum Posts', 'Profiles', 'Pastes'],
    datasets: [{ data: [1205, 123, 312, 870], backgroundColor: ['#1976d2', '#ff7043', '#66bb6a', '#ab47bc'] }],
  }), []);

  const activities = useMemo(() => ({
    labels: ['Drug', 'Fraud', 'Hacking', 'Malware'],
    datasets: [{ data: [1205, 123, 312, 870], backgroundColor: ['#42a5f5', '#ef5350', '#ffa726', '#26a69a'] }],
  }), []);

  const tendency = useMemo(() => ({
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{ label: 'Posts', data: [12, 19, 9, 15, 23, 18, 12], borderColor: '#1976d2', backgroundColor: 'rgba(25,118,210,0.2)' }],
  }), []);

  const actors = ['Actor A', 'Actor B', 'Actor C', 'Actor D'];
  const platforms = ['Platform X', 'Platform Y', 'Platform Z', 'Platform W'];
  const results = [
    { title: 'example.com', info: 'Leak on • user42 • forum • 3h ago', tags: ['Credit report 800+'] },
    { title: 'config/settings.py', info: 'GitHub • devops • 1d ago', tags: ['API key', 'secret'] },
    { title: 'example-leak.com', info: 'Paste • unknown • 2d ago', tags: ['database dump'] },
    { title: 'example.io', info: 'Open web • blog • 5d ago', tags: ['breach'] },
  ];

  const monthlyPrices = { Pwned1: 19, Pwned2: 49, Pwned3: 99, Pwned4: 199, Pwned5: 399 };
  const yearlyPrice = (p) => +(p * 0.83).toFixed(2);
  const plans = [
    { id: 'Pwned1', name: 'Pwned 1', rpm: '10 RPM', features: ['Multi-vendor scans', 'Email alerts', 'Basic reports'] },
    { id: 'Pwned2', name: 'Pwned 2', rpm: '25 RPM', features: ['Multi-vendor scans', 'Email alerts', 'Advanced reports', 'API access'] },
    { id: 'Pwned3', name: 'Pwned 3', rpm: '50 RPM', features: ['Priority queue', 'Email alerts', 'Advanced reports', 'API access'] },
    { id: 'Pwned4', name: 'Pwned 4', rpm: '100 RPM', features: ['Priority queue', 'Team seats 5', 'Advanced reports', 'API access'] },
    { id: 'Pwned5', name: 'Pwned 5', rpm: '250 RPM', features: ['Priority queue', 'Team seats 10', 'Custom reports', 'API access'] },
    { id: 'Enterprise', name: 'Enterprise Plan', rpm: 'Custom RPM', features: ['Custom SLA', 'Dedicated support', 'SAML SSO', 'Security reviews'], enterprise: true },
  ];

  const [reports] = useState(() => {
    const saved = localStorage.getItem('userReports');
    return saved ? JSON.parse(saved) : [
      { target: 'api.example.com', vendor: 'VendorB', critical: 0, high: 2, medium: 0, status: 'Completed', date: '10/25/2023' },
      { target: 'test-site.io', vendor: 'OpenSourceScanner', critical: 2, high: 2, medium: 2, status: 'Completed', date: '10/24/2023' }
    ];
  });


  return (
    <div className={`dashboard ${(activeTab === 'Subscriptions' || activeTab === 'Settings' || activeTab === 'Credentials' || activeTab === 'Threat Intel Feeds') ? 'dark' : 'light'}`}>
      <Sidebar
        items={menu}
        theme={activeTab === 'Subscriptions' ? 'dark' : 'blue'}
        onLogout={onLogout}
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed(!collapsed)}
        onSelect={(it) => { 
          if (it === 'New Scan') { window.location.href = '/user/new-scan'; return; }
          setActiveTab(it); localStorage.setItem('userActiveTab', it);
        }}
        activeItem={activeTab}
      />
      <main className="content">
        <div className="admin-header">
          {/* <div className="left"><h2>{activeTab}</h2></div> */}
          {/* <div className="right"><button className="icon-btn">🔔</button><button className="icon-btn">👤</button></div> */}
        </div>

        {activeTab !== 'Subscriptions' && activeTab !== 'Reports' && activeTab !== 'Settings' && activeTab !== 'Credentials' && activeTab !== 'Threat Intel Feeds' && (
          <div className="grid">
            <section className="card span-8">
              <div className="card-head">
                <h3>Research Results</h3>
                <select className="filter small"><option>Newest</option><option>Oldest</option></select>
              </div>
              <div className="results">
                {results.map((r, idx) => (
                  <div key={idx} className="result-item">
                    <div className="title">{r.title}</div>
                    <div className="sub">{r.info}</div>
                    <div className="tags">
                      {r.tags.map((t) => (<span key={t} className="tag">{t}</span>))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="card span-4">
              <h3>Repartition by Categories</h3>
              <div className="chart"><Doughnut data={categories} /></div>
              <ul className="legend">
                <li><span className="dot c1"/> Market Listing</li>
                <li><span className="dot c2"/> Forum Posts</li>
                <li><span className="dot c3"/> Profiles</li>
                <li><span className="dot c4"/> Pastes</li>
              </ul>
            </section>

            <section className="card span-4">
              <h3>Repartition by Activities</h3>
              <div className="chart"><Doughnut data={activities} /></div>
              <ul className="legend">
                <li><span className="dot c1"/> Drug</li>
                <li><span className="dot c2"/> Fraud</li>
                <li><span className="dot c3"/> Hacking</li>
                <li><span className="dot c4"/> Malware</li>
              </ul>
            </section>

            <section className="card span-4">
              <h3>Most Active Actors</h3>
              <ul className="list">
                {actors.map((a) => (<li key={a}><span className="chip">{a}</span><span className="muted">25 Activities</span></li>))}
              </ul>
            </section>

            <section className="card span-4">
              <h3>Most Active Platforms</h3>
              <ul className="list">
                {platforms.map((p) => (<li key={p}><span className="chip">{p}</span><span className="muted">21 Activities</span></li>))}
              </ul>
            </section>

            <section className="card span-12">
              <div className="card-head">
                <h3>Global Tendency</h3>
                <div className="right">
                  <select className="filter small"><option>Last 7 Days</option><option>Last 30 Days</option></select>
                  <div className="metric"><strong>512</strong> New Posts</div>
                </div>
              </div>
              <div className="chart"><Line data={tendency} /></div>
            </section>
          </div>
        )}

        {activeTab === 'Settings' && (
          <SettingsAPIIntegration />
        )}

        {activeTab === 'Credentials' && (
          <CredentialsDashboard />
        )}

        {activeTab === 'Threat Intel Feeds' && (
          <ThreatIntelFeeds />
        )}

        {activeTab === 'Subscriptions' && (
          <div className="subs-wrap">
            <div className="subs-header">
              <h3>Subscriptions</h3>
              <div className="right">
                <div className="toggle">
                  <button className={billing === 'Monthly' ? 'active' : ''} onClick={() => setBilling('Monthly')}>Monthly</button>
                  <button className={billing === 'Yearly' ? 'active' : ''} onClick={() => setBilling('Yearly')}>Yearly</button>
                </div>
                {billing === 'Yearly' && <div className="save-note">Save up to 17% annually</div>}
              </div>
            </div>
            <div className="plans">
              {plans.map((p, i) => {
                const price = p.enterprise ? null : (billing === 'Monthly' ? monthlyPrices[p.id] : yearlyPrice(monthlyPrices[p.id]));
                const subscribedState = !!subscribed[p.id];
                return (
                  <div key={p.id} className={`plan-card ${i===0 ? 'active' : ''}`}>
                    <div className="plan-top"><span>{p.rpm}</span>{p.enterprise && <span className="badge">Custom RPM</span>}</div>
                    <div className="plan-title">{p.name}</div>
                    {p.enterprise ? (
                      <div className="plan-price">Custom Pricing</div>
                    ) : (
                      <div className="plan-price">${price} <span style={{fontSize:'12px', color:'#a0aec0'}}>/mo{billing==='Yearly' ? ' billed yearly' : ''}</span></div>
                    )}
                    <ul className="plan-features">
                      {p.features.map((f) => (<li key={f}>{f}</li>))}
                    </ul>
                    <button className="plan-btn" onClick={() => setSubscribed((s) => ({ ...s, [p.id]: !s[p.id] }))}>{p.enterprise ? 'Contact Us' : subscribedState ? 'Subscribed' : 'Subscribe'}</button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'Reports' && (
          <ReportsTable reports={reports} />
        )}
      </main>
    </div>
  );
}
