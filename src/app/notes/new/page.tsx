import NewNote from '@/src/app/notes/new/NewNote';
import Link from 'next/link';

export const metadata = {
  title: 'New Note',
};

export default async function Page() {
  return (
    <section>
      <Link
        href={`/notes`}
        className="text-s inline-block rounded-lg font-semibold text-gray-60 outline-none ring-red-40 transition duration-100 hover:text-red-60 focus-visible:ring active:text-red-70 md:text-base"
      >
        ← back
      </Link>
      <h2 className="my-4 text-xs text-gray-50">New Note</h2>
      <NewNote />
    </section>
  );
}
