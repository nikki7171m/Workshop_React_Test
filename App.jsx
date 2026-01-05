import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentItem from './components/StudentItem'
import NewStudentItem from './components/newStudentItem'

function App() {

  const studentList = [
    {name: "Tom" , surname: "Cruise", age: 29},
    {name: "Remi" , surname: "Kate", age: 41},
    {name: "Tonny" , surname: "Mei", age: 61},
    {name: "Sunny" , surname: "Raiden", age: 27}
  ]

  const [status, setStatus] = useState("Avaiable");

  const clickHandler = () => {
    setStatus("Busy");
  }

  const addStudentHandler = (newStudent) => {
    const newStudentItem = {
      ...newStudent,
      id: Math.random().toString(),
    }
  }


  return (
    <div className='App'>
      <h1>Vite + React</h1>
      <NewStudentItem onAddStident={addStudentHandler}/>
      <StudentItem name={studentList[0].name} surname={studentList[0].surname} age={studentList[0].age}/>
      <StudentItem name={studentList[1].name} surname={studentList[1].surname} age={studentList[1].age}/>
      <StudentItem name={studentList[2].name} surname={studentList[2].surname} age={studentList[2].age}/>
      <StudentItem name={studentList[3].name} surname={studentList[3].surname} age={studentList[3].age}/>

      <h3>Status: {status}</h3>
      <button onClick={clickHandler}>Click me</button>
    </div>
          
  );
}

export default App
