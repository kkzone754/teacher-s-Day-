"use client";

import { useEffect, useState } from "react";

const chapters = ["OPEN", "CONFIDENCE", "GUIDANCE", "ALADDIN", "SONG", "TEA", "FINAL"];

function Envelope() {
  const [open, setOpen] = useState(false);
  return <button className={`envelope ${open ? "is-open" : ""}`} onClick={() => setOpen(true)} aria-label="Open the letter">
    <span className="flap" /><span className="letter">FOR<br />MISS TANIA</span><span className="seal">T</span>
  </button>;
}

export default function Experience() {
  const [loaded, setLoaded] = useState(false);
  const [cursor, setCursor] = useState({ x: -100, y: -100, label: "" });

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 1800);
    const move = (event: MouseEvent) => setCursor({ x: event.clientX, y: event.clientY, label: (event.target as HTMLElement).closest("button,a")?.getAttribute("data-cursor") || "" });
    window.addEventListener("mousemove", move);
    return () => { window.clearTimeout(timer); window.removeEventListener("mousemove", move); };
  }, []);

  return <main className="experience">
    <div className="shader" aria-hidden="true"><i /><i /><i /></div>
    <div className="noise" aria-hidden="true" />
    <div className={`loader ${loaded ? "done" : ""}`}><p className="loader-mark">T / D</p><strong>100</strong><span>LOADING A SMALL MEMORY</span></div>
    <div className="cursor" style={{ transform: `translate(${cursor.x}px, ${cursor.y}px)` }}><b>{cursor.label || "MOVE"}</b></div>
    <nav aria-label="Chapter navigation"><a className="brand" href="#intro">TANIA <em>— 26</em></a><ol>{chapters.map((chapter, i) => <li key={chapter}><a href={`#${chapter.toLowerCase()}`}>{String(i + 1).padStart(2, "0")}</a></li>)}</ol></nav>

    <section id="intro" className="chapter intro"><p className="eyebrow">A LETTER, NOT A TEMPLATE · 05 SEPTEMBER 2026</p><Envelope /><h1>FOR THE<br /><i>teacher</i> who<br />made room.</h1><p className="intro-note">Tap the envelope to open this memory.</p></section>

    <section id="confidence" className="chapter confidence"><p className="chapter-no">01 / CONFIDENCE</p><div className="scatter" aria-label="You made fear feel smaller"><span>F</span><span>E</span><span>A</span><span>R</span><b>→</b><span>C</span><span>A</span><span>N</span></div><p>Before I could say it with confidence, you held space for the unfinished sentence.</p></section>

    <section id="guidance" className="chapter guidance"><header><p className="chapter-no">02 / GUIDANCE</p><h2>YOU GAVE<br />IDEAS A <i>STRUCTURE.</i></h2></header><div className="bento guidance-grid"><article><small>01 — FOUNDATION</small><strong>Ask better questions.</strong></article><article className="blueprint"><small>02 — FRAME</small><span>╱╲<br />╲╱</span></article><article><small>03 — WINDOW</small><strong>See a bigger way forward.</strong></article><article><small>NOTE</small><p>Every correction felt like a door, never a wall.</p></article></div></section>

    <section id="aladdin" className="chapter aladdin"><p className="chapter-no">03 / ALADDIN</p><div className="curtain left" /><div className="curtain right" /><div className="stage"><p>ONE CLASSROOM.<br /><i>A WHOLE NEW WORLD.</i></p><span>✦ ✦ ✦</span></div><p className="caption">Some lessons arrived with a little magic.</p></section>

    <section id="song" className="chapter song"><p className="chapter-no">04 / SONG</p><h2>THE DAY<br />FOUND ITS<br /><i>RHYTHM.</i></h2><div className="bento song-grid"><article><small>SPORTS DAY</small><b>RUN / LAUGH / REPEAT</b></article><article className="wave" aria-label="Decorative sound wave">▁▃▆█▇▅▂▅▇█▆▃▁</article><article><small>THE CHORUS</small><p>Still playing somewhere in our heads.</p></article></div></section>

    <section id="tea" className="chapter tea"><p className="chapter-no">05 / TEA</p><div className="cup-scene"><div className="steam s1" /><div className="steam s2" /><div className="cup">thank<br /><i>you</i><span /></div></div><h2>FOR EVERY<br /><i>WARM</i> WORD.</h2><p>For the gentle check-ins, the patience, and the tea-sized pauses.</p></section>

    <section id="final" className="chapter final"><p className="chapter-no">06 / FINAL NOTE</p><p className="final-copy">The things you taught me have gone quietly ahead of me.</p><h2>HAPPY<br /><i>TEACHER&apos;S</i><br />DAY.</h2><p className="signoff">With respect & gratitude,<br /><b>Kamran</b></p><a className="restart" href="#intro" data-cursor="AGAIN">BEGIN AGAIN ↑</a></section>
  </main>;
}
