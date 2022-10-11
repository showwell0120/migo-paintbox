import { SVGProps } from '../../common';
import { defaultIconColor } from '../const';

export function BoxArrowDownRight({
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.63636 12.5C8.63636 12.7761 8.41251 13 8.13636 13H1.5C0.671572 13 0 12.3284 0 11.5V1.5C0 0.671572 0.671573 0 1.5 0H11.5C12.3284 0 13 0.671573 13 1.5V8.13636C13 8.41251 12.7761 8.63636 12.5 8.63636C12.2239 8.63636 12 8.41251 12 8.13636V1.5C12 1.22386 11.7761 1 11.5 1H1.5C1.22386 1 1 1.22386 1 1.5V11.5C1 11.7761 1.22386 12 1.5 12H8.13636C8.41251 12 8.63636 12.2239 8.63636 12.5Z"
        fill={stroke}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16 15.5C16 15.7761 15.7761 16 15.5 16H10.5C10.2239 16 10 15.7761 10 15.5C10 15.2239 10.2239 15 10.5 15H14.2929L6.14645 6.85355C5.95118 6.65829 5.95118 6.34171 6.14645 6.14645C6.34171 5.95118 6.65829 5.95118 6.85355 6.14645L15 14.2929V10.5C15 10.2239 15.2239 10 15.5 10C15.7761 10 16 10.2239 16 10.5V15.5Z"
        fill={stroke}
      />
    </svg>
  );
}
