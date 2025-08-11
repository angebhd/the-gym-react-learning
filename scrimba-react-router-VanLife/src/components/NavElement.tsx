import { Link } from "react-router-dom";

export default function NavElement() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>
    )
}
