import React, { Component } from 'react';

import { Container, Form } from './styles';

export default class preference extends Component {
  state = {
    front: '',
    back: '',
    devops: '',
    marketing: '',
    gestao: '',
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <Container>
        <h1>Olá João</h1>

        <p>
          Parece que é seu primeiro acesso por aqui, comece escolhendo algumas preferências para
          selecionarmos os melhores meetups pra você:
        </p>
        <Form onSubmit={this.handleSubmit}>
          <label>Preferências</label>

          <div>
            <input
              type="checkbox"
              id="front"
              name="front"
              value="1"
              onChange={this.handleInputChange}
            />
            <label htmlFor="front">Front-end</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="back"
              name="back"
              value="2"
              onChange={this.handleInputChange}
            />
            <label htmlFor="back">Mobile</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="dev"
              name="devops"
              value="3"
              onChange={this.handleInputChange}
            />
            <label htmlFor="dev">DevOps</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="gestao"
              name="gestao"
              value="4"
              onChange={this.handleInputChange}
            />
            <label htmlFor="gestao">Gestão</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="mark"
              name="marketing"
              value="5"
              onChange={this.handleInputChange}
            />
            <label htmlFor="mark">Marketing</label>
          </div>
          <button>Continuar</button>
        </Form>
      </Container>
    );
  }
}
