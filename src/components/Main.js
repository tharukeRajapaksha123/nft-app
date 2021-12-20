import React from 'react'
import  '../styles/Main.css'
const Main = ({activePunk}) => {
 //  console.log( activePunk)
    return (
        <div className="main">
           <div className = "main-content">
               <div className="punk-height">
                   <div className='punk-container'>
                       <img src={activePunk.image_original_url}alt="punk" className='selected-punk'/>
                   </div>
               </div>
               <div className="punk-details" style={{color:'#fff'}}>
                   <div className='title'>
                       {activePunk.name}
                       <span className="item-number">.#{activePunk.token_id}</span>
                   </div>
                    <div className='owner'>
                        <div className='owner-image-container'>
                            <img src = {activePunk.owner.profile_img_url}alt="owner"/>
                        </div>
                        
                        <div className="owner-details">
                            <div className="owner-name-and-handle">
                                <span>{activePunk.owner.address}</span>
                                <div className='owner-handle'>@tharukeRajapaksha</div>
                            </div>
                            <div className="spacer"/>
                            <div className='owner-link'>
                                <img src="/images/owner/instagram.png" alt="owner"/>
                            </div>
                            <div className='owner-link'>
                                <img src="/images/owner/twitter.png" alt="owner"/>
                            </div>
                            <div className='owner-link'>
                                <img src="/images/owner/more.png" alt="owner"/>
                            </div>
                        </div>
                    </div>
               </div>
           </div>
        </div>
    )
}

export default Main
