# Raheed Pasha — Portfolio

A personal portfolio covering my Computer Science and Engineering degree and projects in defensive security, Android, IoT, and full-stack development.

[View the live portfolio on GitHub Pages](https://raheedpasha07.github.io/raheed-portfolio/)

The site features a ShadowMesh walkthrough, five more project case studies with expandable notes, and a short About and Education section. Each project links to its source repository.

## Run locally

Install Node.js 20 or newer and Python 3, then run these commands from the repository root.

```sh
npm ci
npm run build
python3 -m http.server 8000 --directory dist
```

Open [http://localhost:8000](http://localhost:8000). The built files are checked in, so you can also start the static server directly if you are only changing the copy or styles.

## Edit the site

| File | What it contains |
| --- | --- |
| `dist/index.html` | Portfolio content, navigation, education, and case studies |
| `dist/assets/site.css` | Layout, typography, and responsive styles |
| `dist/assets/site.js` | ShadowMesh walkthrough, navigation state, and deep links to project notes |
| `src/portrait.jsx` | React entry point for the portrait and its pointer effects |
| `src/react-bits/` | Registry source for the React Bits components |

Run `npm run build` after editing the React entry point or its components. The build updates the portrait JavaScript, CSS, and notices in `dist/assets/`.

## Deploy

The [GitHub Pages workflow](.github/workflows/pages.yml) publishes the checked-in `dist/` directory when changes are pushed to `main`. Rebuild the portrait bundle before committing changes to its React source.

You can also serve `dist/` from another static host. The site does not need a backend, API keys, or environment variables.

- [GitHub Pages](https://raheedpasha07.github.io/raheed-portfolio/)
- [ChatGPT Sites copy](https://raheed-build-log.rahidrahis11.chatgpt.site)
- [LinkedIn](https://www.linkedin.com/in/raheed-pasha-8138543aa)

## Credits

The portrait uses [Tilted Card](https://reactbits.dev/components/tilted-card) and [Spotlight Card](https://reactbits.dev/components/spotlight-card) by React Bits. The typefaces are Bricolage Grotesque and DM Sans. Third-party terms are in [dist/licenses/](dist/licenses/). The portrait is personal artwork and is not covered by the third-party component or font licenses.

Layout references were [AstroPaper](https://github.com/satnaing/astro-paper) for its compact navigation, [Astro Cactus](https://github.com/chrismwilliams/astro-theme-cactus) for its project and note hierarchy, and the [Eleventy base blog](https://github.com/11ty/eleventy-base-blog) for a small, static content structure. The project notes use native HTML disclosure controls.
