import { Link } from "react-router-dom";
import banner from "/restauranfood.jpg";
const Header = () => {
  return (
    <header className="bg-lime-900 px-[10%] py-[8%]">
      <section className="flex flex-col gap-5 md:relative lg:relative">
        <div className="flex flex-col gap-3 text-white">
          <h2 className="text-3xl text-[40px]" style={{ color: "#F4CE14" }}>
            Little Lemon
          </h2>
          <h3 className="text-[25px]">Chicago</h3>
          <p className="text-[20px] lg:max-w-[520px] md:max-w-[320px] text-justify leading-normal mb-[30px]">
            We are a family owned Mediterraneran restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="">
            <button
              className="p-2 rounded-lg text-black font-bold"
              style={{ background: "#F4CE14" }}
            >
              Reserve Table
            </button>
          </Link>
        </div>
        <div className="lg:absolute md:absolute right-[-3%] top-[5%] rounded-lg flex justify-center">
          <img
            src={banner}
            className="h-[400px] w-[350px] rounded-lg border-2 border-black"
          />
        </div>
      </section>
    </header>
  );
};

export default Header;
