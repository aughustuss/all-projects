import React from 'react'
import ProjCrypto from './assets/projcrypto.jpeg';
import ProjBurguer from './assets/projburguer.jpeg';
import ProjCrud from './assets/projcrud.jpeg';
import ProjCasas from './assets/projcasas.jpeg';
import ProjEcommerce from './assets/projecommerce.jpeg';
import ProjBlog from './assets/projblog.jpeg';
import ProjClima from './assets/projclima.jpeg';
import ProjLista from './assets/projlista.jpeg';
import ProjBMS from './assets/projBMS.jpg'
import SaeProj from './assets/saeproj.jpeg'
import { IoMdArrowRoundBack } from 'react-icons/io'
const App = () => {
  const projects = [
    {
      title: "BookAD Management System",
      category: 'Front-end/Back-end',
      demo: 'https://projeto-livraria-ten.vercel.app/home',
      code: 'https://github.com/aughustuss/projeto-livraria',
      codeback: 'https://github.com/aughustuss/LibraryAPI',
      image: ProjBMS
    },
    {
      title: "AD's Burguer",
      category: 'Front-end/Back-end',
      demo: 'https://projeto-foods-aughustuss.vercel.app/home',
      code: 'https://github.com/aughustuss/proj-foods',
      codeback: 'https://github.com/aughustuss/UserAuth',
      image: ProjBurguer,
    },
    {
      title: 'Crud Angular e C#',
      category: 'Back-end',
      demo: 'https://angular-ui-aughustuss.vercel.app/',
      code: 'https://github.com/aughustuss/angular-and-csharp',
      codeback: 'https://github.com/aughustuss/CrudAngular-api',
      image: ProjCrud,
    },
    {
      title: 'House Ads',
      category: 'Front-end',
      demo: 'https://proj-casas-aughustuss.vercel.app/',
      code: 'https://github.com/aughustuss/proj-casas',
      image: ProjCasas,
    },
    {
      title: 'AD Shop For You',
      category: 'Front-end',
      demo: 'https://proj-ecommerce-aughustuss.vercel.app/',
      code: 'https://github.com/aughustuss/projeto-ecommerce',
      image: ProjEcommerce,
    },
    {
      title: 'TechnoAD Blog',
      category: 'Front-end/Back-end',
      demo: 'https://blog-proj-aughustuss.vercel.app/',
      code: 'https://github.com/aughustuss/blog-projeto',
      image: ProjBlog,
    },
    {
      title: 'AD Crypto',
      category: 'Front-end',
      demo: 'https://proj-crypto-aughustuss.vercel.app/',
      code: 'https://github.com/aughustuss/projeto-crypto',
      image: ProjCrypto,
    },
    {
      title: 'ADGet Your Weather',
      category: 'Front-end',
      demo: 'https://proj-clima-aughustuss.vercel.app/',
      code: 'https://github.com/aughustuss/clima-projeto',
      image: ProjClima,
    },
    {
      title: 'TodoAD List',
      category: 'Front-end',
      demo: 'https://lista-projeto-aughustuss.vercel.app/',
      code: 'https://github.com/aughustuss/lista-projeto',
      image: ProjLista,
    },
    {
      title: 'Sae Proj',
      category: 'Front-end',
      demo: 'https://sae-proj.vercel.app/',
      code: 'https://github.com/aughustuss/sae-proj',
      image: SaeProj
    }
  ]
  return (
    <>
      <main className='min-h-screen font-body flex flex-col gap-4 container px-2 md:px-0 pt-20 pb-6 mx-auto'>
        <div className='flex flex-col gap-y-4'>
          <p className='font-title text-3xl  font-bold text-start text-offwhite'>PROJETOS</p>
          <p className='font-body text-sm md:text-base text-start text-offwhite font-bold'>Abaixo estão todos os meus projetos já feitos, listado em ordem de conclusão, onde o primeiro foi o último a ser concluído.</p>
        </div>
        <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1'>
          {projects.map((project, index) => (
            <div key={index} className='shadow-md text-offwhite p-3 rounded-md bg-primary border border-tertiary min-h-[380px] max-h-fit w-full hover:shadow-md hover:shadow-tertiary transition duration-300 cursor-pointer'>
              <div className='flex flex-col justify-between h-full'>
                <p className='font-title font-bold text-center text-xl '>{project.title}</p>
                <img src={project.image} alt={project.title} className='h-[130px] w-full rounded-md object-cover' />
                <div className='flex flex-col gap-2 w-full'>
                  <p className='text-xs text-start text-gray-400'>Categoria: {project.category}</p>
                  <div className='flex flex-row w-full gap-2 text-sm'>
                    <a target='_blank' href={project.demo} className='w-full bg-tertiary/40 text-center border border-tertiary p-[6px] rounded-md hover:bg-tertiary transition duration-200'>Demo</a>
                    <a target='_blank' href={project.code} className='w-full bg-tertiary/40 text-center border border-tertiary p-[6px] rounded-md hover:bg-tertiary transition duration-200'>Código</a>
                  </div>
                  {project.codeback && (
                    <a target='_blank' href={project.codeback} className='w-full bg-tertiary/40 text-center border border-tertiary p-[6px] rounded-md hover:bg-tertiary transition duration-200 text-sm'>Código Back</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='w-full justify-center pt-10 flex flex-row items-center text-offwhite text-sm'>
          <a href="https://augustodpm.dev.br/" className='flex flex-row items-center group justify-between '><IoMdArrowRoundBack className='opacity-0 group-hover:opacity-100 translate-x-10 group-hover:-translate-x-4 transition-all duration-300' />Voltar ao portfólio</a>
        </div>
      </main>
    </>
  )
}

export default App