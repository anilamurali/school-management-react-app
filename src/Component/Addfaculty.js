import React, { useState } from 'react'

const Addfaculty = () => {
    var [name,setName]=useState("")
    var [edu,setEdu]=useState("")
    var [mobile,setMobile]=useState("")
    var [address,setAddress]=useState("")
    var [pincode,setpincode]=useState("")
    var [district,setDistrict]=useState("")
    const setData=()=>{
        var data={"name":name,"education":edu,"mobile":mobile,"address":address,"pincode":pincode,"district":district}
        console.log(data)
    }
  return (
    <div><div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Education</label>
                    <input onChange={(e)=>{setEdu(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Mobile</label>
                    <input onChange={(e)=>{setMobile(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Address</label>
                    <input onChange={(e)=>{setAddress(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Pincode</label>
                    <input onChange={(e)=>{setpincode(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">District</label>
                    <input onChange={(e)=>{setDistrict(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={setData} class="btn btn-warning">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Addfaculty