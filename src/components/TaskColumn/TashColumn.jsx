import { useContext } from "react";
import TaskContext from "../../context/TaskContext";
import TaskCard from "../Card/TaskCard";

const TashColumn = ({ title, icon }) => {
  // Get task details from context
  const [taskDetails, setTaskDeatils] = useContext(TaskContext);

  // Find the first task that matches the column title
 const tasks = taskDetails.filter((item) => item.projectStatus === title);
 console.log(tasks);

  return (
    <div>
      {/* Outer container with fixed width and height */}
      <div className="border w-[28rem] h-[35rem] rounded-lg shadow-sm bg-white">
        {/* Column title and icon */}
        <div className="p-4 flex justify-start items-center gap-2 font-semibold text-lg">
          {title}
          {icon && (
            <div className="bg-green-500 text-white rounded-full p-1">
              {icon}
            </div>
          )}
        </div>

        {/* Task card(s) section */}
<div className="px-4">
  {tasks.length > 0 ? (
    tasks.map((task) => (
      <TaskCard key={task.projectName} details={task} />
    ))
  ) : (
    <p className="text-gray-500 text-sm italic">No tasks in this section.</p>
  )}
</div>

      </div>
    </div>
  );
};

export default TashColumn;
