import Link, { LinkProps } from 'next/link';

type SecondaryNextLinkProps = Pick<LinkProps, 'href'> & {
  children: React.ReactNode;
};

const SecondaryNextLink: React.FC<SecondaryNextLinkProps> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="inline-flex h-[35px] items-center justify-center rounded-[4px] bg-gray-50 px-[15px] font-medium leading-none text-gray-100 hover:bg-gray-60 focus:shadow-[0_0_0_2px] focus:shadow-gray-80 focus:outline-none"
    >
      {children}
    </Link>
  );
};

export default SecondaryNextLink;
