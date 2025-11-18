import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import NewScan from '../components/NewScan';
import '../styles/dashboard.css';

export default function UserNewScan() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const menu = ['Home', 'Identifiers', 'Status', 'Docs', 'Team', 'New Scan', 'Reports', 'Subscriptions'];

  const handleComplete = (entry) => {
    const saved = localStorage.getItem('userReports');
    const next = [entry, ...(saved ? JSON.parse(saved) : [])];
    localStorage.setItem('userReports', JSON.stringify(next));
    localStorage.setItem('userActiveTab', 'Reports');
    navigate('/user');
  };

  return (
    <div className="dashboard dark">
      <Sidebar items={menu} theme="blue" collapsed={collapsed} onToggleCollapse={()=>setCollapsed(!collapsed)} activeItem={'New Scan'} onSelect={(it)=>{
        if (it === 'New Scan') return; if (it === 'Reports') navigate('/user'); else navigate('/user');
      }} />
      <main className="content">
        <div className="admin-header">
          <div className="left"><h2>New Scan</h2></div>
          <div className="right"><button className="icon-btn">🔔</button><button className="icon-btn">👤</button></div>
        </div>
        <NewScan onComplete={handleComplete} />
      </main>
    </div>
  );
}