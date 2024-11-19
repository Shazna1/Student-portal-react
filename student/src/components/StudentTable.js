import '../assests/css/compo.css'
export default function StudentTable(props){
    return(
        <div class="outerDiv">
            <div className="leftDiv">
                <table>
                    <thead>
                        <tr>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>course</td>
                            <td>Country</td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    );
}