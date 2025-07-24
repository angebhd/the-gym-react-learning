
import { useEffect, useRef, useState } from 'react'
import './App.css'
import Form from './components/Form'
import Header from './components/Header'
import IngredientListItem from './components/IngredientListItem'
import { getRecipeFromMistral } from './api'
import Recipe from './components/Recipe'

function App() {

  const [ingredients, setIngredients] = useState<string[]>([])
  const [resp, setResp] = useState<string | undefined>(undefined);

  const recipeRef = useRef<HTMLDivElement>(null);

  const getRecipe = () => {
    getRecipeFromMistral(ingredients)
      .then((res) => { console.log(res); setResp(res) })
  }
  useEffect(() => {
    if (resp !== undefined && recipeRef !== null)
      recipeRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [resp])

  return (
    <>
      <Header />
      <main>
        <Form setIngredients={setIngredients} />
        {ingredients.length > 0 && <section>

          <IngredientListItem ingredients={ingredients} />
          {ingredients.length >= 3 && <div className="get-recipe-container">
            <div ref={recipeRef}>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={getRecipe}>Get a recipe</button>
          </div>}
        </section>}

        {resp !== undefined && <Recipe recipe={resp} />}

      </main>

    </>
  )
}

export default App
