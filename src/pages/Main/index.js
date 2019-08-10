import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import api from '../../services/api';

import Logo from '../../assets/logo.svg';
import Like from '../../assets/like.svg';
import Deslike from '../../assets/dislike.svg';
import Loading from '../../assets/loading.svg';

export default function Main({ match }) {

  const [users, setUsers] = useState([]);
  const [load, setLoad] = useState(0);

  useEffect(() => {
    async function loadUser() {
      const response = await api.get('/devs', {
        headers: {
          user: match.params.id
        }
      })

      setUsers(response.data);
      setLoad(1);
    }

    loadUser();
  }, [match.params.id]);

  async function handleDislike(id) {
    document.getElementById(id).animate([
      { opacity: '1' }, 
      { opacity: '0' }
    ], {
      duration: 500,
      easing: 'ease-in-out',
      fill: 'forwards',
    });

    await api.post(`/devs/${id}/deslikes`, {}, {
      headers: {
        user: match.params.id
      }
    });

    setUsers(users.filter(user => user._id !== id))
  }

  async function handleLike(id) {
    document.getElementById(id).animate([
      { opacity: '1' }, 
      { opacity: '0' }
    ], {
      duration: 500,
      easing: 'ease-in-out',
      fill: 'forwards',
    });
    
    await api.post(`/devs/${id}/likes`, {}, {
      headers: {
        user: match.params.id
      }
    });

    setUsers(users.filter(user => user._id !== id))
  }

  return (
    <Container>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Logo tindev" />
        </Link>
      </div>
      {
        users.length > 0 ? (
          <ul>
            {
              users.map(user => (
                <li key={user._id} id={user._id}>
                  <img src={user.avatar} alt={`Avatar ${user.user}`} />
                  <footer>
                    <strong>{user.name}</strong>
                    <p>{user.bio}</p>
                  </footer>
                  <div className="buttons">
                    <button type="button" onClick={() => handleDislike(user._id)}>
                      <img src={Deslike} alt="Deslike" />
                    </button>
                    <button type="button" onClick={() => handleLike(user._id)}>
                      <img src={Like} alt="Like" />
                    </button>
                  </div>
                </li>
              ))
            }
          </ul>
        ) : (
          load === 0 ? (
            <div className="loading">
              <img src={Loading} alt="Pacman loading" />
            </div>
          ) : (
            <div className="empty">
              <p>Nenhum dev encontrado :(</p>
            </div>
          )
        )
      }
    </Container>
  );
}
