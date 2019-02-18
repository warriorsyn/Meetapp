import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-size: 16px;
  }
  #files {
    border: 1px dashed rgba(255, 255, 255, 0.2);
    padding: 30px;
    display: flex;
    justify-content: center;
    margin-top: 4px;
    margin-bottom: 15px;
    i {
      color: #b3b3b3;
      font-size: 24px;
    }
  }

  #descricao {
    padding-bottom: 100px;
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

  input[type='file'] {
    display: none;
  }

  button {
    margin-top: 20px;
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

  input[type='checkbox'] {
    display: none;
  }

  input[type='checkbox']:checked + label:before {
    background-color: #e5556e;
    border-color: #e5556e;
    color: #fff;
    opacity: 1;
  }
  div label {
    display: block;
    margin: 0.2em;
    cursor: pointer;
    padding: 0.2em;
    &:before {
      content: '';
      border-radius: 0.2em;
      display: inline-block;
      width: 1.5em;
      height: 1.5em;
      padding-left: 0.2em;
      padding-bottom: 0.3em;
      margin-right: 0.2em;
      vertical-align: bottom;
      color: transparent;
      background: #fff;
      opacity: 0.2;
      transition: 0.2s;

      &:active:before {
        transform: scale(0);
      }
    }
  }
`;
