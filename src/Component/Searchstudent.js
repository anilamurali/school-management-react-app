import React, { useState } from 'react'
import Nav from './Nav'

const Searchstudent = () => {
    var [admno,setAdmno]=useState("")
    const setData=()=>{
        var data={"admno":admno}
        console.log(data)
    }
  return (
    <div>
        <Nav/>
        <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label"> Admission Number</label>
                    <input onChange={(e)=>{setAdmno(e.target.value)}} type="text" class="form-control"/>
                </div>
                
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={setData} class="btn btn-warning">SEARCH</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Searchstudent