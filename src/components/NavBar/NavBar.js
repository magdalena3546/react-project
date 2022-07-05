import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';
import clsx from 'clsx';
const NavBar = () => {
  return(
    <nav className={clsx(styles.nav)}>
      <div className={clsx(styles.container)}>
        <Link to="/"><i className={clsx("fa fa-tasks", styles.icon)}></i></Link>
        <ul className={clsx(styles.list)}>
            <li className={clsx(styles.elm)}><NavLink className={({ isActive }) => isActive ? styles.linkActive: undefined} to="/">Home</NavLink></li>
            <li className={clsx(styles.elm)}><NavLink className={({ isActive }) => isActive ? styles.linkActive: undefined} to="/favorite"  >Favorite</NavLink></li>
            <li className={clsx(styles.elm)}><NavLink className={({ isActive }) => isActive ? styles.linkActive: undefined} to="/about"  >About</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}
export default NavBar;