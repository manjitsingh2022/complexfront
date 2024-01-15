import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import { Layout } from "./compoents/Layout";
import { LoginPage, SignupPage} from "./compoents/pages/index";
import ErrorPage from "./compoents/pages/404ErrorPage";
import { useSelector } from "react-redux";
import Loading from "./compoents/Layout/Loading";
import { Home } from "./compoents/pages/home";
import { Admin } from "./compoents/pages/admin";
import { CreateUser } from "./compoents/pages/admin/users";


export default function App() {
  const user  = useSelector((state) => state.authentication);
  const router = createBrowserRouter([
    {
      id: "root",
      path: "/",
      loader() {
        return { user: user };
      },
      Component: Layout,
  
      children: [
        {
          index: true,
          loader: protectedLoader,
          Component: Home,
        },
        {
          path: "login",
          Component: LoginPage,
        },
        {
          path: "register",
          Component: SignupPage,
        },
        // {
        //   path: "/user",
        //   loader: protectedLoader,
        //   Component: CreateUser,
        //   children: [
        //     {
        //       // path: "/create",
        //       // loader: protectedLoader,
        //       // Component: CreateUser,
        //     },
        //     {
        //       // path: "/:id/delete/",
        //       // loader: protectedLoader,
        //       // Component: DeleteUser,
        //     },
        //     // Add more children routes as needed
        //   ],
        // },
        {
          path: "protected",
          loader: protectedLoader,
          Component: Admin,
        },
        {
          path: "user",
          loader: protectedLoader,
            Component: CreateUser,

        },
      ],
    },
   
    {
      path: "*",
      Component: ErrorPage,

    },
  ]);
  
  return (
    <RouterProvider router={router} fallbackElement={<Loading />} />
  );
}



function protectedLoader({ request }) {
  const token = localStorage.getItem("token");
  if (token) {
    return null;
  } else {
    let params = new URLSearchParams();
    params.set("from", new URL(request.url).pathname);
    return redirect("/login?" + params.toString());
  }
}








