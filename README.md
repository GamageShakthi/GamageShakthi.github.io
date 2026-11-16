# Shakthi Gamage — Personal Website

A minimalist, responsive personal website built with plain HTML, CSS, and JavaScript. No build tools or dependencies are required.

## Preview locally
Open `index.html` in your browser.

## Publish at `GamageShakthi.github.io`
1. Create a **public** GitHub repository named exactly `GamageShakthi.github.io` (the username and repository name must match).
2. Upload the contents of this folder to the repository root. `index.html` must be at the root, not inside another nested folder.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Wait a minute or two, then visit `https://GamageShakthi.github.io`.

## Personalise before publishing
- **Portrait:** add your photo as `assets/profile.jpg`. In `index.html`, replace the `.portrait-placeholder` block with an image element, for example:
  `<img class="profile-photo" src="assets/profile.jpg" alt="Portrait of Shakthi Gamage">`
  Then add `.profile-photo { width:100%; height:100%; object-fit:cover; }` to `styles.css`.
- **Project links:** each project link currently points to your GitHub profile because individual repository URLs were not supplied. Replace each `href` with the exact repository URL.
- **Project images:** replace the designed image placeholders in each `.project-image` block with screenshots, diagrams, renders, or sample outputs. Keep images compressed and use descriptive `alt` text.
- **LinkedIn:** verify the LinkedIn URL in the contact section and update it if needed.
- **YouTube:** replace the YouTube homepage URL with your channel URL when it exists.
- **News:** add a new `.news-item` inside `.news-list` for each update. Put the newest item first.
- **Cornell role:** the page describes you as an incoming research intern. Update the wording to “Research Intern” once you officially start.
- **Contact privacy:** your phone number has intentionally not been published. A public email address is sufficient for a portfolio site.

## Suggested image assets
- `assets/profile.jpg` — portrait
- `assets/d2nn.jpg` — diffractive optical neural network diagram / simulation
- `assets/lensless.jpg` — phase-mask imaging setup or reconstruction comparison
- `assets/nerf.jpg` — NeRF / 3DGS render
- `assets/ddpm.jpg` — diffusion samples
- `assets/latent-diffusion.jpg` — latent-space or generation visual

The project image areas currently use CSS artwork as elegant placeholders, so the site remains visually complete before you add images.
