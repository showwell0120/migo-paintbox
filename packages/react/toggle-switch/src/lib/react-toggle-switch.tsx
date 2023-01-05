import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { ColorThemeType, Small } from '@paintbox/react-foundation';

/* eslint-disable-next-line */
export interface ReactToggleSwitchProps {
  checked: boolean;
  theme: Extract<ColorThemeType, 'primary-primary' | 'primary-success'>;
  disable?: boolean;
  onText?: string;
  offText?: string;

  onChange: (checked: boolean) => void;
}

const Container = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
`;

interface SliderProps {
  disable: boolean;
}
const Slider = styled.span<SliderProps>`
  position: absolute;
  cursor: ${(props: SliderProps) =>
    props.disable ? 'not-allowed' : 'pointer'};
  background-color: var(
    --${(props: SliderProps) => (props.disable ? 'gray-400' : 'primary-muted')}
  );
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
  &:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 4px;
    top: 4px;
    background-color: var(--primary-white);
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const inputStyle = css`
  opacity: 0;
  width: 0;
  height: 0;
`;

const checkedSliderStyle = css`
  &:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

export function ReactToggleSwitch({
  checked,
  theme,
  disable = false,
  onText = '',
  offText = '',
  onChange,
}: ReactToggleSwitchProps) {
  const handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    !disable && onChange(e.currentTarget.checked);
  };

  return (
    <Container>
      {offText && <Small>{offText}</Small>}
      <Label>
        <input
          type="checkbox"
          css={inputStyle}
          checked={checked}
          onChange={handleChange}
        />
        <Slider
          disable={disable}
          css={[
            checked && checkedSliderStyle,
            checked &&
              css`
                background-color: var(--${theme});
              `,
          ]}
        />
      </Label>
      {onText && <Small>{onText}</Small>}
    </Container>
  );
}

