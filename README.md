# 🛒 E-Commerce Project

A modern E-Commerce application built with Angular following a clean and scalable architecture.

---

# 📁 Project Structure

The project is organized into feature-based folders to improve scalability and maintainability.

```bash
src/
└── app/
    ├── core/
    ├── feature/
    └── shared/
```

### Folder Explanation

#### `core/`

Contains singleton services and app-wide functionality.

Examples:

- Guards
- Interceptors
- Services
- Layout Components
- Authentication Logic

#### `feature/`

Contains feature modules and application pages.

Examples:

- Home
- Products
- Cart
- Brands
- Categories
- Payments

#### `shared/`

Contains reusable components, pipes, directives, and shared utilities.

Examples:

- Shared Components
- Reusable UI Elements
- Pipes
- Directives

---

# ⚡ Generate Multiple Components

You can create multiple Angular components at once using the following command:

```bash
for %n in (home product cart brands categories p_details payments) do ng g c %n
```

This command will generate the following components:

- Home
- Product
- Cart
- Brands
- Categories
- Product Details
- Payments

---

# ⚙️ Angular CLI Configuration

To improve naming conventions and project consistency, add the following configuration inside `angular.json`:

```json
"schematics": {
  "@schematics/angular:component": {
    "type": "component"
  },
  "@schematics/angular:directive": {
    "type": "directive"
  },
  "@schematics/angular:service": {
    "type": "service"
  },
  "@schematics/angular:class": {
    "type": "class"
  },
  "@schematics/angular:interface": {
    "type": "interface"
  },
  "@schematics/angular:interceptor": {
    "typeSeparator": "-"
  }
}
```

### Why use this configuration?

This setup helps maintain a consistent naming convention across the project.

Examples:

```bash
auth.component.ts
auth.service.ts
auth.directive.ts
auth.interceptor.ts
```

Instead of inconsistent file naming.

---

# 🚀 Getting Started

Install dependencies:

```bash
npm install
```

Run the project:

```bash
ng serve
```

Open in browser:

```bash
http://localhost:4200
```

### 📌 Feature Placement Rule

Before creating any feature, ask yourself:

> **Is login/authentication required to access this feature?**

#### Put it inside `core/`

If the feature is **essential for the whole application** or requires authentication globally.

Examples:

- Authentication
- Navbar
- Layout
- Guards
- Interceptors
- User Session Management

#### Put it inside `feature/`

If the feature represents a **specific business page or functionality** and is not globally required.

Examples:

- Home
- Products
- Cart
- Categories
- Brands
- Payments

### Example

✅ **Profile Page** → `feature/`  
Because it is a page/feature.

✅ **Auth Service / JWT Handling** → `core/`  
Because authentication is a global application concern.

❌ **Login Page inside `core/`?**

- If login is a **mandatory entry point for the whole app** → put it in `core/`
- If login is **optional or isolated as a normal feature** → put it in `feature/`
