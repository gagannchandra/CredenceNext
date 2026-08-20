"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Lightbox({ images = [], index = 0, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose && onClose();
      if (e.key === "ArrowRight") onNext && onNext();
      if (e.key === "ArrowLeft") onPrev && onPrev();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onNext, onPrev]);

  if (!images || images.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent/90 p-6" onClick={onClose}>
      <button
        className="absolute top-6 right-6 text-white text-3xl"
        onClick={(e) => {
          e.stopPropagation();
          onClose && onClose();
        }}
        aria-label="Close"
      >
        ×
      </button>

      <button
        className="absolute left-6 text-white text-4xl"
        onClick={(e) => {
          e.stopPropagation();
          onPrev && onPrev();
        }}
        aria-label="Previous"
      >
        ‹
      </button>

      <div className="relative max-w-[90%] max-h-[90%] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <Image 
          src={images[index]} 
          alt="Gallery image fullscreen view" 
          width={1600}
          height={1200}
          sizes="90vw"
          className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-[1.5rem] shadow-2xl" 
        />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-button bg-transparent/60 px-4 py-2 text-sm text-white/80">
          {index + 1} / {images.length}
        </div>
      </div>

      <button
        className="absolute right-6 text-white text-4xl"
        onClick={(e) => {
          e.stopPropagation();
          onNext && onNext();
        }}
        aria-label="Next"
      >
        ›
      </button>
    </div>
  );
}
