import '../assests/css/compo.css'
export default function StudentTable(props){
    return(
        <div class="outerDiv">
            <div className="leftDiv">
                <table border>
                    <thead>
                        <tr>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>course</td>
                            <td>Country</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          props.students.map( student=>
                            <tr>
                                <td>{student.firstName} </td>
                                <td>{student.lastName} </td>
                                <td>{student.course} </td>
                                <td>{student.address.country} </td>

                            </tr>

                          )  
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}