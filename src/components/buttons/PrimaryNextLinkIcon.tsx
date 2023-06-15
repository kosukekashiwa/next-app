import PrimaryNextLink, { PrimaryNextLinkProps } from '@/src/components/buttons/PrimaryNextLink';

type PrimaryNextLinkIconProps = Pick<
  PrimaryNextLinkProps,
  'href' | 'prefetch' | 'children' | 'size' | 'shape'
>;

const PrimaryNextLinkIcon: React.FC<PrimaryNextLinkIconProps> = ({
  href,
  prefetch,
  children,
  size = 'medium',
  shape,
}) => {
  return (
    <PrimaryNextLink
      href={href}
      prefetch={prefetch}
      size={size}
      shape={shape}
      expansionClass={sizeStyle[size]}
    >
      {children}
    </PrimaryNextLink>
  );
};

const sizeStyle = {
  small: 'px-[8px] py-[8px]',
  medium: 'px-[12px] py-[12px]',
};

export default PrimaryNextLinkIcon;
