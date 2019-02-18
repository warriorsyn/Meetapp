import styled from 'styled-components';

export const Container = styled.div`
  background: #e5556e;
  padding: 22px;
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;

  img {
    width: 25px;
    padding: 0;
  }

  div a {
    font-weight: 700;
    font-size: 16px;
    margin-left: 20px;
    padding: 0;
    text-decoration: none;
    color: white;
  }

  i {
    font-size: 24px;
  }
`;
