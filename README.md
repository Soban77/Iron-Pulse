# Iron Pulse Gym Website

A responsive single-page website for Iron Pulse Gym, built with React, Vite, and Tailwind CSS. It presents gym classes, membership plans, trainers, member reviews, fitness calculators, contact information, and a free-trial booking form.

## Live website

**URL:** `https://iron-pulse-jade.vercel.app/`

## Features

- Responsive navigation and announcement banner.
- Gym hours, class schedule, membership pricing, photo gallery, trainer profiles, testimonials, and FAQs.
- BMI and daily-calorie calculators.
- Owner and gym contact details, social links, WhatsApp link, and an embedded map.
- Free-trial booking form that submits the visitor's name, phone, preferred time, and class to the configured email address using FormSubmit.
- Owner email link opens the visitor's email application with the owner's address, a prefilled subject, and an editable message draft. The visitor reviews and sends this message themselves.

## Requirements

- Node.js 20.19+ or 22.12+.
- npm (included with Node.js).

## Getting started

1. Clone or download this repository and open its root folder in a terminal.
2. Install the dependencies:

	```sh
	npm install
	```

3. Start the local development server:

	```sh
	npm run dev
	```

4. Open the local URL printed by Vite in your browser (usually `http://localhost:5173`).

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create an optimized production build in `dist/`. |
| `npm run preview` | Serve the production build locally for review. Run `npm run build` first. |
| `npm run lint` | Run ESLint across the project. |

## Email behavior and configuration

The free-trial form posts to FormSubmit's AJAX endpoint. FormSubmit may require the recipient to confirm the activation email the first time the form is used. Check the configured mailbox, including its spam folder, and follow FormSubmit's activation instructions. The form only displays its sent confirmation after the endpoint accepts the request; an error message appears if submission fails.

The displayed email address and other gym contact information are configured in `src/data/gymData.js`. Update `contactDetails.email` there to change the recipient for both trial requests and the owner contact link. The owner contact link uses `mailto:`: it opens an email draft in the visitor's configured mail application and does not send automatically. If the visitor has no mail application configured, they can copy the displayed address and email the owner another way.

FormSubmit is a third-party service. Its availability, anti-spam checks, and activation requirements are outside this project's control. Do not put secrets or private API keys in client-side code.

## Project structure

```text
src/
  components/    Page sections and reusable UI components
  data/          Gym content and contact details
  App.jsx        Main page composition and trial modal state
  App.css        Application styles
  index.css      Global styles and Tailwind import
  main.jsx       React application entry point
public/          Static public assets
index.html       Vite HTML entry point
vite.config.js   Vite, React, and Tailwind plugin configuration
eslint.config.js ESLint configuration
```

## Technology

- React 19
- Vite 8
- Tailwind CSS 4 with the Vite plugin
- lucide-react icons
- ESLint 10
