"use client";

import { useState, useRef } from "react";

interface AudioPlayerProps {
  src: string;
  title: string;
}

export default function AudioPlayer({ src, title }: AudioPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="rounded-xl border border-amber-200 bg-amber-50/80 p-4">
      <div className="flex items-center gap-4">
        <button
          onClick={toggle}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-600 text-white transition-all duration-300 hover:bg-amber-700 hover:shadow-md active:scale-95"
          aria-label={playing ? "暂停" : "播放"}
        >
          {playing ? (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg className="ml-1 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-stone-800 truncate">{title}</p>
          <div className="mt-1 flex items-center gap-2">
            <div className="h-1.5 flex-1 rounded-full bg-amber-200 overflow-hidden">
              <div
                className="h-full rounded-full bg-amber-500 transition-all duration-300"
                id="audio-progress"
              />
            </div>
          </div>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={src}
        onEnded={() => setPlaying(false)}
        onTimeUpdate={() => {
          if (!audioRef.current) return;
          const pct = (audioRef.current.currentTime / (audioRef.current.duration || 1)) * 100;
          const bar = document.getElementById("audio-progress");
          if (bar) bar.style.width = `${pct}%`;
        }}
        preload="metadata"
      />
    </div>
  );
}
