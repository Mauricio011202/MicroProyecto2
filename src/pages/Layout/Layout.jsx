import { Navbar } from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { UserContextProvider } from "../../contexts/UserContex";

export function Layout() {
  return (
    <main>
        <UserContextProvider>
          <Navbar/>
          <section className="body">
            <Outlet />
          </section>
        </UserContextProvider>
        
        

    </main>
  )
}
