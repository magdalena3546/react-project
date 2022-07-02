import Container from "../Container/Container";
import styles from './About.module.scss'
import PageTitle from '../PageTitle/PageTitle';

const About = props => {
  return(
  <Container>
    <div>
      <PageTitle>About</PageTitle>
      <p>Lorem ipsum</p>
    </div>
  </Container>
  )
};

export default About;