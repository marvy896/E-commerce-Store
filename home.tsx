import React from 'react'
import Nav from './nav';

export default function Home() {
  return (
    <div>
       <Nav />
       <section>
      <h2>Online Experiences</h2>
      <div className='homeImage'>
       <div className='fashion1'><h2 className='fashionH2'>We make you smile</h2><button className='fashionButton'>Click Here</button></div> 
       <div className='fashion2'><h2 className='fashionH2'>We make you smile</h2><button className='fashionButton'>Click Here</button></div> 
       <div className='fashion3'><h2 className='fashionH2'> We make you smile</h2><button className='fashionButton'>Click Here</button></div> 
      </div>
      <p>Join millions of people world WIde in enjoying all 
        kinds of services without leaving home</p>
    </section>
    </div>
    
  )
}
