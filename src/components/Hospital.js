import React from 'react'
import ultrahospital from '../utils/ultrahospital.jpg';
import redcross from '../utils/redcross.jpg';
import municipalhos from '../utils/municipalhos.jpg';

function Hospital() {
  return (
    <div>

<div className='firstrow'>

      
<div className='card'>
<h2>Wa Ultra-Modern Hospital </h2>
<img src={ultrahospital} alt =""/>
<h3>Location : Water Village</h3>
<h3>GPS : XW-0003-2345</h3>
</div>


<div className='card'>
<h2>Redcross Clinic</h2>
<img src={redcross} alt =""/>
<h3>Location : Bamahu</h3>
<h3>GPS : XW-0003-2345</h3>
</div>

<div className='card'>
<h2>Municipal Hospital Wa</h2>
<img src={municipalhos} alt =""/>
<h3>Location : Kabanye</h3>
<h3>GPS : XW-0003-2345</h3>
</div>

    </div>

    </div>
  )
}

export default Hospital