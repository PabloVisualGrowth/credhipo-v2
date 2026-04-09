import {
  createContext, useCallback, useContext,
  useEffect, useRef, useState,
  type ReactNode,
} from "react";

interface FullPageCtx {
  current: number;
  total: number;
  goTo: (i: number) => void;
}

const Ctx = createContext<FullPageCtx>({ current: 0, total: 0, goTo: () => {} });
export const useFullPage = () => useContext(Ctx);

interface Props {
  children: ReactNode;
  // ids matching section ids for anchor links
  sectionIds: string[];
}

export const FullPage = ({ children, sectionIds }: Props) => {
  const [current, setCurrent] = useState(0);
  const total = sectionIds.length;
  const isAnimating = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef(0);

  const goTo = useCallback((i: number) => {
    const idx = Math.max(0, Math.min(i, total - 1));
    if (isAnimating.current) return;
    isAnimating.current = true;
    setCurrent(idx);
    // Update URL hash without scrolling
    history.replaceState(null, "", `#${sectionIds[idx]}`);
    setTimeout(() => { isAnimating.current = false; }, 900);
  }, [total, sectionIds]);

  // Wheel handler
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isAnimating.current) return;
      if (e.deltaY > 30) goTo(current + 1);
      else if (e.deltaY < -30) goTo(current - 1);
    };
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [current, goTo]);

  // Touch handler
  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => { touchStartY.current = e.touches[0].clientY; };
    const onTouchEnd = (e: TouchEvent) => {
      if (isAnimating.current) return;
      const diff = touchStartY.current - e.changedTouches[0].clientY;
      if (diff > 50) goTo(current + 1);
      else if (diff < -50) goTo(current - 1);
    };
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [current, goTo]);

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") goTo(current + 1);
      if (e.key === "ArrowUp"   || e.key === "PageUp")   goTo(current - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, goTo]);

  // Expose scrollY for Header compatibility (simulate window scroll)
  useEffect(() => {
    // Fire a synthetic scroll event so Header's scroll listener sees a change
    const y = current === 0 ? 0 : window.innerHeight * current;
    Object.defineProperty(window, "scrollY", { writable: true, configurable: true, value: y });
    window.dispatchEvent(new Event("scroll"));
  }, [current]);

  return (
    <Ctx.Provider value={{ current, total, goTo }}>
      <div
        ref={containerRef}
        style={{ width: "100%", height: "100vh", overflow: "hidden", position: "relative" }}
      >
        {/* Sliding track */}
        <div
          style={{
            width: "100%",
            transform: `translateY(-${current * 100}vh)`,
            transition: "transform 0.85s cubic-bezier(0.77,0,0.18,1)",
            willChange: "transform",
          }}
        >
          {children}
        </div>
      </div>
    </Ctx.Provider>
  );
};
