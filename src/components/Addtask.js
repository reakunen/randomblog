import { async } from '@firebase/util'
import React from 'react'
import {useState} from 'react'
import {db} from "../firebase-config"
import {collection, addDoc} from "firebase/firestore"
const Addtask = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const setChange = (e) => {
        setTitle(e.target.value)
    }
    const setChange2 = (e) => {
        setContent(e.target.value)
    }
    const handleSubmit = async (e) => {
        if (title === "" || content === "") 
        {
            console.log("empty!")
            return
        }
        console.log(e)
        e.preventDefault()
        await addDoc(collection(db, 'data'), {
            title: title,
            createdAt: new Date(),
            completed: false, 
            content: content  
        })
        setTitle("")
        setContent("")
    }
  return (
      <>
    <form onSubmit={handleSubmit}>
        
        <h1 className='c'>Add Task </h1>
        <p className='a'>Write what you feel, it will be saved.</p>
        <input type="text" placeholder="Name" value={title} onChange={setChange}/>
        <input type="text" placeholder="Enter content" value={content} 
        onChange={setChange2}/>

        <div className="container">
            <button onClick={handleSubmit}>Submit</button>
        </div>
    </form>
    </>
  )
}

export default Addtask

// import { getDatabase, ref, set } from "firebase/database";

// function writeUserData(userId, name, email, imageUrl) {
//   const db = getDatabase();
//   set(ref(db, 'users/' + userId), {
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   });
// }