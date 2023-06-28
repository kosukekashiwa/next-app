import Link, { LinkProps } from 'next/link';

type SecondaryNextLinkProps = Pick<LinkProps, 'href' | 'prefetch'> & {
  children: React.ReactNode;
  size?: keyof typeof sizeStyle;
  emphasis?: keyof typeof emphasisStyle;
  shape?: keyof typeof shapeStyle;
};

const SecondaryNextLink: React.FC<SecondaryNextLinkProps> = ({
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
  'inline-flex items-center justify-center font-bold leading-none text-gray-90 focus:border-white focus:bg-gray-30 focus:outline-1 focus:outline-offset-2 focus:outline-blue-60';

const sizeStyle = {
  small: 'min-h-[32px] px-[12px] py-[8px] text-sm',
  medium: 'min-h-[42px] px-[16px] py-[12px] text-base',
};

const emphasisStyle = {
  bold: 'bg-gray-30 border border-solid border-gray-30 hover:bg-gray-40 active:border-gray-50 active:bg-gray-40',
  subtle:
    'bg-transparent border border-solid border-gray-40 hover:bg-gray-20 active:bg-gray-30 active:border-gray-40',
  minimal:
    'bg-transparent border border-solid border-transparent hover:bg-gray-20 active:bg-gray-30 active:border-transparent',
};

const shapeStyle = {
  square: 'rounded-[2px]',
  circle: 'rounded-full',
};

export default SecondaryNextLink;
