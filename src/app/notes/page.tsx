import ErrorBoundary from '@/src/components/ErrorBoundary';
import FetchError from '@/src/components/FetchError';
import Loading from '@/src/components/Loading';
import Link from 'next/link';
import { Suspense } from 'react';
import 'server-only';
import NoteList from './NoteList';
import { getNotes } from '@/src/app/notes/getNotes';

export const revalidate = 0;

export const metadata = {
  title: 'List Notes',
};

export default async function Page() {
  const notes = await getNotes();

  return (
    <main className="relative mx-2 sm:mx-4">
      <Link
        href="/notes/new"
        className="absolute right-2 top-0 z-10 mr-2 inline-flex items-center rounded-full bg-red-60 p-2.5 text-center text-sm font-medium text-white hover:bg-red-80"
      >
        <svg
          aria-hidden="true"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="4 4 8 8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">New Note</span>
      </Link>
      <h2 className="mb-6 text-xs text-gray-50">List Notes</h2>
      <ErrorBoundary fallback={<FetchError />}>
        <Suspense fallback={<Loading />}>
          <NoteList initialState={notes} />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
