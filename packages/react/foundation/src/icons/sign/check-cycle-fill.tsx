import { SVGProps } from '../../common';
import { defaultIconColor } from '../const';

export function CheckCycleFill({
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
        d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM12.0303 4.96967C11.7374 4.67678 11.2626 4.67678 10.9697 4.96967C10.9626 4.97674 10.9559 4.98424 10.9498 4.9921L7.4774 9.41674L5.38388 7.32322C5.09098 7.03033 4.61611 7.03033 4.32322 7.32322C4.03032 7.61612 4.03032 8.09099 4.32322 8.38388L6.96966 11.0303C7.26256 11.3232 7.73743 11.3232 8.03032 11.0303C8.03685 11.0238 8.043 11.0169 8.04876 11.0097L12.041 6.01947C12.3232 5.72582 12.3196 5.25897 12.0303 4.96967Z"
        fill={stroke}
      />
    </svg>
  );
}
