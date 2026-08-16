export function OperationsMap() {
  return (
    <div className="operations-map" aria-label="Abstract tactical operations map">
      <svg viewBox="0 0 720 520" role="img">
        <title>Abstract tactical operations map</title>
        <defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="currentColor" strokeOpacity=".12"/></pattern></defs>
        <rect width="720" height="520" fill="url(#grid)"/>
        <path className="map-terrain" d="M-20 410C95 350 120 420 230 330s190-20 250-100 150-80 270-140"/>
        <path className="map-road" d="M50 40c90 120 65 220 190 250s170 0 260 100 130 50 190 90"/>
        <rect className="map-zone" x="278" y="156" width="188" height="188"/>
        <circle className="map-pulse" cx="372" cy="250" r="38"/>
        <path className="map-cross" d="M372 222v56M344 250h56"/>
        <g className="map-marker"><circle cx="148" cy="142" r="10"/><path d="m148 116 16 16M148 116l-16 16"/></g>
        <g className="map-marker"><circle cx="560" cy="365" r="10"/><path d="m560 339 16 16M560 339l-16 16"/></g>
        <text x="34" y="480">SECTOR 04 / CONTROL ZONE</text><text x="520" y="52">OPERATIONAL OVERVIEW</text>
      </svg>
      <div className="map-readout"><span>100 PLAYERS</span><span>3 TEAMS</span><span>FIRST TO 100</span></div>
    </div>
  );
}

export type GuideVisualVariant = "playtest" | "beginner" | "economy";

export function GuideVisual({ variant }: { variant: GuideVisualVariant }) {
  return <div className={`guide-visual guide-visual-${variant}`} aria-label={`${variant} editorial visual`}>
    {variant === "playtest" && <svg viewBox="0 0 640 360" role="img"><title>Closed Beta operational calendar</title><defs><pattern id="playtest-grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0H0V32" fill="none" stroke="currentColor" strokeOpacity=".12"/></pattern></defs><rect width="640" height="360" fill="url(#playtest-grid)"/><path className="gv-route" d="M26 296 142 202l108 25 113-126 112 34 140-88"/><circle className="gv-pulse" cx="363" cy="101" r="34"/><g className="gv-calendar"><rect x="62" y="54" width="202" height="190"/><path d="M62 102h202M112 38v32M214 38v32"/><text x="91" y="158">AUG</text><text x="91" y="218">21—23</text></g><text className="gv-label" x="422" y="270">CLOSED BETA</text><text className="gv-small" x="422" y="297">ACCESS WINDOW / 2026</text></svg>}
    {variant === "beginner" && <svg viewBox="0 0 640 360" role="img"><title>Abstract river and residential battlefield</title><defs><pattern id="terrain-grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0H0V32" fill="none" stroke="currentColor" strokeOpacity=".08"/></pattern></defs><rect width="640" height="360" fill="url(#terrain-grid)"/><path className="gv-river" d="M-30 264C84 170 169 300 284 217S472 90 672 130"/><path className="gv-road" d="M-10 326 186 158l148 17L514 26"/><g className="gv-buildings"><path d="M82 89h92v62H82zM97 72l62 17H82zM438 229h110v70H438zM458 207l90 22H438z"/><path d="M202 64h64v47h-64zM530 62h54v48h-54z"/></g><rect className="gv-zone" x="272" y="112" width="152" height="152"/><g className="gv-squad"><circle cx="324" cy="190" r="9"/><circle cx="351" cy="207" r="9"/><circle cx="378" cy="180" r="9"/></g><text className="gv-label" x="28" y="324">RIVER / RESIDENTIAL SECTOR</text></svg>}
    {variant === "economy" && <svg viewBox="0 0 640 360" role="img"><title>Editorial tactical economy diagram</title><defs><pattern id="economy-grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0H0V32" fill="none" stroke="currentColor" strokeOpacity=".1"/></pattern></defs><rect width="640" height="360" fill="url(#economy-grid)"/><path className="gv-econ-line" d="M110 180h115m70 0h90m70 0h74"/><g className="gv-econ-node"><circle cx="78" cy="180" r="44"/><text x="78" y="190">$</text><rect x="225" y="138" width="70" height="84"/><path d="M240 161h40M240 178h40M240 195h25"/><path d="m385 207 22-54h48l21 54M398 175h65"/><circle cx="407" cy="210" r="12"/><circle cx="457" cy="210" r="12"/><path d="M529 147h68v66h-68zM547 127h32v20M547 165h32M563 147v66"/></g><text className="gv-small" x="41" y="252">CASH</text><text className="gv-small" x="218" y="252">LOADOUT</text><text className="gv-small" x="393" y="252">VEHICLE</text><text className="gv-small" x="526" y="252">DEPLOY</text><text className="gv-label" x="28" y="326">PERSISTENT TACTICAL ECONOMY</text></svg>}
  </div>;
}

export function BattlefieldBriefing() {
  return <figure className="battlefield-briefing"><GuideVisual variant="beginner"/><figcaption><span>FIELD ORIENTATION</span><strong>One wider battlefield. One randomized Control Zone.</strong><small>Original editorial illustration — not an in-game screenshot.</small></figcaption></figure>;
}

export function ControlZoneDiagram() {
  return <div className="control-zone-diagram" aria-label="Control Zone match structure diagram"><div><span>256 KM²</span><small>Wider battlefield</small></div><b>CONTAINS</b><div className="zone-focus"><span>2×2 KM</span><small>Randomized Control Zone</small></div><b>→</b><div><span>100 PTS</span><small>First team to target</small></div></div>;
}

export function EconomyDiagram() {
  const nodes = [
    ["EARN CASH", "Revive · Transport · Control"],
    ["PERSIST", "Cash carries across matches"],
    ["LOADOUT", "Weapons · Equipment"],
    ["VEHICLES", "Combat or transport choices"],
    ["DEPLOY / SPEND", "Choose how to contribute"],
  ];
  return <div className="economy-diagram" aria-label="WARDOGS cash economy loop">
    <p className="diagram-label">TACTICAL ECONOMY LOOP</p>
    <div className="economy-flow">{nodes.map(([title, text], index) => <div className="economy-node" key={title}><span>0{index + 1}</span><strong>{title}</strong><small>{text}</small>{index < nodes.length - 1 && <b aria-hidden="true">→</b>}</div>)}</div>
    <p className="diagram-note">Cash carries across matches. The exact value of individual rewards has not been published.</p>
  </div>;
}

const tacticalLoopSteps = [
  ["01", "Deploy", "Enter with a chosen loadout"],
  ["02", "Fight / Support", "Combat, transport, or team action"],
  ["03", "Objective", "Contest the Control Zone"],
  ["04", "Earn Cash", "Contribution can fund the next choice"],
  ["05", "Equip", "Loadout · Equipment · Vehicles"],
  ["06", "Redeploy", "Return with a new tactical decision"],
] as const;

export function TacticalLoopVisual() {
  return <div className="tactical-loop-visual" aria-label="WARDOGS tactical decision loop">
    <svg className="tactical-loop-connections" viewBox="0 0 1200 520" aria-hidden="true" preserveAspectRatio="none">
      <path className="tactical-loop-route-primary" d="M150 128H1050V392H150V128"/>
      <path className="tactical-loop-route-secondary" d="M600 92V428"/>
      <path className="tactical-loop-direction" d="m430 120 16 8-16 8z"/>
      <path className="tactical-loop-direction" d="m1042 244 8 16-16-8z"/>
      <path className="tactical-loop-direction" d="m770 384-16 8 16 8z"/>
      <path className="tactical-loop-direction" d="m142 276 8-16 8 16z"/>
      <g className="tactical-loop-anchor">
        <circle cx="150" cy="128" r="8"/><circle cx="600" cy="128" r="8"/><circle cx="1050" cy="128" r="8"/>
        <circle cx="1050" cy="392" r="8"/><circle cx="600" cy="392" r="8"/><circle cx="150" cy="392" r="8"/>
      </g>
      <g className="tactical-loop-annotation">
        <text x="180" y="92">ENTRY / DEPLOY</text>
        <text x="820" y="92">CONTRIBUTION ROUTE</text>
        <text x="748" y="438">EQUIP / RETURN</text>
        <text x="176" y="438">LOOP CONTINUES</text>
      </g>
    </svg>
    <div className="tactical-loop-grid">
      {tacticalLoopSteps.map(([number, title, description]) => <article className="tactical-loop-node" key={number}>
        <span>{number}</span><div><strong>{title}</strong><small>{description}</small></div>
      </article>)}
    </div>
    <div className="tactical-loop-core"><span>PERSISTENT CASH</span><strong>Every deployment carries a choice.</strong><small>Editorial mechanism diagram — not an in-game interface.</small></div>
  </div>;
}
