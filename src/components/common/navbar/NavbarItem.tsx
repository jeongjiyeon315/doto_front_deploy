import React, { ReactNode } from 'react';
import { Children } from 'react';
import { NavLink } from 'react-router-dom';

type NavItemLinkProps = {
  to: string;
  name: string;
  children: ReactNode;
};

const NavbarItem = ({ to, name, children }: NavItemLinkProps) => {
  return (
    <NavLink to={to} className="flex gap-[0.5rem] items-center mb:flex-col dark:bg-Dark_Layout-100">
      {({ isActive }) => (
        <>
          {Children.map(children, (child) =>
            React.cloneElement(child as React.ReactElement, {
              className: isActive
                ? 'fill-Light_CategoryText_Icon_Contents dark:fill-Dark_Text_Name'
                : 'fill-Dark_CategoryText_Icon dark:fill-Light_Text_Name',
            }),
          )}
          <span
            className={`text-base ${
              isActive
                ? 'text-Light_CategoryText_Icon dark:text-Dark_Text_Name'
                : 'text-Dark_CategoryText_Icon dark:text-Light_Text_Name'
            }`}
          >
            {name}
          </span>
        </>
      )}
    </NavLink>
  );
};
export default NavbarItem;
