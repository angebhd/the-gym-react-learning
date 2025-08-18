import NavElement from './NavElement'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
     <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <NavElement />
        </header>
  )
}
