import Stack from '@/src/components/layouts/Stack';
import * as Label from '@radix-ui/react-label';
import { useId } from 'react';

type TextareaProps = Pick<JSX.IntrinsicElements['textarea'], 'value' | 'onChange'> & {
  label: string;
};

const Textarea: React.FC<TextareaProps> = ({ value, onChange, label }) => {
  const textareaId = useId();

  return (
    <Stack direction="column" alignItems="flexStart">
      <Label.Root htmlFor={textareaId}>{label}</Label.Root>
      <textarea
        value={value}
        id={textareaId}
        onChange={onChange}
        className="h-64 w-full rounded-[2px] border border-gray-40 bg-white px-2 py-1 text-gray-90 hover:border-gray-60 focus:border-blue-60"
      />
    </Stack>
  );
};

export default Textarea;
