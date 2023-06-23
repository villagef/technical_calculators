import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import "./style.css";

interface FormValues {
  f: string;
  fn: number;
  r: number;
}

const Calculator1 = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const [result, setResult] = useState<number | null>();

  const onSubmit = (data: FormValues) => {
    const { f, fn, r } = data;
    const x = (Number(f) * fn) / r;
    setResult(Number(x));
  };

  return (
    <div className="form-wrapper">
      <h1>Kalkulator</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <FormControl>
          <InputLabel id="dropdown-label">f - wsp. tarcia tocznego</InputLabel>
          <Select
            labelId="dropdown-label"
            id="f"
            label="f - wsp. tarcia tocznego"
            {...register("f", { required: true })}
          >
            <MenuItem value={0.5}>O,5 – koło: stal // droga: stal</MenuItem>
            <MenuItem value={0.15}>O,15 – koło: guma // droga: beton</MenuItem>
            <MenuItem value={4.5}>4,5 – koło: guma // droga: asfalt</MenuItem>
          </Select>
        </FormControl>

        <TextField
          type="number"
          label="Fn - siła nacisku[N]"
          {...register("fn", { required: true })}
        />

        <TextField
          type="number"
          label="r - promień koła[mm]"
          {...register("r", { required: true })}
        />

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
      {result && <h1>Ft = {result}[N]</h1>}
    </div>
  );
};

export default Calculator1;
