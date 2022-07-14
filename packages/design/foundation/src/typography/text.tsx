import classNames from 'classnames/bind';

import { TypographyProps, BaseProps } from './declarations';
import styles from './typography.module.scss';

const cx = classNames.bind(styles);

function TextBase({ className, style, children, defaultClassName }: BaseProps) {
  return (
    <div
      className={cx(styles['text-base'], defaultClassName, className)}
      style={style}
    >
      {children && children}
    </div>
  );
}

export const Text = (props: TypographyProps) => (
  <TextBase defaultClassName={styles['normal']} {...props} />
);

export const BText = (props: TypographyProps) => (
  <TextBase defaultClassName={styles['bold']} {...props} />
);

export const IText = (props: TypographyProps) => (
  <TextBase defaultClassName={styles['italicized']} {...props} />
);

export const UText = (props: TypographyProps) => (
  <TextBase defaultClassName={styles['underlined']} {...props} />
);

export const DText = (props: TypographyProps) => (
  <TextBase defaultClassName={styles['deleted']} {...props} />
);

export const PText = (props: TypographyProps) => (
  <TextBase defaultClassName={styles['print']} {...props} />
);

export const Small = (props: TypographyProps) => (
  <TextBase
    defaultClassName={cx(styles['normal'], styles['small'])}
    {...props}
  />
);

export const BSmall = (props: TypographyProps) => (
  <TextBase defaultClassName={cx(styles['bold'], styles['small'])} {...props} />
);

export const ISmall = (props: TypographyProps) => (
  <TextBase
    defaultClassName={cx(styles['italicized'], styles['small'])}
    {...props}
  />
);

export const USmall = (props: TypographyProps) => (
  <TextBase
    defaultClassName={cx(styles['underlined'], styles['small'])}
    {...props}
  />
);

export const DSmall = (props: TypographyProps) => (
  <TextBase
    defaultClassName={cx(styles['deleted'], styles['small'])}
    {...props}
  />
);

export const PSmall = (props: TypographyProps) => (
  <TextBase
    defaultClassName={cx(styles['print'], styles['small'])}
    {...props}
  />
);
