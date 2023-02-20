import BaseLayout from "../components/base/BaseLayout";
import useCalculators from "../lib/hooks/useCalculators";

export default function Home() {
  const { calculators } = useCalculators();

  return (
    <BaseLayout>
      {calculators.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </BaseLayout>
  );
}
