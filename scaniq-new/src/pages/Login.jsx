import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/dashboard.css';

export default function Login() {
  const [type, setType] = useState('user');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const key = type === 'admin' ? 'mockAdmin' : 'mockUser';
    const creds = JSON.parse(localStorage.getItem(key) || '{}');
    if (username === creds.username && password === creds.password) {
      localStorage.setItem('role', type);
      navigate(type === 'admin' ? '/admin' : '/user');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">ScanIQ</h1>
        <div className="login-switch">
          <button className={type === 'user' ? 'active' : ''} onClick={() => setType('user')}>User Login</button>
          <button className={type === 'admin' ? 'active' : ''} onClick={() => setType('admin')}>Admin Login</button>
        </div>
        <form className="login-form" onSubmit={handleLogin}>
          <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {error && <div className="error">{error}</div>}
          <button type="submit" className="primary">Login</button>
        </form>
        <div className="hint">Default: user/user123 • admin/admin123</div>
      </div>
    </div>
  );
}
