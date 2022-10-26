import React from "react";
import Button from "./styles/Button.styled";
import Flex from "./styles/Flex.styled";
import StyledHeader, { Image, Logo, Nav } from "./styles/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <Logo src="./images./logo.png" />
        <div>
          <Button color="#A62440"> Apply Courses </Button>
          <Button bg="#A62440"> Talk To Adviser </Button>
        </div>
      </Nav>
      <Flex>
        <div>
          <h1> The IT Career</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            cupiditate aliquam voluptate pariatur dicta a ipsa doloribus
            quaerat, voluptatibus qui.
          </p>
          <Button bg="#A62440"> Start New Career </Button>
        </div>
        <Image src="./images/hero.jpg" />
      </Flex>
    </StyledHeader>
  );
};

export default Header;
