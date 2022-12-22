import styled from '@emotion/styled';
import { css } from '@emotion/react';
import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outlined';

export type ButtonTheme =
  | 'brand'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info';

/* eslint-disable-next-line */
export interface ReactButtonProps {
  children: React.ReactNode;
  theme?: ButtonTheme;
  variant?: ButtonVariant;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = styled.button<ReactButtonProps>(
  css`
    border: 1px solid;
    border-radius: 4px;
    padding: 12px 16px;
    transition: all 0.5s;
    cursor: pointer;
  `,
  (props: ReactButtonProps) => {
    return props.disabled
      ? `
        border-color: var(--text-muted);
        color: var(--text-muted);
        background-color: var(--primary-transparent);
        cursor: not-allowed;
      `
      : `
      background-color: ${
        props.variant === 'outlined'
          ? 'transparent'
          : `var(--${props.variant}-${props.theme})`
      };
      color: ${
        props.variant === 'primary'
          ? 'var(--primary-white)'
          : `var(--primary-${props.theme})`
      };
      border-color: ${
        props.variant === 'primary'
          ? `var(--primary-white)`
          : `var(--primary-${props.theme})`
      };
      &:hover {
        background-color: ${
          props.variant === 'primary'
            ? `var(--secondary-${props.theme})`
            : `var(--primary-${props.theme})`
        };
        color: ${
          props.variant === 'primary'
            ? `var(--primary-${props.theme})`
            : `var(--primary-white)`
        };
        border-color: ${
          props.variant === 'primary'
            ? `var(--primary-${props.theme})`
            : `var(--primary-white)`
        };
      }
      `;
  }
);

export const ReactButton: React.FC<ReactButtonProps> = ({
  children,
  theme = 'primary',
  variant = 'primary',
  disabled = false,
  onClick,
}) => {
  function handleClick() {
    !disabled && onClick?.();
  }

  return (
    <Button
      theme={theme}
      variant={variant}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

