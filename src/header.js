import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const OrangeCheckbox = withStyles({
  root: {
    color: orange[500],
    "&$checked": {
      color: orange[500]
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

export default function CheckboxLabels() {
  return <FormControlLabel control={<OrangeCheckbox />} label="Custom color" />;
}
