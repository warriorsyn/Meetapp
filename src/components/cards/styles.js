import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Anchor = styled(Link)`
  background: #e5556e;
  border: 0;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 12px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: #e23956;
  }
  i {
    font-size: 20px;
    color: white;
    font-weight: 700;
  }
`;

export const Card = styled.article`
  margin-bottom: 2rem;
  margin-top: 1rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  flex: 0 0 100%;

  img {
    max-width: 100%;
    display: block;
    border-top-right-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
    height: 146px;
  }

  @media (min-width: 480px) {
    flex: 0 0 calc(50% - 1rem);
  }

  @media (min-width: 778px) {
    flex: 0 0 calc(33.3% - 1rem);
  }
  div {
    color: #000;
    display: flex;
    padding: 0.8rem;
    flex-direction: column;

    strong {
      color: black;
      margin-bottom: -32px;
      font-size: 16px;
    }

    button {
      background: #e5556e;
      border: 0;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      align-self: flex-end;
      position: relative;
      top: 12px;
      cursor: pointer;

      &:hover {
        background: #e23956;
      }
      i {
        font-size: 20px;
        color: white;
        font-weight: 700;
      }
    }

    small {
      color: #b3b3b3;
      font-size: 14px;
    }
  }
`;
