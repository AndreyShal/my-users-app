# User Table App

A simple React application for displaying a list of users with sorting and refresh functionality. This project utilizes `@tanstack/react-table` for table management and includes TypeScript for type safety.

## Features

- Display a list of users fetched from an API.
- Sort users by different columns.
- Refresh the user list with a button click.
- Table columns include Name, Email, Phone, and Company.

## Technologies Used

- React
- TypeScript
- SCSS
- @tanstack/react-table

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/AndreyShal/user-table-app.git
    cd user-table-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

## Usage

1. **Start the development server:**

    ```bash
    npm start
    ```

   This will start the development server and open the application in your default browser.

2. **Build the project for production:**

    ```bash
    npm run build
    ```

   This will create a production build of the application in the `dist` folder.

## Project Structure


- **`components/`**: Contains reusable components. `Button` and `UserTable` are the main components.
- **`services/`**: Contains functions for API calls.
- **`styles/`**: Contains SCSS files for styling.
- **`types/`**: Contains TypeScript type definitions.
- **`utils/`**: Contains utility functions.

## Configuration

1. **Prettier**: The project uses Prettier for code formatting. You can format the code with the following command:

    ```bash
    npm run format
    ```

2. **ESLint**: The project uses ESLint for linting. You can run the linter with the following command:

    ```bash
    npm run lint
    ```

## API

The application uses the [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) API to fetch user data.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, feel free to contact me at [andreyshalomitsky@gmail.com].

