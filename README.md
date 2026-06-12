# 🏆 Sports Club Website

A responsive, multi-section website for **ABC University's Sports Club**, showcasing sports events, council members, registration, and contact information.

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Sections](#sections)
- [Setup & Usage](#setup--usage)
- [Images Required](#images-required)
- [Credits](#credits)

---

## About

This website serves as the official online presence for ABC University's Sports Club. It provides students with information about upcoming sports events, available sports, registration details, council members, and contact information.

---

## Features

- 🏠 **Hero Header** with university logos and social media links
- 📖 **About Us** section with parallax background
- ⚽ **Sports Listing** split across Day 1 and Day 2 of the Sports Fest
- 📅 **Event Details** with dates and venues
- 📝 **Registration** section with separate buttons for Day 1 and Day 2
- 👥 **Council** section with interactive flip cards showing representatives
- 📞 **Contact** section with address, email, and phone
- 📱 **Responsive Design** for both desktop and mobile

---

## Tech Stack

- **HTML5**
- **CSS3** (Flexbox, media queries, parallax effects, flip card animations)
- **Vanilla JavaScript**
- Google Fonts (Alice, Montserrat)

---

## Project Structure

```
sports-club-website/
│
├── index.html          # Main HTML file (sports.html)
├── styles.css          # Global styles, layout, parallax sections
├── sports.css          # Sports listing section styles
├── council.css         # Council flip cards and modal styles
├── script.js           # Dynamic event loading script
│
└── images/
    ├── bg.png
    ├── NFSU.png
    ├── mhalogo.png
    ├── sports1.png – sports3.png
    ├── instalogo.png, fblogo.png, linkedin.png
    ├── basketball.jpg, football.jpg, badminton.jpg ...
    └── Council2024/
        ├── (council member photos)
```

---

## Sections

| Section | Description |
|---|---|
| **Header** | University logos, navigation bar, social media icons |
| **About Us** | Overview of ABC University's sports culture |
| **Sports** | Day 1 & Day 2 sports listings with images |
| **Events** | Sports Fest dates and venues |
| **Register** | Registration buttons for Day 1 and Day 2 |
| **Council** | Flip cards for each sport's representative |
| **Contact** | Email, phone, address, and footer |

---

## Setup & Usage

1. **Clone the repository**
   ```bash
   git clone https://github.com/sahil0438                                /sports-club-website.git
   cd sports-club-website
   ```

2. **Open in browser**
   Simply open `sports.html` (or rename to `index.html`) in any modern browser — no build tools or server required.

3. **Or use Live Server** (VS Code extension) for a better development experience.

---

## Images Required

Place the following inside an `images/` folder:

- `bg.png` — background image
- `NFSU.png`, `mhalogo.png` — university logos
- `sports1.png`, `sports2.png`, `sports3.png` — hero section images
- `instalogo.png`, `fblogo.png`, `linkedin.png` — social icons
- Sport images: `basketball.jpg`, `football.jpg`, `badminton.jpg`, `tennis.jpg`, `tabletennis.jpg`, `hockey.jpg`, `chess.jpg`, `kabaddi.jpg`, `athletics.jpg`, `futsal.jpg`, `swimming.jpg`, `archery.jpg`, `wrestling.jpg`, `karate.jpg`
- `Council2024/` folder — individual council member photos
- Section backgrounds: `aboutbg.jpg`, `eventsbg.jpg`, `Registerbg.jpg`, `councilbg.png`, `contactbg.jpg`, `sportsbg.jpg`

---

## Credits

- **Developed and Maintained by:** Sahil  
- © Sports Website | Sahil — All Rights Reserved
