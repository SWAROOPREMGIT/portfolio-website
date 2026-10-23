import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Sparkles, Layers, ArrowUpRight, Info } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section" style={{ background: 'rgba(11, 16, 29, 0.5)' }}>
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-badge">
            <FolderGit2 size={14} />
            <span>Applied Engineering</span>
          </div>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Practical applications built from the ground up, emphasizing resilient backend logic, clean schema design, and seamless user experiences.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem',
                border: project.featured ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid rgba(255, 255, 255, 0.08)',
                background: project.featured
                  ? 'linear-gradient(180deg, rgba(16, 24, 46, 0.9) 0%, rgba(11, 17, 32, 0.8) 100%)'
                  : 'var(--bg-card)'
              }}
            >
              <div>
                {/* Header row: Category & Feature Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#38bdf8',
                      background: 'rgba(56, 189, 248, 0.1)',
                      border: '1px solid rgba(56, 189, 248, 0.2)',
                      padding: '0.2rem 0.65rem',
                      borderRadius: '999px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      fontWeight: 600
                    }}
                  >
                    {project.category}
                  </span>

                  {project.featured && (
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        fontSize: '0.72rem',
                        color: '#fbbf24',
                        background: 'rgba(245, 158, 11, 0.1)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '999px',
                        border: '1px solid rgba(245, 158, 11, 0.25)',
                        fontWeight: 600
                      }}
                    >
                      <Sparkles size={12} /> Featured
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '0.4rem', lineHeight: 1.3 }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#818cf8', fontWeight: 500, marginBottom: '1rem' }}>
                  {project.subtitle}
                </p>

                {/* Summary description */}
                <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {project.summary}
                </p>

                {/* Bullet Highlights */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '1.5rem' }}>
                  {project.highlights.slice(0, 3).map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.5rem',
                        fontSize: '0.825rem',
                        color: '#cbd5e1'
                      }}
                    >
                      <span style={{ color: '#38bdf8', marginTop: '-1px' }}>▸</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Technology Badges */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.4rem',
                    marginBottom: '1.5rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)'
                  }}
                >
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '4px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: '#cbd5e1'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card CTA Footer */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem'
                  }}
                >
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn btn-primary btn-sm"
                    style={{ flex: 1 }}
                  >
                    <Layers size={14} />
                    <span>Deep Dive &amp; Architecture</span>
                  </button>

                  <a
                    href="#contact"
                    className="btn btn-secondary btn-sm"
                    title="Ask about code repository"
                    style={{ padding: '0.5rem 0.75rem' }}
                  >
                    <Info size={15} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
