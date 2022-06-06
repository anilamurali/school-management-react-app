import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'

const Addstudent = () => {
    var [admno,setAdm]=useState("")
    var [rollno,setRoll]=useState("")
    var [name,setName]=useState("")
    var [std,setStd]=useState("")
    var [pname,setPname]=useState("")
    var [mobile,setMobile]=useState("")
    var [address,setAddress]=useState("")
    const setData=()=>{
        var data={"admno":admno,"rollno":rollno,"name":name,"standard":std,"parentname":pname,"mobile":mobile,"address":address}
        console.log(data)
        axios.post("http://localhost:4500/api/addstudent",data).then((response)=>{
            console.log(response.data)
                if(response.data.status=="success"){
                    alert("Successfully Added")
                }
                else{
                    alert("Something went Wrong!")
                }
        })
    }

    return (
    <div>
        <Nav/>
        <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Admission Number</label>
                    <input onChange={(e)=>{setAdm(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Roll Number</label>
                    <input onChange={(e)=>{setRoll(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Class</label>
                    <input onChange={(e)=>{setStd(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Parent Name</label>
                    <input onChange={(e)=>{setPname(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Mobile Number</label>
                    <input onChange={(e)=>{setMobile(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Address</label>
                    <input onChange={(e)=>{setAddress(e.target.value)}} type="text" class="form-control"/>
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

export default Addstudent