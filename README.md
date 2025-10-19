# Kalvium Recipe Sharing API Deployment

##  Project Overview
This project is a simple Recipe Sharing API built using **Node.js** and **Express**, deployed on **Render**.  
It allows users to add and fetch recipes through RESTful API endpoints.

---

## How to Run the Project Locally

1. Clone the repository:
   ```bash
   git clone <your-repo-link>
Navigate to the project folder:

bash
Copy code
cd recipe-api
Install dependencies:

bash
Copy code
npm install
Run the server:

bash
Copy code
npm start
The server will start on:

arduino
Copy code
http://localhost:3000
Deployed API URL
Live URL:

arduino
Copy code
https://recipe-api-yourname.onrender.com
(Replace yourname with your actual Render service name)

API Endpoints
1️. Add a New Recipe — POST /api/recipes
Request Body (JSON):

json
Copy code
{
  "title": "Pasta",
  "ingredients": "noodles, sauce, cheese",
  "instructions": "Boil noodles and mix with sauce.",
  "cookTime": "20 mins"
}
Response Example:

json
Copy code
{
  "id": "1697539200000",
  "title": "Pasta",
  "ingredients": "noodles, sauce, cheese",
  "instructions": "Boil noodles and mix with sauce.",
  "cookTime": "20 mins",
  "difficulty": "medium"
}

2. Get All Recipes — GET /api/recipes
Response Example:

json
Copy code
[
  {
    "id": "1697539200000",
    "title": "Pasta",
    "ingredients": "noodles, sauce, cheese",
    "instructions": "Boil noodles and mix with sauce.",
    "cookTime": "20 mins",
    "difficulty": "medium"
  }
]

Challenges Faced

Setting up proper CORS for frontend access.

Ensuring that recipes were saved and retrieved correctly from recipes.json.

Deployment time delay on Render (5–10 minutes per build).