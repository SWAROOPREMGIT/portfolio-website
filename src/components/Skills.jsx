import React, { useState } from 'react';
import { Code2, Globe, Database, Wrench, Users, CheckCircle, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');
  const { skills } = portfolioData;

  const categories = [
    { id: 'all', label: 'All Competencies', icon: <Sparkles size={15} /> },
    { id: 'programming', label: 'Programming', icon: <Code2 size={15} /> },
    { id: 'web', label: 'Web & Backend', icon: <Globe size={15} /> },
    { id: 'databases', label: 'Databases', icon: <Database size={15} /> },
    { id: 'tools', label: 'Tools & DevOps', icon: <Wrench size={15} /> },
    { id: 'professional', label: 'Professional Skills', icon: <Users size={15} /> }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-badge">
            <Code2 size={14} />
            <span>Technical Repertoire</span>
          </div>
          <h2 className="section-title">
            Skills &amp; <span className="text-gradient">Core Competencies</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Directly derived from coursework, enterprise academic projects, and competitive hackathons — presented transparently without artificial percentage meters.
          </p>

          {/* Filter Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '2rem'
            }}
          >
            {categories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.5rem 1rem',
                    borderRadius: '999px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: isActive
                      ? '1px solid #38bdf8'
                      : '1px solid rgba(255, 255, 255, 0.08)',
                    background: isActive
                      ? 'rgba(56, 189, 248, 0.15)'
                      : 'rgba(255, 255, 255, 0.03)',
                    color: isActive ? '#38bdf8' : '#94a3b8'
                  }}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skill Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {/* Programming Languages */}
          {(activeTab === 'all' || activeTab === 'programming') && (
            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
                <div style={{ padding: '0.4rem', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8' }}>
                  <Code2 size={20} />
                </div>
                <h3 style={{ fontSize: '1.15rem', color: '#ffffff' }}>Programming Languages</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {skills.programming.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '0.75rem',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.04)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.2rem' }}>
                      <span style={{ fontWeight: 600, color: '#f8fafc' }}>{item.name}</span>
                      <span style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: '4px', background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>
                        {item.badge}
                      </span>
                    </div>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{item.details}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Web Development */}
          {(activeTab === 'all' || activeTab === 'web') && (
            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
                <div style={{ padding: '0.4rem', borderRadius: '8px', background: 'rgba(99, 102, 241, 0.1)', color: '#818cf8' }}>
                  <Globe size={20} />
                </div>
                <h3 style={{ fontSize: '1.15rem', color: '#ffffff' }}>Web &amp; Backend</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {skills.webDevelopment.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '0.75rem',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.04)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.2rem' }}>
                      <span style={{ fontWeight: 600, color: '#f8fafc' }}>{item.name}</span>
                      <span style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: '4px', background: 'rgba(99, 102, 241, 0.15)', color: '#818cf8', fontFamily: 'var(--font-mono)' }}>
                        {item.badge}
                      </span>
                    </div>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{item.details}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Databases */}
          {(activeTab === 'all' || activeTab === 'databases') && (
            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
                <div style={{ padding: '0.4rem', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.1)', color: '#34d399' }}>
                  <Database size={20} />
                </div>
                <h3 style={{ fontSize: '1.15rem', color: '#ffffff' }}>Data &amp; Databases</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {skills.databases.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '0.75rem',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.04)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.2rem' }}>
                      <span style={{ fontWeight: 600, color: '#f8fafc' }}>{item.name}</span>
                      <span style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: '4px', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', fontFamily: 'var(--font-mono)' }}>
                        {item.badge}
                      </span>
                    </div>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{item.details}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tools & Workflow */}
          {(activeTab === 'all' || activeTab === 'tools') && (
            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
                <div style={{ padding: '0.4rem', borderRadius: '8px', background: 'rgba(245, 158, 11, 0.1)', color: '#fbbf24' }}>
                  <Wrench size={20} />
                </div>
                <h3 style={{ fontSize: '1.15rem', color: '#ffffff' }}>Tools &amp; Workflow</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {skills.tools.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '0.75rem',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.04)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.2rem' }}>
                      <span style={{ fontWeight: 600, color: '#f8fafc' }}>{item.name}</span>
                      <span style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: '4px', background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', fontFamily: 'var(--font-mono)' }}>
                        {item.badge}
                      </span>
                    </div>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{item.details}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Professional Skills */}
          {(activeTab === 'all' || activeTab === 'professional') && (
            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
                <div style={{ padding: '0.4rem', borderRadius: '8px', background: 'rgba(236, 72, 153, 0.1)', color: '#f472b6' }}>
                  <Users size={20} />
                </div>
                <h3 style={{ fontSize: '1.15rem', color: '#ffffff' }}>Professional Skills</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {skills.professional.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '0.75rem',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.04)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.2rem' }}>
                      <CheckCircle size={14} style={{ color: '#34d399' }} />
                      <span style={{ fontWeight: 600, color: '#f8fafc' }}>{item.name}</span>
                    </div>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{item.details}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
