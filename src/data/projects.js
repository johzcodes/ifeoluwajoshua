import spanish from "../assets/spanish.png";
import promarket from "../assets/promaket.png";
import virall from "../assets/virall.png";
import theevent from "../assets/theevent.png";

export const projects = [
  {
    name: "Spanish Hotel",
    tagline: "Reservation and room-management platform for a hotel.",
    image: spanish,
    live: "https://spanishhotel.ng/",
    year: "2024",
    featured: true,
    problem:
      "The hotel needed a single place for guests to browse rooms and book online, and for staff to manage availability and pricing without spreadsheets.",
    build:
      "A booking flow for guests plus an admin area for room types, availability and dynamic pricing, backed by a relational schema and authentication.",
    engineering:
      "Next.js app with server-rendered pages for SEO, a PostgreSQL database modelled with Prisma, and Supabase for auth and file storage. Room status updates propagate to the public availability view.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Supabase"],
  },
  {
    name: "ProMarket",
    tagline: "E-commerce platform for links and services.",
    image: promarket,
    live: "https://promaketlinksandservices.ng/",
    year: "2024",
    featured: true,
    problem:
      "A vendor needed an online storefront with product browsing, a cart and a checkout that customers could trust.",
    build:
      "Product catalogue, cart and checkout with an admin view for managing listings and orders.",
    stack: ["React", "TypeScript", "Node.js", "Firebase", "PostgreSQL"],
  },
  {
    name: "Virall",
    tagline: "Marketing site for the web studio I run.",
    image: virall,
    live: "https://virall.netlify.app/",
    year: "2024",
    featured: true,
    problem:
      "Virall needed a fast, credible landing site to present its services and route enquiries.",
    build:
      "A responsive marketing site with a services breakdown and a contact pipeline handled by an Express API.",
    stack: ["React", "Tailwind CSS", "Express", "MongoDB"],
  },
  {
    name: "The Event",
    tagline: "Marketplace for booking and negotiating event services.",
    image: theevent,
    live: "https://theevent-flax.vercel.app/",
    year: "2023",
    featured: true,
    problem:
      "Buyers and sellers of event services had no shared space to connect, agree a price and place an order.",
    build:
      "User authentication, listings, a shopping cart, order CRUD and a newsletter, built as a React SPA against a Node.js API.",
    stack: ["React", "SCSS", "Node.js", "MongoDB"],
  },
];

// Smaller builds, shown as a compact list.
export const otherProjects = [
  {
    name: "Turban",
    detail: "E-commerce marketplace with auth, cart and CRUD flows. Open source, ongoing.",
    live: "https://startup-ochre-kappa.vercel.app/",
    stack: ["React", "SCSS", "Node.js", "MongoDB"],
  },
  {
    name: "Artprimes",
    detail: "Job-matching app connecting creatives with briefs.",
    live: "https://artprimes.vercel.app/",
    stack: ["React", "Express", "Firebase"],
  },
];
