import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductGrid from './component/ProductGrid'
import billerLogo from './assets/biller-logo1.png';
import Billsection from './component/billsection';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="w-full h-16 bg-orange-300  align-middle flex flex-row items-center">
        <div className="text-white text-xl font-bold w-full justify-center flex items-center">

           <img src={billerLogo} alt="biller-logo" className="max-h-16 max-w-full object-contain shadow-lg  border-4 border-white rounded "  />


         </div>
       {/* <div className="w-[20%] h-full bg-red-500">
               
        </div >
        <div className="w-[20%] h-full bg-gray-500">

        </div>
        <div className="w-[20%] h-full bg-green-500">

        </div> */}
      </header>
      <main className="pt-2 bg-gray-100 w-full min-h-screen margins-0 p-0">
        {/* <ProductGrid /> */}
         <Billsection />
      </main>
      <footer className="w-full h-16 bg-blue-500">

      </footer>
      
      
      </>
  )
}

export default App
