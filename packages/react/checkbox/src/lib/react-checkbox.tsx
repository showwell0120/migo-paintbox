import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { v4 as uuidv4 } from 'uuid';

import { Text } from '@paintbox/react-foundation';

/* eslint-disable-next-line */
export interface ReactCheckboxProps {
  checked: boolean;
  label?: string;
  onChange: (checked: boolean) => void;
}

const Container = styled.div`
  width: 100%;
  min-width: 300px;
  font-size: 0.875rem;
  letter-spacing: 0.15px;
`;

const labelStyle = css`
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding-left: 24px;
`;

const inputStyle = css`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  &:checked {
    /* Show the checkmark when checked */
    ~ span {
      &::after {
        display: block;
        left: 5px;
        top: 2px;
        width: 4px;
        height: 8px;
        border: solid var(--primary);
        border-width: 0 2px 2px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }
  }
`;

const spanStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 16px;
  background-color: var(--transparent);
  border: solid 1px var(--text-body);
  border-radius: 3px;
  /* Create the checkmark/indicator (hidden when not checked) */
  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`;

export const ReactCheckbox = ({
  checked,
  label = '',
  onChange,
}: ReactCheckboxProps) => {
  const id = React.useMemo(() => uuidv4(), []);

  const handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    onChange && onChange(e.currentTarget.checked);
  };

  return (
    <Container>
      <label css={labelStyle} htmlFor={id}>
        <Text style={{ color: 'var(--text-body)' }}>{label}</Text>
        <input
          type="checkbox"
          id={id}
          css={inputStyle}
          checked={checked}
          onChange={handleChange}
        />
        {/* custom checkbox */}
        <span css={spanStyle} />
      </label>
    </Container>
  );
};

export const CheckboxSample = ({ label }: { label?: string }) => {
  const [checked, setChecked] = React.useState<boolean>(false);
  return (
    <ReactCheckbox checked={checked} onChange={setChecked} label={label} />
  );
};
