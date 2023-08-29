import React, { useState, useEffect } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';

function ToDoList() {
  const [todoItem, setTodoItem] = useState('');
  const [todos, setTodos] = useState([]);
  const [deleteIndex, setDeleteIndex] = useState(null);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(()=>{
    setTimeout(() => {
      console.log(todos)
     localStorage.setItem('todos', JSON.stringify(todos));
      
    }, 1000);

  },[todos])

  const handleAdd = () => {
    console.log(todoItem)
    if (todoItem.trim() !== '') {
      const newTodos = [...todos]
      newTodos.push(todoItem)
      setTodos(newTodos);
      setTodoItem('');
    }
  };

  const handleDelete = () => {
    const newTodos = todos.filter((_, index) => index !== deleteIndex);
    setTodos(newTodos);
    setDeleteIndex(null);
  };

  return (
    <section >
    <img
        className=" fixed bottom-0  scale-y-[-1] right-0 z-[-1] w-full drop-shadow-xl "
        src="/assets/wave.svg"
        alt=""
      />
      
    <h1 className='m-auto bg-main dark:bg-slate-700  w-80 mt-20 text-2xl rounded p-2 text-center dark:text-white'>To Do</h1>


      <div className='flex flex-col bg-white text-main dark:bg-slate-700 dark:text-white justify-start items-center w-[90%] md:w-[800px] min-h-[400px] h-fit mt-[200px] rounded-2xl drop-shadow-2xl m-auto'>


        <div className="input w-[90%] flex md:w-[600px] m-auto mt-10 justify-between bg-slate-200 dark:bg-slate-500 rounded-[45px]">
          <input
            type="text"
            className="w-[70%] md:w-[400px] bg-transparent outline-none ml-3"
            value={todoItem}
            onChange={(e) => setTodoItem(e.target.value)}
          />
          <button
            className="w-[30%] bg-main text-white p-3 rounded-[45px]"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>

        <ul className="mt-5 mb-20 w-[80%] md:w-[600px]">
          {todos.map((task, index) => (
            <li
              key={index}
              className="flex items-center justify-between m-5 p-3  bg-slate-300 dark:bg-gray-200 dark:text-black rounded-xl "
            >
              {task}
              <button
                className="text-red-500"
                onClick={() => setDeleteIndex(index)}
              >
                <IoMdCloseCircle size={22} />
              </button>
            </li>
          ))}
        </ul>

        {deleteIndex !== null && (
          <div >
            <p>هل أنت متأكد من أنك تريد حذف هذه المهمة؟</p>
            <div className='flex justify-around p-5'>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded-md mx-1"
                onClick={handleDelete}
              >
                نعم
              </button>
              <button
                className="bg-gray-500 text-white px-2 py-1 rounded-md mx-1"
                onClick={() => setDeleteIndex(null)}
              >
                لا
              </button>
            </div>
          </div>
        )}
      </div>


    </section>
  );
}

export default ToDoList;
