import React, { Component, Fragment } from 'react';

import NavBar from '../../components/navbar/NavBar';
import Card from '../../components/cards';
import { Container, CardContainer } from './styles';

export default class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />

        <Container>
          <p>Inscrições</p>

          <CardContainer>
            <Card />
            <Card />
            <Card />
          </CardContainer>
        </Container>

        <Container>
          <p>Próximos meetups</p>

          <CardContainer>
            <Card />
            <Card />
            <Card />
          </CardContainer>
        </Container>

        <Container>
          <p>Recomendados</p>

          <CardContainer>
            <Card />
            <Card />
            <Card />
          </CardContainer>
        </Container>
      </Fragment>
    );
  }
}
