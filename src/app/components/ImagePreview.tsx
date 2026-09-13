"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";

type Capture = { src: string; width: number; height: number; alt: string };

type Props = { capture: Capture; title: string; description: string; label: string; className: string; children: ReactNode };

export default function ImagePreview({ capture, title, description, label, className, children }: Props) {
  const titleId = useId();
  const descriptionId = useId();
  const [previewOpen, setPreviewOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const originalRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    if (!previewOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = previousOverflow; };
  }, [previewOpen]);

  function openPreview() {
    dialogRef.current?.showModal();
    setPreviewOpen(true);
  }

  function closePreview() {
    dialogRef.current?.close();
  }

  return (
    <>
      <button ref={triggerRef} type="button" className={className} onClick={openPreview} aria-haspopup="dialog" aria-label={label}>{children}</button>
      <dialog
        className="image-dialog"
        ref={dialogRef}
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          if (event.shiftKey && document.activeElement === closeRef.current) {
            event.preventDefault();
            originalRef.current?.focus();
          } else if (!event.shiftKey && document.activeElement === originalRef.current) {
            event.preventDefault();
            closeRef.current?.focus();
          }
        }}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const rect = event.currentTarget.getBoundingClientRect();
          if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closePreview();
        }}
        onClose={() => {
          setPreviewOpen(false);
          // Native dialog normally restores focus; don't steal it if the user
          // has already moved to another control before the close event runs.
          if (document.activeElement === document.body || dialogRef.current?.contains(document.activeElement)) {
            triggerRef.current?.focus({ preventScroll: true });
          }
        }}
      >
        <div className="dialog-heading"><h2 id={titleId}>{title}</h2><button ref={closeRef} type="button" onClick={closePreview} aria-label="关闭图片预览">关闭 <span aria-hidden="true">×</span></button></div>
        <p className="preview-description" id={descriptionId}>{description}</p>
        {previewOpen ? <div className="dialog-image"><Image src={capture.src} width={capture.width} height={capture.height} alt={capture.alt} sizes="(max-width: 700px) 90vw, 85vw" /></div> : null}
        <a ref={originalRef} className="original-link" href={capture.src} target="_blank" rel="noopener noreferrer">打开原图（新标签页） ↗</a>
      </dialog>
    </>
  );
}
