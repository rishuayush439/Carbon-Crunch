
# CarbonCrunch - Carbon Emissions Tracking & Management Platform

## Overview

CarbonCrunch is a modern web application designed to help companies track, minimize, offset, and report their carbon emissions effortlessly. The platform provides comprehensive GHG (Greenhouse Gas) accounting across Scope 1, Scope 2, and Scope 3 emissions, enabling organizations to accelerate their decarbonization progress.

## Live Demo

**URL**: https://carbon-crunch-omega.vercel.app/
## Technologies Used

This project leverages a modern technology stack for optimal performance and developer experience:

### Core Technologies
- **React**: A JavaScript library for building user interfaces
- **TypeScript**: Strongly typed programming language that builds on JavaScript
- **Vite**: Next generation frontend tooling with fast HMR (Hot Module Replacement)

### UI Components & Styling
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **shadcn/ui**: High-quality, accessible, and customizable UI components
- **Lucide React**: Beautiful & consistent icon set

### 3D Visualization & Animation
- **Three.js**: JavaScript 3D library for WebGL rendering
- **React Three Fiber**: React renderer for Three.js
- **React Three Drei**: Useful helpers for React Three Fiber
- **Framer Motion**: Animation library for React with fluid transitions

### State Management & Data Fetching
- **TanStack Query**: Powerful asynchronous state management for fetching, caching, and updating data

### Routing
- **React Router DOM**: Declarative routing for React applications

### Data Visualization
- **Recharts**: Composable charting library built on React components

## Project Structure

The application follows a component-based architecture:

```
src/
├── components/       # Reusable UI components
│   ├── ui/           # shadcn/ui components
│   └── ...           # Custom components
├── pages/            # Application pages/routes
├── hooks/            # Custom React hooks
├── lib/              # Utility functions and helpers
└── ...
```

## Key Features

- **Dashboard Visualization**: Comprehensive overview of carbon emissions
- **Interactive 3D Visualization**: Engaging Three.js animation for better data understanding
- **Responsive Design**: Optimized for all device sizes
- **Smooth Animations**: Enhanced user experience with Framer Motion
- **Accessible Components**: Built with shadcn/ui for optimal accessibility

## Development Approach

The application was developed with the following considerations:

1. **Component-Based Architecture**: Breaking down the UI into small, reusable components
2. **TypeScript Integration**: Ensuring type safety across the application
3. **Responsive Design**: Mobile-first approach with Tailwind CSS
4. **Performance Optimization**: Minimizing bundle size and optimizing render performance
5. **Visual Appeal**: Implementing modern design principles with smooth animations
6. **3D Visualization**: Enhancing data presentation with interactive Three.js elements

## Getting Started

To set up the project locally:

```sh
# Clone the repository
git clone <REPOSITORY_URL>

# Navigate to the project directory
cd carboncrunch

# Install dependencies
npm install

# Start the development server
npm run dev
```

Visit `http://localhost:5173` to view the application.

## Future Enhancements

- Enhanced data visualization options
- More interactive 3D elements
- User authentication and personalized dashboards
- Integration with external carbon data sources
- Advanced reporting features
