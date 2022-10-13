import React from 'react'
import royalcosyhillshotel from '../utils/royalcosyhillshotel.jpg';
import delagio from '../utils/delagio.jpg';
import nuoyong from '../utils/nuoyong.jpg';
import { Link } from 'react-router-dom';



function Hotel() {
  return (
    

        

<div className='firstrow'>

      
<div className='card'>
<h2>Royal Cosy Hill Hotel</h2>
<img src={royalcosyhillshotel} alt =""/>
<button> <Link to='/book'>send order</Link> </button>
<h3>Location : Jirapa</h3>
<h3>GPS : XW-0003-2345</h3>
</div>


<div className='card'>
<h2>Delagio Hotel</h2>
<img src={delagio} alt =""/>
<button> <Link to='/book'>send order</Link> </button>
<h3>Location : Danku</h3>
<h3>GPS : XW-0003-2345</h3>
</div>

<div className='card'>
<h2>Nuoyong Empire Hotel</h2>
<img src={nuoyong} alt =""/>
<button> <Link to='/book'>send order</Link> </button>
<h3>Location : Songbo</h3>
<h3>GPS : XW-0003-2345</h3>
</div>

    </div>
  )
}

export default Hotel