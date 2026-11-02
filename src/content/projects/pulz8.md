---
name: "Pulz8"
date: "2026"
logo: "../../assets/pulz8.png"
order: 1
links: [{label: "pulz8.com", url: "https://pulz8.com/"}]
---

A live heart-rate board for HYROX and hybrid gyms that puts every athlete's heart-rate zone on the gym TV, straight from the browser.

Coaches pair Bluetooth chest straps and armbands in Chrome, assign each strap to an athlete once, and run the class from one shared screen. No hub, no receiver, and no app to install. Formerly Heartstream, it moved from a Raspberry Pi setup to the web and now runs for €49 a month per gym, free for individual athletes.

## Features

- **Browser-Based Pairing**: Connect standard Bluetooth heart-rate straps from Polar, Garmin, Wahoo, Coospo and others directly in Chrome or Edge.
- **Live Class Board**: Each athlete gets a tile with % of max heart rate, BPM, and zone, readable from across the room.
- **Session Recording**: Saved sessions show duration, average and peak heart rate, time in each zone, and each athlete's heart-rate curve.
- **Athlete Profiles**: Straps remember their athlete, with personal max heart rate and zones reused every session.
- **Installable App**: Add it to a desktop or Android home screen and get reminders for the next session.

## Technology Stack

- **Frontend**: Preact, Vite, and Web Bluetooth
- **Backend**: Hono on Cloudflare Workers with D1
- **Landing Page**: Eleventy
- **Payments**: Stripe
- **TypeScript**
