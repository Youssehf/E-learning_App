import { Home } from "../Pages/Home";
import Error404 from "../Pages/Error404";  

export default function useRoutes() {
  const route = [
    {
      name: "Home",
      path: "/",
      element: <Home />,
      role: 0,
    },
    {
      path: "*",
      element: <Error404 />,
      role: 0,
    },
  ];
  return [route];
}
