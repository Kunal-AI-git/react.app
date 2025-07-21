import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import UserList from "../components/userTable"; // This is your table component

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <UserList />,
      },
    ],
  },
]);
