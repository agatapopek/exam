import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent, CardActions, IconButton, Typography, Grid, Collapse } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function FavouriteList() {
  const [recipes, setRecipes] = useState(JSON.parse(localStorage.getItem('recipes')) || []);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [expanded, setExpanded] = useState({}); // Track expanded state for each recipe

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  function saveRecipe() {
    if (title.trim() !== '' && description.trim() !== '') {
      const newRecipe = { title, description };
      if (editingIndex !== null) {
        const updatedRecipes = [...recipes];
        updatedRecipes[editingIndex] = newRecipe;
        setRecipes(updatedRecipes);
        setEditingIndex(null);
      } else {
        setRecipes([...recipes, newRecipe]);
      }
      setTitle('');
      setDescription('');
    }
  }

  function removeRecipe(index) {
    const updatedRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(updatedRecipes);
  }

  function editRecipe(index) {
    setTitle(recipes[index].title);
    setDescription(recipes[index].description);
    setEditingIndex(index);
  }

  // Toggle collapse for the recipe description
  const handleExpandClick = (index) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [index]: !prevExpanded[index], // Toggle the state of the clicked recipe
    }));
  };

  return (
    <div className="recipes">
      <h1>Create a recipe</h1>
      {/* Form for adding/updating a recipe */}
      <div className="form-container">
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Recipe Title"
          className="input-field"
        />
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Recipe Description"
          className="input-field"
        />
        <button onClick={saveRecipe} className="btn-save">
          {editingIndex !== null ? 'Update Recipe' : 'Add Recipe'}
        </button>
      </div>

      {/* Display list of recipes in a row */}
      <Grid container spacing={2} justifyContent="flex-start">
        {recipes.map((recipe, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader title={recipe.title} />
              <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {/* Collapse the description */}
                  <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
                    <Typography variant="body2" sx={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}>
                      {recipe.description}
                    </Typography>
                  </Collapse>
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton onClick={() => editRecipe(index)} aria-label="edit recipe">
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => removeRecipe(index)} aria-label="delete recipe">
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  onClick={() => handleExpandClick(index)} // Toggle collapse on click
                  aria-label="toggle description"
                >
                  {/* Toggle ExpandMoreIcon and ExpandLessIcon based on expanded state */}
                  {expanded[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
