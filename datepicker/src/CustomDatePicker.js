import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
 
const DatePicker = ({ selected, onChange}) => {

  // const [selected, setSelected] = useState(new Date());

  const handleChange = (date) => {
    onChange(date);
  }

  return (
    <ReactDatePicker
      selected={selected}
      onChange={handleChange}
      showTimeInput
     />
  );
};

export default DatePicker;