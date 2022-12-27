export interface SVGProps {
  size?: number;
  fill?: string;
  stroke?: string;
}

export type Variant = 'contained' | 'outlined';

// @see https://stackoverflow.com/questions/59857223/how-to-convert-typescript-types-of-strings-to-array-of-strings
export const ColorThemes = [
  'app-red',
  'app-critical',
  'app-success',
  'app-warning',
  'app-decorative-red',
  'app-decorative-blue',
  'app-decorative-purple',
  'app-background-black',
  'app-background-blue',
  'primary-brand',
  'primary-primary',
  'primary-secondary',
  'primary-muted',
  'primary-success',
  'primary-danger',
  'primary-warning',
  'primary-info',
  'primary-light',
  'primary-hover',
  'primary-dark',
  'primary-transparent',
  'secondary-brand',
  'secondary-primary',
  'secondary-secondary',
  'secondary-muted',
  'secondary-success',
  'secondary-danger',
  'secondary-warning',
  'secondary-info',
] as const;

export type ColorThemeType = typeof ColorThemes[number];
