import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SidBar from './SidBar'
import Home from './Home'
import { useEffect, useState } from 'react'
import User from './pages/user'



function App() {

  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetchData();
  }, [])

  const fetchData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => setUsers(data))
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <>
      <BrowserRouter>
        <main className='flex '>
          <div className='px-[12px] flex flex-col gap-[6px] py-[12px] bg-[#f7f7f7] h-[100vh] overflow-auto w-[260px] '>
            {
              users.map((user) => (
                <SidBar user = {user.name} />
              ))
            }
          </div>
          <div className='w-full overflow-auto h-[100vh] '>
            <Routes>
              <Route path='/user' element = {<User/>} />
              <Route path='/' element = {<Home/>} />
              <Route path='*' element = {'Wrong Page'}/>
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App