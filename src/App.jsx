import './App.css'
import { Task } from './Components/Task/Task'

function App() {

const task = {
  id: 0,
  description: "Descargar el proyecto",
  isCompleted: true
}

  return (
    <>
      <Task task = {task}/>
     
    </>
  )
}

export default App

// ejemplo de estructura 

// import React from 'react';
// import { TaskProvider } from './context/TaskContext.jsx';
// import TaskList from './components/TaskList.jsx';
// import AddTaskForm from './components/AddTaskForm.jsx';
// import Filter from './components/Filter.jsx';

// const App = () => {
//   return (
//     <TaskProvider>
//       <AddTaskForm />
//       <Filter />
//       <TaskList />
//     </TaskProvider>
//   );
// };

// export default App;

