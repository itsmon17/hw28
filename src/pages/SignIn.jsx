import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { signInRequest } from "../store/auth/authThunk";
import { snackbarActions } from "../store/snackbar";
import { MyButton } from "../components/UI/button/Button";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onChangeEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const onChangePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      const data = {
        email,
        password,
      };
      dispatch(signInRequest(data))
        .unwrap()
        .then(() => navigate("/"))
        .catch((error) => console.log(error));

      dispatch(snackbarActions.doSuccess("Successfully "));
    } catch (error) {
      dispatch(snackbarActions.doError("Something went wrong"));
    }
  };
  return (
    <Container>
      <form onSubmit={submitHandler}>
        <div>
          <TextField
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="Gmail"
            variant="outlined"
            value={email}
            onChange={onChangeEmailHandler}
          />
          <TextField
            sx={{ width: "100%" }}
            id="filled-basic"
            label="Password"
            variant="outlined"
            value={password}
            onChange={onChangePasswordHandler}
          />
        </div>

        <MyButton
          type={"submit"}
          variant={"contained"}
          propswidth={"110px"}
          propsheight={"44px"}
          background={"#8A2B06"}
          propsborderradius={"20px"}
          hoverbackgroundcolor={"#7E2A0A"}
        >
          Sign In
        </MyButton>
        <p>
          Want to open a new account ? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </Container>
  );
};

const Container = styled("div")`
  background-color: #fff;
  border-radius: 15px;
  padding: 30px;
  width: 500px;
  margin: 120px auto;
  text-align: center;
  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    input {
      width: 100%;
    }
  }
  button {
    margin: 30px;
  }
  a {
    text-decoration: none;
    color: #000000;
    font-size: 19px;
  }
`;
