import React, { useRef } from 'react'
import { data } from '../../data/client/client-four'
import imageIl from "../../assets/img/client/bl-4-il-img-1.png";
import CountUp from 'react-countup';


function ClientFour() {

  // counter ref
  const countUpRef = useRef();

  return (
    <div className="chy-brand-logo-4-area">
      <div className="chy-brand-logo-4-wrap">
        
        <div className="chy-brand-logo-4-counter">
          <h4 className="chy-heading-2 number">
            <CountUp
              delay={1}
              duration={3}
              start={1}
              end={520}
              enableScrollSpy
              scrollSpyOnce
              suffix={"+"}
            >
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>
          </h4>
          <p className="chy-para-4 has-20 disc">Clients Satisfactions</p>
          <img
            src={imageIl}
            alt=""
            className="il-img-1"
          />
        </div>

        <div className="chy-brand-logo-4-item">
          <div className="keyfram-slider">
            {/* data map */}
            {data.map((item) => (
              <div className="item" key={item.id}>
                <img src={item.logo} alt="" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default ClientFour