import Link from 'next/link';

export default function Index() {
  return (
    <div style={{ marginLeft: '1em' }}>
      <h1>Home</h1>
      <Link href="/library">
        <a>Librería</a>
      </Link>
    </div>
  );
}
