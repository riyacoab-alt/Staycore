import React from 'react';

export default function Toast({ message, onDismiss }) {
  if (!message) return null;

  return (
    <div className="toast-notice" role="alert">
      <span
        style={{
          display: 'inline-block',
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: 'var(--accent-sage-light)',
          boxShadow: '0 0 8px var(--accent-sage-light)'
        }}
      />
      <span>{message}</span>
    </div>
  );
}
