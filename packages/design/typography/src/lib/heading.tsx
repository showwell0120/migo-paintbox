import classNames from 'classnames/bind';

import { TypographyProps, BaseProps } from './declarations';
import styles from './typography.module.scss';

const cx = classNames.bind(styles);

function HeadingBase({
  clasName,
  style,
  children,
  defaultClassName,
}: BaseProps) {
  return (
    <div
      className={cx(styles['heading-base'], defaultClassName, clasName)}
      style={style}
    >
      {children && children}
    </div>
  );
}

export const H1 = (props: TypographyProps) => (
  <HeadingBase defaultClassName={styles['h1']} {...props} />
);

export const H2 = (props: TypographyProps) => (
  <HeadingBase defaultClassName={styles['h2']} {...props} />
);

export const H3 = (props: TypographyProps) => (
  <HeadingBase defaultClassName={styles['h3']} {...props} />
);

export const H4 = (props: TypographyProps) => (
  <HeadingBase defaultClassName={styles['h4']} {...props} />
);

export const H5 = (props: TypographyProps) => (
  <HeadingBase defaultClassName={styles['h5']} {...props} />
);

export const H6 = (props: TypographyProps) => (
  <HeadingBase defaultClassName={styles['h6']} {...props} />
);
