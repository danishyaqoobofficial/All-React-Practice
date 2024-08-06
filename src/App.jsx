import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => setMyData(res.data))
      .catch((error) => {console.log(error);})
      .finally(() => {
        
      })
    }, []);

  return (
    <>
      <div className='max-w-[900px] mx-auto py-[32px]'>
      {myData.map((post) => {
        return (
          <div className='mt-[22px] border rounded-[5px] p-[22px] '>
            <h2 className='text-[15px] text-center '>{post.title}</h2>
            <p className='text-[12px] text-center mt-[7px] '>{post.body}</p>
          </div>
        );
      })}
    </div>
    <section className='h-[100vh] w-full flex items-center justify-center bg-[#f1f0ee]'>
      <div className='flex rounded-[12px] overflow-hidden max-w-[900px]'>
        <div className='flex-1'>

        </div>
        <div
          className='bg-cover bg-no-repeat bg-center h-[500px] flex-1'
          style={{ backgroundImage: 'url(https://ayazakramawan.com/wp-content/uploads/2022/12/Untitled-design-46.png)' }}>

        </div>
      </div>
    </section>
    </>
  );
}

export default App;