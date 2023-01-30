import React , { useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const user = useRef();
  return (
    <div className="h-16 px-3 bg-darkBlue1 text-slate-300 w-full flex items-center border-b-2 border-lightGray">
      <div className="flex-grow font-semibold">
        <Link to="/">Comeetium</Link>
      </div>
     
    </div>
  );
};

export default Header;
