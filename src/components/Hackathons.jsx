import React from 'react';
import { Trophy, Clock, Target, Users, Zap, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hackathons = () => {
  const { hackathons } = portfolioData;

  return (
    <section id="hackathons" className="section">
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-badge">
            <Trophy size={14} />
            <span>Competitive Sprints</span>
          </div>
          <h2 className="section-title">
            Hackathons &amp; <span className="text-gradient">Competitions</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Testing engineering velocity, creative ideation, and real-time collaboration under tight competitive constraints.
          </p>
        </div>

        {/* Hackathon Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {hackathons.map((h, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '2.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                {/* Header Tag */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#fbbf24',
                      background: 'rgba(245, 158, 11, 0.12)',
                      border: '1px solid rgba(245, 158, 11, 0.25)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '999px',
                      fontWeight: 600
                    }}
                  >
                    <Zap size={13} /> {idx === 0 ? '24-Hour National Hackathon' : 'Social Impact Hackathon'}
                  </span>

                  <span
                    style={{
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#94a3b8'
                    }}
                  >
                    {h.year}
                  </span>
                </div>

                {/* Title & Organizer */}
                <h3 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '0.35rem', lineHeight: 1.3 }}>
                  {h.title}
                </h3>
                <div style={{ fontSize: '0.9rem', color: '#38bdf8', fontWeight: 600, marginBottom: '1rem' }}>
                  {h.organizer}
                </div>

                {/* Project Name Pill */}
                <div
                  style={{
                    display: 'inline-block',
                    fontSize: '0.8rem',
                    color: '#e2e8f0',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '6px',
                    marginBottom: '1.25rem'
                  }}
                >
                  <strong style={{ color: '#818cf8' }}>Project:</strong> {h.project}
                </div>

                {/* Achievement Summary */}
                <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  {h.achievement}
                </p>

                {/* Highlights */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                  {h.highlights.map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.55rem',
                        fontSize: '0.85rem',
                        color: '#94a3b8',
                        lineHeight: 1.5
                      }}
                    >
                      <CheckCircle2 size={14} style={{ color: '#38bdf8', minWidth: '14px', marginTop: '3px' }} />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Role footer */}
              <div
                style={{
                  marginTop: '1.75rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.825rem',
                  color: '#64748b'
                }}
              >
                <span>Role: <strong style={{ color: '#e2e8f0' }}>{h.role}</strong></span>
                <span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} /> Completed
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
