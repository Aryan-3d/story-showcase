Story Showcase

Open `index.html` in your browser to view the showcase.

Place your assets here:
- Poster / Hero image: save your poster image as `assets/images/poster.jpg` or `poster.png` to show as the hero background. The hero falls back to `assets/images/cover.svg` if `poster.*` is not present.
- Cover image (fallback): `assets/images/cover.svg` (replace with PNG/JPG/SVG)
- Characters: `assets/images/character-1.svg`, `character-2.svg`, etc.
- Audio narration: place MP3 files into `assets/audio/` and update `index.html` or add more <li> entries in the Narration section.

To serve via a local server (recommended):

Windows (Python 3):

```powershell
python -m http.server 8000
```

Then open http://localhost:8000 in your browser.

If you'd like, I can add code to automatically detect any image in `assets/images/` and use it as the hero — or upload your poster here and I'll place it in the project for you.

Replace placeholder SVGs in `assets/images/` with your character art and cover. If you want, I can help add more sections, implement multiple audio tracks auto-discovery, or wire up downloadable PDF/print views of your script.
