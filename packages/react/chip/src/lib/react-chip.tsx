import styled from '@emotion/styled';

export type ChipTheme =
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'primary';

interface DotProps {
  theme: ChipTheme;
}
const Dot = styled.div<DotProps>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 6px;
  background-color: ${(props: DotProps) => `var(--primary-${props.theme})`};
`;
interface ContainerProps extends DotProps {
  clickable: boolean;
}
const Container = styled.div<ContainerProps>`
  border-radius: 16px;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2px 12px;
  font-size: 14px;
  line-height: 1.5;
  cursor: ${(props: ContainerProps) =>
    props.clickable ? 'pointer' : 'default'};
  color: ${(props: ContainerProps) => `var(--primary-${props.theme})`};
  background-color: ${(props: ContainerProps) =>
    `var(--secondary-${props.theme})`};
  svg {
    path {
      fill: ${(props: ContainerProps) => `var(--primary-${props.theme})`};
    }
  }
`;

/* eslint-disable-next-line */
export interface ReactChipProps {
  children: React.ReactNode;
  theme?: ChipTheme;
  dot?: boolean;
  onClick?: () => void;
}

export const ReactChip: React.FC<ReactChipProps> = ({
  children,
  theme = 'secondary',
  dot = true,
  onClick,
}) => {
  return (
    <div {...(onClick && { onClick })}>
      <Container clickable={onClick ? true : false} theme={theme}>
        {dot && <Dot theme={theme} />}
        {children}
      </Container>
    </div>
  );
};