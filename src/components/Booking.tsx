/* eslint-disable @typescript-eslint/no-explicit-any */
import BookingForm from "./BookingForm";

interface BookingProps {
  availableTime: string[];
  dispatch: React.Dispatch<any>;
  submitForm: (formData: any) => void;
}

const Booking: React.FC<BookingProps> = ({
  availableTime,
  dispatch,
  submitForm,
}) => {
  return (
    <div>
      <BookingForm
        availableTime={availableTime}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </div>
  );
};

export default Booking;
