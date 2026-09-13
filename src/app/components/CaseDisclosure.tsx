"use client";

import { useId, useState } from "react";

type CaseDisclosureProps = {
  number: string;
  title: string;
  problem: string;
  record?: { summary: string; sections: readonly { heading: string; text: string }[] };
  recordHref: string;
  variant?: "cover" | "tile";
};

export default function CaseDisclosure({ number, title, problem, record, recordHref, variant = "tile" }: CaseDisclosureProps) {
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();
  const triggerId = useId();

  return (
    <div className={`case-disclosure ${variant === "cover" ? "cover-disclosure" : "case-tile"}`}>
      <button
        id={triggerId}
        className={variant === "cover" ? "cover-trigger" : "case-cover media-surface"}
        type="button"
        aria-expanded={expanded}
        aria-controls={panelId}
        aria-label={`${title}，${expanded ? "收起" : "查看"}记录`}
        onClick={() => setExpanded((value) => !value)}
      >
        {variant === "tile" ? <span className="case-top mono"><span>工程记录</span><span>{record ? "协作记录" : "记录中"}</span></span> : null}
        <span className={variant === "cover" ? "mono" : "case-no"} aria-hidden="true">{number}</span>
        <span className={variant === "cover" ? "cover-issue-title" : "case-title"}>{title}</span>
        {variant === "tile" ? (
          <span className="case-action"><span>{expanded ? "收起记录" : record ? "展开工程记录" : "查看当前现象"}</span><span className="expand-mark" aria-hidden="true">{expanded ? "−" : "＋"}</span></span>
        ) : <span className="expand-mark" aria-hidden="true">{expanded ? "−" : "＋"}</span>}
      </button>
      {record && variant === "tile" && !expanded ? <p className="case-summary">{record.summary}</p> : null}
      <div className="case-body" id={panelId} role="region" aria-labelledby={triggerId} hidden={!expanded}>
        {record ? variant === "cover" ? (
          <><p className="record-status">协作记录 · 摘要</p><p>{record.summary}</p><a className="record-full-link" href={recordHref}>前往完整工程记录 ↓</a></>
        ) : (
          <div className="case-record">{record.sections.map((section) => <section key={section.heading}><h3>{section.heading}</h3><p>{section.text}</p></section>)}</div>
        ) : (
          <><p className="record-status">记录中 · 当前现象</p><p>{problem}</p><p className="record-next">后续将补充：排查 / 修改 / 验证。</p></>
        )}
      </div>
    </div>
  );
}
