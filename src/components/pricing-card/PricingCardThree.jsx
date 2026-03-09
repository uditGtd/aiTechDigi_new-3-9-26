import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function PricingCardThree({ data }) {
    return (
        <div
          className={`chy-price-3-item`}
        >
          <div className="header">
            <div className="left">
              <h3 className="chy-heading-1 price">${data.price}</h3>
              <span className="monthly chy-heading-1">{data.type}</span>
            </div>
            <div className="right">
              <h4 className="title chy-heading-1">{data.name}</h4>
              <p className="chy-para-3 disc">{data.types}</p>
            </div>
          </div>
          <ul className="chy-price-3-item-list mb-35">
            {/* data map */}
            {data.features.map((list, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={faCheckCircle} /> {list.name}
              </li>
            ))}
          </ul>
          <Link to="/contact-us" className="chy-pr-btn-4 mb-50">get started</Link>
          <span className="tax chy-heading-1">{data.disc}</span>
        </div>
    );
}

export default PricingCardThree