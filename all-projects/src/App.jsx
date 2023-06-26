import React from 'react'

const App = () => {
  const projects = [
    {
      title: 'AD Houses',
    }
  ]
  return (
    <>
      <main className='min-h-screen p-20'>
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
          {projects.map((project) => (
            <div className='border text-offwhite p-4 border-tertiary rounded-md bg-tertiary/30 h-[300px] w-full hover:shadow-md hover:shadow-tertiary transition duration-300 cursor-pointer'>
              <div className='flex flex-col justify-between h-full'>
                <p className='font-title font-bold text-center text-4xl mt-24'>{project.title}</p>
                <div className='flex flex-row w-full gap-2'>
                <a href="" className='w-full bg-tertiary/30 text-center border border-tertiary p-1 rounded-md hover:bg-tertiary transition duration-200'>Demo</a>
                <a href="" className='w-full bg-tertiary/30 text-center border border-tertiary p-1 rounded-md hover:bg-tertiary transition duration-200'>Código</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default App