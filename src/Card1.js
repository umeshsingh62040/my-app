import React from 'react'
import img1 from './Image/CIRKUS.jpg'
export default function Card1() {
  return (
    <div className='cards'>
    <div className='card'>
    <img src={img1} alt='mypic' className='image_card'></img>
    <div className='card_info'>
    <span className='card_category'>A Netflix orignal series</span>
    <h5 className='card_tittle'> the dark movie</h5>
    <a href='' target="_blank"></a>
    <button>watch now</button>

    </div>


    </div>
    <div className='card'>
    <img src={img1} alt='mypic' className='image_card'></img>
    <div className='card_info'>
    <span className='card_category'>A Netflix orignal series</span>
    <h5 className='card_tittle'> the dark movie</h5>
    <a href='' target="_blank"></a>
    <button>watch now</button>

    </div>


    </div>
    <div className='card'>
    <img src={img1} alt='mypic' className='image_card'></img>
    <div className='card_info'>
    <span className='card_category'>A Netflix orignal series</span>
    <h5 className='card_tittle'> the dark movie</h5>
    <a href='' target="_blank"></a>
    <button>watch now</button>

    </div>


    </div>


    </div>
  )
}
