import Link from 'next/link';
import ContactSection from "@components/Contact/index"

export default function Index() {
  return (
    <div style={{ marginLeft: '1em' }}>
      <h1>Home</h1>
      <Link href="/library">
        <a>Librería</a>
      </Link>

      <ContactSection />
    </div>
  );
}
