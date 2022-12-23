import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';

const rotate = keyframes`
  0% { 
    transform: rotate(0deg); 
  }
  100% { 
    transform: rotate(360deg); 
  }
`;

/* eslint-disable-next-line */
export interface ReactSpinnerProps {}

export function ReactSpinner(props: ReactSpinnerProps) {
  return (
    <div
      css={css`
        margin: auto;
        border: 3px solid var(--primary-transparent);
        width: 48px;
        height: 48px;
        display: inline-block;
        border-radius: 50%;
        border-right: 4px solid var(--primary-brand);
        text-align: center;
        animation-name: ${rotate};
        animation-duration: 700ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      `}
    />
  );
}
