# Task Management System

This is a simple **Task Management System** built using modern front-end technologies. The project serves as a foundation for building task management applications with a responsive and user-friendly interface.

---

# Technologies Used

## 1. React
- A JavaScript library for building dynamic user interfaces.
- Provides a component-based structure for creating reusable UI elements.

## 2. TypeScript
- A typed superset of JavaScript for safer and more predictable code.
- Offers static type checking and better error detection during development.

## 3. Vite
- A fast and modern development server and build tool.
- Features hot module replacement (HMR) for instant updates and optimized production builds.

### Common Vite Commands:
- Start development server: `pnpm dev`
- Build for production: `pnpm build`
- Preview production build: `pnpm preview`

## 4. pnpm
- A high-performance package manager for Node.js with disk space optimization.
- Links dependencies instead of duplicating them, making installations faster and saving disk space.

### Common pnpm Commands:
- Install dependencies: `pnpm install`
- Add a new package: `pnpm add <package-name>`
- Remove a package: `pnpm remove <package-name>`

## 5. CSS
- Styles the application to provide a clean, modern, and visually appealing design.



---

## Prerequisites

Before you start, ensure you have the following installed:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **pnpm**: Install globally via:
  ```bash
  npm install -g pnpm
  ```

###  Getting Started
## 1. Clone the Repository
```bash
git clone https://github.com/Irfan-Ullah-cs/Task-Mangement-System.git
```
```bash
cd Task-Mangement-System
```

## 2. Install Dependencies
```bash
pnpm install
```
## 3. Start the Development Server
```bash
pnpm dev
```
## The development server will start, and the application will be available at:
```bash
http://localhost:5173
```

#### Other Useful Commands for pnpm

## 1. Install a New Dependency
Add a specific package to your project:

```bash
pnpm add <package-name>
```
## Add a specific package as a development dependency:

```bash
pnpm add <package-name> --save-dev
```
## 2. Remove a Dependency
```bash
pnpm remove <package-name>
```
## 3. Update Dependencies
```bash
pnpm update
```
## 4. Run Scripts
Run any script defined in your package.json file:

```bash
pnpm run <script-name>
```
## Example: Run the build script.

```bash
pnpm run build
```
## Testing Command
Run tests with the following command (if tests are configured):

```bash
pnpm test
```
## 5. List Installed Dependencies
View all installed packages and their versions:

```bash
pnpm list
```
## 6. Audit for Vulnerabilities
Check for vulnerabilities in your dependencies:

```bash
pnpm audit
```
## 7. Clean Cache
Clear the pnpm cache:

```bash
pnpm store prune
```
## 8. Create a Lockfile
Generate or update the pnpm-lock.yaml file to ensure consistent installs:

```bash
pnpm install --lockfile-only
```
## 9. Run in Recursive Mode
Run commands for multiple projects in a monorepo:

```bash
pnpm recursive install
```
## 10. Build and Test Packages
Run build or test scripts for all packages in a monorepo:

```bash
pnpm recursive build
pnpm recursive test
```
## 11. View Disk Space Used by Dependencies
Check the storage space used by dependencies:

```bash
pnpm store usages
```
### Package.json
## 1. Metadata
json
```code
{
  "name": "task-manager",
  "version": "1.0.0"
}
```
name: The name of your project, which should be unique if you intend to publish it to a package registry (like npm). Here, it’s "task-manager". \
version: Follows Semantic Versioning. "1.0.0" means this is the first stable release of your project.
## 2. Scripts
json
```code
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "start": "vite preview"
}
```
dev: Runs the Vite development server, enabling features like hot module replacement (HMR) for efficient local development. \
build: Creates an optimized production build of your project in the dist/ folder using Vite. \
start: Serves the production build locally using Vite’s built-in preview server. Useful for testing the build locally before deployment. \
These scripts make it easy to run common tasks without having to remember long commands. \

note: it may have other commands like test but this project does not hve testing.

## 3. Dependencies
json
```code
"dependencies": {
  "axios": "^1.7.7",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.28.0"
}
```
Dependencies are libraries your project needs to run in production. Here’s what each dependency does: \

axios: A popular library for making HTTP requests, useful for fetching or sending data to APIs. \
react: The core library for building user interfaces.\
react-dom: Provides DOM-specific methods for React. Essential for rendering React components in the browser. \
react-router-dom: A library for routing in React applications, allowing navigation between different pages or components. \
## 4. DevDependencies
json
```code
"devDependencies": {
  "@types/react": "^18.3.12",
  "@types/react-dom": "^18.3.1",
  "@types/react-router-dom": "^5.3.3",
  "@vitejs/plugin-react": "^4.3.3",
  "typescript": "^5.6.3",
  "vite": "^4.5.5"
}
```
DevDependencies are libraries and tools needed only during development (not required in production). Here's what each does:

@types/react, @types/react-dom, @types/react-router-dom:

TypeScript type definitions for React, ReactDOM, and React Router. These ensure type safety and better development experience when using TypeScript with these libraries. \
@vitejs/plugin-react: A plugin for Vite to support React-specific features like JSX and fast refresh. \

typescript: The TypeScript compiler, enabling type-checking and using .tsx files. \

vite: The build tool and development server for your project.
