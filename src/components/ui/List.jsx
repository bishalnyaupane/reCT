

// eslint-disable-next-line react/prop-types
function List({title,icon,description}) {
  return (
    <div className="flex flex-col  items-center text-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gray-400">
       {icon}
       </div>
        <div className="text-2xl font-semibold">
        {title}
        </div>
       
      <div className="text-xs text-gray-400">
      {description}
      </div>
       
      
    </div>
  )
}

export default List
