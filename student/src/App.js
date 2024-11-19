import logo from './logo.svg';
import './App.css';
import { students } from './data/StudentsDb';

function App() {
  return (
    <div className="App">
      
      <h1>Student Information Portal</h1>
      <hr/>
      <table>
        <tbody>
          <tr>
            <td>
                 <studentTable students={students}/>
            </td>
          </tr>
         </tbody>
        </table>
    </div>
  );
}

export default App;
