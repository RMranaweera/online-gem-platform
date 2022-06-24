import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/adminBoard',
    icon: <AiIcons.AiOutlineDashboard />,
    cName: 'nav-text'
  },
  {
    title: 'Seller',
    path: '/seller',
    icon: <AiIcons.AiOutlineUser />,
    cName: 'nav-text'
  },
  {
    title: 'Buyer',
    path: '/buyer',
    icon: <IoIcons.IoMdPeople/>,
    cName: 'nav-text'
  },
  {
    title: 'Driver',
    path: '/driver',
    icon: <FaIcons.FaShuttleVan />,
    cName: 'nav-text'
  },
  {
    title: 'Gem Bureau Agent',
    path: '/gbAgent',
    icon: <FaIcons.FaUserTie />,
    cName: 'nav-text'
  },
  {
    title: 'Feedback',
    path: '/support',
    icon: <AiIcons.AiOutlineMessage/>,
    cName: 'nav-text'
  },
  {
    title: 'Sign Out',
    path: '/support',
    icon: <AiIcons.AiOutlineLogout />,
    cName: 'nav-text'
  }
];
