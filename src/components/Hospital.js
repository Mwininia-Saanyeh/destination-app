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
</div>


<div className='card'>
<h2>Redcross Clinic</h2>
<img src={redcross} alt =""/>
</div>

<div className='card'>
<h2>Municipal Hospital Wa</h2>
<img src={municipalhos} alt =""/>
</div>

    </div>

    </div>
  )
}

export default Hospital