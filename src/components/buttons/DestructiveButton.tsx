type DestructiveButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const DestructiveButton: React.FC<DestructiveButtonProps> = ({ onClick, children }) => {
  return (
    <button
      className="inline-flex h-[35px] items-center justify-center rounded-[4px] bg-rose-400 px-[15px] font-medium leading-none text-rose-900 hover:bg-rose-500 focus:shadow-[0_0_0_2px] focus:shadow-rose-700 focus:outline-none"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default DestructiveButton;
