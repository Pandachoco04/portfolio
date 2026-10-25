# Dan Adriane Ravancho — Portfolio Website

A responsive, dark-themed personal portfolio built with plain HTML, CSS, and JavaScript.

## Files

- `index.html` — page structure and portfolio content
- `style.css` — styling, responsive layouts, and visual effects
- `script.js` — mobile navigation, active section links, project detail dialogs, copy-email button, and dynamic year
- `README.md` — setup and publishing guide

## Preview locally

1. Extract the ZIP file.
2. Open the `dan_portfolio` folder in Visual Studio Code, or another code editor.
3. Open `index.html` in a browser.
4. For a more convenient development workflow, install the Live Server extension in VS Code and choose **Open with Live Server**.

The Google Fonts import uses an internet connection; system fallback fonts are included.

## Publish for free with GitHub Pages

1. Create or sign in to a GitHub account: https://github.com/
2. Create a new **public** repository, for example `dan-portfolio`.
3. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository root.
4. Open the repository's **Settings → Pages**.
5. Under the build/deployment source, select **Deploy from a branch**.
6. Choose the `main` branch and `/ (root)`, then save.
7. Wait for the deployment to finish. The published URL will normally look like:
   `https://YOUR-USERNAME.github.io/dan-portfolio/`

GitHub may take a few minutes to publish updates. See the official guide:
https://docs.github.com/en/pages/quickstart

## Alternative: Cloudflare Pages

You can also deploy this static site through Cloudflare Pages by connecting your GitHub repository:
https://developers.cloudflare.com/pages/get-started/

## Customize before publishing

1. **GitHub:** replace the placeholder links once you have a public profile and repositories. No GitHub profile link is currently shown on the page.
2. **CCP certificate:** verify the exact issuing organization, issue date, and credential details. The current certificate card explicitly says the details still need to be verified/completed. Add a certificate image only if you want it public and it contains no sensitive information.
3. **Projects:** the school app is described as a capstone project, and the network/security labs are described as practice. Replace these descriptions with verified implementation details, your own contribution, screenshots, and working demo/source links. The visuals are illustrative mockups, not screenshots of the actual projects.
4. **Skills:** remove any technology you cannot confidently explain or demonstrate.
5. **Contact:** the email address is set to `adrianeravancho02@gmail.com`. It is displayed publicly and may receive spam. Change it if you prefer a separate professional email.
6. **LinkedIn:** omitted until you provide a profile URL.
7. **Photo:** no personal photo is used; the design uses a DR initials mark.

## Features

- Responsive desktop and mobile layout
- Mobile navigation menu with accessible expanded state
- Active section navigation highlighting
- Project details dialog with close controls
- Copy-email button with fallback messaging
- Dynamic copyright year
- Reduced-motion preference support
- Semantic sections and skip-to-content link

## Security and privacy

- This is a static site and does not collect or store form submissions.
- The contact action opens the visitor's default email app using a `mailto:` link.
- Do not publish passwords, tokens, student records, private school information, client data, or undisclosed security findings.
- Use authorized labs only, and accurately label simulated examples.
