import { useRouteError } from "react-router-dom";

const ErrorOpps = () => {
  let err = useRouteError();

  return (
    <>
      <h1>Opps</h1>
      <h2>Something went wrong</h2>
      <h2>{err.data}</h2>
    </>
  );
};

export default ErrorOpps;
