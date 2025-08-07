# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is Ellen Lewis's portfolio website built with Next.js 15 using the App Router architecture. The site is configured for static export deployment.

## Development Commands
- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production (static export)
- `npm start` - Start production server

## Tech Stack
- **Framework**: Next.js 15 with App Router
- **UI Library**: Material-UI (MUI) v7
- **Styling**: CSS Modules + MUI components
- **Fonts**: Geist Sans and Geist Mono (Google Fonts)
- **Deployment**: Static export (`output: 'export'` in next.config.mjs)

## Architecture
- Uses Next.js App Router with file-based routing in the `app/` directory
- Root layout (`app/layout.js`) includes global Navigation component that wraps all pages
- Navigation component (`app/components/navigation.js`) provides responsive header with desktop/mobile menu variants
- Pages are organized as `app/[route]/page.js` files
- Static assets in `public/` directory
- Images are unoptimized for static deployment compatibility

## Key Components
- **Navigation**: Responsive AppBar using MUI with hamburger menu for mobile (<900px breakpoint)
- **Layout**: Root layout manages fonts, metadata, and global navigation wrapper
- **Styling**: Combines CSS Modules (page.module.css) with MUI's sx prop styling

## Important Configuration
- Static export mode enabled for deployment
- Images unoptimized for static hosting
- Path alias `@/*` configured for root-level imports
- Pink theme color (#ff69b4) used for navigation bar