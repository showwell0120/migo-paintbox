import styled from '@emotion/styled';
import { ClassNames } from '@emotion/react';

import { TypographyProps } from './common';

const BaseHeading = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
`;

interface HeadingProps extends TypographyProps {
  size: number;
}

const Heading = ({ className, size, ...props }: HeadingProps) => (
  <ClassNames>
    {({ css, cx }) => (
      <BaseHeading
        className={cx(
          css`
            font-size: ${size}rem;
          `,
          className
        )}
        {...props}
      />
    )}
  </ClassNames>
);

export const H1 = (props: TypographyProps) => (
  <Heading {...props} size={1.75} />
);

export const H2 = (props: TypographyProps) => <Heading size={1.5} {...props} />;

export const H3 = (props: TypographyProps) => (
  <Heading size={1.25} {...props} />
);

export const H4 = (props: TypographyProps) => (
  <Heading size={1.125} {...props} />
);

export const H5 = (props: TypographyProps) => <Heading size={1} {...props} />;

export const H6 = (props: TypographyProps) => (
  <Heading size={0.875} {...props} />
);
