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

## 3. Add the Google Form URL

Open `script.js` and change the first setting:

```js
const PLAYTEST_URL = "https://forms.gle/your-real-form-url";
```

When the value is empty, the hero button scrolls to the Playtest section. When a real URL is present, it opens the form in a new tab. Do not use a placeholder or private URL.

The Hero and Playtest-section application links both use this single URL setting.

## 4. Add gameplay images or video

Put public media under `assets/gameplay/`. See `assets/README.md` for naming and optimization guidance.

`index.html` contains a commented video example directly below `.media-placeholder`. To publish a video:

1. Add `assets/gameplay/gameplay-1.mp4`.
2. Replace the `.media-placeholder` block with the commented `<video>` example.
3. Test mobile loading and keep the file reasonably small.

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
