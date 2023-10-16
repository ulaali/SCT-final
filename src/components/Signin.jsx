import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Context from "../Data";
import { useContext } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import Input from '@mui/material/Input';
import "./Signin.css";
import { TextField } from "@mui/material";



const ariaLabel = { 'aria-label': 'description' };

const validationSchema = Yup.object().shape({
  Name: Yup.string().required("this feild is required").min(2, "too short").max(20, "too long"),
  Password: Yup.string().required("this feild is required").min(6, "too short").max(20, "too long"),
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
            Name: "",
            Password: "",
          }}
          
          onSubmit={values => {
            console.log(values);
            data.handleClose1()
          }}
          validationSchema={validationSchema}

        >
          {({ errors, values, handleChange, touched }) => (
            <Form >
              <div className="logo">
                <img src='/assets/logo.png' alt="logo"></img>
              </div>
              <DialogTitle style={{ textAlign: "center" }}>
                Registration
              </DialogTitle>
              <br />
              <DialogContent className="inputs">
                <label htmlFor="name" style={{fontWeight:'bold'}}>Name:</label>
                <Input
                  name="Name"
                  margin="dense"
                  id="Name"
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
                <Input
                name="Password"
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
                className="Button"
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
                  className="Button"
                    variant="standard"
                    onClick={data.signInWithGoogle}
                  >
                    <img
                      src='/assets/google.png'
                      className="google"
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
