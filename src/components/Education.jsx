import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, BookOpen, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="section">
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-badge">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education &amp; <span className="text-gradient">Qualifications</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Strong computer science foundations paired with consistent academic excellence across collegiate and school coursework.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.75rem',
            maxWidth: '920px',
            margin: '0 auto'
          }}
        >
          {education.map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '2rem',
                borderLeft: idx === 0 ? '4px solid #38bdf8' : '4px solid rgba(255, 255, 255, 0.2)',
                position: 'relative'
              }}
            >
              {/* Header: Degree & Grade Badge */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  marginBottom: '0.75rem'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '0.25rem' }}>
                    {item.degree}
                  </h3>
                  <div style={{ fontSize: '1rem', color: '#38bdf8', fontWeight: 600 }}>
                    {item.field}
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    background: idx === 0 ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                    border: idx === 0 ? '1px solid rgba(56, 189, 248, 0.35)' : '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '999px',
                    color: idx === 0 ? '#38bdf8' : '#e2e8f0',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    fontSize: '0.9rem'
                  }}
                >
                  <Award size={15} />
                  <span>{item.grade}</span>
                </div>
              </div>

              {/* Institution & Metadata */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1.25rem',
                  color: '#94a3b8',
                  fontSize: '0.875rem',
                  marginBottom: '1rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#cbd5e1', fontWeight: 500 }}>
                  <BookOpen size={15} style={{ color: '#818cf8' }} />
                  <span>{item.institution}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <MapPin size={15} />
                  <span>{item.location}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Calendar size={15} />
                  <span>{item.duration}</span>
                </div>
              </div>

              {/* Accreditation note if present */}
              {item.affiliation && (
                <div
                  style={{
                    fontSize: '0.78rem',
                    color: '#64748b',
                    marginBottom: '1.25rem',
                    padding: '0.45rem 0.75rem',
                    borderRadius: '6px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.04)'
                  }}
                >
                  {item.affiliation} • {item.status}
                </div>
              )}

              {/* Coursework Tags */}
              {item.keyCoursework && (
                <div>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '0.78rem',
                      color: '#94a3b8',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      fontWeight: 600,
                      marginBottom: '0.5rem'
                    }}
                  >
                    Key Subjects &amp; Coursework:
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                    {item.keyCoursework.map((course, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '0.78rem',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          color: '#cbd5e1',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '4px'
                        }}
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
