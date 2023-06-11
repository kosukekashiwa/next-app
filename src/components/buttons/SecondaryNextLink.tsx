import Link, { LinkProps } from 'next/link';

type SecondaryNextLinkProps = Pick<LinkProps, 'href'> & {
  children: React.ReactNode;
};

const SecondaryNextLink: React.FC<SecondaryNextLinkProps> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="inline-flex h-[35px] items-center justify-center rounded-[4px] bg-gray-400 px-[15px] font-medium leading-none text-gray-900 hover:bg-gray-500 focus:shadow-[0_0_0_2px] focus:shadow-gray-700 focus:outline-none"
    >
      {children}
    </Link>
  );
};

export default SecondaryNextLink;
