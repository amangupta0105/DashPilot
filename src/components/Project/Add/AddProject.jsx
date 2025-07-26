import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};

const AddProject = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [type, setType] = React.useState("");
  const [projectNumber,setProjectNumber] = useState(0);

  const [priority, setPriority] = React.useState("");
  const [userAssigned,setUserAssigned] = useState('');

  const handleChange = (event) => {
    setType(event.target.value);
  };
    const handlePriority = (event) => {
    setPriority(event.target.value);
  };    const handleAssigne = (event) => {
    setUserAssigned(event.target.value);
  };
  
  return (
    <div>
      <Button onClick={handleOpen}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-ellipsis-vertical-icon lucide-ellipsis-vertical"
        >
          <circle cx="12" cy="12" r="1" />
          <circle cx="12" cy="5" r="1" />
          <circle cx="12" cy="19" r="1" />
        </svg>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="flex justify-center"
          >
            Add Project
          </Typography>
          {/* <FormLabel>Project Name</FormLabel> */}
          <TextField
            id="projectName"
            label="Project Name"
            variant="outlined"
            className="w-full"
            required
          />
          <InputLabel id="demo-simple-select-label">Project Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            label="Project Type"
            onChange={handleChange}
            className="w-full mb-4"
          >
            <MenuItem value={"billing"}>BILLING</MenuItem>
            <MenuItem value={"accounts"}>ACCOUNTS</MenuItem>
            <MenuItem value={"forms"}>FORMS</MenuItem>
          </Select>

                  <TextField
          disabled
          id="outlined-disabled"
          label="Project Number"
          defaultValue={projectNumber}
          className="w-full"
        />


          <InputLabel id="demo-simple-select-label">Priority</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={priority}
            label="Task Priority"
            onChange={handlePriority}
            className="w-full mb-4"
          >
            <MenuItem value={"severe"}>SEVERE</MenuItem>
            <MenuItem value={"high"}>HIGH</MenuItem>
            <MenuItem value={"medium"}>MEDIUM</MenuItem>
            <MenuItem value={"low"}>LOW</MenuItem>
          </Select>

                    <InputLabel id="demo-simple-select-label">Assignee</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={userAssigned}
            label="Task Priority"
            onChange={handleAssigne}
            className="w-full mb-4"
          >
            <MenuItem value={"aman"}>Aman</MenuItem>
            <MenuItem value={"amit"}>Amit</MenuItem>
            <MenuItem value={"amal"}>Amal</MenuItem>
          </Select>


        </Box>
      </Modal>
    </div>
  );
};

export default AddProject;
