"use client";

import { useRef, useState } from "react";

type Props = {
  /** Visible label of the play button, e.g. "Play with sound". */
  label: string;
};

// The clip is a quiz you answer by ear, so it never autoplays muted:
// it shows its poster until the visitor starts it, then plays with sound.
export default function HeroVideo({ label }: Props) {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-[9/16] overflow-hidden rounded-[2.25rem] border border-[var(--color-rule)]/70 bg-black shadow-2xl shadow-black/60">
      <video
        ref={video}
        src="/video/name-this-note.mp4"
        poster="/video/name-this-note.jpg"
        preload="none"
        playsInline
        controls={playing}
        onEnded={() => setPlaying(false)}
        className="h-full w-full object-cover"
      />
      {!playing && (
        <button
          type="button"
          onClick={() => {
            setPlaying(true);
            void video.current?.play();
          }}
          className="group absolute inset-0 flex items-end justify-center pb-[18%]"
        >
          <span className="inline-flex items-center gap-2.5 rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-bold text-white shadow-2xl shadow-[var(--color-primary)]/40 transition group-hover:bg-[var(--color-primary-bright)]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
              <path d="M3.5 1.8v12.4a.6.6 0 0 0 .92.5l9.6-6.2a.6.6 0 0 0 0-1L4.42 1.3a.6.6 0 0 0-.92.5Z" />
            </svg>
            {label}
          </span>
        </button>
      )}
    </div>
  );
}
