import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form } from './styles';
import logo from '../../assets/img/logo.svg';

class Login extends Component {
  state = {
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
        <img src={logo} alt="logo" />
        <Form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input
            placeholder="Digite seu Email"
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
            <Link to="/cadastro">Criar conta grátis</Link>
          </small>
        </Form>
      </Container>
    );
  }
}
export default Login;
