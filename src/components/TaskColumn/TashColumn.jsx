const TashColumn = ({title,icon,...props}) => {
  return (
    <div>
        <div className="border w-110 h-140">
            <div className="p-4 flex justify-start items-center gap-2">
                {title}
                {icon && <div className="bg-green-500 rounded-3xl p-0.5">{icon}</div>}
            </div>
            </div>
    </div>
  )
}

export default TashColumn