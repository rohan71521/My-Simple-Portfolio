import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./assets/Components/root/Root";
import Home from "./assets/Components/Home/Home";

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
        element:<div>hello</div>,
      },
      {
        path:"/services",
        element:<div>hello</div>,
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
        element:<div>hello</div>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
