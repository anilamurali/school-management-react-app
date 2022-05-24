import React from 'react'

const Viewfaculty = () => {
    var viewfaculty=[
        {
            
            "name":"biji",
            "Eduction":"ma malayalam",
            "mobile":"9961309450",
            "address":"zzz viilla",
            "pincode":"789645",
            "district":"kollam"

        },
        {"name":"ravi",
        "Eduction":"MSc chemestry",
        "mobile":"996190876450",
        "address":"aa viilla",
        "pincode":"789645",
        "district":"kottayam"
    },
    {"name":"unni",
    "Eduction":"MCA",
    "mobile":"9961309450",
    "address":"UU viilla",
    "pincode":"780645",
    "district":"trivandrom"

    }
    ]
  return (
    <div>
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
                                         </tr>
                                         </thead>
                                         <tbody>
                                                  {
                                                   viewfaculty.map((value,key)=>{
                                                        return <tr>
                                                        <th><p class="card-text">{value.name}</p></th>
                                                        <td><p class="card-text">{value.Eduction}</p></td>
                                                        <td><p class="card-text">{value.mobile}</p></td>
                                                        <td><p class="card-text">{value.address}</p></td>
                                                        <td><p class="card-text">{value.pincode}</p></td>
                                                        <td><p class="card-text">{value.district}</p></td>
                                                

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

export default Viewfaculty