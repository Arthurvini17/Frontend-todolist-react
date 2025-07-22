import './App.css'
import BuscarTasks from './components/BuscarTasks'; './components/BuscarTasks';

function App() {
  return (
    <>
      <div className='bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 w-full'>
        <div className='flex  justify-between p-10'>
          <div className='mt-20'>
            <h1 className='text-white'>Task Manager</h1>
            <p className='text-gray-700'>Organize your work and boost productivity</p>
          </div>
          <div className='mt-20 '>
            <button className='bg-[#2f65ff] text-white p-2'>+ Add Task</button>
          </div>
        </div>

        <div>
          <BuscarTasks />
        </div>
      </div>
    </>
  )
}

export default App
