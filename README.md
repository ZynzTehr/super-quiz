# Super Quiz

> An interactive, fully responsive front-end quiz application configured to test coding fundamentals. Built natively with HTML, CSS, JavaScript, Bootstrap, jQuery, and Anime.js.

## Overview
Super Quiz evaluates and catalogs real-time coding knowledge. The application utilizes local storage for state persistence, allowing users to catalog their scores across sessions and dynamically inject custom questions into the gameplay loop.

## Features
- **Interactive Quiz Engine:** Randomized presentation of trivia questions with immediate visual and data feedback.
- **Dynamic Animations:** Integration with Anime.js for fluid UX, engaging typography animations, and state transitions.
- **Session & Score Tracking:** Uses `sessionStorage` and `localStorage` to evaluate real-time user metrics, cataloging percentages and comparing incremental improvements.
- **Custom Question Integration:** Allows users to extend the core quiz deck dynamically with their own questions securely mapped back into the browser's persistent storage.
- **Responsive Design:** A fluid architecture constructed utilizing Bootstrap 5, optimized dynamically for desktop, tablet, and mobile environments.

## Tech Stack
- **Core:** HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Libraries/Frameworks:** Bootstrap 5.2.3, jQuery 3.7.1, Anime.js 4.0
- **Icons:** FontAwesome 7.0.1
- **Architecture:** Persistent `localStorage` / `sessionStorage` parsing, DOM manipulation loops.

## Getting Started

### Prerequisites
- A modern web browser.

### Installation & Execution
1. Clone the repository:
   ```bash
   git clone https://github.com/ZynzTehr/super-quiz.git
   ```
2. Navigate to the project directory:
   ```bash
   cd super-quiz
   ```
3. Open `index.html` in your preferred web browser to run the application locally.

## Design Protocol
Super Quiz enforces a vibrant, highly-readable palette breaking standard convention to evoke interaction:
- **Green (#008000):** Expected Success / Forward Motion.
- **Red (#FF0000):** Incorrect Evaluation Stops.
- Typography rests heavily on structural serif fallbacks (`Georgia`) paired alongside stylized display (`Fantasy`) fonts for prominent headers.

---
*Designed and Developed by **Jorge Bucio**.*
