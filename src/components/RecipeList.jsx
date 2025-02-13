import pizzaImage from '../assets/images/pizza.jpg';
import soupImage from '../assets/images/soup.jpg';
import macImage from '../assets/images/macandcheese.jpg';
import carbonaraImage from '../assets/images/carbonara.jpg';
import lasagnaImage from '../assets/images/lasagna.jpg';
import frenchImage from '../assets/images/toast.jpg';
import eggImage from '../assets/images/egg.jpg';
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
      "Preheat your oven to 220°C (425°F).",
    "Roll out the pizza dough on a floured surface until it reaches your desired thickness.",
    "Spread 1/2 cup of tomato sauce evenly over the dough, leaving a small border for the crust.",
    "Sprinkle 1 1/2 cups of shredded mozzarella cheese over the sauce.",
    "Add your desired toppings such as pepperoni, olives, or vegetables.",
    "Place the pizza on a baking sheet or pizza stone and bake for 12-15 minutes, or until the crust is golden and the cheese is bubbly.",
    "Slice and serve immediately."
    ]
  },
  {
    title: "Burger",
    image: burgerImage,
    description:
      "A juicy burger with a tender beef patty, fresh lettuce, tomato, cheese, and your choice of condiments, all sandwiched between a soft bun.",
    category: "American",
    method: [
      "Form a 1/4 lb beef patty and season with salt and pepper on both sides.",
"Heat a grill or skillet over medium-high heat.",
"Cook the patty for 3-5 minutes per side for medium doneness, or longer if desired.",
"While the patty cooks, toast the burger bun lightly in a separate pan or in the oven until golden brown.",
"Place the cooked patty on the bottom half of the bun, then top with a slice of cheese and let it melt.",
"Add your desired toppings such as lettuce, tomato, pickles, onions, and condiments.",
"Place the top bun and serve immediately with your favorite sides."
    ]
  },
  {
    title: "Pierogi",
    image: pierogiImage,
    description:
      "Delicious pierogi filled with savory ingredients like potatoes adn cheese wrapped in a soft dough and boiled or pan-fried.",
    category: "Polish",
    method: [
      "Prepare the dough by combining 2 cups of flour, 1 egg, a pinch of salt, and about 1/2 cup of water. Mix until a dough forms and knead until smooth.",
"Cover the dough with a damp cloth and let it rest for 30 minutes.",
"Roll the dough out on a floured surface until it is about 1/8 inch thick.",
"Cut into circles using a glass or a cookie cutter.",
"Place a teaspoon of filling (mashed potatoes and cheese, or sautéed mushrooms, or ground meat) in the center of each circle.",
"Fold the dough over the filling and pinch the edges to seal the pierogi.",
"Bring a large pot of salted water to a boil and gently drop the pierogi in. Cook for 3-4 minutes, or until they float to the top.",
"After boiling, you can optionally pan-fry the pierogi in a bit of butter until golden brown on both sides.",
"Serve with sour cream or melted butter."
    ]
  },
  {
    title: "French Toasts",
    image: frenchImage,
    description:
      "Golden French toast with fluffy bread soaked in a sweet egg mixture, cooked until crispy, and topped with syrup or fruit.",
    category: "American",
    method: [
     "Whisk together 2 eggs, 1/2 cup of milk, 1 tablespoon sugar, and a pinch of cinnamon or vanilla extract in a bowl.",
"Heat a non-stick skillet over medium heat and add a small amount of butter.",
"Dip slices of bread (preferably stale or thick-cut) into the egg mixture, making sure both sides are coated.",
"Place the bread into the skillet and cook for 2-3 minutes per side, or until golden brown.",
"Serve with syrup, powdered sugar, or fresh fruit."
    ]
  },
  {
    title: "Sandwich with egg",
    image: eggImage,
    description:
      "A tasty egg sandwich with a fluffy egg, melted cheese, and your choice of toppings, served on a toasted bun or bread.",
    category: "Polish",
    method: [
     "Heat a non-stick skillet over medium heat and add a little butter or oil.",
"Crack an egg into the skillet and cook for about 2-3 minutes until the whites are set, but the yolk remains runny. For a fully cooked egg, flip it and cook for an additional 1-2 minutes.",
"Meanwhile, toast two slices of your favorite bread, and optionally spread some butter or mayonnaise on the bread.",
"Place the cooked egg on one slice of the toasted bread, and top with cheese, lettuce, tomato, or any other toppings you like.",
"Place the second slice of bread on top, cut in half, and serve."
    ]
  },
  {
    title: "Lasagna",
    image: lasagnaImage,
    description:
      "A hearty lasagna with layers of pasta, rich meat sauce, creamy cheese, and flavorful seasonings, baked to perfection.",
    category: "Italian",
    method: [
      "Preheat your oven to 180°C (350°F).",
"Cook 12 lasagna noodles according to package directions, then drain and set aside.",
"In a pan, brown 500g ground beef or pork with 1 chopped onion and 2 cloves garlic. Drain any excess fat.",
"Add 1 can (400g) crushed tomatoes, 2 tablespoons tomato paste, 1 teaspoon dried basil, and 1 teaspoon dried oregano. Simmer for 20 minutes.",
"In a bowl, mix 450g ricotta cheese with 1 beaten egg and 1/4 cup of grated Parmesan cheese.",
"Spread a thin layer of meat sauce in a baking dish. Layer cooked noodles over the sauce, then add a layer of ricotta mixture, followed by a layer of meat sauce, and some shredded mozzarella cheese.",
"Repeat layers until all ingredients are used, finishing with a layer of mozzarella on top.",
"Cover the lasagna with foil and bake for 30 minutes. Remove the foil and bake for another 10 minutes to brown the cheese.",
"Let the lasagna rest for 10 minutes before slicing and serving."
    ]
  },
  {
    title: "Mac&Cheese",
    image: macImage,
    description:
      "Creamy mac and cheese with tender pasta coated in a rich, cheesy sauce for the ultimate comfort food.",
    category: "American",
    method: [
     "Cook 300g elbow macaroni according to package directions, then drain and set aside.",
"In a pot, melt 4 tablespoons butter over medium heat, then whisk in 4 tablespoons of flour to form a roux.",
"Gradually add 2 cups of milk, whisking constantly until the mixture thickens.",
"Stir in 2 cups of shredded cheddar cheese and 1/2 cup of grated Parmesan cheese until fully melted and smooth.",
"Add the cooked pasta to the cheese sauce and stir to combine.",
"Season with salt, pepper, and a pinch of paprika or mustard powder for extra flavor.",
"Serve hot, garnished with more cheese or breadcrumbs if desired."


    ]
  },
  {
    title: "Carbonara",
    image: carbonaraImage,
    description:
      "Creamy carbonara with al dente pasta, crispy pancetta, eggs, cheese, and black pepper for a rich, velvety sauce.",
    category: "Italian",
    method: [
      "Cook 400g of pasta (spaghetti or fettuccine) according to package directions until al dente.",
"While the pasta cooks, fry 150g of pancetta or guanciale in a pan over medium heat until crispy.",
"In a bowl, whisk together 2 large eggs, 1/2 cup of grated Parmesan cheese, and 1/2 cup of Pecorino Romano cheese until smooth.",
"Once the pasta is cooked, reserve 1/2 cup of pasta water and drain the rest.",
"Add the hot pasta to the pan with pancetta and toss to coat.",
"Remove from heat and quickly pour in the egg and cheese mixture, stirring vigorously to create a creamy sauce. Add reserved pasta water a little at a time to reach your desired consistency.",
"Season with freshly ground black pepper and more cheese if desired. Serve immediately."
    ]
  },
  {
    title: "Tomato Soup",
    image: soupImage,
    description:
      "A comforting Polish tomato soup with a rich, tangy broth, often served with pasta or rice and a touch of cream.",
    category: "Polish",
    method: [
      "Heat 2 tablespoons of butter in a large pot over medium heat and sauté 1 finely chopped onion until soft.",
"Add 1 can (400g) crushed tomatoes and cook for 5 minutes.",
"Pour in 4 cups of vegetable or chicken broth and bring to a boil.",
"Add 1 teaspoon of sugar, salt, and pepper to taste, and simmer for 20 minutes to let the flavors blend.",
"Use an immersion blender or transfer the soup in batches to a blender to purée until smooth.",
"Stir in 1/2 cup of heavy cream for a creamy texture, then serve with a side of rice or small pasta."
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
