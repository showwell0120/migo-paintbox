import { SVGProps } from '../../common';
import { defaultIconColor } from '../const';

export function SortAlphaUpAlt({
  size = 13,
  stroke = defaultIconColor,
}: SVGProps) {
  const w = Math.floor(size * 1.012);

  return (
    <svg
      width={w}
      height={w}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9609 6H8.02734V5.30859L10.6055 1.58984V1.53516H8.09766V0.667969H11.8828V1.35938L9.31641 5.07812V5.13281H11.9609V6Z"
        fill={stroke}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.08203 11.6289L8.66406 13H7.59766L9.38672 7.66797H10.6211L12.4023 13H11.2812L10.8633 11.6289H9.08203ZM10.6523 10.8438L10 8.6875H9.95312L9.30078 10.8438H10.6523Z"
        fill={stroke}
      />
      <path
        d="M3.5 12.5C3.5 12.7761 3.27614 13 3 13C2.72386 13 2.5 12.7761 2.5 12.5L2.5 2.70711L1.35355 3.85355C1.15829 4.04882 0.841709 4.04882 0.646447 3.85355C0.451184 3.65829 0.451184 3.34171 0.646447 3.14645L2.64562 1.14728L2.65303 1.13998C2.69942 1.09524 2.75232 1.06123 2.80861 1.03794C2.86756 1.01349 2.9322 1 3 1C3.06779 1 3.13244 1.01349 3.19139 1.03794C3.25036 1.06234 3.30561 1.09851 3.35355 1.14645L5.35355 3.14645C5.54882 3.34171 5.54882 3.65829 5.35355 3.85355C5.15829 4.04882 4.84171 4.04882 4.64645 3.85355L3.5 2.70711L3.5 12.5Z"
        fill={stroke}
      />
    </svg>
  );
}
