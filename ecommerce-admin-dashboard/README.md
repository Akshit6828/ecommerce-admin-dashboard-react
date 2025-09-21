# eCommerce Admin Dashboard - React + Vite

This template provides a comprehensive setup for building an eCommerce admin dashboard using React and Vite. It includes features like routing, theming, notifications, Redux store, various UI components, and chart integrations.

## 🚀 Live Demo

**Production URL**: [https://ecommerce-admin-dashboard-react-three.vercel.app/](https://ecommerce-admin-dashboard-react-three.vercel.app/)

**Video Demo**: [Coming Soon - YouTube Demo Video]

## Key Features

- **React and Vite**: Utilizes React for building the UI and Vite for fast development and build processes.
- **Routing**: Implements routing using `react-router-dom` for navigation between different sections of the dashboard.
- **Theming**: Uses a custom `ThemeContext` for toggling between light and dark themes.
- **Notifications**: Includes a `NotificationContext` and a side panel for displaying notifications.
- **Redux Store**: Manages application state using Redux Toolkit, with an example feature for managing favorite tabs.
- **UI Components**: Offers a variety of reusable UI components such as:
  - `AppHeader`: Header section with navigation and theme toggle.
  - `LeftSidePanel`: Sidebar menu for navigating the dashboard.
  - `SummeryCard`: Card component for displaying summary information.
  - `TopSellingProduct`: Component listing top-selling products.
  - `NotificationSidePanel`: Side panel for displaying notifications, activities, and contacts.
- **Chart Integration**: Integrates various chart types using `chart.js` and `react-chartjs-2`, including:
  - `LineChart`: For displaying revenue trends.
  - `BarChart`: For comparing projections vs. actuals.
  - `PieChart`: For showing total sales distribution.
  - `WorldMap`: For visualizing revenue by location.
- **SCSS Styling**: Uses SCSS for styling with a well-organized structure including global variables.
- **Lazy Loading**: Implements lazy loading for routes to improve initial load time.

## Technologies Used

- React
- Vite
- React Router DOM
- Redux Toolkit
- Chart.js, react-chartjs-2, chartjs-chart-geo
- @mui/material
- SCSS

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1.  Clone the repository:

    ```sh
    git clone https://github.com/Akshit6828/ecommerce-admin-dashboard-react.git
    ```

2.  Navigate to the project directory:

    ```sh
    cd ecommerce-admin-dashboard-react/ecommerce-admin-dashboard
    ```

3.  Install dependencies:

    ```sh
    npm install
    ```

### Development

1.  Start the development server:

    ```sh
    npm run dev
    ```

    This will start the Vite development server with hot module replacement (HMR).

### Building for Production

1.  Build the project for production:

    ```sh
    npm run build
    ```

    This will create an optimized build in the `dist` directory.

### Linting

1.  Run ESLint to check for code quality issues:

    ```sh
    npm run lint
    ```

## Design Decisions, Challenges, and Improvements

### Design Decisions

- **Component-Based Architecture**: The application follows a component-based architecture, making it easier to maintain and scale. Each component is responsible for rendering a specific part of the UI.
- **Redux for State Management**: Redux Toolkit is used for managing the application state. This makes it easier to share state between components and to manage complex state transitions.
- **SCSS for Styling**: SCSS is used for styling the application. This allows for the use of variables, and other features that make styling easier and more maintainable.
- **Lazy Loading**: Lazy loading is used for routes to improve initial load time. This means that only the code for the current route is loaded when the application starts.

### Challenges Faced

- **Chart Integration**: Integrating the various chart types was a challenge. Each chart type has its own specific requirements and configuration options.
- **State Management**: Managing the application state with Redux Toolkit was a challenge. It required careful planning and organization to ensure that the state was consistent and predictable.
- **Theming**: Implementing the theming functionality was a challenge. It required careful consideration of how to apply the theme to the various components in the application.

### Improvements Made

- **Improved Performance**: The application's performance has been improved by using lazy loading and by optimizing the rendering of the various components.
- **Improved Code Quality**: The code quality has been improved by using ESLint and by following a consistent coding style.
- **Improved User Experience**: The user experience has been improved by adding notifications and by making the application more responsive.

## Expanding the ESLint configuration

This project uses ESLint for code linting. The configuration can be found in `eslint.config.js`. Feel free to modify this file to suit your project's specific linting needs. For more information, see the `typescript-eslint` documentation.
