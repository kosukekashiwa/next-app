import { apiUrl } from '@/src/constants/api';
import 'server-only';
import { zNote } from '../type';

export const getNote = async (
  id: string,
): Promise<{
  id: number;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
}> => {
  const res = await fetch(`${apiUrl}/notes/${id}`, { cache: 'no-store' });
  const data = await res.json();
  const note = zNote.parse(data);

  return note;
};
