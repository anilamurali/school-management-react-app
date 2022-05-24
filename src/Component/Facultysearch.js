import React, { useState } from 'react'

const Facultysearch = () => {
    var [name,setName]=useState("")
    const setData=()=>{
        var data={"name":name}
        console.log(data)
    }
  return (
    <div>
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
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default Facultysearch