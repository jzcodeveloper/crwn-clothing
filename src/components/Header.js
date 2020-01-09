import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../assets/crown.svg";

import { UserContext } from "../store/contexts/userContext";
import { auth } from "../firebase/utils";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 40px 20px 60px;
  width: 100%;
`;

const Links = styled.div`
  & a {
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
  const { user } = useContext(UserContext);

  return (
    <Container>
      <Link to="/">
        <Logo />
      </Link>
      <Links>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
        {user ? (
          <Logout onClick={() => auth.signOut()}>Sign Out</Logout>
        ) : (
          <Link to="/signin">Sign In</Link>
        )}
      </Links>
    </Container>
  );
};

export default Header;
