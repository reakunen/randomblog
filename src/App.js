import "./App.css";
import { useEffect, useState } from "react";
import AddTask from "./components/Addtask";
import Task from "./components/Task";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import { db } from "./firebase-config";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [bg, setBg] = useState(false)
  useEffect(() => {
    const q = query(collection(db, "data"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let tasksArray = [];
      querySnapshot.forEach((doc) => {
        tasksArray.push({ ...doc.data(), id: doc.id });
      });
      setTasks(tasksArray);
    });
    return () => unsub();
  }, []);
  const setChange = () =>
  {
    setBg(!bg)
    console.log(process.env.REACT_APP_API_KEY)
  }
  const toggleComplete = async (task) => {
    await updateDoc(doc(db, "data", task.id), { completed: !task.completed });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "data", id));
  };
  return (
    <div className={bg && 'bg'}>
      <AddTask />
      <div className="task_container">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
          />
        ))}
        {/* <button className='btn'onClick={setChange}>Click to Change Background</button> */}
      </div>
      <footer>
      <h4 className='aa'>© 2022 Brian Mai, Inc.</h4>
      <p className='next'>Made with React & Firebase</p>

      </footer>
    </div>
  );
};

export default App;