import React, { useState } from 'react'
import { database } from '../firebaseConfig';
import { deleteDoc, doc } from 'firebase/firestore';

const DeleteTodo = () => {
   const [id,setId] = useState(0);
  
   const handleDeleteTodo = async () => {
    try {
      const confirmDelete = window.confirm("Proceed to delete?");
      if (!confirmDelete) return;
      const documentRef = doc(database, "todo", id);
      await deleteDoc(documentRef);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
      <div className='flex flex-col items-center  gap-6 justify-center p-5'>
        <input name="id" type="text" placeholder='Enter id of Todo' className='p-2 border-2' onChange={(e)=>setId(e.target.value)} />
        <button onClick={handleDeleteTodo} className=' p-2 border-2' >Delete Todo</button>
      </div>
  )
}

export default DeleteTodo;
