# Raheed Pasha — Portfolio

A personal portfolio covering my Computer Science and Engineering degree and projects in defensive security, Android, IoT, and full-stack development.

The site includes six project case studies, an education section, and links to the project repositories and my LinkedIn profile. The ShadowMesh case study includes a small interactive walkthrough of its defensive pipeline.

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
| `dist/assets/site.js` | ShadowMesh walkthrough |
| `src/portrait.jsx` | React entry point for the portrait and its pointer effects |
| `src/react-bits/` | Registry source for the React Bits components |

Run `npm run build` after editing the React entry point or its components. The build updates the portrait JavaScript, CSS, and notices in `dist/assets/`.

## Deploy

Build the site and serve `dist/` at the root of a static host. There is no backend, API key, or environment configuration. The GitHub source repository and the existing ChatGPT Sites deployment are separate.

- [Hosted portfolio](https://raheed-build-log.rahidrahis11.chatgpt.site)
- [LinkedIn](https://www.linkedin.com/in/raheed-pasha-8138543aa)

## Credits

The portrait uses [Tilted Card](https://reactbits.dev/components/tilted-card) and [Spotlight Card](https://reactbits.dev/components/spotlight-card) by React Bits. The typefaces are Bricolage Grotesque and DM Sans. Third-party terms are in [dist/licenses/](dist/licenses/). The portrait is personal artwork and is not covered by the third-party component or font licenses.
