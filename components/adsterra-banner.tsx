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

type AdsterraPlacement = "homepage" | "playtest";

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

function selectAdUnit(placement: AdsterraPlacement) {
  if (
    placement === "playtest" &&
    window.matchMedia("(min-width: 1320px)").matches
  ) {
    return mobileUnit;
  }

  return window.matchMedia("(min-width: 900px)").matches
    ? desktopUnit
    : mobileUnit;
}

export function AdsterraBanner({
  placement = "homepage",
}: {
  placement?: AdsterraPlacement;
}) {
  const slotRef = useRef<HTMLDivElement>(null);
  const loadedRef = useRef(false);
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const activeOptionsRef = useRef<AdsterraOptions | null>(null);

  useEffect(() => {
    const slot = slotRef.current;

    if (!slot) return;

    const adWindow = window as typeof window & {
      atOptions?: AdsterraOptions;
    };
    let loadTimer: number | undefined;

    const clearActiveOptions = () => {
      const activeOptions = activeOptionsRef.current;

      if (activeOptions && adWindow.atOptions === activeOptions) {
        delete adWindow.atOptions;
      }

      activeOptionsRef.current = null;
    };

    const clearLoadedAd = () => {
      if (loadTimer !== undefined) {
        window.clearTimeout(loadTimer);
        loadTimer = undefined;
      }

      scriptRef.current?.remove();
      scriptRef.current = null;
      slot.replaceChildren();
      clearActiveOptions();
      loadedRef.current = false;
      delete slot.dataset.adsterraUnitId;
      delete slot.dataset.adsterraSize;
      delete slot.dataset.adsterraScriptStatus;
    };

    const loadAd = () => {
      if (loadedRef.current) return;

      loadTimer = undefined;
      loadedRef.current = true;
      const unit = selectAdUnit(placement);
      const options: AdsterraOptions = {
        key: unit.key,
        format: "iframe",
        height: unit.height,
        width: unit.width,
        params: {},
      };

      slot.dataset.adsterraUnitId = unit.id;
      slot.dataset.adsterraSize = `${unit.width}x${unit.height}`;
      slot.dataset.adsterraScriptStatus = "loading";

      activeOptionsRef.current = options;
      adWindow.atOptions = options;

      const script = document.createElement("script");
      script.src = unit.scriptUrl;
      script.async = true;
      script.dataset.adsterraUnitId = unit.id;
      script.addEventListener("load", () => {
        slot.dataset.adsterraScriptStatus = "loaded";
        clearActiveOptions();
      });
      script.addEventListener("error", () => {
        slot.dataset.adsterraScriptStatus = "error";
        clearActiveOptions();
      });
      scriptRef.current = script;
      slot.appendChild(script);
    };

    const scheduleAd = () => {
      if (loadTimer !== undefined) window.clearTimeout(loadTimer);
      loadTimer = window.setTimeout(loadAd, 5000);
    };

    const handleBreakpointChange = () => {
      if (!loadedRef.current) return;

      const nextUnit = selectAdUnit(placement);

      if (slot.dataset.adsterraUnitId === nextUnit.id) return;

      clearLoadedAd();
      scheduleAd();
    };

    const breakpointQueries =
      placement === "playtest"
        ? [
            window.matchMedia("(min-width: 900px)"),
            window.matchMedia("(min-width: 1320px)"),
          ]
        : [];

    breakpointQueries.forEach((query) =>
      query.addEventListener("change", handleBreakpointChange),
    );

    if (document.readyState === "complete") {
      scheduleAd();
    } else {
      window.addEventListener("load", scheduleAd, { once: true });
    }

    return () => {
      window.removeEventListener("load", scheduleAd);
      breakpointQueries.forEach((query) =>
        query.removeEventListener("change", handleBreakpointChange),
      );
      clearLoadedAd();
    };
  }, [placement]);

  return (
    <aside
      className={`adsterra-placement ${
        placement === "playtest" ? "playtest-ad-placement" : ""
      }`.trim()}
      data-adsterra-placement={placement}
      aria-label="Advertisement"
    >
      <span className="adsterra-label">Advertisement</span>
      <div className="adsterra-slot" ref={slotRef} />
    </aside>
  );
}
