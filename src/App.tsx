import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RouterLayout from "./Route/RouterLayout";

import Header from "./components/Header";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouterLayout />,
      children: [{ path: "/", element: <Header /> }, { path: "" }],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
