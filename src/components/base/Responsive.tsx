import React from "react";
import styled from "styled-components";
import { mediaQuery } from "../../lib/styles/media";

export interface ResponsiveProps {
  className?: string;
  children: React.ReactNode;
}

const Responsive: React.FC<ResponsiveProps> = ({ className, children }) => {
  return <Block className={className}>{children}</Block>;
};

const Block = styled.div`
  width: 1376px;
  margin-left: auto;
  margin-right: auto;
  ${mediaQuery(1919)} {
    width: 1376px;
  }
  ${mediaQuery(1440)} {
    width: 1024px;
  }
  ${mediaQuery(1056)} {
    width: calc(100% - 2rem);
  }
`;

export default Responsive;
