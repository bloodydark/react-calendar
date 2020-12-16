import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";
import { subDays } from "date-fns";

const SimpleDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const now = new Date();
  const array = [];
  const yesterday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 1
  );
  array.push(yesterday);
  // console.log(array);

  const weekAgo = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 6
  );
  console.log(weekAgo);
  array.push(weekAgo);
  console.log(array);
  // const test = [
  //   { today: new Date() },
  //   {
  //     yesterday: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1),
  //   },
  // ];
  // console.log(...test);

  const display = () => {
    alert("Hey!");
  };
  // console.log(startDate);

  return (
    <DatePicker
      selected={startDate}
      //   onChange={(date) => setStartDate(date)}
      //   onChange={display}
      onChange={(date) => setStartDate(date)}
      highlightDates={array}
      placeholderText="This highlights a week ago and a week from today"
      inline
    />
  );
};

export default SimpleDatePicker;
