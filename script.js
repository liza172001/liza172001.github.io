/* =====================================================================
   EDIT: YOUR PROJECTS. Best one first.
   Only title, summary and tags are needed. Every other field is optional:
   leave it out (or empty) and that section simply won't show.
   Images go in the images/ folder, e.g. cover: "images/project-one.png".
   To add another project later, copy the { ... } block and add a comma.
   ===================================================================== */
const PROJECTS = [
  {
    id: "hamadidac",
    title: "Hamadidac Admin Portal",
    subtitle: "A hand-built PHP admin portal for a school science supplier",
    summary: "An internal portal where staff keep a science-equipment catalogue up to date: categories, products, availability and customer accounts. PHP and MySQL with a hand-written MVC, no framework.",
    cover: "images/hd-landing.jpg",
    screens: [
      { src: "images/hd-landing.jpg", caption: "Public homepage" },
      { src: "images/hd-home.jpg", caption: "Admin home" },
      { src: "images/hd-products.jpg", caption: "Products: filters and pagination" },
      { src: "images/hd-customers.jpg", caption: "Customer accounts" },
      { src: "images/hd-categories.jpg", caption: "Product categories" },
      { src: "images/hd-login.jpg", caption: "Sign in" }
    ],
    tags: ["PHP 8", "MySQL", "MVC", "PDO", "Security", "Responsive"],
    type: "Course project · CST8268, Algonquin College",
    team: "Project manager & developer",
    platform: "Web app",
    links: { live: "", code: "" },   // EDIT: add the GitHub repo link if it's public
    purpose: "Hamadidac supplies scientific and teaching equipment to schools and laboratories in Algeria (Béjaïa). This portal is where staff sign in to keep the catalogue current. The scope, agreed with my professor, is administration only: no customer catalogue, orders or payments.",
    challenge: "Building a secure, well-organized app without a framework: routing, sessions, roles, CSRF protection and file uploads all had to be written and understood from scratch.",
    role: [
      "Managed the project and built the app, from flow diagrams, mock-up and technical spec to the working demo",
      "Wrote the MVC structure by hand: one entry point, a router, controllers, PDO models and views",
      "Designed the 5-table MySQL database (roles, administrators, categories, products, customers)",
      "Did a design pass: real company content on the public homepage, a denser admin home, responsive down to 390 px"
    ],
    stack: [
      { layer: "Language", choice: "PHP 8, no framework" },
      { layer: "Database", choice: "MySQL via PDO, real prepared statements" },
      { layer: "Server", choice: "Apache on XAMPP, .htaccess sends every request to index.php" },
      { layer: "Architecture", choice: "Hand-written MVC: Router → Auth → CSRF → controller → model → view" },
      { layer: "Front end", choice: "HTML, CSS and vanilla JavaScript, IBM Plex type" }
    ],
    highlights: [
      { title: "Role checked on every request", text: "The portal never trusts a role stored in the session. It reloads the account from the database on every admin route, so a deactivated account loses access immediately." },
      { title: "Security built in", text: "30-minute idle timeout, session ID regenerated at login, a CSRF token on every POST compared in constant time, prepared statements everywhere and server-side validation." },
      { title: "Safe image uploads", text: "Uploaded files are opened and checked for their real type, not their extension, and capped at 2 MB." },
      { title: "Accessible and responsive", text: "Works down to 390 px wide, with visible keyboard focus and reduced motion respected." }
    ],
    tools: ["PHP", "MySQL", "PDO", "Apache", "XAMPP", "phpMyAdmin", "JavaScript", "Git"],
    skills: ["MVC architecture", "Web security", "Database design", "Project management", "Accessibility"],
    outcome: [
      "A complete admin portal: sign in with roles, home dashboard, categories, products with image upload, and customer accounts",
      "A real understanding of what frameworks do for you, from routing and sessions to CSRF, because I built each piece myself"
    ]
  },
  {
    id: "northbridge",
    title: "NorthBridge",
    subtitle: "A full-stack website for an influencer marketing agency",
    summary: "A Next.js platform that connects brands with vetted creators: brand and creator applications, a creator directory, services, case studies and a blog, backed by a database, auth and email.",
    cover: "images/nb-home.jpg",
    screens: [
      { src: "images/nb-home.jpg", caption: "Home: hero with sample creator cards" },
      { src: "images/nb-what-we-do.jpg", caption: "What we do" },
      { src: "images/nb-creators.jpg", caption: "Creator network" },
      { src: "images/nb-campaigns.jpg", caption: "Case studies" },
      { src: "images/nb-for-influencers.jpg", caption: "For influencers" },
      { src: "images/nb-book-a-call.jpg", caption: "Book a call form" }
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Framer Motion"],
    type: "Personal project · In progress",
    team: "Solo project",
    platform: "Web app",
    links: { live: "https://northbridgeagency.ca/", liveLabel: "Visit site (in progress)", code: "" },
    purpose: "NorthBridge is an influencer marketing agency that matches brands with vetted creators, runs campaigns end to end and reports the results. The site has to speak to two audiences at once: brands looking for creators, and creators looking for fair, consistent brand deals.",
    challenge: "Building one site that works as a marketing website and as a real application, with forms that save to a database, send emails and sit behind secure, role-based access, while still feeling fast and polished.",
    role: [
      "Designed and built the whole site myself, front end and back end",
      "Created a custom navy and electric-blue design system in Tailwind CSS",
      "Built the brand and creator application flows with validation shared between client and server",
      "Set up the database, authentication with roles, transactional email and deployment"
    ],
    stack: [
      { layer: "Framework", choice: "Next.js 14 (App Router, React 18, TypeScript)" },
      { layer: "Styling", choice: "Tailwind CSS with a custom navy / electric-blue design system" },
      { layer: "Animation", choice: "Framer Motion (respects reduced-motion settings)" },
      { layer: "Database", choice: "PostgreSQL via Prisma (Supabase-compatible)" },
      { layer: "Auth", choice: "Custom JWT sessions (jose) + bcryptjs, role-based access" },
      { layer: "Email", choice: "Resend, with a console fallback in development" },
      { layer: "Validation", choice: "Zod, one schema shared by client and server" },
      { layer: "Files", choice: "Private local storage (Supabase Storage in production)" },
      { layer: "Deploy", choice: "Vercel + managed Postgres" }
    ],
    highlights: [
      { title: "One schema, two sides", text: "Zod schemas are shared by the forms and the API, so the same rules check data in the browser and on the server, with no duplicated validation." },
      { title: "Auth built from scratch", text: "Sessions are signed JWTs (jose) with bcrypt-hashed passwords and role-based access, instead of an off-the-shelf auth service." },
      { title: "Motion that respects users", text: "Framer Motion animations switch off automatically for people who prefer reduced motion." },
      { title: "Works locally and in production", text: "Email falls back to the console and files to local storage in development, so the app runs anywhere without extra setup." }
    ],
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Zod", "Resend", "Vercel"],
    skills: ["Full-stack development", "Authentication & security", "Database design", "Design systems", "Accessibility"],
    outcome: [
      "A real site, built for a real agency, that I designed, built and deployed on my own",
      "Hands-on experience with the full stack: UI, API routes, database, auth, email and deployment",
      "Still growing: I'm continuing to add features and polish"
    ]
  },
  {
    id: "saveup",
    title: "SaveUp",
    subtitle: "A personal budgeting app built with security first",
    summary: "A Laravel + Livewire budgeting app: log income and expenses, create savings goals and track progress, behind email two-factor login.",
    cover: "images/su-dashboard.jpg",
    screens: [
      { src: "images/su-dashboard.jpg", caption: "Dashboard" },
      { src: "images/su-transactions.jpg", caption: "Transactions" },
      { src: "images/su-goals.jpg", caption: "Savings goals" },
      { src: "images/su-goal-detail.jpg", caption: "Goal detail and history" },
      { src: "images/su-add-transaction.jpg", caption: "Add a transaction" },
      { src: "images/su-login.jpg", caption: "Login" }
    ],
    tags: ["Laravel 12", "Livewire 3", "PHP", "Tailwind CSS", "Security", "2FA"],
    type: "Capstone project · Algonquin College, Winter 2026",
    team: "4-person team",
    platform: "Web app",
    links: { live: "", code: "" },   // EDIT: add the GitHub repo link if it's public
    purpose: "SaveUp is a personal budgeting app. You set a starting balance, log income and expenses by category, and create savings goals you can move money into and out of. The dashboard shows your current balance, progress on each goal and your recent activity.",
    challenge: "The capstone theme was security, so it couldn't be an afterthought. A money app also has to keep balances correct, even when two requests try to change the same account at the same time.",
    role: [
      "[EDIT: the parts you built yourself, e.g. the email login code, the goals feature, the dashboard UI]",
      "Worked in a four-person team with Git, splitting features and reviewing each other's code",
      "Built pages as Livewire components: a PHP class plus a Blade view, no separate JavaScript framework"
    ],
    stack: [
      { layer: "Framework", choice: "Laravel 12 + Livewire 3 on PHP 8.2+" },
      { layer: "Views", choice: "Blade + Tailwind CSS, built with Vite" },
      { layer: "Auth", choice: "Laravel Fortify + custom email one-time code (2FA)" },
      { layer: "Database", choice: "Eloquent ORM, SQLite in development" },
      { layer: "Interactivity", choice: "Livewire server-side components, no separate API" }
    ],
    highlights: [
      { title: "Email two-factor login", text: "After a correct password, the app emails a 6-digit code that expires after 10 minutes. The code is stored bcrypt-hashed, never in plain text, and a custom middleware blocks every page until it's verified. Logins are limited to 5 attempts per minute per email and IP." },
      { title: "Safe money moves on goals", text: "Adding to or taking from a goal runs inside a database transaction with row locks on both the user and the goal. The balance is checked inside the lock, deposits are capped at what's left, and every move writes an audit record." },
      { title: "Simple architecture", text: "No separate API or front-end framework: Livewire handles interactivity on the server, which keeps each page small and easy to follow." }
    ],
    tools: ["Laravel", "Livewire", "PHP", "Blade", "Tailwind CSS", "Vite", "Fortify", "SQLite", "Git"],
    skills: ["Secure authentication", "Database transactions", "Concurrency", "Team collaboration", "MVC"],
    outcome: [
      "A working budgeting app with secure login, goals and a full transaction history",
      "Learned to treat security and data correctness as design requirements, not extras",
      "What I'd improve next: give regular transactions the same locking and ownership checks that goals already have, and run on PostgreSQL or MySQL so the row locks actually apply (SQLite ignores them)"
    ]
  },
  {
    id: "fitforg",
    title: "FitForg",
    subtitle: "A fitness app that builds workouts around you",
    summary: "A mobile fitness app that asks a few quick questions, then gives you a workout plan, an exercise library, a calendar and progress tracking.",
    // Card cover: a row of phone screens (or one image, e.g. "images/fitforg/cover.png")
    cover: ["images/fitforg/welcome.jpg", "images/fitforg/home.jpg", "images/fitforg/exercises.jpg", "images/fitforg/calendar.jpg", "images/fitforg/profile.jpg"],
    tags: ["UI design", "Figma", "Wireframing", "Design system", "Mobile"],
    type: "Academic project",       // EDIT if it was personal
    team: "Solo project",           // EDIT if it was a team
    platform: "Mobile app",
    links: { prototype: "", live: "", code: "" },   // EDIT: paste your Figma prototype link
    purpose: "FitForg helps people train with a plan made for them. New users pick their gender, age and weight, and the app uses that to suggest exercises at the right level (beginner, intermediate or expert). From there they can browse exercises, schedule workouts on a calendar and follow their progress.",
    challenge: "Getting enough information to personalize workouts without making sign-up feel long or boring. The answer was short onboarding steps with one question per screen and large, easy controls.",
    role: ["Designed the full app: onboarding, login, home, exercises, calendar and profile", "Sketched low-fidelity wireframes for every screen first", "Built a style guide with colours, Poppins type scale and reusable buttons", "Chose the images and wrote the content for every screen"],
    wireframes: {
      text: "I started with low-fidelity wireframes to plan the layout and flow of each screen before adding colour, images and content.",
      captions: ["Age", "Calendar", "Exercises", "Gender", "Home", "Login", "Profile", "Sign up", "Weight", "Welcome"],
      images: [
        "images/wireframes/wf-01.png",
        "images/wireframes/wf-02.png",
        "images/wireframes/wf-03.png",
        "images/wireframes/wf-04.png",
        "images/wireframes/wf-05.png",
        "images/wireframes/wf-06.png",
        "images/wireframes/wf-07.png",
        "images/wireframes/wf-08.png",
        "images/wireframes/wf-09.png",
        "images/wireframes/wf-10.png"
      ]
    },
    keyScreensTitle: "Final design",
    keyScreens: [
      { src: "images/fitforg/welcome.jpg", caption: "Welcome" },
      { src: "images/fitforg/login.jpg", caption: "Login" },
      { src: "images/fitforg/signup.jpg", caption: "Sign up" },
      { src: "images/fitforg/gender.jpg", caption: "Gender" },
      { src: "images/fitforg/age.jpg", caption: "Age" },
      { src: "images/fitforg/weight.jpg", caption: "Weight" },
      { src: "images/fitforg/weight-units.jpg", caption: "Weight (LB / KG)" },
      { src: "images/fitforg/home.jpg", caption: "Home" },
      { src: "images/fitforg/exercises.jpg", caption: "Exercises" },
      { src: "images/fitforg/calendar.jpg", caption: "Calendar" },
      { src: "images/fitforg/profile.jpg", caption: "Profile" }
    ],
    styleGuide: {
      text: "A dark base with one bright orange accent, Poppins for all text, and rounded buttons used the same way on every screen.",
      images: [
        { src: "images/fitforg/colors-primary.png", caption: "Primary colours" },
        { src: "images/fitforg/colors-secondary.png", caption: "Secondary colours" },
        { src: "images/fitforg/typography.png", caption: "Typography: Poppins" },
        { src: "images/fitforg/buttons.png", caption: "Buttons" }
      ]
    },
    highlights: [
      { title: "Onboarding one question at a time", text: "Gender, age and weight each get their own screen with a big scroll picker, so setup feels quick and easy on a phone." },
      { title: "Dark theme, one accent", text: "Orange is saved for actions and key info, so buttons and the selected value always stand out against the dark background." }
    ],
    tools: ["Figma"],
    skills: ["UI design", "Wireframing", "Design systems", "Mobile layout"],
    outcome: [
      "A complete, consistent design for 11 screens, from the first welcome screen to the user's profile",
      "Learned how much faster design goes when the layout is planned in wireframes first",
      "Built my first small design system, and saw how reusing the same colours, type and buttons keeps an app feeling like one product"
    ]
  }
];
/* ===================================================================== */

const COLORS = ["#a99bff", "#3fe0c5", "#ff9a85"]; // accent per project, cycles
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const has = v => Array.isArray(v) ? v.length > 0 : !!v;

const I = (d, extra = "") => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"${extra}>${d}</svg>`;
const icon = {
  type: I('<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>'),
  team: I('<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.8-3.5 3.4-5.5 6.5-5.5s5.7 2 6.5 5.5"/><path d="M16 4.6a3.5 3.5 0 010 6.8M18.5 14.8c1.6.8 2.7 2.6 3 5.2"/>'),
  platform: I('<rect x="4" y="4" width="16" height="11" rx="2"/><path d="M2 19h20"/>'),
  arrow: I('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  live: I('<path d="M7 17L17 7M8 7h9v9"/>'),
  code: I('<path d="M8 7l-5 5 5 5M16 7l5 5-5 5"/>'),
  proto: I('<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5"/>'),
  target: I('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>'),
  bulb: I('<path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0012 3z"/>'),
  user: I('<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/>'),
  palette: I('<path d="M12 3a9 9 0 100 18c1 0 1.5-.7 1.5-1.5 0-1.2-1-1.5-1-2.5s.8-1.5 2-1.5H17a4 4 0 004-4c0-4.7-4-8.5-9-8.5z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10.5" cy="7" r="1"/><circle cx="15.5" cy="7.5" r="1"/>'),
  flow: I('<rect x="3" y="4" width="6" height="5" rx="1"/><rect x="15" y="15" width="6" height="5" rx="1"/><path d="M6 9v4a2 2 0 002 2h7"/>'),
  screens: I('<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/>'),
  tool: I('<path d="M14.7 6.3a4 4 0 00-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-2.5 2.5-2.5-2.5z"/>'),
  star: I('<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>'),
  rocket: I('<path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2M9 15l-3-3c1-4 4-8 11-9 0 7-5 10-9 11zM15 9h.01"/>')
};
const img = (src, alt, hint) => src
  ? `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy">`
  : `<div class="ph">${esc(hint)}</div>`;
const chips = (list, cls = "stack") => `<ul class="${cls}">${list.map(t => `<li>${esc(t)}</li>`).join("")}</ul>`;
const metaList = p => `<ul class="meta">
  ${p.type ? `<li>${icon.type}${esc(p.type)}</li>` : ""}
  ${p.team ? `<li>${icon.team}${esc(p.team)}</li>` : ""}
  ${p.platform ? `<li>${icon.platform}${esc(p.platform)}</li>` : ""}
</ul>`;

const wfList = p => (p.wireframes && p.wireframes.images) || [];
const phoneRow = list => `<div class="wf-cover">${list.slice(0, 5).map(src => `<img src="${esc(src)}" alt="" loading="lazy">`).join("")}</div>`;
const coverHTML = p => {
  if (Array.isArray(p.cover) && p.cover.length) return phoneRow(p.cover).replace("wf-cover", "wf-cover phones");
  if (p.cover || !wfList(p).length) return img(p.cover, p.title, "Add a cover image\nimages/" + (p.id || "project") + ".png");
  return `<div class="wf-cover">${wfList(p).slice(0, 5).map(src => `<img src="${esc(src)}" alt="" loading="lazy">`).join("")}</div>`;
};

/* ---------- Project cards ---------- */
const grid = document.getElementById("projects");
grid.classList.toggle("solo", PROJECTS.length === 1);
grid.classList.toggle("duo", PROJECTS.length > 1 && PROJECTS.length % 2 === 0);
PROJECTS.forEach((p, i) => {
  const shown = (p.tags || []).slice(0, 3), extra = (p.tags || []).length - shown.length;
  const card = document.createElement("article");
  card.className = "pcard reveal";
  card.style.setProperty("--c", COLORS[i % COLORS.length]);
  card.style.transitionDelay = (i % 3) * .06 + "s";
  card.innerHTML = `
    <div class="cover">${coverHTML(p)}</div>
    <div class="pbody">
      <h3>${esc(p.title)}</h3>
      <p class="sum">${esc(p.summary)}</p>
      <ul class="tags">${shown.map(t => `<li>${esc(t)}</li>`).join("")}${extra > 0 ? `<li class="more">+${extra} more</li>` : ""}</ul>
      ${metaList(p)}
      <span class="spacer"></span>
      <button class="view" type="button">View details ${icon.arrow}</button>
    </div>`;
  card.querySelector(".view").addEventListener("click", e => openProject(i, e.currentTarget));
  card.querySelector(".cover").addEventListener("click", () => openProject(i, card.querySelector(".view")));
  card.querySelector(".cover").style.cursor = "pointer";
  grid.append(card);
});

/* ---------- Case study window ---------- */
const panel = document.getElementById("panel"), cs = document.getElementById("cs"), out = document.getElementById("cs-content");
let current = 0, opener = null;

function shots(list, n, ar) {
  return `<div class="shots" style="--n:${n};--ar:${ar}">${list.map(s =>
    `<figure><div class="img">${img(s.src, s.caption, "Add a screenshot")}</div>${s.caption ? `<figcaption>${esc(s.caption)}</figcaption>` : ""}</figure>`).join("")}</div>`;
}
function box(ic, title, inner) { return `<section class="box"><h3>${ic}${esc(title)}</h3>${inner}</section>`; }

function openProject(i, from) {
  current = i; if (from) opener = from;
  const p = PROJECTS[i], L = p.links || {};
  cs.style.setProperty("--c", COLORS[i % COLORS.length]);

  const linkBtns = [
    L.prototype && `<a class="linkbtn" href="${esc(L.prototype)}" target="_blank" rel="noopener">${icon.proto}View prototype</a>`,
    L.live && `<a class="linkbtn" href="${esc(L.live)}" target="_blank" rel="noopener">${icon.live}${esc(L.liveLabel || "Live demo")}</a>`,
    L.code && `<a class="linkbtn" href="${esc(L.code)}" target="_blank" rel="noopener">${icon.code}View code</a>`
  ].filter(Boolean);

  out.innerHTML = `
    <header class="cs-hero">
      <p class="kind">${esc(p.type || "Project")}</p>
      <h2 id="cs-title">${esc(p.title)}</h2>
      ${p.subtitle ? `<p class="sub">${esc(p.subtitle)}</p>` : ""}
      ${metaList(p)}
      ${Array.isArray(p.cover) && p.cover.length ? `<div class="cs-phones">${phoneRow(p.cover)}</div>` : ""}
    </header>
    <div class="cs-body">
      ${has(p.screens) ? shots(p.screens, Math.min(p.screens.length, 3), "16/10") : ""}
      ${linkBtns.length ? `<div class="links3">${linkBtns.join("")}</div>` : ""}
      ${(p.purpose || p.challenge) ? `<div class="two">
        ${p.purpose ? box(icon.target, "Purpose", `<p>${esc(p.purpose)}</p>`) : ""}
        ${p.challenge ? box(icon.bulb, "The challenge", `<p>${esc(p.challenge)}</p>`) : ""}
      </div>` : ""}
      ${has(p.role) ? box(icon.user, "My role", `<ul class="bullets${p.role.length < 3 ? " one" : ""}">${p.role.map(r => `<li>${esc(r)}</li>`).join("")}</ul>`) : ""}
      ${has(p.highlights) ? box(icon.palette, "Highlights", `<div class="hl">${p.highlights.map(h => `<div><h4>${esc(h.title)}</h4><p>${esc(h.text)}</p></div>`).join("")}</div>`) : ""}
      ${has(p.flow) ? box(icon.flow, "User flows", `<div class="flows">${p.flow.map(f => `<div class="flow"><b>${esc(f.name)}</b><span>${esc(f.steps)}</span></div>`).join("")}</div>`) : ""}
      ${wfList(p).length ? box(icon.screens, "Wireframes", `${p.wireframes.text ? `<p class="wf-intro">${esc(p.wireframes.text)}</p>` : ""}<div class="wf-strip">${wfList(p).map((src, k) => {
        const cap = (p.wireframes.captions || [])[k] || "";
        return `<figure><a href="${esc(src)}" target="_blank" rel="noopener"><img src="${esc(src)}" alt="Wireframe: ${esc(cap || "screen " + (k + 1))}" loading="lazy"></a>${cap ? `<figcaption>${esc(cap)}</figcaption>` : ""}</figure>`;
      }).join("")}</div>`) : ""}
      ${has(p.keyScreens) ? box(icon.screens, p.keyScreensTitle || "Key screens", `<div class="phone-grid">${p.keyScreens.map(s => `<figure><a href="${esc(s.src)}" target="_blank" rel="noopener">${img(s.src, s.caption, "Add a screen")}</a>${s.caption ? `<figcaption>${esc(s.caption)}</figcaption>` : ""}</figure>`).join("")}</div>`) : ""}
      ${p.styleGuide && has(p.styleGuide.images) ? box(icon.palette, "Style guide", `${p.styleGuide.text ? `<p class="wf-intro">${esc(p.styleGuide.text)}</p>` : ""}<div class="guide-grid">${p.styleGuide.images.map(s => `<figure><a href="${esc(s.src)}" target="_blank" rel="noopener">${img(s.src, s.caption, "")}</a>${s.caption ? `<figcaption>${esc(s.caption)}</figcaption>` : ""}</figure>`).join("")}</div>`) : ""}
      ${has(p.stack) ? box(icon.tool, "Tech stack", `<dl class="stack-table">${p.stack.map(r => `<div><dt>${esc(r.layer)}</dt><dd>${esc(r.choice)}</dd></div>`).join("")}</dl>`) : ""}
      ${(has(p.tools) || has(p.skills)) ? `<div class="two">
        ${has(p.tools) ? box(icon.tool, "Tools used", chips(p.tools, "stack accent")) : ""}
        ${has(p.skills) ? box(icon.star, "Skills demonstrated", chips(p.skills)) : ""}
      </div>` : ""}
      ${has(p.outcome) ? box(icon.rocket, "Outcome", `<ul class="bullets one">${p.outcome.map(o => `<li>${esc(o)}</li>`).join("")}</ul>`) : ""}
      ${PROJECTS.length > 1 ? `<nav class="cs-nav" aria-label="Other projects">
        <button type="button" id="cs-prev" ${i === 0 ? "disabled" : ""}>← ${i > 0 ? esc(PROJECTS[i - 1].title) : "Previous"}</button>
        <button type="button" id="cs-next" ${i === PROJECTS.length - 1 ? "disabled" : ""}>${i < PROJECTS.length - 1 ? esc(PROJECTS[i + 1].title) : "Next"} →</button>
      </nav>` : ""}
    </div>`;
  out.querySelector("#cs-prev")?.addEventListener("click", () => openProject(clamp(current - 1, 0, PROJECTS.length - 1)));
  out.querySelector("#cs-next")?.addEventListener("click", () => openProject(clamp(current + 1, 0, PROJECTS.length - 1)));
  if (!panel.open) panel.showModal();
  panel.scrollTop = 0;
}
document.getElementById("cs-close").addEventListener("click", () => panel.close());
document.getElementById("cs-back").addEventListener("click", () => panel.close());
panel.addEventListener("click", e => { if (e.target === panel) panel.close(); });
panel.addEventListener("close", () => opener && opener.focus());

/* ---------- Nav: border after scrolling, highlight the current section ---------- */
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("solid", scrollY > 10);
addEventListener("scroll", onScroll, { passive: true }); onScroll();

const links = [...document.querySelectorAll(".nav ul a")];
const sections = links.map(a => document.querySelector(a.getAttribute("href")));
const spy = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) { const i = sections.indexOf(e.target); links.forEach((a, k) => a.classList.toggle("on", k === i)); }
}), { rootMargin: "-45% 0px -50% 0px" });
sections.forEach(s => s && spy.observe(s));

/* ---------- Reveal on scroll (only hides things that start below the screen) ---------- */
document.querySelectorAll(".group, .about-copy").forEach(el => el.classList.add("reveal"));
if (!reduce && "IntersectionObserver" in window) {
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.remove("pre"); io.unobserve(e.target); }
  }), { threshold: .12 });
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top > innerHeight) { el.classList.add("pre"); io.observe(el); }
  });
}

/* ---------- Copy email ---------- */
const copyBtn = document.getElementById("copy");
copyBtn.addEventListener("click", () => {
  const addr = document.getElementById("addr");
  const done = () => { copyBtn.textContent = "Copied"; setTimeout(() => (copyBtn.textContent = "Copy email"), 1800); };
  const fallback = () => {
    const range = document.createRange(); range.selectNodeContents(addr);
    const sel = getSelection(); sel.removeAllRanges(); sel.addRange(range);
    copyBtn.textContent = "Selected. Press Ctrl+C";
  };
  try { navigator.clipboard.writeText(addr.textContent.trim()).then(done, fallback); } catch (e) { fallback(); }
});
