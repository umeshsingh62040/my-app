import React from 'react'
import img1 from '../Image/github.png';
import img2 from '../Image/instagram-new.png';
import img3 from '../Image/linkedin-circled.png'
export default function Intro() {
  return (
    <div className='n-intro'>
        
        <div className='i-name '>
            <h4> hy!  my Name is 
              Umesh singh</h4>
            <h5> Fronted developer with high
            lavel exprience in web desining and development,
            producting the quality work.
            </h5>
            
        </div>
        <div className='btn'>
        <button>  Hire me</button>
        </div>
        <div className='i-con'>
        <img src={img1}alt=''></img>
        <img src={img2} alt=''></img>
        <img src={img3} alt=''></img>

        
        </div>
        <div className='right-side'>
            Right Image
        </div>
    </div>
  )
}
