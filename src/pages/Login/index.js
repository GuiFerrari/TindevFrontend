import React, { useState } from 'react';
import api from '../../services/api';

import { Container } from './styles';
import Logo from '../../assets/logo.svg';

export default function Login({ history }) {

  const [value, setValue] = useState('');

  async function handleSubmite(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      username: value,
    })

    const { _id } = response.data;

    history.push(`/dev/${_id}`)
  }

  return (
    <Container>
      <form onSubmit={handleSubmite}>
        <img src={Logo} alt="Logo tindev" />
        <input
          placeholder="Digite seu usuário do Github"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
}
