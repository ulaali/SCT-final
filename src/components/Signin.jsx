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
import google from "../assets/google.png";

const validationSchema = Yup.object().shape({
  Name: Yup.string().required("this feild is required"),
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
          onSubmit={(values) => {
            console.log(values.Email, values.Password);
          }}
          validationSchema={validationSchema}
        >
          {({ errors, values, handleChange, touched }) => (
            <Form>
              <DialogTitle style={{ textAlign: "center" }}>
                Registration
              </DialogTitle>
              <DialogContent>
                {/* <DialogContentText style={{ textAlign: "center" }}>
                  please enter your email address and <br />
                  password here to register
                </DialogContentText> */}
                <TextField
                  margin="dense"
                  id="name"
                  label="Name"
                  type="text"
                  fullWidth
                  variant="standard"
                  value={values.Name}
                  onChange={handleChange}
                  error={errors.Name && touched.Name}
                  helperText={errors.Name}
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
              <DialogActions style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',rowGap:'20px'}}>
                  <Button
                    onClick={data.handleClose1}
                    type="submit"
                    variant="contained"
                    style={{ backgroundColor: "#F4683C" }}
                  >
                    Sign Up
                  </Button>
                  {/* <Button
                    onClick={data.signInWithGoogle}
                    style={{ backgroundColor: "#F4683C",color:'white' }}
                  >
                    Sign in with google
                  </Button> */}
                  {/* <Button
                    onClick={data.handleClose1}
                    
                  >
                    Cancel
                  </Button> */}
                  <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',rowGap:'20px'}}>
                  <DialogContentText>Not A User ?</DialogContentText>
                  <Button variant="standard" onClick={data.signInWithGoogle} ><img src={google} style={{width:'4%',height:'4%'}}></img> Sign In With Google</Button>
                  
                  </div>
                 
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
}
