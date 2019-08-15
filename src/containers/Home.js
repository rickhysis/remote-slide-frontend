import React, { useEffect, useState, useContext } from "react";
import io from 'socket.io-client';
import responsive from 'responsive';
import  DesktopContainer from './DesktopContainer';
import  MobileContainer from './MobileContainer';
import {AppContext} from '../AppContext';

const socket = io('https://remote-stream.herokuapp.com');

const opts = {
  checkpoints: {
    mobile: {
      width: [0, 450]
    },
    desktop: {
      width: [451, null]
    }
  }
}

function App() {
  const [responsive_matches, setResponsiveMatches] = useState('desktop');
  const [state, setState] = useContext(AppContext);

  useEffect(() => {
    console.log("componentDidMount");
    
    responsive(opts, data => {
      setResponsiveMatches(data.matches[0])
    })

    try {
      socket.open();      
      
      socket.on('initial', function(data){
        if(data.isPlaying && state.code === data.id)
          setState(state => ({
            ...state,
            isPlaying: data.isPlaying 
          }))
      });

      socket.on('event', function(data){
        if(data.topic === 'move' && state.code === data.id)
          setState(state => ({
            ...state,
            view: data 
          }))
      });

    } catch (error) {
      console.log(error);
    }
    
  }, []); // empty-array means don't watch for any updates
  
  useEffect(() => {
    if(state.isPlaying)  
      socket.emit('init', { isPlaying: true, id: state.code})
    
    if(state.view.topic === 'move')
      socket.emit('view', { ...state.view, id: state.code})
  })

  return (
    <div className="home">
      {
        responsive_matches && responsive_matches === 'desktop' ? <DesktopContainer /> : <MobileContainer /> 
      }
    </div>
  );
}

export default App;
