'use client';
import PrimaryButton from '@/src/components/buttons/PrimaryButton';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { z } from 'zod';

const NewNote: React.FC = () => {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSaveButtonClick = useCallback(async () => {
    const res = await fetch(`/api/notes`, {
      method: 'POST',
      body: JSON.stringify({ title, body }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      const id = z.number().parse(await res.json());
      alert('Note created');
      router.push(`/notes/${id}`);
      router.refresh();
    } else {
      alert('Note failed to create');
    }
  }, [body, router, title]);

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
          href={`/notes`}
          className="inline-block rounded-lg bg-gray-200 px-8 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-pink-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
        >
          Cancel
        </Link>
        <PrimaryButton onClick={handleSaveButtonClick}>Create</PrimaryButton>
      </div>
    </div>
  );
};

export default NewNote;
