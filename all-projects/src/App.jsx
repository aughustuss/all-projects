import React from 'react'
import ProjCrypto from './assets/projcrypto.jpeg';
import ProjBurguer from './assets/projburguer.jpeg';
import ProjCrud from './assets/projcrud.jpeg';
import ProjCasas from './assets/projcasas.jpeg';
import ProjEcommerce from './assets/projecommerce.jpeg';
import ProjBlog from './assets/projblog.jpeg';
import ProjClima from './assets/projclima.jpeg';
import ProjLista from './assets/projlista.jpeg';
import SaeProj from './assets/saeproj.jpeg'

const App = () => {
  const projects = [
    {
      title: "AD's Burguer",
      category: 'Front-end/Back-end',
      demo: 'https://projeto-foods-aughustuss.vercel.app/home',
      code: '',
      image: ProjBurguer,
    },
    {
      title: 'Crud Angular e C#',
      category: 'Back-end',
      demo: 'https://angular-ui-aughustuss.vercel.app/',
      code: '',
      image: ProjCrud,
    },
    {
      title: 'House Ads',
      category: 'Front-end',
      demo: 'https://proj-casas-aughustuss.vercel.app/',
      code: '',
      image: ProjCasas,
    },
    {
      title: 'AD Shop For You',
      category: 'Front-end',
      demo: 'https://proj-ecommerce-aughustuss.vercel.app/',
      code: '',
      image: ProjEcommerce,
    },
    {
      title: 'TechnoAD Blog',
      category: 'Front-end/Back-end',
      demo: 'https://blog-proj-aughustuss.vercel.app/',
      code: '',
      image: ProjBlog,
    },
    {
      title: 'AD Crypto',
      category: 'Front-end',
      demo: 'https://proj-crypto-aughustuss.vercel.app/',
      code: '',
      image: ProjCrypto,
    },
    {
      title: 'ADGet Your Weather',
      category: 'Front-end',
      demo: 'https://proj-clima-aughustuss.vercel.app/',
      code: '',
      image: ProjClima,
    },
    {
      title: 'TodoAD List',
      category: 'Front-end',
      demo: 'https://lista-projeto-aughustuss.vercel.app/',
      code: '',
      image: ProjLista,
    },
    {
      title: 'Sae Proj',
      category: 'Front-end',
      demo: 'https://sae-proj.vercel.app/',
      code: '',
      image: SaeProj
    }
  ]
  return (
    <>
      <main className='min-h-screen font-body flex flex-col gap-4 container px-2 md:px-0 pt-20 pb-6 mx-auto'>
        <div className='flex flex-col gap-y-4'>
          <p className='font-title text-3xl md:text-5xl  font-bold text-start text-offwhite'>PROJETOS</p>
          <p className='font-body text-base md:text-lg text-start text-offwhite font-bold'>Abaixo estão todos os meus projetos já feitos, listado em ordem de conclusão, onde o primeiro foi o último a ser concluído.</p>
        </div>
        <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2'>
          {projects.map((project, index) => (
            <div key={index} className='border text-offwhite p-4 border-tertiary rounded-md bg-tertiary/30 h-[300px] w-full hover:shadow-md hover:shadow-tertiary transition duration-300 cursor-pointer'>
              <div className='flex flex-col justify-between h-full'>
                <p className='font-title font-bold text-center text-2xl md:text-4xl'>{project.title}</p>
                <img src={project.image} alt={project.title} className='h-[130px] w-full rounded-md object-cover' />
                <div className='flex flex-col gap-1 w-full'>
                  <p className='text-xs text-start text-gray-400'>Categoria: {project.category}</p>
                  <div className='flex flex-row w-full gap-2 text-sm'>
                    <a href={project.demo} className='w-full bg-tertiary/30 text-center border border-tertiary p-1 rounded-md hover:bg-tertiary transition duration-200'>Demo</a>
                    <a href="" className='w-full bg-tertiary/30 text-center border border-tertiary p-1 rounded-md hover:bg-tertiary transition duration-200'>Código</a>
                  </div>
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