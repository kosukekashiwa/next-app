type PrimaryButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick, children }) => {
  return (
    <button
      className="inline-flex h-[35px] items-center justify-center rounded-[4px] bg-green-400 px-[15px] font-medium leading-none text-green-900 hover:bg-green-500 focus:shadow-[0_0_0_2px] focus:shadow-green-700 focus:outline-none"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
