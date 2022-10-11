import React from 'react'
import royalcosyhillshotel from '../utils/royalcosyhillshotel.jpg';
import delagio from '../utils/delagio.jpg';
import nuoyong from '../utils/nuoyong.jpg';



function Hotel() {
  return (
    

        

<div className='firstrow'>

      
<div className='card'>
<h2>Royal Cosy Hill Hotel</h2>
<img src={royalcosyhillshotel} alt =""/>
</div>


<div className='card'>
<h2>Delagio Hotel</h2>
<img src={delagio} alt =""/>
</div>

<div className='card'>
<h2>Nuoyong Empire Hotel</h2>
<img src={nuoyong} alt =""/>
</div>

    </div>
  )
}

export default Hotel