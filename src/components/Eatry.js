import React from 'react'
import eatry from '../utils/eatry.jpg';
import secondk from '../utils/secondk.jpg';
import spicy from '../utils/spicy.jpg'
import {Link} from 'react-router-dom'

function Eatry() {
  return (
    <div>
        <div className='firstrow'>

      
<div className='card'>
<h2>Jackibra</h2>
<img src={eatry} alt =""/>
<button> <Link to='/order'>send order</Link> </button>
<h3>Location : Kabanye</h3>
<h3>GPS : XW-0003-2345</h3>
</div>


<div className='card'>
<h2>Second Kitchen Restaurant</h2>
<img src={secondk} alt =""/>
<button> <Link to='/order'>send order</Link> </button>
<h3>Location : Kpaguri</h3>
<h3>GPS : XW-0003-2345</h3>
</div>

<div className='card'>
<h2>Spicy Restaurant</h2>
<img src={spicy} alt =""/>
<button> <Link to='/order'>send order</Link> </button>
<h3>Location : Kpaguri</h3>
<h3>GPS : XW-0003-2345</h3>
</div>

    </div>
    </div>
  )
}

export default Eatry