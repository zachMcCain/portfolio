import { Transition } from 'react-transition-group';
import React, { useState } from 'react';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

const About = () => {
  const [inProp, setInProp] = useState(false);
  return (
    <div>
      <div className="about" onClick={() => setInProp(true)}>
        <div>
          About
        </div>
      </div>
      <Transition in={inProp} timeout={duration}>
        {state => (
          <div onClick={() => setInProp(false)} style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}>
            <img src="./assets/IMG_9001.jpg" style={{width: '300px', border: 'solid gray 4px', borderRadius: '10px'}}/>
            <div onClick={() => setInProp(false)}>
              Close
            </div>
          </div>
        )}
      </Transition>



    </div>
  );
}

export default About;