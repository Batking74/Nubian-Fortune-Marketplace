// Importing Modules/Packages
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
      <NavigationComponent />
      <Outlet />
      <FooterComponent />
      <div className="end-text">
        <p>Copyright <i className='bx bx-copyright'></i> 2024. All Rights Reserved. | Designed By Saidul Islam and GeekProbin | Developed by Nazir Knuckles</p>
      </div>
    </React.Fragment>
  )
}