import styled from '@emotion/styled';
import { css } from '@emotion/react';

type cssProp = { 
  backgroundColor?: string,
  color?: string,
}

const containerStyle = css`
  min-width: 70px;
  border-radius: 16px;
  background-color: $base-color;
  color: $base-text-color;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2px 12px;
  cursor: default;
`;

const clickableStyle = css`
  cursor: pointer;
`;

const bgColor = 'rgba(0, 0, 0, 0.08)';
const textColor = '#000';

const Dot = styled.div(
  {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: bgColor,
    marginRight: '5px'
  },
  (props: cssProp) => ({
    backgroundColor: props.backgroundColor,
  })
);

const Icon = styled.div(
  {
    color: textColor,
    marginRight: '5px',
  },
  (props: cssProp) => ({
    color: props.color,
  })
);

const Text = styled.div(
  {
    zIndex: '2',
    fontSize: '14px',
    lineHeight: '1.5'
  },
  (props: cssProp) => ({
    color: props.color,
  })
);

type ColorType = 'green' | 'red' | 'blue' | 'white';
interface ColorSetting {
  text: string;
  background: string;
}

function getColor(type: ColorType): ColorSetting {
  switch (type) {
    case 'green':
      return {
        text: '#007F00',
        background: '#CDFFCD',
      };
    case 'red':
      return {
        text: '#D30000',
        background: '#FFE0E0',
      };
    case 'blue':
      return {
        text: '#4B6DF4',
        background: 'rgba(100, 144, 255, 0.2)',
      };
    case 'white':
      return {
        text: '#000000',
        background: '#ffffff',
      };
    default:
      return {
        text: '#000000',
        background: '#EAEAEA',
      };
  }
}

/* eslint-disable-next-line */
export interface ReactChipProps {
  color: ColorType;
  children?: React.ReactNode;
  dot?: boolean;
  icon?: React.ReactNode;
  clickable?: boolean;
  onClick?: () => void;
}

export const ReactChip: React.FC<ReactChipProps> = ({
  color,
  children,
  dot = true,
  icon,
  clickable = false,
  onClick,
}) => {
  const colors = getColor(color);

  return (
    <div onClick={clickable && onClick ? onClick : undefined}>
      <div
        css={[containerStyle, clickable && clickableStyle, {backgroundColor: colors.background}]}
      >
        {dot && (<Dot backgroundColor={colors.text} />)}
        {icon && (<Icon color={colors.text}>{icon}</Icon>)}
        <Text color={colors.text}>{children}</Text>
      </div>
    </div>
  );
};

export const ChipSample = () => {
  return (
    <div>
      <ReactChip color={'red'}>Inactive</ReactChip>
    </div>
  );
};

export const ChipWithoutDotSample = () => {
  const handleClick = () => {
    alert('Clicked!');
  };

  return (
    <div>
      <ReactChip
        color={'green'}
        dot={false}
        clickable={true}
        onClick={handleClick}
      >No dot chip</ReactChip>
    </div>
  );
};
