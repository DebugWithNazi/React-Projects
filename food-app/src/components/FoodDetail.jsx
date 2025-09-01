import { useEffect, useState } from "react";
import styles from "./foodDetail.module.css";
import ItemList from "./ItemList";

export default function FoodDetail({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  // const URL = "";
  const API_KEY = "e02eaf30c8d949e9ad85ae25d3b0982a";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      setFood(data);
      console.log(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt={food.title} />
        <div className={styles.recipeDetails}>
          <span>
            <strong>{food.readyInMinutes} Minutes 🕐</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "Vegetarian 🥦" : "Non-Vegetarian 🍖"}
            </strong>
          </span>
          <span>
            <strong>Serves {food.serving} 👪</strong>
          </span>
          <span>
            <strong>Vegan {food.vegan ? "Vegan 🐮" : ""}</strong>
          </span>
        </div>

        <div>
          <strong>
            $ <span>{food.pricePerServing} Per Serving</span>
          </strong>
        </div>
        <div>
          <h2>Ingrediants: </h2>
          <ItemList food={food} isLoading={isLoading} />
          <h2>Instructions: </h2>
          <div className="styles.instructions">
            <ol>
              {isLoading
                ? "Loading..."
                : food.analyzedInstructions[0].steps.map((item, idx) => (
                    <li key={idx}>{item.step}</li>
                  ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
