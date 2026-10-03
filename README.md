# streetbite-cafe
# Web Development Assignment #3 — FAMOUZ Burger Website

Hi! This is our submission for Assignment #3. In this project, we updated and fully adapted the website for the "FAMOUZ Burger" restaurant, making it completely responsive (Mobile-First approach), adding interactive native HTML5 components (FAQ), and creating a validated contact form with a demo result page.

## Features & Requirements Implemented:

1. **HTML5 Semantics & Document Structure:**
   - Structured using semantic HTML5 elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<address>`, `<details>`, `<summary>`, and `<footer>`.
   - Explicitly defined the language attribute (`lang="en"`) on the `<html>` root.
   - Enhanced accessibility using ARIA attributes, including `aria-current="page"` on active navigation links and `aria-describedby` for form accessibility.

2. **Mobile-First & Responsive Design:**
   - Base styles in individual CSS files were crafted for mobile viewports first.
   - Multi-device layout responsiveness (tablets and desktops) is consolidated inside a single `css/responsive.css` file utilizing `@media (min-width: ...)` queries.

3. **Native Interactive Elements (FAQ):**
   - Added an interactive FAQ section using pure HTML5 `<details>` and `<summary>` elements without relying on JavaScript.

4. **Contact Form & Demo Result Page:**
   - Built a contact form with native HTML5 input validation (`required`, `type="email"`, `autocomplete`).
   - Linked the form submission via `GET` method to a dedicated `demo-result.html` page.
   - Omitted `name` attributes on form inputs as specified for demo-only forms that do not persist data to a server.

5. **Accessibility & Keyboard Navigation (a11y):**
   - Implemented visible focus indicators (`:focus-visible`) across interactive elements (links, buttons, `<summary>`) to ensure smooth keyboard accessibility.

## Project Structure:

- `index.html` — Main landing page
- `services.html` — Menu & services page
- `about.html` — About us page
- `contact.html` - Contact page featuring the form and FAQ section
- `demo-result.html` — Demo submission response page
- `css/`
  - `contact.css` (and respective CSS files for other pages)
  - `responsive.css` — Mobile-First responsive media queries
- `README.md` — Project documentation