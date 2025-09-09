# manfront

Modern TypeScript project with a powerful tech stack for frontend development.

## Tech Stack

- **Framework**: rune-ts - Reactive UI framework
- **ORM**: Drizzle - Lightweight and performant TypeScript ORM
- **Validation**: Zod - TypeScript-first schema validation
- **Code Quality**: Biome - Fast formatter and linter
- **Build Tool**: Vite - Next generation frontend tooling
- **Utilities**: fxts - Functional programming utilities
- **Documentation**: Storybook - Component development environment
- **Git Hooks**: Husky - Git hooks management

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run type-check` - Run TypeScript type checking
- `npm run lint` - Run Biome linter
- `npm run lint:fix` - Fix linting issues
- `npm run format` - Format code with Biome
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production

## Project Structure

```
manfront/
├── src/
│   ├── index.ts          # Main entry point
│   └── index.stories.tsx # Storybook stories
├── .storybook/           # Storybook configuration
├── .github/              # GitHub specific files
├── dist/                 # Build output
├── biome.json           # Biome configuration
├── package.json         # Project dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── README.md           # This file
```

## Development Workflow

1. **Code Quality**: Biome handles both formatting and linting
2. **Type Safety**: TypeScript with strict configuration
3. **Git Hooks**: Husky ensures code quality before commits
4. **Component Development**: Storybook for isolated component development
5. **Functional Programming**: fxts for functional utilities
6. **Data Validation**: Zod for runtime type validation

## Contributing

1. Make sure all tests pass
2. Format code with `npm run format`
3. Fix any linting issues with `npm run lint:fix`
4. Commit your changes (Husky will run pre-commit hooks)

## License

MIT
