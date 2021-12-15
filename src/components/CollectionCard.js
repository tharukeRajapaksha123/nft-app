import React from 'react'
import '../styles/CollectionCard.css'
const CollectionCard = ({id,name,traits,image}) => {
    return (
        <div className="collection-card">
            <img src={image} alt="punk"/>
            <div className="details">
                <div className='name'>
                    {name} <div className='id'>.#{id}</div>
                </div>
                <div className="price-container">
                    <img src="/images/eth.png" alt="eth" className="weith-image"/>
                    <div className="price">10</div>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard
