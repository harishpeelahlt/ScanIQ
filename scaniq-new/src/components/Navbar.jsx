import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState('');
  const navigate = useNavigate();
  return (
    <header className="nav">
      <div className="nav-left">
        <div className="logo-mark" />
        <div className="brand">flare</div>
        <nav className="menu">
          <div className={`item ${open==='Platform'?'active':''}`} onMouseEnter={()=>setOpen('Platform')} onMouseLeave={()=>setOpen('')}>
            Platform <span className="caret" />
          </div>
          <div className={`item ${open==='Solutions'?'active':''}`} onMouseEnter={()=>setOpen('Solutions')} onMouseLeave={()=>setOpen('')}>
            Solutions <span className="caret" />
          </div>
          <div className="item">Partners</div>
          <div className="item">Company</div>
          <div className={`item ${open==='Resources'?'active':''}`} onMouseEnter={()=>setOpen('Resources')} onMouseLeave={()=>setOpen('')}>
            Resources <span className="caret" />
          </div>
        </nav>
      </div>
      <div className="nav-right">
        <button className="btn orange" onClick={()=>navigate('/login')}>Free Trial</button>
        <button className="btn outline" onClick={()=>navigate('/login')}>Book a Demo</button>
        <button className="link" onClick={()=>navigate('/login')}>Login</button>
        <div className="lang">
          <span className="lang-dot" />
          <span className="lang-caret" />
        </div>
      </div>
    </header>
  );
}