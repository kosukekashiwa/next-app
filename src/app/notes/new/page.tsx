import NewNote from '@/src/app/notes/new/NewNote';
import Link from 'next/link';

export const metadata = {
  title: 'New Note',
};

export default async function Page() {
  return (
    <main className="mx-2 sm:mx-4">
      <Link
        href={`/notes`}
        className="text-s inline-block rounded-lg font-semibold text-gray-500 outline-none ring-pink-300 transition duration-100 hover:text-pink-500 focus-visible:ring active:text-pink-600 md:text-base"
      >
        ← back
      </Link>
      <h2 className="my-4 text-xs text-gray-400">New Note</h2>
      <NewNote />
    </main>
  );
}
