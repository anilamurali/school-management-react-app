import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'

const Viewstudent = () => {
    var [viewstudent,setstudent]=useState([])
  var [loadstatus,setLoadstatus]=useState(true)
        axios.get("http://localhost:4500/api/viewstudent").then(
            (response)=>{
                console.log(response.data)
                setstudent(response.data)
                setLoadstatus(false)
    
            }
        )
        const deleteStudentApi=(id)=>{
            var data={"_id":id}
            console.log(data)
            axios.post("http://localhost:4500/api/studentdelete",data).then(
                (response)=>{
                if(response.data.status=="success")
                {
                    alert("Successsfully deleted")
                }
                else{
                    alert("Error in deletion")
                }
            })
        }
  return (
    <div>
        <Nav/>
        <div>
            <div>
                <div class="container">
                    <div class="row ">
                         <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                             <table class="table table-warning table-striped" >
                                 <thead>
                                     <tr>
                                         <th scope="col"> ADMISSION NUMBER</th>
                                         <th scope="col">ROLL NUMBER</th>
                                         <th scope="col">NAME</th>
                                         <th scope="col">CLASS</th>
                                         <th scope="col">PARENT NAME</th>
                                         <th scope="col">MOBILE</th>
                                         <th scope="col">ADDRESS</th>
                                         <th scope="col">DELETE</th>
                                         
                                         </tr>
                                         </thead>
                                         {loadstatus ?  <div class="spinner-border" role="status">
                                                 <span class="sr-only">Loading...</span>
                                                    </div>:
                                         <tbody>
                                                  {
                                                   viewstudent.map((value,key)=>{
                                                        return <tr>
                                                        <th>{value.admno}</th>
                                                        <td>{value.rollno}</td>
                                                        <td>{value.name}</td>
                                                        <td>{value.class}</td>
                                                        <td>{value.parentname}</td>
                                                        <td>{value.mobile}</td>
                                                        <td>{value.address}</td>
                                                        <td><button onClick={ ()=>{deleteStudentApi(value._id)}} className='btn btn-danger'>DELETE</button></td>


                                                        </tr>
                                                    })}
                                                    </tbody>
}
                                                    </table>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                    </div>
  )
}

export default Viewstudent