import React from 'react';
import cards from '../../assets/img/cards.jpg';
import { Card, Anchor } from './styles';

const Cards = () => (
  <Card>
    <img src={cards} alt="Panel" />
    <div>
      <strong>Meetup React Native</strong>

      <Anchor to="/meetup">
        <i className="fas fa-angle-right" />
      </Anchor>

      <small>120 Membros</small>
    </div>
  </Card>
);

export default Cards;
