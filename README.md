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
