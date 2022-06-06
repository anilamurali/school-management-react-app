import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'

const Viewfaculty = () => {
    var [viewfaculty,setViewfacultyt]=useState([])
    var [loadstatus,setLoadstatus]=useState(true)
    axios.get("http://localhost:4500/api/viewfaculty").then(
        (response)=>{
            console.log(response.data)
            setViewfacultyt(response.data)
            setLoadstatus(false)
        }
    )
    const deleteFacultyApi=(id)=>{
        var data={"_id":id}
        console.log(id)
        axios.post("http://localhost:4500/api/facultydelete",data).then((response)=>{
            if(response.data.status=="success"){
                alert("Successfully deletd")

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
                                         <th scope="col">NAME</th>
                                         <th scope="col">EDUCATION</th>
                                         <th scope="col">MOBILE</th>
                                         <th scope="col">ADDRESS</th>
                                         <th scope="col">PINCODE</th>
                                         <th scope="col">DISTRICT</th>
                                         <th scope="col">DELETE</th> 
                                         </tr>
                                         </thead>
                                         {loadstatus ?  <div class="spinner-border" role="status">
                  <span class="sr-only">Loading...</span>
                   </div>:
                                         <tbody>
                                                  {
                                                   viewfaculty.map((value,key)=>{
                                                        return <tr>
                                                        <th><p class="card-text">{value.fname}</p></th>
                                                        <td><p class="card-text">{value.education}</p></td>
                                                        <td><p class="card-text">{value.fmobile}</p></td>
                                                        <td><p class="card-text">{value.faddress}</p></td>
                                                        <td><p class="card-text">{value.pincode}</p></td>
                                                        <td><p class="card-text">{value.district}</p></td>
                                                        <td><button onClick={ ()=>{deleteFacultyApi(value._id)}} className='btn btn-danger'>DELETE</button></td>
                                    

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
  )}

export default Viewfaculty