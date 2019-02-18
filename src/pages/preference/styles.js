import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  p {
    color: #b3b3b3;
    font-size: 16px;
    line-height: 28px;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    width: 315px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-size: 16px;
    font-weight: 700;
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

  div input {
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
