import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';
const Card = props => {
  const cardId = props.id;
  const dispatch = useDispatch();
  const handleClick = e => {
    e.preventDefault();
    dispatch(toggleCardFavorite(cardId));
  };
  const handleRemove = e => {
    e.preventDefault();
    dispatch( removeCard(cardId));
  }
  return(
    <div className = {styles.card}>
      <li className = {styles.elm}>{props.title}</li>
      <button onClick = {handleClick} className = {clsx(styles.button, props.isFavorite && styles.isFavorite)}><i className={clsx("fa fa-star-o")}></i></button>
      <button onClick = {handleRemove} className = {clsx(styles.button)}><i className={clsx("fa fa-trash")}></i></button>
    </div>
  )
}
export default Card;