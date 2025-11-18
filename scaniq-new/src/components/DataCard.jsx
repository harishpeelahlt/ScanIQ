import '../styles/data-source-coverage.css';

export default function DataCard({ variant }) {
  return (
    <div className={`dsc-card ${variant}`}>
      <div className="dsc-inner">
        <div className="dsc-graphic" />
      </div>
    </div>
  );
}