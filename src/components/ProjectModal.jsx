import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle, Layers, Server, Database, Sparkles, AlertCircle } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(5, 8, 15, 0.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem'
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '780px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2.25rem',
          backgroundColor: '#0c1222',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 35px rgba(56, 189, 248, 0.15)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#cbd5e1',
            cursor: 'pointer',
            transition: 'all 0.15s ease'
          }}
          aria-label="Close project modal"
        >
          <X size={18} />
        </button>

        {/* Modal Category Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              padding: '0.25rem 0.75rem',
              borderRadius: '999px',
              background: 'rgba(56, 189, 248, 0.12)',
              color: '#38bdf8',
              fontFamily: 'var(--font-mono)'
            }}
          >
            {project.category}
          </span>
          <span style={{ fontSize: '0.75rem', color: '#64748b' }}>•</span>
          <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Academic &amp; Engineering Work</span>
        </div>

        {/* Title */}
        <h2 id="modal-project-title" style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '0.5rem' }}>
          {project.title}
        </h2>
        <p style={{ color: '#38bdf8', fontSize: '1rem', fontWeight: 500, marginBottom: '1.5rem' }}>
          {project.subtitle}
        </p>

        {/* Tech Stack Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.75rem' }}>
          {project.technologies.map((t) => (
            <span
              key={t}
              style={{
                fontSize: '0.78rem',
                padding: '0.25rem 0.65rem',
                borderRadius: '6px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#e2e8f0',
                fontFamily: 'var(--font-mono)'
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Detailed Narrative */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '1.05rem', color: '#ffffff', marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={16} style={{ color: '#38bdf8' }} /> System Architecture &amp; Purpose
          </h4>
          <p style={{ color: '#cbd5e1', lineHeight: 1.7, fontSize: '0.95rem' }}>
            {project.description}
          </p>
        </div>

        {/* Key Features & Engineering Contributions */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '1.05rem', color: '#ffffff', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CheckCircle size={16} style={{ color: '#34d399' }} /> Key Features &amp; Contributions
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {project.highlights.map((h, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.65rem',
                  fontSize: '0.9rem',
                  color: '#cbd5e1',
                  lineHeight: 1.55
                }}
              >
                <div style={{ minWidth: '6px', height: '6px', borderRadius: '50%', background: '#38bdf8', marginTop: '0.55rem' }} />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architectural Pillars (if available) */}
        {project.architecture && (
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.05rem', color: '#ffffff', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Layers size={16} style={{ color: '#818cf8' }} /> Architectural Breakdown
            </h4>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '0.85rem'
              }}
            >
              {project.architecture.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '1rem',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)'
                  }}
                >
                  <span style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#f8fafc', marginBottom: '0.25rem' }}>
                    {item.title}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.45 }}>
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Repository & Demo status note */}
        <div
          style={{
            padding: '1rem',
            borderRadius: '8px',
            background: 'rgba(56, 189, 248, 0.06)',
            border: '1px solid rgba(56, 189, 248, 0.2)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.75rem',
            marginBottom: '1.75rem'
          }}
        >
          <AlertCircle size={18} style={{ color: '#38bdf8', minWidth: '18px', marginTop: '2px' }} />
          <div style={{ fontSize: '0.825rem', color: '#cbd5e1' }}>
            <strong>Recruiter Note:</strong> Source repositories and deployment links are currently set to project placeholders. Feel free to request access to the complete code repository or the comprehensive academic DBMS project report.
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'flex-end' }}>
          <button onClick={onClose} className="btn btn-secondary">
            Close Overview
          </button>
          <a
            href="#contact"
            onClick={onClose}
            className="btn btn-primary"
          >
            Inquire About This Project
          </a>
        </div>
      </div>
    </div>
  );
};
