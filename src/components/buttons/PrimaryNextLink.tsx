import Link, { LinkProps } from 'next/link';

type PrimaryNextLinkProps = Pick<LinkProps, 'href'> & {
  children: React.ReactNode;
};

const PrimaryNextLink: React.FC<PrimaryNextLinkProps> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-[2px] bg-blue-60 px-[16px] py-[12px] text-base font-bold leading-none text-white outline-1 outline-offset-2 hover:bg-blue-70 focus:shadow-[0_0_0_2px] focus:shadow-white focus:outline-blue-60"
    >
      {children}
    </Link>
  );
};

export default PrimaryNextLink;
