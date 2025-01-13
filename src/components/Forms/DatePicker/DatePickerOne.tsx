import flatpickr from "flatpickr";
import { useEffect, useRef } from "react";

type DatePickerOneProps = {
  onChange: (date: Date | null) => void;
};

const DatePickerOne: React.FC<DatePickerOneProps> = ({ onChange }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      flatpickr(inputRef.current, {
        mode: "single",
        static: true,
        dateFormat: "M j, Y",
        onChange: (selectedDates) => {
          const selectedDate = selectedDates[0] || null;
          onChange(selectedDate);
        },
      });
    }
  }, [onChange]);

  return (
    <div>
      <div className="relative">
        <input
          ref={inputRef}
          className="form-datepicker w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          placeholder="mm/dd/yyyy"
        />
      </div>
    </div>
  );
};

export default DatePickerOne;
