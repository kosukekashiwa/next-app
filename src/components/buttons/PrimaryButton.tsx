type PrimaryButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  size?: keyof typeof sizeStyle;
  emphasis?: keyof typeof emphasisStyle;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onClick,
  children,
  size = 'medium',
  emphasis = 'bold',
}) => {
  return (
    <button
      className={`${baseStyle} ${sizeStyle[size]} ${emphasisStyle[emphasis]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const baseStyle =
  'inline-flex items-center justify-center rounded-[2px] font-bold leading-none focus:border-white focus:bg-blue-60 focus:text-white focus:outline-1 focus:outline-offset-2 focus:outline-blue-60';

const sizeStyle = {
  small: 'min-h-[32px] px-[12px] py-[8px] text-sm',
  medium: 'min-h-[42px] px-[16px] py-[12px] text-base',
};

const emphasisStyle = {
  bold: 'bg-blue-60 text-white border border-solid border-blue-60 hover:bg-blue-70 active:border-blue-80 active:bg-blue-80',
  subtle:
    'bg-transparent text-blue-60 border border-solid border-blue-60 hover:bg-blue-20 active:bg-blue-30 active:text-blue-60 active:border-blue-60',
  minimal:
    'bg-transparent text-blue-60 border border-solid border-transparent hover:bg-blue-20 active:bg-blue-30 active:text-blue-60 active:border-transparent',
};

export default PrimaryButton;
