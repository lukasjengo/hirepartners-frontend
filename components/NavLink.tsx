import React, { Children } from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';
import Link, { LinkProps } from 'next/link';

interface Props extends React.PropsWithChildren<LinkProps> {
  activeClassName?: string;
  className?: string;
}

export const NavLink = ({
  children,
  activeClassName = 'text-pink',
  className,
  ...props
}: Props) => {
  const { asPath } = useRouter();
  const isActive = asPath === props.href || asPath === props.as;

  return (
    <Link {...props} className={cx(className, { [activeClassName]: isActive })}>
      {children}
    </Link>
  );
};
