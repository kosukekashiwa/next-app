import Link, { LinkProps } from 'next/link';

type SecondaryNextLinkProps = Pick<LinkProps, 'href'> & {
  children: React.ReactNode;
};

const SecondaryNextLink: React.FC<SecondaryNextLinkProps> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-[2px] bg-gray-30 px-[16px] py-[12px] text-base font-bold leading-none text-gray-90 outline-1 outline-offset-2 hover:bg-gray-40 focus:shadow-[0_0_0_2px] focus:shadow-white focus:outline-blue-60"
    >
      {children}
    </Link>
  );
};

export default SecondaryNextLink;
