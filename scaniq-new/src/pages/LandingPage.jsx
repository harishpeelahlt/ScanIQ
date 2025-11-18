import '../styles/landing.css';
import Navbar from '../components/Navbar';
import DataSourceCoverage from '../components/DataSourceCoverage';

export default function LandingPage() {
  return (
    <div className="landing-wrap">
      <Navbar />
      <DataSourceCoverage />
    </div>
  );
}