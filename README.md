# React Personal Portfolio & Project Management Dashboard

A personal portfolio and project management dashboard built with **React, Vite, JavaScript, and React Router**.

This project was developed as part of the InternNova Full Stack Web Development internship. It converts a traditional portfolio into a reusable React application with dynamic project rendering, filtering, routing, API integration, form validation, and persistent theme preferences.

## Live Demo

[React Portfolio](https://rishabh8122004.github.io/react-portfolio/)

## Repository

[GitHub Repository](https://github.com/Rishabh8122004/react-portfolio)

## Features

* Responsive personal portfolio
* Reusable React components
* Dynamic project rendering using project data
* Project search
* Category-based project filtering
* Interactive project gallery
* Dynamic project detail pages
* Previous/next project navigation
* React Router SPA navigation
* GitHub API integration
* API loading, success, and error states
* GitHub contribution activity graph
* Controlled contact form
* Form validation with visible error messages
* Dark/light theme
* Theme persistence using Local Storage
* Interactive project demonstrations
* Source-code viewer for selected projects
* Custom 404 page
* Reduced-motion support for theme animations

## Technologies

* React
* JavaScript
* JSX
* Vite
* React Router
* CSS
* GitHub API
* GitHub Contribution Graph

## React Concepts Demonstrated

This project demonstrates several core React concepts:

* Functional components
* JSX
* Component composition
* Props
* `useState`
* `useEffect`
* `useRef`
* Conditional rendering
* Array rendering with `.map()`
* React keys
* Controlled form inputs
* Form validation
* API requests with `fetch`
* Loading and error states
* React Router
* Dynamic route parameters
* Local Storage
* Reusable components

## Project System

Projects are stored as objects inside a central project-data array.

Each project contains information such as:

* Project name
* Description
* Technologies
* Category
* Custom visual identifier
* Features
* How it works
* Project link when available
* GitHub link when available

The project collection is rendered dynamically rather than hard-coded into the Projects page.

Search and category filters operate on the same project data.

## Routing

The application uses React Router for client-side navigation.

Available routes:

```text
/
 /about
 /projects
 /contact
 /project/:id
 *
```

The `/project/:id` route dynamically finds the requested project from the project data and displays its details.

The `*` route displays the custom 404 page for unknown paths.

## GitHub API Integration

The Projects page uses the GitHub API to retrieve public profile information and the latest public repository information.

The API implementation demonstrates:

* `fetch`
* `useEffect`
* Loading state
* Success state
* Error state
* `AbortController`
* Refreshing API data

The application also displays GitHub contribution activity using `github-contrib-graph`.

## Theme System

The portfolio includes a custom dark/light theme system.

The theme:

1. Is controlled using React state.
2. Updates the document's root class.
3. Saves the selected theme to Local Storage.
4. Restores the saved theme after a page refresh.

The theme toggle also includes animated visual elements and reduced-motion handling.

## Contact Form

The contact form demonstrates controlled React inputs and client-side validation.

It includes:

* Full Name
* Email
* Phone Number
* Subject
* Message
* Preferred contact method

Validation errors are displayed next to the relevant fields.

The form currently performs **client-side validation only**. It does not connect to a backend or external form-submission service.

## Project Structure

```text
src/
├── jsx_files/
│   ├── About.jsx
│   ├── CodeViewer.jsx
│   ├── Contact.jsx
│   ├── ContactForm.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Home.jsx
│   ├── Navbar.jsx
│   ├── NotFound.jsx
│   ├── ProjectCard.jsx
│   ├── ProjectDemo.jsx
│   ├── ProjectDetails.jsx
│   ├── ProjectList.jsx
│   ├── Projects.jsx
│   └── ThemeToggle.jsx
│
├── css_files/
│   └── component-specific styles
│
├── Data/
│   ├── projects.js
│   └── projectCode.js
│
├── App.jsx
├── main.jsx
└── index.css
```

## Installation

Clone the repository and enter the project directory:

```bash
git clone https://github.com/Rishabh8122004/react-portfolio.git
cd react-portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

If PowerShell blocks the npm PowerShell script on Windows, the equivalent command is:

```bash
npm.cmd run dev
```

## Production Build

Create a production build with:

```bash
npm run build
```

The project can also be checked with:

```bash
npm run lint
```

## Deployment

The project is deployed as a GitHub Pages site:

https://rishabh8122004.github.io/react-portfolio/

## Project Philosophy

The portfolio is intended to represent the progression from learning web fundamentals to building interactive applications with JavaScript and React.

The projects section includes programming, web development, JavaScript, React, and data-structure work, with individual project pages explaining their implementation and purpose.
