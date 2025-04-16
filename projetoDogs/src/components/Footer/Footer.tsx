import Dogs from '../../assets/dogs-footer.svg?react'
import { ContainerFooter } from './style';
const Footer = () => {
  return (
    <ContainerFooter>
      <Dogs/>
      <p>Dogs. Alguns direitos reservados</p>
    </ContainerFooter>
  );
};

export default Footer;
