type PrimaryButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  emphasis?: keyof typeof emphasisStyle;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick, children, emphasis = 'bold' }) => {
  return (
    <button className={`${baseStyle} ${emphasisStyle[emphasis]}`} onClick={onClick}>
      {children}
    </button>
  );
};

const baseStyle =
  'inline-flex items-center justify-center rounded-[2px] px-[16px] py-[12px] text-base font-bold leading-none focus:border-white focus:bg-blue-60 focus:text-white focus:outline-1 focus:outline-offset-2 focus:outline-blue-60';

const emphasisStyle = {
  bold: 'bg-blue-60 text-white border border-solid border-blue-60 hover:bg-blue-70 active:border-blue-80 active:bg-blue-80',
  subtle:
    'bg-transparent text-blue-60 border border-solid border-blue-60 hover:bg-blue-20 active:bg-blue-30 active:text-blue-60 active:border-blue-60',
  minimal:
    'bg-transparent text-blue-60 border border-solid border-transparent hover:bg-blue-20 active:bg-blue-30 active:text-blue-60 active:border-transparent',
};

export default PrimaryButton;
