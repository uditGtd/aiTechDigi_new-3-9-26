import React from 'react'
import { RiArrowRightUpLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

function ServicesCardOne({ item, index }) {
  return (
    <div className={`chy-services-1-item ${index == 0 && 'asslideupcta'} ${index == 2 && 'asslideupcta'} ${index == 3 && 'asslideupcta'} ${index == 5 && 'asslideupcta'}`}>
        <div className="header">
        <div className="icon">
            <img src={item.icon} alt="" />
        </div>
        <h4 className="chy-heading-1 title">{item.title}</h4>
        <p className="chy-para-1 disc">
            {item.disc}
        </p>
        </div>
        <div className="body">
        <ul className="chy-services-1-item-list">
            {/* data map */}
            {item.list.map((listItem, index)=> <li key={index}>
            <i className="fi fi-br-arrow-alt-right"></i> {listItem.item}
            </li>)}
        </ul>
        <Link to="/service-details" className="s1-btn">
            <RiArrowRightUpLine />
        </Link>
        </div>
    </div>
  )
}

export default ServicesCardOne