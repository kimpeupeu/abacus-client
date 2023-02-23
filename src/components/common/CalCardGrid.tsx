import React from "react";
import styled from "styled-components";
import { Calculator } from "../../lib/types/calculators";
import CalCard from "./CalCard";

export interface CalCardGridProps {
  calculators: Calculator[];
}

const CalCardGrid: React.FC<CalCardGridProps> = ({ calculators }) => {
  return (
    <Block>
      {calculators.map((calculator) => (
        <CalCard key={calculator.id} calculator={calculator} />
      ))}
    </Block>
  );
};

const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default CalCardGrid;
