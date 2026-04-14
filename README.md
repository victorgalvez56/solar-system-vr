# Solar System VR

An interactive solar system you can explore in Virtual Reality, built with React Three Fiber, Three.js and WebXR.

**Live:** https://solar-system.victorgalvez.dev

## Preview

https://solar-system.victorgalvez.dev/preview.mp4

<video src="https://solar-system.victorgalvez.dev/preview.mp4" controls width="720"></video>

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
