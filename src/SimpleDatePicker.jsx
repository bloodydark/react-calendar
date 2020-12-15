import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";
import { subDays } from "date-fns";

const SimpleDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const now = new Date();
  const yesterday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 1
  );
  console.log(yesterday);

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      highlightDates={[yesterday]}
      placeholderText="This highlights a week ago and a week from today"
    />
  );
};

export default SimpleDatePicker;