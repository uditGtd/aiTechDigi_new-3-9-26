import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SplitText = ({ text }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const letters = container.querySelectorAll('span');

    ScrollTrigger.create({
      trigger: container,
      start: 'top 90%',
      once: true, 
      onEnter: () => {
        gsap.fromTo(
          letters,
          { x: 50, opacity: 0, color: '#9946EC' },
          { x: 0, opacity: 1, color: 'inherit', stagger: 0.02, duration: 1.5, ease: "Back.easeOut", webkitTextStroke: "0px white" }
        );
      }
    });
  }, []);

  const splitIntoWords = text.split(' ').map((word, wordIndex) => (
    <span key={wordIndex} style={{ display: 'inline-block', margin: '0 4px' }} className='splite-word'>
      {word.split('').map((letter, letterIndex) => (
        <span key={letterIndex} style={{ display: 'inline-block', whiteSpace: 'pre', }}>
          {letter}
        </span>
      ))}
    </span>
  ));

  return (
    <div ref={containerRef} style={{ display: 'inline-block', whiteSpace: 'pre-wrap', }}>
      {splitIntoWords}
    </div>
  );
};

export default SplitText;
