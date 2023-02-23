import React from "react";
import BaseLayout from "../components/base/BaseLayout";
import Responsive from "../components/base/Responsive";
import CalCardGrid from "../components/common/CalCardGrid";
import HomeLayout from "../components/home/HomeLayout";
import HomeSearch from "../components/home/HomeSearch";
import { useAppSelector } from "../models/core/hooks";
import { selectFilteredCalculators } from "../models/home";

export default function Home() {
  const calculators = useAppSelector(selectFilteredCalculators);

  return (
    <BaseLayout>
      <Responsive>
        <HomeSearch />
        <HomeLayout>
          <CalCardGrid calculators={calculators} />
        </HomeLayout>
      </Responsive>
    </BaseLayout>
  );
}
