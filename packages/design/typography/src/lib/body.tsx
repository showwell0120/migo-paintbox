import classNames from 'classnames/bind';

import { TypographyProps, BaseProps } from './declarations';
import styles from './typography.module.scss';

const cx = classNames.bind(styles);

function BodyBase({ clasName, style, children, defaultClassName }: BaseProps) {
  return (
    <div
      className={cx(styles['body-base'], defaultClassName, clasName)}
      style={style}
    >
      {children && children}
    </div>
  );
}

export const Text = (props: TypographyProps) => (
  <BodyBase defaultClassName={styles['normal']} {...props} />
);

export const BText = (props: TypographyProps) => (
  <BodyBase defaultClassName={styles['bold']} {...props} />
);

export const IText = (props: TypographyProps) => (
  <BodyBase defaultClassName={styles['italicized']} {...props} />
);

export const UText = (props: TypographyProps) => (
  <BodyBase defaultClassName={styles['underlined']} {...props} />
);

export const DText = (props: TypographyProps) => (
  <BodyBase defaultClassName={styles['deleted']} {...props} />
);

export const PText = (props: TypographyProps) => (
  <BodyBase defaultClassName={styles['print']} {...props} />
);
