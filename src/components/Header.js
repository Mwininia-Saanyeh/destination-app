import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div>

<nav class="navbar navbar-expand-lg navbar-light bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">DESTINATION GUIDE</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor03">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="/home">Home
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/catecory">Category</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
       
      </ul>

      {/* <select name="" id="">
        <option value=""> Add an Entity</option>
        <option value=""><Link to ="/addeatry"> Add Eatery</Link></option> 
        <option value="">Add School</option>
        <option value="">Add Hotel</option>
        <option value=""> Add Commercial</option>
        <option value=""> Add Hospital</option>
      </select> */}

      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle show" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">Dropdown</a>
          <div class="dropdown-menu show collapse navbar-collapse " id="navbarColor01" >
            <ul class="navbar-nav me-auto ">
            <a class="dropdown-item" href="/addeatery">Add Eatery</a>
            <a class="dropdown-item" href="/addschool">Add School</a>
            <a class="dropdown-item" href="/addhotel">Add Hotel</a>
            <a class="dropdown-item" href="/addcommercial">Add Commercial</a>
            <a class="dropdown-item" href="/addhospital">Add Hospital</a>
            
           
            </ul>
          </div>
        </li>
      <form class="d-flex">
        <input class="form-control me-sm-2" type="text" placeholder="Search" />
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>



    </div>
  )
}

export default Header