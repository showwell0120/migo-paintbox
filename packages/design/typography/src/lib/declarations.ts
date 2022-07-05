import { CSSProperties, ReactNode } from 'react';

/* eslint-disable-next-line */
export interface TypographyProps {
  clasName?: string;
  style?: Partial<CSSProperties>;
  children?: ReactNode;
}

/* eslint-disable-next-line */
export interface BaseProps extends TypographyProps {
  defaultClassName: string;
}
