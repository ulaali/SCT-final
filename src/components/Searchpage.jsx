import React from 'react'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Context from "../Data";
import { useContext } from "react";
export default function Searchpage() {
    const data = useContext(Context);



  return (
    <div>
        <Dialog
        open={data.opensearch}
        onClose={data.handleClose2}
        style={{ height: "700px" }}
      >
       
        <DialogTitle style={{ textAlign: "center" }}>Search bar here</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Search Results Here
          </DialogContentText>
        </DialogContent>
        
      </Dialog>
    </div>
  )
}
