type SecondaryButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  emphasis?: keyof typeof emphasisStyle;
};

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  onClick,
  children,
  emphasis = 'bold',
}) => {
  return (
    <button className={`${baseStyle} ${emphasisStyle[emphasis]}`} onClick={onClick}>
      {children}
    </button>
  );
};

const baseStyle =
  'inline-flex items-center justify-center rounded-[2px] px-[16px] py-[12px] text-base font-bold leading-none text-gray-90 focus:border-white focus:bg-gray-30 focus:text-white focus:outline-1 focus:outline-offset-2 focus:outline-blue-60';

const emphasisStyle = {
  bold: 'bg-gray-30 border border-solid border-blue-60 hover:bg-gray-40 active:border-gray-50 active:bg-blue-80',
  subtle:
    'bg-transparent border border-solid border-gray-60 hover:bg-gray-20 active:bg-gray-30 active:border-blue-60',
  minimal:
    'bg-transparent border border-solid border-transparent hover:bg-blue-20 active:bg-blue-30 active:border-transparent',
};

export default SecondaryButton;
