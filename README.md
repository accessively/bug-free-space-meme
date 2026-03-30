# Outsourcing Agency Website

A Next.js website for an outsourcing company agency, built with TypeScript, Tailwind CSS, and ESLint.

## Repository

- GitHub: https://github.com/accessively/bug-free-space-meme

Clone the repository:

```bash
git clone https://github.com/accessively/bug-free-space-meme.git
cd bug-free-space-meme
```

## Features

- Home page with agency introduction
- Contact Us page with contact form
- Apply page for job applications
- Join Us page for partnership inquiries
- Learn More page with service descriptions
- Client Management page with service request form
- Project Tracking page with project setup form
- Employee Management page for outsourcing requests

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build

To build the project for production:

```bash
npm run build
```

## Email Delivery Setup (Required for Contact/Apply Forms)

Form submissions are always saved to the server, but automatic email delivery requires SMTP variables in your deployed environment.

1. Copy `.env.local.example` to `.env.local` for local development.
2. Set the following values:

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_sender_email
SMTP_PASS=your_smtp_password_or_app_password
SMTP_FROM=your_sender_email
FORM_RECEIVER_EMAIL=where_you_want_to_receive_forms
```

3. In production (for example Vercel, Render, or Netlify), add the same variables in the platform's environment settings.
4. Redeploy the site after saving environment variables.

If you use Gmail, create an App Password and use that for `SMTP_PASS`.

## Technologies Used

- Next.js 16
- TypeScript
- Tailwind CSS
- ESLint

## Project Structure

- `app/` - Next.js App Router pages
- `app/components/` - Reusable components
- `app/layout.tsx` - Root layout with navigation
- `app/page.tsx` - Home page
