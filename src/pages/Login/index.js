import React from 'react';

import { Container } from './styles';
import Logo from '../../assets/logo.svg';

export default function Login() {
  return (
    <Container>
      <form>
        <img src={Logo} alt="Logo tindev" />
        <input placeholder="Digite seu usuário do Github" />
        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
}
