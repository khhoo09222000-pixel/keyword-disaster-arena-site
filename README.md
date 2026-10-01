# Keyword Disaster Arena Website

Minimal static landing page for **Keyword Disaster Arena**. It uses plain HTML, CSS, and JavaScript with no build step, backend, database, or third-party dependency.

## 1. View locally

You can open `index.html` directly, or run a small local server from this folder:

```powershell
python -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080). Stop the server with `Ctrl+C`.

## 2. Edit text

- English and Korean page copy: `script.js`, inside the `translations` object.
- Game title and basic document metadata: `index.html`.
- Layout, colors, and typography: `style.css`.

English is the default language. The EN/KR switch stores the visitor's choice in local browser storage.

## 3. Manage playtest providers

`script.js` contains the central `PLAYTEST_PROVIDERS` list. The current production provider is Player.gg:

```js
{
  id: "playergg",
  name: "Player.gg",
  url: "https://player.gg/explore/games/keyword-disaster-arena",
  enabled: true,
  type: "application"
}
```

The Hero and Playtest-section application links both use this list:

- One valid enabled provider: both links open that provider directly.
- Two or more valid enabled providers: both links lead to the provider chooser in the Playtest section.
- No valid enabled providers: application links are replaced by a localized unavailable state.

To add Steam Playtest, Antidote, or another service later, add an object with a stable `id`, display `name`, real public `url`, `enabled` flag, and `type`. Only add and enable a provider after its real participation URL is ready; never publish placeholder links.

## 4. Gameplay showcase

Put public media under `assets/gameplay/`. See `assets/README.md` for naming and optimization guidance.

The Gameplay section uses these public assets:

- `assets/gameplay/kda-gameplay-showcase.mp4`: 25.4-second real prototype montage, H.264 MP4, 1920×810, 30 fps, silent, fast start.
- `assets/gameplay/kda-gameplay-poster.webp`: a frame from the showcase.

The source is a solo prototype capture with four disaster sentences, not a recorded four-human multiplayer session. The video preserves the original 64:27 composition and HUD without cropping. It autoplays muted, loops inline, uses `preload="metadata"`, and provides native controls for pausing and fullscreen viewing. English editing labels briefly explain the card choices and simultaneous disasters.

Keep the original recording and high-quality reusable master outside this repository. When replacing the showcase, update the dimensions/aspect ratio if needed and verify desktop/mobile playback, looping, and the unchanged playtest links before publishing.

Do not publish game source, configuration files, credentials, logs, player identifiers, or private development material.

## 5. Deploy with GitHub Pages

Create an empty **public** GitHub repository, for example `keyword-disaster-arena-site`. Do not initialize it with extra files on GitHub.

From this folder, run:

```powershell
git remote add origin https://github.com/YOUR-ACCOUNT/keyword-disaster-arena-site.git
git push -u origin main
```

On GitHub:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Choose branch **main** and folder **/(root)**.
4. Save and wait for the published URL to appear.

The usual project-site URL is `https://YOUR-ACCOUNT.github.io/keyword-disaster-arena-site/`. Confirm the exact URL shown by GitHub and test it before sharing.

## 6. Custom domain later

GitHub Pages supports a custom domain later through **Settings → Pages → Custom domain**. Configure the domain's DNS records using GitHub's current documentation before enabling HTTPS.
