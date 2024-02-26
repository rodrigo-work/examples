import * as React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    newTab?: boolean;
    href: string;
}
declare function Link({ children, href, newTab, ...other }: LinkProps): JSX.Element;

declare function CounterButton(): JSX.Element;

export { CounterButton, Link };
