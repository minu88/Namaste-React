import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="errorPage">
      <h1>Ooppsss!!!😟</h1>
      <h3>Entered a wrong page </h3>
      <h4>
        {err.status}: {err.statusText}
      </h4>
    </div>
  );
};

export default Error;
