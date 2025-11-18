import { useState } from 'react';
import '../styles/new-scan.css';

function isDomainOrIP(v) {
  const domain = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const ip = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;
  return domain.test(v) || ip.test(v);
}

export default function NewScan({ onComplete }) {
  const [target, setTarget] = useState('');
  const [vendor, setVendor] = useState('Vendor A (Simulator)');
  const [scanning, setScanning] = useState(false);
  const [err, setErr] = useState('');

  const startScan = () => {
    if (!isDomainOrIP(target)) { setErr('Please enter a valid domain or IPv4 address'); return; }
    setErr(''); setScanning(true);
    setTimeout(() => {
      const now = new Date();
      const date = `${now.getMonth()+1}/${now.getDate()}/${now.getFullYear()}`;
      onComplete({ target, vendor: 'Simulator', critical: 2, high: 0, medium: 1, status: 'Completed', date });
      setScanning(false);
    }, 2000);
  };

  return (
    <div className="ns-wrap" aria-busy={scanning}>
      <div className="ns-card" role="region" aria-label="Start a New Scan">
        <div className="ns-title">Start a New Scan</div>
        <div className="ns-desc">Enter a domain or IP and select a vendor to begin scanning.</div>
        <label className="ns-label" htmlFor="target">Target Domain or IP</label>
        <input id="target" className="ns-input" placeholder="e.g., example.com or 192.168.1.1" value={target} onChange={(e)=>setTarget(e.target.value)} disabled={scanning} aria-invalid={!!err} />
        {err && <div className="ns-error" role="alert">{err}</div>}
        <label className="ns-label" htmlFor="vendor">Select Vendor</label>
        <div className="ns-select-wrap">
          <select id="vendor" className="ns-select" value={vendor} onChange={(e)=>setVendor(e.target.value)} disabled={scanning} aria-label="Select vendor">
            <option>Vendor A (Simulator)</option>
            <option>VendorB</option>
            <option>OpenSourceScanner</option>
          </select>
          <span className="ns-caret" />
        </div>
        <div className="ns-actions">
          <button className="ns-btn" onClick={startScan} disabled={scanning}>{scanning ? 'Scanning...' : 'Start Scan'}</button>
        </div>
        {scanning && <div className="ns-progress">Scan in progress... This may take a few moments.</div>}
      </div>
    </div>
  );
}