type InputProps = Pick<JSX.IntrinsicElements['input'], 'value' | 'name' | 'onChange'>;

const Input: React.FC<InputProps> = ({ value, name, onChange }) => {
  return (
    <input
      value={value}
      name={name}
      onChange={onChange}
      className="w-full rounded-[2px] border border-gray-40 bg-white px-2 py-1 text-gray-90 hover:border-gray-60 focus:border-blue-60"
    />
  );
};

export default Input;
