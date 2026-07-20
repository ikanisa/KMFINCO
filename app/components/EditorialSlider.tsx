"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    src: "/home-consulting-v2.webp",
    alt: "Senior advisers shaping a practical transformation plan with a client team",
    eyebrow: "Connected expertise",
    title: "Strategy that moves into action.",
  },
  {
    src: "/home-audience-v2.webp",
    alt: "International business leaders in a focused multidisciplinary advisory discussion",
    eyebrow: "Senior attention",
    title: "Advice grounded in your reality.",
  },
  {
    src: "/home-approach-v2.webp",
    alt: "A senior adviser listening carefully before agreeing a clear next step",
    eyebrow: "Practical progress",
    title: "Clarity that leads somewhere useful.",
  },
] as const;

export function EditorialSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(preference.matches);
    const frame = window.requestAnimationFrame(updatePreference);
    preference.addEventListener("change", updatePreference);
    return () => {
      window.cancelAnimationFrame(frame);
      preference.removeEventListener("change", updatePreference);
    };
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setInterval(() => setCurrent((value) => (value + 1) % slides.length), 6500);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);

  const selectPrevious = () => setCurrent((value) => (value - 1 + slides.length) % slides.length);
  const selectNext = () => setCurrent((value) => (value + 1) % slides.length);

  return (
    <section className="editorial-slider section-shell" aria-labelledby="slider-title" aria-roledescription="carousel">
      <div className="slider-heading">
        <div>
          <p className="section-index">Perspective in motion</p>
          <h2 id="slider-title">One team around the whole decision.</h2>
        </div>
        <div className="slider-controls" aria-label="Image slider controls">
          <button type="button" onClick={selectPrevious} aria-label="Show previous image">Previous</button>
          {!reducedMotion && (
            <button type="button" onClick={() => setPaused((value) => !value)} aria-pressed={paused}>
              {paused ? "Play" : "Pause"}
            </button>
          )}
          <button type="button" onClick={selectNext} aria-label="Show next image">Next</button>
        </div>
      </div>
      <div className="slider-viewport">
        <div className="slider-track" style={{ transform: `translate3d(-${current * 100}%, 0, 0)` }}>
          {slides.map((slide, index) => (
            <figure className="slider-slide" key={slide.src} aria-hidden={current !== index}>
              <img src={slide.src} alt={slide.alt} width="1536" height="1024" loading="lazy" decoding="async" />
              <figcaption>
                <span>{slide.eyebrow}</span>
                <strong>{slide.title}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <p className="slider-position">{String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</p>
    </section>
  );
}
