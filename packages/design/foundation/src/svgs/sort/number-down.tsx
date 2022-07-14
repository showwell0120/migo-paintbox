import { SVGProps, defaultIconColor } from '../declarations';

export function SortNumberDown({
  size = 13,
  stroke = defaultIconColor,
}: SVGProps) {
  const w = Math.floor(size * 1.012);

  return (
    <svg
      width={w}
      height={w * 1.07692307692}
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.4375 0.667969V6H10.3906V1.68359H10.3398L9.12891 2.54297V1.57422L10.3906 0.667969H11.4375Z"
        fill={stroke}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.3594 13.0977C9.22266 13.0977 8.65234 12.4414 8.59766 11.8203H9.60156C9.66016 12.043 9.94531 12.2695 10.375 12.2695C11.1992 12.2695 11.5391 11.4414 11.5078 10.4141H11.4492C11.3008 10.8047 10.8789 11.1562 10.1875 11.1562C9.27734 11.1562 8.46875 10.543 8.46875 9.39844C8.46875 8.25 9.31641 7.5625 10.4414 7.5625C11.5312 7.5625 12.5039 8.19922 12.5039 10.25C12.5039 12.1172 11.7812 13.0977 10.3594 13.0977ZM10.4219 10.3633C10.9258 10.3633 11.3555 10.0273 11.3555 9.39062C11.3555 8.75781 10.957 8.38281 10.4141 8.38281C9.89453 8.38281 9.48828 8.75781 9.48828 9.38281C9.48828 10.0234 9.90625 10.3633 10.4219 10.3633Z"
        fill={stroke}
      />
      <path
        d="M3.5 1.5C3.5 1.22386 3.27614 1 3 1C2.72386 1 2.5 1.22386 2.5 1.5L2.5 11.2929L1.35355 10.1464C1.15829 9.95118 0.841709 9.95118 0.646447 10.1464C0.451184 10.3417 0.451184 10.6583 0.646447 10.8536L2.6456 12.8527L2.65303 12.86C2.69942 12.9048 2.75232 12.9388 2.80861 12.9621C2.86756 12.9865 2.9322 13 3 13C3.06779 13 3.13244 12.9865 3.19139 12.9621C3.25036 12.9377 3.30561 12.9015 3.35355 12.8536L5.35355 10.8536C5.54882 10.6583 5.54882 10.3417 5.35355 10.1464C5.15829 9.95118 4.84171 9.95118 4.64645 10.1464L3.5 11.2929L3.5 1.5Z"
        fill={stroke}
      />
    </svg>
  );
}
