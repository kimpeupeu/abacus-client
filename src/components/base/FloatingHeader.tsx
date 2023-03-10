import React from "react";
import styled from "styled-components";
import Header from "./Header";

interface FloatingHeaderProps {}

const FloatingHeader: React.FC<FloatingHeaderProps> = ({}) => {
  return (
    <Block>
      <Header />
    </Block>
  );
};

const Block = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;

  box-shadow: 0px 0 8px rgb(0, 0, 0, 0.08);
  color: ${({ theme }) => theme.text1};
  background: ${({ theme }) => theme.bg_page1};
`;

export default FloatingHeader;
