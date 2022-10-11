import { SVGProps } from '../../common';
import { defaultIconColor } from '../const';

export function ArrowClockwise({
  size = 12,
  stroke = defaultIconColor,
}: SVGProps) {
  const w = Math.floor(size * 1.012);

  return (
    <svg
      width={w}
      height={w * 1.14333333333}
      viewBox="0 0 12 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 2.99992C3.23858 2.99992 1 5.2385 1 7.99992C1 10.7613 3.23858 12.9999 6 12.9999C8.76142 12.9999 11 10.7613 11 7.99992C11 7.25449 10.8372 6.54845 10.5457 5.91426C10.4304 5.66335 10.5403 5.36646 10.7912 5.25113C11.0421 5.1358 11.339 5.24571 11.4543 5.49661C11.8048 6.25915 12 7.10742 12 7.99992C12 11.3136 9.31371 13.9999 6 13.9999C2.68629 13.9999 0 11.3136 0 7.99992C0 4.68621 2.68629 1.99992 6 1.99992V2.99992Z"
        fill={stroke}
      />
      <path
        d="M6 4.46616V0.533681C6 0.321722 6.24721 0.205932 6.41005 0.341626L8.76953 2.30787C8.88947 2.40781 8.88947 2.59203 8.76953 2.69198L6.41005 4.65822C6.24721 4.79391 6 4.67812 6 4.46616Z"
        fill={stroke}
      />
    </svg>
  );
}
