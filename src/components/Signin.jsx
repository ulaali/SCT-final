import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Context from "../Data";
import { useContext } from "react";
import logo from "../assets/logo.png";

export default function FormDialog() {
  const data = useContext(Context);

  return (
    <div>
      <Dialog
        open={data.open}
        onClose={data.handleClose1}
        style={{ height: "700px" }}
      >
        <img
          src={logo}
          style={{ width: "100px", height: "100px", display:'flex',justifyContent:'center',alignItems:'center'}}
        />
        <DialogTitle style={{ textAlign: "center" }}>Registration</DialogTitle>
        <DialogContent>
          <DialogContentText style={{textAlign:'center'}}>
            please enter your email address and <br/>password here to register
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={data.handleClose1}
            variant="contained"
            style={{ backgroundColor: "#F4683C" }}
          >
            Sign in
          </Button>
          <Button onClick={data.handleClose1} style={{ color: "#F4683C" }}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
