import React from "react";

const NavbarContext = React.createContext();
const NavProvider = NavbarContext.Provider;

const NavProviderComp = ({ children }) => {
  const [hidden, setHidden] = React.useState(true);

  return <NavProvider value={{ hidden, setHidden }}>{children}</NavProvider>;
};
export { NavProvider, NavbarContext };
export default NavProviderComp;
