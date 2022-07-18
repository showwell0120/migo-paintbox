import { SVGProps } from '../declarations';

export function Username({ size = 17, stroke = 'black' }: SVGProps) {
  const w = Math.floor(size * 1.012);

  return (
    <svg
      width={w}
      height={w}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.75 8.5C10.96 8.5 12.75 6.71 12.75 4.5C12.75 2.29 10.96 0.5 8.75 0.5C6.54 0.5 4.75 2.29 4.75 4.5C4.75 6.71 6.54 8.5 8.75 8.5ZM8.75 10.5C6.08 10.5 0.75 11.84 0.75 14.5V16.5H16.75V14.5C16.75 11.84 11.42 10.5 8.75 10.5Z"
        fill={stroke}
        fill-opacity="0.54"
      />
    </svg>
  );
}
