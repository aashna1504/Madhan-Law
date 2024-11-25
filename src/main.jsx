import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { Suspense } from "react";

import App from "./App.jsx";
import "./index.css";
import Contact from "./assets/Contact.jsx";
import Team from "./assets/Team.jsx";
import Case from "./assets/Case.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Contact",
    element: (
      <Suspense fallback={<div> Loading ... </div>}>
        <Contact />
      </Suspense>
    ),
  },
  {
    path: "/Team",
    element: (
      <Suspense fallback={<div> Loading ... </div>}>
        <Team />
      </Suspense>
    ),
  },
  {
    path: "/Case",
    element: (
      <Suspense fallback={<div> Loading ... </div>}>
        <Case />
      </Suspense>
    ),
  },
  {
    path: "/App",
    element: (
      <Suspense fallback={<div> Loading ... </div>}>
        <Case />
      </Suspense>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
