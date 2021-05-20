import React, { useState } from 'react';

const AppContext = React.createContext();

function AppContextProvider(props) {
//globabl state for application
  const [cart, setCart] = useState([]);

  

  // Could also destructure props to just have children;  Some people do that
  return (
    <AppContext.Provider
      value={{
        cart,
		  setCart,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContextProvider, AppContext };
