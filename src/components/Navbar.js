import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      name: 'Home',
      path: '/',
      id: 1,
    },
    {
      name: 'Calculator',
      path: '/calculator',
      id: 2,
    },
    {
      name: 'Quotes',
      path: '/quotes',
      id: 3,
    },
  ];

  return (
    <nav className='navbar'>
      <ul className='navbarLink home'>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <NavLink to={link.path} exact>
                {link.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;