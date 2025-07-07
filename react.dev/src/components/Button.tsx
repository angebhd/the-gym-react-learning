
export default function Button() {
    const name: string = "Button-="
    const buttonId = "myButton"
    return (
        <button className='my-button' id={buttonId} >{name}</button>
    )
}
