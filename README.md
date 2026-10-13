# Rabt — رابط

Website for **Rabt**, a SaaS and technology solutions company serving companies, for-profit businesses and nonprofit organizations. "Rabt" (رابط) is Arabic for *connection*.

## What's here

A static, bilingual (English / Arabic, with right-to-left layout) website. No build step.

```
index.html      Main page: hero, solutions, who we serve, process, about, contact
css/styles.css  Styles and responsive layout
js/main.js      Language toggle, mobile menu, contact form
assets/logo.svg Logo / favicon
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

## To do

- Confirm the contact email (currently `info@rabt.com`)
- Connect the contact form to a form service or backend (it currently opens the visitor's email app)
- Deploy (e.g. GitHub Pages) and point the rabt.com domain to it
