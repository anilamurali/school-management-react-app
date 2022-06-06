import React, { useState } from 'react'
import axios from 'axios'
import Nav from './Nav'

const Searchstudent = () => {
    var [admno,setAdmno]=useState("")
    var [student,searchData]=useState([{"rollno":"","name":"","standard":"","parentname":"","mobile":"","address":""}])
    const setData=()=>{
        var data={"admno":admno}
        console.log(data)
        axios.post("http://localhost:4500/api/studentsearch",data).then((response)=>{
            console.log(response)
            searchData(response.data)
        })
    
        
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
                {
                    student.map((value,key)=>{
                        return <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label for="" class="form-label"> Roll Number</label>
                        <input type="text" class="form-control" value={value.rollno}/>
                        <label for="" class="form-label"> Name</label>
                        <input type="text" class="form-control" value={value.name}/>
                        <label for="" class="form-label">Class</label>
                        <input type="text" class="form-control" value={value.standard}/>
                        <label for="" class="form-label">Parent Name</label>
                        <input type="text" class="form-control" value={value.parentname}/>
                        <label for="" class="form-label">Mobile</label>
                        <input type="text" class="form-control" value={value.mobile}/>
                        <label for="" class="form-label">address</label>
                        <input type="text" class="form-control" value={value.address}/>
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

export default Searchstudent