import Header from "./Navbar";
import { Outlet, useFetcher, useRouteLoaderData } from "react-router-dom";
import SideBar from "./SideBar";
import Footer from "./Footer";
import ProgressBar from "../../UI/ProgressBar";

export function Layout() {
  const user = useRouteLoaderData("root");
  console.log(user, "Layoutuser");
  const fetcher = useFetcher();
  const isLoggingOut = fetcher.formData != null;
  console.log(isLoggingOut, "isLoggingOut");
  const handleLogout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_role");
    localStorage.removeItem("userDetail");
    window.location.href = "/";
  };
  return (
    <>
      <div className=" flex flex-col min-h-screen">
      {user.user.loggedIn && <Header  handleLogout={handleLogout} isLoggingOut={isLoggingOut} />}
      <div className="flex flex-1">
        <aside className="w-1/8 ">
          {user.user.loggedIn && <SideBar handleLogout={handleLogout} isLoggingOut={isLoggingOut} />}
        </aside>
        
        <main className="flex-1 px-2 pb-2">

          <Outlet />
        </main>
      </div>
      
      {user.user.loggedIn && <Footer />}
    </div>
    </>
  );
}
export function AuthStatus() {
  const { user } = useRouteLoaderData("root");
  console.log(user, "authstatuss");
  const fetcher = useFetcher();

  if (!user || !user.loggedIn) {
    return <p>You are not logged in.</p>;
  }

  const isLoggingOut = fetcher.formData != null;
  console.log(isLoggingOut, "chekdlauthisloogingout");
  return (
    <div>
      <p>Welcome {user.user}!</p>
      <fetcher.Form method="post" action="/logout">
        <button type="submit" disabled={isLoggingOut}>
          {isLoggingOut ? "Signing out..." : "Sign out"}
        </button>
      </fetcher.Form>
    </div>
  );
}
