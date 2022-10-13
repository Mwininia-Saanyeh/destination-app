import React from 'react';
import NJA from '../utils/NJA.jpg';
import  uds from '../utils/uds.jpg';
import wapoly from '../utils/wapoly.jpg';
import tumumnursing from '../utils/tumunursing.jpg';
import stfrancis from '../utils/stfrancis.jpg';
import NandonSnr from '../utils/NandonSnr.png';
import wasec from '../utils/wasec.jpg'
import daanibu from '../utils/daanibu.jpg';
import tendercare from '../utils/tendercare.jpg';
import Category from '../screens/Category';


function School() {
  return (
    <div>


<div className='firstrow'>

      
        <div className='card'>
        <h2>NJA College Of Education</h2>
        <img src={NJA} alt =""/>
        <h3>Location : Tampaalipaani</h3>
       <h3>GPS : XW-0003-2345</h3>
        </div>
       

        <div className='card'>
        <h2>UBIDS Adminstration</h2>
        <img src={uds} alt =""/>
        <h3>Location : Kunfaabiela</h3>
       <h3>GPS : XW-0003-2345</h3>
        </div>

        <div className='card'>
        <h2>Wa Polytechnic</h2>
        <img src={wapoly} alt =""/>
        <h3>Location : Kpaguri</h3>
       <h3>GPS : XW-0003-2345</h3>
        </div>

        <div className='card'>
        <h2>Nursing Training College Tumu</h2>
        <img src={tumumnursing} alt =""/>
        <h3>Location : Tumu</h3>
        <h3>GPS : XW-0003-2345</h3>
        </div>

        
        </div>
        
        
        <div className='secondrow'>
        <div className='card'>
        <h2>ST Francis Girls Senior High School</h2>
        <img src={stfrancis} alt =""/>
        <h3>Location : Jirapa</h3>
        <h3>GPS : XW-0003-2345</h3>
        </div>
       

        <div className='card'>
        <h2>St Micheals Senior High School</h2>
        <img src={NandonSnr} alt =""/>
        <h3>Location : Nandom</h3>
        <h3>GPS : XW-0003-2345</h3>
        </div>

        <div className='card'>
        <h2>Wa Secondary Senior High school</h2>
        <img src={wasec} alt =""/>
        <h3>Location : Konta</h3>
       <h3>GPS : XW-0003-2345</h3>
        </div>


        </div>
        <div className='thirdrow'>
        <div className='card'>
        <h2>Dan Ibu Internationl School</h2>
        <img src={daanibu} alt =""/>
        <h3>Location : Kpaguri
        </h3>
<h3>GPS : XW-0003-2345</h3>
        </div>
       

        <div className='card'>
        <h2>Tender Care International School</h2>
        <img src={tendercare} alt =""/>
        <h3>Location : Konta</h3>
<h3>GPS : XW-0003-2345</h3>
        </div>

            
        </div>
    
    </div>

  
  )
}

export default School