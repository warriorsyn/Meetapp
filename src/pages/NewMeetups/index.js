import React, { Component, Fragment } from 'react';

import NavBar from '../../components/navbar/NavBar';
import { Container, Form } from './styles';

export default class NewMeetups extends Component {
  state = {
    title: '',
    description: '',
    image: '',
    locale: '',
    front: '',
    back: '',
    mobile: '',
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

  handleFileChange = (value) => {
    const file = value.target.files[0];

    this.setState({ image: file });
  };

  render() {
    return (
      <Fragment>
        <NavBar />
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <label>Título</label>
            <input
              type="text"
              placeholder="Digite o título do meetup"
              value={this.state.title}
              onChange={value => this.setState({ title: value.target.value })}
            />

            <label htmlFor="descricao">Descrição</label>
            <input
              id="descricao"
              type="text"
              placeholder="Descreva seu meetup"
              value={this.state.description}
              onChange={value => this.setState({ description: value.target.value })}
            />

            <label>Imagem</label>
            <label id="files" htmlFor="image">
              <i className="fas fa-camera" />
            </label>
            <input type="file" id="image" onChange={this.handleFileChange} />

            <label>Localização</label>
            <input type="text" placeholder="Onde seu meetup irá acontecer?" />

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
              <label htmlFor="back">Back-end</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="mobile"
                name="mobile"
                value="3"
                onChange={this.handleInputChange}
              />
              <label htmlFor="mobile">Mobile</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="dev"
                name="devops"
                value="4"
                onChange={this.handleInputChange}
              />
              <label htmlFor="dev">DevOps</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="gestao"
                name="gestao"
                value="5"
                onChange={this.handleInputChange}
              />
              <label htmlFor="gestao">Gestão</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="mark"
                name="marketing"
                value="6"
                onChange={this.handleInputChange}
              />
              <label htmlFor="mark">Marketing</label>
            </div>
            <button>Salvar</button>
          </Form>
        </Container>
      </Fragment>
    );
  }
}
