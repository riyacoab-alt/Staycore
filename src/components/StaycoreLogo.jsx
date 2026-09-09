import React from 'react';

/**
 * Official Staycore Logo & Emblem Component
 * Extracted directly from brand vector specifications
 * 
 * Props:
 * - iconOnly (boolean): Render only the 3-tower architectural emblem
 * - size ('sm' | 'md' | 'lg' | 'xl'): Scale preset
 * - emblemColor (string): CSS color for the emblem (defaults to pure white #ffffff)
 * - subtitle (string): Subtitle text, defaults to "PROPERTY MANAGEMENT"
 * - className (string): Additional container classes
 */
export default function StaycoreLogo({
  iconOnly = false,
  size = 'md',
  emblemColor = '#ffffff',
  subtitle = 'PROPERTY MANAGEMENT',
  className = ''
}) {
  const iconDimensions = {
    sm: { width: 28, height: 35 },
    md: { width: 36, height: 45 },
    lg: { width: 52, height: 65 },
    xl: { width: 76, height: 95 }
  }[size] || { width: 36, height: 45 };

  const titleSizes = {
    sm: { fontSize: '1.05rem', letterSpacing: '0.12em' },
    md: { fontSize: '1.25rem', letterSpacing: '0.14em' },
    lg: { fontSize: '1.75rem', letterSpacing: '0.16em' },
    xl: { fontSize: '2.4rem', letterSpacing: '0.18em' }
  }[size] || { fontSize: '1.25rem', letterSpacing: '0.14em' };

  const subSizes = {
    sm: { fontSize: '0.52rem', letterSpacing: '0.2em' },
    md: { fontSize: '0.62rem', letterSpacing: '0.22em' },
    lg: { fontSize: '0.78rem', letterSpacing: '0.24em' },
    xl: { fontSize: '0.95rem', letterSpacing: '0.26em' }
  }[size] || { fontSize: '0.62rem', letterSpacing: '0.22em' };

  const emblem = (
    <div
      className="staycore-emblem-wrap"
      style={{
        width: iconDimensions.width,
        height: iconDimensions.height,
        color: emblemColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        transition: 'transform var(--transition-fast)'
      }}
    >
      <svg
        viewBox="285 215 510 650"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%', display: 'block' }}
        aria-hidden="true"
      >
        <path d="M505.98829 826.53128H574.0156V470.84376L505.98829 504.85548V826.53128ZM787.71878 857.59378H673.10159V272.66407L505.98829 356.22267V470.1289L605.0742 420.58204V857.59378H474.92579V520.3867L406.89845 554.39846V857.59378H292.28126V826.53128H375.83595V535.1992L474.92579 485.65626V337.02345L704.16409 222.40625V826.53128H787.71878V857.59378" />
      </svg>
    </div>
  );

  if (iconOnly) {
    return (
      <div className={`staycore-logo-icon-only ${className}`}>
        {emblem}
      </div>
    );
  }

  return (
    <div
      className={`staycore-brand-logo ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: size === 'sm' ? 10 : 14,
        textDecoration: 'none'
      }}
    >
      {emblem}
      <div className="staycore-brand-text" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
        <span
          className="staycore-brand-name"
          style={{
            fontFamily: "var(--font-sans), 'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1,
            ...titleSizes
          }}
        >
          STAYCORE
        </span>
        {subtitle && (
          <span
            className="staycore-brand-sub"
            style={{
              fontFamily: "var(--font-sans), 'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginTop: 4,
              lineHeight: 1,
              ...subSizes
            }}
          >
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
}
