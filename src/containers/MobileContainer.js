import React, { useEffect, useContext } from "react";
import {AppContext} from '../AppContext';
import './mobile.css';

function MobileContainer() {
  const [state, setState] = useContext(AppContext);

  useEffect(() => {
    console.log("componentDidMount");
  }, []); // empty-array means don't watch for any updates

  const onSubmit = function(e) {
    e.preventDefault()
    const { value } = e.target.querySelector('#mobile-input__code')
    
    setState(state => ({
        ...state,
        isPlaying: true,
        code: Number(value) 
    }))
  }

  const onClickMove = function(event){
      setState(state => ({
          ...state,
          view : {
            topic: 'move',
            event: event
          }
      }))
  }

  return (
    <div className="mobile">
        { !state.isPlaying ?
            (
                <div>
                    <h2>Set Code</h2>
                    <form onSubmit={onSubmit}>
                        <input type="text" className="mobile-input__code" id="mobile-input__code"/>
                        <button type="submit">SUBMIT</button>
                    </form>
                    <p>
                      To get code go tothe site from your computer
                    </p>
                </div>
            ) : (
                <div>
                    <button className="mobile-button__left" onClick={e => onClickMove('left')}> LEFT </button>
                    <button className="mobile-button__right" onClick={e => onClickMove('right')}> RIGHT </button>
                </div>
            )
        }
    </div>
  );
}

export default MobileContainer;
