# DrawBaseX

DrawBaseX is an open-source web application that allows users to visually design database schemas through an intuitive diagram editor and export them to various database formats.

## Features

- Interactive canvas for creating database diagrams
- Visual table creation and relationship mapping
- Support for multiple database types:
  - PostgreSQL
  - MySQL
  - MongoDB
  - SQLite
  - (More coming soon!)
- Real-time schema code generation
- Export diagrams as:
  - Database schema scripts
  - PNG/SVG images
  - JSON format
- Collaborative editing (coming soon)
- Version history (coming soon)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Modern web browser

### Installation

1. Clone the repository 

``` bash
git clone https://github.com/tejasbenibagde/drawBaseX.git
cd drawBaseX
```

2. Install Dependencies

``` bash
npm install
```
or
``` bash
yarn install
```

3. Start the development server

``` bash
npm run dev
# or
yarn dev
```

4. Open `http://localhost:3000` in your browser

## Usage

1. Create a new diagram by clicking "New Diagram"
2. Add tables using the table tool from the toolbar
3. Define columns and their properties
4. Create relationships between tables using the connection tool
5. Export your schema in your preferred database format

## Contributing

We welcome contributions from the community! Here's how you can help:

### Setting Up Development Environment

1. Fork the repository
2. Create a new branch for your feature
```bash
git checkout -b feature/your-feature-name
```
3. Make your changes
4. Write or update tests as needed
5. Run tests
```bash
npm test
# or
yarn test
```

### Contribution Guidelines

1. **Code Style**
   - Follow the existing code style
   - Use meaningful variable and function names
   - Add comments for complex logic
   - Use TypeScript for type safety

2. **Commit Messages**
   - Use clear and descriptive commit messages
   - Follow conventional commits format:
     - `feat:` for new features
     - `fix:` for bug fixes
     - `docs:` for documentation changes
     - `style:` for formatting changes
     - `refactor:` for code refactoring
     - `test:` for adding tests
     - `chore:` for maintenance tasks

3. **Pull Requests**
   - Create PRs against the `main` branch
   - Include a clear description of changes
   - Reference any related issues
   - Ensure all tests pass
   - Update documentation as needed

4. **Bug Reports**
   - Use the issue tracker
   - Include steps to reproduce
   - Provide expected vs actual behavior
   - Include browser/environment details

### Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Project Structure

```
drawbasex/
├── src/
│   ├── components/    # React components
│   ├── hooks/        # Custom React hooks
│   ├── services/     # Business logic and API calls
│   ├── store/        # State management
│   ├── types/        # TypeScript types
│   └── utils/        # Helper functions
├── public/           # Static assets
├── tests/           # Test files
└── docs/            # Documentation
```

## Roadmap

- [ ] Basic diagram editor
- [ ] Table creation and editing
- [ ] Relationship mapping
- [ ] Schema export for PostgreSQL
- [ ] Schema export for MySQL
- [ ] Schema export for MongoDB
- [ ] Collaborative editing
- [ ] Version history
- [ ] Custom themes
- [ ] Template library
- [ ] API integration

## Support

- Create an issue for bug reports or feature requests
- Join our [Discord community](link-to-discord) for discussions
- Check out our [documentation](link-to-docs) for guides and tutorials

## Acknowledgments

- Inspired by tools like [ERD Editor](https://erdeditor.com/) and [dbdiagram.io](https://dbdiagram.io)
- Built with [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), and [fabric.js](http://fabricjs.com/)
```

