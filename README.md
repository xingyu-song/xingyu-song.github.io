# Xingyu Song Academic Homepage

This repository hosts the personal academic homepage of **Xingyu Song** at:

https://xingyu-song.github.io

It is a lightweight static website built with plain HTML, CSS, and JavaScript. The site is designed for academic profiles: research summary, publications, education, experience, contact links, and a downloadable CV.

## Layout Credit

The homepage layout is based on [RayeRen/acad-homepage.github.io](https://github.com/RayeRen/acad-homepage.github.io). If you reuse or adapt this repository, please keep appropriate credit to the original layout source.

## Features

- Single-page academic homepage
- Responsive layout for desktop and mobile
- Publication sections grouped by research area
- Highlighted author name in publication lists
- Downloadable CV PDF
- Email copy interaction without exposing a raw `mailto:` link
- GitHub Pages deployment with no build step

## Repository Structure

```text
.
├── index.html                  # Homepage content
├── styles.css                  # Visual design and responsive layout
├── script.js                   # Mobile navigation and email-copy behavior
├── files/
│   └── Xingyu_Song_CV.pdf      # CV PDF linked from the homepage
└── .nojekyll                   # Tells GitHub Pages to serve files directly
```

## How To Reuse This Homepage

1. Fork this repository.
2. Rename the repository to `YOUR_GITHUB_USERNAME.github.io`.
3. Edit `index.html` with your name, affiliation, research interests, publications, education, and contact links.
4. Replace `files/Xingyu_Song_CV.pdf` with your own CV.
5. Update links in `index.html`, including GitHub, Google Scholar, and homepage URLs.
6. Push to the `main` branch.
7. GitHub Pages will serve the site at:

```text
https://YOUR_GITHUB_USERNAME.github.io
```

## Local Preview

Because the site is static, you can open `index.html` directly in a browser. For a local server preview:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

## Customization Notes

- Edit colors and spacing in `styles.css`.
- Update publications directly in the `#publications` section of `index.html`.
- Keep the email split across `data-user` and `data-domain` if you want to avoid putting a raw email address in the HTML.
- Replace the profile image source in `index.html` if you prefer a local image file.

## Deployment

This repository uses GitHub Pages for deployment. No package installation or build command is required. The `.nojekyll` file is included so GitHub Pages serves the static files directly.

## License And Attribution

This repository is intended as a reusable academic homepage template. The layout is based on [RayeRen/acad-homepage.github.io](https://github.com/RayeRen/acad-homepage.github.io). Before reusing, check the original repository's license and keep attribution where appropriate.
