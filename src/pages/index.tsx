import React from "react";
import BaseLayout from "../components/base/BaseLayout";
import Responsive from "../components/base/Responsive";
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
          {calculators.map((item, index) => (
            <div key={index}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>{item.id}</p>
            </div>
          ))}
        </HomeLayout>
      </Responsive>
    </BaseLayout>
  );
}
