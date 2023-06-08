'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { Note } from '../type';

type NoteProps = {
  item: Note;
};

const Note: React.FC<NoteProps> = ({ item }) => {
  const router = useRouter();

  const deleteNote = useCallback(async () => {
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
        <Link
          href={`/notes/${item.id}/edit`}
          className="inline-block rounded-lg bg-pink-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-pink-300 transition duration-100 hover:bg-pink-600 focus-visible:ring active:bg-pink-700 md:text-base"
        >
          Edit
        </Link>
        <button
          onClick={deleteNote}
          className="inline-block rounded-lg bg-gray-200 px-8 py-2 text-center text-sm font-semibold text-red-500 outline-none ring-pink-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-red-700 md:text-base"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Note;
