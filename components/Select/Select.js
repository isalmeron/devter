import React from "react";
import { MenuItem, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

const SelectTextField = styled(TextField)((props) => ({
  "& .MuiInputBase-root": {
    minWidth: "20rem",
    fontFamily: "Montserrat",
    fontSize: "1rem",
    lineHeight: "1.2rem",
    letterSpacing: "normal",
    color: "inherit",
    borderRadius: "8px",

    "& .MuiInputBase-input": {
      borderRadius: "8px",
      position: "relative",
      backgroundColor: "#FFF",
      border: "1px solid #0000003b",
      fontSize: "1rem",
      lineHeight: "1.2rem",
      padding: "0.8rem",
      fontFamily: "Montserrat",
      minHeight: "fit-content",

      "&:focus": {
        borderRadius: "8px",
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },

    "&.Mui-error": {
      boxShadow: "0 0 3px 1px rgba(214, 0, 0, 0.3)",
    },
  },

  "& fieldset": {
    borderRadius: "8px",
    border: "none",
  },
}));

const SelectInput = ({
  name,
  options,
  required = false,
  defaultValue,
  control,
}) => {
  return (
    <Controller
      render={({ field, fieldState: { error } }) => (
        <SelectTextField {...field} error={!!error} select>
          {options.map((option) => (
            <MenuItem key={`option-${option.value}`} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </SelectTextField>
      )}
      rules={{ required }}
      name={name}
      control={control}
      defaultValue={defaultValue}
    ></Controller>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
  required: PropTypes.bool,
  defaultValue: PropTypes.string,
  control: PropTypes.object,
};

export default SelectInput;
