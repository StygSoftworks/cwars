import React from 'react';
import Link from 'next/link';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button
} from "@nextui-org/react";
import avatars from '../public/json/avatars.json'; // Direct import

const NavLink = ({ path }) => (
  <li className="mr-5">
    <Link href={path}>
      {path.substring(1, 2).toUpperCase() + path.substring(2)}
    </Link>
  </li>
);

const AvatarDropdown = () => {
  const sortedAvatars = avatars
    .map(({ id, name }) => ({ id, name }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button color="primary" variant="solid" className="capitalize">
          Avatars
        </Button>
      </DropdownTrigger>
      <DropdownMenu className="bg-white shadow-lg custom-dropdown">
        <DropdownSection>
          {sortedAvatars.map((avatar) => (
            <DropdownItem key={avatar.id} className="hover:bg-gray-100 hover:text-gray-800 custom-dropdown-item">
              <Link href={`/avatars/${avatar.id}`}>
                {avatar.name}
              </Link>
            </DropdownItem>
          ))}
          <DropdownItem className="hover:bg-gray-100 hover:text-gray-800 custom-dropdown-item">
            <Link href="/avatars/printAvatars">
              Print Avatars
            </Link>
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};

const Layout = ({ children }) => (
  <div>
    <nav className="bg-gray-800 text-white py-2">
      <div className="max-w-screen-lg mx-auto flex justify-between items-center">
        <div className="text-xl">
          <Link href="/">Home</Link>
        </div>
        <ul className="flex items-center list-none p-0">
          {['/viewcards', '/rules', '/about'].map((path, index) => (
            <NavLink key={index} path={path} />
          ))}
          <li><AvatarDropdown /></li>
        </ul>
      </div>
    </nav>
    <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      {children}
    </main>
    <footer>
      {/* Footer content */}
    </footer>
  </div>
);

export default Layout;
