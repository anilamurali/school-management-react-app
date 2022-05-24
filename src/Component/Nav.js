import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div> <div><nav class="navbar navbar-expand-lg navbar-dark bg-warning">
    <div class="container-fluid">
      <Link class="navbar-brand" to='/'>HOME</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            
            <Link class="nav-link active" to='/'>ADD STUDENT</Link>
            
          </li>
          
          <li class="nav-item">
            <Link class="nav-link" to='/stsearch'>SEARCHN STUDENT</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to='/stview'>VIEW STUDENT</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to='/addfaculty'>ADD FACULTY</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to='/fsearch'>SEARCHN FACULTY</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to='/facultyview'>VIEW FACULTY</Link>
            
          </li>
          
        </ul>
      </div>
    </div>
  </nav></div></div>
  )
}

export default Nav