import React from 'react'
import commercialproperty from '../utils/commercialproperty.jpg'
import commercial from '../utils/commercial.jpg';
import download from '../utils/download.jpg'

function Commercialproperty() {
  return (
    <div>
        <div className='firstrow'>

      
<div className='card'>
<h2>A Warehouse for sale</h2>
<img src={commercialproperty} alt =""/>
<h3>Location : Nakore residence</h3>
<h3>GPS : XW-0003-2345</h3>
</div>


<div className='card'>
<h2>A building for sale</h2>
<img src={commercial} alt =""/>
<h3>Location : Behind Wa Technical School</h3>
<h3>GPS : XW-0003-2345</h3>
</div>

<div className='card'>
<h2>A house for renting</h2>
<img src={download} alt =""/>
<h3>Location : Kpaguri</h3>
<h3>GPS : XW-0003-2345</h3>
</div>

    </div>
    </div>
  )
}

export default Commercialproperty