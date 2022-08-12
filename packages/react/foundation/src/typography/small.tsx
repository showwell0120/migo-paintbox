import styled from '@emotion/styled';
import { ClassNames } from '@emotion/react';

import { TypographyProps } from './common';

const BaseSmall = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
`;

export const Small = ({ className, ...props }: TypographyProps) => (
  <ClassNames>
    {({ css, cx }) => <BaseSmall className={cx(css``, className)} {...props} />}
  </ClassNames>
);

export const BSmall = ({ className, ...props }: TypographyProps) => (
  <ClassNames>
    {({ css, cx }) => (
      <BaseSmall
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

export const ISmall = ({ className, ...props }: TypographyProps) => (
  <ClassNames>
    {({ css, cx }) => (
      <BaseSmall
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

export const USmall = ({ className, ...props }: TypographyProps) => (
  <ClassNames>
    {({ css, cx }) => (
      <BaseSmall
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

export const DSmall = ({ className, ...props }: TypographyProps) => (
  <ClassNames>
    {({ css, cx }) => (
      <BaseSmall
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

export const PSmall = ({ className, ...props }: TypographyProps) => (
  <ClassNames>
    {({ css, cx }) => (
      <BaseSmall
        className={cx(
          css`
            font-size: 0.625rem;
          `,
          className
        )}
        {...props}
      />
    )}
  </ClassNames>
);
