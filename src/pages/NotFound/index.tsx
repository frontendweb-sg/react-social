import { useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();
  console.error("error", error);
  return (
    <>
      <h1>Not found {JSON.stringify(error)}</h1>
    </>
  );
}
