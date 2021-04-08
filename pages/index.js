import Link from "next/link";

export default function Index() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/libreria">
        <a>Librería</a>
      </Link>
    </div>
  );
}
