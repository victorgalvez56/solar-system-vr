# Solar System VR

An interactive solar system you can explore in Virtual Reality, built with React Three Fiber, Three.js and WebXR.

**Live:** https://solar-system.victorgalvez.dev

## Preview

![Solar System VR preview](https://github.com/victorgalvez56/solar-system-vr/releases/download/v0.1.0/preview.gif)

Full-quality MP4 (with audio-free outro card): [preview.mp4](https://solar-system.victorgalvez.dev/preview.mp4) · hosted copy.

## Features

- 8 planets orbiting the sun with continuous motion
- Click any planet to see info (name, facts, description)
- "Entrar en VR" button — works on any WebXR-capable headset (Quest, Vision Pro browser, etc.)
- Starfield background, orbit lines, emissive planet shading
- Orbit controls for desktop / touch

## Stack

- React 19, TypeScript, Vite
- `@react-three/fiber` + `@react-three/drei` + `@react-three/xr`
- Three.js
- Remotion + `@remotion/three` (for the preview video above)

## Development

```bash
npm install
npm run dev                 # Vite dev server
npm run build               # production build → dist/
npm run remotion:studio     # Remotion studio for the preview video
npm run remotion:render     # render public/preview.mp4 (uses --gl=angle on macOS)
```
