import React from 'react';
import { ClassNames } from '@emotion/react';

import { ColorThemeType, Variant, SignIcons } from '@paintbox/react-foundation';

/* eslint-disable-next-line */
export interface ReactTagProps {
  children: React.ReactNode;
  variant: Variant;
  theme: ColorThemeType;
  className?: string;
  hasBorder?: boolean;

  onClose?: () => void;
  onClick?: () => void;
}

export const ReactTag: React.FC<ReactTagProps> = ({
  children,
  variant,
  theme,
  className,
  hasBorder = variant === 'contained' ? false : true,
  onClose,
  onClick,
}) => {
  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose?.();
  };

  return (
    <ClassNames>
      {({ css, cx }) => (
        <div
          className={cx(
            css`
              border-radius: 4px;
              font-size: 14px;
              line-height: 1.5;
              padding: 2px 10px;
              width: fit-content;
              white-space: nowrap;
              overflow: hidden;
              cursor: ${onClick ? 'pointer' : 'default'};
              display: flex;
              align-items: center;
              gap: 0.45rem;
              border: 1px solid transparent;
            `,
            `${theme}-${variant}`,
            hasBorder && `has-bd`,
            className
          )}
          onClick={onClick ? onClick : undefined}
        >
          {children}
          {onClose && (
            <div onClick={handleClose}>
              <SignIcons.X height={10} width={10} />
            </div>
          )}
        </div>
      )}
    </ClassNames>
  );
};
