import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';
const Card = props => {
  const cardId = props.id;
  const dispatch = useDispatch();
  const handleClick = e => {
    e.preventDefault();
    dispatch(toggleCardFavorite(cardId));
  }
  return(
    <div className = {styles.card}>
      <li className = {styles.elm}>{props.title}</li>
      <button onClick = {handleClick} className = {clsx(styles.button, props.isFavorite && styles.isFavorite)}><i className={clsx("fa fa-star-o")}></i></button>
    </div>
  )
}
export default Card;