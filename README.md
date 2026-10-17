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
# Assignment 5 Testing and Documentation of Forms

## 1. Testing Purpose

The purpose of this testing is to verify that the Contact and Registration forms validate user input correctly, display appropriate feedback, and work on desktop and mobile screens.

## 2. Contact Form Test Cases

| Test Case | Test Input | Expected Result | Actual Result |
|---|---|---|---|
| Empty required fields | Leave Name, Email, and Message empty and submit. | The form should reject the submission and display validation feedback. | To be completed after testing. |
| Invalid email | Enter a name, `invalid-email`, and a valid message. | The form should reject the invalid email address. | To be completed after testing. |
| Message too short | Enter a valid name and email, but a message shorter than 10 characters. | The form should display a validation error. | To be completed after testing. |
| Message too long | Enter a message longer than 500 characters. | The form should reject the message. | To be completed after testing. |
| Valid contact form | Enter a name with at least 2 characters, a valid email, and a message containing 10–500 characters. | The form should display a success message. | To be completed after testing. |

## 3. Registration Form Test Cases

| Test Case | Test Input | Expected Result | Actual Result |
|---|---|---|---|
| Empty required fields | Leave required fields empty and submit. | The form should display validation feedback and prevent successful submission. | To be completed after testing. |
| Short password | Enter a password shorter than 8 characters. | The form should reject the password. | To be completed after testing. |
| Passwords do not match | Enter different values in Password and Confirm Password. | The form should display an error indicating that the passwords do not match. | To be completed after testing. |
| No country selected | Leave the country dropdown at its default empty option. | The form should require the user to select a country. | To be completed after testing. |
| Valid registration form | Complete all required fields correctly, use matching passwords of at least 8 characters, and select a country. | The form should display a success message or demo confirmation. | To be completed after testing. |
| Reset after errors | Enter invalid data, submit the form, and click Reset. | The form fields should return to their initial values and custom validation feedback should be cleared. | To be completed after testing. |

## 4. Responsive Layout Testing

| Test Case | Test Input | Expected Result | Actual Result |
|---|---|---|---|
| Desktop layout | Open the Contact and Registration pages on a desktop or laptop screen. | The forms, navigation, and buttons should be displayed correctly without overlapping. | To be completed after testing. |
| Mobile layout | Test the Contact and Registration pages at approximately 375px screen width using Chrome DevTools. | The forms should fit the screen, text should remain readable, and horizontal scrolling should not be necessary. | To be completed after testing. |

## 5. Screenshots

The following screenshots will be added as evidence:

1. Contact form with validation errors.
2. Contact form with valid input and success feedback.
3. Registration form with validation errors.
4. Registration form with valid input and success feedback.
5. Registration form after clicking Reset.
6. Contact or Registration page in desktop view.
7. Contact or Registration page in mobile view.

## 6. Team Contributions

Each team member will make identifiable Git commits for their own contribution and explain their work during the project defence.

## 6. Team Contributions

- **Member 1 – Temirgaliyeva Akerke:** Developed and styled the Registration form, implemented JavaScript validation, and tested password matching and form reset functionality.

- **Member 2 – Yessenay Malika:** Developed and styled the Contact form, added HTML5 validation attributes, and tested required fields, email format, and message length.

- **Member 3 – Zhexenbikyzy Zhazila:** Implemented Bootstrap styling and responsive layouts for the forms, tested the website on desktop and mobile screens, and captured responsive layout screenshots.

- **Member 4 – Kuanysh Fariza:** Prepared the README documentation, recorded form test cases and results, collected validation screenshots, and helped organize the final project files.

All team members contributed to testing, reviewing the forms, and preparing for the project defence.

## 7. Conclusion

The Contact and Registration forms will be considered tested after all test cases have been executed, actual results have been recorded, and screenshots have been collected. Any unexpected results will be documented and corrected before the final submission.