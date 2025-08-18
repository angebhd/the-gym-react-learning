import { NavLink } from "react-router-dom";

export default function NavElement() {
    return (
        <nav>
            <NavLink to="/host" className={({ isActive }) => isActive ? "active-link" : ''}>Host</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ''}>About</NavLink>
            <NavLink to="/vans" className={({ isActive }) => isActive ? "active-link" : ''}>Vans</NavLink>
        </nav>
    )
}
