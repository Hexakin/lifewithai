type IconProps = {
  className?: string;
};

function Icon({
  className,
  strokeWidth = 2.4,
  children,
}: IconProps & { strokeWidth?: number; children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

export function ArrowIcon({ className = "size-5" }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Icon>
  );
}

export function CheckIcon({ className = "size-5" }: IconProps) {
  return (
    <Icon className={className} strokeWidth={2.6}>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </Icon>
  );
}

export function CrossIcon({ className = "size-4" }: IconProps) {
  return (
    <Icon className={className} strokeWidth={2.6}>
      <path d="M6 6l12 12M18 6L6 18" />
    </Icon>
  );
}

export function MenuIcon({ className = "size-6" }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Icon>
  );
}

export function PencilIcon({ className = "size-6" }: IconProps) {
  return (
    <Icon className={className} strokeWidth={2}>
      <path d="M4 20h4L19 9l-4-4L4 16v4Z" />
      <path d="m13.5 6.5 4 4" />
    </Icon>
  );
}
