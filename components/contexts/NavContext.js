import React from 'react';

const NavContext = React.createContext({
  sideNavOpen: false,
  setSideNavOpen: () => {},
});

export default NavContext;

