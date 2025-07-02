// Importing Modules/Packages
import SideListItemComponent from './components/SideListItemComponent.jsx';
import NavigationComponent from './components/NavigationComponent';
import FooterComponent from './components/FooterComponent.jsx';
import { Outlet, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';

export default function App() {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])
  // Returning Components/JSX
  return (
    <React.Fragment>
      <SideListItemComponent />
      <NavigationComponent />
      <Outlet />
      <FooterComponent />
    </React.Fragment>
  )
}