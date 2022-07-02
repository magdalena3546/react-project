import Container from "../Container/Container";
import styles from './Favorite.module.scss'
import PageTitle from '../PageTitle/PageTitle';

const Favorite = props => {
  return(
  <Container>
    <div>
      <PageTitle>Favorite</PageTitle>
      <p>Lorem ipsum</p>
    </div>
  </Container>
  )
};

export default Favorite;