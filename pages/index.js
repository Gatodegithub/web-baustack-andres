import PlanPrice from "@components/PlansPrices/BoxPrices/PlanPrice";
import Module from "@components/PlansPrices/Module/Module";
import Link from "next/link";

export default function Index() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/library">
        <a>Librería</a>
      </Link>
    </div>
  );
}
