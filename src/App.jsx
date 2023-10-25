import Dashboard from "./Components/Dashboard";
import { AiFillGithub } from "react-icons/ai";

function App() {
  return (
    <div className='flex flex-col h-screen w-screen'>
      <header className='font-medieval w-full text-center pt-4 md:text-4xl text-2xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)] flex items-center justify-center'>
        A Song of Ice and Fire
      </header>
      <main className='flex justify-center items-center h-full flex-col overflow-hidden'>
        <img
          src='https://i.imgur.com/PrcgZGx.jpeg'
          alt='bg-image'
          className='object-cover absolute inset-0 z-[-1] h-screen w-screen'
        />
        <Dashboard />
      </main>
      <footer className='w-full pb-4 font-medieval md:text-xl flex justify-center items-center gap-2'>
        <span>
          Made by{"  "}
          <a
            href='https://dolan.dev'
            target='_blank'
            className='text-stone-800 underline'
          >
            Dolan Reynolds
          </a>
        </span>
        <a href='https://github.com/dolanR' target='_blank' className='h-6 w-6'>
          <AiFillGithub className='w-full h-full' />
        </a>
      </footer>
    </div>
  );
}

export default App;
