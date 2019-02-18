import React from 'react';
import { Link } from 'react-router-dom';
import { Container, NavContainer } from './styles';
import logoWhite from '../../assets/img/logo-white.svg';

const NavBar = () => (
  <Container>
    <NavContainer>
      <div>
        <img src={logoWhite} alt="logo" />
        <Link to="/dashboard">Início</Link>
        <Link to="#">Buscar</Link>
        <Link to="/newmeetup">Novo meetup</Link>
      </div>

      <div>
        <Link to="/profile">
          <i className="far fa-user" />
        </Link>
      </div>
    </NavContainer>
  </Container>
);

export default NavBar;
