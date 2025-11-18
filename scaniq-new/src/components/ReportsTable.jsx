import '../styles/dashboard.css';

export default function ReportsTable({ reports }) {
  return (
    <div className="reports-card">
      <h3>Scan Reports</h3>
      <table className="reports-table">
        <thead>
          <tr>
            <th>Target</th>
            <th>Vendor</th>
            <th>Critical</th>
            <th>High</th>
            <th>Medium</th>
            <th>Status</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((r, i) => (
            <tr key={i}>
              <td>{r.target}</td>
              <td>{r.vendor}</td>
              <td className="sev sev-critical">{r.critical}</td>
              <td className="sev sev-high">{r.high}</td>
              <td className="sev sev-medium">{r.medium}</td>
              <td className="status-ok">{r.status}</td>
              <td>{r.date}</td>
              <td><button className="ghost">View Details</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}