
import { Link } from "react-router-dom";
import  "./button.css"
import { useEffect } from "react";
export default function Button(){
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
    return (
      <>
        <Link to="/about" class="gt-btn  gt-btn-icon">
          Read More
        </Link>
      </>
    );
}

export function ButtonContact() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Link to="/contactpage" className=" response gt-btn gt-btn-icon">
      Contact Us
    </Link>
  );
}


export function Buttonemail() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Link to="/" className="gt-btn gt-btn-icon">
     Submit
    </Link>
  );
}