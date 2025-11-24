function Icon({ name }) {
  const map = {
    Home: <path d="M12 3l9 8v10h-6v-6H9v6H3V11z" />, 
    Dashboard: <path d="M3 5h18v4H3zm0 6h10v8H3zm12 6h6v-6h-6z" />, 
    Actions: <path d="M12 2l3 7h7l-5.5 4 2 7-6-4.5L6.5 20l2-7L3 9h7z" />, 
    Events: <path d="M5 3h14v4H5zm0 6h14v12H5z" />, 
    Identifiers: <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 6a2 2 0 110 4 2 2 0 010-4zm0 10a6 6 0 01-5.33-3h10.66A6 6 0 0112 18z" />, 
    Collection: <path d="M4 4h7v7H4zm9 0h7v7h-7zM4 13h7v7H4zm9 7v-7h7v7z" />, 
    Reports: <path d="M6 2h9l5 5v15a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm8 6h5l-5-5v5z" />, 
    'Threat Flow': <path d="M3 12l4-2 6 3 8-4v9H3z" />, 
    'Supply Chain': <path d="M5 5h6v6H5zm8 8h6v6h-6zM5 13h6v6H5zM13 5h6v6h-6z" />, 
    Credentials: <path d="M12 17a5 5 0 100-10 5 5 0 000 10zm-7 3a9 9 0 0114 0v2H5v-2z" />, 
    Configure: <path d="M12 8a4 4 0 100 8 4 4 0 000-8zm9 4l-2 1 1 2-2 2-2-1-1 2h-4l-1-2-2 1-2-2 1-2-2-1 1-4 2-1 1-2h4l1 2 2-1 2 2-1 2 2 1z" />, 
    Help: <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 17a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm2-9a3 3 0 00-6 0h2a1 1 0 112 0c0 1-1 1.5-1.5 2l-.5.5V15h2v-1.5l.5-.5C12.5 11.5 14 10.8 14 10z" />, 
    Admin: <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm-7 9v-2a7 7 0 0114 0v2H5z" />,
    Docs: <path d="M6 2h9l5 5v15a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm8 6h5l-5-5v5z" />, 
    Status: <path d="M5 3h4v18H5zm5 6h4v12h-4zm5-4h4v16h-4z" />, 
    Team: <path d="M16 11a4 4 0 10-8 0 4 4 0 008 0zm-9 6a6 6 0 0110 0v3H7v-3z" />
    , 'New Scan': <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 5h2v3h3v2h-3v3h-2v-3H8V10h3V7z" />
    , 'Threat Intel Feeds': <path d="M12 3a9 9 0 100 18 9 9 0 000-18zm0 4.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-3.5 6.5a5 5 0 019 0h-9z" />
  };
  const path = map[name] || <circle cx="12" cy="12" r="9" />;
  return (<svg width="18" height="18" viewBox="0 0 24 24"><g fill="currentColor">{path}</g></svg>);
}

export default function Sidebar({ items, theme, onLogout, collapsed, onToggleCollapse, onSelect, activeItem }) {
  return (
    <aside className={`sidebar ${theme} ${collapsed ? 'collapsed' : ''}`}>
      <div className="logo">
        <div className="dot" />
        <span className="logo-text">SCANIQ</span>
      </div>
      <nav>
        {items.map((it) => (
          <div key={it} className={`nav-item ${activeItem === it ? 'active' : ''}`} onClick={() => onSelect && onSelect(it)}>
            <span className="icon"><Icon name={it} /></span>
            {!collapsed && <span className="label">{it}</span>}
            {it === 'Actions' && !collapsed && <span className="notif">99+</span>}
            {it === 'Threat Flow' && !collapsed && <span className="beta-label">BETA</span>}
          </div>
        ))}
      </nav>
      <div className="spacer" />
      <div className="user">
        <div className="avatar">U1</div>
        {!collapsed && <div className="user-meta"><div className="user-name">User 1</div></div>}
      </div>
      <button onClick={onLogout} className="logout">Logout</button>
      <div className="ongoing">1 Ongoing Tasks</div>
      <button className="collapse" onClick={onToggleCollapse}>{collapsed ? 'Expand' : 'Collapse Menu'}</button>
    </aside>
  );
}
