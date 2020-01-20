import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as LogoSVG } from "../assets/crown.svg";
import { signOutRequest } from "../store/user/userActions";
import { selectCurrentUser } from "../store/user/userSelectors";
import { selectCartHidden } from "../store/cart/cartSelectors";

import CartIcon from "./CartIcon";
import CartDropdown from "./CartDropdown";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0px 20px 10px;
  width: 100%;

  @media screen and (min-width: 800px) {
    padding: 20px 0 20px 20px;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & a,
  & svg {
    margin: 0;
    padding: 10px;
    font-size: 1em;
    text-transform: uppercase;
  }

  @media screen and (min-width: 800px) {
    a,
    svg {
      font-size: 1.2em;
      margin: 10px;
    }
  }
`;

const Logo = styled(LogoSVG)`
  width: 35px;

  @media screen and (min-width: 800px) {
    width: 50px;
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
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);

  return (
    <Container>
      <Link to="/">
        <Logo />
      </Link>
      <Links>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
        {currentUser ? (
          <Logout onClick={() => dispatch(signOutRequest())}>Sign Out</Logout>
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
