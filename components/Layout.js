import React from 'react';
import Link from 'next/link';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button } from "@nextui-org/react";
import avatars from '../public/json/avatars.json'; // Direct import
import { FaHome, FaBattleNet, FaGamepad, FaBook, FaInfo, FaUserAstronaut } from 'react-icons/fa'; // Example icons

const NavigationLink = ({ path }) => {
  const displayName = path.substring(1, 2).toUpperCase() + path.substring(2);

  return (
    <li className="mr-5">
      <Link href={path}>{displayName}</Link>
    </li>
  );
};

const AvatarDropdown = () => {
  const sortedAvatars = React.useMemo(() => {
    return avatars
      .map(({ id, name }) => ({ id, name }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, []);

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
            <DropdownItem key={avatar.id} className="hover:bg-gray-100 hover:text-gray-800 custom-dropdown-item jolly-lodger">
              <Link href={`/avatars/${avatar.id}`}>{avatar.name}</Link>
            </DropdownItem>
          ))}
          <DropdownItem className="hover:bg-gray-100 hover:text-gray-800 custom-dropdown-item jolly-lodger">
            <Link href="/avatars/printAvatars">Print Avatars</Link>
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};

const Layout = ({ children }) => {
  return (
    <div>
      <nav className="bg-gray-800 text-white py-2 jolly-lodger">
        <div className="max-w-screen-lg mx-auto flex justify-between items-center">
          <div className="text-xl">
            <Link href="/">Home</Link>
          </div>
          <ul className="flex items-center list-none p-0">
            {['/viewcards', '/rules', '/about'].map((path, index) => (
              <NavigationLink key={index} path={path} />
            ))}
            <li className="mr-5"><AvatarDropdown /></li>
            <li className="mr-5">
              <Link href="/battlegrounds/battlegrounds">Battlegrounds</Link>
            </li>
            <li className="mr-5">
              <Link href="/bonus/bonus">Bonus</Link>
            </li>
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
};

export default Layout;
