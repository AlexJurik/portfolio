---
name: "FinFlo"
date: "2026"
logo: "../../assets/finflo.png"
order: 2
links: [{label: "finflo.jurik.dev", url: "https://finflo.jurik.dev/"}]
---

A personal finance app for tracking income and expenses, understanding cash flow, and forecasting your balance.

FinFlo projects your balance 3, 6, 12, or 24 months ahead using transparent, deterministic, decimal-safe math instead of AI guesswork, so every number can be traced back to your own transactions.

## Features

- **Cash-Flow Dashboard**: KPIs, cash-flow and category charts, savings rate, and a historical plus projected balance across multiple periods.
- **Forecast Scenarios**: Compare conservative, expected, and optimistic projections with adjustable growth, salary, and one-time or recurring income and expenses.
- **Multi-Account Tracking**: Keep main, secondary, savings, and business accounts in one ledger, with transfers between them.
- **CSV Import and Custom Categories**: Bring in transactions from a CSV template and organize them with your own categories, icons, and colours.
- **Monthly Email Reports**: Get a summary of the last month and its top insights on a day you choose.
- **Installable PWA**: Install it as a progressive web app on desktop or mobile.

## Technology Stack

- **Frontend**: React, Tailwind CSS, shadcn/ui, and Recharts as a PWA on Cloudflare Pages
- **Backend**: FastAPI on Cloudflare Python Workers
- **Database**: Cloudflare D1
- **Auth**: Google OAuth 2.0
