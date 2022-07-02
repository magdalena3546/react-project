
import styles from './NavBar.module.scss';
import clsx from 'clsx';
const NavBar = () => {
  return(
    <nav className={clsx(styles.nav)}>
      <div className={clsx(styles.container)}>
        <a href="/"><i className={clsx("fa fa-tasks", styles.icon)}></i></a>
        <ul className={clsx(styles.list)}>
            <li className={clsx(styles.elm)}><a className={clsx(styles.link)} href="/">Home</a></li>
            <li className={clsx(styles.elm)}><a href="/favorite" className={clsx(styles.link)} >Favorite</a></li>
            <li className={clsx(styles.elm)}><a href="/about" className={clsx(styles.link)} >About</a></li>
        </ul>
      </div>
    </nav>
  )
}
export default NavBar;