# eCommerce Admin Dashboard - React + Vite

This template provides a comprehensive setup for building an eCommerce admin dashboard using React and Vite. It includes features like routing, theming, notifications, Redux store, various UI components, and chart integrations.

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
- **SCSS Styling**: Uses SCSS for styling with a well-organized structure including global variables and mixins.
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
    git clone <repository-url>
    ```

2.  Navigate to the project directory:

    ```sh
    cd ecommerce-admin-dashboard
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

    This will create an optimized build in the [dist](http://_vscodecontentref_/10) directory.

### Linting

1.  Run ESLint to check for code quality issues:

    ```sh
    npm run lint
    ```

## Expanding the ESLint configuration

This project uses ESLint for code linting. The configuration can be found in [eslint.config.js](http://_vscodecontentref_/11). Feel free to modify this file to suit your project's specific linting needs. For more information, see the `typescript-eslint` documentation.
