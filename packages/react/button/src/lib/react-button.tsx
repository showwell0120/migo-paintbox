import styled from '@emotion/styled';
import { css } from '@emotion/react';
import React from 'react';

type ColorType = 'default' | 'gray' | 'red';

type VariantType = 'default' | 'light' | 'outlined';

type colorProps = {
  variant: VariantType,
  color: ColorType,
  disabled: boolean,
}

const backgroundColors = {
  'default-default': 'var(--primary)',
  'default-outlined': 'transparent',
  'default-light': '#eff2ff',
  'red-default': 'var(--danger)',
  'red-outlined': 'transparent',
  'red-light': '#f8d6d9',
  'gray-default': 'var(--secondary)',
  'gray-outlined': 'transparent',
  'gray-light': '#f0f1f2',
};

type colorKeyType = keyof typeof backgroundColors;

const textColors = {
  'default-default': 'var(--white)',
  'default-outlined': 'var(--primary)',
  'default-light': 'var(--primary)',
  'red-default': 'var(--white)',
  'red-outlined': 'var(--danger)',
  'red-light': 'var(--danger)',
  'gray-default': '#FBFBFB',
  'gray-outlined': 'var(--secondary)',
  'gray-light': 'var(--secondary)',
};

const borderColors = {
  'default-default': 'var(--primary)',
  'default-outlined': 'var(--primary)',
  'default-light': '#eff2ff',
  'red-default': 'var(--danger)',
  'red-outlined': 'var(--danger)',
  'red-light': '#f8d6d9',
  'gray-default': 'var(--secondary)',
  'gray-outlined': 'var(--secondary)',
  'gray-light': '#f0f1f2',
};

const hoverBgColors = {
  'default-default': '#7390ff',
  'default-outlined': '#eff2ff',
  'default-light': '#e0e6ff',
  'red-default': 'var(--danger)',
  'red-outlined': '#fbeaec',
  'red-light': '#f4c2c7',
  'gray-default': '#899097',
  'gray-outlined': '#f0f1f2',
  'gray-light': '#e2e4e6',
};

const hoverBorderColors = {
  'default-default': '#7390ff',
  'default-outlined': 'var(--primary)',
  'default-light': '#e0e6ff',
  'red-default': 'var(--danger)',
  'red-outlined': 'var(--danger)',
  'red-light': '#f4c2c7',
  'gray-default': '#899097',
  'gray-outlined': 'var(--secondary)',
  'gray-light': '#e2e4e6',
};

const baseStyle = css`
  border: 1px solid;
  border-radius: 4px;
  padding: 12px 16px;
  transition: all .5s;
  cursor: pointer;
`;

const disableStyle = css`
  color: #bebebe;
  background-color: #eeeeee;
  cursor: not-allowed;
  border: none;
`;

const Button = styled.button<colorProps>(
  baseStyle,
  (props: colorProps) => {
    const colorKey: colorKeyType = `${props.color}-${props.variant}`;
    return props.disabled ? disableStyle : `
    background-color: ${backgroundColors[colorKey]};
    color: ${textColors[colorKey]};
    border-color: ${borderColors[colorKey]}; 
    &:hover {
      background-color: ${hoverBgColors[colorKey]};
      color: ${textColors[colorKey]};
      border-color: ${hoverBorderColors[colorKey]};
    }
  `}
  );

/* eslint-disable-next-line */
export interface ReactButtonProps {
  color?: ColorType,
  variant?: VariantType,
  disabled?: boolean,
  children?: React.ReactNode,
  onClick?: () => void,
}

export const ReactButton: React.FC<ReactButtonProps> = ({
  color = 'default',
  variant = 'default',
  disabled = false,
  children,
  onClick
}) => {
  function clickHandler() {
    if (!disabled && onClick) {
      onClick();
    }
  }

  return (
    <Button
      color={color}
      variant={variant}
      disabled={disabled}
      onClick={clickHandler}
    >
      {children}
    </Button>
  );
}

export const ButtonSample = () => {
  const onClick = () => {
    alert('You just clicked me!');
  };

  return (
    <div style={{ gap: '8px', display: 'flex' }}>
      <ReactButton onClick={onClick}>Default</ReactButton>
      <ReactButton color={'gray'} onClick={onClick}>Gray</ReactButton>
      <ReactButton color={'red'} onClick={onClick}>Red</ReactButton>
    </div>
  );
};

export const OutlinedButtonSample = () => {
  return (
    <div style={{ gap: '8px', display: 'flex' }}>
      <ReactButton variant={'outlined'}>Default</ReactButton>
      <ReactButton variant={'outlined'} color={'gray'}>Gray</ReactButton>
      <ReactButton variant={'outlined'} color={'red'}>Red</ReactButton>
    </div>
  );
};

export const DisabledButtonSample = () => {
  return (
    <div>
      <ReactButton disabled={true}>Disabled</ReactButton>
    </div>
  );
};

export const LightButtonSample = () => {
  return (
    <div style={{ gap: '8px', display: 'flex' }}>
      <ReactButton variant={'light'}>Default</ReactButton>
      <ReactButton variant={'light'} color={'gray'}>Gray</ReactButton>
      <ReactButton variant={'light'} color={'red'}>Red</ReactButton>
    </div>
  );
};