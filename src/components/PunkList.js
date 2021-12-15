import React from 'react'
import CollectionCard from './CollectionCard'
import '../styles/PunkList.css'


const PunkList = ({punkListData}) => {
    console.log(punkListData)
    return (
        <div className="punk-list">
            {
                punkListData.map(punk=>(
                    <div>
                        <CollectionCard  
                            key = {punk.token_id}
                            id = {punk.token_id}
                            name = {punk.name}
                            traits= {punk.traits}
                            image = {punk.image_original_url}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default PunkList
