# St. Jude GCX Challenge Website

A modern, neon-aesthetic landing page for the St. Jude GCX charity challenge built with Next.js and Tailwind CSS.

## Features

- **Black & Neon Aesthetic**: Gaming-inspired design with animated neon effects
- **Hero Section**: Big visuals with GCX branding, St. Jude messaging, and clear CTAs
- **Mobile Game Preview**: Interactive preview showing iPhone-style game interface
- **3-Step Flow**: Clear explanation of how the challenge works
- **St. Jude Impact**: Highlighting the charity's mission and impact
- **Prize Breakdown**: Detailed prizes for 1st, 2nd, and 3rd place winners
- **Countdown Timer**: Live countdown to the drawing date
- **Social Features**: Email capture and social sharing functionality
- **Responsive Design**: Optimized for all device sizes

## Tech Stack

- **Next.js 14**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icons
- **Custom Animations**: Neon effects and floating animations

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd st-jude-gcx-challenge
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Deploy with one click!

### Manual Build

```bash
npm run build
npm start
```

## Color Palette

- **Neon Pink**: #FF7073 (Primary CTAs, St. Jude branding)
- **Neon Blue**: #6DC5EE (Secondary elements, highlights)
- **Neon Cyan**: #00FFFF (Accents, borders)
- **Neon Purple**: #A855F7 (Special elements)
- **Dark Background**: #0a0a0a (Main background)
- **Darker Background**: #050505 (Section backgrounds)

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main landing page
├── public/              # Static assets
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── next.config.js       # Next.js configuration
```

## Customization

### Colors
Edit the color palette in `tailwind.config.js` and update CSS variables in `globals.css`.

### Content
Update text content, prizes, and messaging in `app/page.tsx`.

### Animations
Modify or add new animations in `tailwind.config.js` under the `keyframes` section.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is created for St. Jude Children's Research Hospital charity purposes.

## Support

For questions or support, please contact the development team.

---

**Together, we can conquer childhood cancer! 💖** 