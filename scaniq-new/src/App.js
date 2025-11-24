import './App.css';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import LandingPage from './pages/LandingPage';
import UserNewScan from './pages/UserNewScan';
import AdminThreatFlow from './pages/AdminThreatFlow';
function RequireRole({ children, role }) {
  const storedRole = localStorage.getItem('role');
  if (storedRole !== role) return <Navigate to="/" replace />;
  return children;
}

function App() {
  const navigate = useNavigate();
  if (!localStorage.getItem('initialized')) {
    localStorage.setItem('initialized', 'true');
    localStorage.setItem('mockUser', JSON.stringify({ username: 'user', password: 'user123' }));
    localStorage.setItem('mockAdmin', JSON.stringify({ username: 'admin', password: 'admin123' }));
  }

  const onLogout = () => {
    localStorage.removeItem('role');
    navigate('/');
  };

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/user"
        element={
          <RequireRole role="user">
            <UserDashboard onLogout={onLogout} />
          </RequireRole>
        }
      />
      <Route
        path="/user/new-scan"
        element={
          <RequireRole role="user">
            <UserNewScan />
          </RequireRole>
        }
      />
      <Route
        path="/dashboard"
        element={
          <RequireRole role="user">
            <UserDashboard onLogout={onLogout} />
          </RequireRole>
        }
      />
      <Route
        path="/admin"
        element={
          <RequireRole role="admin">
            <AdminDashboard onLogout={onLogout} />
          </RequireRole>
        }
      />
      <Route
        path="/admin/threat-flow"
        element={
          <RequireRole role="admin">
            <AdminThreatFlow onLogout={onLogout} />
          </RequireRole>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
