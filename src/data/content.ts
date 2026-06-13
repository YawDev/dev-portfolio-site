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
    "6 years building and modernizing .NET microservices and external API integrations — the last 4 in healthcare / pharmacy benefits, earlier in fintech payments. I translate product requirements into client-facing REST APIs and third-party integrations that serve partner clients and drive revenue, then ship them to production with clean, maintainable architecture.",
  // Longer bio for the About section.
  about: [
    "I'm a backend engineer who specializes in .NET microservices and the integrations that connect them. Across 6 years I've shipped and maintained services in two regulated domains — spending the last 4 years in healthcare / pharmacy benefits, building .NET microservices for a prescription-discount platform that surfaces real-time pharmacy pricing and coupon information, and before that in B2B fintech payments — where correctness, reliability, and clean architecture genuinely matter.",
    "Most of my recent work has been modernization that raises the quality of the platform: leading the end-to-end migration of business-critical microservices to .NET 9, refactoring a 1,700-line service down to ~400 lines with Clean Architecture and dependency injection, and migrating legacy monoliths into well-structured services — so new features and client requirements are far easier to integrate. Along the way I own caching strategy with Redis, and picked up Go on the job, contributing endpoints and migrating services across both the Go and .NET stacks.",
    "I care about clean architecture and code the next engineer can actually maintain. Outside of work I build full-stack side projects end to end — wiring my own Go and .NET microservices up to React and Next.js frontends — to round out the parts of the stack I don't touch day to day.",
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
      "Integrate new PBMs into the platform end to end — connecting to each provider's external APIs and flattening their varied responses into a consistent microservice contract — so their pricing and prescription-discount coupons are usable at the pharmacy, then shepherd each release across environments through to production.",
      "Led the end-to-end migration of a business-critical microservice to .NET 9, re-architecting a 1,700-line 'God service' into ~400 lines with Clean Architecture — cutting complexity and making the service far easier to test and extend — and documented the core business logic and endpoints to speed onboarding for other engineers.",
      "Collaborated on migrating another service from legacy .NET to a modern .NET 9 microservice — applying the same Clean Architecture patterns, re-implementing coupon email delivery, and splitting one overloaded coupon-delivery endpoint into dedicated endpoints per delivery method.",
      "Own caching strategy with Redis — including token caching and Hangfire background refresh jobs — to reduce request latency and database load.",
      "Work across both Go and .NET — picked up Go on the job, independently migrated a Go microservice with REST and gRPC (Protobuf) endpoints, and collaborated on cross-stack legacy migrations.",
      "Built internal MVC Razor Pages screens in a legacy app that let product self-serve client onboarding and data population — cutting manual DB scripts and engineering dependency.",
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
  },
];
