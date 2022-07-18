import { SVGProps } from '../declarations';

// TODO:
export function VisibilityOn({ size = 23, stroke = 'red' }: SVGProps) {
  const w = Math.floor(size * 1.012);

  return (
    <svg
      width={w}
      height={w * 0.86956521739}
      viewBox="0 0 23 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5 4.5C14.26 4.5 16.5 6.74 16.5 9.5C16.5 10.15 16.37 10.76 16.14 11.33L19.06 14.25C20.57 12.99 21.76 11.36 22.49 9.5C20.76 5.11 16.49 2 11.49 2C10.09 2 8.75 2.25 7.51 2.7L9.67 4.86C10.24 4.63 10.85 4.5 11.5 4.5ZM1.5 1.77L3.78 4.05L4.24 4.51C2.58 5.8 1.28 7.52 0.5 9.5C2.23 13.89 6.5 17 11.5 17C13.05 17 14.53 16.7 15.88 16.16L16.3 16.58L19.23 19.5L20.5 18.23L2.77 0.5L1.5 1.77ZM7.03 7.3L8.58 8.85C8.53 9.06 8.5 9.28 8.5 9.5C8.5 11.16 9.84 12.5 11.5 12.5C11.72 12.5 11.94 12.47 12.15 12.42L13.7 13.97C13.03 14.3 12.29 14.5 11.5 14.5C8.74 14.5 6.5 12.26 6.5 9.5C6.5 8.71 6.7 7.97 7.03 7.3ZM11.34 6.52L14.49 9.67L14.51 9.51C14.51 7.85 13.17 6.51 11.51 6.51L11.34 6.52Z"
        fill={stroke}
        fill-opacity="0.54"
      />
    </svg>
  );
}
