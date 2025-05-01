# Dynamic Quiz App

This web-based quiz application allows users to test their knowledge across various categories. It dynamically loads quizzes, features a per-question timer, provides immediate feedback on answers, lets users adjust the number of questions, and displays a final score. This project was developed to explore data transfer between files, timer manipulation in JavaScript, and JSON handling.

## Features

* **Dynamic Quizzes:** Quizzes are loaded on demand from data files, making it easy to expand with new categories and questions without altering the main application code.
* **Categorized Quizzes:** Users can choose quizzes from different subject areas.
* **Per-Question Timer:** Each question has its own countdown, adding a time constraint to the quiz experience.
* **Immediate Answer Feedback:** After each answer submission, users instantly see if they were correct or incorrect.
* **Adjustable Question Numbers:** Users can select how many questions they want to answer in a quiz session.
* **Final Score:** A summary screen at the end of the quiz presents the user's total score.
* **JSON Handling:** Quiz content, including questions, choices, and correct answers, is managed using JSON format.
* **Data Transfer:** The application demonstrates fetching and utilizing data from external files.
* **Timer Manipulation:** JavaScript functions are used to implement and control the individual question timers.

## Technologies Used

* HTML
* CSS
* JavaScript

## How to Use

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd dynamic-quiz-app
    ```
3.  **Open the `index.html` file in your web browser.**

## Data Format (Example of a data structure)

Quiz data is stored in a structured format, for example:

```json
[
  {
    "question": "What is the capital of France?",
    "options": ["Berlin", "Madrid", "Paris", "Rome"],
    "correctAnswer": "Paris"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": ["Mars", "Jupiter", "Venus", "Saturn"],
    "correctAnswer": "Mars"
  }
  // ... more questions
]