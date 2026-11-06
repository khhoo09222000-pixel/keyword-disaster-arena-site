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

`script.js` contains the central `PLAYTEST_PROVIDERS` list. First Look retains the original production URL (and stable `playergg` ID):

```js
{
  id: "playergg",
  name: "First Look",
  url: "https://player.gg/explore/games/keyword-disaster-arena",
  enabled: true,
  type: "application"
}
```

The second provider is **Steam Playtest**, linked to the main game's public store page:

`https://store.steampowered.com/app/5245060/Keyword_Disaster_Arena/`

The Hero and Playtest-section buttons both open the same native modal dialog. Available providers are shown equally, with English/Korean descriptions. Selecting a provider opens its existing external page in a new tab and closes the dialog. Close, Escape, or a backdrop click also dismiss it and restore focus to the original button. With no valid enabled providers, buttons are replaced by the localized unavailable state.

Steam store availability and access are controlled by Steam; the site does not promise immediate access or installation. Only enable real public URLs; never publish placeholders.

## 4. Gameplay showcase

Put public media under `assets/gameplay/`. See `assets/README.md` for naming and optimization guidance.

The Gameplay section uses these public assets:

- `assets/gameplay/kda-trailer-en-web-20261106.mp4`: user-edited final English trailer, approximately 40.36 seconds.
- `assets/gameplay/kda-trailer-ko-web-20261106.mp4`: user-edited final Korean trailer, approximately 30.95 seconds.
- `assets/gameplay/kda-trailer-en-poster-20261106.webp` and `kda-trailer-ko-poster-20261106.webp`: actual frames from the corresponding trailers.

These are the user's final edits of actual Development solo gameplay with an existing test dummy, **not an online multiplayer match**. The English and Korean edits intentionally have different lengths and scenes. Originals are read-only outside this repository; the public derivatives only scale 2560×1080 to 1920×810, preserve the 64:27 composition, encode H.264/AAC, and enable fast start. No cuts, timing edits, new captions, crop, or AI interpolation are added. Existing development target labels remain as supplied. The user confirmed public distribution rights for both soundtracks.

EN/KR switches the actual MP4, poster, accessible label and fallback links. The language is saved in local storage. Old WebVTT tracks described a different cut and are not overlaid on these localized videos. Playback is muted, looping, inline, uses `preload="metadata"`, and retains native pause/mute/fullscreen controls; explicit pause and mute choices survive a language switch. Blocked autoplay falls back to controls. Old video files and the previous site commit `4a94b1548ccc672c5f7a3cf640a1bc68bca6c114` are preserved; no old trailer was deleted.

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
