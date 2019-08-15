import React, { useState } from 'react';

const AppContext = React.createContext([{}, () => {}]);
const code = Math.floor(10000 + Math.random() * 90000);

const AppProvider = (props) => {
  const [state, setState] = useState({
    view: {
      topic: 'standby',
      event: 'none'
    },
    code: code,
    isPlaying: false,
  });
  return (
    <AppContext.Provider value={[state, setState]}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };


/**
 * initial / standby => view { topic: 'standby' , event: 'none' }
 * move left => view { topic: 'move' , event: 'left' }
 * move right => view { topic: 'move' , event: 'right' }
 * 
 */