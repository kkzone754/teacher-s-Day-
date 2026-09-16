# To Miss Tania — A Teacher's Day Memory

A single-page Teacher's Day story for Miss Tania from Kamran. It is deliberately
photo-free and audio-free: the experience is carried by typography, motion and
small procedural scenes instead.

## What is included

- A short percentage/logo loading reveal before an interactive envelope opener.
- A persistent animated colour-field backdrop, grain, and scene-specific visual
  treatments so the story reads as one continuous world rather than separate pages.
- Seven distinct chapter systems: editorial serif intro, fragmented condensed
  confidence statement, technical guidance bento, theatrical Aladdin stage,
  energetic song bento/waveform, handwritten tea note, and a quiet elegant ending.
- Desktop custom cursor labels and motion-safe fallbacks for people who prefer
  reduced motion.
- No portraits, stock photos, autoplay audio, or downloaded 3D models.

## Run locally

```bash
npm install
npm run dev
```

Then visit `http://localhost:3000`.

```bash
npm run build
```

## Project structure

```text
app/
  components/Experience.tsx  # Client interaction and all story chapters
  globals.css                # Responsive art direction, scenes, and animation
  layout.tsx                 # Metadata and global stylesheet
  page.tsx                   # Home route
```
