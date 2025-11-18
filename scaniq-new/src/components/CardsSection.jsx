import '../styles/cards.css';

function Card({ title, rpm, imageClass, children }) {
  return (
    <div className="lp-card">
      <div className="lp-card-graphic">
        <div className={imageClass} />
      </div>
      <div className="lp-card-meta">
        <div className="lp-card-title">{title}</div>
        <div className="lp-card-sub">{rpm}</div>
      </div>
      <div className="lp-card-body">{children}</div>
    </div>
  );
}

export default function CardsSection() {
  return (
    <section className="cards-wrap">
      <div className="cards-grid">
        <Card title="Coverage Chart" rpm="" imageClass="graphic-a" />
        <Card title="Network Map" rpm="" imageClass="graphic-b" />
        <Card title="Entities Graph" rpm="" imageClass="graphic-c" />
      </div>
    </section>
  );
}