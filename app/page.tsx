import "./globals.css";

export default function Home() {
  return (
    <main className="experience">
      <div className="grain" aria-hidden="true" />
      <header className="topbar">
        <span>05.10.2026</span>
        <span>TEACHER&apos;S DAY / 01</span>
      </header>

      <section className="hero">
        <div className="orb orbOne" aria-hidden="true" />
        <div className="orb orbTwo" aria-hidden="true" />
        <p className="eyebrow">A small digital memory</p>
        <h1>
          For <em>Miss</em>
          <br />
          Tania.
        </h1>
        <p className="intro">
          An interactive Teacher&apos;s Day experience is taking shape here.
        </p>
        <div className="scrollHint">
          <span />
          SCROLL TO EXPLORE
        </div>
      </section>

      <section className="chapter">
        <div className="chapterMeta">01 — THE BEGINNING</div>
        <div>
          <p className="chapterKicker">A story in motion</p>
          <h2>Some moments change how you see yourself.</h2>
        </div>
      </section>

      <section className="chapter dark">
        <div className="chapterMeta">02 — CONFIDENCE</div>
        <div>
          <p className="chapterKicker">Fear → confidence</p>
          <h2>The quiet part of the story is often the biggest one.</h2>
        </div>
      </section>

      <section className="chapter warm">
        <div className="chapterMeta">03 — MEMORIES</div>
        <div>
          <p className="chapterKicker">A personal archive</p>
          <h2>More chapters will unfold here.</h2>
        </div>
      </section>

      <footer className="footer">
        <span>TEACHER&apos;S DAY 2026</span>
        <span>MADE WITH GRATITUDE</span>
      </footer>
    </main>
  );
}
