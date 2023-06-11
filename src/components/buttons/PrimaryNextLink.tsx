import Link, { LinkProps } from 'next/link';

type PrimaryNextLinkProps = Pick<LinkProps, 'href'> & {
  children: React.ReactNode;
};

const PrimaryNextLink: React.FC<PrimaryNextLinkProps> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="inline-flex h-[35px] items-center justify-center rounded-[4px] bg-blue-50 px-[15px] font-medium leading-none text-blue-100 hover:bg-blue-60 focus:shadow-[0_0_0_2px] focus:shadow-blue-80 focus:outline-none"
    >
      {children}
    </Link>
  );
};

export default PrimaryNextLink;
