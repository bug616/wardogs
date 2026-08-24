"use client";

import { useEffect, useRef } from "react";

type AdsterraOptions = {
  key: string;
  format: "iframe";
  height: number;
  width: number;
  params: Record<string, never>;
};

type AdUnit = {
  id: string;
  key: string;
  height: number;
  width: number;
  scriptUrl: string;
};

const mobileUnit: AdUnit = {
  id: "30902242",
  key: "b00f4a1dafed788b9db970f6f31d70bf",
  height: 250,
  width: 300,
  scriptUrl:
    "https://www.highrevenueformat.com/b00f4a1dafed788b9db970f6f31d70bf/invoke.js",
};

const desktopUnit: AdUnit = {
  id: "30902243",
  key: "c0f91e0a1a1f5fa266f8303658bad41c",
  height: 90,
  width: 728,
  scriptUrl:
    "https://www.highrevenueformat.com/c0f91e0a1a1f5fa266f8303658bad41c/invoke.js",
};

export function AdsterraBanner() {
  const slotRef = useRef<HTMLDivElement>(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    const slot = slotRef.current;

    if (!slot || loadedRef.current) return;

    loadedRef.current = true;
    const unit = window.matchMedia("(min-width: 900px)").matches
      ? desktopUnit
      : mobileUnit;
    const adWindow = window as typeof window & {
      atOptions?: AdsterraOptions;
    };

    slot.dataset.adsterraUnitId = unit.id;
    slot.dataset.adsterraSize = `${unit.width}x${unit.height}`;
    slot.dataset.adsterraScriptStatus = "loading";

    adWindow.atOptions = {
      key: unit.key,
      format: "iframe",
      height: unit.height,
      width: unit.width,
      params: {},
    };

    const script = document.createElement("script");
    script.src = unit.scriptUrl;
    script.async = true;
    script.dataset.adsterraUnitId = unit.id;
    script.addEventListener("load", () => {
      slot.dataset.adsterraScriptStatus = "loaded";
    });
    script.addEventListener("error", () => {
      slot.dataset.adsterraScriptStatus = "error";
    });
    slot.appendChild(script);
  }, []);

  return (
    <aside className="adsterra-placement" aria-label="Advertisement">
      <span className="adsterra-label">Advertisement</span>
      <div className="adsterra-slot" ref={slotRef} />
    </aside>
  );
}
