import React from "react";
import styled from "styled-components";

import Logo from "../Logo/Logo";
import Container from "../../hoc/layout/elements/Container";
import Navitems from "./Navitems/Navitems";

const Wrapper = styled.div`
  position: fixed;
  background-color: var(--color-mainDark);
  top: 0;
  padding: 0rem 2rem;
  left: 0;
  width: 100%;
  height: 6rem;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <FlexWrapper>
          <Logo />
          <Navitems />
        </FlexWrapper>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
