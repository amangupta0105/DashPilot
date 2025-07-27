import { useState } from "react"
import TaskContext from "./TaskContext"

const TaskContextProvider = ({children})=>{

    const [taskDetails,setTaskDeatils] = useState([]);


    return(
        <TaskContext.Provider value={[taskDetails,setTaskDeatils]}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContextProvider