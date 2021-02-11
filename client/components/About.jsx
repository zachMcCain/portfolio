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
          About Info Goes Here
        </div>
      </div>
      <Transition in={inProp} timeout={duration}>
        {state => (
          <div  style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}>
            I'm a fade Transition!
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