import React from 'react';
import { ClassNames } from '@emotion/react';

import { Variant, ColorThemeType } from '@paintbox/react-foundation';
import { ComponentBaseProps } from '@paintbox/react-base';
import classNames from 'classnames';

/* eslint-disable-next-line */
export interface ReactButtonProps extends ComponentBaseProps {
  children: React.ReactNode;

  theme?: ColorThemeType;
  variant?: Variant;
  disabled?: boolean;
  onClick?: () => void;
}

export const ReactButton: React.FC<ReactButtonProps> = ({
  children,
  theme = 'primary-primary',
  variant = 'contained',
  disabled = false,
  onClick,
  className,
  style,
}) => {
  function handleClick() {
    !disabled && onClick?.();
  }

  return (
    <ClassNames>
      {({ css, cx }) => {
        const themeType = theme.split('-')[0];
        const themeVar = theme.split('-')[1];

        return (
          <button
            onClick={handleClick}
            {...(style && { style })}
            className={cx(
              css`
                border: 1px solid;
                border-radius: 4px;
                padding: 12px 16px;
                transition: all 0.5s;
                cursor: pointer;
              `,
              !disabled
                ? `${theme}-${variant}`
                : css`
                    border-color: var(--text-muted);
                    color: var(--text-muted);
                    background-color: var(--primary-transparent);
                    cursor: not-allowed;
                    svg {
                      path {
                        fill: var(--text-muted);
                      }
                    }
                  `,
              !disabled &&
                themeType !== 'app' &&
                css`
                  &:hover {
                    background-color: ${themeType === 'primary'
                      ? `var(--secondary-${themeVar})`
                      : `var(--primary-${themeVar})`};
                    color: ${themeType === 'primary'
                      ? `var(--primary-${themeVar})`
                      : `var(--primary-white)`};
                    border-color: ${themeType === 'primary'
                      ? `var(--primary-${themeVar})`
                      : `var(--primary-white)`};
                    svg {
                      path {
                        fill: ${themeType === 'primary'
                          ? `var(--primary-${themeVar})`
                          : `var(--primary-white)`};
                      }
                    }
                  }
                `,
              className
            )}
          >
            {children}
          </button>
        );
      }}
    </ClassNames>
  );
};
