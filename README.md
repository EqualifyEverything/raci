# RACI

This project is a visualization tool for accessibility audit data. It allows users to view and filter audit results, identify frequent issues, and explore tag clouds of recurring problems.

## Getting Started

Follow these steps to set up and run the project locally on your machine.

### Prerequisites

*   **Node.js**: Ensure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).
*   **npm**: Node Package Manager is included with Node.js.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd raci
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

### Running Locally

To start the development server:

```bash
npm run dev
```

The terminal will direct you to a local URL (typically `http://localhost:5173/`) where you can view the application.

### Building for Production

To build the project for production:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Features

*   **Dynamic Data Loading**: Loads accessibility audit data from JSON APIs.
*   **Interactive Dashboard**:
    *   **Overview**: Summarizes total pages, violations, and passes.
    *   **Tag Clouds**: Visualizes frequent message types and problematic URLs.
    *   **Detailed Table**: Displays granular audit data with sorting and filtering capabilities.
*   **Accessibility Focus**: Designed to help identify and remediate accessibility issues efficiently.
