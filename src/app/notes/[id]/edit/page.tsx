import { Metadata } from 'next/types';
import { getNote } from '../getNote';
import EditNote from './EditNote';
import SecondaryNextLink from '@/src/components/buttons/SecondaryNextLink';
export const revalidate = 0;

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const note = await getNote(params.id);

  return { title: note.title };
}

export default async function Page({ params }: { params: { id: string } }) {
  const note = await getNote(params.id);

  return (
    <section>
      <SecondaryNextLink href={`/notes/${params.id}`} emphasis="minimal">
        ← back
      </SecondaryNextLink>
      <h2 className="my-4 text-xs text-gray-50">Edit Note</h2>
      <EditNote item={note} />
    </section>
  );
}
