import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./assets/Components/root/Root";
import Home from "./assets/Components/Home/Home";
import Services from "./assets/Components/Services/Services";
import About from "./assets/Components/About/About";
import Contact from "./assets/Components/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/about",
        element:<About></About>,
      },
      {
        path:"/services",
        element:<Services></Services>,
      },
      {
        path:"/portfolio",
        element:<div>hello</div>,
      },
      {
        path:"/pricing",
        element:<div>hello</div>,
      },
      {
        path:"/contact",
        element:<Contact></Contact>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
