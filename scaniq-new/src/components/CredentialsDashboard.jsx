import '../styles/credentials-dashboard.css';

const rows = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  importedAt: '2025-05-05',
  identity: `example${i + 1}@domain.com`,
  password: '••••••••',
  source: i < 3 ? 'Combolists' : 'twin',
}));
export default function CredentialsDashboard() {
  return (
    <div className="cf-main">
      <header className="cf-topbar">
        <h1 className="cf-heading">Credentials — Tenant Feed</h1>
        <div className="cf-controls">
          <input className="cf-search" placeholder="Search identities" aria-label="search" />
          <button className="cf-btn cf-btn-ghost">Filters</button>
        </div>
      </header>

      <section className="cf-card">
        <div className="cf-card-header">
          <div className="cf-results">109,826 results found</div>
          <div className="cf-select-wrap">
            <select className="cf-select">
              <option>Domain of Email</option>
            </select>
          </div>
        </div>

        <div className="cf-table-wrap">
          <table className="cf-table" role="table">
            <thead>
              <tr>
                <th className="col-date">Imported At</th>
                <th className="col-identity">Identity</th>
                <th className="col-password">Password</th>
                <th className="col-source">Source</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className="cf-row">
                  <td className="col-date">{r.importedAt}</td>
                  <td className="col-identity">
                    <div className="truncate">{r.identity}</div>
                  </td>
                  <td className="col-password">
                    <code>{r.password}</code>
                  </td>
                  <td className="col-source">{r.source}</td>
                </tr>
              ))}
              <tr className="cf-filler-row">
                <td colSpan="4">
                  <div className="cf-filler" aria-hidden="true" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <footer className="cf-footer">
        <div>Showing 1–25 of 109,826</div>
        <div className="cf-pagination">
          <button className="cf-btn cf-btn-ghost">Prev</button>
          <button className="cf-btn cf-btn-primary">Next</button>
        </div>
      </footer>

      <div className="cf-tour" role="dialog" aria-live="polite">
        {/* <div className="cf-tour-box"> */}
          {/* <div>All the leaked credentials related to your identifiers will appear in the Tenant Feed.</div> */}
          <div className="cf-tour-actions">
            <div className="cf-tour-step">3/11</div>
            {/* <button className="cf-btn cf-btn-primary">Next</button> */}
          </div>
        </div>
        <div className="cf-tour-arrow" />
      </div>
    // </div>
  );
}