import { Button, styled } from "@mui/material";
import React from "react";

export const MyButton = ({
  variant,
  hoverbackgroundcolor,
  disabled,
  activebackgroundcolor,
  defaultcolor,
  disabledcolor,
  background,
  border,
  children,
  outlinedhoverandactivetextcolor,
  type,
  propsborderradius,
  ...rest
}) => {
  return (
    <StyleButton
      variant={variant}
      background={background}
      disabled={disabled}
      hoverbackgroundcolor={hoverbackgroundcolor}
      activebackgroundcolor={activebackgroundcolor}
      defaultcolor={defaultcolor}
      disabledcolor={disabledcolor}
      outlinedhoverandactivetextcolor={outlinedhoverandactivetextcolor}
      propsborderradius={propsborderradius}
      type={type}
      {...rest}
    >
      {children}
    </StyleButton>
  );
};

const StyleButton = styled(Button)(
  ({
    variant,
    defaultcolor,
    fontsize,
    hoverbackgroundcolor,
    activebackgroundcolor,
    disabledcolor,
    background,
    border,
    outlinedbordercolor,
    propswidth,
    propsheight,
    outlinedhoverandactivetextcolor,
    propsborderradius,
  }) => {
    switch (variant) {
      case "contained":
        return {
          width: `${propswidth}`,
          height: `${propsheight}`,
          fontsize: `${fontsize}`,
          backgroundColor: `${background}`,
          color: `${defaultcolor}`,
          gap: "10px",
          padding: "10px 26px",
          margin: "10px 0",
          borderRadius: `${propsborderradius}`,
          "&:hover": {
            background: `${hoverbackgroundcolor}`,
          },
          "&:active": {
            background: `${activebackgroundcolor}`,
          },
          "&:disabled": {
            color: `${disabledcolor}`,
          },
        };
      case "outlined":
        return {
          width: `${propswidth}`,
          height: `${propsheight}`,
          gap: "10px",
          padding: "10px 26px",
          backgroundColor: "none",
          fontsize: `${fontsize}`,
          border,
          borderColor: `${outlinedbordercolor}`,
          color: `${defaultcolor}`,
          borderRadius: `${propsborderradius}`,
          "&:hover": {
            background: `${hoverbackgroundcolor}`,
            borderColor: `${outlinedbordercolor}`,
            color: `${outlinedhoverandactivetextcolor}`,
          },
          "&:active": {
            background: `${activebackgroundcolor}`,
            borderColor: `${outlinedbordercolor}`,
            color: `${outlinedhoverandactivetextcolor}`,
          },
          "&:disabled": {
            color: `${disabledcolor}`,
            background: "none",
          },
        };
      default:
        return {
          borderRadius: `${propsborderradius}`,
          width: `${propswidth}`,
          height: `${propsheight}`,
          backgroundColor: "none",
          color: `${defaultcolor}`,
          fontSize: `${fontsize}`,
        };
    }
  }
);
