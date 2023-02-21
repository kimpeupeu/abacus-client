import BaseLayout from "../components/base/BaseLayout";
import Responsive from "../components/base/Responsive";
import useCalculators from "../lib/hooks/useCalculators";
import { useAppSelector, useAppDispatch } from "../models/core/hooks";
import { increment } from "../models/counter";

export default function Home() {
  const { calculators } = useCalculators();
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <BaseLayout>
      <Responsive>
        {calculators.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
        <p>{count}</p>
        <button onClick={() => dispatch(increment())}></button>
      </Responsive>
    </BaseLayout>
  );
}
