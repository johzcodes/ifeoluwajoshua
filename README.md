# ifeoluwajoshua.vercel.app

Personal portfolio for Israel Ifeoluwa Joshua — Software Developer.

## Stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/) v3
- [react-icons](https://react-icons.github.io/react-icons/)

No router, no UI kit, no animation library — scroll reveals use a small
`IntersectionObserver` hook and CSS transitions, and honour
`prefers-reduced-motion`.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run lint
npm run build    # outputs to dist/
npm run preview
```

## Editing content

All copy lives in `src/data/`:

| File | Contents |
| --- | --- |
| `profile.js` | Name, role, tagline, links, contact, About paragraphs |
| `experience.js` | Roles, education, community |
| `projects.js` | Featured case studies + "also built" list |
| `skills.js` | Skill groups, hero stack strip, "How I work" principles |

Project screenshots are imported from `src/assets/`. The resume PDF served at
`/resume.pdf` lives in `public/`.
