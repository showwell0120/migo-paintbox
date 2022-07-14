import { SVGProps, defaultIconColor } from '../declarations';

export function SortNumberUpAlt({
  size = 13,
  stroke = defaultIconColor,
}: SVGProps) {
  const w = Math.floor(size * 1.012);

  return (
    <svg
      width={w}
      height={w * 1.07692307692}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.3594 6.09766C9.22266 6.09766 8.65234 5.44141 8.59766 4.82031H9.60156C9.66016 5.04297 9.94531 5.26953 10.375 5.26953C11.1992 5.26953 11.5391 4.44141 11.5078 3.41406H11.4492C11.3008 3.80469 10.8789 4.15625 10.1875 4.15625C9.27734 4.15625 8.46875 3.54297 8.46875 2.39844C8.46875 1.25 9.31641 0.5625 10.4414 0.5625C11.5312 0.5625 12.5039 1.19922 12.5039 3.25C12.5039 5.11719 11.7812 6.09766 10.3594 6.09766ZM10.4219 3.36328C10.9258 3.36328 11.3555 3.02734 11.3555 2.39062C11.3555 1.75781 10.957 1.38281 10.4141 1.38281C9.89453 1.38281 9.48828 1.75781 9.48828 2.38281C9.48828 3.02344 9.90625 3.36328 10.4219 3.36328Z"
        fill={stroke}
      />
      <path
        d="M11.4375 7.66797V13H10.3906V8.68359H10.3398L9.12891 9.54297V8.57422L10.3906 7.66797H11.4375Z"
        fill={stroke}
      />
      <path
        d="M3.5 12.5C3.5 12.7761 3.27614 13 3 13C2.72386 13 2.5 12.7761 2.5 12.5L2.5 2.70711L1.35355 3.85355C1.15829 4.04882 0.841709 4.04882 0.646447 3.85355C0.451184 3.65829 0.451184 3.34171 0.646447 3.14645L2.64562 1.14728L2.65303 1.13998C2.69942 1.09524 2.75232 1.06123 2.80861 1.03794C2.86756 1.01349 2.9322 1 3 1C3.06779 1 3.13244 1.01349 3.19139 1.03794C3.25036 1.06234 3.30561 1.09851 3.35355 1.14645L5.35355 3.14645C5.54882 3.34171 5.54882 3.65829 5.35355 3.85355C5.15829 4.04882 4.84171 4.04882 4.64645 3.85355L3.5 2.70711L3.5 12.5Z"
        fill={stroke}
      />
    </svg>
  );
}
