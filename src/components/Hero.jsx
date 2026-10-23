import React from 'react';
import { FileDown, ArrowRight, Mail, Sparkles, Code2, Database, Cpu, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { TerminalWidget } from './TerminalWidget';

export const Hero = () => {
  const { personal } = portfolioData;

  const quickStats = [
    { label: "Academic CGPA", value: "8.08", sub: "AJIET 7th Sem" },
    { label: "Graduation Target", value: "2027", sub: "B.E. CSE (AI & ML)" },
    { label: "Core Projects", value: "2+", sub: "ERP & Finance" },
    { label: "Hackathons", value: "2", sub: "National & Social" }
  ];

  return (
    <section
      id="hero"
      className="section"
      style={{
        paddingTop: '8rem',
        paddingBottom: '5rem',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Headline & Intro */}
          <div>
            {/* Status Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                padding: '0.35rem 0.85rem',
                borderRadius: '999px',
                fontSize: '0.8rem',
                color: '#34d399',
                fontWeight: 500,
                marginBottom: '1.25rem'
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#10b981',
                  boxShadow: '0 0 10px #10b981',
                  animation: 'pulse 2s infinite'
                }}
              />
              <span>Available for Software & AI/ML Internships / Full-Time</span>
            </div>

            {/* Name & Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '1rem'
              }}
            >
              Hi, I'm <span className="text-gradient">{personal.name}</span>
            </h1>

            <h2
              style={{
                fontSize: 'clamp(1.15rem, 2.2vw, 1.45rem)',
                color: '#cbd5e1',
                fontWeight: 600,
                marginBottom: '1.25rem',
                lineHeight: 1.35
              }}
            >
              {personal.role}
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: '#94a3b8',
                lineHeight: 1.65,
                marginBottom: '2rem',
                maxWidth: '540px'
              }}
            >
              Pursuing B.E. in Computer Science & Engineering (AI & ML) at{' '}
              <strong style={{ color: '#f1f5f9' }}>A.J. Institute of Engineering and Technology</strong>.
              Specialized in building high-performance backend APIs with <strong style={{ color: '#38bdf8' }}>Python</strong> &amp; <strong style={{ color: '#38bdf8' }}>FastAPI</strong>,
              responsive web interfaces in <strong style={{ color: '#818cf8' }}>React.js</strong>, and scalable database systems with <strong style={{ color: '#34d399' }}>SQL &amp; SQLite</strong>.
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem',
                marginBottom: '2.5rem'
              }}
            >
              <a href="#projects" className="btn btn-primary">
                <span>View Projects</span>
                <ArrowRight size={16} />
              </a>

              <a
                href={personal.resumePdf}
                download="B_S_Premswaroop_Resume.pdf"
                className="btn btn-secondary"
                title="Download verified resume PDF"
              >
                <FileDown size={16} />
                <span>Download Resume</span>
              </a>

              <a href="#contact" className="btn btn-accent">
                <Mail size={16} />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Core Capability Chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
              <span style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                Core Focus:
              </span>
              {['Python & FastAPI', 'Full-Stack Integration', 'Database Schema Design', 'AI/ML Systems'].map((item) => (
                <span
                  key={item}
                  style={{
                    fontSize: '0.78rem',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    padding: '0.2rem 0.55rem',
                    borderRadius: '6px',
                    color: '#cbd5e1'
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Terminal Visual Element */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <TerminalWidget />
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div
          style={{
            marginTop: '4.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem'
          }}
        >
          {quickStats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.25rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem'
              }}
            >
              <span
                style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '-0.03em'
                }}
              >
                {stat.value}
              </span>
              <span style={{ color: '#38bdf8', fontSize: '0.875rem', fontWeight: 600 }}>
                {stat.label}
              </span>
              <span style={{ color: '#64748b', fontSize: '0.78rem' }}>
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
