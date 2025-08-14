
import { Link } from "react-router-dom";
import bg from "../images/bgstatick.jpg";

export default function BGfixed({ title, current }) {
    return (
      // <section className="bg-gradient-to-br from-[#234e3b]   via-[#dfb47e] to-[#3d7355] text-white py-32">
      <section
        className="relative py-32 text-white"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(255, 255, 255, 0.3), rgba(35, 78, 59, 0.4)), url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "36vh",
        }}
      >
        <div className="px-6 mx-auto mt-0 text-center -w-7xl">
          <h1 className="mb-3 text-3xl font-bold tracking-wide md:text-5xl">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-[#fffefc] font-medium">
            <Link to="/" className="text-[#ffffff] font-bold">
              Home -
            </Link>
            <Link to="/about" className="text-[#2a3b08] font-bold">
              - {current}
            </Link>
          </p>
        </div>

      </section>
    );

}