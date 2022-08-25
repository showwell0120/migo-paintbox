import { css } from '@emotion/react';

const containerStyle = css`
  border-radius: 4px;
  background-color: #e9ecef;
  font-size: 14px;
  padding: 2px 10px;
  min-height: 1rem;
  margin-right: 8px;
  border: 1px solid transparent;
  width: fit-content;
`;

const borderStyle = css`
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

type TextColorType = 'white' | 'default';
type BackgoundColorType = 'red' | 'blue' | 'purple' | 'default';

function getTextColor(type?: TextColorType) {
  switch (type) {
    case 'white':
      return '#ffffff';
    default:
      return '#000000';
  }
}

function getBackgroundColor(type?: BackgoundColorType) {
  switch (type) {
    case 'red':
      return '#E02828';
    case 'purple':
      return '#9C27B0';
    case 'blue':
      return '#3453DA';
    default:
      return '#E9ECEF';
  }
}

/* eslint-disable-next-line */
export interface ReactTagProps {
  text: string;
  colorType?: TextColorType;
  bgColorType?: BackgoundColorType;
  hasBorder?: boolean;
}

export const ReactTag: React.FC<ReactTagProps> = ({
  text,
  colorType = 'default',
  bgColorType = 'default',
  hasBorder,
}) => {
  const color = getTextColor(colorType);
  const backgroundColor = getBackgroundColor(bgColorType);

  return (
    <div
      css={[containerStyle, hasBorder && borderStyle, { color, backgroundColor }]}
    >
      {text}
    </div>
  );
};

export const TagSample = () => {
  return (
    <div>
      <ReactTag text={'test'} />
    </div>
  );
};

export const ColorTagSample = () => {
  return (
    <div>
      <ReactTag
        text={'test'}
        colorType={'white'}
        bgColorType={'blue'}
        hasBorder={true}
      />
    </div>
  );
};