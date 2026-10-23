import React from 'react';
import { ArrowUp, Mail, Heart, Code2 } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#050811',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '3.5rem 0 2.5rem 0',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
          }}
        >
          {/* Brand Info */}
          <div style={{ maxWidth: '380px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #0284c7, #4f46e5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  color: '#ffffff'
                }}
              >
                BSP
              </div>
              <span style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f8fafc' }}>
                {personal.name}
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.6 }}>
              Aspiring Software Developer &amp; AI/ML Engineer. Focused on building impactful full-stack architectures and intelligent solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.875rem' }}>
            <a href="#about" style={{ color: '#94a3b8' }}>About</a>
            <a href="#skills" style={{ color: '#94a3b8' }}>Skills</a>
            <a href="#projects" style={{ color: '#94a3b8' }}>Projects</a>
            <a href="#education" style={{ color: '#94a3b8' }}>Education</a>
            <a href="#certifications" style={{ color: '#94a3b8' }}>Certifications</a>
            <a href="#hackathons" style={{ color: '#94a3b8' }}>Hackathons</a>
            <a href="#contact" style={{ color: '#94a3b8' }}>Contact</a>
          </div>

          {/* Social Links & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              style={{ width: '38px', height: '38px', padding: 0 }}
              title="LinkedIn profile"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={16} />
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              style={{ width: '38px', height: '38px', padding: 0 }}
              title="GitHub profile (placeholder)"
              aria-label="GitHub profile"
            >
              <Github size={16} />
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="btn btn-secondary btn-sm"
              style={{ width: '38px', height: '38px', padding: 0 }}
              title="Send email"
              aria-label="Send email"
            >
              <Mail size={16} />
            </a>

            <button
              onClick={scrollToTop}
              className="btn btn-primary btn-sm"
              style={{ width: '38px', height: '38px', padding: 0 }}
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.8rem',
            color: '#64748b'
          }}
        >
          <div>
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span>Built with React, Vite &amp; Modern Web Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
