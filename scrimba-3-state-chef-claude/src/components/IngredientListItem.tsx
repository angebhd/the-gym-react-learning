
export default function IngredientListItem({ingredients} : {ingredients: string[]}) {
  return (
    <ul>
        {ingredients.map((ing, ind) => <li key={ind}>{ing}</li>)}
    </ul>
  )
}
