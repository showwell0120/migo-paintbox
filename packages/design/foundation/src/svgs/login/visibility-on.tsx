import { SVGProps } from '../declarations';

export function VisibilityOn({ size = 25, stroke = 'black' }: SVGProps) {
  const w = Math.floor(size * 1.012);

  return (
    <svg
      width={w}
      height={w * 0.68}
      viewBox="0 0 25 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.2683 8.5C16.2683 10.5711 14.5894 12.25 12.5183 12.25C10.4472 12.25 8.76831 10.5711 8.76831 8.5C8.76831 6.42893 10.4472 4.75 12.5183 4.75C14.5894 4.75 16.2683 6.42893 16.2683 8.5Z"
        fill="black"
        fill-opacity="0.5"
      />
      <path
        d="M0.518311 8.5C0.518311 8.5 5.01831 0.25 12.5183 0.25C20.0183 0.25 24.5183 8.5 24.5183 8.5C24.5183 8.5 20.0183 16.75 12.5183 16.75C5.01831 16.75 0.518311 8.5 0.518311 8.5ZM12.5183 13.75C15.4178 13.75 17.7683 11.3995 17.7683 8.5C17.7683 5.6005 15.4178 3.25 12.5183 3.25C9.61882 3.25 7.26831 5.6005 7.26831 8.5C7.26831 11.3995 9.61882 13.75 12.5183 13.75Z"
        fill="black"
        fill-opacity="0.5"
      />
    </svg>
  );
}
