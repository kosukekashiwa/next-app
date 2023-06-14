type DestructiveButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  size?: keyof typeof sizeStyle;
  emphasis?: keyof typeof emphasisStyle;
};

const DestructiveButton: React.FC<DestructiveButtonProps> = ({
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
  'inline-flex items-center justify-center rounded-[2px] px-[16px] py-[12px] font-bold leading-none focus:border-white focus:bg-red-60 focus:text-white focus:outline-1 focus:outline-offset-2 focus:outline-blue-60';

const sizeStyle = {
  small: 'min-h-[32px] px-[12px] py-[8px] text-sm',
  medium: 'min-h-[42px] px-[16px] py-[12px] text-base',
};

const emphasisStyle = {
  bold: 'bg-red-60 text-white border border-solid border-red-60 hover:bg-red-70 active:border-red-80 active:bg-red-80',
  subtle:
    'bg-transparent text-red-60 border border-solid border-red-60 hover:bg-red-20 active:bg-red-30 active:text-red-60 active:border-red-60',
  minimal:
    'bg-transparent text-red-60 border border-solid border-transparent hover:bg-red-20 active:bg-red-30 active:text-red-60 active:border-transparent',
};

export default DestructiveButton;
