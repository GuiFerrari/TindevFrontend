import React, { useEffect } from 'react';
import { Container } from './styles';

import Logo from '../../assets/logo.svg';
import Like from '../../assets/like.svg';
import Deslike from '../../assets/dislike.svg';

export default function Main({ match }) {

  useEffect(() => {
    async function loadUser() {

    }

    loadUser();
  }, [match.params.id]);

  return (
    <Container>
      <div className="logo">
        <img src={Logo} alt="Logo tindev" />
      </div>
      <ul>
        <li>
          <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="" />
          <footer>
            <strong>Diego Fernandes</strong>
            <p>Programador</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={Like} alt="Deslike" />
            </button>
            <button type="button">
              <img src={Deslike} alt="Like" />
            </button>
          </div>
        </li>
        <li>
          <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="" />
          <footer>
            <strong>Diego Fernandes</strong>
            <p>Programador</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={Like} alt="Deslike" />
            </button>
            <button type="button">
              <img src={Deslike} alt="Like" />
            </button>
          </div>
        </li>
        <li>
          <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="" />
          <footer>
            <strong>Diego Fernandes</strong>
            <p>Programador</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={Like} alt="Deslike" />
            </button>
            <button type="button">
              <img src={Deslike} alt="Like" />
            </button>
          </div>
        </li>
        <li>
          <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="" />
          <footer>
            <strong>Diego Fernandes</strong>
            <p>Programador</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={Like} alt="Deslike" />
            </button>
            <button type="button">
              <img src={Deslike} alt="Like" />
            </button>
          </div>
        </li>
      </ul>
    </Container>
  );
}
