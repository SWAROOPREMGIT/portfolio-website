import React from 'react';
import { User, Target, HeartHandshake, MapPin, Globe, Compass, GraduationCap, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  const { personal } = portfolioData;

  const highlights = [
    {
      icon: <GraduationCap size={20} style={{ color: '#38bdf8' }} />,
      label: 'Academic Foundation',
      value: 'B.E. CSE (AI & ML), AJIET',
      desc: '7th Semester with 8.08 CGPA (Class of 2027)'
    },
    {
      icon: <MapPin size={20} style={{ color: '#818cf8' }} />,
      label: 'Location',
      value: 'Mangaluru, Karnataka',
      desc: 'Open to on-site, hybrid, and remote roles'
    },
    {
      icon: <Globe size={20} style={{ color: '#34d399' }} />,
      label: 'Languages',
      value: 'English, Hindi, Kannada',
      desc: 'Fluent verbal & written communication'
    },
    {
      icon: <Sparkles size={20} style={{ color: '#f59e0b' }} />,
      label: 'Personal Interests',
      value: 'Dancing & Tech Exploration',
      desc: 'Creative expression & software craftsmanship'
    }
  ];

  return (
    <section id="about" className="section" style={{ background: 'rgba(13, 19, 34, 0.4)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-badge">
            <User size={14} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            Engineering Thoughtful Software <span className="text-gradient">With Purpose</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            A dedicated Computer Science (AI &amp; ML) student combining technical rigor in Python and full-stack development with a strong collaborative spirit and hunger for continuous improvement.
          </p>
        </div>

        {/* Narrative & Philosophy Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
            marginBottom: '3rem'
          }}
        >
          {/* Aim Card */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(56, 189, 248, 0.12)',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#38bdf8'
                }}
              >
                <Target size={20} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#ffffff' }}>Professional Objective</h3>
            </div>
            <blockquote
              style={{
                fontStyle: 'italic',
                color: '#cbd5e1',
                lineHeight: 1.7,
                fontSize: '0.98rem',
                borderLeft: '3px solid #38bdf8',
                paddingLeft: '1rem',
                margin: '1rem 0'
              }}
            >
              "{personal.aim}"
            </blockquote>
            <p style={{ fontSize: '0.88rem', color: '#94a3b8' }}>
              Driven to deliver real value from day one in agile software engineering, backend architecture, and applied AI teams.
            </p>
          </div>

          {/* Contribution Card */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(99, 102, 241, 0.12)',
                  border: '1px solid rgba(99, 102, 241, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#818cf8'
                }}
              >
                <HeartHandshake size={20} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#ffffff' }}>How I Contribute</h3>
            </div>
            <blockquote
              style={{
                fontStyle: 'italic',
                color: '#cbd5e1',
                lineHeight: 1.7,
                fontSize: '0.98rem',
                borderLeft: '3px solid #818cf8',
                paddingLeft: '1rem',
                margin: '1rem 0'
              }}
            >
              "{personal.contribution}"
            </blockquote>
            <p style={{ fontSize: '0.88rem', color: '#94a3b8' }}>
              Active listener, clear communicator, and proactive learner who thrives when turning complex project requirements into clean, maintainable code.
            </p>
          </div>
        </div>

        {/* Quick Facts Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {highlights.map((h, i) => (
            <div
              key={i}
              className="glass-card"
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.45rem'
              }}
            >
              <div style={{ marginBottom: '0.35rem' }}>{h.icon}</div>
              <span style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                {h.label}
              </span>
              <span style={{ fontSize: '1.05rem', color: '#f8fafc', fontWeight: 600 }}>
                {h.value}
              </span>
              <span style={{ fontSize: '0.825rem', color: '#94a3b8' }}>
                {h.desc}
              </span>
            </div>
          ))}
        </div>

        {/* Target Career Roles Banner */}
        <div
          className="glass-card"
          style={{
            marginTop: '2.5rem',
            padding: '1.5rem 2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem'
          }}
        >
          <div>
            <span style={{ fontSize: '0.78rem', color: '#38bdf8', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
              Target Career Focus
            </span>
            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', marginTop: '0.25rem' }}>
              Positions where I can create maximum impact:
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {personal.careerFocus.map((role) => (
              <span
                key={role}
                style={{
                  background: 'rgba(56, 189, 248, 0.08)',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  color: '#e2e8f0',
                  fontSize: '0.825rem',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '999px',
                  fontWeight: 500
                }}
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
