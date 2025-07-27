import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TaskContext from "../../../context/TaskContext";

// Modal box styling
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const AddProject = () => {
  // Modal open/close state
  const [open, setOpen] = useState(false);

  //context
  const[taskDetails,setTaskDeatils] = useContext(TaskContext);

  // Form field states
  const [projectType, setProjectType] = useState("");
  const [projectNumber, setProjectNumber] = useState(1);
  const [projectName, setProjectName] = useState("");
  const [priority, setPriority] = useState("");
  const [userAssigned, setUserAssigned] = useState("");

  // To store submitted data if needed later
  const [projectData, setProjectData] = useState(null);

  // Modal open/close handlers
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Form field change handlers
  const handleChangeType = (event) => setProjectType(event.target.value);
  const handlePriorityChange = (event) => setPriority(event.target.value);
  const handleAssigneeChange = (event) => setUserAssigned(event.target.value);
  const handleProjectNameChange = (event) => setProjectName(event.target.value);

  // Form submit handler
  const handleSubmit = () => {
    const data = {
      projectName,
      projectType,
      projectNumber,
      priority,
      userAssigned,
      projectStatus:"IN PROGRESS"
    };

    setTaskDeatils([...taskDetails,data]); // Save data
    setProjectNumber((prev) => prev + 1); // Auto-increment number
    setProjectName("");
    setProjectType("");
    setPriority("");
    setUserAssigned("");
    handleClose(); // Close modal
    console.log("Submitted project:", data);
  };

  return (
    <div>
      {/* Button to open modal */}
      <Button onClick={handleOpen}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-ellipsis-vertical"
        >
          <circle cx="12" cy="12" r="1" />
          <circle cx="12" cy="5" r="1" />
          <circle cx="12" cy="19" r="1" />
        </svg>
      </Button>

      {/* Modal for Add Project */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>

          {/* Top-right close button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "grey.600",
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Modal heading */}
          <Typography
            id="modal-title"
            variant="h6"
            component="h2"
            className="text-center mb-4"
          >
            Add Project
          </Typography>

          {/* Form starts here */}
          <form>

            {/* Project Name */}
            <TextField
              id="projectName"
              label="Project Name"
              variant="outlined"
              fullWidth
              className="mb-4"
              required
              value={projectName}
              onChange={handleProjectNameChange}
            />

            {/* Project Type */}
            <InputLabel id="project-type-label">Project Type</InputLabel>
            <Select
              labelId="project-type-label"
              id="project-type"
              value={projectType}
              onChange={handleChangeType}
              fullWidth
              className="mb-4"
              required
            >
              <MenuItem value="billing">Billing</MenuItem>
              <MenuItem value="accounts">Accounts</MenuItem>
              <MenuItem value="forms">Forms</MenuItem>
            </Select>

            {/* Project Number (auto-generated) */}
            <TextField
              disabled
              id="projectNumber"
              label="Project Number"
              value={projectNumber}
              fullWidth
              className="mb-4"
            />

            {/* Priority */}
            <InputLabel id="priority-label">Priority</InputLabel>
            <Select
              labelId="priority-label"
              id="priority"
              value={priority}
              onChange={handlePriorityChange}
              fullWidth
              className="mb-4"
              required
            >
              <MenuItem value="severe">Severe</MenuItem>
              <MenuItem value="high">High</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="low">Low</MenuItem>
            </Select>

            {/* Assignee */}
            <InputLabel id="assignee-label">Assignee</InputLabel>
            <Select
              labelId="assignee-label"
              id="assignee"
              value={userAssigned}
              onChange={handleAssigneeChange}
              fullWidth
              className="mb-4"
              required
            >
              <MenuItem value="aman">Aman</MenuItem>
              <MenuItem value="amit">Amit</MenuItem>
              <MenuItem value="amal">Amal</MenuItem>
            </Select>

            {/* Submit button - disabled unless all fields are filled */}
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={!projectName || !projectType || !priority || !userAssigned}
              fullWidth
            >
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default AddProject;
