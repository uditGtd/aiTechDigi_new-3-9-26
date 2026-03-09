import React from 'react'
import Marquee from "react-fast-marquee";

function MarqueeSix() {
  return (
    <div className="marquee-text-6-area pb-20 fix">
      <div className="marquee-text-6-wrap">
        <Marquee speed={100}>
          <h5 className="chy-heading-1 title">Never Miss A Drop! Susbcribed Us</h5>
        </Marquee>
      </div>
    </div>
  );
}

export default MarqueeSix