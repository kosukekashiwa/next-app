import Stack from '@/src/ui/layouts/Stack';
import * as Label from '@radix-ui/react-label';
import { useId } from 'react';

type InputProps = Pick<JSX.IntrinsicElements['input'], 'value' | 'onChange'> & {
  label: string;
};

const Input: React.FC<InputProps> = ({ value, onChange, label }) => {
  const inputId = useId();

  return (
    <Stack direction="column" alignItems="flexStart">
      <Label.Root htmlFor={inputId}>{label}</Label.Root>
      <input
        value={value}
        id={inputId}
        onChange={onChange}
        className="w-full rounded-[2px] border border-gray-40 bg-white px-2 py-1 text-gray-90 hover:border-gray-60 focus:border-blue-60"
      />
    </Stack>
  );
};

export default Input;
