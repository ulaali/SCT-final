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
import * as Yup from "yup";
import { Formik, Form } from "formik";
import {auth,provider} from '../firbaseConfig';
import Cookies from "universal-cookie";
import { signInWithPopup,signOut } from "firebase/auth";
// import { createUserWithEmailAndPassword,UserCredential } from "firebase/auth";
const validationSchema = Yup.object().shape({
  Email: Yup.string().email("invalid email").required("this feild is required"),
  Password: Yup.string()
    .required("this feild is required")
    .min(3, "too short")
    .max(20, "too long"),
});


const cookies = new Cookies();

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
          onSubmit={(values) => {
             console.log(values.Email,values.Password);
          }}
          validationSchema={validationSchema}
        >
          {({ errors, values, handleChange, touched }) => (
            <Form>
              <DialogTitle style={{ textAlign: "center" }}>
                Registration
              </DialogTitle>
              <DialogContent>
                <DialogContentText style={{ textAlign: "center" }}>
                  please enter your email address and <br />
                  password here to register
                </DialogContentText>
                <TextField
                  margin="dense"
                  id="Email"
                  label="Email Address"
                  type="email"
                  fullWidth
                  variant="standard"
                  value={values.Email}
                  onChange={handleChange}
                  error={errors.Email && touched.Email}
                  helperText={errors.Email}
                />
                <TextField
                  margin="dense"
                  id="Password"
                  label="Password"
                  type="password"
                  fullWidth
                  variant="standard"
                  value={values.Password}
                  onChange={handleChange}
                  error={errors.Password && touched.Password}
                  helperText={errors.Password}
                />
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={data.handleClose1}
                  type="submit"
                  variant="contained"
                  style={{ backgroundColor: "#F4683C" }}
                >
                  Sign in
                </Button>
                <Button
                  onClick={data.signInWithGoogle}
                  variant="contained"
                  style={{ backgroundColor: "#F4683C" }}
                >
                  Sign in with google
                </Button>
                <Button
                  onClick={data.handleClose1}
                  style={{ color: "#F4683C" }}
                >
                  Cancel
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
}
