type TextareaProps = Pick<JSX.IntrinsicElements['textarea'], 'value' | 'name' | 'onChange'>;

const Textarea: React.FC<TextareaProps> = ({ value, name, onChange }) => {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      className="h-64 w-full rounded-[2px] border border-gray-40 bg-white px-2 py-1 text-gray-90 hover:border-gray-60 focus:border-blue-60"
    />
  );
};

export default Textarea;
