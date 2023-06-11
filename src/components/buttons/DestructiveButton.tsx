type DestructiveButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const DestructiveButton: React.FC<DestructiveButtonProps> = ({ onClick, children }) => {
  return (
    <button
      className="inline-flex h-[35px] items-center justify-center rounded-[4px] bg-red-50 px-[15px] font-medium leading-none text-red-100 hover:bg-red-60 focus:shadow-[0_0_0_2px] focus:shadow-red-80 focus:outline-none"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default DestructiveButton;
