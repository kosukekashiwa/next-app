import { Metadata } from 'next/types';
import { getNote } from './getNote';
import Note from './Note';
import SecondaryNextLink from '@/src/ui/buttons/SecondaryNextLink';

export const revalidate = 0;

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const note = await getNote(params.id);

  return { title: note.title };
}

export default async function Page({ params }: { params: { id: string } }) {
  const note = await getNote(params.id);

  return (
    <section>
      <SecondaryNextLink href="/notes" emphasis="minimal">
        ← back
      </SecondaryNextLink>
      <h2 className="my-4 text-xs text-gray-50">View Note</h2>
      <Note item={note} />
    </section>
  );
}
