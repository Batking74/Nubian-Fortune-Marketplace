// Importing Modules/Packages
import NavigationComponent from './components/NavigationComponent';
import FooterComponent from './components/FooterComponent.jsx';
import { Outlet } from 'react-router-dom';
import React from 'react';

export default function App() {
  // Returning Components/JSX
  return (
    <React.Fragment>
      <NavigationComponent />
      <Outlet />
      <FooterComponent />
      <div className="end-text">
        <p>Copyright <i className='bx bx-copyright'></i> 2024. All Rights Reserved. | Designed By Saidul Islam | Developed by Nazir Knuckles</p>
      </div>
    </React.Fragment>
  )
}