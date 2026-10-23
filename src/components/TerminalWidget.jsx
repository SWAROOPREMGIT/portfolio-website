import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const TerminalWidget = () => {
  const [history, setHistory] = useState([
    { type: 'system', text: "Premswaroop v2.5 Interactive Developer Shell [B.E. CSE AI/ML]" },
    { type: 'system', text: "Type 'help' or click quick command chips below to inspect qualifications." },
    { type: 'cmd', text: "whoami" },
    { type: 'output', text: `${portfolioData.personal.name} — ${portfolioData.personal.role} @ AJIET (CGPA: 8.08)` }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [copied, setCopied] = useState(false);
  const bottomRef = useRef(null);

  const commandChips = ['help', 'skills', 'projects', 'education', 'contact'];

  const executeCommand = (cmdText) => {
    const raw = cmdText.trim();
    if (!raw) return;

    const cmd = raw.toLowerCase();
    const newEntry = { type: 'cmd', text: raw };
    let outputText = '';

    switch (cmd) {
      case 'help':
        outputText = `Available commands:\n • whoami       - Quick background & degree\n • skills       - Core programming & tech stack\n • projects     - Featured enterprise & web projects\n • education    - Academic credentials & CGPA\n • contact      - Email, phone, location & LinkedIn\n • clear        - Clear terminal history`;
        break;
      case 'whoami':
        outputText = `${portfolioData.personal.name}\n${portfolioData.personal.degree}\n${portfolioData.personal.institution}\nStatus: Expected 2027 | 7th Semester | CGPA: 8.08`;
        break;
      case 'skills':
        outputText = `Languages:  Python (OOP/DSA), C, JavaScript\nBackend:    FastAPI, Full-Stack Integration, REST APIs\nFrontend:   React.js, HTML5, CSS3\nDatabases:  SQL, SQLite, MongoDB\nTools:      VS Code, Anti-Gravity, Git/GitHub, Excel`;
        break;
      case 'projects':
        outputText = `1. PathFinder AI — Intelligent Campus Placement ERP (React, FastAPI, SQLite)\n2. Smart Expense Tracker — Personal Finance System (Python, FastAPI, SQLite)\n3. HealVision AI — Health Tech Platform (NEXATHON 2025 24hr Hackathon)`;
        break;
      case 'education':
        outputText = `• B.E. CSE (AI & ML) — AJIET (CGPA: 8.08 / Expected 2027)\n• PUC (Science) — Expert P.U. College (83%)\n• SSLC — Kendriya Vidyalaya N.O. 1 Panambur (89%)`;
        break;
      case 'contact':
        outputText = `Email:    ${portfolioData.personal.email}\nPhone:    ${portfolioData.personal.phone}\nLinkedIn: ${portfolioData.personal.linkedin}\nLocation: ${portfolioData.personal.location}`;
        break;
      case 'clear':
        setHistory([]);
        return;
      default:
        outputText = `Command not recognized: '${raw}'. Type 'help' to see valid commands.`;
        break;
    }

    setHistory((prev) => [...prev, newEntry, { type: 'output', text: outputText }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    executeCommand(inputVal);
    setInputVal('');
  };

  const copyShellLog = () => {
    const textToCopy = history.map((h) => `${h.type === 'cmd' ? '$ ' : ''}${h.text}`).join('\n');
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  return (
    <div
      style={{
        background: 'rgba(10, 15, 29, 0.85)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(56, 189, 248, 0.25)',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 25px rgba(56, 189, 248, 0.1)',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.84rem',
        maxWidth: '560px',
        width: '100%'
      }}
    >
      {/* Terminal Titlebar */}
      <div
        style={{
          background: 'rgba(16, 24, 44, 0.95)',
          padding: '0.65rem 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
          <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ef4444' }} />
          <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#f59e0b' }} />
          <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#10b981' }} />
          <span style={{ marginLeft: '0.5rem', color: '#94a3b8', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <TerminalIcon size={12} style={{ color: '#38bdf8' }} /> bash — premswaroop@portfolio:~
          </span>
        </div>

        <button
          onClick={copyShellLog}
          title="Copy terminal session"
          style={{
            background: 'transparent',
            border: 'none',
            color: '#64748b',
            cursor: 'pointer',
            padding: '2px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '0.72rem'
          }}
        >
          {copied ? <Check size={13} style={{ color: '#10b981' }} /> : <Copy size={13} />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>

      {/* Terminal Screen Body */}
      <div
        style={{
          padding: '1rem',
          maxHeight: '260px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.45rem'
        }}
      >
        {history.map((item, idx) => (
          <div key={idx} style={{ lineHeight: 1.45 }}>
            {item.type === 'cmd' ? (
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', color: '#38bdf8' }}>
                <span style={{ color: '#10b981' }}>➜</span>
                <span style={{ color: '#a78bfa' }}>~</span>
                <span style={{ color: '#ffffff', fontWeight: 600 }}>{item.text}</span>
              </div>
            ) : item.type === 'system' ? (
              <div style={{ color: '#64748b', fontStyle: 'italic' }}>{item.text}</div>
            ) : (
              <div style={{ color: '#cbd5e1', whiteSpace: 'pre-wrap', paddingLeft: '1rem' }}>{item.text}</div>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Interactive Input Line */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.45rem',
          padding: '0.65rem 1rem',
          background: 'rgba(12, 19, 36, 0.7)',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)'
        }}
      >
        <span style={{ color: '#10b981' }}>➜</span>
        <span style={{ color: '#a78bfa' }}>~</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="type 'help', 'skills', 'projects'..."
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            color: '#f8fafc',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.84rem',
            outline: 'none'
          }}
          aria-label="Terminal command prompt"
        />
        <button
          type="submit"
          style={{
            background: 'rgba(56, 189, 248, 0.15)',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            color: '#38bdf8',
            borderRadius: '4px',
            padding: '2px 6px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center'
          }}
          aria-label="Send command"
        >
          <CornerDownLeft size={13} />
        </button>
      </form>

      {/* Quick Clickable Command Badges */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.45rem',
          padding: '0.5rem 1rem',
          background: 'rgba(7, 10, 20, 0.9)',
          borderTop: '1px solid rgba(255, 255, 255, 0.04)',
          overflowX: 'auto'
        }}
      >
        <span style={{ color: '#64748b', fontSize: '0.72rem' }}>Quick:</span>
        {commandChips.map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => executeCommand(cmd)}
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#94a3b8',
              borderRadius: '999px',
              padding: '2px 8px',
              fontSize: '0.7rem',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.15s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#38bdf8';
              e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#94a3b8';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
};
