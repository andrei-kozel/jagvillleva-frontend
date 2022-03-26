import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { CssBaseline, Divider, Link, Typography } from "@mui/material";
import { teal, grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import InputField from "../../components/InputField";
import ButtonCustom from "../../components/ButtonCustom";
import CheckboxCustom from "../../components/CheckboxCustom";

const backgroundColor = teal[50];
const borderColor = teal[100];
const textDark = teal[500];
const textGrey = grey[500];

const Background = styled("div")({
  backgroundColor: `${backgroundColor}`,
  minHeight: "100vh",
  minWidth: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const LoginBox = styled(Box)({
  maxWidth: "400px",
  backgroundColor: "white",
  padding: "25px",
  borderRadius: "8px",
  border: `1px solid ${borderColor}`,
  text: "center",
  margin: "16px",
});

const CheckboxContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "25px",
});

const Title = styled(Typography)({
  textAlign: "center",
  color: `${textDark}`,
  marginTop: "57px",
});

const Credentials = styled(Typography)({
  textAlign: "center",
  color: `${textGrey}`,
  marginTop: "16px",
  marginBottom: "69px",
});

const CssDevider = styled(Divider)({
  margin: "20px 0",
});

const LinkContainerCentered = styled(Box)({
  textAlign: "center",
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (errors.length > 0) {
      setErrors([...errors]);
    } else {
      console.log("Login", { email, password, rememberMe });
      resetForm();
    }
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setErrors([]);
  };

  return (
    <>
      <CssBaseline />
      <Background>
        <LoginBox>
          <Title variant="h5">Woof, welcome!</Title>
          <Credentials>Enter your credentials to continue</Credentials>
          <InputField
            label="Email"
            onChange={(value) => setEmail(value)}
            value={email}
            type="email"
            required
          />
          <InputField
            label="Password"
            onChange={(value) => setPassword(value)}
            value={password}
            type="password"
            required
          />
          <CheckboxContainer>
            <CheckboxCustom
              label="Remeber me"
              value={rememberMe}
              onChange={(value) => setRememberMe(value)}
            />
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </CheckboxContainer>
          <ButtonCustom
            variant="contained"
            fullWidth={true}
            onClick={handleLogin}
          >
            Login
          </ButtonCustom>
          <CssDevider light />
          <LinkContainerCentered>
            <Link
              href="mailto:example@yahoo.com?subject=Account Registration Request&body=Your name:%0D%0AYour email:"
              variant="body2"
              align="center"
            >
              Don&apos;t have an account?
            </Link>
          </LinkContainerCentered>
        </LoginBox>
      </Background>
    </>
  );
};

export default Login;
