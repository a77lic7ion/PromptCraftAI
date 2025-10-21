# Behavioral Designer

An interactive tool that uses a conversational AI assistant to help you generate a detailed blueprint for your next application. Define behaviors, add variables, and let the AI generate test cases, documentation, or even code snippets.

[![Behavioral Designer Screenshot](https://storage.googleapis.com/aistudio-ux-team-public/sample-apps/behavioral-designer-screenshot.png)](https://your-live-demo-link.com)

## ✨ Features

*   **Behavior Blueprinting**: Clearly define application behavior with sections for Pre-conditions, Actions, and Post-conditions.
*   **Dynamic Variables**: Create and manage variables to make your blueprints reusable and dynamic.
*   **Drag & Drop Interface**: Easily reorder variables with an intuitive drag-and-drop interface.
*   **AI-Powered Generation**: Leverage the power of the Google Gemini API to automatically generate content based on your blueprint.
*   **Markdown Preview**: View the AI-generated output in a clean, formatted Markdown preview pane.
*   **Modern & Responsive UI**: A sleek, dark-themed interface built with Tailwind CSS that works great on all screen sizes.

## 🚀 Tech Stack

*   **Frontend**: [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **AI**: [Google Gemini API](https://ai.google.dev/docs) (`@google/genai`)
*   **Drag & Drop**: [dnd-kit](https://dndkit.com/)
*   **Build Tool**: [Vite](https://vitejs.dev/)

## 🛠️ Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   [Node.js](https://nodejs.org/en/) (v18 or newer recommended)
*   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
*   A Google Gemini API Key. You can get one from [Google AI Studio](https://aistudio.google.com/).

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/behavioral-designer.git
    cd behavioral-designer
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a file named `.env.local` in the root of your project. Inside this file, add your Google Gemini API key:
    ```
    VITE_API_KEY="YOUR_GEMINI_API_KEY"
    ```
    *Note: For security, Vite only exposes environment variables prefixed with `VITE_` to your client-side code.*


4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open your browser to the local URL provided by Vite (e.g., `http://localhost:5173`) to see the application.

## 📂 Project Structure

```
behavioral-designer/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable React components
│   │   ├── icons/        # SVG icon components
│   │   ├── ui/           # Generic UI components (Button, Card, etc.)
│   │   └── ...           # Feature-specific components
│   ├── services/         # API service layers (e.g., geminiService.ts)
│   ├── types/            # TypeScript type definitions
│   ├── App.tsx           # Main application component
│   ├── index.css         # Global styles and Tailwind directives
│   └── index.tsx         # Application entry point
├── .env.local          # Local environment variables (untracked)
├── index.html            # Main HTML file
├── package.json          # Project dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── vite.config.ts        # Vite configuration
```

## 🤝 Contributing

Contributions are welcome! If you have a suggestion or find a bug, please open an issue to discuss it first.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is licensed under the MIT License.
