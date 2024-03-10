// MainLayout.jsx
// import React from 'react';
import Feedback from './Feedback';

// eslint-disable-next-line react/prop-types
const MainLayout = ({ children }) => {
  return (
    <div>
      {children}
      <Feedback />
    </div>
  );
};

export default MainLayout;
