import { Global, css } from '@emotion/react';

export const BaseTypepography = () => (
  <Global
    styles={css`
      * {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        box-sizing: border-box;
      }
      @font-face {
        src: url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap)
          format('woff2');
        unicode-range: U+0100-024f, U+1-1eff, U+20a0-20ab, U+20ad-20cf,
          U+2c60-2c7f, U+A720-A7FF;
      }
    `}
  />
);
