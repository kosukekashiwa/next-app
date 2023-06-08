'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <section className="mx-2 sm:mx-4">
      <nav className="mb-4 flex gap-12">
        <Link
          href="/help/faq"
          className={`${
            pathname === '/help/faq' ? 'font-semibold text-pink-500' : 'font-normal text-gray-600'
          } text-lg transition duration-100 hover:text-pink-500 active:text-pink-700`}
        >
          FAQ
        </Link>
        <Link
          href="/help/tos"
          className={`${
            pathname === '/help/tos' ? 'font-semibold text-pink-500' : 'font-normal text-gray-600'
          } text-lg transition duration-100 hover:text-pink-500 active:text-pink-700`}
        >
          Terms
        </Link>
      </nav>
      {children}
    </section>
  );
}
