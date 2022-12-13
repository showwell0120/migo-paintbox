import React from 'react';

export interface TemplateProps {
  className?: string;
}

interface CommonProps {
  children?: React.ReactNode;
}

export function Wrapper(props: CommonProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        alignItems: 'center',
      }}
    >
      {props.children}
    </div>
  );
}

export function Container(props: CommonProps) {
  return (
    <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
      {props.children}
    </div>
  );
}
