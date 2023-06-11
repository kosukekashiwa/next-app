'use client';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { Settings } from '../type';
import PrimaryButton from '@/src/components/buttons/PrimaryButton';

type EditSettingsProps = {
  value: Settings;
};

const EditSettings: React.FC<EditSettingsProps> = ({ value }) => {
  const router = useRouter();

  const [version, setVersion] = useState(value.version);
  const [faq, setFaq] = useState(value.faq);
  const [tos, setTos] = useState(value.tos);

  const handleSaveButtonClick = useCallback(async () => {
    const res = await fetch(`/api/settings`, {
      method: 'PUT',
      body: JSON.stringify({ version: version, faq: faq, tos: tos }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      alert('Settings updated');
      router.refresh();
    } else {
      alert('Settings failed to update');
    }
  }, [faq, router, tos, version]);

  return (
    <div className="relative flex flex-col gap-2.5 rounded-lg bg-gray-100 p-5">
      <div className="sm:col-span-2">
        <label htmlFor="version" className="mb-2 inline-block text-sm text-gray-90 sm:text-base">
          Version
        </label>
        <input
          name="version"
          className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-90 outline-none ring-red-40 transition duration-100 focus:ring"
          value={version}
          onChange={(e) => setVersion(e.target.value)}
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="faq" className="mb-2 inline-block text-sm text-gray-90 sm:text-base">
          FAQ
        </label>
        <textarea
          name="faq"
          className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-90 outline-none ring-red-40 transition duration-100 focus:ring"
          value={faq}
          onChange={(e) => setFaq(e.target.value)}
        ></textarea>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="tos" className="mb-2 inline-block text-sm text-gray-90 sm:text-base">
          TOS
        </label>
        <textarea
          name="tos"
          className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-90 outline-none ring-red-40 transition duration-100 focus:ring"
          value={tos}
          onChange={(e) => setTos(e.target.value)}
        ></textarea>
      </div>

      <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-end">
        <PrimaryButton onClick={handleSaveButtonClick}>Save</PrimaryButton>
      </div>
    </div>
  );
};

export default EditSettings;
