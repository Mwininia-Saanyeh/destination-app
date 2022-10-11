import React from 'react'
import eatry from '../utils/eatry.jpg';
import secondk from '../utils/secondk.jpg';
import spicy from '../utils/spicy.jpg'


function Eatry() {
  return (
    <div>
        <div className='firstrow'>

      
<div className='card'>
<h2>Jackibra</h2>
<img src={eatry} alt =""/>
</div>


<div className='card'>
<h2>Second Kitchen Restaurant</h2>
<img src={secondk} alt =""/>
</div>

<div className='card'>
<h2>Spicy Restaurant</h2>
<img src={spicy} alt =""/>
</div>

    </div>
    </div>
  )
}

export default Eatry