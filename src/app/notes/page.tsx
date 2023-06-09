import ErrorBoundary from '@/src/ui/ErrorBoundary';
import FetchError from '@/src/ui/FetchError';
import Loading from '@/src/ui/Loading';
import { Suspense } from 'react';
import 'server-only';
import NoteList from './NoteList';
import { getNotes } from '@/src/app/notes/getNotes';
import { PlusIcon } from '@heroicons/react/24/outline';
import PrimaryNextLinkIcon from '@/src/ui/buttons/PrimaryNextLinkIcon';

export const revalidate = 0;

export const metadata = {
  title: 'List Notes',
};

export default async function Page() {
  const notes = await getNotes();

  return (
    <section className="relative">
      <div className="absolute right-2 top-0 z-10 mr-2 inline-flex items-center">
        <PrimaryNextLinkIcon href="/notes/new" shape="circle" size="medium">
          <PlusIcon className="text-white" />
        </PrimaryNextLinkIcon>
      </div>
      <h2 className="mb-6 text-xs text-gray-50">List Notes</h2>
      <ErrorBoundary fallback={<FetchError />}>
        <Suspense fallback={<Loading />}>
          <NoteList initialState={notes} />
        </Suspense>
      </ErrorBoundary>
    </section>
  );
}
