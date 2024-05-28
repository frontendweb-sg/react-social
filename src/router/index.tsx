import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
/**
 * Global routes
 */
export const router = createBrowserRouter([
  {
    path: "/",
    async lazy() {
      const component = await import("../modules/auth");
      return { Component: component.default };
    },
    children: [
      {
        index: true,
        action: (args) => {
          console.log(args);
          return {};
        },
        async lazy() {
          const component = await import("../modules/auth/pages/signin");
          return { Component: component.default };
        },
      },
      {
        path: "signup",
        async lazy() {
          let component = await import("../modules/auth/pages/signup");
          return { Component: component.default };
        },
      },
      {
        path: "forgot-password",
        async lazy() {
          let component = await import("../modules/auth/pages/forgot-password");
          return { Component: component.default };
        },
      },
    ],
    errorElement: <NotFound />,
  },
]);
