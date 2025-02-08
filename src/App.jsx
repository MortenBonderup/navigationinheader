import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import NotFound from "./pages/NotFound";
import "./App.css";
import DefaultPage from "./pages/DefaultPage";

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
