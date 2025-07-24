import type { FormEvent } from "react"

export default function Form({ setIngredients }: { setIngredients: Function }) {

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
         if (typeof newIngredient === 'string') {
            if (newIngredient.length === 0) {
                return;
            }
        }
        setIngredients((prevIngredients: string[]) => [...prevIngredients, newIngredient])
        console.log('from submit: ', newIngredient)
        event.currentTarget.reset();
    }

    function act(formData: FormData) {
        const newIngredient = formData.get("ingredient")
        // setIngredients((prevIngredients: string[]) => [...prevIngredients, newIngredient])
        console.log("From action: ", newIngredient);
    }
    return (
        <form className="add-ingredient-form" action={act} onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="e.g. oregano"
                aria-label="Add ingredient"
                name="ingredient"
            />
            <button>Add ingredient</button>
        </form>)
}
