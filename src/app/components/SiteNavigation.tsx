"use client";

import { useEffect, useState } from "react";

const sections = [["work", "作品"], ["cases", "工程记录"], ["stack", "技术"], ["contact", "联系"]] as const;

export default function SiteNavigation() {
  const [active, setActive] = useState("");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const threshold = Math.min(window.innerHeight * 0.25, 180);
      let current = "";
      for (const [id] of sections) {
        if ((document.getElementById(id)?.getBoundingClientRect().top ?? Infinity) <= threshold) current = id;
      }
      if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        // Short sections near the footer cannot reach the top threshold.
        const anchor = window.location.hash.slice(1);
        const target = sections.some(([id]) => id === anchor) ? document.getElementById(anchor) : null;
        const top = target?.getBoundingClientRect().top ?? -1;
        current = top >= 0 && top < window.innerHeight ? anchor : "contact";
      }
      setActive(current);
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", schedule);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", schedule);
    };
  }, []);

  return <nav aria-label="主导航">{sections.map(([id, label]) => <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined}>{label}</a>)}</nav>;
}
