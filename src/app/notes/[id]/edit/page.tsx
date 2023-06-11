import Link from 'next/link';
import { Metadata } from 'next/types';
import { getNote } from '../getNote';
import EditNote from './EditNote';
export const revalidate = 0;

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const note = await getNote(params.id);

  return { title: note.title };
}

export default async function Page({ params }: { params: { id: string } }) {
  const note = await getNote(params.id);

  return (
    <main className="mx-2 sm:mx-4">
      <Link
        href={`/notes/${params.id}`}
        className="text-s inline-block rounded-lg font-semibold text-gray-60 outline-none ring-red-40 transition duration-100 hover:text-red-60 focus-visible:ring active:text-red-70 md:text-base"
      >
        ← back
      </Link>
      <h2 className="my-4 text-xs text-gray-50">Edit Note</h2>
      <EditNote item={note} />
    </main>
  );
}
