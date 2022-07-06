import Container from "../Container/Container";
import styles from './Favorite.module.scss'
import PageTitle from '../PageTitle/PageTitle';
import { getFavoriteCards } from "../../redux/store";
import { useSelector } from "react-redux";
import Card from './../Card/Card';

const Favorite = props => {
  const cardsFavorite = useSelector(state => getFavoriteCards(state));
  return(
  <Container>
    <PageTitle>Favorite</PageTitle>
    <article className={styles.column}>
      <ul className={styles.cards}>
        {cardsFavorite.map(card => <Card key={card.id} title={card.title} id={card.id} isFavorite={card.isFavorite} />)}
      </ul> 
    </article>
  </Container>
  )
};

export default Favorite;

