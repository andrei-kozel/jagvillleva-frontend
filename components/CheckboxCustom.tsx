import { styled } from "@mui/material/styles";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import { grey } from "@mui/material/colors";

const checkboxColor = grey[700];

const CssFormControlLabel = styled(FormControlLabel)({
  "& .MuiSvgIcon-root": { fontSize: 24 },
  "& .MuiFormControlLabel-label": { fontSize: "14px", lineHeight: "14px" },
  color: checkboxColor,
});

const CssCheckbox = styled(Checkbox)({
  color: checkboxColor,
});

interface CheckboxCustomProps {
  label: string;
  onChange: (value: boolean) => void;
  fontSize?: number;
  value: boolean;
}

const CheckboxCustom: React.FC<CheckboxCustomProps> = ({
  label,
  onChange,
  value,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <FormGroup>
      <CssFormControlLabel
        control={<CssCheckbox checked={value} onChange={handleChange} />}
        label={label}
      />
    </FormGroup>
  );
};

export default CheckboxCustom;
