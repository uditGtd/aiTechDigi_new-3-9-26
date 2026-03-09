import bgImage from '../../assets/img/price/p3-bg-img-1.png'
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { advancePlans, expensivePlans, mediumPlans } from '../../data/pricing/pricing-three';
import PricingCardThree from '../../components/pricing-card/PricingCardThree';
import SplitText3 from '../../components/title-animation/SplitTextAnimation3';

function PricingThree() {

  return (
    <div
      className="chy-price-3-area bg-default pt-150 pb-100"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container chy-container-1">

        {/* section-title */}
        <div className="section-title-wrap mb-10 text-center">
          <h3 className="chy-subtitle-3 wow fadeInDown ">our best prices</h3>
          <h2 className="chy-title-3 chy-split-in-right-2 chy-split-text">
            <SplitText3 text="plans for everyone" />
          </h2>
        </div>

        {/* pricing tab */}
        <Tabs
          defaultActiveKey="medium-plans"
          id="chy-price-3-tab"
          className="chy-price-3-tabs-btn"
        >

          {/* tab single item  */}
          <Tab eventKey="medium-plans" title="medium plans">
            <div className="row">
              {mediumPlans.map((data) => (
                <div className="col-xl-4 col-lg-6 col-md-6" key={data.id}>
                  <PricingCardThree
                    data={data}
                  />
                </div>
              ))}
            </div>
          </Tab>

          {/* tab single item  */}
          <Tab eventKey="advance-plans" title="advance plans">
            <div className="row">
              {/* pricing data map */}
              {advancePlans.map((data) => (
                <div className="col-xl-4 col-lg-6 col-md-6" key={data.id}>
                  <PricingCardThree
                    data={data}
                  />
                </div>
              ))}
            </div>
          </Tab>

          {/* tab single item  */}
          <Tab eventKey="expensive-plans" title="expensive plans">
            <div className="row">
              {/* pricing data map */}
              {expensivePlans.map((data) => (
                <div className="col-xl-4 col-lg-6 col-md-6" key={data.id}>
                  <PricingCardThree
                    data={data}
                  />
                </div>
              ))}
            </div>
          </Tab>

        </Tabs>

      </div>
    </div>
  )
}

export default PricingThree