# ACSOS Website

This repository contains the code for the ACSOS (Autonomic Computing and Self-Organizing Systems) conference website.
## 🚀 Project Structure

```
/
├── public/
│   ├── assets/ # CSS, JS, fonts
│   └── images/ # Site images
├── src/
│   ├── components/ # Reusable components, e.g., Banner, Tiles
│   ├── layouts/ # Layouts of common structure, e.g., BaseLayout
│   └── pages/ # Site pages, e.g., index.astro, series.astro
├── package.json
├── package-lock.json # locks dependency versions
└── astro.config.mjs # Provides netlify support
```

## 🧞 Commands
All commands are run from the root of the project, from a terminal:

| Command                   | Action                                                         |
| :------------------------ | :------------------------------------------------------------- |
| `npm install`             | Installs dependencies                                          |
| `npm run dev`             | Starts local dev server at `localhost:4321`                    |
| `npm run build`           | Build your production site to `./dist/`                        |
| `npm run preview`         | Preview your build locally, before deploying (after build)     |


## How to Update the Site?
In the following sections, you will find step-by-step instructions on how to add a new conference to the ACSOS website.

### Add a New Conference
To add a new conference (e.g., ACSOS 2026), follow these steps:
#### Step 1: Create Folder (if needed)
```bash
mkdir -p src/content/conferences/YEAR
```

#### Step 2: Create File
```bash
# For ACSOS
touch src/content/conferences/YEAR/acsos.md

# For ICAC/SASO (historical)
touch src/content/conferences/YEAR/icac.md
touch src/content/conferences/YEAR/saso.md
```

#### Step 3: Add Content Template

**Copy this template:**

```markdown
---
year: YYYY
edition: N
name: "ACSOS YYYY" or "ICAC YYYY" or "SASO YYYY"
location: "City, Country"
dates: "Month DD-DD, YYYY"
website: "https://YYYY.acsos.org/"
acceptanceRate: "25%"  # Optional
series: "ACSOS"  # or "ICAC" or "SASO"
generalChairs:
  - name: "First Last"
    affiliation: "University Name"
    country: "Country"
  - name: "First Last"
    affiliation: "University Name"
    country: "Country"
programChairs:  # Optional
  - name: "First Last"
    affiliation: "University Name"
    country: "Country"
---


#### Step 4: Save & Verify

1. Save the file
2. Visit http://localhost:4321/series
3. Your conference appears automatically!

