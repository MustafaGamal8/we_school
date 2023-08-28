import React, { useState, useEffect } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';

function ToDoList() {
    const [todoItem, setTodoItem] = useState('');
    const [tasks, setTasks] = useState([]);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [taskToDelete, setTaskToDelete] = useState(null);

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);
    
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleAdd = () => {
        if (todoItem.trim() !== '') {
            setTasks(prevTasks => [...prevTasks, todoItem]);
            setTodoItem('');
        }
    };

    const handleDelete = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
        setShowDeleteConfirmation(false);
        setTaskToDelete(null);
    };

    return (
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

            <ul className="mt-5 mb-52 w-[80%] md:w-[600px]">
                {tasks.map((task, index) => (
                    <li
                        key={index}
                        className="flex items-center justify-between m-5 p-3  bg-slate-300 dark:bg-gray-200 dark:text-black    rounded-xl "
                    >
                        {task}
                        <button
                            className="text-red-500"
                            onClick={() => {
                                setShowDeleteConfirmation(true);
                                setTaskToDelete(index);
                            }}
                        >
                            <IoMdCloseCircle size={22} />
                        </button>
                    </li>
                ))}
            </ul>
            
            {showDeleteConfirmation && (
                <div className="mt-2">
                    <p>هل أنت متأكد من أنك تريد حذف هذه المهمة؟</p>
                    <div className='flex justify-around p-5'>
                    <button
                        className="bg-red-500 text-white px-2 py-1 rounded-md mx-1"
                        onClick={() => handleDelete(taskToDelete)}
                    >
                        نعم
                    </button>
                    <button
                        className="bg-gray-500 text-white px-2 py-1 rounded-md mx-1"
                        onClick={() => setShowDeleteConfirmation(false)}
                    >
                        لا
                    </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ToDoList;
