import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState} from 'react'


function App() {
  const [showAddTask , setShowAddTask]= useState(false)
  const [tasks,setTasks]= useState([
    {id:1,
     text: 'pjsfpjgj',
     day:'12/18/2000',
     reminder:'true',
    },
    {id:2,
      text: 'haythem bekir',
      day:'12/18/2000',
      reminder:'false',
     },
])
//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random()*10000)+1
  const newTask = {id , ...task}
  setTasks([...tasks, newTask])
}

//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}
const toggleReminder =(id) => {
setTasks(
  tasks.map((task)=>
  task.id === id ? { ...task, reminder:
  !task.reminder}:task
  )
)
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask 
        (!showAddTask)}
        showadd={showAddTask}
        />
     {showAddTask && <AddTask  onAdd={addTask}/>}
      {tasks.length> 0 ? (
      <Tasks tasks={tasks}  onDelete={deleteTask} onToggle={toggleReminder} />
      ) : ('No tasks to Show')
}
    </div>
  );
}


export default App;
