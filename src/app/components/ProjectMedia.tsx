"use client";

import Image from "next/image";
import { useState } from "react";
import ImagePreview from "./ImagePreview";

const captures = {
  desktop: { label: "桌面", src: "/media/mycool/v2-desktop.png", width: 2880, height: 2000, alt: "Mycool V2 重构前桌面首页，展示刘文安姓名与机器人项目入口" },
  mobile: { label: "移动", src: "/media/mycool/v2-mobile.png", width: 780, height: 1688, alt: "Mycool V2 重构前移动端首页" },
} as const;

export default function ProjectMedia() {
  const [view, setView] = useState<keyof typeof captures>("desktop");
  const capture = captures[view];

  return (
    <div className="project-media">
      <div className="media-toolbar">
        <div className="media-switch" role="group" aria-label="截图视图">
          {(["desktop", "mobile"] as const).map((key) => (
            <button key={key} type="button" aria-pressed={view === key} onClick={() => setView(key)}>{captures[key].label}</button>
          ))}
        </div>
        <span className="media-hint">点击图片放大</span>
      </div>
      <ImagePreview capture={capture} title={`Mycool · ${capture.label}截图`} description="V2 页面记录 · Refero 重构前" className={`mycool-media media-surface view-${view}`} label={`放大查看 Mycool ${capture.label}截图`}>
        {view === "desktop" ? (
          <>
            <span className="desktop-capture"><Image src={captures.desktop.src} width={captures.desktop.width} height={captures.desktop.height} alt={captures.desktop.alt} sizes="(max-width: 700px) 100vw, 36vw" /></span>
            <span className="mobile-capture"><Image src={captures.mobile.src} width={captures.mobile.width} height={captures.mobile.height} alt={captures.mobile.alt} sizes="(max-width: 700px) 35vw, 10vw" /></span>
          </>
        ) : <span className="single-mobile-capture"><Image src={captures.mobile.src} width={captures.mobile.width} height={captures.mobile.height} alt={captures.mobile.alt} sizes="(max-width: 700px) 60vw, 25vw" /></span>}
        <span className="image-link">放大查看{capture.label}截图 <span aria-hidden="true">↗</span></span>
      </ImagePreview>
    </div>
  );
}
