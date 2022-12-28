import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { v4 as uuidv4 } from 'uuid';
import { Text } from '@paintbox/react-foundation';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const inputStyle = css`
  &[type="radio"] {
    -webkit-appearance: none;
    appearance: none;
    background-color: var(--primary-transparent);
    margin: 5px;
    font: inherit;
    width: 18px;
    height: 18px;
    border: 2px solid var(--primary-primary);
    color: var(--primary-primary);
    border-radius: 50%;
    display: grid;
    place-content: center;
    &::before {
      content: "";
      width: 10px;
      height: 10px;
      border-radius: 50%;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em var(--primary-primary);
    }
    &:checked::before {
      transform: scale(1);
    }
    &:hover {
      cursor: pointer;
    }
`;

const labelStyle = css`
  margin: 0 8px;
`;

/* eslint-disable-next-line */
export interface ReactRadioProps {
  label: string,
  checked: boolean,
  name: string,
  value: string,
  onChange: (val: string) => void,
}

export function ReactRadio({label, checked, name, value, onChange}: ReactRadioProps) {
  const id = React.useMemo(() => uuidv4(), []);
  
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange && onChange(e.target.value);
  }

  return (
    <Container>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        css={inputStyle}
        onChange={handleChange}
      />
      <label css={labelStyle} htmlFor={id}>
        <Text style={{ color: 'var(--text-body)' }}>{label}</Text>
      </label>
    </Container>
  );
}
