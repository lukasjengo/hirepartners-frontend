import React, { Children } from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';
import Link, { LinkProps } from 'next/link';

interface Props extends React.PropsWithChildren<LinkProps> {
  activeClassName?: string;
}

export const NavLink = ({
  children,
  activeClassName = 'text-pink',
  ...props
}: Props) => {
  const { asPath } = useRouter();
  const child = Children.only(children) as React.ReactElement;
  const childClassName = child.props.className || '';

  const isActive = asPath === props.href || asPath === props.as;

  const className = cx(childClassName, { [activeClassName]: isActive });

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};
