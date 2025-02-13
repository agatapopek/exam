import RecipeList from "../components/RecipeList";

export default function RecipiesPage(){
    return(
    <div>
      <h1 style={{ textAlign: "center", marginTop: "100px" }}>Recipes</h1>
      <RecipeList />
    </div>
  );
}