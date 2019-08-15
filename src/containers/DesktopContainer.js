import React, { useEffect, useContext } from "react";
import {AppContext} from '../AppContext';
import Slide from '../components/Slide';

function DesktopContainer() {
  const [state, setState] = useContext(AppContext);

  useEffect(() => {
    console.log("componentDidMount");
  }, []); // empty-array means don't watch for any updates
  
  return (
    <div className="desktop">
      <header className="desktop-header">
      </header>
      <div>
        {
          state.isPlaying ? <Slide /> : state.code
        }
      </div>
    </div>
  );
}

export default DesktopContainer;
