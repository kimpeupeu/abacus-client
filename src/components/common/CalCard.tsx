import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { mediaQuery } from "../../lib/styles/media";
import { Calculator } from "../../lib/types/calculators";

export interface CalCardProps {
  calculator: Calculator;
}

const CalCard: React.FC<CalCardProps> = ({ calculator }) => {
  return (
    <Block href={`calculator/${calculator.id}`}>
      <Title>{calculator.title}</Title>
      <SubTitle>{calculator.title}</SubTitle>
      <Description>{calculator.description}</Description>
    </Block>
  );
};

const Block = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: ${({ theme }) => theme.text1};
  background-color: ${({ theme }) => theme.bg_element6};

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.bg_element1};

    h3 {
      color: ${({ theme }) => theme.text1};
    }
  }

  width: 19rem;
  margin: 1rem;

  ${mediaQuery(1056)} {
    width: calc(50% - 2rem);
  }

  ${mediaQuery(767)} {
    margin: 0;
    width: 100%;
    & + & {
      margin-top: 1rem;
    }
  }
`;

const Title = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.text4};
`;

const SubTitle = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.text1};
  background-color: ${({ theme }) => theme.bg_element3};
  padding: 1rem 0 0 1rem;
`;

const Description = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.text1};
  background-color: ${({ theme }) => theme.bg_element3};
  padding: 1rem;
  min-height: 5rem;
`;

export default CalCard;
