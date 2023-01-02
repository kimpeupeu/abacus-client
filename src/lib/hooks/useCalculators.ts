import React from "react";

const SAMPLES = [
  {
    name: "복리계산기",
    description:
      "복리 계산기는 주식이나 가상화폐에 투자시 발생하는 복리 투자 수익을 계산하기 위한 도구입니다",
  },
  {
    name: "복리계산기",
    description:
      "복리 계산기는 주식이나 가상화폐에 투자시 발생하는 복리 투자 수익을 계산하기 위한 도구입니다",
  },
  {
    name: "복리계산기",
    description:
      "복리 계산기는 주식이나 가상화폐에 투자시 발생하는 복리 투자 수익을 계산하기 위한 도구입니다",
  },
  {
    name: "복리계산기",
    description:
      "복리 계산기는 주식이나 가상화폐에 투자시 발생하는 복리 투자 수익을 계산하기 위한 도구입니다",
  },
];

export default function useCalculators() {
  const [calculators, setCalculators] = React.useState(SAMPLES);

  return { calculators };
}
