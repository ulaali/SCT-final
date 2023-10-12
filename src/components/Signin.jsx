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
import * as Yup from "yup";
import { Formik, Form } from "formik";

import "./Signin.css";
const validationSchema = Yup.object().shape({
  Name: Yup.string()
    .required("this feild is required")
    .min(2, "too short")
    .max(20, "too long"),
  Password: Yup.string()
    .required("this feild is required")
    .min(6, "too short")
    .max(20, "too long"),
});

export default function FormDialog() {
  const data = useContext(Context);

  return (
    <div>
      <Dialog
        open={data.open}
        onClose={data.handleClose1}
        style={{ height: "700px" }}
      >
        <Formik
          initialValues={{
            Email: "",
            Password: "",
          }}
          onSubmit={(e) => {
            e.preventDefault();
          }}
          validationSchema={validationSchema}
        >
          {({ errors, values, handleChange, touched, onSubmit }) => (
            <Form onSubmit={() => onSubmit}>
              <div className="logo">
                <img src='/assets/logo.png' alt="logo"></img>
              </div>
              <DialogTitle style={{ textAlign: "center" }}>
                Registration
              </DialogTitle>
              <br />
              <DialogContent>
                <label htmlFor="name" style={{fontWeight:'bold'}}>Name:</label>
                <TextField
                  margin="dense"
                  id="name"
                  label="Name"
                  type="text"
                  fullWidth
                  variant="outlined"
                  value={values.Name}
                  onChange={handleChange}
                  error={errors.Name && touched.Name}
                  helperText={errors.Name}
                />
                <label htmlFor="Password" style={{fontWeight:'bold'}}>Password:</label>
                <TextField
                  margin="dense"
                  id="Password"
                  label="Password"
                  type="password"
                  fullWidth
                  variant="outlined"
                  value={values.Password}
                  onChange={handleChange}
                  error={errors.Password && touched.Password}
                  helperText={errors.Password}
                />
              </DialogContent>
              <DialogActions
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  rowGap: "20px",
                }}
              >
                <Button
                  onClick={data.handleClose1}
                  type="submit"
                  variant="contained"
                  style={{ backgroundColor: "#F4683C", width: "30%" }}
                >
                  Sign Up
                </Button>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    rowGap: "20px",
                  }}
                >
                  <DialogContentText>Not A User ?</DialogContentText>
                  <Button
                    variant="standard"
                    onClick={data.signInWithGoogle}
                  >
                    <img
                      src='/assets/google.png'
                      style={{ width: "4%", height: "4%", padding: "10px" }}
                      alt="google"
                    ></img>{" "}
                    Sign In With Google
                  </Button>
                </div>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
}
