import styled from '@emotion/styled';

const Container = styled.div<{ backgroundColor: string, clickable: boolean }>`
  min-width: 70px;
  border-radius: 16px;
  background-color: $base-color;
  color: $base-text-color;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2px 12px;
  cursor: ${(props: { clickable: boolean }) => props.clickable ? 'pointer' : 'default'};
  background-color: ${(props: { backgroundColor: string }) => props.backgroundColor};
`;

const bgColor = 'rgba(0, 0, 0, 0.08)';
const textColor = '#000';

const Dot = styled.div<{ backgroundColor: string }>(
  {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: bgColor,
    marginRight: '5px'
  },
  (props: { backgroundColor: string }) => ({
    backgroundColor: props.backgroundColor,
  })
);

const Icon = styled.div<{ color: string }>(
  {
    color: textColor,
    marginRight: '5px',
  },
  (props: { color: string }) => ({
    color: props.color,
  })
);

const Text = styled.div<{ color: string }>(
  {
    zIndex: '2',
    fontSize: '14px',
    lineHeight: '1.5'
  },
  (props: { color: string }) => ({
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
  const { text: textColor, background: backgroundColor } = getColor(color);

  return (
    <div onClick={clickable && onClick ? onClick : undefined}>
      <Container clickable={clickable} backgroundColor={backgroundColor}>
        {dot && (<Dot backgroundColor={textColor} />)}
        {icon && (<Icon color={textColor}>{icon}</Icon>)}
        <Text color={textColor}>{children}</Text>
      </Container>
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
