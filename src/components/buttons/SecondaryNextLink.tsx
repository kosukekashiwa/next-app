import Link, { LinkProps } from 'next/link';

type SecondaryNextLinkProps = Pick<LinkProps, 'href'> & {
  children: React.ReactNode;
  emphasis?: keyof typeof emphasisStyle;
};

const SecondaryNextLink: React.FC<SecondaryNextLinkProps> = ({
  href,
  children,
  emphasis = 'bold',
}) => {
  return (
    <Link href={href} className={`${baseStyle} ${emphasisStyle[emphasis]}`}>
      {children}
    </Link>
  );
};

const baseStyle =
  'inline-flex items-center justify-center rounded-[2px] px-[16px] py-[12px] text-base font-bold leading-none text-gray-90 focus:border-white focus:bg-gray-30 focus:outline-1 focus:outline-offset-2 focus:outline-blue-60';

const emphasisStyle = {
  bold: 'bg-gray-30 border border-solid border-gray-30 hover:bg-gray-40 active:border-gray-50 active:bg-gray-40',
  subtle:
    'bg-transparent border border-solid border-gray-40 hover:bg-gray-20 active:bg-gray-30 active:border-gray-40',
  minimal:
    'bg-transparent border border-solid border-transparent hover:bg-gray-20 active:bg-gray-30 active:border-transparent',
};

export default SecondaryNextLink;
