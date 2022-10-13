import React from 'react'
import School from '../components/School'
import { Link } from 'react-router-dom'

function Category() {
  return (
    <div>
<li><button><Link to={'/School'}>SCHOOLS</Link></button></li>
<li><button><Link to={'/Eatry'}>EATRIES</Link></button></li>
<li><button><Link to={'/Hotel'}>HOTELS</Link></button></li>
<li><button><Link to={'/Hospital'}>HOSPITALS</Link></button></li>
<li><button><Link to={'/Commercialproperties'}>COMMERCIALPROPERTIES</Link></button></li>
    </div>
  )
}

export default Category