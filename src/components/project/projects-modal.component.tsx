import { useState } from "react";
import { Modal } from "rsuite";
import ProjectList from "./project-list.component";



export default function ProjectsModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return <>
    <div className='underline underline-offset-4 cursor-pointer hover:font-medium' onClick={handleOpen}>
      projects
    </div>
    <Modal overflow={true} open={open} onClose={handleClose}>
      <Modal.Header>
        <Modal.Title>Projects</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ProjectList />
      </Modal.Body>
    </Modal>
  </>
}