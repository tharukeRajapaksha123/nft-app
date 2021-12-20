import React from 'react'
import  '../styles/Main.css'
const Main = ({activePunk}) => {
    return (
        <div className="main">
           <div className = "main-content">
               <div className="punk-height">
                   <div className='punk-container'>
                       <img src="/images/1.jpg"alt="punk" className='selected-punk'/>
                   </div>
               </div>
               <div className="punk-details" style={{color:'#fff'}}>
                   <div className='title'>
                       Bandana Punk
                   </div>
                   <span className="item-number">*#3</span>
               </div>
               <div className='owner'>
                   <div className='owner-image-container'>
                       <imng src = "/images/1.png" alt="owner"/>
                   </div>
                   <div className="owner-details">
                       <div className="owner-name-and-handle">
                           <div>0x0B857e48540e96126Eacacc458f6B035115c5990</div>
                           <div className='owner-handle'>@cleverProgrammer</div>
                       </div>
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
    )
}

export default Main
