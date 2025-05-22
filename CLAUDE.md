# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Frontend Development
- `bun run dev` - Start development server (runs Vite dev server on localhost:1420)
- `bun run build` - Build frontend (TypeScript compilation + Vite build)
- `bun run preview` - Preview built frontend

### Tauri Development
- `bun run tauri dev` - Start Tauri development mode (builds Rust backend + starts frontend)
- `bun run tauri build` - Build complete Tauri application for distribution

### Package Management
- Uses Bun as package manager (bun.lock present)
- Frontend dependencies managed via package.json
- Rust dependencies managed via src-tauri/Cargo.toml

## Architecture Overview

This is a Tauri desktop application combining a React/TypeScript frontend with a Rust backend.

### Frontend Stack
- **Framework**: React 19 + TypeScript + Vite
- **UI Library**: shadcn/ui (configured with "new-york" style)
- **Styling**: Tailwind CSS v4 with CSS variables
- **State Management**: XState Store (@xstate/store)
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React + Phosphor Icons

### Backend Stack
- **Runtime**: Tauri v2
- **Language**: Rust
- **Email Libraries**: email-lib, lettre
- **Search**: Tantivy (full-text search engine)
- **Security**: keyring (credential storage)

### Application Structure
The app appears to be an email client with these main components:
- **Mail Layout** (`mail-layout.tsx`) - Main application shell with resizable panels
- **Mail List** (`mail-list.tsx`) - Email list view
- **Mail Display** (`mail-display.tsx`) - Email content viewer
- **Account Switcher** (`mail-account-switcher.tsx`) - Multi-account support
- **Navigation** (`mail-nav.tsx`) - Sidebar navigation

### Data Types
- Core email schema defined in `dtypes.ts` using Zod
- Mail type includes: id, name, email, subject, text, date, read status, labels

### Key Configuration Files
- `tauri.conf.json` - Tauri app configuration (build commands, window settings)
- `components.json` - shadcn/ui configuration
- `src-tauri/Cargo.toml` - Rust dependencies including email and search libraries

### Development Notes
- Tauri uses automatic dev/build commands configured in tauri.conf.json
- Frontend serves on localhost:1420 during development
- Rust backend includes email processing capabilities via email-lib and lettre
- Search functionality implemented with Tantivy