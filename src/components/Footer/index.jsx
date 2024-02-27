import { Container } from './style';
import logoFooter from "../../assets/logo-mobile-footer-explorerFood.svg";

export function Footer() {
  return (
    <Container>
      <img src={logoFooter} alt="logo explorerFood" />
      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  )
}