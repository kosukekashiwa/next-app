import ErrorBoundary from '@/src/components/ErrorBoundary';
import FetchError from '@/src/components/FetchError';
import Loading from '@/src/components/Loading';
import { Suspense } from 'react';
import 'server-only';
import NoteList from './NoteList';
import { getNotes } from '@/src/app/notes/getNotes';
import { PlusIcon } from '@heroicons/react/24/outline';
import PrimaryNextLink from '@/src/components/buttons/PrimaryNextLink';

export const revalidate = 0;

export const metadata = {
  title: 'List Notes',
};

export default async function Page() {
  const notes = await getNotes();

  return (
    <main className="relative mx-2 sm:mx-4">
      {/* ToDo: アイコンボタン用のComponetを作成する。px, pyが同じ、かつ、もう少しアイコンが大きくても良い */}
      <div className="absolute right-2 top-0 z-10 mr-2 inline-flex items-center">
        <PrimaryNextLink href="/notes/new" shape="circle">
          <PlusIcon className=" h-4 w-4 text-white" />
        </PrimaryNextLink>
      </div>
      <h2 className="mb-6 text-xs text-gray-50">List Notes</h2>
      <ErrorBoundary fallback={<FetchError />}>
        <Suspense fallback={<Loading />}>
          <NoteList initialState={notes} />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
