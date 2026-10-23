import React from 'react';
import { Award, CheckCircle, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Certifications = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="section" style={{ background: 'rgba(13, 19, 34, 0.4)' }}>
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-badge">
            <Award size={14} />
            <span>Credentials &amp; Learning</span>
          </div>
          <h2 className="section-title">
            Professional <span className="text-gradient">Certifications</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Accredited learning pathways in core programming, cloud infrastructure, and modern data productivity.
          </p>
        </div>

        {/* Certifications Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Badge and Year Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#34d399',
                      background: 'rgba(16, 185, 129, 0.12)',
                      border: '1px solid rgba(16, 185, 129, 0.25)',
                      padding: '0.2rem 0.65rem',
                      borderRadius: '999px',
                      fontWeight: 600
                    }}
                  >
                    {cert.badge}
                  </span>

                  <span
                    style={{
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#94a3b8',
                      background: 'rgba(255, 255, 255, 0.05)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '4px'
                    }}
                  >
                    {cert.year}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.4rem', lineHeight: 1.3 }}>
                  {cert.title}
                </h3>
                <div style={{ fontSize: '0.875rem', color: '#38bdf8', fontWeight: 600, marginBottom: '1rem' }}>
                  {cert.issuer}
                </div>

                {/* Description */}
                <p style={{ fontSize: '0.875rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {cert.description}
                </p>
              </div>

              {/* Skills verified */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.4rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)'
                  }}
                >
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        fontSize: '0.75rem',
                        color: '#94a3b8',
                        background: 'rgba(255, 255, 255, 0.03)',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '4px'
                      }}
                    >
                      <CheckCircle size={11} style={{ color: '#10b981' }} />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
