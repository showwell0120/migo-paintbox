import { SVGProps, defaultIconColor } from '../declarations';

export function CaretLeftFill({
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
        d="M0.860087 6.75262L6.3415 11.5488C6.98808 12.1146 8 11.6554 8 10.7963V1.20381C8 0.344649 6.98808 -0.11453 6.3415 0.45123L0.860088 5.24746C0.40476 5.64587 0.40476 6.3542 0.860087 6.75262Z"
        fill={stroke}
      />
    </svg>
  );
}
