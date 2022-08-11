import { SVGProps } from '../../common';
import { defaultIconColor } from '../const';

export function ExclamationCycleFill({
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
        d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM8 4C7.46459 4 7.04623 4.46229 7.0995 4.99504L7.45025 8.50248C7.47849 8.78492 7.71616 9 8 9C8.28384 9 8.52151 8.78492 8.54975 8.50248L8.9005 4.99504C8.95377 4.46228 8.53541 4 8 4ZM8.00154 10C7.44926 10 7.00154 10.4477 7.00154 11C7.00154 11.5523 7.44926 12 8.00154 12C8.55383 12 9.00154 11.5523 9.00154 11C9.00154 10.4477 8.55383 10 8.00154 10Z"
        fill={stroke}
      />
    </svg>
  );
}