# emurgo-news-assignment
A Node.js application that serves news articles using the GNews API.
# 🚀 Features

Fetch top headlines, Search articles by keyword, Find specific articles by title, Caching mechanism for improved performance, Swagger documentation for easy API exploration

# 🛠️ Installation

### Clone the repository:
```
git clone https://github.com/your-username/emurgo-news-assignment.git
cd emurgo-news-assignment
```

### Install dependencies:
```npm install```

### Set up environment variables:
Create a .env file in the root directory and add:

```GNEWS_API_KEY=your_api_key_here```

 OR

  Replace the API key in src/utils/gNews.js:
```
  const API_KEY = 'YOUR_API_KEY_HERE';
```


# 🏃‍♂️ Running the Application
Development mode:
```npm run dev```

Production mode:
```npm start```

The application will be available at http://localhost:3000.

# 📚 API Documentation
Access the Swagger UI documentation at:

```http://localhost:3000/docs```

# 🧰 Tech Stack

Node.js

Express.js

Swagger UI

# 👨‍💻 Author
Harsh Pancholi
