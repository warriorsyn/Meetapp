import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form } from './styles';
import logo from '../../assets/img/logo.svg';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="logo"/>

        <Form onSubmit={this.handleSubmit}>
          <label>Nome</label>
          <input
            placeholder="Digite seu nome"
            type="text"
            onChange={event => this.setState({ name: event.target.value })}
            value={this.state.name}
          />

          <label>Email</label>
          <input
            placeholder="Digite seu e-mail"
            type="email"
            onChange={event => this.setState({ email: event.target.value })}
            value={this.state.email}
          />

          <label>Senha</label>
          <input
            placeholder="Digite senha secreta"
            type="password"
            onChange={event => this.setState({ password: event.target.value })}
            value={this.state.password}
          />

          <button>Entrar</button>

          <small>
            <Link to="/">Já tenho conta</Link>
          </small>
        </Form>
      </Container>
    );
  }
}
export default Register;
