# Gameplay media

Only add assets that are safe to publish publicly.

`favicon.svg` is the website icon and should remain in the root of this folder unless its path is also changed in `index.html`.

Recommended structure:

```text
assets/
  gameplay/
    gameplay-1.mp4
    gameplay-2.mp4
    gameplay-3.mp4
    gameplay-poster.jpg
```

- Prefer compressed MP4 video and optimized WebP/JPEG images.
- Add useful `alt` text to images.
- Keep videos muted when using autoplay, and include `playsinline` for mobile.
- Do not add credentials, private game source, configuration, logs, player identifiers, session data, or personal information.
