import { SVGProps, defaultIconColor } from '../declarations';

export function CameraReelsFill({ size = 16, stroke = defaultIconColor }: SVGProps) {
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
        d="M6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3Z"
        fill={stroke}
      />
      <path
        d="M9 6C7.34315 6 6 4.65685 6 3C6 1.34315 7.34315 0 9 0C10.6569 0 12 1.34315 12 3C12 4.65685 10.6569 6 9 6Z"
        fill={stroke}
      />
      <path
        d="M9 6H9.5C10.5158 6 11.3548 6.75732 11.483 7.73817L14.5939 6.35557C15.2551 6.06166 16 6.54572 16 7.26938V14.7306C16 15.4543 15.2551 15.9383 14.5939 15.6444L11.483 14.2618C11.3548 15.2427 10.5158 16 9.5 16H2C0.89543 16 0 15.1046 0 14V8C0 6.89543 0.89543 6 2 6H3H9Z"
        fill={stroke}
      />
    </svg>
  );
}