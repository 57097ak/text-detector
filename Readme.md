# AI Text Detector

This project is a MERN stack application that detects AI-generated text using the Sapling AI Detector API. The application provides an interface where users can input text and receive a probability score indicating the likelihood that the text is AI-generated.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [License](#license)

## Features

- **Text Analysis**: Detects whether the provided text is AI-generated.
- **Detailed Sentence Analysis**: Provides sentence-level scores with color coding to highlight AI-generated sentences.
- **Responsive UI**: User-friendly and responsive interface built with React and Bootstrap.
- **API Documentation**: Integrated Swagger documentation for the backend API.

## Prerequisites

- Node.js
- npm
- MongoDB (if you decide to use a database)

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/ai-text-detector.git
    cd ai-text-detector
    ```

2. **Set up the backend:**
    ```bash
    cd backend
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the `backend` directory and add your Sapling API key:
    ```plaintext
    SAPLING_API_KEY=your_api_key_here
    ```

4. **Set up the frontend:**
    ```bash
    cd ../frontend
    npm install
    ```

## Usage

1. **Run the backend server:**
    ```bash
    cd backend
    node server.js
    ```

2. **Run the frontend development server:**
    ```bash
    cd ../frontend
    npm start
    ```

3. **Access the application:**
    Open your browser and navigate to `http://localhost:3000`.

## API Documentation

The backend API is documented using Swagger. To view the API documentation:

1. Start the backend server (if not already running).
2. Open your browser and navigate to `http://localhost:5000/api-docs`.

### Backend Endpoints

- `POST /detect`: Detects if the text is AI-generated.

#### Request Body

```json
{
    "text": "This is sample text"
}



## Response 
{
    "score": 0.9998242085867214,
    "sentence_scores": [
        {
            "score": 0.0006048416698468673,
            "sentence": "This is sample text"
        }
    ],
    "text": "This is sample text"
}



This `README.md` provides a comprehensive overview of your project, including its features, prerequisites, installation steps, usage instructions, API documentation, and project structure. You can customize the repository URL and other specific details as needed.
