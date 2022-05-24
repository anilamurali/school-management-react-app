import React from 'react'
import Nav from './Nav'

const Viewstudent = () => {
    var data=[
        {
            "admno":"MZC01",
            "rollno":"1",
            "name":"Anila",
            "class":"10A",
            "pname":"Murali Dharan",
            "mobile":"9961309450",
            "address":"Thadathil veedu",

        },
        {"admno":"MZC02",
        "rollno":"2",
        "name":"Anju",
        "class":"10B",
        "pname":"Ajith kumar",
        "mobile":"9988772241",
        "address":"anju villa",

    },
    {"admno":"MZC03",
        "rollno":"3",
        "name":"Lekshmi",
        "class":"10B",
        "pname":"Sreenivasan",
        "mobile":"9029375213",
        "address":"Lachu villa",

    },
    {"admno":"MZC04",
        "rollno":"4",
        "name":"Anju",
        "class":"10B",
        "pname":"Manoj kumar",
        "mobile":"7812348567",
        "address":"Vani villa",

    }
    ]
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
                                         
                                         </tr>
                                         </thead>
                                         <tbody>
                                                  {
                                                   data.map((value,key)=>{
                                                        return <tr>
                                                        <th><p class="card-text">{value.admno}</p></th>
                                                        <td><p class="card-text">{value.rollno}</p></td>
                                                        <td><p class="card-text">{value.name}</p></td>
                                                        <td><p class="card-text">{value.class}</p></td>
                                                        <td><p class="card-text">{value.pname}</p></td>
                                                        <td><p class="card-text">{value.mobile}</p></td>
                                                        <td><p class="card-text">{value.address}</p></td>

                                                        </tr>
                                                    })}
                                                    </tbody>
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