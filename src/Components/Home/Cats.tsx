import { useEffect } from "react";
import { getCats } from "./cats.action";
import { ICatProps } from "../types";
import { Link } from "react-router-dom";
import CatsGrid from "./CatsGrid";

function Cats(props: ICatProps) {
  useEffect(() => {
    props.dispatch(getCats());
  }, []);
  return (
    <div className="container mt-3 mb-3">
      <h1>Welcome to Cat's World</h1>
      <Link to="/upload">
        <button className="btn btn-primary mb-3">Upload Cat Image</button>
      </Link>
      <CatsGrid {...props} />
    </div>
  );
}

export default Cats;
