# Ananya Gupta – Portfolio

Personal portfolio for **Data Science & Web Development**, built from the free
*Dark Minimal* template (Astro + React + Tailwind CSS).

Live site (after deploying): https://ananyagupta0913-code.github.io/portfolio/

## Run it on your computer

You need [Node.js](https://nodejs.org) (version 20 or newer). This project uses
**pnpm** (not npm), so install it once:

```bash
npm install -g pnpm
```

Then, inside the project folder:

```bash
pnpm install     # download the tools (first time only)
pnpm dev         # start a local preview at http://localhost:4321/portfolio/
pnpm build       # check for errors and build the final site into /dist
```

## Where to edit things

| I want to change...                          | Open this file                        |
| -------------------------------------------- | ------------------------------------- |
| Name, email, GitHub, LinkedIn, location      | `src/data/site.ts`                    |
| Hero text, intro paragraph                   | `src/components/home.astro`           |
| Skills list                                  | `src/React/SkillsList.tsx`            |
| Scrolling technology logos                   | `src/components/logoWall.astro`       |
| Projects                                     | `src/components/projects.astro`       |
| Menu items                                   | `src/components/nav.astro`            |
| Contact form                                 | `src/components/contact.astro`        |
| Colours                                      | top of `<style>` in `src/layouts/Layout.astro` (`:root`) |
| Images, favicon, resume PDF                  | `public/` folder                      |
| Website address / repository name            | `astro.config.mjs` (`site` and `base`) |

## Publish on GitHub Pages

1. Create a GitHub repository named **portfolio** and upload this project.
2. In the repository go to **Settings → Pages → Build and deployment → Source**
   and choose **GitHub Actions**.
3. Push to the `main` branch. The workflow in `.github/workflows/deploy-pages.yml`
   builds and publishes the site automatically.

If you name the repository something else, change `base` in `astro.config.mjs`
to `"/your-repo-name"`.

## Credits and licence

Based on *Dark Minimal* by Andres Hernandez ([Gothsec](https://github.com/Gothsec)),
distributed by [ThemeWagon](https://themewagon.com), released under the MIT
licence. See the `LICENSE` file. The credit in the website footer must stay.
