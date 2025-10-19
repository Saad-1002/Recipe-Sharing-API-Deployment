const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'data', 'recipes.json');

app.use(cors());
app.use(bodyParser.json());

// GET all recipes
app.get('/api/recipes', (req, res) => {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf-8');
    const recipes = JSON.parse(data || '[]');
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: 'Failed to read recipes' });
  }
});

// POST new recipe
app.post('/api/recipes', (req, res) => {
  const { title, ingredients, instructions, cookTime, difficulty } = req.body;

  if (!title || !ingredients || !instructions) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newRecipe = {
    id: Date.now().toString(),
    title,
    ingredients,
    instructions,
    cookTime,
    difficulty: difficulty || 'medium'
  };

  try {
    const data = fs.readFileSync(DATA_FILE, 'utf-8');
    const recipes = JSON.parse(data || '[]');
    recipes.push(newRecipe);
    fs.writeFileSync(DATA_FILE, JSON.stringify(recipes, null, 2));
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save recipe' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
