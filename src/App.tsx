import { RouterProvider } from "react-router-dom";
import { router } from "./router";

/**
 * Root component
 * @returns
 */
function App() {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
