'use client';
import React from 'react';
import './video.css'; // We'll make a small custom CSS file

export default function Video() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="video-bg"
    >
      <source src="/video.webm" type="video/webm" />
      <source src="/video.mp4" type="video/mp4" /> {/* fallback */}
      Your browser does not support the video tag.
    </video>
  );
}
