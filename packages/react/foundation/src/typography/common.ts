import { CSSProperties, ReactNode } from 'react';
import { css } from '@emotion/react';

/* eslint-disable-next-line */
export interface TypographyProps {
  className?: string;
  style?: Partial<CSSProperties>;
  children?: ReactNode;
}
