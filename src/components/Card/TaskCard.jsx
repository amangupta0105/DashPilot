import React from "react";

// TaskCard takes a single task object via 'details' prop
const TaskCard = ({ details }) => {
  if (!details) return null;

  const {
    projectName,
    projectType,
    projectNumber,
    priority,
    userAssigned,
    projectStatus,
  } = details;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4 border hover:shadow-lg transition-all">
      {/* Header section */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">{projectName}</h2>
        <span className="text-xs px-2 py-1 rounded-full bg-gray-200 text-gray-600">
          {projectStatus}
        </span>
      </div>

      {/* Info section */}
      <div className="text-sm text-gray-700">
        <p><strong>Type:</strong> {projectType}</p>
        <p><strong>Number:</strong> {projectNumber}</p>
        <p><strong>Priority:</strong> 
          <span className={`ml-1 font-medium ${
            priority === "high"
              ? "text-red-500"
              : priority === "medium"
              ? "text-yellow-500"
              : "text-green-500"
          }`}>
            {priority}
          </span>
        </p>
        <p><strong>Assigned to:</strong> {userAssigned}</p>
      </div>
    </div>
  );
};

export default TaskCard;
