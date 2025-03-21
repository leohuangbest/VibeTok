# Nostudy.ai - Real Project-Driven AI Creator Growth Practice Platform

English | [简体中文](./README-zh-CN.md)

Say goodbye to passive learning, build real projects publicly, and gain your first 1000 die-hard fans!

## 📑 Table of Contents

- [Core Concept](#core-concept)
- [Technology Architecture](#technology-architecture)
- [System Architecture](#system-architecture)
- [Core Features](#core-features)
- [Development Standards](#development-standards)
- [Deployment Architecture](#deployment-architecture)
- [Quick Start](#quick-start)
- [License](#license)

## 💡 Core Concept

- **First Principles Learning**: Our learning is not just to understand the world, but to transform it!
- **Project-Driven**: Acquire practical experience through real projects with a "learn-by-doing" approach
- **AI-Native**: Deeply integrate AI technology into the learning process, providing personalized learning experiences
- **One-Click Deploy**: Simplify AI project deployment, allowing creators to focus on content and value creation
- **Public Building**: Develop projects in the public eye, gain feedback, and establish your personal brand
- **Fan Connection**: Build a community of 1000 die-hard fans, monetize knowledge, and share team resources

## 🏗 Technology Architecture

### Technology Stack

#### Frontend
- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 18+
- **Language**: TypeScript 5.0+
- **Style**: TailwindCSS
- **Component Library**: HeroUI

#### AI Integration
- **LLM Engine**: GPT/DeepSeek
- **Features**:
  - Real-Time Code Review
  - Intelligent Learning Path Generation
  - Personalized Progress Tracking
  - Intelligent Question and Answer Support
  - Code Optimization Suggestions

#### Development Tools
- **AI IDE**: [Trae](https://www.trae.ai/)
- **Package Manager**: pnpm
- **Code Quality**:
  - ESLint
  - Prettier
  - TypeScript Strict Mode
- **Git Workflow**:
  - [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
  - Branch-Based Development
  - GitHub Actions CI/CD

### System Architecture

```
Nostudy.ai/
├── app/                      # Next.js 15 App Router
│   ├── [locale]/            # i18n Routes
│   ├── api/                 # API Routes
│   └── providers.tsx        # Global Providers
├── components/              # React Components
│   ├── ui/                 # Basic UI Components
│   └── features/           # Feature Components
├── config/                  # Configuration Files
├── i18n/                    # Internationalization
│   ├── client.ts           # Client-side i18n
│   └── server.ts           # Server-side i18n
├── lib/                     # Utility Functions
├── messages/               # Translation Files
├── public/                 # Static Assets
└── styles/                 # Global Styles
```

## 🔥 Core Features

### 1. AI-Native Learning System
- Real-Time Code Analysis and Feedback
- Intelligent Progress Tracking
- Personalized Learning Path Generation
- Intelligent Content Recommendation

### 2. Project-Based Learning
- Real Project Templates
- Step-by-Step Guidance
- Automated Code Review
- Progress Tracking and Analysis

### 3. Multi-Language Support
- Dynamic Routing i18n (Supporting 12 Languages Including English, Chinese, Japanese, etc.)
- Language Detection and Switching
- RTL Support
- Localization Content

### 4. Performance Optimization
- Server-Side Rendering
- Static Page Generation
- Image Optimization
- Code Splitting
- Edge Caching

### 5. Security Measures
- Identity Verification and Authorization
- Access Restrictions
- CORS Configuration
- Input Validation
- XSS Protection

## 📋 Development Standards

### 1. Code Quality
- Strict TypeScript Configuration
- Comprehensive ESLint Rules
- Consistent Code Formatting
- Unit Test Coverage

### 2. Git Workflow
- Feature Branch Workflow
- Conventional Commit Messages
- Pull Request Review
- Automated Testing

### 3. Documentation
- Inline Code Documentation
- API Documentation
- Component Storybook
- Development Guide

### 4. Performance Metrics
- Core Web Vitals Monitoring
- Lighthouse Score
- Error Tracking
- User Analytics

## 🚀 Deployment Architecture

### Production Environment
- Vercel (Primary Hosting)
- Edge Functions
- CDN Distribution
- Automated Deployment

### Development Environment
- Local Development Setup
- Development Server
- Hot Module Replacement
- Debugging Tools

## 🧰 Technologies Used

- [Next.js 15](https://nextjs.org/docs/getting-started)
- [HeroUI](https://heroui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)

## 🚦 Quick Start

### Use create-next-app to Create a Project

Use `create-next-app` based on this template to create a new project:

```bash
npx create-next-app -e https://github.com/leohuang/nostudy.ai
```

### Install Dependencies

```bash
pnpm install
```

### Run Development Server

```bash
pnpm dev
```

## 📜 License

This project is licensed under the [Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/).

## 🤝 How to Contribute

We welcome all forms of contributions! If you'd like to participate in project development, please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Create a Pull Request

For detailed contribution guidelines, please see [CONTRIBUTING.md](./CONTRIBUTING.md).
