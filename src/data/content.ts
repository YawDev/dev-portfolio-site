/**
 * Single source of truth for portfolio content.
 * Edit the values here — components read from this file.
 */

export const profile = {
  name: "Jason Ampah",
  role: "Software Engineer",
  // The avatar lives in /public. Drop your photo there and update the path.
  avatar: "/avatar.jpg",
  tagline:
    "6 years building and modernizing .NET microservices and external API integrations — the last 4 in healthcare / pharmacy benefits, earlier in fintech payments. I turn product requirements into client-facing REST APIs and third-party integrations that drive revenue for partner clients. From there, I ship them to production with clean, maintainable architecture.",
  // Longer bio for the About section.
  about: [
    "I’m a backend engineer specializing in .NET microservices and the integrations that connect them. Over the past 6 years, I’ve built and maintained services across two regulated industries — spending the last 4 years in healthcare and pharmacy benefits, developing .NET microservices that power real-time pharmacy pricing and prescription-discount experiences. Before that, I worked in B2B fintech payments, where correctness, reliability, and clean architecture were critical to the business.",
    "Most of my recent work has focused on modernizing business-critical systems and improving long-term maintainability. I’ve led the migration of legacy services to .NET 9, re-architected applications around Clean Architecture and separation of concerns, and helped transform tightly coupled legacy implementations into well-structured services that are easier to understand, extend, and support. Along the way, I’ve owned caching strategies with Redis, implemented and maintained third-party integrations, and contributed across both Go and .NET services.",
    "I care about building software that remains understandable long after it’s shipped. That means clear architecture, thoughtful abstractions, and code that the next engineer can confidently maintain. Outside of work, I build full-stack side projects end to end — wiring Go and .NET backends to React and Next.js frontends to strengthen the parts of the stack I don’t work with every day.",
  ],
  location: "Remote · Available for opportunities",
  email: "jason.ampah.dev@gmail.com",
};

export type SocialLink = {
  label: string;
  href: string;
  // icon key resolved in the Icon component
  icon: "github" | "linkedin" | "email";
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/YawDev", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jason-a-7122a6187/",
    icon: "linkedin",
  },
  { label: "Email", href: "mailto:jason.ampah.dev@gmail.com", icon: "email" },
];

// Skills shown in the About section. Ordered core-first.
export const skills: string[] = [
  ".NET / C#",
  "ASP.NET Core",
  "Microservices",
  "Clean Architecture",
  "CQRS",
  "REST APIs",
  "Entity Framework",
  "LINQ",
  "Redis",
  "Hangfire",
  "Elasticsearch (NEST)",
  "gRPC / Protobuf",
  "Go",
  "SQL Server",
  "PostgreSQL",
  "React",
  "TypeScript",
];

export type Experience = {
  role: string;
  // Domain, not employer name — keeps the site public-safe.
  org: string;
  period: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    org: "Healthcare / Pharmacy Benefits",
    period: "2022 — Present",
    highlights: [
      "Primary engineer driving implementation for new PBM integrations end to end with ongoing support for existing providers on the platform, including API contract mapping, observability, error handling, testing, QA coordination, and production reliability for customer-facing pharmacy pricing and discount-coupon experiences that help users save on prescription medications.",
      "Served as lead backend engineer responsible for evolving the business logic of main customer facing service that surfaces real-time pharmacy pricing across external partners, then led its end-to-end migration to .NET 9 by re-architecting it around Clean Architecture and clear separation of concerns to improve maintainability while preserving existing platform functionality. Maintained parity between legacy and modernized implementations throughout the migration, documented core business logic and APIs, and improved onboarding by making the service easier to understand, test, and extend.",
      "Responsible for maintaining and improving the platform’s caching strategy using Redis and Hangfire background jobs to reduce request latency, minimize database load, and ensure frequently accessed data remains available and up to date.",
      "Independently migrated a Go microservice and implemented REST and gRPC endpoints while contributing across both Go and .NET services to maintain platform consistency throughout modernization efforts.",
      "Contributed to the modernization of a core legacy service that powers the prescription discount-coupon experience by redesigning API endpoints, re-implementing key business capabilities at parity, and applying consistent architectural patterns while preserving existing functionality.",
      "Built internal ASP.NET MVC and Razor Pages tooling that enabled non-engineering teams to self-service operational workflows, reducing reliance on manual database scripts and engineering support.",
    ],
  },
  {
    role: "Software Engineer",
    org: "B2B Fintech / Payments",
    period: "2020 — 2022",
    highlights: [
      "Worked across the full accounts-payable pipeline — from transmitting ERP payment transactions to banks through downloading and reconciling daily settlement files.",
      "Built and maintained REST APIs and CQRS command/query logic for an accounts-payable automation platform connecting ERP systems to banks (ACH, wire, virtual card).",
      "Developed background worker jobs for payment transmission and daily settlement-file reconciliation feeding a cash-position view.",
      "Delivered features end to end across API controllers, business logic, and the database — including a full client integration ported from an on-premise system into the cloud platform — and validated each through the release pipeline to production.",
      "Contributed CQRS integration work during company acquisitions, helping bridge the platform into a larger organization's systems.",
    ],
  },
];

export type RepoLink = { label: string; href: string };

export type Project = {
  title: string;
  description: string;
  tags: string[];
  // One or more source repos (e.g. API + Web).
  repos?: RepoLink[];
  demo?: string;
  // Optional preview screenshot in /public.
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Personal Blog — Full-Stack (.NET + Next.js)",
    description:
      "A blog platform built end to end with a Clean Architecture .NET 9 backend, split into Api, Core, Infrastructure, and Models layers. Uses PostgreSQL via EF Core, ASP.NET Identity with JWT authentication, AutoMapper, and Swagger/OpenAPI docs — paired with a Next.js 16 / React 19 / TypeScript frontend.",
    tags: [
      ".NET 9",
      "Clean Architecture",
      "Microservices",
      "REST",
      "PostgreSQL",
      "EF Core",
      "JWT Auth",
      "Next.js",
      "React",
      "TypeScript",
    ],
    repos: [
      {
        label: "Backend",
        href: "https://github.com/YawDev/personal-blog-service",
      },
      {
        label: "Frontend",
        href: "https://github.com/YawDev/personal-blog-site",
      },
    ],
    demo: "https://personal-blog-yaw-dev.vercel.app/",
    image: "/blog-preview.png",
  },
  {
    title: "Todo — Full-Stack (Go + React)",
    description:
      "A full-stack task manager: a Go (Gin) REST microservice with JWT access/refresh-token authentication and a swappable, interface-based storage layer (SQLite or SQL Server via GORM), paired with a React 19 single-page app. Features auth-guarded CRUD for lists and tasks, server-side token tracking, request-ID logging, and Swagger/OpenAPI docs.",
    tags: [
      "Go",
      "Gin",
      "REST",
      "JWT Auth",
      "GORM",
      "React",
      "Vite",
      "Microservices",
    ],
    repos: [
      { label: "Backend", href: "https://github.com/YawDev/todo-web-api" },
      { label: "Frontend", href: "https://github.com/YawDev/todo-app-react" },
    ],
    demo: "https://todo-manager-yaw-dev.vercel.app/",
    image: "/todo-preview.png",
  },
];
