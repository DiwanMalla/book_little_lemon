import React from "react";
import { useNavigate } from "react-router-dom";
import Booking from "./Booking";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";

interface HomeProps {
  availableTime: string[];
  dispatch: React.Dispatch<any>;
  submitForm: (formData: any) => void;
}

const Home: React.FC<HomeProps> = ({ availableTime, dispatch, submitForm }) => {
  const navigate = useNavigate();

  const handleFormSubmit = (formData: any) => {
    if (submitForm(formData)) {
      navigate("/confirmed");
    }
  };

  return (
    <div>
      <Header />
      <Booking
        availableTime={availableTime}
        dispatch={dispatch}
        submitForm={handleFormSubmit}
      />
      <Menu />
      <Footer />
    </div>
  );
};

export default Home;
