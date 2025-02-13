import React from "react";
import RecipeCard from "./RecipeCard";
import { Container, Grid } from "@mui/material";

const recipes = [
  {
    initial: "R",
    title: "Shrimp and Chorizo Paella",
    date: "September 14, 2016",
    image: "/static/images/cards/paella.jpg",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.",
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
    initial: "C",
    title: "Classic Carbonara",
    date: "July 23, 2021",
    image: "/static/images/cards/carbonara.jpg",
    description: "A traditional Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    method: [
      "Cook spaghetti until al dente. Drain and reserve some pasta water.",
      "Cook pancetta in a pan until crispy.",
      "Whisk eggs and cheese together.",
      "Mix pasta with pancetta, then slowly stir in egg mixture off heat.",
      "Adjust consistency with reserved pasta water if needed."
    ]
  },
  {
    initial: "C",
    title: "Classic Carbonara",
    date: "July 23, 2021",
    image: "/static/images/cards/carbonara.jpg",
    description: "A traditional Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    method: [
      "Cook spaghetti until al dente. Drain and reserve some pasta water.",
      "Cook pancetta in a pan until crispy.",
      "Whisk eggs and cheese together.",
      "Mix pasta with pancetta, then slowly stir in egg mixture off heat.",
      "Adjust consistency with reserved pasta water if needed."
    ]
  },
  {
    initial: "C",
    title: "Classic Carbonara",
    date: "July 23, 2021",
    image: "/static/images/cards/carbonara.jpg",
    description: "A traditional Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    method: [
      "Cook spaghetti until al dente. Drain and reserve some pasta water.",
      "Cook pancetta in a pan until crispy.",
      "Whisk eggs and cheese together.",
      "Mix pasta with pancetta, then slowly stir in egg mixture off heat.",
      "Adjust consistency with reserved pasta water if needed."
    ]
  },
  {
    initial: "C",
    title: "Classic Carbonara",
    date: "July 23, 2021",
    image: "/static/images/cards/carbonara.jpg",
    description: "A traditional Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    method: [
      "Cook spaghetti until al dente. Drain and reserve some pasta water.",
      "Cook pancetta in a pan until crispy.",
      "Whisk eggs and cheese together.",
      "Mix pasta with pancetta, then slowly stir in egg mixture off heat.",
      "Adjust consistency with reserved pasta water if needed."
    ]
  },
  {
    initial: "C",
    title: "Classic Carbonara",
    date: "July 23, 2021",
    image: "/static/images/cards/carbonara.jpg",
    description: "A traditional Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    method: [
      "Cook spaghetti until al dente. Drain and reserve some pasta water.",
      "Cook pancetta in a pan until crispy.",
      "Whisk eggs and cheese together.",
      "Mix pasta with pancetta, then slowly stir in egg mixture off heat.",
      "Adjust consistency with reserved pasta water if needed."
    ]
  },
  {
    initial: "C",
    title: "Classic Carbonara",
    date: "July 23, 2021",
    image: "/static/images/cards/carbonara.jpg",
    description: "A traditional Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    method: [
      "Cook spaghetti until al dente. Drain and reserve some pasta water.",
      "Cook pancetta in a pan until crispy.",
      "Whisk eggs and cheese together.",
      "Mix pasta with pancetta, then slowly stir in egg mixture off heat.",
      "Adjust consistency with reserved pasta water if needed."
    ]
  },
  {
    initial: "C",
    title: "Classic Carbonara",
    date: "July 23, 2021",
    image: "/static/images/cards/carbonara.jpg",
    description: "A traditional Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    method: [
      "Cook spaghetti until al dente. Drain and reserve some pasta water.",
      "Cook pancetta in a pan until crispy.",
      "Whisk eggs and cheese together.",
      "Mix pasta with pancetta, then slowly stir in egg mixture off heat.",
      "Adjust consistency with reserved pasta water if needed."
    ]
  },
  {
    initial: "C",
    title: "Classic Carbonara",
    date: "July 23, 2021",
    image: "/static/images/cards/carbonara.jpg",
    description: "A traditional Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    method: [
      "Cook spaghetti until al dente. Drain and reserve some pasta water.",
      "Cook pancetta in a pan until crispy.",
      "Whisk eggs and cheese together.",
      "Mix pasta with pancetta, then slowly stir in egg mixture off heat.",
      "Adjust consistency with reserved pasta water if needed."
    ]
  }
];

export default function RecipeList() {
  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {recipes.map((recipe, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <RecipeCard recipe={recipe} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
