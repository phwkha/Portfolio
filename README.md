# Phan Huu Kha - Personal Portfolio

A personal portfolio website showcasing my skills, projects, and contact information. Built with React and designed with a modern, minimalist dark theme.

🌐 **Live Demo:** [phwkha.github.io/Portfolio](https://phwkha.github.io/Portfolio/)

## 🚀 Features

- **Modern UI/UX:** Sleek dark mode with dynamic animations and beautiful accent colors.
- **Responsive Design:** Fully optimized for both desktop and mobile viewing.
- **Component-based Architecture:** Modular React structure for easy maintenance.
- **Easy Content Management:** All text, skills, and projects are managed centrally in a single configuration file.

## 🛠️ Tech Stack

- **Framework:** React 
- **Styling:** Vanilla CSS
- **Deployment:** GitHub Pages
- **Package Manager:** Yarn

## 📦 Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/phwkha/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   yarn install
   ```

3. **Run the development server:**
   ```bash
   yarn start
   ```
   The app will be running at [http://localhost:3000](http://localhost:3000).

## 📝 How to Update Content

You don't need to dive into complex React components to update your information. Simply edit the `src/data/content_option.js` file:
- **Profile:** Update name, titles, and bio.
- **Skills:** Add or remove technical skills and categories.
- **Projects:** Update project details, images, tech stack, and highlights.

## 🚀 Deployment

This project is configured to easily deploy to GitHub Pages.

To publish your latest changes, simply run:
```bash
yarn deploy
```
This command will automatically build the production bundle and push it to the `gh-pages` branch.

## 📄 LaTeX CV Included
A professional, ATS-friendly LaTeX CV template is also included in the `cv/` directory.
To compile the CV, you need `pdflatex` installed:
```bash
cd cv
pdflatex main.tex
```

## 📫 Contact
- **Email:** [phanhuukha@gmail.com](mailto:phanhuukha@gmail.com)
- **GitHub:** [@phwkha](https://github.com/phwkha)
