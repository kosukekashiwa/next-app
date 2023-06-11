type PrimaryButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick, children }) => {
  return (
    <button
      className="inline-flex h-[35px] items-center justify-center rounded-[4px] bg-blue-50 px-[15px] font-medium leading-none text-blue-100 hover:bg-blue-60 focus:shadow-[0_0_0_2px] focus:shadow-blue-80 focus:outline-none"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
