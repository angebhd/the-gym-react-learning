import Markdown from 'react-markdown'

export default function Recipe({ recipe }: { recipe: string }) {
    return (
        <section className='suggested-recipe-container'>
            <Markdown>{recipe}</Markdown>
        </section>
    )
}
