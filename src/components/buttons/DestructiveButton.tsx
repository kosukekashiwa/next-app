type DestructiveButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const DestructiveButton: React.FC<DestructiveButtonProps> = ({ onClick, children }) => {
  return (
    <button
      className="inline-flex items-center justify-center rounded-[2px] bg-red-60 px-[16px] py-[12px] text-base font-bold leading-none text-white outline-1 outline-offset-2 hover:bg-red-70 focus:shadow-[0_0_0_2px] focus:shadow-white focus:outline-blue-60"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default DestructiveButton;
