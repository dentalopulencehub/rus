export function ICAEWLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 133"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Silhouette figure with staff */}
      <g transform="translate(5, 10)">
        {/* Pedestal base */}
        <rect x="2" y="105" width="42" height="6" fill="black" />

        {/* Head */}
        <ellipse cx="23" cy="15" rx="6" ry="7" fill="black" />

        {/* Hair/head detail */}
        <path
          d="M17 12 C17 10 19 8 23 8 C27 8 29 10 29 12 C29 14 28 16 27 17 L27 15 C27 13 25 12 23 12 C21 12 19 13 19 15 L19 17 C18 16 17 14 17 12 Z"
          fill="black"
        />

        {/* Figure silhouette - woman in classical dress */}
        <path
          d="M21 22 L21 42 C21 42 20 45 19 49 C18 53 17 60 16 68 L16 88 C15 95 13 102 11 108 L11 105 L18 105 C19 100 20 95 21 90 L21 65 L25 65 L25 90 C26 95 27 100 28 105 L35 105 L35 108 C33 102 31 95 30 88 L30 68 C29 60 28 53 27 49 C26 45 25 42 25 42 L25 22 C25 22 27 22 27 20 C27 18 23 18 23 18 C23 18 19 18 19 20 C19 22 21 22 21 22 Z"
          fill="black"
        />

        {/* Staff in left hand */}
        <line x1="19" y1="40" x2="13" y2="105" stroke="black" strokeWidth="2.5" />

        {/* Striped dress pattern */}
        <path
          d="M19 58 L16 68 M22 58 L19 68 M25 58 L22 68 M28 58 L25 68"
          stroke="black"
          strokeWidth="1.2"
        />

        {/* Red checkmark */}
        <path
          d="M27 42 L33 50 L45 30"
          stroke="#E31E24"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>

      {/* ICAEW text */}
      <text
        x="70"
        y="55"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="48"
        fontWeight="900"
        fill="black"
        letterSpacing="-1"
      >
        ICAEW
      </text>

      {/* CHARTERED text */}
      <text
        x="70"
        y="85"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="24"
        fontWeight="900"
        fill="black"
        letterSpacing="0"
      >
        CHARTERED
      </text>

      {/* ACCOUNTANTS text */}
      <text
        x="70"
        y="110"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="24"
        fontWeight="900"
        fill="black"
        letterSpacing="0"
      >
        ACCOUNTANTS
      </text>
    </svg>
  );
}
