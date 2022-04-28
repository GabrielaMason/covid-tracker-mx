import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

function DateSelection() {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    return (
        <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
            setDateRange(update);
        }}
        minDate={new Date ("2020", "02", "26")}
        maxDate={new Date ("2022", "04", "22")}
        isClearable={true}
        placeholderText="Haz clic aquí para las fechas."
        />
    );
}

export default DateSelection