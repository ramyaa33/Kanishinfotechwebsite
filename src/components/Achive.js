import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { label: 'Happy Clients', target: 20 },
  { label: 'Completed Projects', target: 152 },
  { label: 'Workers', target: 50 },
];

const AchievementsSection = () => {
  const containerRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          animateCounters();
          setStarted(true);
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [started]);

  const animateCounters = () => {
    const duration = 1000;
    const startTime = performance.now();

    const step = (timestamp) => {
      const progress = Math.min((timestamp - startTime) / duration, 3);

      setCounts(stats.map(stat => {
        const value = Math.floor(stat.target * easeOutCubic(progress));
        return value > stat.target ? stat.target : value;
      }));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const easeOutCubic = (t) => (--t) * t * t + 1;

  return (
    <section style={{ padding: '60px 20px', backgroundColor: '#f9f9f9', textAlign: 'center', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: 'auto' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1e1e1e' }}>
          <span style={{ backgroundColor: '#ffe347', padding: '0 10px', borderRadius: '4px' }}>8 Years In,</span>{' '}
          Here Is Our Achievements
        </h2>
        <p style={{ fontSize: '18px', color: '#333', marginTop: '20px' }}>
        "Kanish Infotech is a forward-thinking company that delivers <strong>High-quality </strong>solutions on time, combining technological innovation with business expertise to empower emerging companies across India and bring the future of work to life today."
        </p>

        <div
          className={`counter-container ${isVisible ? 'fade-in' : ''}`}
          ref={containerRef}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '40px', gap: '40px' }}
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="fade-item">
              <h3 style={{ fontSize: '32px', color: '#000' }}>{counts[i]}+</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* 🎉 Confetti/Paper Burst */}
        {isVisible && (
          <div className="burst-container">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className={`paper-piece piece-${i + 1}`} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AchievementsSection;
