// Importing Modules/Packages
import NavigationComponent from './components/NavigationComponent';
import { Outlet } from 'react-router-dom';
import React from 'react';

export default function App() {
  // Returning Components/JSX
  return (
    <React.Fragment>
      <NavigationComponent />
      <Outlet />
    </React.Fragment>
  )
}