import styled from '@emotion/styled';
import { ClassNames } from '@emotion/react';
import { ColorThemeType } from '@paintbox/react-foundation';

interface DotProps {
  theme: ColorThemeType;
}
const Dot = styled.div<DotProps>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 6px;
  background-color: ${(props: DotProps) =>
    `var(--primary-${props.theme.split('-')[1]})`};
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
`;

/* eslint-disable-next-line */
export interface ReactChipProps {
  children: React.ReactNode;
  theme?: ColorThemeType;
  dot?: boolean;

  onClick?: () => void;
}

export const ReactChip: React.FC<ReactChipProps> = ({
  children,
  theme = 'secondary-primary',
  dot = true,
  onClick,
}) => {
  return (
    <div {...(onClick && { onClick })}>
      <ClassNames>
        {({ css, cx }) => (
          <div
            className={cx(
              css`
                border-radius: 16px;
                display: inline-flex;
                justify-content: flex-start;
                align-items: center;
                padding: 2px 12px;
                font-size: 14px;
                line-height: 1.5;
                white-space: nowrap;
                cursor: ${onClick ? 'pointer' : 'default'};
              `,
              `${theme}-contained`
            )}
          >
            {dot && <Dot theme={theme} />}
            {children}
          </div>
        )}
      </ClassNames>
    </div>
  );
};