import { useState, useEffect } from 'react';

export default function FavouriteList() {
  // Retrieve saved recipes from localStorage or use an empty array
  const [recipes, setRecipes] = useState(JSON.parse(localStorage.getItem('recipes')) || []);
  
  // State for the new recipe's title, description, and editing
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  
  // useEffect to save recipes to localStorage whenever recipes change
  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);
  
  // Function to add or update a recipe
  function saveRecipe() {
    if (title.trim() !== '' && description.trim() !== '') {
      const newRecipe = { title, description };
      if (editingIndex !== null) {
        const updatedRecipes = [...recipes];
        updatedRecipes[editingIndex] = newRecipe;
        setRecipes(updatedRecipes);
        setEditingIndex(null);  // Clear editing state after update
      } else {
        setRecipes([...recipes, newRecipe]);
      }
      setTitle('');
      setDescription('');
    }
  }

  // Function to remove a recipe
  function removeRecipe(index) {
    const updatedRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(updatedRecipes);
  }

  // Function to set editing mode for a recipe
  function editRecipe(index) {
    setTitle(recipes[index].title);
    setDescription(recipes[index].description);
    setEditingIndex(index);
  }

  return (
    <div className='recipes'>
      {/* Form for adding/updating a recipe */}
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Recipe Title"
      />
      <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Recipe Description"
      />
      <button onClick={saveRecipe}>
        {editingIndex !== null ? 'Update Recipe' : 'Add Recipe'}
      </button>
      
      {/* Display list of recipes */}
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => editRecipe(index)}>Edit</button>
            <button onClick={() => removeRecipe(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
