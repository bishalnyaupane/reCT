

function Toolbar() {
  return (
   <div className="bg-slate-500 py-4">
     <div className=' w-11/12 mx-auto flex justify-between shadow-lg'>
      <div>
        logo and link 
      </div>
      <div className="flex gap-6">
       <button className='w-fit hfit bg-green-500 text-white px-6 py-3'> sign in</button>
       <button className="w-fit hfit bg-green-500 text-white px-6 py-3">sign up</button>
      </div>
    </div>
   </div>
  )
}

export default Toolbar
