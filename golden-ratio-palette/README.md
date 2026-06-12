# Golden Ratio Palette Builder

A single-file, zero-dependency web tool: enter one hex color and it derives a
**support** and **accent** color from it, then helps you see how the three
balance against one another.

## What it does

- Enter any hex (type it, use the native picker, or click a preset)
- Generates a 3-color palette using a selectable **formula**:
  - **Golden Ratio** — accent hue rotated by the golden angle (137.5°), support desaturated
  - **Alternative** — a softer, tint-led variation
  - **Negative Golden Ratio** — accent rotated the opposite way (−137.5°)
  - **Triadic** — an evenly spaced three-way split
- **Hue wheel** visualization showing where each color sits and the angle between them
- **Balance & ratio** illustration — toggle proportion presets (e.g. 4 : 2 : .5) and
  see them applied in a live mini-mockup, so you can judge how much of each color to use
- Click any swatch to copy its hex

## Usage

It's a static page — no build step, no dependencies.

```bash
# open it directly
open index.html

# or serve it
python3 -m http.server 3000
# then visit http://localhost:3000/
```

## License

MIT
