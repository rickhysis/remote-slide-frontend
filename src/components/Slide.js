import React, { useEffect, useState, useContext } from "react";
import {AppContext} from '../AppContext';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const content = [
	{
		title: 'Slide 1',
		description: 'Lorem Ipsum door',
		button: 'Read More',
		image: 'https://i.imgur.com/ZXBtVw7.jpg',
		user: 'Aliando',
		userProfile: 'https://i.imgur.com/JSW6mEk.png'
	},
	{
		title: 'Slide 2',
		description:'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
		button: 'Discover',
		image: 'https://i.imgur.com/DCdBXcq.jpg',
		user: 'Aura Kasih',
		userProfile: 'https://i.imgur.com/0Clfnu7.png'
	},
	{
		title: 'Slide 3',
		description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
		button: 'Buy now',
		image: 'https://i.imgur.com/DvmN8Hx.jpg',
		user: 'Sabun Mandi',
		userProfile: 'https://i.imgur.com/4KeKvtH.png'
	}
];

function Slide() {
  const [slide_index, setSlideIndex] = useState(0);
  const [state, setState] = useContext(AppContext);
  let sliderRef;

  useEffect(() => {
    if(state.view.topic === "move"){
      
      ///if(slide_index !== 0){
      if(state.view.event === "left") 
        sliderRef.previous()//setSlideIndex(slide_index - 1)
      //}

      if(state.view.event === "right") 
        sliderRef.next()//setSlideIndex(slide_index + 1)
       
      setState(state => ({
        ...state,
        view : {
          topic: 'standby',
          event: 'none'
        }
      }))
    }
  }); 

  return (
    <Slider className="slider-wrapper" slideIndex={slide_index} ref={ref => (sliderRef = ref)}>
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{ background: `url('${item.image}') no-repeat center center` }}
          >
            <div className="inner">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button>{item.button}</button>
            </div>
            <section>
              <img src={item.userProfile} alt={item.user} />
              <span>
                Posted by <strong>{item.user}</strong>
              </span>
            </section>
          </div>
        ))}
    </Slider>
  );
}

export default Slide;
