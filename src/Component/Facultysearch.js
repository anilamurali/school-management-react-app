import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'

const Facultysearch = () => {
    var [name,setName]=useState("")
    var [facutly,setFaculty]=useState([{"education":"","fmobile":"","faddress":"","pincode":"","district":""}])
    const setData=()=>{
        var data={"fname":name}
        console.log(data)
        axios.post("http://localhost:4500/api/facultysearch",data).then((response)=>{
            console.log(response)
            setFaculty(response.data)
        })
    }
  return (
    <div>
        <Nav/>
        <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-2">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Faculty Name</label>
                    <input placeholder='Enter Faculty name' onChange={(e)=>{setName(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={setData} class="btn btn-warning">SEARCH</button>
                </div>
                {
                    facutly.map((value,key)=>{
                        return <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label for="" class="form-label">Education</label>
                        <input type="text" class="form-control" value={value.education}/>
                        <label for="" class="form-label"> Mobile</label>
                        <input type="text" class="form-control" value={value.fmobile}/>
                        <label for="" class="form-label">Address</label>
                        <input type="text" class="form-control" value={value.faddress}/>
                        <label for="" class="form-label">Pincode</label>
                        <input type="text" class="form-control" value={value.pincode}/>
                        <label for="" class="form-label">District</label>
                        <input type="text" class="form-control" value={value.district}/>
                    
                    </div>
                    
                    })
                }
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default Facultysearch