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

export function PlusIcon({ className = "size-7" }: IconProps) {
  return (
    <Icon className={className} strokeWidth={2.2}>
      <path d="M12 5v14M5 12h14" />
    </Icon>
  );
}

export function LayersIcon({ className = "size-7" }: IconProps) {
  return (
    <Icon className={className} strokeWidth={2}>
      <path d="M12 3 3 8l9 5 9-5-9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </Icon>
  );
}

export function ClockIcon({ className = "size-7" }: IconProps) {
  return (
    <Icon className={className} strokeWidth={2}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </Icon>
  );
}

export function MonitorIcon({ className = "size-7" }: IconProps) {
  return (
    <Icon className={className} strokeWidth={2}>
      <rect x="3" y="5" width="18" height="12" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </Icon>
  );
}

export function PhoneIcon({ className = "size-8" }: IconProps) {
  return (
    <Icon className={className} strokeWidth={2}>
      <rect x="6" y="2" width="12" height="20" rx="2.5" />
      <path d="M11 18h2" />
    </Icon>
  );
}

export function ChatIcon({ className = "size-8" }: IconProps) {
  return (
    <Icon className={className} strokeWidth={2}>
      <path d="M4 5h16v11H9l-5 4V5Z" />
    </Icon>
  );
}

export function PoundIcon({ className = "size-8" }: IconProps) {
  return (
    <Icon className={className} strokeWidth={2}>
      <path d="M16 6.5A5 5 0 0 0 8 10v8h9M6 13h7" />
    </Icon>
  );
}

export function LockIcon({ className = "size-4" }: IconProps) {
  return (
    <Icon className={className} strokeWidth={2.2}>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
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
