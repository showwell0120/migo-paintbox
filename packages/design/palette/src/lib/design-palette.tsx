import styles from './design-palette.module.scss';

/* eslint-disable-next-line */
export interface DesignPaletteProps {}

export function DesignPalette(props: DesignPaletteProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DesignPalette!</h1>
    </div>
  );
}

export default DesignPalette;
