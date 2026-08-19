const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconStructure(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 20h18M5 20V9l7-4 7 4v11M9 20v-6h6v6" />
    </svg>
  )
}

export function IconWeld(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 17l6-6M14 4l6 6-9 9H4v-7z" />
      <path d="M13 5l1.5-1.5M16 8l1.5-1.5" strokeWidth={1.2} />
    </svg>
  )
}

export function IconLathe(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="8" cy="12" r="4" />
      <path d="M12 12h9M17 9v6M20 10v4" />
    </svg>
  )
}

export function IconElectric(props) {
  return (
    <svg {...base} {...props}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
    </svg>
  )
}

export function IconPlate(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="5" rx="0.5" />
      <rect x="3" y="11" width="18" height="5" rx="0.5" />
      <path d="M3 20h18" strokeDasharray="2 3" />
    </svg>
  )
}

export function IconGear(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M4.2 7.8l2.6 1.5M17.2 14.7l2.6 1.5M4.2 16.2l2.6-1.5M17.2 9.3l2.6-1.5M21 12h-3M6 12H3" />
    </svg>
  )
}

export function IconCamera(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 8h3l1.5-2h7L17 8h3v11H4z" />
      <circle cx="12" cy="13.5" r="3.2" />
    </svg>
  )
}

export function IconArrowUpRight(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  )
}

export function IconMapPin(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  )
}

export function IconWhatsApp(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.36a9.9 9.9 0 0 0 4.62 1.14h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.02c-.24.68-1.4 1.3-1.93 1.37-.5.07-1.07.1-3.03-.65-2.55-1-4.2-3.6-4.33-3.77-.13-.16-1.04-1.38-1.04-2.63 0-1.26.66-1.87.9-2.13.24-.25.52-.32.7-.32.17 0 .35 0 .5.01.16.01.38-.06.6.46.24.57.8 1.98.87 2.12.07.15.11.32.02.5-.09.19-.14.3-.28.46-.14.16-.29.36-.42.48-.14.13-.28.28-.12.55.16.27.72 1.19 1.55 1.93 1.06.94 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.27.36-.22.6-.13.24.09 1.53.72 1.79.85.27.13.44.2.5.31.07.12.07.66-.17 1.34z" />
    </svg>
  )
}

export function IconArrowUp(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  )
}

export function IconMail(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="m4 6.5 8 6 8-6" />
    </svg>
  )
}

export function IconPhone(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4h3l1.5 4-2 1.3a11 11 0 0 0 5.2 5.2L14 12.5l4 1.5v3a1 1 0 0 1-1 1c-7.2 0-13-5.8-13-13a1 1 0 0 1 1-1z" />
    </svg>
  )
}

export function IconMenu(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  )
}

export function IconClose(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  )
}
