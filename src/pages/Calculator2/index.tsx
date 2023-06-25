import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, MenuItem, TextField } from "@mui/material";

interface FormValues {
  f: string;
  fn: number;
  r: number;
}

const options = [
  {
    label: "O,5 – koło: stal // droga: stal",
    value: 0.5,
  },
  {
    label: "O,15 – koło: guma // droga: beton",
    value: 0.15,
  },
  {
    label: "4,5 – koło: guma // droga: asfalt",
    value: 4.5,
  },
];

const Calculator2 = () => {
  const { register, handleSubmit, reset, control } = useForm<FormValues>();
  const [result, setResult] = useState<string>();

  const onSubmit = (data: FormValues) => {
    const { f, fn, r } = data;
    const calculation = (Number(f) * fn) / r;
    const message =
      calculation < 0 || calculation === Infinity
        ? "Błędne dane!"
        : `Ft = ${calculation}[N]`;

    setResult(message);
  };

  const onReset = () => {
    reset();
    setResult(undefined);
  };

  return (
    <div className="form-wrapper">
      <h1>Kalkulator</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        onReset={onReset}
        className="form-container"
      >
        <Controller
          control={control}
          defaultValue={""}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              select
              type="number"
              label="f - wsp. tarcia tocznego"
              value={value}
              onBlur={onBlur}
              onChange={onChange}
            >
              {options.map((option) => (
                <MenuItem key={option.label} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          )}
          name="f"
        />
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
        <Button type="reset" variant="contained" color="inherit">
          Reset
        </Button>
      </form>
      {result && <h1>{result}</h1>}
    </div>
  );
};

export default Calculator2;
