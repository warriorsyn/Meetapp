import React, { Fragment, Component } from 'react';
import NavBar from '../../components/navbar/NavBar';

import { Container, Form } from './styles';

class Profile extends Component {
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
      <Fragment>
        <NavBar />

        <Container>
          <Form onSubmit={this.handleSubmit}>
            <label>Nome</label>
            <input placeholder="Aterar seu nome" value="João Victor de Andrade" />

            <label>Senha</label>
            <input placeholder="Sua senha secreta" />
            <label>Confirmação de senha</label>
            <input placeholder="Sua senha secreta" />

            <label>Preferências</label>

            <div>
              <input type="checkbox" id="front" name="front" value="1" onChange={this.handleInputChange} />
              <label htmlFor="front">Front-end</label>
            </div>

            <div>
              <input type="checkbox" id="back" name="back" value="2" onChange={this.handleInputChange} />
              <label htmlFor="back">Mobile</label>
            </div>
            <div>
              <input type="checkbox" id="dev" name="devops" value="3" onChange={this.handleInputChange} />
              <label htmlFor="dev">DevOps</label>
            </div>
            <div>
              <input type="checkbox" id="gestao" name="gestao" value="4" onChange={this.handleInputChange} />
              <label htmlFor="gestao">Gestão</label>
            </div>
            <div>
              <input type="checkbox" id="mark" name="marketing" value="5" onChange={this.handleInputChange} />
              <label htmlFor="mark">Marketing</label>
            </div>
            <button>Salvar</button>
          </Form>
        </Container>
      </Fragment>
    );
  }
}

export default Profile;
