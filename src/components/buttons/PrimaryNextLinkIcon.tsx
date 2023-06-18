import Link, { LinkProps } from 'next/link';

type PrimaryNextLinkIconProps = Pick<LinkProps, 'href' | 'prefetch'> & {
  children: React.ReactNode;
  size?: keyof typeof sizeStyle;
  emphasis?: keyof typeof emphasisStyle;
  shape?: keyof typeof shapeStyle;
};

const PrimaryNextLinkIcon: React.FC<PrimaryNextLinkIconProps> = ({
  href,
  prefetch,
  children,
  size = 'medium',
  emphasis = 'bold',
  shape = 'square',
}) => {
  return (
    <Link
      href={href}
      prefetch={prefetch}
      className={`${baseStyle} ${sizeStyle[size]} ${emphasisStyle[emphasis]} ${shapeStyle[shape]}`}
    >
      {children}
    </Link>
  );
};

const baseStyle =
  'inline-flex items-center justify-center font-bold leading-none focus:border-white focus:bg-blue-60 focus:text-white focus:outline-1 focus:outline-offset-2 focus:outline-blue-60';

const sizeStyle = {
  small: 'h-[32px] w-[32px] px-[8px] py-[8px] text-sm',
  medium: 'h-[42px] w-[42px] px-[8px] py-[8px] text-base',
};

const emphasisStyle = {
  bold: 'bg-blue-60 text-white border border-solid border-blue-60 hover:bg-blue-70 active:border-blue-80 active:bg-blue-80',
  subtle:
    'bg-transparent text-blue-60 border border-solid border-blue-60 hover:bg-blue-20 active:bg-blue-30 active:text-blue-60 active:border-blue-60',
  minimal:
    'bg-transparent text-blue-60 border border-solid border-transparent hover:bg-blue-20 active:bg-blue-30 active:text-blue-60 active:border-transparent',
};

const shapeStyle = {
  square: 'rounded-[2px]',
  circle: 'rounded-full',
};

export default PrimaryNextLinkIcon;
