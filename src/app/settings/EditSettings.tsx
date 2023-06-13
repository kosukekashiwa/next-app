'use client';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { Settings } from '../type';
import PrimaryButton from '@/src/components/buttons/PrimaryButton';
import Input from '@/src/components/inputs/Input';
import Textarea from '@/src/components/inputs/Textarea';

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
    <div className="relative flex flex-col gap-2.5 rounded-lg bg-gray-10 p-5">
      <div className="sm:col-span-2">
        <label htmlFor="version" className="mb-2 inline-block text-sm text-gray-90 sm:text-base">
          Version
        </label>
        <Input name="version" value={version} onChange={(e) => setVersion(e.target.value)} />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="faq" className="mb-2 inline-block text-sm text-gray-90 sm:text-base">
          FAQ
        </label>
        <Textarea name="faq" value={faq} onChange={(e) => setFaq(e.target.value)} />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="tos" className="mb-2 inline-block text-sm text-gray-90 sm:text-base">
          TOS
        </label>
        <Textarea name="tos" value={tos} onChange={(e) => setTos(e.target.value)} />
      </div>

      <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-end">
        <PrimaryButton onClick={handleSaveButtonClick}>Save</PrimaryButton>
      </div>
    </div>
  );
};

export default EditSettings;
