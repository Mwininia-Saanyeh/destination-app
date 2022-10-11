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


function School() {
  return (
    <div>


<div className='firstrow'>

      
        <div className='card'>
        <h2>NJA College Of Education</h2>
        <img src={NJA} alt =""/>
        </div>
       

        <div className='card'>
        <h2>UBIDS Adminstration</h2>
        <img src={uds} alt =""/>
        </div>

        <div className='card'>
        <h2>Wa Polytechnic</h2>
        <img src={wapoly} alt =""/>
        </div>

        <div className='card'>
        <h2>Nursing Training College Tumu</h2>
        <img src={tumumnursing} alt =""/>
        </div>

        
        </div>
        
        
        <div className='secondrow'>
        <div className='card'>
        <h2>ST Francis Girls Senior High School</h2>
        <img src={stfrancis} alt =""/>
        </div>
       

        <div className='card'>
        <h2>Nandon Senior High School</h2>
        <img src={NandonSnr} alt =""/>
        </div>

        <div className='card'>
        <h2>Wa Secondary Senior High school</h2>
        <img src={wasec} alt =""/>
        </div>


        </div>
        <div className='thirdrow'>
        <div className='card'>
        <h2>Dan Ibu Internationl School</h2>
        <img src={daanibu} alt =""/>
        </div>
       

        <div className='card'>
        <h2>Tender Care International School</h2>
        <img src={tendercare} alt =""/>
        </div>

            
        </div>
    
    </div>

  
  )
}

export default School