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
            pathname === '/help/faq' ? 'font-semibold text-red-60' : 'font-normal text-gray-70'
          } active:text-erd-80 text-lg transition duration-100 hover:text-red-60`}
        >
          FAQ
        </Link>
        <Link
          href="/help/tos"
          className={`${
            pathname === '/help/tos' ? 'font-semibold text-red-60' : 'font-normal text-gray-70'
          } text-lg transition duration-100 hover:text-red-60 active:text-red-80`}
        >
          Terms
        </Link>
      </nav>
      {children}
    </section>
  );
}
