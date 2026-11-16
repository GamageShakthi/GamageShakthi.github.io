# Shakthi Gamage — Personal Website

A clean, responsive personal website built with HTML, CSS and JavaScript. There is no build step or framework.

## Preview the website

Open `index.html` in your browser. Image placeholders will remain visible until you add files with the exact names listed below.

## Add your photos and project images

1. Download and extract `shakthi-personal-website.zip` on your computer.
2. Open the extracted `shakthi-personal-website` folder.
3. Open the `assets` folder.
4. Copy your image files into `assets` and rename them to match the names below exactly.
5. Keep the file extension as `.jpg` if using the names below. If your image is a PNG, either export it as JPG or update the matching image path in `index.html` to `.png`.
6. Open `index.html` in your browser again to check the images and their captions.

### Image naming guide

| File name | What to put in it | Where it appears |
|---|---|---|
| `profile.jpg` | A clear, friendly portrait of you | Main introduction |
| `cornell_internship.jpg` | Cornell campus, lab, workspace or a photo from your visit | Cornell research section |
| `d2nn_simulation.jpg` | D²NN architecture, optical simulation or experiment output | Diffractive optics project |
| `lensless_reconstruction.jpg` | Phase-mask setup, PSF or before/after reconstruction comparison | Lensless imaging project |
| `nerf_3dgs_render.jpg` | A good NeRF / 3DGS scene render | 3D representation project |
| `ddpm_samples.jpg` | A grid of DDPM-generated images or denoising steps | DDPM project |
| `latent_diffusion.jpg` | Latent-space visualisation or generated images | Latent diffusion project |
| `nasa_space_apps_2025.jpg` | Xplora team photo, NASA Space Apps event or award photo | Awards gallery |
| `iumc_2025.jpg` | IUMC competition, medal or award photo | Awards gallery |

**Good image practice:** use JPG images, crop them so the subject is easy to see, and keep each image reasonably small (ideally below about 1–2 MB). Use images you have permission to publish. Avoid uploading private lab material or photographs of other people without their permission.

### Suggested captions

The website already includes captions under the image areas. They can be edited directly in `index.html`. For example:

- Cornell: `Cornell University · Computational Imaging Lab`
- NASA: `NASA Space Apps 2025 · Xplora team`
- IUMC: `Intra-University Mathematics Competition · 2025`

## Create the assets folder on GitHub

The downloaded project already includes an `assets` folder with this README file, so it should appear when you upload the project. If you need to create it manually on GitHub:

1. Open your `GamageShakthi.github.io` repository.
2. Select **Add file → Create new file**.
3. In the filename box, type `assets/README.md`.
4. Add a short note such as `Images for my personal website.`
5. Commit the new file. GitHub will create the `assets` folder automatically.

To upload images through the GitHub website:

1. Open the `assets` folder in your repository.
2. Select **Add file → Upload files**.
3. Drag your image files into the upload area.
4. Make sure their names match the table above exactly.
5. Select **Commit changes**.

You can also upload the complete updated project folder from your computer using Git / GitHub Desktop. Keep `index.html`, `styles.css` and `script.js` at the repository root; do not put them inside `assets`.

## Publish at `GamageShakthi.github.io`

1. Create a **public** repository named exactly `GamageShakthi.github.io`.
2. Upload the contents of this project folder to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then save.
6. Once the deployment finishes, visit `https://GamageShakthi.github.io`.

## Keep the site up to date

- **Project links:** the project links currently point to your GitHub profile because individual repository URLs were not supplied. Replace each link with its actual repository URL when ready.
- **Cornell role:** the site currently says `Incoming Research Intern`. Change this to `Research Intern` after your role officially begins.
- **News:** add a new `<article class="news-item">...</article>` inside `.news-list`. Put the newest update first.
- **YouTube:** replace the YouTube homepage links with your channel URL when it is available.
- **LinkedIn:** check that the LinkedIn URL in the contact section is the correct profile.

Your phone number and referees' contact details are intentionally not included on this public website.
