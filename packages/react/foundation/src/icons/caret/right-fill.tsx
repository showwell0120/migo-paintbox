import { SVGProps } from '../../common';
import { defaultIconColor } from '../const';

export function CaretRightFill({
  size = 8,
  stroke = defaultIconColor,
}: SVGProps) {
  const w = Math.floor(size * 1.012);

  return (
    <svg
      width={w}
      height={w * 1.5}
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.13991 6.75262L1.6585 11.5488C1.01192 12.1146 0 11.6554 0 10.7963L0 1.20381C0 0.344649 1.01192 -0.11453 1.6585 0.45123L7.13991 5.24746C7.59524 5.64587 7.59524 6.3542 7.13991 6.75262Z"
        fill={stroke}
      />
    </svg>
  );
}
