import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {

  const [columns, setColumns] = useState({
    todo: {
      name: "todo",
      items: [{
        id: 1,
        content: "go to gym"
      },
      { id: 2, content: "go to market" }
      ]
    },
    inProgress: {
      name: "inProgress",
      items: [
        { id: 1, content: "go to gym" }
      ]
    },
    done: {
      name: "done",
      items: [
        { id: 1, content: "go to gym" }
      ]
    }

  })

  const [newtask, setNewTask] = useState('');
  const [activeColumn, setActiveColumn] = useState("todo");
  const [dragItem, setDragItem] = useState(null);

  const addnewTask = () => {
    if (newtask.trim() === '') return;
    let updatedColumn = { ...columns };
    updatedColumn[activeColumn].items.push({
      id: Date.now().toString(),
      content: newtask,
    })
    setColumns(updatedColumn);
    setNewTask('');
  }

  const removeTask = (columnId, taskId) => {
    let updatedColumn = { ...columns };
    updatedColumn[columnId].items = updatedColumn[columnId].items.filter((item) => item.id !== taskId);
    setColumns(updatedColumn);
  }
  const handleDragStart = (columnId, item) => {
    setDragItem({ columnId, item })
  }

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  const handleDrop = (e, columnId) => {
    e.preventDefault();
    if (!dragItem) return

    const { columnId: sourceColumnId, item } = dragItem;
    if (columnId === sourceColumnId) return;
    let updatedColumn = { ...columns };
    updatedColumn[sourceColumnId].items = updatedColumn[sourceColumnId].items.filter((ele) => ele.id!==item.id);
    updatedColumn[columnId].items.push(item);
    setColumns(updatedColumn);
    setDragItem(null)
  }

  const columnStyle = {
    todo: {
      header: 'bg-blue-400'
    },
    inProgress: {
      header: 'bg-yellow-400'
    },
    done: {
      header: 'bg-green-400'
    },
  }
  return (
    <>
      <div className='w-[100%] min-h-screen bg-zinc-900'>
        <div className='md:w-[40%] min-h-[200px] m-auto w-[90%] flex justify-center items-center flex-col'>
          <h1 className='text-[30px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600 mt-[50px] mb-[50px] '>kandan board</h1>
          <div className='w-[100%] h-[45px] bg-zinc-500 flex justify-center items-center rounded-lg'>
            <input onChange={(e)=>setNewTask(e.target.value)} value={newtask} type="text" placeholder='enter task' className='bg-zinc-500 placeholder:text-white outline-none  text-white w-[80%] h-[45px] rounded-lg px-[10px]' />
            <select name="" id="" onChange={(e) => setActiveColumn(e.target.value)} className='h-[100%] px-[5px] outline-none text-center cursor-pointer text-white text- bg-zinc-500 border-0'>
              {
                Object.keys(columns).map((columnId) => <option className='border-0 hover:bg-zinc-300'>{columns[columnId].name}</option>)
              }
            </select>
            <button onClick={()=>addnewTask()} className='w-[20%] rounded-tr-lg rounded-br-lg h-[100%] bg-amber-600 text-white font-semibold cursor-pointer'>Add</button>
          </div>
          <div className='w-[100%] flex justify-center items-center gap-[3px] mt-[30px] '>

            {
              Object.keys(columns).map((columnId) =><div className='w-[100%] min-h-[200px] flex bg-zinc-800 shadow-lg shadow-zinc-700 flex-col '>
                 <div className={`flex-shrink-0  ${columnId === "todo" ? "bg-blue-400" : ""}
              ${columnId === "inProgress" ? "bg-yellow-400" : ""}
              ${columnId === "done" ? "bg-green-400" : ""}
              
               w-[100%] rounded-md h-[40px]  flex justify-start items-center text-white px-[5px]`}
              //  onDragOver={(e)=>handleDragOver(e)}
              //  onDrop={(e)=>handleDrop(e,columnId)}
               >
                {columnId}
                <span className='px-2 py-0.5 text-sm rounded-full bg-zinc-800 ml-[4px]'>{columns[columnId].items.length}</span>
              </div>
              <div id='card'
               onDragOver={(e)=>handleDragOver(e)}
               onDrop={(e)=>handleDrop(e,columnId)}
               className=' bg-zinc-800 scrollbar-hide  h-[200px] overflow-y-auto flex justify-center items-center gap-[10px] flex-col mt-[15px] p-[10px] '>
                {
                  columns[columnId].items.length===0?(<div className='text-white'> Drop Tasks Here</div>):(columns[columnId].items.map((item)=><div className='border-[1px]  border-zinc-600 bg-zinc-600 flex justify-between w-[100%] text-white px-[10px] py-[6px]  rounded-lg' draggable onDragStart={()=>handleDragStart(columnId,item)}
                  >
                    <span className='text-white z-10'>{item.content}</span>
                    <button className='cursor-pointer' onClick={()=>removeTask(columnId,item.id)}>x</button>
                  </div>))
                }
              </div>
              </div>)

            }
          </div>

        </div>
      </div>
    </>
  )
}

export default App
