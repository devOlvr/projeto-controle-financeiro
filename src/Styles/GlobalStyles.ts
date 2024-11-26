import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body{
    background-color: #2222;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 70px;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 12px 16% 12px;

  line-height: 1;
`;

export const Title = styled.h1`
  font-weight: 400;
`;

export const Navbar = styled.nav`
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Navitem = styled(Link)`
  text-decoration: none;
  color: #000;
  transition: all ease 0.3s;

  &:hover {
    color: blue;
  }
`;
