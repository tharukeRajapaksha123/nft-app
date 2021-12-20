import React from 'react'
import CollectionCard from './CollectionCard'
import '../styles/PunkList.css'


const PunkList = ({punkListData,setActivePunk}) => {
 //   console.log(punkListData)
    return (
        <div className="punk-list" >
            {
                punkListData.map(punk=>(
                    <div onClick={()=>{setActivePunk(punk)}}   key = {punk.token_id}>
                        <CollectionCard  
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
