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
</div>


<div className='card'>
<h2>A building for sale</h2>
<img src={commercial} alt =""/>
</div>

<div className='card'>
<h2>A house for renting</h2>
<img src={download} alt =""/>
</div>

    </div>
    </div>
  )
}

export default Commercialproperty