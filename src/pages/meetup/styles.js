import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  overflow-x: hidden;

  img {
    max-width: 80%;
  }
  @media (min-width: 768px) {
    img {
      width: 800px;
      height: 300px;
    }
  }
`;

export const Content = styled.section`
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  div {
    padding-bottom: 10px;
  }

  small {
    font-size: 14px;
    color: #999999;
    text-align: left;
  }

  > p {
    width: 330px;
    opacity: 0.8;
    font-family: Helvetica;
    font-size: 16px;
    color: #ffffff;
    line-height: 28px;
    text-align: left;
  }

  .text {
    padding-bottom: 20px;
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
    margin-bottom: 20px;
  }
`;
