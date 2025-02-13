import pizzaImage from '../assets/images/pizza.jpg';
import pierogiImage from '../assets/images/pierogi.jpg';
import burgerImage from '../assets/images/burger.jpg';
import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import { Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";

const recipes = [
  {
    title: "Pizza",
    image: pizzaImage,
    description:
      "A quick and easy pizza with dough, tomato sauce, mozzarella cheese, and your favorite toppings, baked to perfection.",
    category: "Italian",
    method: [
      "Heat 1/2 cup of broth in a pot until simmering, add saffron and set aside for 10 minutes.",
      "Heat oil in a paella pan over medium-high heat. Add chicken, shrimp and chorizo, and cook until lightly browned.",
      "Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper. Cook until thickened and fragrant.",
      "Add saffron broth and remaining broth; bring to a boil.",
      "Add rice, stir gently to distribute, and cook until most liquid is absorbed.",
      "Add shrimp and mussels, cook until mussels open and rice is tender.",
      "Let rest for 10 minutes before serving."
    ]
  },
  {
    title: "Burger",
    image: burgerImage,
    description:
      "A juicy burger with a tender beef patty, fresh lettuce, tomato, cheese, and your choice of condiments, all sandwiched between a soft bun.",
    category: "American",
    method: [
      "Heat 1/2 cup of broth in a pot until simmering, add saffron and set aside for 10 minutes.",
      "Heat oil in a paella pan over medium-high heat. Add chicken, shrimp and chorizo, and cook until lightly browned.",
      "Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper. Cook until thickened and fragrant.",
      "Add saffron broth and remaining broth; bring to a boil.",
      "Add rice, stir gently to distribute, and cook until most liquid is absorbed.",
      "Add shrimp and mussels, cook until mussels open and rice is tender.",
      "Let rest for 10 minutes before serving."
    ]
  },
  {
    title: "Pierogi",
    image: pierogiImage,
    description:
      "Delicious pierogi filled with savory ingredients like potatoes adn cheese wrapped in a soft dough and boiled or pan-fried.",
    category: "Polish",
    method: [
      "Heat 1/2 cup of broth in a pot until simmering, add saffron and set aside for 10 minutes.",
      "Heat oil in a paella pan over medium-high heat. Add chicken, shrimp and chorizo, and cook until lightly browned.",
      "Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper. Cook until thickened and fragrant.",
      "Add saffron broth and remaining broth; bring to a boil.",
      "Add rice, stir gently to distribute, and cook until most liquid is absorbed.",
      "Add shrimp and mussels, cook until mussels open and rice is tender.",
      "Let rest for 10 minutes before serving."
    ]
  },
  {
    title: "Pizza",
    image: pizzaImage,
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.",
    category: "seafood",
    method: [
      "Heat 1/2 cup of broth in a pot until simmering, add saffron and set aside for 10 minutes.",
      "Heat oil in a paella pan over medium-high heat. Add chicken, shrimp and chorizo, and cook until lightly browned.",
      "Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper. Cook until thickened and fragrant.",
      "Add saffron broth and remaining broth; bring to a boil.",
      "Add rice, stir gently to distribute, and cook until most liquid is absorbed.",
      "Add shrimp and mussels, cook until mussels open and rice is tender.",
      "Let rest for 10 minutes before serving."
    ]
  },
  {
    title: "Pizza",
    image: pizzaImage,
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.",
    category: "seafood",
    method: [
      "Heat 1/2 cup of broth in a pot until simmering, add saffron and set aside for 10 minutes.",
      "Heat oil in a paella pan over medium-high heat. Add chicken, shrimp and chorizo, and cook until lightly browned.",
      "Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper. Cook until thickened and fragrant.",
      "Add saffron broth and remaining broth; bring to a boil.",
      "Add rice, stir gently to distribute, and cook until most liquid is absorbed.",
      "Add shrimp and mussels, cook until mussels open and rice is tender.",
      "Let rest for 10 minutes before serving."
    ]
  },
  {
    title: "Pizza",
    image: pizzaImage,
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.",
    category: "seafood",
    method: [
      "Heat 1/2 cup of broth in a pot until simmering, add saffron and set aside for 10 minutes.",
      "Heat oil in a paella pan over medium-high heat. Add chicken, shrimp and chorizo, and cook until lightly browned.",
      "Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper. Cook until thickened and fragrant.",
      "Add saffron broth and remaining broth; bring to a boil.",
      "Add rice, stir gently to distribute, and cook until most liquid is absorbed.",
      "Add shrimp and mussels, cook until mussels open and rice is tender.",
      "Let rest for 10 minutes before serving."
    ]
  },
  {
    title: "Pizza",
    image: pizzaImage,
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.",
    category: "seafood",
    method: [
      "Heat 1/2 cup of broth in a pot until simmering, add saffron and set aside for 10 minutes.",
      "Heat oil in a paella pan over medium-high heat. Add chicken, shrimp and chorizo, and cook until lightly browned.",
      "Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper. Cook until thickened and fragrant.",
      "Add saffron broth and remaining broth; bring to a boil.",
      "Add rice, stir gently to distribute, and cook until most liquid is absorbed.",
      "Add shrimp and mussels, cook until mussels open and rice is tender.",
      "Let rest for 10 minutes before serving."
    ]
  },
  {
    title: "Pizza",
    image: pizzaImage,
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.",
    category: "seafood",
    method: [
      "Heat 1/2 cup of broth in a pot until simmering, add saffron and set aside for 10 minutes.",
      "Heat oil in a paella pan over medium-high heat. Add chicken, shrimp and chorizo, and cook until lightly browned.",
      "Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper. Cook until thickened and fragrant.",
      "Add saffron broth and remaining broth; bring to a boil.",
      "Add rice, stir gently to distribute, and cook until most liquid is absorbed.",
      "Add shrimp and mussels, cook until mussels open and rice is tender.",
      "Let rest for 10 minutes before serving."
    ]
  },
  {
    title: "Pizza",
    image: pizzaImage,
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.",
    category: "seafood",
    method: [
      "Heat 1/2 cup of broth in a pot until simmering, add saffron and set aside for 10 minutes.",
      "Heat oil in a paella pan over medium-high heat. Add chicken, shrimp and chorizo, and cook until lightly browned.",
      "Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper. Cook until thickened and fragrant.",
      "Add saffron broth and remaining broth; bring to a boil.",
      "Add rice, stir gently to distribute, and cook until most liquid is absorbed.",
      "Add shrimp and mussels, cook until mussels open and rice is tender.",
      "Let rest for 10 minutes before serving."
    ]
  },
];

export default function RecipeList() {
    const [category, setCategory] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
  
    // Handle category change
    const handleCategoryChange = (event) => {
      setCategory(event.target.value);
    };
  
    // Handle search input change
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value.toLowerCase());
    };
  
    // Filter recipes based on category and search term
    const filteredRecipes = recipes.filter((recipe) => {
      const matchesCategory = category ? recipe.category === category : true;
      const matchesSearch =
        recipe.title.toLowerCase().includes(searchTerm) || recipe.description.toLowerCase().includes(searchTerm);
      return matchesCategory && matchesSearch;
    });
  
    return (
      <Container sx={{ py: 4 }}>
        {/* Filter and search bar */}
        <div style={{ marginBottom: "20px" }}>
          <FormControl variant="outlined" sx={{ marginRight: 2, minWidth: 150 }}>
            <InputLabel>Category</InputLabel>
            <Select
              value={category}
              onChange={handleCategoryChange}
              label="Category"
              fullWidth
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Italian">Italian</MenuItem>
              <MenuItem value="American">American</MenuItem>
              <MenuItem value="Polish">Polish</MenuItem>
            </Select>
          </FormControl>
  
          <TextField
            label="Search"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
            fullWidth
          />
        </div>
  
        {/* Display filtered recipes */}
        <Grid container spacing={4}>
          {filteredRecipes.map((recipe, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <RecipeCard recipe={recipe} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
}
