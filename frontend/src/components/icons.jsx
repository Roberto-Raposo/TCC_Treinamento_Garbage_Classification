export function RecycleIcon({ className = "w-6 h-6", color = "currentColor" }) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill={color}>
      <path d="M236.8 204a23.9 23.9 0 01-20.8 12h-56v16a8 8 0 01-4.9 7.4 8.5 8.5 0 01-3.1.6 8.3 8.3 0 01-5.7-2.3l-24-24.1a7.9 7.9 0 01-2.3-5.6 8.1 8.1 0 012.3-5.7l24-24a8.4 8.4 0 018.8-1.7 8 8 0 014.9 7.4v16h56a7.9 7.9 0 006.9-4 7.8 7.8 0 000-8l-24-41.4a8 8 0 0113.9-8l23.9 41.4a23.7 23.7 0 01.1 24ZM88 200H40a7.9 7.9 0 01-6.9-4 7.8 7.8 0 010-8l28-48.3 13.9 8a8 8 0 004 1.1 7.8 7.8 0 004.8-1.7 8 8 0 002.9-8.4l-8.8-32.8a8.1 8.1 0 00-3.7-4.8 7.7 7.7 0 00-6.1-.8L35.3 109a8 8 0 00-5.8 6.7 7.9 7.9 0 003.9 8l13.8 8L19.3 180A23.9 23.9 0 0040 216h48a8 8 0 000-16Zm40-168a7.8 7.8 0 016.9 4l28 48.3-13.8 8a7.9 7.9 0 001.9 14.6l32.8 8.8 2 .3a8.1 8.1 0 007.8-5.9l8.8-32.8a8.1 8.1 0 00-2.9-8.5 8 8 0 00-8.9-.5l-13.9 8L148.8 28a24 24 0 00-41.6 0L83.3 69.4a8 8 0 1013.8 8l24-41.4a7.8 7.8 0 016.9-4Z" />
    </svg>
  );
}

export function UploadCloudIcon({ className = "w-16 h-16", color = "#2F7A4B" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M7 18a4 4 0 01-1-7.874A5.5 5.5 0 0116.9 8.1 4.5 4.5 0 0116.5 18H7z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M12 11v6m0-6l-2.5 2.5M12 11l2.5 2.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TrashIcon({ className = "w-5 h-5", color = "#C0392B" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 7h16M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2m-8 0l1 12a1 1 0 001 1h6a1 1 0 001-1l1-12"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TargetIcon({ className = "w-6 h-6", color = "#1B4D33" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="8" stroke={color} strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4.5" stroke={color} strokeWidth="1.5" />
      <circle cx="12" cy="12" r="1" fill={color} />
    </svg>
  );
}

export function MonitorIcon({ className = "w-6 h-6", color = "#1B4D33" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="4" width="18" height="12" rx="1.5" stroke={color} strokeWidth="1.5" />
      <path d="M8 20h8M12 16v4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
