import React, { useState } from 'react';
import '../styles/ThreatIntelFeeds.css';

function ArrowRight() {
  return (
    <svg className="tif__arrow" viewBox="0 0 24 24" width="20" height="20" aria-hidden>
      <path d="M5 12h12M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ThreatIntelFeeds() {
  const [active, setActive] = useState('');
  const feeds = [
    {
      title: 'Rust Adoption Drives Android Memory Safety Bugs Below 20%',
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
      desc: 'Google reports major improvements with Rust adoption…',
      meta: 'The Hacker News • 2h',
    },
    {
      title: 'Microsoft Patch Tuesday, November 2025 Edition',
      img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop',
      desc: 'Microsoft releases fixes for 60+ vulnerabilities…',
      meta: 'Krebs on Security • 11h',
    },
    {
      title: 'Week in Security: November 10–16',
      img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop',
      desc: 'Malwarebytes Labs weekly intelligence update…',
      meta: 'Malwarebytes • 58min',
    },
  ];
  const handleSelect = (key) => { setActive(key); };

  return (
    <div className="tif" role="region" aria-label="Threat Intel Feeds">
      <div className="tif__layout">
        <aside className="tif__side">
          {/* <button className={`tif__tab ${active===''?'is-active':''}`} onClick={() => handleSelect('')}>
            Threat Intel Feeds
          </button> */}
          <button className={`tif__tab ${active==='follow'?'is-active':''}`} onClick={() => handleSelect('follow')}>
            Follow Sources
          </button>
          <button className={`tif__tab ${active==='read'?'is-active':''}`} onClick={() => handleSelect('read')}>
            Read Later
          </button>
        </aside>

        <main className="tif__content-area">
          {!active && (
            <div className="tif__board">
              {/* <div className="tif__anchor">Threat Intel Feeds</div>
              <div className="tif__row">
                <div className="tif__connector" />
                <button className="tif__block" onClick={() => handleSelect('follow')} aria-label="Follow Sources">
                  <span className="tif__label">Follow Sources</span>
                  <ArrowRight />
                </button>
              </div> */}
              {/* <div className="tif__row">
                <div className="tif__connector" />
                <button className="tif__block" onClick={() => handleSelect('read')} aria-label="Read Later">
                  <span className="tif__label">Read Later</span>
                  <ArrowRight /> */}
                {/* </button> */}
              {/* </div> */}
            </div>
          )}

          {active === 'follow' && (
            <div className="tif__panel tif__panel--visible">
              <h2 className="tif__title">Follow Sources</h2>
              <p className="tif__desc">List of feeds you are following will appear here.</p>
              <div className="tif__cards">
                {feeds.map((f, i) => (
                  <article key={i} className="tif__card">
                    <img className="tif__thumb" src={f.img} alt={f.title} />
                    <div className="tif__card-body">
                      <h3 className="tif__card-title">{f.title}</h3>
                      <p className="tif__card-desc">{f.desc}</p>
                      <div className="tif__card-meta">{f.meta}</div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {active === 'read' && (
            <div className="tif__panel tif__panel--visible">
              <h2 className="tif__title">Read Later</h2>
              <ul className="tif__list">
                <li>Critical OpenSSL Vulnerability – Patch Now</li>
                <li>Top Cloud Attack Techniques 2025</li>
                <li>Linux Kernel Hardening Updates</li>
              </ul>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}