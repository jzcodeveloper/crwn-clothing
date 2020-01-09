import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../assets/crown.svg";
import { auth } from "../firebase/utils";

import CartIcon from "./CartIcon";
import CartDropdown from "./CartDropdown";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 40px 20px 60px;
  width: 100%;
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & a,
  & svg {
    margin: 10px;
    padding: 10px;
    font-size: 1.2em;
    text-transform: uppercase;
  }
`;

const Logout = styled.div`
  display: inline;
  margin: 10px;
  padding: 10px;
  font-size: 1.2em;
  text-transform: uppercase;
  cursor: pointer;
`;

const Header = () => {
  const { currentUser } = useSelector(({ user }) => user);
  const { hidden } = useSelector(({ cart }) => cart);

  return (
    <Container>
      <Link to="/">
        <Logo />
      </Link>
      <Links>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
        {currentUser ? (
          <Logout onClick={() => auth.signOut()}>Sign Out</Logout>
        ) : (
          <Link to="/signin">Sign In</Link>
        )}
        <CartIcon />
      </Links>
      {hidden ? null : <CartDropdown />}
    </Container>
  );
};

export default Header;
