import PlanPrice from "@components/PlansPrices/BoxPrices/PlanPrice";
import Module from "@components/PlansPrices/Module/Module";
import Link from "next/link";

export default function Index() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/libreria">
        <a>Librería</a>
      </Link>
      <PlanPrice variant={1} total={10} />
      <Module text='Systems' />
    </div>
  );
}
