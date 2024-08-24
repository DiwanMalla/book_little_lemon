import React, { useState } from "react";

interface BookingFormProps {
  availableTime: string[];
  dispatch: React.Dispatch<any>;
  submitForm: (formData: any) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({
  availableTime,
  dispatch,
  submitForm,
}) => {
  const [date, setDate] = useState<string>("");
  const [times, setTimes] = useState<string>("");
  const [guests, setGuests] = useState<string>("");
  const [occasion, setOccasion] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitForm({ date, times, guests, occasion });
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            {/* Date selection */}
            <div className="flex gap-3">
              <label>Choose Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            {/* Time selection */}
            <div className="flex gap-3">
              <label>Choose Time</label>
              <select value={times} onChange={(e) => setTimes(e.target.value)}>
                <option value="">Select a time</option>
                {availableTime.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
            {/* Number of guests */}
            <div className="flex gap-3">
              <label>Number of guests:</label>
              <input
                type="number"
                min="1"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>
            {/* Occasion field */}
            <div className="flex gap-3">
              <label>Occasion:</label>
              <select
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option value="">Select an occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </select>
            </div>
            {/* Submit button */}
            <div className="flex gap-3">
              <input type="submit" value="Make Your Reservation" />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
