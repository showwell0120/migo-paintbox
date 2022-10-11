import { SVGProps } from '../../common';
import { defaultIconColor } from '../const';

export function BoxArrowUpLeft({
  size = 16,
  stroke = defaultIconColor,
}: SVGProps) {
  const w = Math.floor(size * 1.012);

  return (
    <svg
      width={w}
      height={w}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.36364 3.5C7.36364 3.22386 7.58749 3 7.86364 3H14.5C15.3284 3 16 3.67157 16 4.5V14.5C16 15.3284 15.3284 16 14.5 16H4.5C3.67157 16 3 15.3284 3 14.5V7.86364C3 7.58749 3.22386 7.36364 3.5 7.36364C3.77614 7.36364 4 7.58749 4 7.86364V14.5C4 14.7761 4.22386 15 4.5 15H14.5C14.7761 15 15 14.7761 15 14.5V4.5C15 4.22386 14.7761 4 14.5 4H7.86364C7.58749 4 7.36364 3.77614 7.36364 3.5Z"
        fill={stroke}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0.5C0 0.223858 0.223858 0 0.5 0H5.5C5.77614 0 6 0.223858 6 0.5C6 0.776142 5.77614 1 5.5 1H1.70711L9.85355 9.14645C10.0488 9.34171 10.0488 9.65829 9.85355 9.85355C9.65829 10.0488 9.34171 10.0488 9.14645 9.85355L1 1.70711V5.5C1 5.77614 0.776142 6 0.5 6C0.223858 6 0 5.77614 0 5.5V0.5Z"
        fill={stroke}
      />
    </svg>
  );
}