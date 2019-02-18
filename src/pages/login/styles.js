import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;

  img {
    margin-bottom: 1.4rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-size: 16px;
  }

  input {
    padding: 20px;
    background-color: transparent;
    border: 0;
    padding-left: 0;
    /* width: 200px; */
    color: white;
    font-size: 18px;

    &::placeholder {
      color: #b3b3b3;
      font-size: 20px;
    }
  }

  button {
    background-color: #e5556e;
    border: 0;
    color: white;
    font-size: 16px;
    height: 45px;
    width: 300px;
    border-radius: 2rem;
    font-weight: 700;
    cursor: pointer;
  }

  small {
    text-align: center;
    margin-top: 10px;
    font-size: 16px;
  }
  small a {
    color: #b3b3b3;
    text-align: center;
    text-decoration: none;
  }
`;
