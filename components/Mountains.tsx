// Layered Himalayan ridgeline used at the bottom of hero sections.
export default function Mountains({ fill = "var(--bg)" }: { fill?: string }) {
  return (
    <svg className="mountains" viewBox="0 0 1440 220" preserveAspectRatio="none" aria-hidden>
      <path fill="rgba(255,255,255,0.06)" d="M0 140 L120 70 L220 120 L360 30 L500 110 L620 60 L760 130 L900 40 L1040 120 L1180 50 L1320 110 L1440 70 V220 H0Z" />
      <path fill="rgba(255,255,255,0.1)" d="M0 170 L160 110 L300 160 L440 90 L600 150 L740 100 L880 160 L1020 95 L1180 150 L1320 105 L1440 140 V220 H0Z" />
      <path fill={fill} d="M0 200 L200 160 L380 195 L560 150 L760 190 L960 155 L1160 195 L1320 165 L1440 185 V220 H0Z" />
    </svg>
  );
}
