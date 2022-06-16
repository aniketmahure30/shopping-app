import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, TextField, makeStyles } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import style from "./signup.module.css";
import { motion } from "framer-motion";
import axios from "../../apis/Axios";
import "animate.css";
import clsx from "clsx";
const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    width: 50,
  },
  formTextFieldName: {
    width: 200,
    // paddingLeft: 15,
    spacing: 5,
    marginTop: 3,
  },
  formTextFieldOther: {
    spacing: 5,
    marginTop: 3,
    width: 420,
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  passwordField: {
    width: 420,
    height: 40,
  },
}));

const Signup = () => {
  const classes = useStyles();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [gender, setGender] = useState("male");
  const [payload, setPayload] = useState({});
  // const navigate = useNavigate()
  const handleSubmit = e => {
    e.preventDefault();
    setPayload({ fname, lname, email, password, gender, role });
    console.log(payload);
    fetchData();
  };

  const fetchData = async () => {
    try {
      await axios.post("/user", payload);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <motion.div className={clsx(style.formCard)}>
      <h1>Create Your Profile</h1>
      <section>
        One profile ID is all you need to access all KART services. You already
        have a profile? <Link to="/login">Find it here </Link>
      </section>
      <form onSubmit={handleSubmit}>
        <Card
          style={{ backgroundColor: "transparent" }}
          elevation={0}
          className={style.formCardContainer}
        >
          <TextField
            className={classes.formTextFieldName}
            size="small"
            label="First Name"
            id="outlined-size-small"
            variant="outlined"
            required
            value={fname}
            onChange={e => {
              setFname(e.target.value);
            }}
          ></TextField>
          <TextField
            className={classes.formTextFieldName}
            size="small"
            label="Last Name"
            id="outlined-size-small"
            variant="outlined"
            required
            value={lname}
            onChange={e => {
              setLname(e.target.value);
            }}
          ></TextField>
        </Card>
        <Card
          elevation={0}
          style={{ backgroundColor: "transparent" }}
          className={style.formCardContainer}
        >
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={gender}
            onChange={e => setGender(e.target.value)}
          >
            <FormControlLabel
              className={style.radioGroup}
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel
              className={style.radioGroup}
              value="male"
              control={<Radio />}
              label="Male"
            />
            <FormControlLabel
              className={style.radioGroup}
              value="other"
              control={<Radio />}
              label="Other"
            />
          </RadioGroup>
        </Card>
        <hr />
        <Card
          elevation={0}
          style={{ backgroundColor: "transparent" }}
          className={style.formCardContainer}
        >
          <TextField
            className={classes.formTextFieldOther}
            size="small"
            label="Email Address"
            id="outlined-size-small email"
            variant="outlined"
            placeholder="exmaple@company.com"
            required
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          ></TextField>
        </Card>
        <Card
          elevation={0}
          style={{ backgroundColor: "transparent" }}
          className={style.formCardContainer}
        >
          <TextField
            className={classes.formTextFieldOther}
            size="small"
            label="Password"
            id="outlined-size-small password"
            variant="outlined"
            required
            value={password}
            type="password"
            onChange={e => {
              setPassword(e.target.value);
            }}
          ></TextField>
        </Card>
        <Card
          elevation={0}
          style={{ backgroundColor: "transparent" }}
          className={style.formCardContainer}
        >
          <TextField
            className={classes.formTextFieldOther}
            size="small"
            label="Role"
            id="outlined-size-small role"
            variant="outlined"
            required
            value={role}
            onChange={e => {
              setRole(e.target.value);
            }}
          ></TextField>
        </Card>
        <hr />
        <Card
          elevation={0}
          style={{ backgroundColor: "transparent" }}
          className={style.formCardContainer}
        >
          <button className={style.bn5}>Let's Shop</button>
        </Card>
      </form>
    </motion.div>
  );
};

export default Signup;
