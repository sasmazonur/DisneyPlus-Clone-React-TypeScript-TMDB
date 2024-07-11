# Disney+ Clone with React
Welcome to the Disney+ Clone project! This repository contains the code for a feature-rich streaming platform built with React, designed to mimic the popular Disney+ service. Follow along as we explore advanced React concepts, state management, API integration, and responsive design.

![Onur+ Overview](https://github.com/sasmazonur/DisneyPlus-Clone-React-TypeScript-TMDB/blob/main/public/onurplus.gif)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Further Reading](#further-reading)

## Introduction

Building a Disney+ clone is a fantastic way to dive deep into React development. This project not only replicates the look and feel of Disney+ but also implements advanced features such as user authentication, state management, and dynamic routing.

This README provides an overview of the project and instructions on how to set it up and run it on your local machine. For a detailed step-by-step guide, refer to my comprehensive Medium article:

[Read the full tutorial on Medium](https://onursasmaz.medium.com/)

## Features

- **Home Page**: Displays the latest movies and TV shows, with a prominent banner and studio logos.
- **Movies and TV Shows Pages**: Browse and explore a vast collection of content.
- **Search Functionality**: Find your favorite movies and TV shows.
- **Watchlist**: Add and manage your personalized watchlist.
- **Profile Management**: User authentication and profile management.
- **Content Details**: Detailed information pages for individual movies and TV shows.
- **Responsive Design**: Fully responsive and optimized for various devices.

## Getting Started

### Prerequisites

Ensure you have the following installed on your development machine:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [npm](https://www.npmjs.com/) (v6.x or later)
- [API Key from The Movie Database (TMDb)](https://www.themoviedb.org/settings/api)

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/disney-plus-clone.git
cd disney-plus-clone
```

2. **Install dependencies:**

```bash
npm install
```

3. **Set up environment variables:**

Create a `.env` file in the root directory and add your TMDb API key:

```
REACT_APP_TMDB_API_KEY=your_api_key_here
```

4. **Start the development server:**

```bash
npm run dev
```

The application should now be running on `http://localhost:5173`.

## Project Structure

Here's a brief overview of the project's structure:

```
disney-plus-clone/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── ...
│   ├── pages/
│   │   ├── Home/
│   │   ├── Movies/
│   │   ├── TVShows/
│   │   ├── Profile/
│   │   ├── Search/
│   │   ├── Watchlist/
│   │   ├── MovieDetail/
│   │   └── TVShowDetail/
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── .env
├── package.json
└── ...
```

## Usage

To use the application:

1. **Explore the home page**: Browse through the featured movies and TV shows.
2. **Search for content**: Use the search bar to find specific titles.
3. **Manage your watchlist**: Add or remove items from your watchlist.
4. **View detailed information**: Click on any movie or TV show to see detailed information.

For a detailed guide on how each feature is implemented, check out my Medium article:

[Read the full tutorial on Medium](https://onursasmaz.medium.com/)

## Contributing

We welcome contributions! If you have any suggestions or find a bug, please open an issue or submit a pull request.

1. **Fork the repository**
2. **Create a new branch**
3. **Make your changes**
4. **Submit a pull request**

## License

This project is licensed under the Educational Use License. You are free to use this project for educational purposes only. Commercial use is strictly prohibited. If you wish to use any part of this project in a commercial application, you must contact the author for permission.

For more details, see the [LICENSE](LICENSE) file.

## Further Reading

For a detailed step-by-step guide on building this Disney+ clone, including code snippets and explanations, please visit my Medium article:

[Read the full tutorial on Medium](https://onursasmaz.medium.com/)

---

Happy coding! If you have any questions or feedback, feel free to reach out.