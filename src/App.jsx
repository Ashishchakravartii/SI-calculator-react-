import React, { useEffect, useState } from "react";
import "./app.css";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const App = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [add, setadd] = useState(0);

  const calSum = () => {
    const res = (parseInt(num1) * parseInt(num2) * parseInt(num3)) / 100;
    setadd(res);
  };

  const handleClick = (e) => {
    setNum1(0);
    setNum2(0);
    setNum3(0);
    setadd(0);
  };

  useEffect(() => {
    calSum();
  }, [setNum1, setNum2, setNum3, calSum]);

  return (
    <div className="app">
      <div className="container">
        <div className="heading_text">
          <h1 className="heading_one">Simple Calculator</h1>
          <p className="heading_two">Calculate Your Simple Intrest Easily</p>
        </div>
        <div className="total_amount_card">
          <div className="card_text ">
            <h3 className="total_amount_heading">₹ {add} </h3>
            <p className="total_amount_para">Total simple interest</p>
          </div>
        </div>
        <form onSubmit={calSum}>
          <div className="input_area">
            <div className="input_field">
              <TextField
                type="number"
                value={num1 || ""}
                onChange={(e) => {
                  setNum1(e.target.value);
                }}
                id="outlined-basic"
                label="₹ Principal amount"
                variant="outlined"
              />
            </div>
            <div className="input_field">
              <TextField
                type="number"
                value={num2 || ""}
                onChange={(e) => {
                  setNum2(e.target.value);
                }}
                id="outlined-basic"
                label="Rate of interest (p.a) %"
                variant="outlined"
              />
            </div>
            <div className="input_field">
              <TextField
                type="number"
                value={num3 || ""}
                onChange={(e) => {
                  setNum3(e.target.value);
                }}
                id="outlined-basic"
                label="Time period ( Yr )"
                variant="outlined"
              />
            </div>
          </div>
          <div className="button_collection">
            <Stack spacing={2} direction="row">
              <Button
                type="submit"
                className="btn_one"
                style={{ backgroundColor: "black" }}
                variant="contained"
              >
                Calculate
              </Button>
              <Button
                className="btn_one"
                onClick={handleClick}
                variant="outlined"
              >
                Reset
              </Button>
            </Stack>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
