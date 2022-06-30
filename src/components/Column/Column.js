import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import styles from './Column.module.scss';
import { useSelector } from 'react-redux';

const Column = props => {
   const string = useSelector(state => state.string); 
   const cards = useSelector(state => state.cards.filter(card => card.columnId === props.id && card.title.toLowerCase().includes(string.toLowerCase())));
   return (<article className = {styles.column} >
      <h2 className = {styles.title}>
         <span  className = {styles.icon + ' fa fa-' + props.icon}></span> 
         {props.title}
      </h2>
      <ul className={styles.cards}>
         {cards.map(card => <Card key={card.id} title={card.title} />)}
      </ul>
      <CardForm columnId={props.id}/>
   </article>)
};

export default Column;