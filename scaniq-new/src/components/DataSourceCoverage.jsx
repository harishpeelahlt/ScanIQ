import '../styles/data-source-coverage.css';
import DataCard from './DataCard';

export default function DataSourceCoverage() {
  return (
    <section className="dsc-wrap">
      <div className="dsc-head">
        <div className="dsc-sub">PRISM INSIGHTS</div>
        <h2 className="dsc-title">Data Source Coverage</h2>
      </div>
      <div className="dsc-grid">
        <DataCard variant="variant-a" />
        <DataCard variant="variant-b" />
        <DataCard variant="variant-c" />
      </div>
    </section>
  );
}