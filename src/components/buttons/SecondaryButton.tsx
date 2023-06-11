type SecondaryButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ onClick, children }) => {
  return (
    <button
      className="inline-flex h-[35px] items-center justify-center rounded-[4px] bg-gray-50 px-[15px] font-medium leading-none text-gray-100 hover:bg-gray-60 focus:shadow-[0_0_0_2px] focus:shadow-gray-80 focus:outline-none"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
