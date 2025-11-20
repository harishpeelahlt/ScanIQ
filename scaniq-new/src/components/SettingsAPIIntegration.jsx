import React, { useState } from 'react';
import '../styles/SettingsAPIIntegration.css';

const TrashIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M9 3h6l1 2h4v2H4V5h4l1-2zm1 7v8m4-8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M6 7h12l-1 13a2 2 0 01-2 2H9a2 2 0 01-2-2L6 7z" fill="currentColor" opacity="0.08" />
  </svg>
);

export default function SettingsAPIIntegration() {
  const [vendors, setVendors] = useState([
    {
      id: Date.now(),
      name: 'Vendor A (Simulator)',
      apiKey: '',
      endpoint: 'https://api.vendora.com/v1/scan',
    },
  ]);

  const addVendor = () => {
    setVendors(prev => [
      ...prev,
      { id: Date.now(), name: 'New Vendor', apiKey: '', endpoint: '' }
    ]);
  };

  const removeVendor = (id) => {
    setVendors(prev => prev.filter(v => v.id !== id));
  };

  return (
    <div className="settings-container">
      <h2 className="settings-title">API Integration Management</h2>

      <div className="info-banner">
        <h4>Understanding API Connections</h4>
        <p>
          Connecting to a live API requires its server to allow requests from this app.
          You can always use our built-in simulator to test the full functionality.
        </p>
      </div>

      {vendors.map(vendor => (
        <div className="vendor-card" key={vendor.id}>
          <div className="vendor-header">
            <h4>Vendor Name</h4>
            <button className="delete-btn" onClick={() => removeVendor(vendor.id)}>
              <TrashIcon size={18} />
            </button>
          </div>

          <input className="input-field" type="text" defaultValue={vendor.name} />

          <h4>API Key</h4>
          <input className="input-field" type="password" placeholder="Enter API Key" />

          <h4>Endpoint URL</h4>
          <input className="input-field" type="text" defaultValue={vendor.endpoint} />

          <button className="test-btn">Test Connection</button>
        </div>
      ))}

      {/* ✔ THIS IS THE NEW BUTTON AT BOTTOM (NOT TOP) */}
      <div className="add-new-wrapper">
        <button className="add-new-btn" onClick={addVendor}>
          + Add New Vendor
        </button>
      </div>
    </div>
  );
}
