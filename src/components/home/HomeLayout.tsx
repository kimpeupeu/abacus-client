import React from "react";
import styled from "styled-components";

export interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return <Block>{children}</Block>;
};

const Block = styled.div`
  display: flex;
  margin-top: 2rem;
`;

export default HomeLayout;
