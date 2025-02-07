import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import NotFound from "./NotFound";
import "./App.css";
import DefaultPage from "./DefaultPage";

const router = createBrowserRouter([
  {
    path: "/navigationinheader/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DefaultPage />,
      },
      {
        path: "first",
        element: <FirstPage />,
      },
      {
        path: "second",
        element: <SecondPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      }
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
