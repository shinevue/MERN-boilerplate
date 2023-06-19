import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export const GenderRadio = ({gender, handleChange}) => {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={gender}
        onChange={handleChange}
      >
        <FormControlLabel value="" control={<Radio />} label="All" />
        <FormControlLabel value="f" control={<Radio />} label="Female" />
        <FormControlLabel value="m" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
  );
};
