'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { Note } from '@/src/app/notes/type';

type Props = {
  item: Note;
};

const EditNote: React.FC<Props> = ({ item }) => {
  const router = useRouter();

  const [title, setTitle] = useState(item.title);
  const [body, setBody] = useState(item.body);

  const updateNote = useCallback(async () => {
    const res = await fetch(`/api/notes/${item.id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, body }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      alert('Note updated');
      router.push(`/notes/${item.id}`);
      router.refresh();
    } else {
      alert('Note failed to update');
    }
  }, [body, item.id, router, title]);

  return (
    <div className="relative flex flex-col gap-2.5 rounded-lg bg-gray-100 p-5">
      <div className="sm:col-span-2">
        <label htmlFor="title" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
          Title
        </label>
        <input
          name="title"
          className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-pink-300 transition duration-100 focus:ring"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="body" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
          Body
        </label>
        <textarea
          name="body"
          className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-pink-300 transition duration-100 focus:ring"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>

      <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-end">
        <Link
          href={`/notes/${item.id}`}
          className="inline-block rounded-lg bg-gray-200 px-8 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-pink-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
        >
          Cancel
        </Link>
        <button
          onClick={updateNote}
          className="inline-block rounded-lg bg-pink-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-pink-300 transition duration-100 hover:bg-pink-600 focus-visible:ring active:bg-pink-700 md:text-base"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditNote;
