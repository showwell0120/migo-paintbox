import styled from '@emotion/styled';
import { ClassNames } from '@emotion/react';

import { TypographyProps } from './common';

const BaseText = styled.div`
  font-size: 0.875rem;
`;

export const Text = ({ className, ...props }: TypographyProps) => (
  <ClassNames>
    {({ css, cx }) => <BaseText className={cx(css``, className)} {...props} />}
  </ClassNames>
);

export const BText = ({ className, ...props }: TypographyProps) => (
  <ClassNames>
    {({ css, cx }) => (
      <BaseText
        className={cx(
          css`
            font-weight: 700;
          `,
          className
        )}
        {...props}
      />
    )}
  </ClassNames>
);

export const IText = ({ className, ...props }: TypographyProps) => (
  <ClassNames>
    {({ css, cx }) => (
      <BaseText
        className={cx(
          css`
            font-style: italic;
          `,
          className
        )}
        {...props}
      />
    )}
  </ClassNames>
);

export const UText = ({ className, ...props }: TypographyProps) => (
  <ClassNames>
    {({ css, cx }) => (
      <BaseText
        className={cx(
          css`
            text-decoration-line: underline;
          `,
          className
        )}
        {...props}
      />
    )}
  </ClassNames>
);

export const DText = ({ className, ...props }: TypographyProps) => (
  <ClassNames>
    {({ css, cx }) => (
      <BaseText
        className={cx(
          css`
            text-decoration-line: line-through;
          `,
          className
        )}
        {...props}
      />
    )}
  </ClassNames>
);

export const PText = ({ className, ...props }: TypographyProps) => (
  <ClassNames>
    {({ css, cx }) => (
      <BaseText
        className={cx(
          css`
            font-size: 0.75rem;
          `,
          className
        )}
        {...props}
      />
    )}
  </ClassNames>
);
