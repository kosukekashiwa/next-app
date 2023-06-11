'use client';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { Note } from '../type';
import PrimaryNextLink from '@/src/components/buttons/PrimaryNextLink';
import DestructiveButton from '@/src/components/buttons/DestructiveButton';

type NoteProps = {
  item: Note;
};

const Note: React.FC<NoteProps> = ({ item }) => {
  const router = useRouter();

  const handleDeleteButtonClick = useCallback(async () => {
    const res = await fetch(`/api/notes/${item.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      alert('Note deleted');
      router.push(`/notes`);
      router.refresh();
    } else {
      alert('Note failed to delete');
    }
  }, [item.id, router]);

  return (
    <div className="relative flex flex-col gap-2.5 rounded-lg bg-gray-100 p-5">
      <h3 className="break-all text-lg font-semibold text-pink-500 md:text-xl">{item.title}</h3>
      <p className="break-all text-gray-500">{item.body}</p>

      <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-end">
        <PrimaryNextLink href={`/notes/${item.id}/edit`}>Edit</PrimaryNextLink>
        <DestructiveButton onClick={handleDeleteButtonClick}>Delete</DestructiveButton>
      </div>
    </div>
  );
};

export default Note;
