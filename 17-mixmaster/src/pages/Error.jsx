import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/not-found.svg";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  if (error.status == 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <p>We can't seem to find the page you're looking for</p>
          <Link to="/">back home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3>something went wrong</h3>
      </div>
    </Wrapper>
  );
};
export default Error;
