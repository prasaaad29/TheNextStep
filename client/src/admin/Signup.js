import React, { useState } from "react";
import "./Signup.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // ---------------------------------------------------------------------------------
  const [cvalues, csetValues] = React.useState({
    camount: "",
    cpassword: "",
    cweight: "",
    cweightRange: "",
    cshowPassword: false,
  });

  const chandleChange = (prop) => (event) => {
    csetValues({ ...cvalues, [prop]: event.target.value });
  };

  const chandleClickShowPassword = () => {
    csetValues({
      ...cvalues,
      cshowPassword: !cvalues.cshowPassword,
    });
  };

  const chandleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // ---------------------------------------------------------------------------------

  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const submithandler = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = data;

    const res = await fetch("/admin/admindb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name, email, password, cpassword
      }),
    });

    const stat = res.status;

    console.log(stat);

    if (stat === 422) {
      window.alert("All fields are compulsory to fill !!");
      navigate("/admin/signup");
    }
    if (stat === 421) {
      window.alert("Email already Exists !!!");
      navigate("/admin/signup");
    }
    if (stat === 420) {
      window.alert("Passwords Does not match !!!");
      navigate("/admin/signup");
    }

    if (stat === 201) {
      window.alert("Registration successful !!");
      navigate("/admin/signin");
    }
  };

  return (
    <div>
      <div className="outer col-lg-4 col-11  mx-auto d-flex flex-column justify-content-center align-items-center ">
        <div className="inner col-12 border border-2 border-dark p-3">
          <h4 className="text-center">Signup</h4>
          <form>
            <div className="col-lg-8 col-11 mx-auto input-signup">
              <TextField
                className="col-12 inpt"
                id="outlined-basic"
                label="name"
                variant="outlined"
                value={data.name}
                onChange={(e) =>
                  setData({ ...data, name: e.target.value })
                }
              />
            </div>
            <div className="col-lg-8 col-11 mx-auto input-signup">
              <TextField
                id="outlined-basic"
                className="col-12 inpt"
                label="Email"
                variant="outlined"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>

            <div className="col-lg-8 col-11 mx-auto input-signup">
              <FormControl
                variant="outlined"
                className="col-12 inpt"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Create Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </div>


            <div className="col-lg-8 col-11 mx-auto input-signup">
              <FormControl
                variant="outlined"
                className="col-12 inpt"
                value={data.cpassword}
                onChange={(e) => setData({ ...data, cpassword: e.target.value })}
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Confirm Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={cvalues.cshowPassword ? "text" : "cpassword"}
                  value={cvalues.cpassword}
                  onChange={chandleChange("cpassword")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={chandleClickShowPassword}
                        onMouseDown={chandleMouseDownPassword}
                        edge="end"
                      >
                        {cvalues.cshowPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Cpassword"
                />
              </FormControl>
            </div>

            <div className="col-lg-8 col-11 input-signup mx-auto">
              <Button
                className="col-12 btnsplash py-3"
                variant="outlined"
                onClick={submithandler}
              >
                Submit
              </Button>
            </div>
          </form>

          <p className="text-center mt-4">
            Have an account ?<a href="/admin/signin"> Signin</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
