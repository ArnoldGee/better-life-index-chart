import React, {useState} from 'react';

import TypedText from './TypedText';
import './Hero.css';

const Hero = () => {
  const [firstElementTyped, setFirstElementTyped] = useState(false);
  return (
    <div className="hero">
      <div className="hero__text header">
        <TypedText
          text={'We know more than ever about wellbeing in the world.'}
          onComplete={() => setFirstElementTyped(true)}
        />
      </div>
      <div className="hero__title header">
        <TypedText
          text={
            firstElementTyped &&
            'What are we <br class="only-mobile" /> <span class="highlighted">doing</span> about it?'
          }
        />
      </div>
    </div>
  );
};

export default Hero;
