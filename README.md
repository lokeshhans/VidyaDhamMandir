# 🕉️ Vidya Dham Mandir — Free Education Institute
### "VIDYA DAAN, MAHA DAAN"

A premium, emotionally driven, community-built educational institute website for **Vidya Dham Mandir, Palwal, Haryana**.

---

## 🚀 Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | React 18 + Vite, React Router DOM |
| State | Context API + useReducer |
| Styling | Tailwind CSS v3 |
| Animation | Framer Motion |
| Backend | Node.js + Express.js |
| Email | Nodemailer (Gmail SMTP) |
| WhatsApp | CallMeBot API integration |
| Forms | express-validator |
| Security | Helmet + express-rate-limit |

---

## 📁 Project Structure

```
vidya-dham/
├── frontend/                  # React + Vite
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Impact.jsx
│   │   │   ├── Courses.jsx
│   │   │   ├── WhyChooseUs.jsx
│   │   │   ├── Gallery.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── Admission.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── FloatingActions.jsx
│   │   ├── context/
│   │   │   └── AppContext.jsx   # Context API + useReducer
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html               # SEO meta + Schema markup
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
│
└── backend/                   # Node.js + Express
    ├── server.js
    ├── routes/
    │   └── contact.js          # Nodemailer + WhatsApp
    ├── .env.example
    └── package.json
```

---

## ⚡ Getting Started

### 1. Frontend Setup

```bash
cd frontend
npm install
npm run dev          # → http://localhost:3000
```

### 2. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your Gmail credentials
npm run dev          # → http://localhost:5000
```

### 3. Configure Environment Variables

Edit `backend/.env`:

```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password    # Not your real password!
EMAIL_TO=institute-email@gmail.com
WHATSAPP_PHONE=+919999999999
WHATSAPP_API_KEY=get-from-callmebot.com
```

**Gmail App Password**: Go to Google Account → Security → 2-Step Verification → App Passwords

**WhatsApp (CallMeBot)**: Visit [callmebot.com](https://www.callmebot.com/blog/free-api-whatsapp-messages/) and follow steps to get API key.

---

## 🌐 Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | Hero | Emotionally inspiring banner with CTAs |
| 2 | About | Founder story + values |
| 3 | Impact | Animated counters + live notice marquee |
| 4 | Courses | NEET, NCERT, Class 9–12 with detailed cards |
| 5 | Why Choose Us | Student psychology focused trust-building |
| 6 | Gallery | Masonry gallery with lightbox |
| 7 | Testimonials | Real Hinglish student/parent reviews |
| 8 | Admission | 3-step joining process + urgency CTA |
| 9 | Contact | Form + Google Maps + WhatsApp |
| 10 | Footer | Links, social, developer credit |
| + | Floating Actions | WhatsApp bubble, call, scroll-to-top |

---

## 🎨 Design System

**Colors:**
- Royal Blue: `#0f1a4d` / `#1e3a8a`
- Saffron: `#f97316` / `#ea580c`
- Gold: `#fbbf24`
- Cream: `#faf8f3`

**Fonts:**
- Display: Playfair Display (headings)
- Body: DM Sans
- Accent: Lora (italics, quotes)

---

## 📱 Mobile-First

All sections are fully responsive. A sticky bottom action bar appears on mobile with Call / Join / WhatsApp buttons.

---

## 🔐 Security

- Helmet.js HTTP headers
- CORS restricted by origin
- Rate limiting (20 req / 15 min per IP)
- Input validation via express-validator
- JSON body size limit (10kb)

---

## 📦 Production Build

```bash
cd frontend && npm run build   # Output: frontend/dist/
```

Serve `dist/` with Nginx, Vercel, or Netlify. Point API requests to your Node.js server.

---

## 👨‍💻 Developer Credit

**Designed & Developed by Lokesh • GrowUpCraft**

---

*"Education for everyone — built with purpose, not business."*
