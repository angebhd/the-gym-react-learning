import { useContext } from "react"
import { UserContext } from "./UserContext"

export default function Consumer() {
    const user = useContext(UserContext);
    return (
        <div>
            <h1>Consumer</h1>
            {user === undefined ? <p>No user</p> : <div>
                <p>{user.name}</p>

            </div>}

        </div>
    )
}
