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
  'default-default': 'var(--primary-primary)',
  'default-outlined': 'transparent',
  'default-light': '#eff2ff',
  'red-default': 'var(--primary-danger)',
  'red-outlined': 'transparent',
  'red-light': '#f8d6d9',
  'gray-default': 'var(--primary-secondary)',
  'gray-outlined': 'transparent',
  'gray-light': '#f0f1f2',
};

type colorKeyType = keyof typeof backgroundColors;

const textColors = {
  'default-default': 'var(--primary-white)',
  'default-outlined': 'var(--primary-primary)',
  'default-light': 'var(--primary-primary)',
  'red-default': 'var(--primary-white)',
  'red-outlined': 'var(--primary-danger)',
  'red-light': 'var(--primary-danger)',
  'gray-default': '#FBFBFB',
  'gray-outlined': 'var(--primary-secondary)',
  'gray-light': 'var(--primary-secondary)',
};

const borderColors = {
  'default-default': 'var(--primary-primary)',
  'default-outlined': 'var(--primary-primary)',
  'default-light': '#eff2ff',
  'red-default': 'var(--primary-danger)',
  'red-outlined': 'var(--primary-danger)',
  'red-light': '#f8d6d9',
  'gray-default': 'var(--primary-secondary)',
  'gray-outlined': 'var(--primary-secondary)',
  'gray-light': '#f0f1f2',
};

const hoverBgColors = {
  'default-default': '#7390ff',
  'default-outlined': '#eff2ff',
  'default-light': '#e0e6ff',
  'red-default': 'var(--primary-danger)',
  'red-outlined': '#fbeaec',
  'red-light': '#f4c2c7',
  'gray-default': '#899097',
  'gray-outlined': '#f0f1f2',
  'gray-light': '#e2e4e6',
};

const hoverBorderColors = {
  'default-default': '#7390ff',
  'default-outlined': 'var(--primary-primary)',
  'default-light': '#e0e6ff',
  'red-default': 'var(--primary-danger)',
  'red-outlined': 'var(--primary-danger)',
  'red-light': '#f4c2c7',
  'gray-default': '#899097',
  'gray-outlined': 'var(--primary-secondary)',
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