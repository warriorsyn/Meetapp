import React, { Component, Fragment } from 'react';
import NavBar from '../../components/navbar/NavBar';
import { Container, Content } from './styles';

import image from '../../assets/img/cards.jpg';

export default class Meetup extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container>
          <img src={image} alt="" />

          <Content>
            <div>
              <h3>Meetup React Native</h3>
              <small>120 membros</small>
            </div>

            <p className="text">
              O meetup de React Native é um espaço para discutir sobre tecnologias por volta do
              desenvolvimento web utilizando a biblioteca do Facebook para criação de interfaces
              móveis multiplataforma com Javascript.
            </p>

            <small>Realizado em: </small>
            <p>Rua Guilherme Gembala, 260, Rio do Sul - SC</p>

            <button>Inscreva-se</button>
          </Content>
        </Container>
      </Fragment>
    );
  }
}
