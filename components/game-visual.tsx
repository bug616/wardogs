export type GameVisualId =
  | "home-hero-river-squad"
  | "home-beginner-battlefield"
  | "home-playtest-squad-smoke"
  | "home-cash-helicopter-transport"
  | "home-control-zone-overview"
  | "beginner-battlefield-overlook"
  | "playtest-three-team-deployment"
  | "cash-logistics-deployment";

const visualAlt: Record<GameVisualId, string> = {
  "home-hero-river-squad": "WARDOGS squad moving through a river valley toward an industrial battlefield",
  "home-beginner-battlefield": "First-person WARDOGS view across a muddy road toward a contested village",
  "home-playtest-squad-smoke": "WARDOGS infantry squad advancing through smoke during a battlefield deployment",
  "home-cash-helicopter-transport": "WARDOGS soldiers boarding a helicopter for battlefield transport",
  "home-control-zone-overview": "Official WARDOGS trailer graphic showing teams fighting for the Control Zone",
  "beginner-battlefield-overlook": "First-person WARDOGS view overlooking the wide industrial mountain battlefield",
  "playtest-three-team-deployment": "WARDOGS gameplay trailer frame showing a three-team infantry deployment",
  "cash-logistics-deployment": "WARDOGS logistics area with vehicles and equipment prepared for deployment",
};

export function GameVisual({
  id,
  className = "",
  priority = false,
  sizes = "(max-width: 640px) calc(100vw - 48px), 960px",
}: {
  id: GameVisualId;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const base = `/images/wardogs/${id}`;
  return <div className={`game-visual ${className}`.trim()}>
    <picture>
      <source media="(max-width: 640px)" type="image/avif" srcSet={`${base}-mobile-430.avif 430w, ${base}-mobile-860.avif 860w`} sizes={sizes}/>
      <source media="(max-width: 640px)" type="image/webp" srcSet={`${base}-mobile-430.webp 430w, ${base}-mobile-860.webp 860w`} sizes={sizes}/>
      <source type="image/avif" srcSet={`${base}-desktop-960.avif 960w, ${base}-desktop-1440.avif 1440w`} sizes={sizes}/>
      <source type="image/webp" srcSet={`${base}-desktop-960.webp 960w, ${base}-desktop-1440.webp 1440w`} sizes={sizes}/>
      <img
        src={`${base}-desktop-960.webp`}
        srcSet={`${base}-desktop-960.webp 960w, ${base}-desktop-1440.webp 1440w`}
        sizes={sizes}
        width="1440"
        height="810"
        alt={visualAlt[id]}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
      />
    </picture>
  </div>;
}
