# REST Countries Explorer 🌍

Welcome to the REST Countries Explorer, a dynamic web application built with React-TypeScript and Redux Toolkit. This project allows users to browse, search, and filter countries, providing detailed information and a seamless user experience with a light/dark mode toggle.

## ✨ Features

- **View All Countries**: Displays a comprehensive list of countries, fetched from a public API.
- **Search Functionality**: Users can search for specific countries by their full or partial names.
- **Filter by Region**: Countries can be filtered by continents (Africa, Americas, Asia, Europe, Oceania).
- **Country Details Page**: Click on any country card to view extensive details, including native name, population, region, sub-region, capital, top-level domain, currencies, and languages.
- **Theme Toggle**: Seamlessly switch between light and dark modes for an enhanced viewing experience.
- **Responsive Design**: Optimized for various screen sizes, from mobile devices to large desktops.
- **Fast Navigation**: Utilizes React Router for smooth, client-side page transitions.

## 🚀 Technologies Used

| Technology            | Description                                                                                | Link                                                                                                                                                                     |
| :-------------------- | :----------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **React**             | A JavaScript library for building user interfaces.                                         | [![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)                                                 |
| **Redux Toolkit**     | The official, opinionated, batteries-included toolset for efficient Redux development.     | [![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)                                      |
| **React Router**      | Declarative routing for React applications.                                                | [![React Router](https://img.shields.io/badge/React_Router-CA1C22?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/en/main)               |
| **Styled Components** | Visual primitives for the component age. Write actual CSS in your JavaScript.              | [![Styled Components](https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)](https://styled-components.com/) |
| **Tailwind CSS**      | A utility-first CSS framework for rapidly building custom designs.                         | [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)                       |
| **Vite**              | A next-generation frontend tooling that provides an extremely fast development experience. | [![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)                                                   |
| **TypeScript**        | A strongly typed superset of JavaScript that compiles to plain JavaScript.                 | [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)                     |
| **ESLint**            | Pluggable JavaScript linter.                                                               | [![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)                                             |
| **Prettier**          | An opinionated code formatter.                                                             | [![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)](https://prettier.io/)                                      |

## 🛠️ Getting Started

Follow these steps to set up and run the REST Countries Explorer locally on your machine.

### Installation

1.  **Clone the Repository**:

    ```bash
    git clone https://github.com/Isaacayomi/rest-countries-api.git
    cd rest-countries-api
    ```

2.  **Install Dependencies**:
    Install the necessary packages using npm:

    ```bash
    npm install
    ```

    Alternatively, if you prefer Yarn:

    ```bash
    yarn install
    ```

3.  **Start the Development Server**:
    Launch the application in development mode:
    ```bash
    npm run dev
    ```
    The application will typically be available at `http://localhost:5173/` (or another port if 5173 is in use).

### Environment Variables

This project uses a public API and does not require any specific environment variables for basic operation. All API endpoints are hardcoded in `src/constant.ts`.

## 🖥️ Usage

Once the application is running, you can interact with it through your web browser:

1.  **Browse Countries**: The homepage `/` displays a grid of country cards. Each card shows the country's flag, name, population, region, and capital.

2.  **Search for a Country**: Use the search input field at the top of the homepage to type in a country name. The list will dynamically update to show matching results. For example, typing "United" will show "United States", "United Kingdom", etc.

3.  **Filter by Region**: Utilize the "Filter by region" dropdown to narrow down the list of countries based on their continent. Select a region like "Africa" or "Europe" to see only countries from that region.

4.  **View Country Details**: Click on any country card to navigate to its dedicated details page. This page provides more in-depth information about the selected country, including its native name, sub-region, top-level domain, currencies, and spoken languages.

5.  **Go Back**: On the country details page, click the "Back" button to return to the previous view (either the main list or your last filtered/searched result).

6.  **Toggle Theme**: In the header, click the "Dark Mode" (or "Light Mode") button to instantly switch the application's visual theme between a bright, accessible light mode and a sleek, eye-friendly dark mode.

## 🤝 Contributing

Contributions are always welcome! If you have suggestions for improvements, new features, or bug fixes, please follow these guidelines:

1.  **Fork the repository**.
2.  **Clone your forked repository**:
    ```bash
    git clone https://github.com/YOUR_USERNAME/rest-countries-api.git
    cd rest-countries-api
    ```
3.  **Create a new branch**:
    ```bash
    git checkout -b feature/your-feature-name
    ```
4.  **Make your changes**.
5.  **Commit your changes** with a clear and descriptive message:
    ```bash
    git commit -m "feat: Add new feature X"
    ```
6.  **Push your branch** to your forked repository:
    ```bash
    git push origin feature/your-feature-name
    ```
7.  **Open a Pull Request** against the `main` branch of the original repository.

Please ensure your code adheres to the project's existing style and quality standards.

## ✍️ Author

**Isaac Ayomide**

- **GitHub**: [https://github.com/Isaacayomi](https://github.com/Isaacayomi)
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/your_username)
- **Twitter**: [Your Twitter Handle](https://twitter.com/your_username)

---

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)
