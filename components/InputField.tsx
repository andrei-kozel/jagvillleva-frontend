import {
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { grey, teal } from "@mui/material/colors";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const colorRoot = grey[300];
const colorFocused = teal[300];
const colorHover = teal[100];
const textColor = grey[700];
const inputBackgroundColor = grey[100];

const InputFieldContainer = styled(FormControl)({
  margin: "6px 0",
  width: "100%",
});

const Input = styled(TextField)({
  "& label.Mui-focused": {
    color: colorFocused,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: colorRoot,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: colorRoot,
    },
    "&:hover fieldset": {
      borderColor: colorHover,
    },
    "&.Mui-focused fieldset": {
      borderColor: colorFocused,
    },
  },
  "& .MuiOutlinedInput-input": {
    color: textColor,
  },
  borderRadius: "8px",
  backgroundColor: inputBackgroundColor,
});

interface Props {
  label: string;
  onChange: (value: string) => void;
  value: string;
  type?: string;
  required?: boolean;
}

const InputField: React.FC<Props> = ({
  label,
  onChange,
  value,
  type = "text",
  required = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <InputFieldContainer fullWidth={true}>
      <Input
        id={`component-${label.toLowerCase()}`}
        name={type}
        value={value}
        onChange={handleChange}
        label={label}
        fullWidth={true}
        type={showPassword && type === "password" ? "text" : type}
        required={required}
        InputProps={{
          endAdornment:
            type === "password" ? (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ) : null,
        }}
      />
    </InputFieldContainer>
  );
};

export default InputField;

// TODO Error message handling
/*
 * use this one:
 * error
 * helperText="Incorrect entry."
 */
