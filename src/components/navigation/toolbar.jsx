import { Link } from "react-router-dom"


function Toolbar() {
  return (
   <div className="bg-slate-500 py-4">
     <div className=' w-11/12 mx-auto flex justify-between shadow-lg'>
      <div className="flex gap-4">
        <div className="text-4xl font-semibold">
           <Link to='/'>Logo</Link>
           </div> 
        <div> Links</div>
        <Link to={'/about'}> About</Link>
        
      </div>
      <div className="hidden md:flex gap-4">
        
       <button className='w-fit hfit px-6 py-3 text-white  border-gray-50 '> sign in</button>
       <button className="w-fit hfit px-6 py-3  bg-green-500 text-white ">sign up</button>


      </div>
    </div>
   </div>
  )

}

export default Toolbar
